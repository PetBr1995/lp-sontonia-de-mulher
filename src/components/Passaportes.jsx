import { ArrowRight } from "lucide-react";

const Passaportes = () => {
  const cardInfo = [
    {
      titulo: "SETOR",
      destaque: "VIP",
      beneficios: [
        "Entrada diferenciada",
        "Bares e banheiros exclusivos",
        "Visão privilegiada",
        "Kit especial",
      ],
      price: "597,00",
    },
    {
      titulo: "SETOR",
      destaque: "PISTA",
      beneficios: ["Acesso ao evento", "Bares", "Banheiros"],
      price: "297,00",
    },
  ];

  return (
    <section className="after:absolute after:content-[''] after:bg-[#E6E1DA] after:border-b-1 after:border-t-1 after:border-black/20 after:border-black/20 after:h-120 after:top-1/2 after:-translate-y-1/2  after:left-0 after:right-0 after:z-10 my-20 px-4 relative z-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {cardInfo.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#E6E1DA] border-1 border-black/20 relative z-20 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] p-10 flex flex-col justify-between"
          >
            {/* TÍTULO */}
            <h2 className="text-center text-4xl tracking-wide text-[#7A2E33]">
              {card.titulo}{" "}
              <span className="font-semibold">{card.destaque}</span>
            </h2>

            {/* BENEFÍCIOS */}
            <div className="mt-8 space-y-4">
              {card.beneficios.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border-b border-[#7A2E33]/30 pb-3"
                >
                  <div className="rounded-full border border-[#7A2E33]/40 p-1">
                    <ArrowRight className="h-4 w-4 text-[#7A2E33]" />
                  </div>
                  <p className="text-[#7A2E33] text-lg">{item}</p>
                </div>
              ))}
            </div>

            {/* PREÇO */}
            <div className="mt-10 text-center">
              <p className="text-sm tracking-widest text-[#7A2E33]">
                1º LOTE
              </p>

              <div className="mt-2 flex items-end justify-center gap-2">
                <span className="text-xl text-[#7A2E33]">R$</span>
                <span className="text-6xl font-bold text-[#7A2E33]">
                  {card.price.split(",")[0]}
                </span>
                <span className="text-2xl text-[#7A2E33]">
                  ,{card.price.split(",")[1]}
                </span>
              </div>

              <p className="mt-2 text-sm tracking-widest text-[#7A2E33]">
                VAGAS <span className="font-semibold">LIMITADAS</span>
              </p>

              {/* BOTÃO */}
              <div className="mt-6 flex justify-center">
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D85A66] to-[#9E2F3F] text-white shadow-[0_8px_20px_rgba(158,47,63,0.4)] hover:brightness-110 transition">
                  Quero garantir minha vaga
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Passaportes;