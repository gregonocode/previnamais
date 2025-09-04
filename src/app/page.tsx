"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function QuizPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <Image
                src="/previna.svg" // Substitua pelo caminho do seu logo
                alt="Logo"
                width={60}
                height={20}
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/policies" className="text-gray-600 hover:text-gray-900">Políticas</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/politica" className="block text-gray-600 hover:text-gray-900 px-3 py-2">Políticas</a>
                <a href="/blog" className="block text-gray-600 hover:text-gray-900 px-3 py-2">Blog</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center">
          {/* Main Title */}
          <h1
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#181818] to-[#404242] text-transparent bg-clip-text"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Inicie Seu Quiz de Saúde
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          </p>

          {/* Quiz Card */}
          <div className="mt-8 max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Descubra o que seus sintomas podem indicar
            </h2>
            <p className="mt-2 text-gray-600">
              Responda algumas perguntas rápidas e receba uma estimativa de risco para diferentes ISTs.
            </p>
            <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
              Começar Agora
            </button>
          </div>
        </section>

        <section className="mt-12 max-w-3xl mx-auto">
          {/* Título */}
          <h1
            className="text-center text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#181818] to-[#404242] text-transparent bg-clip-text mb-8"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
          >
            Quizzes de Diagnóstico Específico
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Herpes Genital */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Estou com Herpes Genital?
              </h2>
              <p className="mt-2 text-gray-600">
                Responda algumas perguntas e descubra a probabilidade de estar com Herpes Genital.
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Iniciar Quiz
              </button>
            </div>

            {/* Card 2: Clamídia */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Estou com Clamídia?
              </h2>
              <p className="mt-2 text-gray-600">
                Responda algumas perguntas e descubra a probabilidade de estar com Clamídia.
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Iniciar Quiz
              </button>
            </div>

            {/* Card 3: Tricomoníase */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Estou com Tricomoníase?
              </h2>
              <p className="mt-2 text-gray-600">
                Responda algumas perguntas e descubra a probabilidade de estar com Tricomoníase.
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Iniciar Quiz
              </button>
            </div>

            {/* Card 4: Gonorreia */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Estou com Gonorreia?
              </h2>
              <p className="mt-2 text-gray-600">
                Responda algumas perguntas e descubra a probabilidade de estar com Gonorreia.
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Iniciar Quiz
              </button>
            </div>

            {/* Card 5: HIV/AIDS */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Estou com HIV/AIDS?
              </h2>
              <p className="mt-2 text-gray-600">
                Responda algumas perguntas e descubra a probabilidade de estar com HIV/AIDS.
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Iniciar Quiz
              </button>
            </div>

            {/* Card 6: HPV */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Estou com HPV?
              </h2>
              <p className="mt-2 text-gray-600">
                Responda algumas perguntas e descubra a probabilidade de estar com HPV.
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Iniciar Quiz
              </button>
            </div>

            {/* Card 7: Sífilis */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Estou com Sífilis?
              </h2>
              <p className="mt-2 text-gray-600">
                Responda algumas perguntas e descubra a probabilidade de estar com Sífilis.
              </p>
              <Link href="/quiz/sifilis">
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Iniciar Quiz
              </button>
              </Link>
            </div>

            {/* Card 8: Hepatites Virais */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Estou com Hepatites Virais?
              </h2>
              <p className="mt-2 text-gray-600">
                Responda algumas perguntas e descubra a probabilidade de estar com Hepatites Virais.
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Iniciar Quiz
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}