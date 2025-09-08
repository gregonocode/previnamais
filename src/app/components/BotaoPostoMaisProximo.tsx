"use client";

import { useCallback } from "react";

type TravelMode = "driving" | "walking" | "transit" | "bicycling";

export default function BotaoPostoMaisProximo({ modo = "walking" }: { modo?: TravelMode }) {
  const abrirRota = useCallback(() => {
    // Aviso (LGPD)
    const consent = confirm(
      "Para encontrar o posto de saúde mais próximo, precisamos acessar sua localização. " +
      "Sua localização não será armazenada. Deseja permitir?"
    );
    if (!consent) return;

    const destinoTexto = "posto de saúde";
    const destino = encodeURIComponent(destinoTexto);

    // Navega na MESMA aba (evita bloqueio e about:blank)
    const go = (url: string) => {
      window.location.href = url;
    };

    const fallback = () =>
      go(`https://www.google.com/maps/search/?api=1&query=${destino}+perto+de+mim`);

    // Detecta iOS (inclui iPadOS que se identifica como Mac)
    const ua = navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (!("geolocation" in navigator)) {
      fallback();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        if (isIOS) {
          // Apple Maps (app nativo do iOS)
          const modoApple =
            modo === "walking" ? "w" :
            modo === "transit"  ? "r" :
            modo === "bicycling" ? "w" : "d";

          const appleUrl = `http://maps.apple.com/?saddr=${latitude},${longitude}&daddr=${destino}&dirflg=${modoApple}`;
          go(appleUrl);
        } else {
          // Google Maps (web/app)
          const googleUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destino}&travelmode=${modo}`;
          go(googleUrl);
        }
      },
      () => {
        fallback();
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
  }, [modo]);

  return (
    <button
      onClick={abrirRota}
      className="px-4 py-2 rounded bg-[#25E8BB] text-white hover:bg-[#1ABA95] transition"
      aria-label="Mostrar rota para o posto de saúde mais próximo"
      title="Encontrar rota até o posto de saúde mais próximo"
    >
      Encontrar posto mais próximo
    </button>
  );
}
