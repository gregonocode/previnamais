"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import MultiStepQuizGeral from '@/app/components/MultiStepQuizGeral';
import Link from "next/link";

const GENERAL_QUESTIONS = [
  {
    id: "q1",
    text: "Você teve relação sexual sem preservativo nos últimos 90 dias?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 2, hiv: 2, gonorreia: 2, hepatites: 2, sifilis: 2, tricomoniase: 2, clamidia: 2, herpes: 2 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 1, hiv: 1, gonorreia: 1, hepatites: 1, sifilis: 1, tricomoniase: 1, clamidia: 1, herpes: 1 } },
    ],
  },
  {
    id: "q2",
    text: "Você notou feridas ou úlceras genitais, orais ou anais?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 1, hiv: 1, gonorreia: 0, hepatites: 0, sifilis: 3, tricomoniase: 0, clamidia: 0, herpes: 3 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 1, tricomoniase: 0, clamidia: 0, herpes: 1 } },
    ],
  },
  {
    id: "q3",
    text: "Você teve febre persistente ou cansaço extremo sem motivo aparente?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 3, gonorreia: 0, hepatites: 2, sifilis: 2, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 1, gonorreia: 0, hepatites: 1, sifilis: 1, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q4",
    text: "Você notou verrugas genitais ou na região anal?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 3, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 1 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 1, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q5",
    text: "Você teve corrimento vaginal ou uretral com mau cheiro ou cor incomum?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 3, hepatites: 0, sifilis: 0, tricomoniase: 3, clamidia: 3, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 1, hepatites: 0, sifilis: 0, tricomoniase: 1, clamidia: 1, herpes: 0 } },
    ],
  },
  {
    id: "q6",
    text: "Você sentiu coceira intensa na região genital?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 1, hepatites: 0, sifilis: 0, tricomoniase: 2, clamidia: 1, herpes: 2 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 1, clamidia: 0, herpes: 1 } },
    ],
  },
  {
    id: "q7",
    text: "Você teve contato sexual com alguém diagnosticado com alguma IST?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 2, hiv: 3, gonorreia: 2, hepatites: 2, sifilis: 3, tricomoniase: 2, clamidia: 2, herpes: 2 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 1, hiv: 1, gonorreia: 1, hepatites: 1, sifilis: 1, tricomoniase: 1, clamidia: 1, herpes: 1 } },
    ],
  },
  {
    id: "q8",
    text: "Você sentiu dor ou ardência ao urinar?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 3, hepatites: 0, sifilis: 0, tricomoniase: 2, clamidia: 3, herpes: 1 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 1, hepatites: 0, sifilis: 0, tricomoniase: 1, clamidia: 1, herpes: 0 } },
    ],
  },
  {
    id: "q9",
    text: "Você notou icterícia (pele ou olhos amarelados)?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 3, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 1, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q10",
    text: "Você tem histórico de uso de drogas injetáveis ou compartilhamento de agulhas?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 3, gonorreia: 0, hepatites: 3, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 1, gonorreia: 0, hepatites: 1, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q11",
    text: "Você teve múltiplos parceiros sexuais nos últimos 6 meses?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 2, hiv: 2, gonorreia: 2, hepatites: 2, sifilis: 2, tricomoniase: 2, clamidia: 2, herpes: 2 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 1, hiv: 1, gonorreia: 1, hepatites: 1, sifilis: 1, tricomoniase: 1, clamidia: 1, herpes: 1 } },
    ],
  },
  {
    id: "q12",
    text: "Você sentiu dor abdominal ou inchaço na região do fígado?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 3, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 1, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q13",
    text: "Você notou bolhas ou lesões dolorosas na região genital?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 3 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 1 } },
    ],
  },
  {
    id: "q14",
    text: "Você teve sintomas gripais após uma exposição sexual de risco?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 3, gonorreia: 0, hepatites: 1, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 1, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q15",
    text: "Você notou secreção purulenta na uretra ou vagina?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 3, hepatites: 0, sifilis: 0, tricomoniase: 2, clamidia: 3, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 1, hepatites: 0, sifilis: 0, tricomoniase: 1, clamidia: 1, herpes: 0 } },
    ],
  },
  {
    id: "q16",
    text: "Você teve relações sexuais com alguém com sintomas visíveis de IST?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 2, hiv: 2, gonorreia: 2, hepatites: 2, sifilis: 2, tricomoniase: 2, clamidia: 2, herpes: 2 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 1, hiv: 1, gonorreia: 1, hepatites: 1, sifilis: 1, tricomoniase: 1, clamidia: 1, herpes: 1 } },
    ],
  },
  {
    id: "q17",
    text: "Você sentiu dor durante ou após a relação sexual?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 2, hepatites: 0, sifilis: 0, tricomoniase: 2, clamidia: 2, herpes: 2 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 1, hepatites: 0, sifilis: 0, tricomoniase: 1, clamidia: 1, herpes: 1 } },
    ],
  },
  {
    id: "q18",
    text: "Você notou manchas ou erupções cutâneas nas palmas ou solas dos pés?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 3, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 1, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q19",
    text: "Você teve inchaço nos gânglios linfáticos (pescoço, axilas, virilha)?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 3, gonorreia: 0, hepatites: 1, sifilis: 2, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 1, gonorreia: 0, hepatites: 0, sifilis: 1, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q20",
    text: "Você recebeu transfusão de sangue sem triagem adequada?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 3, gonorreia: 0, hepatites: 3, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 1, gonorreia: 0, hepatites: 1, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q21",
    text: "Você notou perda de peso significativa sem motivo aparente?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 3, gonorreia: 0, hepatites: 2, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 1, gonorreia: 0, hepatites: 1, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q22",
    text: "Você teve dor de garganta persistente ou dificuldade para engolir?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 1, hiv: 2, gonorreia: 1, hepatites: 0, sifilis: 2, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 1, gonorreia: 0, hepatites: 0, sifilis: 1, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q23",
    text: "Você notou sangramento vaginal fora do período menstrual?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 1, hiv: 0, gonorreia: 1, hepatites: 0, sifilis: 0, tricomoniase: 2, clamidia: 2, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 1, clamidia: 1, herpes: 0 } },
    ],
  },
  {
    id: "q24",
    text: "Você teve contato com fluidos corporais de alguém com hepatite?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 3, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 1, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q25",
    text: "Você notou lesões que reaparecem periodicamente na região genital?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 3 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 1 } },
    ],
  },
  {
    id: "q26",
    text: "Você teve relações sexuais orais sem proteção?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 2, hiv: 1, gonorreia: 2, hepatites: 1, sifilis: 2, tricomoniase: 0, clamidia: 1, herpes: 2 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 1, hiv: 0, gonorreia: 1, hepatites: 0, sifilis: 1, tricomoniase: 0, clamidia: 0, herpes: 1 } },
    ],
  },
  {
    id: "q27",
    text: "Você notou urina escura ou fezes claras?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 3, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 1, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q28",
    text: "Você teve sangramentos após relações sexuais?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 1, hiv: 0, gonorreia: 1, hepatites: 0, sifilis: 0, tricomoniase: 2, clamidia: 2, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 1, clamidia: 1, herpes: 0 } },
    ],
  },
  {
    id: "q29",
    text: "Você notou perda de cabelo em áreas específicas do couro cabeludo?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 2, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 1, tricomoniase: 0, clamidia: 0, herpes: 0 } },
    ],
  },
  {
    id: "q30",
    text: "Você tem histórico de outras infecções sexualmente transmissíveis?",
    answers: [
      { id: "a1", label: "Sim", scores: { hpv: 2, hiv: 2, gonorreia: 2, hepatites: 2, sifilis: 2, tricomoniase: 2, clamidia: 2, herpes: 2 } },
      { id: "a2", label: "Não", scores: { hpv: 0, hiv: 0, gonorreia: 0, hepatites: 0, sifilis: 0, tricomoniase: 0, clamidia: 0, herpes: 0 } },
      { id: "a3", label: "Não sei responder", scores: { hpv: 1, hiv: 1, gonorreia: 1, hepatites: 1, sifilis: 1, tricomoniase: 1, clamidia: 1, herpes: 1 } },
    ],
  },
];

export default function GeneralQuizPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleQuizFinish = (result: { scores: Record<string, number>; highestRisk: string[]; percentages: Record<string, number> }) => {
    console.log(`Resultado do quiz: Maiores riscos - ${result.highestRisk.join(", ")}, Porcentagens: ${JSON.stringify(result.percentages)}`);
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
          <h1 className="text-3xl font-bold text-center mb-6">Quiz Geral de Avaliação de Risco para ISTs</h1>
          <MultiStepQuizGeral
            questions={GENERAL_QUESTIONS}
            onFinish={handleQuizFinish}
          />
        </div>
      </main>
    </div>
  );
}