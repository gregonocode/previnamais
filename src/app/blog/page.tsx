"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


// Interface para os dados do card
interface BlogCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

// Componente reutilizável para os cards
function BlogCard({ title, description, imageSrc, imageAlt }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="mb-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={200}
          className="mx-auto rounded-md"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <button className="mt-4 bg-[#25E8BB] text-white px-6 py-2 rounded-full hover:bg-[#1ABA95] transition">
        Ler Mais
      </button>
    </div>
  );
}

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dados dos cards
  const blogPosts: BlogCardProps[] = [
    {
      title: "Quais os Sintomas do HIV?",
      description:
        "Os primeiros sintomas do HIV incluem febre, mal-estar, dor de cabeça e inchaço nos gânglios, semelhantes a uma gripe. Muitos casos são assintomáticos, por isso testes regulares são essenciais.",
      imageSrc: "/placeholder-hiv.png",
      imageAlt: "Sintomas do HIV",
    },
    {
      title: "Quais os Sintomas da Sífilis?",
      description:
        "A sífilis apresenta feridas indolores na fase primária, manchas na pele na secundária e pode levar a complicações graves se não tratada. Consulte um médico ao notar sintomas.",
      imageSrc: "/placeholder-sifilis.png",
      imageAlt: "Sintomas da Sífilis",
    },
    {
      title: "Como Prevenir a Clamídia?",
      description:
        "Previna a clamídia usando preservativos em todas as relações sexuais e realizando testes regulares, especialmente se houver múltiplos parceiros. O tratamento é com antibióticos.",
      imageSrc: "/placeholder-clamidia.png",
      imageAlt: "Prevenção da Clamídia",
    },
    {
      title: "Vacina contra HPV: Por Que Tomar?",
      description:
        "A vacina contra HPV protege contra tipos que causam verrugas genitais e cânceres. No Brasil, é dose única para 9-14 anos, gratuita no SUS. Vacine-se para prevenir.",
      imageSrc: "/placeholder-hpv.png",
      imageAlt: "Vacina contra HPV",
    },
    {
      title: "Tratamento da Gonorreia",
      description:
        "O tratamento da gonorreia envolve antibióticos como ceftriaxona e azitromicina. É essencial tratar parceiros para evitar reinfecção e complicações.",
      imageSrc: "/placeholder-gonorreia.png",
      imageAlt: "Tratamento da Gonorreia",
    },
    {
      title: "Hepatites Virais: Tipos e Prevenção",
      description:
        "Hepatites A, B, C, D, E: previna com vacinas (A,B), higiene, sexo seguro e evitando compartilhamento de agulhas. Testes regulares são cruciais.",
      imageSrc: "/placeholder-hepatites.png",
      imageAlt: "Hepatites Virais",
    },
    {
      title: "Mitos sobre ISTs",
      description:
        "Desvende mitos como &quot;ISTs só afetam certas pessoas&quot; ou &quot;sem sintomas, não há infecção&quot;. Qualquer um pode contrair ISTs; testes são essenciais.",
      imageSrc: "/placeholder-mitos-ists.png",
      imageAlt: "Mitos sobre ISTs",
    },
    {
      title: "Importância dos Testes Regulares para ISTs",
      description:
        "Testes regulares detectam ISTs assintomáticas, permitem tratamento precoce, previnem complicações e interrompem a transmissão.",
      imageSrc: "/placeholder-testes-ists.png",
      imageAlt: "Importância dos Testes Regulares",
    },
  ];

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
                alt="Previna Mais BV Logo"
                width={60}
                height={20}
                className="h-10 w-auto"
              />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/policies" className="text-gray-600 hover:text-gray-900">
                Políticas
              </a>
              <a
                href="/blog"
                className="text-gray-600 hover:text-gray-900 font-semibold"
              >
                Blog
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/policies"
                  className="block text-gray-600 hover:text-gray-900 px-3 py-2"
                >
                  Políticas
                </a>
                <a
                  href="/blog"
                  className="block text-gray-600 hover:text-gray-900 px-3 py-2 font-semibold"
                >
                  Blog
                </a>
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
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Blog do Previna Mais BV
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Fique por dentro de notícias, dicas e informações sobre ISTs,
            prevenção e saúde sexual. Sempre consulte um profissional de saúde para
            orientação personalizada.
          </p>
        </section>

        <section className="mt-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                description={post.description}
                imageSrc={post.imageSrc}
                imageAlt={post.imageAlt}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}