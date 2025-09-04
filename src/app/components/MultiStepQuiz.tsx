"use client";

import { useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { motion } from "framer-motion";

type Answer = { id: string; label: string; score: number };
type Question = { id: string; text: string; answers: Answer[] };

const QUESTIONS: Question[] = [
  {
    id: "q1",
    text: "Teve relação sem preservativo nos últimos 90 dias?",
    answers: [
      { id: "a1", label: "Sim", score: 2 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  {
    id: "q2",
    text: "Notou ferida indolor na região genital/oral?",
    answers: [
      { id: "a1", label: "Sim", score: 3 },
      { id: "a2", label: "Não", score: 0 },
      { id: "a3", label: "Não sei responder", score: 1 },
    ],
  },
  // adicione mais perguntas...
];

export default function MultiStepQuiz({
  questions = QUESTIONS,
  onFinish,
}: {
  questions?: Question[];
  onFinish?: (result: { level: string; score: number }) => void;
}) {
  const [step, setStep] = useState(0);
  const total = questions.length;
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: Object.fromEntries(questions.map((q) => [q.id, ""])),
  });
  const [result, setResult] = useState<{ level: string; score: number } | null>(null);

  // Assiste mudanças globais, só para re-renderizar
  useWatch({ control });

  const nextDisabled = () => {
    const current = getValues(questions[step].id);
    return !current; // Só libera se a questão atual tiver resposta
  };

  function classify(totalScore: number) {
    if (totalScore >= 6) return "ALTA";
    if (totalScore >= 3) return "MÉDIA";
    return "BAIXA";
  }

  const onSubmit = (data: Record<string, string>) => {
    const score = Object.entries(data).reduce((acc, [_k, v]) => {
      const q = questions.find((qq) => qq.id === _k);
      if (!q) return acc;
      const ans = q.answers.find((a) => a.id === v);
      return acc + (ans ? ans.score : 0);
    }, 0);
    const level = classify(score);
    const res = { level, score };
    setResult(res);
    if (onFinish) onFinish(res);
  };

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
          <h2 className="text-2xl font-bold mb-2">Risco: {result.level}</h2>
          <p className="mb-4">Pontuação: {result.score}</p>
          <p className="text-sm mb-4">
            Isso não substitui avaliação médica. Se o risco for MÉDIO/ALTO, procure um posto de saúde.
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
            <button
              className="px-4 py-2 rounded bg-[#25E8BB] text-white"
              onClick={() => {
                /* aqui você pode disparar a geolocalização / rota pra posto */
              }}
            >
              Encontrar posto mais próximo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}