import Reveal from "./Reveal";

const FourthSection = () => {
    return (
        <section className="bg-[url(/BG4.png)] bg-no-repeat bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* BLOCO 1 */}
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* TEXTO (esquerda) */}
                    <Reveal className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                        <p className="text-[#7A2E33]/80 text-sm sm:text-base">
                            Idealizadora
                        </p>

                        <h2 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-wide text-[#7A2E33]">
                            DAIANA PEREIRA
                        </h2>

                        <div className="mt-5 space-y-4 text-[#3A2A2A]/80 text-sm sm:text-base leading-relaxed">
                            <p>
                                Formada em Comunicação Social pela UNIMEP, Pós Graduada pela UFAM, Daiana Pereira é uma profissional dedicada e focada, atuou na Gerência de Marketing do Plaza Shopping Itu por quase 04 anos, depois assumiu a Gerência de Marketing do Amazonas Shopping onde realizou projetos dinâmicos e inovadores com destaque para as edições do Amazonas Fashion.
                            </p>
                            <p>
                                Anos depois ela passou a atuar no segmento de eventos atuando como Diretora Executiva de umas das principais empresas do ramo de shows e entretenimento da região norte – Fábrica de Eventos, gerenciando projetos de atrações nacionais e internacionais. Em paralelo ela fundou a DHP Promotion quando viu a necessidade de ativar e conceituar marcas de forma diferenciada nos eventos, passando a realizar projetos corporativos.
                            </p>
                        </div>
                    </Reveal>

                    {/* IMAGEM (direita) */}
                    <Reveal delay={80} className="flex justify-center lg:justify-end">
                        <div className="relative w-[280px] sm:w-[320px]">
                            <img
                                src="/foto-daiana-2.jpeg"
                                alt="Daiana Pereira"
                                className="w-full shadow-[0_0_5px_rgba(0,0,0,0.4)] object-cover rounded-2xl"
                            />
                        </div>
                    </Reveal>
                </div>

                {/* BLOCO 2 */}
                <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
                    {/* IMAGEM (esquerda) */}
                    <Reveal delay={80} className="order-2 flex justify-center lg:order-1 lg:justify-start">
                        <div className="relative w-[280px] sm:w-[320px]">
                            <img
                                src="/CINTIA.jpeg"
                                alt="Cíntia Chagas"
                                className="shadow-[0_0_5px_rgba(0,0,0,0.4)] w-full object-cover rounded-2xl"
                            />
                        </div>
                    </Reveal>

                    {/* TEXTO (direita) */}
                    <Reveal className="order-1 lg:order-2 text-center lg:text-left mx-auto lg:mx-0 max-w-xl">
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
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default FourthSection;
