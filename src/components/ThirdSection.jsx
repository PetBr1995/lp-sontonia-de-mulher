const ThirdSection = () => {
  const cardInfo = [
    {
      titulo: "Autonomia",
      desc: "Clareza financeira e poder de decisão.",
    },
    {
      titulo: "Profissional",
      desc: "Direção, posicionamento e crescimento estruturado.",
    },
    {
      titulo: "Pessoal",
      desc: "Identidade, prioridades e decisões conscientes.",
    },
    {
      titulo: "Financeiro",
      desc: "Visão de negócio, execução inteligente e geração de valor.",
    },
    {
      titulo: "Saúde",
      desc: "Energia, disciplina e consistência para manter o ritmo.",
    },
    
  ];

  return (
    <section className="bg-[url(/imagem-fundo-terceira-dobra.png)] bg-cover bg-center bg-no-repeat py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mx-auto max-w-4xl text-center text-2xl leading-tight text-[#F3EAEA] sm:text-3xl sm:leading-tight lg:text-4xl">
          <span className="uppercase">O Método 5P</span> organiza sua vida em
          cinco pilares fundamentais
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10 sm:gap-5">
          {cardInfo.map((info, idx) => (
            <div
              key={`${info.titulo}-${idx}`}
              className="
                w-full max-w-[20rem]
                rounded-2xl border border-[#A94A57]/60
                bg-gradient-to-r from-[#4B0F1F] via-[#5A1426] to-[#6A1B2F]
                px-6 py-6
                text-center
                shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                transition
                hover:brightness-110
              "
            >
              <h2 className="text-xl font-medium uppercase tracking-wide text-[#F3EAEA] sm:text-2xl">
                {info.titulo}
              </h2>

              <p className="mt-2 text-base leading-relaxed text-[#E6DCDC] sm:text-[17px]">
                {info.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BOTÃO */}
        <div className="mt-10 flex items-center justify-center sm:mt-12">
          <div className="w-fit rounded-[18px] bg-[#D85A66] p-[1px] shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <div className="rounded-[18px] bg-gradient-to-r from-[#D85A66] via-[#9E2F3F] to-[#9E2F3F] px-8 py-3 sm:px-10">
              <a
                href="#passaportes"
                className="block text-center text-lg font-light text-white transition hover:brightness-110 sm:text-xl lg:text-2xl"
              >
                Quero garantir minha vaga
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;