import Image from "next/image";
import { DogLine } from "@/components/dog-line";
import { ArrowUpRightIcon, InstagramIcon } from "@/components/icons";
import { LineArt } from "@/components/line-art";
import { delay } from "@/lib/css";
import { BUSINESS } from "@/lib/site";

/**
 * Instagram em composição de feed: fotos reais da loja e duas peças
 * redesenhadas na linguagem dos posts (sem prints, sem publicações inventadas).
 */
export function Instagram() {
  return (
    <section aria-labelledby="instagram-title" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="instagram-title" data-reveal>
              <span className="block font-display text-[clamp(1.4rem,3vw,2rem)] font-bold tracking-[-0.03em] text-navy">
                Acompanhe a Bicho Mimado
              </span>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="poster-type mt-1 block break-all text-[clamp(2.1rem,8vw,5.25rem)] text-brand transition-colors hover:text-navy"
              >
                {BUSINESS.instagramHandle}
              </a>
            </h2>
          </div>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-navy w-full sm:w-auto sm:self-start lg:mb-3 lg:self-auto"
            data-reveal
          >
            <InstagramIcon />
            Ver Instagram
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16 lg:grid-cols-4" aria-label="Destaques do Instagram">
          {/* Peça de marca */}
          <li className="lg:mt-0" data-reveal>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="blue-field group relative flex aspect-[4/5] flex-col items-center justify-end overflow-hidden rounded-[18px] p-[9%]"
              aria-label="Post de apresentação da Bicho Mimado no Instagram"
            >
              <DogLine id="feed-dog" className="absolute left-[18%] top-[8%] w-[62%] text-white transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]" />
              <Image src="/images/logo-white.png" alt="" width={731} height={258} sizes="200px" className="relative h-auto w-[88%]" />
            </a>
          </li>

          {/* Foto: mascote na fachada */}
          <li className="lg:mt-14" data-reveal style={delay(0.08)}>
            <FeedPhoto src="/images/mascote-fachada.jpg" alt="Mascote em frente à loja" />
          </li>

          {/* Peça de delivery */}
          <li data-reveal style={delay(0.16)}>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="blue-field group relative flex aspect-[4/5] flex-col overflow-hidden rounded-[18px] p-[9%]"
              aria-label="Post sobre o delivery de ração no Instagram"
            >
              <span className="font-display text-[clamp(0.85rem,1.7vw,1.15rem)] font-extrabold leading-none tracking-[-0.03em]">
                A ração do seu pet
              </span>
              <span className="mt-1 font-display text-[clamp(2rem,4.6vw,3.2rem)] font-extrabold leading-[0.85] tracking-[-0.06em] text-navy">
                acabou?
              </span>
              <span className="mt-2 font-display text-[clamp(0.85rem,1.7vw,1.15rem)] font-extrabold tracking-[-0.02em]">
                Sem problemas!
              </span>
              <LineArt
                name="racao"
                strokeWidth={2.4}
                className="absolute -bottom-[6%] -left-[4%] w-[66%] text-white transition-transform duration-700 ease-out-soft group-hover:-translate-y-1"
              />
              <LineArt name="moto" strokeWidth={3} className="absolute bottom-[12%] right-[8%] w-[34%] text-white" />
            </a>
          </li>

          {/* Foto: fachada */}
          <li className="lg:mt-14" data-reveal style={delay(0.24)}>
            <FeedPhoto
              src="/images/loja-fachada.jpg"
              alt="Atendente e pastor-alemão na entrada da loja"
              className="object-[50%_70%]"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

function FeedPhoto({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <a
      href={BUSINESS.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[4/5] overflow-hidden rounded-[18px] bg-sky"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 300px, 50vw"
        className={`object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04] ${className}`}
      />
      <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <ArrowUpRightIcon className="h-4 w-4" />
      </span>
    </a>
  );
}
