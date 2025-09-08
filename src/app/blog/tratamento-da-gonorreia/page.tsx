"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function TratamentoDaGonorreia() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Tratamento da Gonorreia</h1>
        
        <Image
          src="/placeholder-gonorreia.png"
          alt="Gonorreia Treatment"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6"
        />

        <p className="text-gray-600 mb-4">
          A gonorreia é uma infecção sexualmente transmissível (IST) causada pela bactéria *Neisseria gonorrhoeae*. Ela pode afetar áreas como uretra, cervix, reto, garganta ou olhos, e é tratável com o uso adequado de antibióticos. No entanto, o aumento da resistência bacteriana tem tornado o tratamento mais desafiador. Abaixo, detalhamos como a gonorreia é tratada, os cuidados necessários e a importância do diagnóstico precoce.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Como é Feito o Tratamento da Gonorreia?</h2>
        <p className="text-gray-600 mb-4">
          O tratamento da gonorreia geralmente envolve o uso de antibióticos para eliminar a bactéria. Devido à crescente resistência da *Neisseria gonorrhoeae* a certos medicamentos, as diretrizes de tratamento recomendam:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Terapia combinada:</strong> Uma combinação de antibióticos, como uma injeção de ceftriaxona (antibiótico injetável) associada a uma dose oral de azitromicina, é frequentemente recomendada para aumentar a eficácia e reduzir o risco de resistência.</li>
          <li><strong>Tratamento de parceiros:</strong> Todos os parceiros sexuais recentes (geralmente dos últimos 60 dias) devem ser notificados, testados e tratados para evitar reinfecção e a propagação da bactéria.</li>
          <li><strong>Acompanhamento:</strong> Após o tratamento, é importante realizar exames de acompanhamento para confirmar que a infecção foi eliminada, especialmente em casos de sintomas persistentes.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cuidados Durante o Tratamento</h2>
        <p className="text-gray-600 mb-4">
          Para garantir que o tratamento seja eficaz e evitar complicações, siga estas recomendações:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Completar o tratamento:</strong> Tome todos os medicamentos conforme prescrito, mesmo que os sintomas desapareçam antes do fim do tratamento.</li>
          <li><strong>Evitar relações sexuais:</strong> Abstenha-se de qualquer atividade sexual até que você e seus parceiros tenham completado o tratamento e sejam confirmados livres da infecção.</li>
          <li><strong>Monitorar sintomas:</strong> Se os sintomas persistirem após o tratamento, procure um médico imediatamente, pois isso pode indicar resistência bacteriana ou outra complicação.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Complicações da Gonorreia Não Tratada</h2>
        <p className="text-gray-600 mb-4">
          Se não tratada, a gonorreia pode levar a complicações graves, incluindo:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Em mulheres:</strong> Doença inflamatória pélvica (DIP), que pode causar infertilidade, gravidez ectópica ou dor pélvica crônica.</li>
          <li><strong>Em homens:</strong> Epididimite, que pode levar a dor testicular e, em casos raros, infertilidade.</li>
          <li><strong>Em ambos:</strong> Disseminação da infecção para outras partes do corpo (gonorreia disseminada), causando dores articulares, erupções cutâneas ou infecções graves.</li>
          <li><strong>Transmissão ao recém-nascido:</strong> Em mulheres grávidas, a gonorreia pode ser transmitida ao bebê durante o parto, causando infecções oculares graves ou outras complicações.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Diagnóstico da Gonorreia</h2>
        <p className="text-gray-600 mb-4">
          O diagnóstico é feito por meio de testes laboratoriais, como análise de urina, amostras de secreção genital, retal ou da garganta. Pessoas sexualmente ativas, especialmente com múltiplos parceiros ou parceiros novos, devem fazer testes regulares para ISTs, mesmo na ausência de sintomas, pois a gonorreia pode ser assintomática.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Prevenção da Gonorreia</h2>
        <p className="text-gray-600 mb-4">
          Além do tratamento, a prevenção é fundamental para evitar a gonorreia. Algumas medidas incluem:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Uso de preservativos (masculinos ou femininos) em todas as relações sexuais.</li>
          <li>Testagem regular para ISTs, especialmente em pessoas com comportamento sexual de risco.</li>
          <li>Manter uma relação monogâmica com um parceiro testado e livre de infecções.</li>
          <li>Conversa aberta com parceiros sobre saúde sexual e histórico de ISTs.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quando Procurar Ajuda?</h2>
        <p className="text-gray-600 mb-4">
          Se você apresenta sintomas como secreção anormal, dor ao urinar ou outros sinais de infecção, ou se acredita que pode ter sido exposto à gonorreia, procure um médico imediatamente. O diagnóstico precoce e o tratamento adequado são essenciais para evitar complicações e proteger sua saúde e a de seus parceiros.
        </p>

        {/* Card 4: Gonorreia */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Estou com Gonorreia?
          </h2>
          <p className="mt-2 text-gray-600">
            Responda algumas perguntas e descubra a probabilidade de estar com Gonorreia.
          </p>
          <Link href="/quiz/gonorreia">
            <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
              Iniciar Quiz
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}