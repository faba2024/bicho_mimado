import { delay } from "@/lib/css";

const ITEMS = [
  { title: "Delivery", text: "Peça sem sair de casa." },
  { title: "Variedade", text: "Para diferentes necessidades." },
  { title: "Atendimento", text: "Fale direto com a equipe." },
  { title: "Localização", text: "Boa Vista, Vitória da Conquista." },
];

/** Diferenciais em colunas com fios e números vazados, em ritmo escalonado. */
export function Benefits() {
  return (
    <section aria-labelledby="diferenciais-title" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="wrap">
        <h2
          id="diferenciais-title"
          className="poster-type max-w-[15ch] text-[clamp(2rem,5vw,3.25rem)] text-navy"
          data-reveal
        >
          Perto, prático e fácil de falar.
        </h2>

        <ol className="mt-12 grid gap-y-2 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <li
              key={item.title}
              className={`flex items-start gap-6 border-t border-line py-7 sm:block sm:border-l sm:border-t-0 sm:px-7 sm:py-2 lg:[&:nth-child(even)]:mt-20 ${
                i % 2 === 0 ? "sm:border-l-0 sm:pl-0 lg:border-l lg:pl-7" : ""
              } ${i === 0 ? "lg:!border-l-0 lg:!pl-0" : ""}`}
              data-reveal
              style={delay(i * 0.08)}
            >
              <span aria-hidden className="outline-num block w-[4.5rem] flex-none text-[3.5rem] sm:w-auto sm:text-[6.5rem]">
                0{i + 1}
              </span>
              <span className="block sm:mt-8">
                <span className="block font-display text-2xl font-extrabold tracking-[-0.03em] text-navy">{item.title}</span>
                <span className="mt-2 block text-muted">{item.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
