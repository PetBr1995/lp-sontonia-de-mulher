import FifteenthSection from "../components/FifteenthSection";
import FAQSection from "../components/FAQSection";
import FormSection from "../components/FormSection";
import FourthSection from "../components/FourthSection";
import HeroSection from "../components/HeroSection";
import SecondSection from "../components/SecondSection";
import SixteenthSection from "../components/SixteenthSection";
import ThirdSection from "../components/ThirdSection";

const Home = () => {
  return (
    <>
      <section>
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        {/*
        <FifteenthSection />
        */}
        <SixteenthSection />
        <FAQSection />
        <div id="form">
          <FormSection />
        </div>
        <footer className="bg-[#9E2F3F] px-4 py-6">
          <h2 className="mx-auto w-fit text-center font-mansory text-[1rem] uppercase tracking-[0.7em] text-white/80">
            Realização
          </h2>
          <div className="flex items-end justify-center gap-4">
            <img
              src="/logo-digitalhub.svg"
              alt="Logos do rodape"
              className="w-40"
            />
            <img src="/logo_dhp_mp_transparent.png" className="w-40" alt="logo" />
          </div>
        </footer>
      </section>
    </>
  );
};

export default Home;
