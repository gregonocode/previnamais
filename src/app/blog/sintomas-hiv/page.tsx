"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function QuaisOsSintomasDoHIV() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Quais os Sintomas do HIV?</h1>
        
        <Image
          src="/placeholder-hiv.png"
          alt="HIV Symptoms"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6"
        />

        <p className="text-gray-600 mb-4">
          O HIV (Vírus da Imunodeficiência Humana) é um vírus que ataca o sistema imunológico, comprometendo a capacidade do corpo de combater infecções. Identificar os sintomas do HIV é fundamental para buscar diagnóstico e tratamento precoce. Abaixo, explicamos os principais sintomas em diferentes estágios da infecção.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Estágio 1: Infecção Aguda pelo HIV</h2>
        <p className="text-gray-600 mb-4">
          Após a infecção inicial, que pode ocorrer de 2 a 4 semanas após a exposição, algumas pessoas desenvolvem sintomas semelhantes aos de uma gripe. Esses sintomas incluem:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Febre</li>
          <li>Dor de garganta</li>
          <li>Erupções cutâneas (vermelhidão ou manchas na pele)</li>
          <li>Fadiga extrema</li>
          <li>Dores musculares e articulares</li>
          <li>Inchaço dos gânglios linfáticos</li>
          <li>Suores noturnos</li>
        </ul>
        <p className="text-gray-600 mb-4">
          Esses sintomas podem durar de alguns dias a algumas semanas. No entanto, algumas pessoas podem não apresentar sintomas nesse estágio, o que torna os testes regulares essenciais.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Estágio 2: Latência Crônica</h2>
        <p className="text-gray-600 mb-4">
          Após a fase aguda, o HIV entra em um período de latência, que pode durar anos. Durante esse tempo, o vírus continua ativo, mas a pessoa pode não apresentar sintomas perceptíveis. Sem tratamento, o sistema imunológico pode enfraquecer gradualmente, levando ao próximo estágio.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Estágio 3: AIDS</h2>
        <p className="text-gray-600 mb-4">
          Quando não tratado, o HIV pode evoluir para a AIDS (Síndrome da Imunodeficiência Adquirida). Nesse estágio, o sistema imunológico está gravemente comprometido, e os sintomas incluem:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Perda de peso rápida e inexplicável</li>
          <li>Fadiga extrema e persistente</li>
          <li>Infecções oportunistas (como pneumonia ou tuberculose)</li>
          <li>Diarreia crônica</li>
          <li>Febre recorrente</li>
          <li>Lesões na pele ou na boca</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Importância do Diagnóstico Precoce</h2>
        <p className="text-gray-600 mb-4">
          O diagnóstico precoce do HIV é crucial para iniciar o tratamento com terapia antirretroviral (TARV), que pode controlar o vírus, prevenir a progressão para a AIDS e permitir uma vida longa e saudável. Testes de HIV estão disponíveis em clínicas, laboratórios e centros de saúde.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quando Procurar Ajuda?</h2>
        <p className="text-gray-600 mb-4">
          Se você acredita que pode ter sido exposto ao HIV ou apresenta sintomas como os descritos, procure um médico imediatamente. Testes simples e rápidos podem confirmar o diagnóstico, e o tratamento precoce faz toda a diferença.
        </p>

        {/* Card 5: HIV/AIDS */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Estou com HIV/AIDS?
          </h2>
          <p className="mt-2 text-gray-600">
            Responda algumas perguntas e descubra a probabilidade de estar com HIV/AIDS.
          </p>
          <Link href="/quiz/hiv">
            <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
              Iniciar Quiz
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}