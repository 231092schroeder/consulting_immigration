import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class FormFlowService {
  questions: Question[] = [
    {
      id: 'country',
      question: 'Em qual país você deseja se regularizar?',
      type: 'radio',
      options: ['França', 'Portugal'],
      next: {
        'França': 'franceSituation',
        'Portugal': 'portugalSituation'
      }
    },

// France Situation

    {
      id: 'franceSituation',
      question: 'Qual é sua situação atual na França?',
      type: 'radio',
      options: [
        'Turista',
        'Sem documentos',
        'Casado com europeu',
        'Trabalhando'
      ],
      next: {
        'Turista': 'timeInFrance',
        'Sem documentos': 'timeInFrance',
        'Casado com europeu': 'marriageDuration',
        'Trabalhando': 'workContract'
      }
    },

    {
      id: 'timeInFrance',
      question: 'Há quanto tempo você está na França?',
      type: 'select',
      options: [
        'Menos de 3 meses',
        '3 a 12 meses',
        'Mais de 1 ano'
      ],
      next: {
        'Menos de 3 meses': 'negativeResult',
        '3 a 12 meses': 'positiveResult',
        'Mais de 1 ano': 'positiveResult'
      }
    },

    {
      id: 'marriageDuration',
      question: 'Há quanto tempo você é casado(a)?',
      type: 'select',
      options: [
        'Menos de 1 ano',
        'Mais de 1 ano'
      ],
      next: {
        'Menos de 1 ano': 'negativeResult',
        'Mais de 1 ano': 'positiveResult'
      }
    },

    {
      id: 'workContract',
      question: 'Você possui contrato de trabalho?',
      type: 'radio',
      options: ['Sim', 'Não'],
      next: {
        'Sim': 'positiveResult',
        'Não': 'negativeResult'
      }
    },

// Portugal Situation

    {
      id: 'portugalSituation',
      question: 'Qual é sua situação atual em Portugal?',
      type: 'radio',
      options: [
        'Manifestação de interesse',
        'Turista',
        'Procuro nacionalidade portuguesa'
      ],
      next: {
        'Manifestação de interesse': 'negativeResult',
        'Turista': 'negativeResult',
        'Procuro nacionalidade portuguesa': 'positiveResult'
      }
    },

    {
      id: 'positiveResult',
      question: 'Boa notícia!',
      type: 'result',
      options: [],
    },

    {
      id: 'negativeResult',
      question: 'Sua situação pode exigir uma análise mais complexa.',
      type: 'result',
      options: [],
    },
  ];

  getQuestion(id: string): Question | undefined {
    return this.questions.find(q => q.id === id);
  }
}
