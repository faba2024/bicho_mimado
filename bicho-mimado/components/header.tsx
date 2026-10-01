"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";
import { MESSAGES, NAV, waLink, BUSINESS } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu mobile: trava a rolagem, fecha com Esc e devolve o foco ao botão
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("a")?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,height] duration-500 ease-out-soft ${
        solid ? "bg-white/95 shadow-[0_1px_0_rgb(15_27_42/0.06),0_8px_24px_-18px_rgb(15_27_42/0.35)] backdrop-blur-md" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div
        className={`wrap flex items-center justify-between gap-6 transition-[height] duration-500 ease-out-soft ${
          solid ? "h-16 lg:h-[72px]" : "h-[72px] lg:h-[92px]"
        }`}
      >
        <a href="#inicio" className="group relative flex items-center gap-3.5" aria-label="Bicho Mimado — início">
          <span className="relative block h-[34px] w-[96px] lg:h-[40px] lg:w-[113px]">
            <Image
              src="/images/logo-white.png"
              alt=""
              fill
              priority
              sizes="113px"
              className={`object-contain transition-opacity duration-500 ${solid ? "opacity-0" : "opacity-100"}`}
            />
            <Image
              src="/images/logo-blue.png"
              alt=""
              fill
              priority
              sizes="113px"
              className={`object-contain transition-opacity duration-500 ${solid ? "opacity-100" : "opacity-0"}`}
            />
          </span>
          <span
            className={`hidden border-l pl-3.5 sm:max-lg:block xl:block text-[0.6875rem] font-semibold uppercase leading-[1.25] tracking-[0.16em] transition-colors duration-500 ${
              solid ? "border-line text-muted" : "border-white/40 text-white"
            }`}
          >
            Pet Shop
            <br />
            VCA
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative whitespace-nowrap rounded-full px-3 py-2 xl:px-3.5 text-[0.9375rem] font-medium transition-colors duration-300 after:absolute after:inset-x-3.5 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-out-soft hover:after:scale-x-100 ${
                    solid ? "text-ink/80 hover:text-ink" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(MESSAGES.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn hidden !min-h-[46px] !px-5 sm:inline-flex ${solid ? "btn-blue" : "btn-white"}`}
          >
            <WhatsAppIcon />
            <span className="whitespace-nowrap">
              <span className="lg:max-xl:hidden">Falar no </span>WhatsApp
            </span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={`relative z-[60] grid h-12 w-12 place-items-center rounded-full transition-colors lg:hidden ${
              open ? "text-white" : solid ? "text-ink" : "text-white"
            }`}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        ref={panelRef}
        className={`blue-field on-blue fixed inset-0 z-[55] flex flex-col lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 88px)",
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 28px)",
          // visibilidade muda na hora ao abrir (permite foco) e só depois do fade ao fechar
          transition: open
            ? "opacity .5s cubic-bezier(.22,1,.36,1), visibility 0s"
            : "opacity .5s cubic-bezier(.22,1,.36,1), visibility 0s linear .5s",
        }}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Menu mobile" className="wrap flex-1 overflow-y-auto">
          <ul className="border-t border-white/20">
            {NAV.map((item, i) => (
              <li key={item.href} className="border-b border-white/20">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-[1.875rem] font-extrabold tracking-[-0.03em] text-white"
                  style={{
                    transition: "transform .6s cubic-bezier(.22,1,.36,1), opacity .6s",
                    transitionDelay: open ? `${80 + i * 45}ms` : "0ms",
                    transform: open ? "none" : "translateY(14px)",
                    opacity: open ? 1 : 0,
                  }}
                >
                  {item.label}
                  <ArrowIcon className="h-6 w-6 text-white/60" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="wrap mt-6 grid gap-3">
          <a href={waLink(MESSAGES.geral)} target="_blank" rel="noopener noreferrer" className="btn btn-white w-full">
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
          <p className="text-center text-sm text-white/80">
            {BUSINESS.phoneDisplay} · {BUSINESS.instagramHandle}
          </p>
        </div>
      </div>
    </header>
  );
}
