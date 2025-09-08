"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function VacinaContraHPVPoiQueTomar() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Vacina contra HPV: Por Que Tomar?</h1>
        
        <Image
          src="/placeholder-hpv.png"
          alt="HPV Vaccine"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6"
        />

        <p className="text-gray-600 mb-4">
          O HPV (Papilomavírus Humano) é um vírus que pode causar infecções sexualmente transmissíveis, sendo responsável por verrugas genitais e diversos tipos de câncer, como o de colo do útero, ânus, pênis e orofaringe. A vacina contra o HPV é uma ferramenta essencial para prevenir essas condições. Abaixo, explicamos por que tomar a vacina é tão importante e quem deve se vacinar.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">O Que é a Vacina contra HPV?</h2>
        <p className="text-gray-600 mb-4">
          A vacina contra o HPV protege contra os tipos mais comuns do vírus, incluindo aqueles associados a cânceres e verrugas genitais. Existem diferentes vacinas disponíveis, como a quadrivalente (que protege contra quatro tipos de HPV) e a nonavalente (que protege contra nove tipos). Ela é administrada em doses (geralmente duas ou três, dependendo da idade) e é mais eficaz quando aplicada antes do início da atividade sexual.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Por Que Tomar a Vacina?</h2>
        <p className="text-gray-600 mb-4">
          A vacinação contra o HPV oferece benefícios significativos para a saúde individual e coletiva. Aqui estão as principais razões para se vacinar:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Prevenção de câncer:</strong> A vacina reduz significativamente o risco de cânceres relacionados ao HPV, como o câncer de colo do útero, que é uma das principais causas de morte por câncer em mulheres.</li>
          <li><strong>Proteção contra verrugas genitais:</strong> A vacina previne infecções que causam verrugas genitais, que podem ser incômodas e difíceis de tratar.</li>
          <li><strong>Benefício coletivo:</strong> A vacinação em massa reduz a circulação do vírus na população, protegendo até mesmo aqueles que não foram vacinados (imunidade de rebanho).</li>
          <li><strong>Segurança e eficácia:</strong> As vacinas contra o HPV são amplamente testadas, seguras e altamente eficazes quando administradas no período recomendado.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quem Deve Tomar a Vacina?</h2>
        <p className="text-gray-600 mb-4">
          A vacina contra o HPV é recomendada para:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Adolescentes:</strong> A idade ideal para a vacinação é entre 9 e 14 anos, antes do início da atividade sexual, quando a vacina é mais eficaz.</li>
          <li><strong>Adultos jovens:</strong> Pessoas até 45 anos podem se beneficiar da vacina, embora a eficácia possa ser menor se já houver exposição ao vírus.</li>
          <li><strong>Homens e mulheres:</strong> A vacina é recomendada para ambos os sexos, pois o HPV afeta homens e mulheres e pode ser transmitido entre parceiros.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          No Brasil, a vacina contra o HPV está disponível gratuitamente no Sistema Único de Saúde (SUS) para meninas e meninos de 9 a 14 anos. Adultos podem acessar a vacina em clínicas particulares.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">A Vacina Substitui Outras Precauções?</h2>
        <p className="text-gray-600 mb-4">
          Embora a vacina seja altamente eficaz, ela não protege contra todos os tipos de HPV nem substitui outras medidas preventivas, como:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Uso de preservativos durante relações sexuais.</li>
          <li>Realização de exames preventivos, como o Papanicolau, para detectar alterações no colo do útero.</li>
          <li>Testagem regular para ISTs, especialmente em pessoas com múltiplos parceiros sexuais.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Efeitos Colaterais da Vacina</h2>
        <p className="text-gray-600 mb-4">
          Os efeitos colaterais da vacina contra o HPV são geralmente leves e incluem dor no local da injeção, febre leve ou fadiga. Reações graves são extremamente raras, e a vacina é considerada muito segura pelas autoridades de saúde.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quando Procurar Orientação?</h2>
        <p className="text-gray-600 mb-4">
          Se você tem dúvidas sobre a vacina contra o HPV, converse com um médico ou profissional de saúde. Eles podem orientar sobre a indicação da vacina, o esquema de doses e como ela se encaixa na sua rotina de prevenção. Além disso, se você suspeita de infecção por HPV, como verrugas genitais ou alterações em exames, procure ajuda médica imediatamente.
        </p>

        {/* Card 6: HPV */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Estou com HPV?
          </h2>
          <p className="mt-2 text-gray-600">
            Responda algumas perguntas e descubra a probabilidade de estar com HPV.
          </p>
          <Link href="/quiz/hpv">
            <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
              Iniciar Quiz
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}