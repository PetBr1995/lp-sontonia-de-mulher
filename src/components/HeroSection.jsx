import { Calendar, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const HeroSection = () => {
  return (
    <section className="relative py-10 sm:py-30 md:py-40 lg:py:50 bg-[url(/HeroBanner.png)] bg-cover bg-no-repeat bg-center">
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-7xl mx-auto flex flex-col  justify-center items-center px-5 sm:px-6">
        {/* TÍTULO */}
        <Reveal once className="text-white text-center">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl leading-[1.05]">
            Sintonia
            <br />
            <span className="flex justify-center items-start items-end gap-3 text-amber-200">
              <span className="text-3xl sm:text-4xl lg:text-5xl text-white">
                de
              </span>
              Mulher
            </span>
          </h1>
        </Reveal>

        {/* SUBTÍTULO */}
        <Reveal delay={80} className="mt-6 sm:mt-8 max-w-3xl">
          <p className="text-white text-xl sm:text-2xl lg:text-3xl text-center font-light leading-relaxed">
            Um dia para organizar os{" "}
            <span className="font-medium">5 pilares da sua vida</span> com
            método, clareza e direção
          </p>
        </Reveal>

        {/* DATA E LOCAL */}
        <Reveal
          delay={120}
          className="mt-8 sm:mt-10 flex flex-col gap-4 uppercase text-white"
        >
          <div className="flex gap-2 items-center justify-center text-lg sm:text-xl lg:text-2xl">
            <Calendar className="w-6 h-6 lg:w-7 lg:h-7" />
            <p>28 de maio de 2026</p>
          </div>

          <div className="flex gap-2 items-center justify-center text-lg sm:text-xl lg:text-2xl">
            <MapPin className="w-6 h-6 lg:w-7 lg:h-7" />
            <p>Centro de Convenções Vasco Vasques / Manaus</p>
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
