/**
 * Dados oficiais da Bicho Mimado.
 * Tudo que aparece no site sai daqui — não há preços, marcas, avaliações
 * ou números inventados. Para alterar contato, endereço ou textos de
 * WhatsApp, edite apenas este arquivo.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const BUSINESS = {
  name: "Bicho Mimado",
  fullName: "Bicho Mimado | Pet Shop VCA",
  city: "Vitória da Conquista",
  state: "BA",
  street: "Avenida Gilenilda Alves, 45",
  streetShort: "Av. Gilenilda Alves, 45",
  plateStreet: "Av. Gilenilda Alves",
  district: "Boa Vista",
  zip: "45027-560",
  phoneDisplay: "(77) 99194-2860",
  phoneE164: "+5577991942860",
  whatsappNumber: "5577991942860",
  instagramHandle: "@bichomimadovca",
  instagramUrl: "https://www.instagram.com/bichomimadovca/",
} as const;

export const FULL_ADDRESS = `${BUSINESS.street}, ${BUSINESS.district}, ${BUSINESS.city} - ${BUSINESS.state}, ${BUSINESS.zip}`;

export const MESSAGES = {
  geral: "Olá! Encontrei vocês pelo site da Bicho Mimado e gostaria de mais informações.",
  racao: "Olá! Vim pelo site da Bicho Mimado e gostaria de consultar as opções de ração.",
  medicamentos: "Olá! Vim pelo site da Bicho Mimado e gostaria de consultar disponibilidade de um produto.",
  delivery: "Olá! Vim pelo site da Bicho Mimado e gostaria de fazer um pedido para delivery.",
  produto: "Olá! Encontrei vocês pelo site da Bicho Mimado e gostaria de consultar um produto.",
} as const;

/** Link wa.me com mensagem codificada corretamente (URL encoding). */
export function waLink(message: string = MESSAGES.geral): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(FULL_ADDRESS)}&hl=pt-BR&z=16&output=embed`;
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(FULL_ADDRESS)}`;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#delivery", label: "Delivery" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
] as const;
