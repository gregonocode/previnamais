"use client";

import { useCallback } from "react";

interface NavigatorStandalone extends Navigator {
  standalone?: boolean; // Safari iOS expõe essa flag em PWAs
}

export default function BotaoPostoMaisProximo() {
  const abrirLista = useCallback(() => {
    const consent = confirm(
      "Para mostrar os postos de saúde próximos, precisamos acessar sua localização. " +
      "Sua localização não será armazenada. Deseja permitir?"
    );
    if (!consent) return;

    const termo = "posto de saúde";
    const termoEnc = encodeURIComponent(termo);

    // Detecta PWA (standalone)
    const nav = navigator as NavigatorStandalone;
    const isStandalone =
      window.matchMedia?.("(display-mode: standalone)")?.matches ||
      nav.standalone === true;

    // Plataforma
    const ua = navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);

    // Abrir link (em PWA, preferir nova aba)
    const openExternal = (url: string) => {
      if (isStandalone) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = url;
      }
    };

    const webFallback = () =>
      openExternal(`https://www.google.com/maps/search/?api=1&query=${termoEnc}+perto+de+mim`);

    if (!("geolocation" in navigator)) {
      webFallback();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        if (isAndroid) {
          const geoUrl = `geo:${latitude},${longitude}?q=${encodeURIComponent(termo)}`;
          openExternal(geoUrl);

          // Plano B: se não abrir, cai pro web
          setTimeout(() => {
            openExternal(`https://www.google.com/maps/search/${termoEnc}/@${latitude},${longitude},15z`);
          }, 300);
          return;
        }

        if (isIOS) {
          const appleUrl = `maps://?ll=${latitude},${longitude}&q=${termoEnc}`;
          openExternal(appleUrl);

          // Plano B
          setTimeout(() => {
            openExternal(`http://maps.apple.com/?ll=${latitude},${longitude}&q=${termoEnc}`);
          }, 300);
          return;
        }

        // Desktop / outros
        openExternal(`https://www.google.com/maps/search/${termoEnc}/@${latitude},${longitude},15z`);
      },
      () => {
        webFallback();
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
  }, []);

  return (
    <button
      onClick={abrirLista}
      className="px-4 py-2 rounded bg-[#25E8BB] text-white hover:bg-[#1ABA95] transition"
      aria-label="Mostrar postos de saúde próximos"
      title="Mostrar postos de saúde próximos"
    >
      Mostrar postos de saúde próximos
    </button>
  );
}
