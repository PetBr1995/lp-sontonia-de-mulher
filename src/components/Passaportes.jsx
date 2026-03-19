import { ArrowRight, CalendarDays } from "lucide-react";
import Reveal from "./Reveal";

const Passaportes = () => {
  const cardInfo = [
    {
      titulo: "SETOR",
      destaque: "VIP",
      beneficios: [
        "Entrada diferenciada",
        "Visão privilegiada",
        "Kit especial",
      ],
      price: "497,00",
    },
    {
      titulo: "SETOR",
      destaque: "PISTA",
      beneficios: ["Acesso ao evento"],
      price: "297,00",
    },
  ];

  return (
    <section className="relative z-20 my-20 px-4">
      <div
        className="pointer-events-none absolute left-0 right-0 top-1/2 z-10 mt-[50px] h-[30rem] -translate-y-1/2 border-y border-black/20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/BG-6-INGRESSOS.png?v=20260306-2')" }}
        aria-hidden="true"
      />

      <Reveal
        once
        className="relative z-20 mx-auto mb-10 max-w-6xl text-center text-[#7A2E33]"
      >
        <h2 className="text-3xl tracking-wide sm:text-4xl">
          Informações <span className="font-semibold">DO EVENTO</span>
        </h2>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm uppercase sm:text-lg">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-[#7A2E33] sm:h-5 sm:w-5" />
            <p className="capitalize">
              <span className="font-bold">Data:</span> 28/05
            </p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="font-bold capitalize">Local:</span>
            <p>Nova Era Hall - Studio 5 / Manaus</p>
          </div>
        </div>
      </Reveal>

      <div
        id="passaportes"
        className="relative z-20 mx-auto grid max-w-6xl scroll-mt-6 items-stretch gap-10 md:grid-cols-2"
      >
        {cardInfo.map((card, idx) => (
          <Reveal key={idx} delay={idx * 120} className="relative z-20">
            <div className="relative z-20 flex h-full flex-col justify-between rounded-3xl border border-black/20 bg-[#f4f3ea] p-10 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-center text-4xl tracking-wide text-[#7A2E33]">
                {card.titulo}{" "}
                <span className="font-semibold">{card.destaque}</span>
              </h2>

              <div className="mt-8 space-y-4">
                {card.beneficios.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border-b border-[#7A2E33]/30 pb-3"
                  >
                    <div className="rounded-full border border-[#7A2E33]/40 p-1">
                      <ArrowRight className="h-4 w-4 text-[#7A2E33]" />
                    </div>
                    <p className="text-lg text-[#7A2E33]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <p className="text-sm tracking-widest text-[#7A2E33]">
                  1º LOTE
                </p>

                <div className="mt-2 flex items-end justify-center gap-2">
                  <span className="text-xl text-[#7A2E33]">R$</span>
                  <span className="text-7xl font-bold leading-none text-[#7A2E33] opacity-40 blur-[12px] select-none sm:text-8xl">
                    {card.price.split(",")[0]}
                  </span>
                  <span className="text-2xl text-[#7A2E33] opacity-40 blur-[12px] select-none">
                    ,{card.price.split(",")[1]}
                  </span>
                </div>

                <p className="mt-2 text-sm tracking-widest text-[#7A2E33]">
                  VAGAS <span className="font-semibold">LIMITADAS</span>
                </p>

                <div className="flex items-center justify-center pt-1">
                  <div className="w-fit rounded-[22px] bg-white p-[1px] shadow-[0_0_5px_rgba(0,0,0,0.4)]">
                    <div className="rounded-[22px] bg-gradient-to-r from-[#D85A66] via-[#9E2F3F] to-[#9E2F3F] px-6 py-3 sm:px-8">
                      <a
                        href="#form"
                        className="block text-center text-base font-light text-white transition hover:brightness-110 sm:text-lg lg:text-xl"
                      >
                        Quero garantir minha vaga
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Passaportes;
