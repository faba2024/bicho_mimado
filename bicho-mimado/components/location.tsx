import { PinIcon } from "@/components/icons";
import { delay } from "@/lib/css";
import { BUSINESS, MAPS_DIRECTIONS_URL, MAPS_EMBED_URL } from "@/lib/site";

/**
 * Localização: a placa de rua azul de Vitória da Conquista como assinatura,
 * com o mapa incorporado ao lado.
 */
export function Location() {
  return (
    <section id="localizacao" aria-labelledby="localizacao-title" className="bg-paper py-20 sm:py-24 lg:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2
            id="localizacao-title"
            className="poster-type max-w-[12ch] text-[clamp(2.3rem,6vw,4.25rem)] text-navy"
            data-reveal
          >
            Estamos em Vitória da Conquista.
          </h2>

          {/* Placa de rua */}
          <div className="mt-10 max-w-[25rem]" data-reveal style={delay(0.1)}>
            <div className="blue-field rounded-[10px] p-[7px] shadow-[0_18px_40px_-26px_rgb(11_58_99/0.6)]">
              <div className="rounded-[6px] border-2 border-white px-5 py-4 text-center">
                <p className="font-display text-[clamp(1.35rem,5.4vw,1.75rem)] font-extrabold uppercase leading-tight tracking-[-0.01em]">
                  {BUSINESS.plateStreet}
                </p>
                <p className="mt-1 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white">
                  {BUSINESS.district}
                </p>
              </div>
            </div>
          </div>

          <address className="mt-6 max-w-[25rem] text-sm not-italic text-muted" data-reveal style={delay(0.15)}>
            {BUSINESS.street}, {BUSINESS.district} — {BUSINESS.city} - {BUSINESS.state}, {BUSINESS.zip}
          </address>

          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-blue mt-8 w-full sm:w-auto"
            data-reveal
          >
            <PinIcon />
            Como chegar
          </a>
        </div>

        <div className="lg:col-span-7" data-reveal style={delay(0.1)}>
          <div className="relative h-[340px] overflow-hidden rounded-[22px] border border-line bg-sky sm:h-[420px] lg:h-full lg:min-h-[520px]">
            {/* Visível apenas se o mapa não carregar (bloqueio de rede, extensões etc.) */}
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 grid place-content-center justify-items-center gap-3 p-6 text-center text-navy"
            >
              <PinIcon className="h-8 w-8 text-brand-ink" />
              <span className="font-semibold">Abrir localização no Google Maps</span>
            </a>
            <iframe
              src={MAPS_EMBED_URL}
              title={`Mapa: Bicho Mimado, ${BUSINESS.street}, ${BUSINESS.district}, ${BUSINESS.city}`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
