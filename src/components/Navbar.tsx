"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-black shadow-md z-50 fixed top-0 left-0 h-20 flex items-center">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <a href="/">
          <Image src={"/logo-nativo.png"} alt="Logo Nativo Estúdio" width={160} height={120} priority />
        </a>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl z-50 w-10 h-10 flex items-center justify-center pr-4">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className="gap-16 hidden lg:flex pr-4">
          <li><Link className="hover:bg-yellow-200 rounded-2xl px-4 py-1 tracking-widest font-light" href="/about">sobre</Link></li>
          <li><Link className="hover:bg-yellow-200 rounded-2xl px-4 py-1 tracking-widest font-light" href="/projects">projetos</Link></li>
          <li><Link className="hover:bg-yellow-200 rounded-2xl px-4 py-1 tracking-widest font-light" href="/contact">contato</Link></li>
        </ul>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-4">
            <li><Link href="/about" onClick={() => setIsOpen(false)}>sobre</Link></li>
            <li><Link href="/projects" onClick={() => setIsOpen(false)}>projetos</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>contato</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
