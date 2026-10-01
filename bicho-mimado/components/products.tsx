"use client";

import { useId, useState } from "react";
import { DogLine } from "@/components/dog-line";
import { WhatsAppIcon } from "@/components/icons";
import { delay } from "@/lib/css";
import { BUSINESS, MESSAGES, waLink } from "@/lib/site";

const SPECIES = [
  { id: "cao", label: "Cães", phrase: "cão" },
  { id: "gato", label: "Gatos", phrase: "gato" },
] as const;

const STAGES = [
  { id: "filhote", label: "Filhotes", phrase: "filhote" },
  { id: "adulto", label: "Adultos", phrase: "adulto" },
  { id: "cuidados", label: "Cuidados específicos", phrase: "com cuidados específicos" },
] as const;

type SpeciesId = (typeof SPECIES)[number]["id"];
type StageId = (typeof STAGES)[number]["id"];

/**
 * Rações: em vez de vitrine com preço, um montador de mensagem.
 * O cliente escolhe para quem e qual fase, e a conversa já chega pronta no WhatsApp.
 */
export function Products() {
  const [species, setSpecies] = useState<SpeciesId>("cao");
  const [stage, setStage] = useState<StageId>("adulto");
  const uid = useId();

  const sp = SPECIES.find((s) => s.id === species)!;
  const st = STAGES.find((s) => s.id === stage)!;
  const message = `${MESSAGES.racao} Procuro ração para ${sp.phrase} ${st.phrase}.`;

  return (
    <section id="racoes" aria-labelledby="racoes-title" className="relative overflow-hidden bg-sky py-20 sm:py-24 lg:py-36">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h2
            id="racoes-title"
            className="poster-type max-w-[12ch] text-[clamp(2.4rem,6.6vw,4.5rem)] text-navy"
            data-reveal
          >
            A ração certa para cada fase.
          </h2>
          <p className="mt-6 max-w-[30rem] text-[1.0625rem] text-muted" data-reveal style={delay(0.1)}>
            Escolha o perfil do seu pet e consulte pelo WhatsApp.
          </p>

          <form className="mt-10 grid gap-8" onSubmit={(e) => e.preventDefault()} data-reveal style={delay(0.15)}>
            <ChoiceGroup
              legend="Para quem é?"
              name={`${uid}-especie`}
              options={SPECIES}
              value={species}
              onChange={(v) => setSpecies(v as SpeciesId)}
            />
            <ChoiceGroup
              legend="Qual fase?"
              name={`${uid}-fase`}
              options={STAGES}
              value={stage}
              onChange={(v) => setStage(v as StageId)}
            />
          </form>
        </div>

        {/* Prévia da conversa */}
        <div className="relative lg:col-span-6" data-reveal style={delay(0.2)}>
          <div className="relative mx-auto max-w-[30rem] overflow-hidden rounded-[22px] bg-white shadow-[0_30px_60px_-36px_rgb(11_58_99/0.45)]">
            <div className="flex items-center gap-3.5 border-b border-line px-5 py-4 sm:px-6">
              <span className="blue-field grid h-12 w-12 flex-none place-items-center overflow-hidden rounded-full">
                <DogLine id="ticket-dog" className="h-8 w-8 text-white" />
              </span>
              <span className="min-w-0">
                <span className="block font-display font-extrabold tracking-[-0.02em] text-navy">Bicho Mimado</span>
                <span className="block truncate text-sm text-muted">WhatsApp · {BUSINESS.phoneDisplay}</span>
              </span>
            </div>

            <div className="bg-paper px-5 py-7 sm:px-6">
              <div className="ml-auto max-w-[92%] rounded-[18px] rounded-br-[6px] bg-navy px-4 py-3.5 text-[0.9375rem] leading-relaxed text-white">
                <p aria-live="polite">{message}</p>
              </div>
            </div>

            <div className="border-t border-line p-5 sm:p-6">
              <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-blue w-full">
                <WhatsAppIcon />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ChoiceGroupProps = {
  legend: string;
  name: string;
  options: readonly { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
};

function ChoiceGroup({ legend, name, options, value, onChange }: ChoiceGroupProps) {
  return (
    <fieldset>
      <legend className="eyebrow mb-3.5 text-[0.6875rem] text-navy">{legend}</legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => {
          const checked = value === opt.id;
          const id = `${name}-${opt.id}`;
          return (
            <label
              key={opt.id}
              htmlFor={id}
              className={`relative cursor-pointer rounded-full border-[1.5px] px-5 py-3 text-[0.9375rem] font-semibold transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-[2.5px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand ${
                checked
                  ? "border-navy bg-navy text-white"
                  : "border-navy/20 bg-white/70 text-navy hover:border-navy/60"
              }`}
            >
              <input
                type="radio"
                id={id}
                name={name}
                value={opt.id}
                checked={checked}
                onChange={() => onChange(opt.id)}
                className="sr-only"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
