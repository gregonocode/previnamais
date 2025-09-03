"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function BlogPage() {
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
                src="/previna.svg"
                alt="Previna Mais BV Logo"
                width={60}
                height={20}
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/policies" className="text-gray-600 hover:text-gray-900">Políticas</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900 font-semibold">Blog</a>
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
                <a href="/policies" className="block text-gray-600 hover:text-gray-900 px-3 py-2">Políticas</a>
                <a href="/blog" className="block text-gray-600 hover:text-gray-900 px-3 py-2 font-semibold">Blog</a>
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
            Blog do Previna Mais BV
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Fique por dentro de notícias, dicas e informações sobre ISTs, prevenção e saúde sexual. Sempre consulte um profissional de saúde para orientação personalizada.
          </p>
        </section>

        <section className="mt-12 max-w-3xl mx-auto">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Sintomas do HIV */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder-hiv.png"
                  alt="Sintomas do HIV"
                  width={300}
                  height={200}
                  className="mx-auto rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Quais os Sintomas do HIV?
              </h2>
              <p className="mt-2 text-gray-600">
                Os primeiros sintomas do HIV incluem febre, mal-estar, dor de cabeça e inchaço nos gânglios, semelhantes a uma gripe. Muitos casos são assintomáticos, por isso testes regulares são essenciais.
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Ler Mais
              </button>
            </div>

            {/* Card 2: Sintomas da Sífilis */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder-sifilis.png"
                  alt="Sintomas da Sífilis"
                  width={300}
                  height={200}
                  className="mx-auto rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Quais os Sintomas da Sífilis?
              </h2>
              <p className="mt-2 text-gray-600">
                A sífilis apresenta feridas indolores na fase primária, manchas na pele na secundária e pode levar a complicações graves se não tratada. Consulte um médico ao notar sintomas..
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Ler Mais
              </button>
            </div>

            {/* Card 3: Prevenção da Clamídia */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder-clamidia.png"
                  alt="Prevenção da Clamídia"
                  width={300}
                  height={200}
                  className="mx-auto rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Como Prevenir a Clamídia?
              </h2>
              <p className="mt-2 text-gray-600">
                Previna a clamídia usando preservativos em todas as relações sexuais e realizando testes regulares, especialmente se houver múltiplos parceiros. O tratamento é com antibióticos..
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Ler Mais
              </button>
            </div>

            {/* Card 4: Vacina contra HPV */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder-hpv.png"
                  alt="Vacina contra HPV"
                  width={300}
                  height={200}
                  className="mx-auto rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Vacina contra HPV: Por Que Tomar?
              </h2>
              <p className="mt-2 text-gray-600">
                A vacina contra HPV protege contra tipos que causam verrugas genitais e cânceres. No Brasil, é dose única para 9-14 anos, gratuita no SUS. Vacine-se para prevenir..
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Ler Mais
              </button>
            </div>

            {/* Card 5: Tratamento da Gonorreia */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder-gonorreia.png"
                  alt="Tratamento da Gonorreia"
                  width={300}
                  height={200}
                  className="mx-auto rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Tratamento da Gonorreia
              </h2>
              <p className="mt-2 text-gray-600">
                O tratamento da gonorreia envolve antibióticos como ceftriaxona e azitromicina. É essencial tratar parceiros para evitar reinfecção e complicações..
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Ler Mais
              </button>
            </div>

            {/* Card 6: Hepatites Virais */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder-hepatites.png"
                  alt="Hepatites Virais"
                  width={300}
                  height={200}
                  className="mx-auto rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Hepatites Virais: Tipos e Prevenção
              </h2>
              <p className="mt-2 text-gray-600">
                Hepatites A, B, C, D, E: previna com vacinas (A,B), higiene, sexo seguro e evitando compartilhamento de agulhas. Testes regulares são cruciais..
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Ler Mais
              </button>
            </div>

            {/* Card 7: Mitos sobre ISTs */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder-mitos-ists.png"
                  alt="Mitos sobre ISTs"
                  width={300}
                  height={200}
                  className="mx-auto rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Mitos sobre ISTs
              </h2>
              <p className="mt-2 text-gray-600">
                Desvende mitos como "ISTs só afetam certas pessoas" ou "sem sintomas, não há infecção". Qualquer um pode contrair ISTs; testes são essenciais..
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Ler Mais
              </button>
            </div>

            {/* Card 8: Importância dos Testes Regulares */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder-testes-ists.png"
                  alt="Importância dos Testes Regulares"
                  width={300}
                  height={200}
                  className="mx-auto rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Importância dos Testes Regulares para ISTs
              </h2>
              <p className="mt-2 text-gray-600">
                Testes regulares detectam ISTs assintomáticas, permitem tratamento precoce, previnem complicações e interrompem a transmissão..
              </p>
              <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
                Ler Mais
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}