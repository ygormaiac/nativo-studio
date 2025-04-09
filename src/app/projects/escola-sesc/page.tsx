"use client";

import FadeInSection from "@/components/FadeSection";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const projects = [
  {
    id: 1,
    img: '/centenario.webp',
    title: 'Escola Educar Sesc',
    type: {
      primary: 'sinalização',
      secondary: 'identidade',
    },
    url: '/projects/centenario',
  },
  {
    id: 2,
    img: '/exibe.webp',
    title: 'Exibe',
    type: {
      primary: 'sinalização',
      secondary: 'editorial',
    },
    url: '/projects/exibe',
  },
];

export default function EscolaSesc() {
  const handleClickLink = (link: string) => {
    if (typeof window !== "undefined") {
      window.open(link, "_self");
    }
  }

  return (
    <div className="container mx-auto py-10 px-4 pt-30">
      <FadeInSection>
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl text-black font-bold tracking-wider">Escola Sesc</h1>
            <p className="text-gray-700 text-xs">Fortaleza - CE . 2020</p>
          </div>
          <div className="max-w-sm flex flex-col justify-end">
            <span className="mt-1 text-black border-1 border-black rounded-xl text-xs px-2 max-w-21">sinalização</span>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="bg-none sm:bg-none lg:bg-[url('/fundo-centenario-topo.png')] bg-top-right flex flex-col gap-10">
          <FadeInSection>
            <div className="pt-10">
              <Image src="/escola-sesc.webp" alt="Foto do Projeto Escola Sesc" width={1000} height={600} className="object-cover w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px]" />
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="relative flex justify-start lg:justify-end">
              <div className="hidden lg:block absolute top-1/7 lg:left-135 transform -translate-y-1/2 -translate-x-8">
                <Image width={24} height={24} src="/seta-texto.png" alt="Seta" className="w-24 h-auto" />
              </div>
              <div className="flex flex-col text-gray-700 gap-4 max-w-xl text-left text-lg tracking-wide font-light bg-white">
                <p>Através de um projeto de wayfinding moderno em harmonia com o espaço, buscou-se fortalecer a nova identidade arquitetônica do complexo.</p>
                <p>Fazendo conexão com o Namming, o conceito aqui usado se fortifica com o uso inevitável da curva. Esta, formada através do pontilhismo, que traz leveza e gera um grafismo que remete as colunas da torre projetada por Carlos Bratke.</p>
                <p>Devido ao uso do edifício, optou-se por tipografia e ícones sóbrios construindo uma linguagem visual e corporativa, facilitando a funcionalidade das peças e a transmissão das mensagens. Os materiais escolhidos geram contraste entre a luz e as chapas metálicas perfuradas, demarcando os acessos e destacando a informação presente nas peças.</p>
              </div>
            </div>
          </FadeInSection>
          <div className="flex flex-col gap-10">
            <FadeInSection>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
                  <Image
                    width={400}
                    height={400}
                    src="/sesc-1.webp"
                    alt="Escola Sesc"
                    className="self-start w-full md:w-[520px] h-[480px] object-cover"
                  />
                  <Image
                    width={400}
                    height={400}
                    src="/sesc-2.webp"
                    alt="Escola Sesc"
                    className="self-start w-full md:w-[520px] h-[480px] object-cover"
                  />
                  <Image
                    width={400}
                    height={400}
                    src="/sesc-3.webp"
                    alt="Escola Sesc"
                    className="self-start w-full md:w-[520px] h-[480px] object-cover"
                  />
                </div>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="w-full flex justify-start lg:justify-end">
                <p className="text-black text-3xl tracking-wider font-bold max-w-xl bg-white">
                  "Através de um projeto de wayfinding moderno em harmonia com o espaço, buscou-se fortalecer a nova identidade arquitetônica do complexo."
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>
      <div className="flex flex-col gap-10 pt-10">
        <FadeInSection>
          <div>
            <Image src="/sesc-4.webp" alt="Foto do Projeto Escola Sesc" width={1000} height={600} className="object-cover w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px]" />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
              <Image
                width={400}
                height={400}
                src="/sesc-5.webp"
                alt="Escola Sesc"
                className="self-start w-full md:w-[780px] h-[480px] object-cover"
              />
              <Image
                width={400}
                height={400}
                src="/sesc-6.webp"
                alt="Escola Sesc"
                className="self-start w-full md:w-[450px] h-[480px] object-cover"
              />
            </div>
          </div>
        </FadeInSection>
      </div>
      <div className="flex flex-col gap-10 pt-10 bg-none sm:bg-none lg:bg-[url('/fundo-centenario.png')] bg-bottom bg-contain bg-no-repeat" style={{ backgroundPosition: '120% center' }}>
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
              <Image
                width={400}
                height={400}
                src="/sesc-7.webp"
                alt="Escola Sesc"
                className="self-start w-full md:w-[520px] h-[480px] object-cover"
              />
              <Image
                width={400}
                height={400}
                src="/sesc-8.webp"
                alt="Escola Sesc"
                className="self-start w-full md:w-[520px] h-[480px] object-cover"
              />
              <Image
                width={400}
                height={400}
                src="/sesc-9.webp"
                alt="Escola Sesc"
                className="self-start w-full md:w-[520px] h-[480px] object-cover"
              />
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
              <Image
                width={400}
                height={400}
                src="/sesc-10.webp"
                alt="Escola Sesc"
                className="self-start w-full md:w-[605px] h-[480px] object-cover"
              />
              <Image
                width={400}
                height={400}
                src="/sesc-11.webp"
                alt="Escola Sesc"
                className="self-start w-full md:w-[605px] h-[480px] object-cover"
              />
            </div>
          </div>
        </FadeInSection>
        <div className="flex flex-col gap-10">
          <FadeInSection>
            <div className="max-w-sm flex flex-col gap-4 text-lg tracking-wide font-light text-gray-700">
              <p>
                O objetivo foi construir uma nova identidade que respeite, enalteça e interaja com a arquitetura e o paisagismo do empreendimento.
              </p>
              <p>A partir do conceito arquitetônico do complexo, o Namming do empreendimento foi gerado. Optamos por interpretar a conexão dos grandes eixos e das linhas que unem o complexo como base gráfica. Elementos como a curva, ângulos retos e círculos fazem ponte entre a identidade e a edificação.</p>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div>
              <Image src="/sesc-12.webp" alt="Foto do Projeto Centenário" width={1000} height={600} className="object-cover w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px]" />
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="w-full flex justify-start">
              <p className="text-black text-3xl tracking-wider font-bold max-w-lg">
                "Uma nova identidade que respeita, enaltece e interage com a arquitetura e o paisagismo do empreendimento."
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
      <div className="flex flex-col gap-10 pt-10">
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
              <Image
                width={400}
                height={400}
                src="/sesc-13.webp"
                alt="Escola Sesc"
                className="w-full md:w-[48%] h-[300px] md:h-[480px] object-cover"
              />
              <Image
                width={400}
                height={400}
                src="/sesc-14.webp"
                alt="Escola Sesc"
                className="w-full md:w-[48%] h-[300px] md:h-[480px] object-cover"
              />
              <Image
                width={400}
                height={400}
                src="/sesc-15.webp"
                alt="Escola Sesc"
                className="w-full md:w-[48%] h-[300px] md:h-[480px] object-cover"
              />
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Image src="/sesc-16.webp" alt="Foto do Projeto Escola Sesc" width={1000} height={600} className="object-cover w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px]" />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
              <Image
                width={400}
                height={400}
                src="/sesc-17.webp"
                alt="Escola Sesc"
                className="w-full md:w-[48%] h-[300px] md:h-[480px] object-cover"
              />
              <Image
                width={400}
                height={400}
                src="/sesc-18.webp"
                alt="Escola Sesc"
                className="w-full md:w-[48%] h-[300px] md:h-[480px] object-cover"
              />
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="flex flex-col justify-start pt-10">
            <div className="hidden lg:block transform -translate-y-1/2 -translate-x-8 pl-8">
              <Image width={24} height={24} src="/seta-ficha-tecnica.png" alt="Seta" className="w-16 h-auto" />
            </div>
            <div className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-4 text-gray-700 max-w-md font-light text-left">
              <p className="col-span-2 font-bold">Ficha Técnica</p>

              <p className="font-semibold">Cliente</p>
              <p>Parceria com Rede Arquitetos para Fecomércio-CE</p>

              <p className="font-semibold">Local/ano</p>
              <p>Fortaleza-CE/2020</p>

              <p className="font-semibold">Equipe</p>
              <div>
                <p>Lisiane Di Corá</p>
                <p>Natália Marques</p>
                <p>Vitor Alencar</p>
              </div>

              <p className="font-semibold">Fonte | Tipografia</p>
              <div>
                <p>Monoton</p>
                <p>Filson</p>
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <h2 className="font-semibold text-black text-3xl pb-6">Veja mais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
            {projects.map((project) => (
              <div key={project.id} className="relative group overflow-hidden shadow-lg cursor-pointer" onClick={() => handleClickLink(project.url)}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-yellow-200 bg-opacity-90 flex flex-col justify-between text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                  <div className="flex flex-col">
                    <h3 className="mt-2 text-xl font-semibold text-left">{project.title}</h3>
                    <span className="mt-1 text-black border-1 border-black rounded-xl text-xs px-2 max-w-21">{project.type.primary}</span>
                    <span className="mt-1 text-black border-1 border-black rounded-xl text-xs px-2 max-w-21">{project.type.secondary}</span>
                  </div>
                  <div className="flex justify-end">
                    <FaPlus className="text-3xl text-black" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </div >
  )
}