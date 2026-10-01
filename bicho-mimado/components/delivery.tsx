import { DeliveryRoute } from "@/components/delivery-route";
import { WhatsAppIcon } from "@/components/icons";
import { delay } from "@/lib/css";
import { BUSINESS, MESSAGES, waLink } from "@/lib/site";

/**
 * Releitura editorial do post "A ração do seu pet acabou? Sem problemas!".
 * A pergunta é o título; a rota desenhada da loja até a casa explica o resto.
 */
export function Delivery() {
  return (
    <section id="delivery" aria-labelledby="delivery-title" className="bg-paper py-20 sm:py-24 lg:py-36">
      <div className="wrap">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h2 id="delivery-title" className="min-w-0 lg:flex-none">
            <span className="eyebrow mb-5 block text-brand-ink" data-reveal>
              Delivery
            </span>
            <span
              className="block font-display text-[clamp(1.6rem,4.4vw,3.1rem)] font-extrabold leading-none tracking-[-0.035em] text-navy"
              data-reveal
            >
              A ração do seu pet
            </span>
            <span
              className="poster-type -mt-1 block pb-2 text-[clamp(3.9rem,17.5vw,12.5rem)] !leading-[0.86] text-brand"
              data-reveal="mask"
            >
              <span className="pr-[0.06em]">acabou?</span>
            </span>
          </h2>

          <div className="lg:min-w-0 lg:shrink lg:pb-6" data-reveal style={delay(0.15)}>
            <p className="font-display text-[1.625rem] font-extrabold leading-tight tracking-[-0.03em] text-navy">
              Não precisa sair de casa.
            </p>
            <a
              href={waLink(MESSAGES.delivery)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-navy mt-6 w-full sm:w-auto"
            >
              <WhatsAppIcon />
              Pedir ração agora
            </a>
          </div>
        </div>

        <div className="mt-14 lg:mt-20" data-reveal>
          <DeliveryRoute />
          <div className="mt-3 flex items-start justify-between gap-6 text-sm font-semibold text-navy">
            <p>
              Bicho Mimado <span className="font-normal text-muted">· {BUSINESS.district}</span>
            </p>
            <p className="text-right">Sua casa</p>
          </div>
        </div>
      </div>
    </section>
  );
}
