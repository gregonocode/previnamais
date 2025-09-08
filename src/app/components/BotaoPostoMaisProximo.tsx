"use client";

import { useCallback } from "react";

interface NavigatorStandalone extends Navigator {
  standalone?: boolean; // flag do Safari iOS para PWA
}

function isStandalonePWA() {
  const nav = navigator as NavigatorStandalone;
  return (
    window.matchMedia?.("(display-mode: standalone)")?.matches ||
    nav.standalone === true
  );
}

function isIOS() {
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

/**
 * Abre uma URL com alta compatibilidade:
 * - Em PWA mobile: cria <a target="_blank"> e clica programaticamente.
 * - Em outros casos: usa location.href.
 */
function openExternal(url: string) {
  const standalone = isStandalonePWA();
  const mobile = isAndroid() || isIOS();

  if (standalone && mobile) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener,noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } else {
    window.location.href = url;
  }
}

/** Tenta uma sequência de URLs com pequenos atrasos entre elas (para fallbacks). */
function tryUrlsInOrder(urls: string[], delayMs = 450) {
  // Dispara a primeira imediatamente
  openExternal(urls[0]);
  // Dispara os fallbacks com pequenos atrasos (se o SO ignorar a 1ª)
  for (let i = 1; i < urls.length; i++) {
    setTimeout(() => openExternal(urls[i]), delayMs * i);
  }
}

export default function BotaoPostoMaisProximo() {
  const onClick = useCallback(() => {
    const consent = confirm(
      "Para mostrar os postos de saúde próximos, precisamos acessar sua localização. " +
      "Sua localização não será armazenada. Deseja permitir?"
    );
    if (!consent) return;

    const termo = "posto de saúde";
    const termoEnc = encodeURIComponent(termo);

    const webGeneric = () =>
      openExternal(`https://www.google.com/maps/search/?api=1&query=${termoEnc}+perto+de+mim`);

    if (!("geolocation" in navigator)) {
      webGeneric();
      return;
    }

    // Se o getCurrentPosition demorar, ainda tentamos o fallback genérico depois de X ms
    const fallbackTimer = window.setTimeout(webGeneric, 5000);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        clearTimeout(fallbackTimer);
        const { latitude, longitude } = pos.coords;

        if (isAndroid()) {
          // Ordem sugerida Android: Intent (app) -> geo: (app) -> Web
          const urls = [
            // força app do Google Maps
            `intent://maps.google.com/maps/search/${termoEnc}/@${latitude},${longitude},15z#Intent;scheme=https;package=com.google.android.apps.maps;end`,
            // geo: (app de mapas padrão)
            `geo:${latitude},${longitude}?q=${encodeURIComponent(termo)}`,
            // Web
            `https://www.google.com/maps/search/${termoEnc}/@${latitude},${longitude},15z`,
          ];
          tryUrlsInOrder(urls);
          return;
        }

        if (isIOS()) {
          // Ordem sugerida iOS: Google Maps app -> Apple Maps -> Web
          const urls = [
            // Google Maps app (se instalado)
            `comgooglemaps://?q=${termoEnc}&center=${latitude},${longitude}&zoom=15`,
            // Apple Maps
            `maps://?ll=${latitude},${longitude}&q=${termoEnc}`,
            // Apple Maps (http) – mais permissivo
            `http://maps.apple.com/?ll=${latitude},${longitude}&q=${termoEnc}`,
            // Web
            `https://www.google.com/maps/search/${termoEnc}/@${latitude},${longitude},15z`,
          ];
          tryUrlsInOrder(urls);
          return;
        }

        // Desktop / outros
        openExternal(`https://www.google.com/maps/search/${termoEnc}/@${latitude},${longitude},15z`);
      },
      () => {
        clearTimeout(fallbackTimer);
        webGeneric();
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
  }, []);

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded bg-[#25E8BB] text-white hover:bg-[#1ABA95] transition"
      aria-label="Mostrar postos de saúde próximos"
      title="Mostrar postos de saúde próximos"
    >
      Mostrar postos de saúde próximos
    </button>
  );
}
