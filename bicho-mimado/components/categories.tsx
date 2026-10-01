"use client";

import { useState } from "react";
import { ArrowIcon, ArrowUpRightIcon } from "@/components/icons";
import { LineArt } from "@/components/line-art";
import { CATEGORIES } from "@/lib/catalog";
import { delay } from "@/lib/css";
import { waLink } from "@/lib/site";

/**
 * Categorias como um "diretório da loja": uma lista tipográfica grande,
 * com um painel azul (desktop) que mostra a categoria em foco.
 */
export function Categories() {
  const [active, setActive] = useState(0);
  const current = CATEGORIES[active];

  return (
    <section id="produtos" aria-labelledby="produtos-title" className="bg-white py-20 sm:py-24 lg:py-36">
      <div className="wrap">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <h2
            id="produtos-title"
            className="poster-type max-w-[14ch] text-[clamp(2.4rem,7vw,4.75rem)] text-navy"
            data-reveal
          >
            Encontre o que seu pet precisa.
          </h2>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <ul className="border-t border-line lg:col-span-7">
            {CATEGORIES.map((cat, i) => {
              const internal = Boolean(cat.href);
              return (
                <li key={cat.slug} className="border-b border-line" data-reveal style={delay(i * 0.05)}>
                  <a
                    href={cat.href ?? waLink(cat.message)}
                    {...(internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group grid grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-4 py-5 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:py-8"
                    aria-label={`${cat.name}: ${internal ? "ver seção" : "consultar no WhatsApp"}`}
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-sky text-brand-ink lg:hidden">
                      <LineArt name={cat.art} className="h-10 w-10" strokeWidth={3.4} />
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block font-display text-[clamp(1.45rem,4.2vw,2.75rem)] font-extrabold leading-[1.05] tracking-[-0.035em] transition-[color,transform] duration-500 ease-out-soft lg:group-hover:translate-x-2 ${
                          active === i ? "lg:text-brand" : ""
                        } text-navy group-hover:text-brand`}
                      >
                        {cat.name}
                      </span>
                      <span className="mt-1 block text-[0.9375rem] leading-snug text-muted lg:hidden">{cat.text}</span>
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-line text-navy transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                        {internal ? <ArrowIcon className="h-5 w-5" /> : <ArrowUpRightIcon className="h-5 w-5" />}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Painel da categoria em foco (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="blue-field on-blue sticky top-28 flex aspect-[4/5] flex-col overflow-hidden rounded-[22px] p-9">
                            <div className="relative flex-1" aria-hidden>
                {CATEGORIES.map((cat, i) => (
                  <LineArt
                    key={cat.slug}
                    name={cat.art}
                    strokeWidth={1.6}
                    className={`absolute inset-0 m-auto h-[78%] w-[78%] text-white transition-[opacity,transform] duration-700 ease-out-soft ${
                      active === i ? "scale-100 opacity-100" : "scale-[0.94] opacity-0"
                    }`}
                  />
                ))}
              </div>
              <div aria-live="polite">
                <p className="max-w-[16ch] font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-balance">
                  {current.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
