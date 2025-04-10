import FadeInSection from "@/components/FadeSection";
import Image from "next/image";

export default function About() {
  return (
    <FadeInSection>
      <div className="container mx-auto py-10 px-4 pt-30 bg-none sm:bg-none lg:bg-[url('/sobre-fundo.webp')] lg:bg-cover">
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl tracking-wider text-black font-bold">Sobre nós</h1>
              <p className="text-gray-700 text-lg font-light">De onde somos e o que fazemos</p>
            </div>
            <div className="max-w-xl flex justify-end">
              <p className="text-black text-2xl font-bold tracking-wider">
                "Fortaleza, cidade litorânea onde o verão dura o ano inteiro, é a cidade base do estúdio."
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="pt-10">
            <Image src="/fortaleza-2.webp" alt="Foto do litoral de Fortaleza" width={1000} height={600} className="object-cover w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]" />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="flex justify-start lg:justify-end pt-10">
            <div className="flex flex-col text-gray-700 text-lg font-light tracking-wide gap-4 max-w-xl text-left bg-white">
              <p>Nativo Estúdio de Design, fundado em 2013, é formado por Natália Marques e Vitor Alencar.</p>
              <p>Os integrantes iniciaram o estúdio para atuar no campo do design gráfico impresso e digital, identidade visual e sinalização.</p>
              <p>Fazem parte do portfólio da Nativo trabalhos na área institucional (hospitais, parques, escolas, etc) e comercial, com o principal enfoque no desenvolvimento de projetos de sinalização que dialoguem de forma funcional com o espaço e com o usuário, considerando como pontos importantes execução, materiais e estética dos elementos.</p>
            </div>
          </div>
        </FadeInSection>
        <div className="flex flex-col gap-12 pt-10">
          <FadeInSection>
            {/* Vitor */}
            <div className="relative flex flex-col md:flex-row md:gap-30 gap-6 items-start">
              <Image width={400} height={400} src="/vitor.webp" alt="Vitor Alencar" className="self-start w-full sm:w-auto max-w-sm h-auto object-cover" />
              <div className="hidden lg:block absolute top-1/8 lg:left-100 transform -translate-y-1/2 -translate-x-8">
                <Image width={24} height={24} src="/sobre-seta.png" alt="Seta" className="w-24 h-auto" />
              </div>
              <div className="w-full md:w-auto mt-4 text-left flex flex-col gap-1 bg-white">
                <h3 className="text-2xl tracking-wider font-bold text-black text-left">Vitor Alencar</h3>
                <p className="text-gray-700 font-light tracking-wide max-w-sm">Arquiteto, formado pela Universidade Federal do Ceará (UFC) em 2009.</p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            {/* Natália */}
            <div className="relative flex flex-col md:flex-row md:gap-30 gap-6 items-start">
              <Image width={400} height={400} src="/natalia.webp" alt="Natália Marques" className="self-start w-full sm:w-auto max-w-sm h-auto object-cover" />
              <div className="hidden lg:block absolute top-1/8 left-100 transform -translate-y-1/2 -translate-x-8">
                <Image width={24} height={24} src="/sobre-seta.png" alt="Seta" className="w-24 h-auto" />
              </div>
              <div className="w-full md:w-auto mt-4 text-left flex flex-col gap-1 bg-white">
                <h3 className="text-2xl tracking-wider font-bold text-black">Natália Marques</h3>
                <p className="text-gray-700 font-light tracking-wide max-w-sm">Mestre em Design e Arquitetura pela Faculdade de Arquitetura e Urbanismo da Universidade de São Paulo (FAU-USP) em 2016.</p>
                <p className="text-gray-700 font-light tracking-wide max-w-sm">Arquiteta, formada pela Universidade de Fortaleza (UNIFOR) em 2011.</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </FadeInSection >
  )
}