"use client";

import { useCallback } from "react";

type TravelMode = "driving" | "walking" | "transit" | "bicycling"; // mantido se você quiser um botão futuro "Traçar rota"

export default function BotaoPostoMaisProximo({ modo = "walking" }: { modo?: TravelMode }) {
  const abrirMapaComLista = useCallback(() => {
    const consent = confirm(
      "Para mostrar os postos de saúde próximos, precisamos acessar sua localização. " +
      "Sua localização não será armazenada. Deseja permitir?"
    );
    if (!consent) return;

    const termo = "posto de saúde";
    const termoEnc = encodeURIComponent(termo);

    // iOS (inclui iPadOS que se identifica como Mac)
    const ua = navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    // Abrir na MESMA aba
    const go = (url: string) => { window.location.href = url; };

    // Fallback sem GPS: pesquisa genérica
    const fallback = () => go(`https://www.google.com/maps/search/?api=1&query=${termoEnc}+perto+de+mim`);

    if (!("geolocation" in navigator)) {
      fallback();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        if (isIOS) {
          // Apple Maps: lista próxima à coordenada
          const appleSearchUrl = `http://maps.apple.com/?ll=${latitude},${longitude}&q=${termoEnc}`;
          go(appleSearchUrl);
        } else {
          // Google Maps: página de busca com pins, centralizada nas coords
          // O formato /search/<query>/@lat,lng,zoomz abre a lista no mapa
          const zoom = 15; // ajuste se quiser mais/menos perto
          const googleSearchUrl = `https://www.google.com/maps/search/${termoEnc}/@${latitude},${longitude},${zoom}z`;
          go(googleSearchUrl);
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
      onClick={abrirMapaComLista}
      className="px-4 py-2 rounded bg-[#25E8BB] text-white hover:bg-[#1ABA95] transition"
      aria-label="Mostrar postos de saúde próximos"
      title="Mostrar postos de saúde próximos"
    >
      Mostrar postos de saúde próximos
    </button>
  );
}
