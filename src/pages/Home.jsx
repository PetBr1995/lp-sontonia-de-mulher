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
        <FormSection />
        <footer className="bg-[#9E2F3F] px-4 py-6">
          <img
            src="/RODAPE-LOGOS.png"
            alt="Logos do rodape"
            className="mx-auto h-auto w-full max-w-sm sm:max-w-md lg:max-w-xl object-contain"
          />
        </footer>
      </section>
    </>
  );
};

export default Home;
