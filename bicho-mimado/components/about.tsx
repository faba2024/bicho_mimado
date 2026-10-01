import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import { delay } from "@/lib/css";
import { BUSINESS } from "@/lib/site";

/** Sobre: as fotos reais da fachada fazem o trabalho; o texto só diz onde a loja está. */
export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="overflow-hidden bg-paper py-20 sm:py-24 lg:py-36">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="relative order-2 lg:order-1 lg:col-span-7" data-reveal>
          <div className="relative w-[78%] max-w-[30rem] sm:w-[62%] lg:w-[72%]">
            <div className="relative aspect-[294/411] overflow-hidden rounded-[22px] bg-sky">
              <Image
                src="/images/loja-fachada.jpg"
                alt="Atendente com um pastor-alemão na entrada da loja Bicho Mimado, com a placa azul da fachada ao fundo"
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 78vw"
                className="object-cover"
              />
            </div>
          </div>
          <div
            className="absolute bottom-[-8%] right-0 w-[46%] max-w-[17rem] sm:right-[8%] lg:right-[2%]"
            data-reveal
            style={delay(0.2)}
          >
            <div className="relative aspect-[255/328] overflow-hidden rounded-[18px] border-[6px] border-paper bg-sky">
              <Image
                src="/images/mascote-fachada.jpg"
                alt="Mascote na calçada em frente à loja Bicho Mimado"
                fill
                sizes="(min-width: 1024px) 240px, 46vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5">
          <p className="eyebrow text-brand-ink" data-reveal>
            Sobre
          </p>
          <h2 id="sobre-title" className="mt-5" data-reveal>
            <span className="sr-only">Bicho Mimado</span>
            <Image
              src="/images/logo-blue.png"
              alt=""
              width={731}
              height={258}
              sizes="(min-width: 1024px) 340px, 70vw"
              className="h-auto w-[min(70vw,340px)]"
            />
          </h2>
          <p
            className="mt-8 max-w-[22ch] font-display text-[clamp(1.5rem,3vw,2.125rem)] font-bold leading-[1.2] tracking-[-0.03em] text-navy"
            data-reveal
            style={delay(0.1)}
          >
            Nossa loja fica na {BUSINESS.district}. Passe para conhecer.
          </p>
          <a href="#localizacao" className="link-line mt-8 text-brand-ink" data-reveal style={delay(0.15)}>
            Ver no mapa
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
