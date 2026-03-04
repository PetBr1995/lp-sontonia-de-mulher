import { useState } from "react";
import Reveal from "./Reveal";

const faqItems = [
  {
    question: "Para quem é o evento?",
    answer:
      "O evento é para mulheres que querem mais clareza, organização e direção prática para os próximos passos da vida pessoal e profissional.",
  },
  {
    question: "O que está incluso na inscrição?",
    answer:
      "A inscrição inclui acesso ao evento presencial, participação nas atividades do dia e materiais de apoio disponibilizados pela organização.",
  },
  {
    question: "Como recebo a confirmação da minha vaga?",
    answer:
      "Após o envio dos seus dados, nossa equipe entra em contato pelos canais informados para confirmar sua inscrição e orientar os próximos passos.",
  },
  {
    question: "Posso transferir minha inscrição?",
    answer:
      "Em casos específicos, a transferência pode ser analisada pela organização. Entre em contato com antecedência para validar a possibilidade.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f4f3ea] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal once className="text-center">
          <h2 className="text-3xl text-[#7A2E33] sm:text-4xl">FAQ</h2>
          <p className="mt-3 text-base text-[#7A2E33]/90 sm:text-lg">
            Dúvidas frequentes sobre o evento
          </p>
          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#7A2E33]" />
        </Reveal>

        <Reveal delay={80} className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-xl border border-[#7A2E33]/25 bg-white/60"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-lg text-[#5B1F24]">{item.question}</span>
                  <span
                    className={`text-2xl leading-none text-[#7A2E33] transition-opacity duration-300 ease-out ${
                      isOpen ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="border-t border-[#7A2E33]/15 px-5 py-4">
                      <p className="text-base leading-relaxed text-[#5B1F24]/90">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default FAQSection;
