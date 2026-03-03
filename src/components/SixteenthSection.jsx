import Passaportes from "./Passaportes";
import Reveal from "./Reveal";

const SixteenthSection = () => {
    const cardInfo = [
      { content: "Quer crescer com inteligência" },
      { content: "Está pronta para tomar grandes decisões" },
      { content: "Não quer mais viver sem propósito" },
      { content: "Busca clareza profissional e pessoal" },
      { content: "Entende que evolução exige trabalho" },
    ];
  
    return (
      <section className="bg-[#D2C9C3] pb-16">
        
        <div className="h-72 bg-[url(/imagem-fundo-terceira-dobra.png)] bg-cover bg-center bg-no-repeat flex items-center justify-center">
          <Reveal once>
            <h2 className="text-white text-3xl text-center px-4">
              O Sintonia de mulher é para quem:
            </h2>
          </Reveal>
        </div>
  
        <Reveal
          delay={80}
          className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 px-4 -mt-14"
        >
          {cardInfo.map((info, idx) => (
            <div
              key={idx}
              className="
                shadow-[0_6px_12px_rgba(0,0,0,0.4)]
                relative
                w-60
                min-h-[140px]
                border
                border-black/30
                bg-white
                backdrop-blur-sm
                p-6
                rounded-2xl
                text-center
                flex items-center justify-center
                
                after:content-['']
                after:absolute
                after:-top-0
                after:left-1/2
                after:-translate-1/2
                after:w-18
                after:h-18
                after:bg-[url(/badge-lp-sintonia-mulher.png)]
                after:bg-contain
                after:bg-no-repeat
                after:bg-center
                after:block
              "
            >
              <h2 className="text-black text-lg leading-snug">
                {info.content}
              </h2>
            </div>
          ))}
        </Reveal>
        <Passaportes/>
      </section>
    );
  };
  
  export default SixteenthSection;
