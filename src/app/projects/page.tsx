"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const projects = [
  {
    id: 1,
    img: '/centenario.webp',
    title: 'Centenário',
    type: {
      primary: 'sinalização',
      secondary: 'identidade',
    },
    url: '/projects/centenario',
  },
  {
    id: 2,
    img: '/escola-sesc.webp',
    title: 'Escola Educar Sesc',
    type: {
      primary: 'sinalização',
      secondary: 'identidade',
    },
    url: '/projects/fecomercio',
  },
  {
    id: 3,
    img: '/exibe.webp',
    title: 'Exibe',
    type: {
      primary: 'sinalização',
      secondary: 'editorial',
    },
    url: '/projects/exibe',
  },
];

const projectTypes = ['sinalização', 'editorial', 'identidade']

export default function Projects() {
  const [selectedType, setSelectedType] = useState('')

  const handleClickLink = (link: string) => {
    window.open(link, "_self")
  }

  const filteredProjects = projects.filter(project =>
    selectedType ? project.type.primary === selectedType || project.type.secondary === selectedType : true
  )

  return (
    <div className="container mx-auto py-10 px-4 pt-30">
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
        {projectTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`cursor-pointer px-5 py-1 border border-black rounded-2xl text-sm font-medium transition-colors ${selectedType === type ? 'bg-yellow-200 text-black' : 'bg-transparent text-black hover:bg-yellow-200'}`}
          >
            {type}
          </button>
        ))}
        <button
          onClick={() => setSelectedType('')}
          className="cursor-pointer px-5 py-1 border border-black rounded-2xl text-sm font-medium bg-transparent text-black hover:bg-yellow-200"
        >
          todos
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
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
    </div>
  );
}
