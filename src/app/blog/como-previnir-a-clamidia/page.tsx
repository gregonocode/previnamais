"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function QuaisOsSintomasEComoPrevenirAClamidia() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Quais os Sintomas e Como Prevenir a Clamídia?</h1>
        
        <Image
          src="/placeholder-clamidia.png"
          alt="Clamídia Symptoms and Prevention"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6"
        />

        <p className="text-gray-600 mb-4">
          A clamídia é uma infecção sexualmente transmissível (IST) causada pela bactéria *Chlamydia trachomatis*. É uma das ISTs mais comuns e pode afetar tanto homens quanto mulheres. Muitas vezes, a clamídia é assintomática, o que torna o diagnóstico e a prevenção ainda mais importantes. Abaixo, explicamos os sintomas da clamídia e como preveni-la.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sintomas da Clamídia</h2>
        <p className="text-gray-600 mb-4">
          A clamídia é frequentemente chamada de "infecção silenciosa" porque muitas pessoas não apresentam sintomas. Quando os sintomas ocorrem, eles geralmente aparecem de 1 a 3 semanas após a exposição à bactéria. Os sintomas variam entre homens e mulheres:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Sintomas em Mulheres</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Secreção vaginal anormal (com odor ou cor incomuns).</li>
          <li>Dor ou queimação ao urinar.</li>
          <li>Dor durante relações sexuais.</li>
          <li>Dor abdominal ou pélvica.</li>
          <li>Sangramento vaginal fora do período menstrual.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Sintomas em Homens</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Secreção uretral (pus ou líquido claro).</li>
          <li>Dor ou queimação ao urinar.</li>
          <li>Dor ou inchaço nos testículos (menos comum).</li>
        </ul>

        <p className="text-gray-600 mb-4">
          A clamídia também pode afetar outras áreas, como o reto (causando dor, secreção ou sangramento) ou a garganta (em casos de transmissão por sexo oral). Se não tratada, a infecção pode levar a complicações graves, como infertilidade, doença inflamatória pélvica em mulheres e epididimite em homens.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Como Prevenir a Clamídia</h2>
        <p className="text-gray-600 mb-4">
          A prevenção da clamídia envolve práticas seguras e medidas proativas para reduzir o risco de infecção. Aqui estão algumas estratégias eficazes:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Uso de preservativos:</strong> Utilizar preservativos (masculinos ou femininos) corretamente em todas as relações sexuais, sejam vaginais, anais ou orais, reduz significativamente o risco de contrair clamídia.</li>
          <li><strong>Testagem regular:</strong> Realizar testes regulares para ISTs, especialmente se você tem múltiplos parceiros sexuais ou um novo parceiro. A detecção precoce permite tratamento rápido.</li>
          <li><strong>Comunicação com parceiros:</strong> Converse com seus parceiros sexuais sobre histórico de ISTs e incentive a testagem mútua antes de iniciar uma relação sem proteção.</li>
          <li><strong>Monogamia mútua:</strong> Manter uma relação monogâmica com um parceiro que também foi testado e não apresenta infecções pode reduzir o risco.</li>
          <li><strong>Evitar sexo desprotegido:</strong> Evite relações sexuais desprotegidas, especialmente com parceiros cujo estado de saúde sexual é desconhecido.</li>
          <li><strong>Consulta médica:</strong> Se você suspeita de exposição à clamídia ou apresenta sintomas, procure um médico imediatamente para diagnóstico e tratamento.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Diagnóstico e Tratamento</h2>
        <p className="text-gray-600 mb-4">
          A clamídia é facilmente diagnosticada por meio de testes de urina ou amostras de secreção genital. O tratamento geralmente envolve antibióticos, como azitromicina ou doxiciclina, que são altamente eficazes quando tomados corretamente. É importante que todos os parceiros sexuais recentes também sejam testados e tratados para evitar reinfecção.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quando Procurar Ajuda?</h2>
        <p className="text-gray-600 mb-4">
          Se você notar sintomas como secreção anormal, dor ao urinar ou outros sinais descritos, ou se acredita que pode ter sido exposto à clamídia, procure um médico imediatamente. Mesmo na ausência de sintomas, testes regulares são recomendados para pessoas sexualmente ativas, especialmente em grupos de risco.
        </p>

        {/* Card 2: Clamídia */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Estou com Clamídia?
          </h2>
          <p className="mt-2 text-gray-600">
            Responda algumas perguntas e descubra a probabilidade de estar com Clamídia.
          </p>
          <Link href="/quiz/clamidia">
            <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
              Iniciar Quiz
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}