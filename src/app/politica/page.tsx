"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';



export default function PoliciesPage() {
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
                src="/previna.svg" // Substitua pelo caminho do seu logo
                alt="Previna Mais BV Logo"
                width={60}
                height={20}
                className="h-10 w-auto"
              />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/policies" className="text-gray-600 hover:text-gray-900 font-semibold">Políticas</a>
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
                <a href="/policies" className="block text-gray-600 hover:text-gray-900 px-3 py-2 font-semibold">Políticas</a>
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
            Políticas do Previna Mais BV
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça as diretrizes que regem o uso do Previna Mais BV, uma plataforma dedicada a informar e conscientizar sobre infecções sexualmente transmissíveis (ISTs).
          </p>
        </section>

        <section className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Nossa Missão
            </h2>
            <p className="text-gray-600">
              O Previna Mais BV tem como objetivo orientar e educar sobre infecções sexualmente transmissíveis (ISTs), promovendo a conscientização e incentivando a prevenção. Nossa plataforma oferece quizzes ilustrativos que fornecem uma estimativa de risco com base nas respostas fornecidas. No entanto, esses quizzes são apenas ferramentas educativas e não substituem o diagnóstico médico profissional.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Uso dos Quizzes
            </h2>
            <p className="text-gray-600">
              Os quizzes disponíveis no Previna Mais BV são projetados para ajudar os usuários a entenderem possíveis riscos relacionados a ISTs, como Herpes Genital, Clamídia, Tricomoníase, Gonorreia, HIV/AIDS, HPV, Sífilis e Hepatites Virais. As respostas fornecidas geram resultados estimativos, que têm caráter exclusivamente ilustrativo. Recomendamos fortemente que os usuários procurem um médico ou posto de saúde para uma avaliação profissional e diagnóstico preciso.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Recomendação Médica
            </h2>
            <p className="text-gray-600">
              O Previna Mais BV reforça a importância de consultar profissionais de saúde qualificados. Nossos quizzes não devem ser usados como única fonte de diagnóstico ou tratamento. Encorajamos todos os usuários a visitar um posto de saúde ou médico para exames e orientações adequadas, especialmente se houver suspeita de qualquer condição de saúde.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Privacidade e Dados
            </h2>
            <p className="text-gray-600">
              Valorizamos a privacidade dos nossos usuários. As informações fornecidas nos quizzes são tratadas com confidencialidade e não são compartilhadas com terceiros, exceto conforme exigido por lei. Recomendamos que os usuários leiam nossa Política de Privacidade completa para entender como os dados são coletados, armazenados e protegidos.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Prevenção e Conscientização
            </h2>
            <p className="text-gray-600">
              Nosso compromisso é promover a prevenção de ISTs por meio da educação. Incentivamos práticas seguras, como o uso de preservativos, exames regulares e a busca por informações confiáveis. O Previna Mais BV é uma ferramenta de apoio para que os usuários tomem decisões informadas sobre sua saúde, sempre com a orientação de profissionais de saúde.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Contato
            </h2>
            <p className="text-gray-600">
              Se você tiver dúvidas sobre nossas políticas ou sobre o uso do Previna Mais BV, entre em contato conosco através do nosso blog ou envie um e-mail para o suporte indicado na seção de contato. Estamos aqui para ajudar você a entender melhor as ISTs e a importância da prevenção.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}