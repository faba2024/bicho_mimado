# Bicho Mimado — site oficial

Site institucional + catálogo + canal de pedidos pelo WhatsApp da **Bicho Mimado | Pet Shop VCA** (Av. Gilenilda Alves, 45 — Boa Vista, Vitória da Conquista - BA).

Next.js (App Router) · TypeScript · Tailwind CSS v4 · `next/image` · `next/font`. Nenhuma biblioteca de animação ou UI: o JS no cliente se limita ao header, ao montador de mensagem de ração, à rota do delivery, ao botão de copiar e a um único `IntersectionObserver`.

## Rodar

```bash
npm install
cp .env.example .env.local   # defina NEXT_PUBLIC_SITE_URL com o domínio final
npm run dev                  # http://localhost:3000
npm run build && npm start   # produção
```

Scripts extras: `npm run typecheck`, `npm run lint`.

**Prévia sem instalar nada:** abra `preview-estatico/index.html` no navegador. É uma renderização estática dos mesmos componentes, útil para mostrar o layout ao cliente. Ela não faz parte do build e pode ser apagada.

## Direção visual — "o cartaz da Gilenilda"

O site deriva da comunicação que a loja já usa no Instagram, não de um template:

- **Campo azul granulado** dos posts (`.blue-field`) no hero, no contato, no menu mobile e nas peças do feed.
- **O cão em traço do logo**, vetorizado a partir da arte oficial (`lib/dog-line.ts`). No hero ele se desenha ao carregar.
- **"A ração do seu pet acabou?"**: o post de delivery vira o título da seção, com a mesma sobreposição de pesos e a rota da loja até a casa do cliente.
- **A placa de contato com borda fina** que fecha os posts aparece no rodapé do hero.
- **Placa de rua azul** na seção de localização.
- Ração sem vitrine de preços: um **montador de mensagem** (cão/gato × fase) que já abre o WhatsApp com o pedido escrito.

## Estrutura

```
app/
  layout.tsx        metadata, Open Graph, JSON-LD (PetStore), fontes
  page.tsx          ordem das seções
  globals.css       tokens da marca (@theme), componentes base, motion
  icon.svg · apple-icon.png · robots.ts · sitemap.ts · manifest.ts
components/
  header.tsx            sticky, encolhe ao rolar, menu mobile acessível
  hero.tsx              campo azul + cão em traço + placa de contato
  delivery.tsx          "acabou?" + rota da loja até a casa (delivery-route.tsx)
  categories.tsx        diretório de categorias com painel em foco
  products.tsx          rações: montador de mensagem para o WhatsApp
  medications.tsx       medicamentos, com aviso (sem recomendação médica)
  benefits.tsx          diferenciais 01–04
  about.tsx             sobre, com fotos reais da fachada
  instagram.tsx         composição de feed (fotos reais + peças redesenhadas)
  whatsapp-cta.tsx      contato com o número em escala de cartaz
  location.tsx          placa de rua + Google Maps incorporado
  footer.tsx · floating-whatsapp.tsx · reveal-observer.tsx
  dog-line.tsx · line-art.tsx · icons.tsx · copy-number.tsx
lib/
  site.ts       ← TODOS os dados da empresa e mensagens do WhatsApp
  catalog.ts    categorias de produtos
  dog-line.ts   vetor do traço do logo
public/images/  logo (branco/azul) e fotos reais da loja
public/og.png   imagem de compartilhamento 1200×630
```

Para mudar telefone, endereço, Instagram ou textos do WhatsApp, edite apenas `lib/site.ts`. Os links usam `https://wa.me/5577991942860?text=` com `encodeURIComponent`.

## Antes de publicar

1. **Fotos em alta.** As fotos em `public/images/` vieram do Instagram da loja e têm resolução baixa (~330 px de largura). Substitua pelos originais mantendo os mesmos nomes de arquivo: `loja-fachada.jpg`, `mascote-fachada.jpg`, `equipe-antiparasitarios.jpg`. Nenhuma outra mudança é necessária.
2. **Logo em vetor.** `logo-white.png` / `logo-blue.png` foram extraídos do post oficial. Se a loja tiver o arquivo original (SVG/AI/PDF), troque-os.
3. Defina `NEXT_PUBLIC_SITE_URL` (canonical, Open Graph, sitemap e robots dependem dele).
4. Confirme com a loja as condições do delivery (área e frete). O site não promete frete grátis nem prazo.

## O que o site **não** inventa

Sem preços, marcas, promoções, avaliações, depoimentos, números de clientes ou tempo de mercado. Os textos usam "consulte disponibilidade" onde a informação depende da loja.

## Acessibilidade e desempenho

- HTML semântico, um `h1`, `h2` por seção, link "Pular para o conteúdo", `focus-visible` em tudo, menu mobile com `aria-expanded`, `inert`, Esc e retorno de foco.
- `prefers-reduced-motion`: o cão aparece já desenhado, sem revelações nem rota animada.
- Imagens com `sizes` corretos, só o logo com `priority`; mapa com `loading="lazy"`; fontes com `display: swap`.
