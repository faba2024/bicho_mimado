import { CopyNumber } from "@/components/copy-number";
import { DogLine } from "@/components/dog-line";
import { WhatsAppIcon } from "@/components/icons";
import { delay } from "@/lib/css";
import { BUSINESS, MESSAGES, waLink } from "@/lib/site";

/** Conversão: o número em escala de cartaz, como no "Fale com a gente" dos posts. */
export function WhatsAppCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="blue-field on-blue overflow-hidden py-20 sm:py-24 lg:py-32">
      <DogLine
        id="cta-dog"
        className="pointer-events-none absolute -bottom-[6%] right-[-14%] w-[70%] max-w-[560px] text-white/25 sm:right-[-4%] sm:w-[46%]"
      />
      <div className="wrap relative">
        <p className="eyebrow flex items-center gap-3 text-white" data-reveal>
          <span aria-hidden className="h-px w-8 bg-white/70" />
          WhatsApp
        </p>
        <h2
          id="contato-title"
          className="poster-type mt-5 max-w-[16ch] text-[clamp(2.3rem,6.4vw,4.75rem)]"
          data-reveal
        >
          Precisou de alguma coisa para o seu pet?
        </h2>
        <div className="mt-10 lg:mt-14" data-reveal style={delay(0.1)}>
          <p className="poster-type select-all whitespace-nowrap text-[clamp(1.75rem,9.6vw,8.5rem)] tabular-nums tracking-[-0.05em]">
            {BUSINESS.phoneDisplay}
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href={waLink(MESSAGES.produto)} target="_blank" rel="noopener noreferrer" className="btn btn-white w-full sm:w-auto">
              <WhatsAppIcon />
              Chamar no WhatsApp
            </a>
            <CopyNumber value={BUSINESS.phoneDisplay} display={BUSINESS.phoneDisplay} />
          </div>
        </div>
      </div>
    </section>
  );
}
