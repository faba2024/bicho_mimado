import { DOG_STROKES, DOG_VIEWBOX } from "@/lib/dog-line";

type Props = {
  /** Prefixo único para os ids das máscaras (necessário se houver mais de um na página). */
  id: string;
  className?: string;
  /** Anima o desenho dos traços ao carregar. */
  draw?: boolean;
  title?: string;
};

/**
 * O cão em traço da identidade Bicho Mimado, vetorizado do material oficial.
 * Quando `draw` está ativo, cada traço é revelado por uma máscara que percorre
 * a linha central — o efeito de "caneta desenhando" sem alterar o traço afinado.
 */
export function DogLine({ id, className, draw = false, title }: Props) {
  return (
    <svg
      viewBox={DOG_VIEWBOX}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable={false}
    >
      {draw && (
        <defs>
          {DOG_STROKES.map((s, i) => (
            <mask id={`${id}-m${i}`} key={i} maskUnits="userSpaceOnUse">
              <path
                d={s.center}
                pathLength={1}
                className="dog-draw"
                style={{ animationDelay: `${0.25 + DRAW_ORDER[i] * 0.32}s` }}
                fill="none"
                stroke="#fff"
                strokeWidth={7}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
          ))}
        </defs>
      )}
      {DOG_STROKES.map((s, i) => (
        <path key={i} d={s.fill} fill="currentColor" mask={draw ? `url(#${id}-m${i})` : undefined} />
      ))}
    </svg>
  );
}

/** Ordem do desenho: orelha esquerda, orelha direita, perfil, focinho, queixo, pescoço. */
const DRAW_ORDER = [0, 2, 5, 1, 3, 4];
