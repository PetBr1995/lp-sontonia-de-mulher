import { ArrowRight } from "lucide-react";

const SecondSection = () => {
  const info = [
    { content: "Clareza sobre o momento atual da sua vida" },
    { content: "Organização estratégica dos 5 pilares" },
    { content: "Direção prática para os próximos 30 dias" },
    { content: "Método aplicável para não voltar ao automático" },
    {
      content:
        "Ambiente de networking com mulheres que também decidiram evoluir",
    },
  ];

  return (
    <section className="bg-[#D2C9C3] px-4 py-10 sm:px-6 lg:px-8">
      {/* CARD PRINCIPAL */}
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-[#D0CEC5] shadow-[0_0_2px_rgba(0,0,0,0.4)] md:grid-cols-2">
        {/* IMAGEM */}
        <div className="flex items-center justify-center p-4 sm:p-6">
          <div className="w-full">
            <img
              src="/img-segunda-dobra.png"
              alt="image"
              className="h-64 w-full object-contain sm:h-80 md:h-[420px] lg:h-[480px]"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="flex flex-col items-start justify-center gap-5 p-5 sm:p-8 lg:p-10">
          <h2 className="text-[#7A2E33] text-2xl leading-tight sm:text-3xl lg:text-4xl">
            Quando você sente que faz muito, mas não avança, o problema pode ser
            falta de <span className="font-bold text-[#5B1F24]">direção</span>.
          </h2>

          <p className="text-base leading-relaxed text-black sm:text-lg lg:text-xl">
            O{" "}
            <span className="font-bold text-[#5B1F24]">Sintonia de Mulher</span>{" "}
            entrega{" "}
            <span className="font-bold text-[#5B1F24]">
              método, organização
            </span>{" "}
            e <span className="font-bold text-[#5B1F24]">aplicação</span>{" "}
            prática para mulheres que querem crescer com direção.
          </p>

          {/* BOTÃO */}
          <div className="pt-1">
            <div className="w-fit rounded-[22px] bg-white p-[1px] shadow-[0_0_5px_rgba(0,0,0,0.4)]">
              <div className="rounded-[22px] bg-gradient-to-r from-[#D85A66] via-[#9E2F3F] to-[#9E2F3F] px-6 py-3 sm:px-8">
                <a
                  href="#"
                  className="block text-center text-base font-light text-white transition hover:brightness-110 sm:text-lg lg:text-xl"
                >
                  Quero garantir minha vaga
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LISTA "VOCÊ VAI SAIR COM" */}
      <div className="mx-auto mt-10 grid max-w-7xl gap-6 px-1 md:grid-cols-[1fr_2fr] md:items-start md:gap-10">
        <div className="flex items-center justify-center h-full text-[#5B1F24] md:justify-center">
          <h2 className="text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Você vai sair com:
          </h2>
        </div>

        <div className="flex flex-col">
          {info.map((inf, idx) => (
            <div
              key={`${inf.content}-${idx}`}
              className="flex items-start gap-3 border-b border-black/20 py-4"
            >
              <div className="mt-1 w-fit rounded-full border border-black/20 p-1">
                <ArrowRight className="h-5 w-5 text-[#9E2F3F]" />
              </div>

              <p className="text-[#5B1F24] text-base leading-relaxed sm:text-lg lg:text-xl">
                {inf.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
