"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { MESSAGES, waLink } from "@/lib/site";

/**
 * Botão flutuante: aparece depois do hero (onde já existe CTA)
 * e some enquanto a seção de contato está visível, para não duplicar.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const contact = document.getElementById("contato");
    let pastHero = false;
    let onContact = false;
    const update = () => setVisible(pastHero && !onContact);

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) pastHero = !e.isIntersecting;
        if (e.target === contact) onContact = e.isIntersecting;
      }
      update();
    });
    if (hero) io.observe(hero);
    if (contact) io.observe(contact);
    return () => io.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <a
      href={waLink(MESSAGES.geral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Bicho Mimado no WhatsApp"
      className="float-in group fixed z-40 flex items-center rounded-full bg-brand-ink p-2 text-white shadow-[0_14px_34px_-12px_rgb(6_70_110/0.6)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-navy"
      style={{
        right: "max(16px, env(safe-area-inset-right, 0px))",
        bottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15">
        <WhatsAppIcon className="h-6 w-6" />
      </span>
    </a>
  );
}
