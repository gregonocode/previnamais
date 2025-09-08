"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import MultiStepQuiz from '@/app/components/MultiStepQuiz';
import Link from "next/link";

const HERPES_QUESTIONS = [
  {
    id: "q1",
    text: "Você teve relação sexual sem preservativo nos últimos 90 dias?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q2",
    text: "Você notou bolhas, feridas ou lesões dolorosas na região genital, anal ou oral?",
    answers: [
      { id: "a1", label: "Sim", score: 3 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q3",
    text: "Você sentiu coceira, ardor ou formigamento na região genital, anal ou oral antes do aparecimento de lesões?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q4",
    text: "Você teve contato sexual com alguém que foi diagnosticado com herpes genital ou oral?",
    answers: [
      { id: "a1", label: "Sim", score: 3 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q5",
    text: "Você tem histórico de outras infecções sexualmente transmissíveis (ISTs)?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q6",
    text: "Você teve febre, dor de cabeça ou dores musculares associadas ao aparecimento de lesões na pele?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q7",
    text: "Você notou inchaço ou sensibilidade nos gânglios linfáticos (pescoço, axilas ou virilha)?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q8",
    text: "Você teve episódios recorrentes de lesões ou bolhas na mesma região do corpo?",
    answers: [
      { id: "a1", label: "Sim", score: 3 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q9",
    text: "Você tem múltiplos parceiros sexuais ou teve no último ano?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q10",
    text: "Você sentiu dor ou desconforto ao urinar associado ao aparecimento de lesões na região genital?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
];

export default function HerpesQuizPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleQuizFinish = (result: { level: string; score: number }) => {
    console.log(`Resultado do quiz: Risco ${result.level}, Pontuação: ${result.score}`);
    // Aqui você pode adicionar lógica para geolocalização ou outras ações
  };

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
                <a href="/politica" className="block text-gray-600 hover:text-gray-900 px-3 py-2">Políticas</a>
                <a href="/blog" className="block text-gray-600 hover:text-gray-900 px-3 py-2">Blog</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Quiz Content */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center mb-6">Quiz de Avaliação de Risco para herpes</h1>
          <MultiStepQuiz
            questions={HERPES_QUESTIONS}
            onFinish={handleQuizFinish}
          />
        </div>
      </main>
    </div>
  );
}