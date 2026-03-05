import { Calendar, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const HeroSection = () => {
  return (
    <section className="relative bg-[url(/imagem-fundo-terceira-dobra.png)] bg-cover bg-center bg-no-repeat py-10 sm:py-30 md:py-40 lg:py-50">
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-7xl mx-auto flex flex-col  justify-center items-center px-5 sm:px-6">
        {/* TÍTULO */}
        <Reveal once className="text-white text-center">
          <img
            src="/SINTONIA-DE-MULHER-LOGO.png"
            alt="Sintonia de Mulher"
            className="mx-auto h-auto w-64 sm:w-80 lg:w-[26rem] object-contain"
          />
        </Reveal>

        {/* SUBTÍTULO */}
        <Reveal delay={80} className="mt-6 sm:mt-8 max-w-3xl">
          <p className="text-white text-xl sm:text-2xl lg:text-3xl text-center font-light leading-relaxed">
            Um dia para organizar os{" "}
            <span className="font-medium">5 pilares da sua vida</span> com
            método, clareza e direção
          </p>
        </Reveal>

        {/* DATA E LOGO */}
        <Reveal
          delay={120}
          className="mt-8 sm:mt-10 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-white"
        >
          <div className="flex max-w-full gap-2 items-center justify-center text-base sm:text-xl lg:text-2xl text-center">
            <Calendar className="w-6 h-6 lg:w-7 lg:h-7 text-yellow-300" />
            <p>28 de maio de 2026</p>
          </div>

          <div className="flex max-w-full items-center justify-center gap-2">
            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
            <img
              src="/LOGO-NOVA-ERA-HALL-fundo-escuro.png"
              alt="Logo Nova Era Hall"
              className="h-auto w-28 sm:w-40 lg:w-52 object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.65)]"
            />
          </div>
        </Reveal>

        {/* BOTÃO */}
        <Reveal delay={160} className="mt-8 sm:mt-12">
          <div className="bg-[#D85A66] w-fit px-[1px] py-[1px] rounded-[18px]">
            <div className="bg-gradient-to-r from-[#D85A66] via-[#9E2F3F] to-[#9E2F3F] px-8 sm:px-10 py-3 rounded-[18px]">
              <a
                href="#passaportes"
                className="text-white font-light text-lg sm:text-xl lg:text-2xl transition hover:brightness-110"
              >
                Quero garantir minha vaga
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
