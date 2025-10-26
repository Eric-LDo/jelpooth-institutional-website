import Motion from "../../components/Motion";
import Pages from "@/app/components/Pages";

export default function AboutUs(){
    
    return(
        <Pages>
            
            <section>
                <div className="h-60 bg-[url('/assets/images/aboutus_bg.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center rounded-[25px] m-2">
                    <div className="bg-black opacity-80 p-5 h-full w-full rounded-[25px]">
                        <h1 className="text-white text-4xl font-bold flex items-center justify-center h-full">Sobre Nós</h1>
                    </div>
                </div>
            </section>

            <section className="min-h-60 w-full m-2 flex bg-black flex-col md:flex-row gap-8 justify-between items-center py-8">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-4 flex flex-row">
                        Sobre a
                        <span className="text-2xl font-bold ml-2 text-blue-600">Jelpooth</span>
                    </h1>
                    <p className="text-justify">
                        A Jelpooth é uma empresa que vai ajudar a solucionar seus problemas.
                    </p>
                </div>
                <div className="flex-1 flex justify-center items-center flex-col gap-6">
                    <p className="text-justify md:text-left">
                        Jelpooth é uma empresa especializada em soluções empresariais, com especialistas em gestão, tecnologia e inovação, dedicada a impulsionar o crescimento e a eficiência de negócios em todos os segmentos.
                    </p>
                    <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-5 py-2 rounded-lg flex flex-row text-white items-center">
                        Quero fazer uma consulta 
                        <img src="/assets/icons/arrow.svg" className="w-5 ml-3"/>
                    </button>
                </div>
            </section>

            <Motion>
                <section className="w-full p-2 pr-5">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                
                            <div className="w-full md:w-1/2 h-84 bg-[url('/assets/images/aboutus_mission.jpg')] bg-cover bg-center rounded-[25px] relative">
                                <div className="absolute inset-0 bg-[#000000a8] flex flex-col items-center justify-center rounded-[25px] md:hidden">
                                    <h1 className="text-white text-2xl font-bold">Nossa Missão</h1>
                                    <p className="text-justify">
                                    Tudo começou com uma ideia simples: usar a tecnologia não apenas como ferramenta, mas como ponte para o crescimento.
                                    <br/>
                                    Vimos empresas incríveis travadas por processos manuais, equipes sobrecarregadas e oportunidades perdidas por falta de presença digital. Foi aí que entendemos nosso propósito: transformar tecnologia em resultado real.
                                    <br/>
                                    Criamos soluções sob medida — sites que vendem, aplicativos que facilitam, sistemas que escalam.
                                    Cada projeto que entregamos carrega o mesmo objetivo: tornar o digital um aliado estratégico do seu negócio, simplificando o que é complexo e acelerando o que realmente importa.
                                    <br/>
                                    Porque, no fim das contas, nossa missão não é só desenvolver tecnologia.
                                    É impulsionar histórias de sucesso.
                                    </p>
                                </div>
                            </div>
                
                
                            <div className="w-full md:w-1/2 hidden md:block">
                                <h1 className="text-2xl md:text-4xl font-bold mb-4">Nossa Missão</h1>
                                <p className="text-justify">
                                    Tudo começou com uma ideia simples: usar a tecnologia não apenas como ferramenta, mas como ponte para o crescimento.
                                    <br/>
                                    Vimos empresas incríveis travadas por processos manuais, equipes sobrecarregadas e oportunidades perdidas por falta de presença digital. Foi aí que entendemos nosso propósito: transformar tecnologia em resultado real.
                                    <br/>
                                    Criamos soluções sob medida — sites que vendem, aplicativos que facilitam, sistemas que escalam.
                                    Cada projeto que entregamos carrega o mesmo objetivo: tornar o digital um aliado estratégico do seu negócio, simplificando o que é complexo e acelerando o que realmente importa.
                                    <br/>
                                    Porque, no fim das contas, nossa missão não é só desenvolver tecnologia.
                                    É impulsionar histórias de sucesso.
                                </p>
                            </div>
                    </div>
                </section>
            </Motion>
            <section className="w-full p-2 pr-5">
                <div className="w-full h-200">

                </div>
            </section>
        
        </Pages>
    )
}