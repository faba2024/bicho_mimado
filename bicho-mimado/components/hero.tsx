import { DogLine } from "@/components/dog-line";
import { ArrowIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { LineArt } from "@/components/line-art";
import { cssVars } from "@/lib/css";
import { BUSINESS, MESSAGES, waLink } from "@/lib/site";

const d = (s: number) => cssVars({ "--d": `${s}s` });

/**
 * Hero "cartaz": o campo azul granulado e o cão em traço dos posts da loja,
 * com a placa de contato de borda fina que fecha os materiais da marca.
 */
export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="blue-field on-blue overflow-hidden">
      <div className="wrap relative pb-8 pt-[88px] sm:pt-[104px] lg:pb-12 lg:pt-[150px]">
        {/* Cão em traço — no mobile abre a página; no desktop ocupa a direita */}
        <div className="pointer-events-none relative ml-auto w-[56%] max-w-[280px] sm:w-[40%] lg:absolute lg:right-[3%] lg:top-[112px] lg:w-[35%] lg:max-w-[480px] xl:right-[5%]">
          <DogLine id="hero-dog" draw className="h-auto w-full text-white" />
        </div>

        <div className="relative z-10 mt-6 sm:mt-2 lg:mt-0 lg:max-w-[60%]">
          <p className="eyebrow hero-in flex items-center gap-3 text-white" style={d(0.05)}>
            <span aria-hidden className="h-px w-8 bg-white/70" />
            Pet Shop • Vitória da Conquista
          </p>

          <h1
            id="hero-title"
            className="poster-type hero-in mt-5 text-[clamp(2.5rem,10.2vw,5.25rem)] sm:text-[clamp(2.5rem,8.4vw,5.25rem)] lg:text-[clamp(3.5rem,5.6vw,5.25rem)] text-white sm:mt-6"
            style={d(0.12)}
          >
            Tudo para cuidar <br className="hidden sm:block" />
            de quem faz parte <br className="hidden sm:block" />
            da sua <span className="text-mist">família.</span>
          </h1>

          <p
            className="hero-in mt-6 max-w-[34rem] text-[1.0625rem] leading-relaxed text-white sm:text-lg lg:mt-8"
            style={d(0.22)}
          >
            Rações, medicamentos e acessórios. <br className="hidden sm:block" />
            Peça direto pelo WhatsApp.
          </p>

          <div className="hero-in mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7" style={d(0.3)}>
            <a href={waLink(MESSAGES.geral)} target="_blank" rel="noopener noreferrer" className="btn btn-white w-full sm:w-auto">
              <WhatsAppIcon />
              Pedir pelo WhatsApp
            </a>
            <a href="#produtos" className="link-line text-white">
              Conhecer produtos
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Placa de contato — releitura do rodapé dos posts */}
        <div
          className="plate hero-in relative z-10 mt-12 grid divide-y divide-white/35 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:mt-20"
          style={d(0.42)}
        >
          <a
            href={waLink(MESSAGES.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.07] lg:px-7 lg:py-5"
          >
            <span className="grid h-11 w-11 flex-none place-items-center rounded-full border-[1.5px] border-white/85">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="eyebrow block text-[0.6875rem] text-white">Fale com a gente</span>
              <span className="block font-display text-[1.25rem] font-extrabold leading-tight tracking-[-0.02em]">
                {BUSINESS.phoneDisplay}
              </span>
            </span>
          </a>
          <a
            href="#delivery"
            className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.07] lg:px-7 lg:py-5"
          >
            <LineArt name="moto" className="h-11 w-11 flex-none" strokeWidth={4.2} />
            <span className="min-w-0">
              <span className="eyebrow block text-[0.6875rem] text-white">Delivery</span>
              <span className="block font-semibold leading-snug">Direto na sua casa</span>
            </span>
          </a>
          <a
            href="#localizacao"
            className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.07] lg:px-7 lg:py-5"
          >
            <span className="grid h-11 w-11 flex-none place-items-center rounded-full border-[1.5px] border-white/85">
              <PinIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="eyebrow block text-[0.6875rem] text-white">{BUSINESS.district}</span>
              <span className="block font-semibold leading-snug">{BUSINESS.streetShort}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
