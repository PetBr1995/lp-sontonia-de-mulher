import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const FifteenthSection = () => {
  const cardInfo = [
    { content: "Aplicação prática do Método 5P" },
    { content: "Exercícios guiados" },
    { content: "Workbook físico exclusivo" },
    { content: "Plano executável de 30 dias" },
    { content: "Networking estratégico" },
    { content: "Ambiente estruturado para foco e decisão" },
  ];

  return (
    <section className="relative bg-[url(/HeroBanner.png)] bg-cover bg-center py-12 px-4 text-white">
      <div className="absolute bottom-0 left-0 right-0 z-[100] h-1 will-change-scroll bg-gradient-to-r from-[#D85A66] via-[#9E2F3F]/50 to-[#9E2F3F]/10"></div>
      {/* OVERLAY ESCURO */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <Reveal once>
          <h1 className="text-center text-3xl sm:text-4xl leading-tight">
            Um ÚNICO DIA pode redefinir o seu PRÓXIMO ANO
          </h1>
        </Reveal>

        <Reveal delay={80}>
          <h3 className="text-center py-8 text-2xl sm:text-3xl">
            Durante o evento você terá:
          </h3>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardInfo.map((info, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 border-b border-white/20 pb-3"
            >
              <div className="rounded-full border border-white/20 p-1">
                <ArrowRight className="h-5 w-5 text-[#9E2F3F]" />
              </div>

              <h2 className="text-lg sm:text-xl">
                {info.content}
              </h2>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default FifteenthSection;
