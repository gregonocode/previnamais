"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function HepatitesViraisTiposEPrevencao() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Hepatites Virais: Tipos e Prevenção</h1>
        
        <Image
          src="/placeholder-hepatites.png"
          alt="Hepatites Virais"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6"
        />

        <p className="text-gray-600 mb-4">
          As hepatites virais são infecções que afetam o fígado, causadas por diferentes vírus. Elas podem levar a complicações graves, como cirrose e câncer de fígado, se não forem tratadas adequadamente. Este artigo aborda os principais tipos de hepatites virais (A, B, C, D e E), seus sintomas e as medidas de prevenção mais eficazes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Tipos de Hepatites Virais</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Hepatite A</h3>
        <p className="text-gray-600 mb-4">
          A hepatite A é causada pelo vírus HAV e é geralmente transmitida por alimentos ou água contaminados. Os sintomas incluem:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Fadiga</li>
          <li>Náusea e vômitos</li>
          <li>Dor abdominal, especialmente na região do fígado</li>
          <li>Icterícia (pele e olhos amarelados)</li>
          <li>Urina escura e fezes claras</li>
        </ul>
        <p className="text-gray-600 mb-4">
          A hepatite A geralmente é autolimitada, mas a prevenção é essencial.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Hepatite B</h3>
        <p className="text-gray-600 mb-4">
          A hepatite B, causada pelo vírus HBV, é transmitida por contato com sangue, fluidos corporais ou relações sexuais desprotegidas. Pode ser aguda ou crônica. Os sintomas incluem:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Icterícia</li>
          <li>Fadiga prolongada</li>
          <li>Dor abdominal</li>
          <li>Febre leve</li>
          <li>Artralgia (dor nas articulações)</li>
        </ul>
        <p className="text-gray-600 mb-4">
          A hepatite B crônica pode levar a complicações graves, como cirrose e câncer de fígado.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Hepatite C</h3>
        <p className="text-gray-600 mb-4">
          A hepatite C, causada pelo vírus HCV, é transmitida principalmente por contato com sangue infectado, como em transfusões ou uso de agulhas contaminadas. Muitas vezes é assintomática, mas pode causar:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Fadiga crônica</li>
          <li>Icterícia</li>
          <li>Dor abdominal</li>
          <li>Alterações nos exames hepáticos</li>
        </ul>
        <p className="text-gray-600 mb-4">
          A hepatite C crônica é uma das principais causas de transplante de fígado.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Hepatite D</h3>
        <p className="text-gray-600 mb-4">
          A hepatite D, causada pelo vírus HDV, ocorre apenas em pessoas já infectadas pelo HBV. Ela agrava a infecção por hepatite B e pode levar a sintomas mais graves, como os mencionados acima.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Hepatite E</h3>
        <p className="text-gray-600 mb-4">
          A hepatite E, causada pelo vírus HEV, é transmitida principalmente por água ou alimentos contaminados, sendo mais comum em áreas com saneamento precário. Os sintomas são semelhantes aos da hepatite A, incluindo icterícia, náusea e fadiga.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Prevenção das Hepatites Virais</h2>
        <p className="text-gray-600 mb-4">
          A prevenção das hepatites virais envolve medidas específicas para cada tipo, mas algumas estratégias gerais incluem:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Vacinação:</strong> Existem vacinas eficazes contra hepatites A e B, disponíveis no SUS para grupos prioritários, como crianças, adolescentes e pessoas em situação de risco.</li>
          <li><strong>Uso de preservativos:</strong> Para hepatites B e D, o uso de preservativos durante relações sexuais reduz o risco de transmissão.</li>
          <li><strong>Higiene alimentar:</strong> Lave bem os alimentos, beba água potável e evite consumir alimentos crus em áreas de risco para hepatites A e E.</li>
          <li><strong>Esterilização de equipamentos:</strong> Evite o compartilhamento de agulhas, seringas ou objetos cortantes, e certifique-se de que equipamentos médicos e de estética (como em tatuagens ou manicure) sejam devidamente esterilizados.</li>
          <li><strong>Testagem regular:</strong> Pessoas com comportamento de risco (como múltiplos parceiros sexuais ou uso de drogas injetáveis) devem fazer testes regulares para hepatites B e C.</li>
          <li><strong>Prevenção na gravidez:</strong> Mulheres grávidas devem ser testadas para hepatite B para evitar a transmissão ao bebê. A vacinação do recém-nascido é recomendada nas primeiras horas de vida.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Diagnóstico e Tratamento</h2>
        <p className="text-gray-600 mb-4">
          O diagnóstico das hepatites virais é feito por exames de sangue que detectam anticorpos ou o material genético do vírus. O tratamento varia:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Hepatite A e E:</strong> Geralmente não requerem tratamento específico, apenas cuidados de suporte, como repouso e hidratação.</li>
          <li><strong>Hepatite B:</strong> Pode ser tratada com medicamentos antivirais para casos crônicos, sob supervisão médica.</li>
          <li><strong>Hepatite C:</strong> Tratamentos modernos com antivirais de ação direta curam a maioria dos casos.</li>
          <li><strong>Hepatite D:</strong> O tratamento é mais complexo e geralmente focado em controlar a hepatite B.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quando Procurar Ajuda?</h2>
        <p className="text-gray-600 mb-4">
          Se você apresenta sintomas como icterícia, fadiga persistente, dor abdominal ou acredita que pode ter sido exposto a algum vírus da hepatite, procure um médico imediatamente. Testes regulares e vacinação são fundamentais para proteger sua saúde e prevenir complicações.
        </p>

        {/* Card 8: Hepatites Virais */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Estou com Hepatites Virais?
          </h2>
          <p className="mt-2 text-gray-600">
            Responda algumas perguntas e descubra a probabilidade de estar com Hepatites Virais.
          </p>
          <Link href="/quiz/hepatites">
            <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
              Iniciar Quiz
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}