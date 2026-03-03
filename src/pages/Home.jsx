import FifteenthSection from "../components/FifteenthSection";
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
        <FifteenthSection />
        <SixteenthSection />
        <FormSection />
        <footer className="bg-[#9E2F3F] px-4 py-6">
          <p className="text-center text-sm text-white sm:text-base">
            Todos os direitos reservados
          </p>
        </footer>
      </section>
    </>
  );
};

export default Home;
