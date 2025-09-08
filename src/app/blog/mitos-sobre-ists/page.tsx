"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function MitosSobreISTs() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Mitos sobre ISTs</h1>
        
        <Image
          src="/placeholder-mitos-ists.png"
          alt="Mitos sobre ISTs"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6"
        />

        <p className="text-gray-600 mb-4">
          As infecções sexualmente transmissíveis (ISTs) são cercadas de mitos e desinformação, o que pode levar a preconceitos, diagnósticos tardios e práticas de risco. Para promover a saúde sexual e incentivar a prevenção, é essencial desmistificar essas ideias erradas. Abaixo, abordamos alguns dos mitos mais comuns sobre ISTs e esclarecemos a verdade.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mito 1: ISTs só afetam pessoas com múltiplos parceiros</h2>
        <p className="text-gray-600 mb-4">
          <strong>Verdade:</strong> Qualquer pessoa sexualmente ativa pode contrair uma IST, mesmo tendo apenas um parceiro. A transmissão pode ocorrer em uma única relação sexual desprotegida com uma pessoa infectada, independentemente do número de parceiros. A testagem regular e o uso de preservativos são essenciais para todos.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mito 2: Você sempre sabe quando tem uma IST</h2>
        <p className="text-gray-600 mb-4">
          <strong>Verdade:</strong> Muitas ISTs, como clamídia, gonorreia e HPV, podem ser assintomáticas, especialmente em estágios iniciais. Isso significa que a pessoa pode estar infectada e transmitir a doença sem apresentar sintomas. Testes regulares são a única forma de garantir o diagnóstico precoce.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mito 3: ISTs só são transmitidas por sexo vaginal</h2>
        <p className="text-gray-600 mb-4">
          <strong>Verdade:</strong> ISTs podem ser transmitidas por sexo vaginal, anal ou oral, além de contato com sangue ou fluidos corporais infectados. Algumas, como o HPV e o herpes, podem ser transmitidas pelo contato pele a pele. O uso de preservativos em todas as formas de sexo reduz o risco, mas não elimina completamente.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mito 4: ISTs não têm cura</h2>
        <p className="text-gray-600 mb-4">
          <strong>Verdade:</strong> Algumas ISTs, como clamídia, gonorreia e sífilis, são curáveis com antibióticos se tratadas precocemente. Outras, como HIV e herpes, não têm cura, mas podem ser controladas com tratamentos que permitem uma vida saudável. A hepatite C, por exemplo, tem tratamentos modernos com altas taxas de cura.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mito 5: Preservativos protegem 100% contra ISTs</h2>
        <p className="text-gray-600 mb-4">
          <strong>Verdade:</strong> Embora os preservativos reduzam significativamente o risco de transmissão de ISTs, eles não oferecem proteção total. Algumas infecções, como HPV e herpes, podem ser transmitidas por áreas da pele não cobertas pelo preservativo. Combinar o uso de preservativos com testagem regular e vacinação (como contra HPV e hepatite B) é a melhor estratégia.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mito 6: Só pessoas com sintomas precisam de tratamento</h2>
        <p className="text-gray-600 mb-4">
          <strong>Verdade:</strong> Mesmo sem sintomas, uma pessoa infectada pode transmitir a IST e desenvolver complicações a longo prazo, como infertilidade ou câncer. Por isso, é importante fazer exames regulares, especialmente para pessoas com múltiplos parceiros ou comportamento de risco.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mito 7: ISTs são sempre visíveis</h2>
        <p className="text-gray-600 mb-4">
          <strong>Verdade:</strong> Nem todas as ISTs causam sinais visíveis, como feridas ou verrugas. Infecções como clamídia e hepatite C podem permanecer invisíveis por anos, causando danos silenciosos ao organismo. Exames laboratoriais são essenciais para detectar essas infecções.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Como Combater a Desinformação?</h2>
        <p className="text-gray-600 mb-4">
          A melhor forma de combater mitos sobre ISTs é buscar informações confiáveis com profissionais de saúde e fontes científicas. Além disso:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Converse abertamente com seus parceiros sobre saúde sexual e histórico de ISTs.</li>
          <li>Realize testes regulares para ISTs, especialmente se você tem novos parceiros ou não usa preservativos.</li>
          <li>Considere vacinas disponíveis, como as contra HPV e hepatite B.</li>
          <li>Procure orientação médica ao notar qualquer sintoma ou após uma possível exposição.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quando Procurar Ajuda?</h2>
        <p className="text-gray-600 mb-4">
          Se você tem dúvidas sobre ISTs, acredita que pode ter sido exposto ou apresenta sintomas como secreção anormal, dor ao urinar, feridas ou verrugas, procure um médico imediatamente. A educação e o diagnóstico precoce são fundamentais para proteger sua saúde e a de seus parceiros.
        </p>

        {/* Quiz Card */}
        <div className="mt-8 max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Descubra o que seus sintomas podem indicar
          </h2>
          <p className="mt-2 text-gray-600">
            Responda algumas perguntas rápidas e receba uma estimativa de risco para diferentes ISTs.
          </p>
          <Link href="/quiz/geral">
            <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
              Começar Agora
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}