import type { ArtName } from "@/components/line-art";
import { MESSAGES } from "@/lib/site";

export type Category = {
  slug: string;
  name: string;
  text: string;
  art: ArtName;
  /** Âncora interna (seção dedicada) ou mensagem para o WhatsApp. */
  href?: `#${string}`;
  message: string;
};

const consult = (what: string) => `Olá! Vim pelo site da Bicho Mimado e gostaria de consultar ${what}.`;

export const CATEGORIES: Category[] = [
  {
    slug: "racoes",
    name: "Rações",
    text: "Cães e gatos, de filhote a adulto.",
    art: "racao",
    href: "#racoes",
    message: MESSAGES.racao,
  },
  {
    slug: "medicamentos",
    name: "Medicamentos",
    text: "Antipulgas, vermífugos e mais.",
    art: "medicamento",
    href: "#medicamentos",
    message: MESSAGES.medicamentos,
  },
  {
    slug: "acessorios",
    name: "Acessórios",
    text: "Peitorais, coleiras e guias.",
    art: "acessorio",
    message: consult("acessórios"),
  },
  {
    slug: "higiene",
    name: "Higiene e cuidados",
    text: "Banho, limpeza e bem-estar.",
    art: "higiene",
    message: consult("produtos de higiene e cuidados"),
  },
  {
    slug: "petiscos",
    name: "Petiscos",
    text: "Para agradar e recompensar.",
    art: "petisco",
    message: consult("petiscos"),
  },
  {
    slug: "outros",
    name: "Outros produtos",
    text: "Não achou? Pergunte pra gente.",
    art: "outros",
    message: MESSAGES.produto,
  },
];
