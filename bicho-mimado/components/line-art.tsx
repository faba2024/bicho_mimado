import type { ReactNode, SVGProps } from "react";

/**
 * Ilustrações em traço contínuo, derivadas da linguagem do logo
 * (desenho do cão em linha branca). Usadas no lugar de fotos de banco de imagem.
 */

export type ArtName = "racao" | "medicamento" | "acessorio" | "higiene" | "petisco" | "outros" | "moto";

type Props = SVGProps<SVGSVGElement> & { name: ArtName };

export function LineArt({ name, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable={false}
      {...props}
    >
      {ART[name]}
    </svg>
  );
}

const ART: Record<ArtName, ReactNode> = {
  racao: (
    <>
      <path d="M12 70h96" />
      <path d="M18 70l7 25a7 7 0 0 0 6.7 5h56.6a7 7 0 0 0 6.7-5l7-25" />
      <path d="M30 86h60" opacity=".45" />
      <circle cx="38" cy="63" r="5" />
      <circle cx="50" cy="59" r="5.5" />
      <circle cx="63" cy="61" r="5" />
      <circle cx="75" cy="58" r="5.5" />
      <circle cx="86" cy="64" r="4.5" />
      <circle cx="57" cy="49" r="4.5" />
      <circle cx="69" cy="47.5" r="4" />
    </>
  ),
  medicamento: (
    <g transform="rotate(-32 60 60)">
      <rect x="51" y="10" width="18" height="24" rx="9" />
      <path d="M55 34h10v8H55z" />
      <path d="M53 42h14v40l-7 15-7-15z" />
      <path d="M53 56h7M53 66h7" opacity=".45" />
      <path d="M60 104c-3 4-3 7 0 8 3-1 3-4 0-8z" />
    </g>
  ),
  acessorio: (
    <>
      <ellipse cx="58" cy="38" rx="28" ry="12" />
      <path d="M30 38v6c0 6.6 12.5 12 28 12s28-5.4 28-12v-6" />
      <rect x="52" y="45" width="12" height="9" rx="2" />
      <circle cx="58" cy="62" r="5" />
      <path d="M58 67c0 14-22 12-24 26-1.6 11 9 17 17 13 7-3.4 6-12-1-13" />
    </>
  ),
  higiene: (
    <>
      <rect x="38" y="46" width="40" height="58" rx="10" />
      <path d="M50 46v-12h16v12" />
      <path d="M58 34V22h16" />
      <path d="M48 66h20M48 74h12" opacity=".45" />
      <circle cx="90" cy="44" r="6" />
      <circle cx="98" cy="28" r="4" />
      <circle cx="84" cy="22" r="2.6" />
    </>
  ),
  petisco: (
    <path d="M43 53h34a9 9 0 1 1 13.1 7 9 9 0 1 1-13.1 7H43a9 9 0 1 1-13.1-7A9 9 0 1 1 43 53z" />
  ),
  outros: (
    <>
      <path d="M28 44h64l-5 58H33z" />
      <path d="M46 52V38a14 14 0 0 1 28 0v14" />
      <path d="M44 74h32" opacity=".45" />
    </>
  ),
  moto: (
    <>
      <circle cx="30" cy="86" r="11" />
      <circle cx="92" cy="86" r="11" />
      <path d="M30 86h18l8-20h20l6 20h10" />
      <path d="M82 86l-6-28h10" />
      <path d="M50 66h-6a6 6 0 0 1-6-6v-2h18" />
      <rect x="14" y="38" width="28" height="22" rx="3" />
      <path d="M20 46h16" opacity=".45" />
    </>
  ),
};
