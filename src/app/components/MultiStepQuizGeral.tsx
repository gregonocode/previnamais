"use client";

import { useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import BotaoPostoMaisProximo from "./BotaoPostoMaisProximo";

type Answer = { id: string; label: string; scores: Record<string, number> };
type Question = { id: string; text: string; answers: Answer[] };

const IST_NAMES: Record<string, string> = {
  hpv: "HPV",
  hiv: "HIV",
  gonorreia: "Gonorreia",
  hepatites: "Hepatites",
  sifilis: "Sífilis",
  tricomoniase: "Tricomoníase",
  clamidia: "Clamídia",
  herpes: "Herpes",
};


export default function MultiStepQuizGeral({
  questions,
  onFinish,
}: {
  questions: Question[];
  onFinish?: (result: { scores: Record<string, number>; highestRisk: string[]; percentages: Record<string, number> }) => void;
}) {
  const [step, setStep] = useState(0);
  const total = questions.length;
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: Object.fromEntries(questions.map((q) => [q.id, ""])),
  });
  const [result, setResult] = useState<{ scores: Record<string, number>; highestRisk: string[]; percentages: Record<string, number> } | null>(null);

  // Assiste mudanças globais, só para re-renderizar
  useWatch({ control });

  const nextDisabled = () => {
    const current = getValues(questions[step].id);
    return !current; // Só libera se a questão atual tiver resposta
  };

  const calculateResult = (data: Record<string, string>) => {
    const scores: Record<string, number> = {
      hpv: 0,
      hiv: 0,
      gonorreia: 0,
      hepatites: 0,
      sifilis: 0,
      tricomoniase: 0,
      clamidia: 0,
      herpes: 0,
    };

    Object.entries(data).forEach(([questionId, answerId]) => {
      const question = questions.find((q) => q.id === questionId);
      if (!question) return;
      const answer = question.answers.find((a) => a.id === answerId);
      if (!answer) return;
      Object.entries(answer.scores).forEach(([ist, score]) => {
        scores[ist] += score;
      });
    });

    // Ordenar escores e selecionar as 3 maiores ISTs
    const sortedScores = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);
    const highestRisk = sortedScores.map(([ist]) => ist);
    const topScoresSum = sortedScores.reduce((sum, [, score]) => sum + score, 0);
    const percentages = Object.fromEntries(
      sortedScores.map(([ist, score]) => [
        ist,
        topScoresSum > 0 ? Math.round((score / topScoresSum) * 100) : 0,
      ])
    );

    return { scores, highestRisk, percentages };
  };

  const onSubmit = (data: Record<string, string>) => {
    const res = calculateResult(data);
    setResult(res);
    if (onFinish) onFinish(res);
  };

  // Preparar dados para o gráfico
  const chartData = result
    ? result.highestRisk.map((ist) => ({
        name: IST_NAMES[ist],
        percentage: result.percentages[ist] || 0,
      }))
    : [];

  return (
    <div className="max-w-xl mx-auto p-4">
      {!result ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          <div className="p-4">
            {/* progresso */}
            <div className="mb-4">
              <div className="text-sm mb-1">
                Pergunta {step + 1} de {total}
              </div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div
                  className="h-2 rounded bg-[#25E8BB]"
                  style={{ width: `${((step + 1) / total) * 100}%` }}
                />
              </div>
            </div>

            {/* pergunta */}
            <motion.div
              key={questions[step].id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-center">{questions[step].text}</h3>

              <Controller
                control={control}
                name={questions[step].id}
                render={({ field }) => (
                  <div role="radiogroup" aria-labelledby={`q-${questions[step].id}`}>
                    {questions[step].answers.map((a) => (
                      <label
                        key={a.id}
                        className={`flex items-center gap-3 p-3 border rounded mb-2 cursor-pointer hover:bg-gray-50 ${
                          field.value === a.id ? "border-[#25E8BB] bg-[#25E8BB]/10" : "border-gray-200"
                        }`}
                      >
                        <input
                          type="radio"
                          {...field}
                          value={a.id}
                          checked={field.value === a.id}
                          onChange={() => field.onChange(a.id)}
                          className="accent-[#25E8BB]"
                        />
                        <span>{a.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              />
            </motion.div>
          </div>

          {/* ações */}
          <div className="flex justify-between items-center p-4 border-t">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="px-4 py-2 rounded text-sm border disabled:opacity-50"
            >
              Voltar
            </button>

            {step < total - 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(total - 1, s + 1))}
                disabled={nextDisabled()}
                className="px-4 py-2 rounded bg-[#25E8BB] text-white disabled:opacity-50"
              >
                Próxima
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 rounded bg-[#25E8BB] text-white"
              >
                Finalizar
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Maiores Riscos de ISTs</h2>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical">
                <XAxis type="number" domain={[0, 100]} unit="%" />
                <YAxis type="category" dataKey="name" />
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Bar dataKey="percentage" fill="#25E8BB" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm mb-4">
            Isso não substitui avaliação médica. Se houver risco, procure um posto de saúde.
          </p>
          <div className="flex justify-center gap-3">
            <button
              className="px-4 py-2 rounded border"
              onClick={() => {
                setResult(null);
                setStep(0);
              }}
            >
              Refazer
            </button>
            <BotaoPostoMaisProximo />
          </div>
        </div>
      )}
    </div>
  );
}