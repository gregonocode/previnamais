"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function ImportanciaDosTestesRegularesParaISTs() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Importância dos Testes Regulares para ISTs</h1>
        
        <Image
          src="/placeholder-testes-ists.png"
          alt="Testes Regulares para ISTs"
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg mb-6"
        />

        <p className="text-gray-600 mb-4">
          As infecções sexualmente transmissíveis (ISTs) são condições comuns que podem afetar qualquer pessoa sexualmente ativa. Muitas vezes, essas infecções não apresentam sintomas, o que torna os testes regulares uma ferramenta essencial para a prevenção, diagnóstico precoce e tratamento eficaz. Neste artigo, exploramos por que os testes regulares para ISTs são tão importantes e como eles podem proteger sua saúde e a de seus parceiros.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Por Que Fazer Testes Regulares?</h2>
        <p className="text-gray-600 mb-4">
          Os testes regulares para ISTs oferecem benefícios cruciais para a saúde individual e coletiva. Aqui estão algumas razões principais para incorporá-los à sua rotina:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Diagnóstico precoce:</strong> Muitas ISTs, como clamídia, gonorreia e HIV, podem ser assintomáticas em estágios iniciais. Os testes permitem identificar a infecção antes que ela cause complicações graves, como infertilidade ou danos a órgãos.</li>
          <li><strong>Prevenção de complicações:</strong> O tratamento precoce de ISTs pode evitar problemas de saúde a longo prazo, como doença inflamatória pélvica, câncer relacionado ao HPV ou cirrose causada por hepatite.</li>
          <li><strong>Redução da transmissão:</strong> Saber o seu status de saúde permite tomar medidas para evitar a transmissão de ISTs para parceiros sexuais, como o uso de preservativos ou abstenção até o tratamento ser concluído.</li>
          <li><strong>Proteção da saúde pública:</strong> Testes regulares ajudam a reduzir a disseminação de ISTs na comunidade, contribuindo para a saúde coletiva.</li>
          <li><strong>Tranquilidade:</strong> Conhecer seu status pode aliviar preocupações e promover uma vida sexual mais segura e confiante.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quem Deve Fazer Testes Regulares?</h2>
        <p className="text-gray-600 mb-4">
          Todas as pessoas sexualmente ativas devem considerar testes regulares, mas alguns grupos têm maior necessidade:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Pessoas com múltiplos parceiros sexuais ou que iniciaram uma nova relação.</li>
          <li>Indivíduos que não usam preservativos regularmente.</li>
          <li>Mulheres grávidas, para evitar a transmissão de ISTs ao bebê.</li>
          <li>Pessoas com histórico de ISTs ou que suspeitam de exposição.</li>
          <li>Indivíduos em grupos de risco, como aqueles que compartilham agulhas ou têm parceiros com diagnóstico de IST.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quais Testes Estão Disponíveis?</h2>
        <p className="text-gray-600 mb-4">
          Os testes para ISTs variam dependendo da infecção, mas os mais comuns incluem:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Exames de sangue:</strong> Detectam HIV, sífilis e hepatites B e C.</li>
          <li><strong>Análise de urina:</strong> Usada para diagnosticar clamídia e gonorreia.</li>
          <li><strong>Coleta de amostras:</strong> Amostras de secreções genitais, orais ou retais para detectar infecções como HPV, clamídia ou gonorreia.</li>
          <li><strong>Exames ginecológicos:</strong> Como o Papanicolau, para identificar alterações relacionadas ao HPV no colo do útero.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          No Brasil, muitos desses testes estão disponíveis gratuitamente no Sistema Único de Saúde (SUS) em unidades de saúde e centros de testagem.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Com Que Frequência Fazer os Testes?</h2>
        <p className="text-gray-600 mb-4">
          A frequência dos testes depende do seu comportamento sexual e fatores de risco:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li><strong>Anualmente:</strong> Recomendado para pessoas sexualmente ativas em relações estáveis com baixo risco.</li>
          <li><strong>A cada 3-6 meses:</strong> Indicado para pessoas com múltiplos parceiros ou que não usam preservativos regularmente.</li>
          <li><strong>Imediatamente:</strong> Após uma possível exposição (como sexo desprotegido com um parceiro novo) ou ao notar sintomas como secreção, dor ou lesões.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Como se Preparar para os Testes?</h2>
        <p className="text-gray-600 mb-4">
          Os testes para ISTs são simples e geralmente não requerem preparações complexas. Algumas dicas incluem:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Converse com um médico sobre seu histórico sexual para determinar quais testes são necessários.</li>
          <li>Evite urinar por 1-2 horas antes de testes de urina para clamídia ou gonorreia.</li>
          <li>Seja honesto sobre sintomas e comportamentos de risco para garantir um diagnóstico preciso.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">O Que Fazer Após o Diagnóstico?</h2>
        <p className="text-gray-600 mb-4">
          Se o teste for positivo para uma IST, siga estas recomendações:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Inicie o tratamento conforme orientação médica.</li>
          <li>Notifique parceiros sexuais recentes para que eles também sejam testados e tratados.</li>
          <li>Evite relações sexuais até que o tratamento esteja concluído e a infecção eliminada.</li>
          <li>Realize exames de acompanhamento para confirmar a cura, especialmente para infecções como gonorreia ou sífilis.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quando Procurar Ajuda?</h2>
        <p className="text-gray-600 mb-4">
          Se você é sexualmente ativo, nunca fez um teste para ISTs ou acredita que pode ter sido exposto, procure um médico ou unidade de saúde para orientação. Testes regulares são uma parte essencial da saúde sexual e podem prevenir complicações graves.
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