import Image from "next/image";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { BUSINESS, MESSAGES, NAV, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-blue bg-navy-deep text-white" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <div className="wrap grid gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-4">
          <a href="#inicio" aria-label="Bicho Mimado — voltar ao início" className="inline-block">
            <Image src="/images/logo-white.png" alt="" width={731} height={258} sizes="130px" className="h-auto w-[130px]" />
          </a>
        </div>

        <nav aria-label="Rodapé" className="lg:col-span-3">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[0.9375rem]">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-white/80 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid gap-3 text-[0.9375rem] lg:col-span-5 lg:justify-items-end lg:text-right">
          <a
            href={waLink(MESSAGES.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-semibold transition-colors hover:text-mist"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-semibold transition-colors hover:text-mist"
          >
            <InstagramIcon className="h-4 w-4" />
            {BUSINESS.instagramHandle}
          </a>
          <p className="text-white/65">
            {BUSINESS.streetShort} · {BUSINESS.district} · {BUSINESS.city}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-1 py-5 text-xs text-white/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Bicho Mimado · Pet Shop VCA</p>
        </div>
      </div>
    </footer>
  );
}
