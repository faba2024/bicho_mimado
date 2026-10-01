"use client";

import { useEffect, useRef } from "react";
import { LineArt } from "@/components/line-art";

const ROUTE = "M70 150 C 210 40, 360 214, 520 128 S 790 34, 930 104";
const START = { x: 70, y: 150 };

/**
 * Trajeto da loja (Boa Vista) até a casa do cliente. A moto percorre a rota
 * uma única vez quando a seção entra na tela. Com movimento reduzido,
 * a rota aparece completa e a moto já está no destino.
 */
export function DeliveryRoute() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const motoRef = useRef<SVGGElement>(null);
  const houseRef = useRef<SVGGElement>(null);
  const storeRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const trail = trailRef.current;
    const moto = motoRef.current;
    const wrap = wrapRef.current;
    if (!path || !trail || !moto || !wrap) return;

    // Em telas estreitas a rota encolhe; os marcadores crescem para continuar legíveis
    let k = 1;
    const resize = () => {
      k = Math.min(2.4, Math.max(1, 620 / wrap.clientWidth));
      houseRef.current?.setAttribute("transform", `translate(930 104) scale(${k})`);
      storeRef.current?.setAttribute("transform", `translate(${START.x} ${START.y}) scale(${k})`);
    };
    resize();
    window.addEventListener("resize", resize);

    const total = path.getTotalLength();
    // A moto estaciona antes da casa, sem cobrir o ícone de destino
    const place = (t: number) => {
      t *= k > 1.3 ? 0.76 : 0.88;
      const p = path.getPointAtLength(total * t);
      const ahead = path.getPointAtLength(Math.min(total, total * t + 1));
      const flip = ahead.x < p.x ? -1 : 1;
      moto.setAttribute("transform", `translate(${p.x} ${p.y}) scale(${flip * k} ${k})`);
      trail.style.strokeDashoffset = String(1 - t);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      place(1);
      return () => window.removeEventListener("resize", resize);
    }
    place(0);

    let raf = 0;
    const run = () => {
      const duration = 2600;
      const t0 = performance.now();
      const ease = (x: number) => 1 - Math.pow(1 - x, 3);
      const step = (now: number) => {
        const x = Math.min(1, (now - t0) / duration);
        place(ease(x));
        if (x < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.55 },
    );
    io.observe(wrap);
    return () => {
      window.removeEventListener("resize", resize);
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <svg viewBox="0 0 1000 220" className="h-auto w-full overflow-visible" aria-hidden focusable={false}>
        <path ref={pathRef} d={ROUTE} fill="none" stroke="var(--color-line)" strokeWidth={4} strokeDasharray="2 12" strokeLinecap="round" />
        <path
          ref={trailRef}
          d={ROUTE}
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={4}
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray="1"
          style={{ strokeDashoffset: 1 }}
        />
        {/* Loja */}
        <g ref={storeRef} transform={`translate(${START.x} ${START.y})`}>
          <circle r={15} fill="var(--color-navy)" />
          <circle r={5} fill="#fff" />
        </g>
        {/* Casa */}
        <g ref={houseRef} transform="translate(930 104)">
          <circle r={26} fill="var(--color-brand)" />
          <path d="M-11 2 L0 -9 L11 2 M-7 -1 V10 H7 V-1" fill="none" stroke="#fff" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {/* Moto */}
        <g ref={motoRef} transform={`translate(${START.x} ${START.y})`}>
          <g transform="translate(-30 -66)">
            <circle cx={30} cy={34} r={30} fill="#fff" stroke="var(--color-line)" strokeWidth={1.5} />
            <LineArt name="moto" x={8} y={12} width={44} height={44} className="text-navy" strokeWidth={5} />
          </g>
        </g>
      </svg>
    </div>
  );
}
