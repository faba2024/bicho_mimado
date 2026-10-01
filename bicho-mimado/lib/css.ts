import type { CSSProperties } from "react";

/** Variáveis CSS inline tipadas, ex.: style={cssVars({ "--reveal-delay": ".1s" })} */
export function cssVars(vars: Record<`--${string}`, string>): CSSProperties {
  return vars as CSSProperties;
}

/** Atraso da animação de entrada ao rolar. */
export const delay = (s: number) => cssVars({ "--reveal-delay": `${s}s` });
