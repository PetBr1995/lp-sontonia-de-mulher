const FourthSection = () => {
    return (
      <section className="bg-[#EDE4DF] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* BLOCO 1 */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* TEXTO (esquerda) */}
            <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              <p className="text-[#7A2E33]/80 text-sm sm:text-base">
                Idealizadora
              </p>
  
              <h2 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-wide text-[#7A2E33]">
                DAIANA PEREIRA
              </h2>
  
              <div className="mt-5 space-y-4 text-[#3A2A2A]/80 text-sm sm:text-base leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                  ipsum suspendisse ultrices gravida.
                </p>
                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
  
            {/* IMAGEM (direita) */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[280px] sm:w-[320px]">
                <img
                  src="/DAIANA.png"
                  alt="Daiana Pereira"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
  
          {/* BLOCO 2 */}
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            {/* IMAGEM (esquerda) */}
            <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
              <div className="relative w-[280px] sm:w-[320px]">
                <img
                  src="/CINTIA.png"
                  alt="Cíntia Chagas"
                  className="w-full object-cover"
                />
              </div>
            </div>
  
            {/* TEXTO (direita) */}
            <div className="order-1 lg:order-2 text-center lg:text-left mx-auto lg:mx-0 max-w-xl">
              <p className="text-[#7A2E33]/80 text-sm sm:text-base">
                Âncora Nacional
              </p>
  
              <h2 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-wide text-[#7A2E33]">
                CÍNTIA CHAGAS
              </h2>
  
              <div className="mt-5 space-y-4 text-[#3A2A2A]/80 text-sm sm:text-base leading-relaxed">
                <p>
                  Formada em Letras pela UFMG, Cíntia Chagas se tornou uma das
                  especialistas em comunicação mais influentes do país. Ganhou
                  projeção nacional ao criar um inovador método de ensino do
                  português, transformando-se em uma campanha de vendas com mais
                  de 150.000 livros vendidos.
                </p>
                <p>
                  Cíntia alia humor ácido, elegância e defesa da norma culta em
                  cursos virtuais e em vídeos compartilhados com os milhões de
                  seguidores que acumula na internet. Fenômeno nas redes sociais,
                  percorre o Brasil e o exterior como palestrante de oratória e de
                  comportamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FourthSection;