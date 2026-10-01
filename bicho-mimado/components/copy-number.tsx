"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";

export function CopyNumber({ value, display }: { value: string; display: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Sem permissão de área de transferência: o número continua selecionável na tela.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-white/50 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
      aria-label={copied ? "Número copiado" : `Copiar número ${display}`}
    >
      {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
      <span aria-live="polite">{copied ? "Copiado" : "Copiar número"}</span>
    </button>
  );
}
