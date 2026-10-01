import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons";
import { delay } from "@/lib/css";
import { BUSINESS, MESSAGES, waLink } from "@/lib/site";

/**
 * Medicamentos: seção escura e curta — título, uma frase, CTA e a foto real.
 * Nenhuma recomendação médica.
 */
export function Medications() {
  return (
    <section
      id="medicamentos"
      aria-labelledby="medicamentos-title"
      className="on-blue relative overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-36"
    >
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="eyebrow text-mist" data-reveal>
            Medicamentos
          </p>
          <h2
            id="medicamentos-title"
            className="poster-type mt-5 max-w-[13ch] text-[clamp(2.4rem,6.6vw,4.5rem)]"
            data-reveal
          >
            Cuidados que fazem diferença.
          </h2>
          <p className="mt-6 max-w-[30rem] text-[1.0625rem] text-white/85" data-reveal style={delay(0.1)}>
            Antipulgas, vermífugos e outros medicamentos de uso veterinário.
          </p>

          <a
            href={waLink(MESSAGES.medicamentos)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-white mt-10 w-full sm:w-auto"
            data-reveal
          >
            <WhatsAppIcon />
            Consultar produto
          </a>
          <p className="mt-5 max-w-[30rem] text-sm text-white/60" data-reveal>
            Uso sempre com orientação do médico-veterinário.
          </p>
        </div>

        <figure className="relative lg:col-span-5" data-reveal style={delay(0.15)}>
          <div className="relative mx-auto aspect-[323/434] max-w-[24rem] overflow-hidden rounded-[22px] bg-navy-deep">
            <Image
              src="/images/equipe-antiparasitarios.jpg"
              alt="Atendente da Bicho Mimado apresentando caixas de antiparasitário em vídeo do Instagram da loja"
              fill
              sizes="(min-width: 1024px) 384px, (min-width: 640px) 60vw, 90vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mx-auto mt-3 max-w-[24rem] text-xs text-white/55">{BUSINESS.instagramHandle}</figcaption>
        </figure>
      </div>
    </section>
  );
}
