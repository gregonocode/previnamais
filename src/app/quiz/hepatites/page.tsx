"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import MultiStepQuiz from '@/app/components/MultiStepQuiz';
import Link from "next/link";

const HEPATITIS_QUESTIONS = [
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
    text: "Você compartilhou agulhas, seringas ou outros objetos perfurantes (como equipamentos de tatuagem ou piercing)?",
    answers: [
      { id: "a1", label: "Sim", score: 3 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q3",
    text: "Você notou amarelecimento da pele ou dos olhos (icterícia)?",
    answers: [
      { id: "a1", label: "Sim", score: 3 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q4",
    text: "Você teve contato com alguém que foi diagnosticado com hepatite viral (A, B ou C)?",
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
    text: "Você sentiu fadiga extrema, náusea ou perda de apetite recentemente?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q7",
    text: "Você recebeu transfusão de sangue ou derivados antes de 1990 ou em condições não seguras?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q8",
    text: "Você tem múltiplos parceiros sexuais ou teve no último ano?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q9",
    text: "Você notou urina escura ou fezes claras recentemente?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q10",
    text: "Você já foi vacinado contra hepatite A ou B?",
    answers: [
      { id: "a1", label: "Sim", score: 0 },
      { id: "a2", label: "Não", score: 2 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
];

export default function HepatitisQuizPage() {
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
          <h1 className="text-3xl font-bold text-center mb-6">Quiz de Avaliação de Risco para Hepatites Virais</h1>
          <MultiStepQuiz
            questions={HEPATITIS_QUESTIONS}
            onFinish={handleQuizFinish}
          />
        </div>
      </main>
    </div>
  );
}