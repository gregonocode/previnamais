"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function QuaisOsSintomasDaSifilis() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <Link href="/">
              <Image
                src="/previna.svg"
                alt="Logo"
                width={60}
                height={20}
                className="h-10 w-auto"
              />
              </Link>
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
                <a href="/politicas" className="block text-gray-600 hover:text-gray-900 px-3 py-2">Políticas</a>
                <a href="/blog" className="block text-gray-600 hover:text-gray-900 px-3 py-2">Blog</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Quais os Sintomas da Sífilis?</h1>
        
        <Image
          src="/placeholder-sifilis.png"
          alt="Sífilis Symptoms"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6"
        />

        <p className="text-gray-600 mb-4">
          A sífilis é uma infecção sexualmente transmissível (IST) causada pela bactéria *Treponema pallidum*. Ela pode se manifestar em diferentes estágios, cada um com sintomas específicos. O diagnóstico e tratamento precoces são essenciais para evitar complicações graves. Abaixo, detalhamos os sintomas de cada estágio da sífilis.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Estágio 1: Sífilis Primária</h2>
        <p className="text-gray-600 mb-4">
          O primeiro sinal da sífilis geralmente aparece de 2 a 12 semanas após a exposição à bactéria. O principal sintoma é:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Uma ferida indolor (chamada cancro) no local da infecção, geralmente nos genitais, ânus ou boca.</li>
          <li>Inchaço dos gânglios linfáticos próximos à ferida.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          O cancro pode desaparecer sozinho em algumas semanas, mesmo sem tratamento, mas a infecção permanece no corpo e progride para o próximo estágio se não tratada.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Estágio 2: Sífilis Secundária</h2>
        <p className="text-gray-600 mb-4">
          Sem tratamento, a sífilis pode evoluir para o estágio secundário, geralmente semanas ou meses após a infecção inicial. Os sintomas incluem:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Erupções cutâneas, frequentemente nas palmas das mãos ou solas dos pés, que não causam coceira.</li>
          <li>Lesões mucosas na boca, garganta ou genitais.</li>
          <li>Febre leve.</li>
          <li>Fadiga e mal-estar geral.</li>
          <li>Dor de garganta.</li>
          <li>Perda de cabelo em áreas específicas.</li>
          <li>Inchaço dos gânglios linfáticos.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          Esses sintomas podem desaparecer, mas isso não significa que a infecção foi eliminada.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Estágio Latente</h2>
        <p className="text-gray-600 mb-4">
          No estágio latente, a sífilis não apresenta sintomas visíveis, mas a bactéria permanece no corpo. Este estágio pode durar anos, e algumas pessoas nunca desenvolvem sintomas adicionais, enquanto outras podem progredir para o estágio terciário.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Estágio 3: Sífilis Terciária</h2>
        <p className="text-gray-600 mb-4">
          Se não tratada, a sífilis pode evoluir para o estágio terciário, que pode ocorrer anos após a infecção inicial. Este estágio é grave e pode causar:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Danos ao coração e vasos sanguíneos (sífilis cardiovascular).</li>
          <li>Problemas neurológicos, como demência, cegueira ou surdez (neurossífilis).</li>
          <li>Lesões graves na pele, ossos ou órgãos internos.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sífilis Congênita</h2>
        <p className="text-gray-600 mb-4">
          A sífilis pode ser transmitida de uma mãe infectada para o bebê durante a gravidez, resultando em sífilis congênita. Os sintomas em recém-nascidos podem incluir erupções cutâneas, febre, dificuldades respiratórias e complicações graves, como danos ósseos ou neurológicos.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Importância do Diagnóstico e Tratamento</h2>
        <p className="text-gray-600 mb-4">
          A sífilis é facilmente tratável com antibióticos, como a penicilina, especialmente nos estágios iniciais. Testes de sangue e exames clínicos podem confirmar o diagnóstico. É fundamental buscar ajuda médica ao notar qualquer sintoma suspeito ou após uma possível exposição.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quando Procurar Ajuda?</h2>
        <p className="text-gray-600 mb-4">
          Se você notar feridas, erupções cutâneas ou outros sintomas descritos, ou se acredita que pode ter sido exposto à sífilis, procure um médico imediatamente. O diagnóstico precoce e o tratamento adequado podem prevenir complicações graves.
        </p>

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
      </main>
    </div>
  );
}