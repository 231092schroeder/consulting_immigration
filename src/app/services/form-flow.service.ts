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
      options: ['França', 'Portugal', 'Consulta Ascendência Estrangeira'],
      next: {
        'França': 'franceSituation',
        'Portugal': 'portugalSituation',
        'Consulta Ascendência Estrangeira' : 'geneologia'
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
        'Turista': 'turistFR',
        'Sem documentos': 'timeInFrance',
        'Casado com europeu': 'marriageDuration',
        'Trabalhando': 'workContract'
      }
    },

    {
      id: 'turistFR',
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
      question: 'Qual serviço você procura em Portugal?',
      type: 'radio',
      options: [
        '🛂 Vistos para Portugal',
        '🇵🇹 Nacionalidade portuguesa',
        '📄 Documentação e legalização',
        '🚗 Carteira de motorista',
        '🏠 Integração em Portugal'
      ],
      next: {
        '🛂 Vistos para Portugal': 'vistosPT',
        '🇵🇹 Nacionalidade portuguesa': 'nacionalidadePT',
        '📄 Documentação e legalização': 'docPT',
        '🚗 Carteira de motorista': 'cnhPT',
        '🏠 Integração em Portugal': 'integrationPT',
      }
    },

    // VISTOS
    {
      id: 'vistosPT',
      question: 'Qual visto você tem intenção de aplicar?',
      type: 'radio',
      options: [
        'Trabalho',
        'Busca de trabalho',
        'Estudante',
        'Familia',
        'Visto D7 (rendimentos/passivo)'
      ],
      next: {
        'Trabalho' : 'visaTrabalho',
        'Busca de trabalho' : 'buscaTrabalho',
        'Estudante' : 'visaEstudante',
        'Familia': 'visaFamilia',
        'Visto D7 (rendimentos/passivo)' : 'D7'
       }
    },

    //Visto de trabalho
    {
      id: 'visaTrabalho',
      question: 'Você já tem uma proposta de trabalho em Portugal?',
      type: 'radio',
      options: [
        'Sim, já tenho contrato ou promessa',
        'Ainda não tenho',
        'Estou em processo de candidatura'
      ],
      next: {
        'Sim, já tenho contrato ou promessa': 'contratoValido',
        'Ainda não tenho': 'areaProfissional',
        'Estou em processo de candidatura': 'areaProfissional'
      }
    },

    {
      id: 'contratoValido',
      question: 'Seu contrato está formalizado e assinado?',
      type: 'radio',
      options: [
        'Sim',
        'Não ainda'
      ],
      next: {
        'Sim': 'documentosBase',
        'Não ainda': 'negativeResult'
      }
    },

    {
      id: 'areaProfissional',
      question: 'Em qual área você pretende trabalhar?',
      type: 'radio',
      options: [
        'Tecnologia / TI',
        'Construção civil',
        'Hotelaria / turismo',
        'Saúde',
        'Serviços gerais',
        'Outro'
      ],
      next: {
        'Tecnologia / TI': 'qualificacao',
        'Construção civil': 'qualificacao',
        'Hotelaria / turismo': 'qualificacao',
        'Saúde': 'qualificacao',
        'Serviços gerais': 'qualificacao',
        'Outro': 'qualificacao'
      }
    },

    {
      id: 'qualificacao',
      question: 'Você possui qualificação ou experiência na área escolhida?',
      type: 'radio',
      options: [
        'Sim, tenho experiência comprovada',
        'Sim, mas pouca experiência',
        'Não tenho experiência'
      ],
      next: {
        'Sim, tenho experiência comprovada': 'documentosBase',
        'Sim, mas pouca experiência': 'documentosBase',
        'Não tenho experiência': 'negativeResult'
      }
    },

    {
      id: 'documentosBase',
      question: 'Você possui passaporte válido e documentos pessoais em dia?',
      type: 'radio',
      options: [
        'Sim, tudo válido',
        'Estou renovando',
        'Não tenho passaporte válido'
      ],
      next: {
        'Sim, tudo válido': 'idioma',
        'Estou renovando': 'questionFamily',
        'Não tenho passaporte válido': 'negativeResult'
      }
    },

    {
      id: 'idioma',
      question: 'Você tem conhecimento de português?',
      type: 'radio',
      options: [
        'Sim, falo bem',
        'Básico',
        'Não falo'
      ],
      next: {
        'Sim, falo bem': 'positiveResult',
        'Básico': 'questionFamily',
        'Não falo': 'questionFamily'
      }
    },

    //Visto de busca de trabalho
    {
      id: 'buscaTrabalho',
      question: 'Você já esteve em Portugal anteriormente?',
      type: 'radio',
      options: [
        'Sim, já visitei ou morei',
        'Não, nunca estive',
        'Sim, estive como turista'
      ],
      next: {
        'Sim, já visitei ou morei': 'experienciaPortugal',
        'Não, nunca estive': 'formacao',
        'Sim, estive como turista': 'formacao'
      }
    },

    {
      id: 'experienciaPortugal',
      question: 'Você já trabalhou ou estudou em Portugal?',
      type: 'radio',
      options: [
        'Sim, trabalhei',
        'Sim, estudei',
        'Não'
      ],
      next: {
        'Sim, trabalhei': 'documentosBase',
        'Sim, estudei': 'documentosBase',
        'Não': 'formacao'
      }
    },

    {
      id: 'formacao',
      question: 'Qual é o seu nível de formação?',
      type: 'radio',
      options: [
        'Ensino superior completo',
        'Ensino técnico',
        'Ensino médio completo',
        'Não concluí estudos'
      ],
      next: {
        'Ensino superior completo': 'areaTrabalho',
        'Ensino técnico': 'areaTrabalho',
        'Ensino médio completo': 'areaTrabalho',
        'Não concluí estudos': 'negativeResult'
      }
    },

    {
      id: 'areaTrabalho',
      question: 'Em qual área você pretende trabalhar em Portugal?',
      type: 'radio',
      options: [
        'Tecnologia / TI',
        'Construção civil',
        'Hotelaria / turismo',
        'Saúde',
        'Logística',
        'Serviços gerais',
        'Outro'
      ],
      next: {
        'Tecnologia / TI': 'idioma',
        'Construção civil': 'idioma',
        'Hotelaria / turismo': 'idioma',
        'Saúde': 'idioma',
        'Logística': 'idioma',
        'Serviços gerais': 'idioma',
        'Outro': 'idioma'
      }
    },

    {
      id: 'idioma',
      question: 'Você fala português ou inglês?',
      type: 'radio',
      options: [
        'Português fluente',
        'Inglês intermediário',
        'Básico em ambos',
        'Não falo nenhum'
      ],
      next: {
        'Português fluente': 'documentosBase',
        'Inglês intermediário': 'documentosBase',
        'Básico em ambos': 'questionFamily',
        'Não falo nenhum': 'questionFamily'
      }
    },

    {
      id: 'documentosBase',
      question: 'Você possui passaporte válido e disponibilidade financeira para se manter em Portugal?',
      type: 'radio',
      options: [
        'Sim, tenho passaporte e dinheiro suficiente',
        'Tenho passaporte, mas poucos recursos',
        'Não tenho passaporte válido'
      ],
      next: {
        'Sim, tenho passaporte e dinheiro suficiente': 'positiveResult',
        'Tenho passaporte, mas poucos recursos': 'questionFamily',
        'Não tenho passaporte válido': 'negativeResult'
      }
    },
    //Visto de Estudante

    {
      id: 'visaEstudante',
      question: 'Você já foi aceito(a) em uma instituição de ensino em Portugal?',
      type: 'radio',
      options: [
        'Sim, já tenho carta de aceitação',
        'Ainda não, estou em processo',
        'Não, ainda não me candidatei'
      ],
      next: {
        'Sim, já tenho carta de aceitação': 'nivelCurso',
        'Ainda não, estou em processo': 'instituicao',
        'Não, ainda não me candidatei': 'negativeResult'
      }
    },

    {
      id: 'instituicao',
      question: 'Você já escolheu a instituição de ensino?',
      type: 'radio',
      options: [
        'Sim',
        'Não ainda'
      ],
      next: {
        'Sim': 'nivelCurso',
        'Não ainda': 'questionFamily'
      }
    },

    {
      id: 'nivelCurso',
      question: 'Qual nível de estudo você pretende fazer?',
      type: 'radio',
      options: [
        'Licenciatura (Graduação)',
        'Mestrado',
        'Doutorado',
        'Curso técnico / profissional',
        'Curso de idioma'
      ],
      next: {
        'Licenciatura (Graduação)': 'idioma',
        'Mestrado': 'idioma',
        'Doutorado': 'idioma',
        'Curso técnico / profissional': 'idioma',
        'Curso de idioma': 'idioma'
      }
    },

    {
      id: 'idioma',
      question: 'Qual seu nível de português ou inglês?',
      type: 'radio',
      options: [
        'Português fluente',
        'Inglês avançado',
        'Intermediário',
        'Básico',
        'Não falo nenhum'
      ],
      next: {
        'Português fluente': 'formacaoAnterior',
        'Inglês avançado': 'formacaoAnterior',
        'Intermediário': 'formacaoAnterior',
        'Básico': 'formacaoAnterior',
        'Não falo nenhum': 'questionFamily'
      }
    },

    {
      id: 'formacaoAnterior',
      question: 'Você já possui formação acadêmica anterior?',
      type: 'radio',
      options: [
        'Ensino médio completo',
        'Ensino técnico',
        'Graduação completa',
        'Pós-graduação',
        'Não concluí estudos'
      ],
      next: {
        'Ensino médio completo': 'financeiro',
        'Ensino técnico': 'financeiro',
        'Graduação completa': 'financeiro',
        'Pós-graduação': 'financeiro',
        'Não concluí estudos': 'questionFamily'
      }
    },

    {
      id: 'financeiro',
      question: 'Você possui comprovação financeira para se manter em Portugal? (aprox. €700-€1000/mês)',
      type: 'radio',
      options: [
        'Sim, tenho valor suficiente',
        'Parcialmente',
        'Não tenho recursos suficientes'
      ],
      next: {
        'Sim, tenho valor suficiente': 'documentosBase',
        'Parcialmente': 'questionFamily',
        'Não tenho recursos suficientes': 'negativeResult'
      }
    },

    {
      id: 'documentosBase',
      question: 'Você possui passaporte válido e documentos básicos?',
      type: 'radio',
      options: [
        'Sim, tudo válido',
        'Estou renovando',
        'Não tenho passaporte válido'
      ],
      next: {
        'Sim, tudo válido': 'planoEstudos',
        'Estou renovando': 'questionFamily',
        'Não tenho passaporte válido': 'negativeResult'
      }
    },

    {
      id: 'planoEstudos',
      question: 'Você tem um plano claro de estudos em Portugal?',
      type: 'radio',
      options: [
        'Sim, tenho objetivo definido',
        'Mais ou menos',
        'Ainda não tenho certeza'
      ],
      next: {
        'Sim, tenho objetivo definido': 'positiveResult',
        'Mais ou menos': 'questionFamily',
        'Ainda não tenho certeza': 'questionFamily'
      }
    },

    //Visto de Familia
    {
      id: 'visaFamilia',
      question: 'Você possui familiar direto em Portugal?',
      type: 'radio',
      options: [
        'Sim, cônjuge',
        'Sim, pai ou mãe',
        'Sim, filho(a)',
        'Sim, outro familiar',
        'Não'
      ],
      next: {
        'Sim, cônjuge': 'statusFamiliar',
        'Sim, pai ou mãe': 'statusFamiliar',
        'Sim, filho(a)': 'statusFamiliar',
        'Sim, outro familiar': 'tipoVinculo',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'tipoVinculo',
      question: 'Qual é o grau de parentesco?',
      type: 'radio',
      options: [
        'Irmão/irmã',
        'Avô/avó',
        'Tio/tia',
        'Outro'
      ],
      next: {
        'Irmão/irmã': 'statusFamiliar',
        'Avô/avó': 'questionFamily',
        'Tio/tia': 'questionFamily',
        'Outro': 'questionFamily'
      }
    },

    {
      id: 'statusFamiliar',
      question: 'Seu familiar possui situação legal em Portugal?',
      type: 'radio',
      options: [
        'Sim, cidadão português',
        'Sim, residência legal',
        'Sim, está em processo de legalização',
        'Não sei',
        'Não possui situação regular'
      ],
      next: {
        'Sim, cidadão português': 'documentosFamilia',
        'Sim, residência legal': 'documentosFamilia',
        'Sim, está em processo de legalização': 'questionFamily',
        'Não sei': 'questionFamily',
        'Não possui situação regular': 'negativeResult'
      }
    },

    {
      id: 'documentosFamilia',
      question: 'Você possui documentos que comprovem o vínculo familiar?',
      type: 'radio',
      options: [
        'Sim, certidão de nascimento/casamento',
        'Sim, parcialmente',
        'Não tenho documentos'
      ],
      next: {
        'Sim, certidão de nascimento/casamento': 'convivencia',
        'Sim, parcialmente': 'questionFamily',
        'Não tenho documentos': 'questionFamily'
      }
    },

    {
      id: 'convivencia',
      question: 'Você já viveu ou vive com esse familiar?',
      type: 'radio',
      options: [
        'Sim, vivo com ele(a)',
        'Já vivi no passado',
        'Nunca vivi'
      ],
      next: {
        'Sim, vivo com ele(a)': 'financeiro',
        'Já vivi no passado': 'financeiro',
        'Nunca vivi': 'financeiro'
      }
    },

    {
      id: 'financeiro',
      question: 'Você possui meios financeiros para se manter em Portugal?',
      type: 'radio',
      options: [
        'Sim, tenho recursos próprios',
        'Dependo do familiar',
        'Parcialmente',
        'Não tenho recursos'
      ],
      next: {
        'Sim, tenho recursos próprios': 'idioma',
        'Dependo do familiar': 'questionFamily',
        'Parcialmente': 'questionFamily',
        'Não tenho recursos': 'negativeResult'
      }
    },

    {
      id: 'idioma',
      question: 'Você fala português?',
      type: 'radio',
      options: [
        'Sim, fluente',
        'Intermediário',
        'Básico',
        'Não falo'
      ],
      next: {
        'Sim, fluente': 'positiveResult',
        'Intermediário': 'questionFamily',
        'Básico': 'questionFamily',
        'Não falo': 'questionFamily'
      }
    },

    //Visto D7

    {
      id: 'D7',
      question: 'Você possui renda mensal estável ou passiva?',
      type: 'radio',
      options: [
        'Sim, aposentadoria',
        'Sim, aluguel de imóveis',
        'Sim, investimentos',
        'Sim, trabalho remoto fixo',
        'Não tenho renda estável'
      ],
      next: {
        'Sim, aposentadoria': 'valorRenda',
        'Sim, aluguel de imóveis': 'valorRenda',
        'Sim, investimentos': 'valorRenda',
        'Sim, trabalho remoto fixo': 'valorRenda',
        'Não tenho renda estável': 'negativeResult'
      }
    },

    {
      id: 'valorRenda',
      question: 'Qual é sua renda mensal aproximada?',
      type: 'radio',
      options: [
        'Até €800',
        '€800 - €1.200',
        '€1.200 - €2.000',
        'Acima de €2.000'
      ],
      next: {
        'Até €800': 'questionFamily',
        '€800 - €1.200': 'residenciaPortugal',
        '€1.200 - €2.000': 'residenciaPortugal',
        'Acima de €2.000': 'residenciaPortugal'
      }
    },

    {
      id: 'residenciaPortugal',
      question: 'Você pretende morar em Portugal de forma permanente?',
      type: 'radio',
      options: [
        'Sim, mudança definitiva',
        'Sim, parcial (vai e volta)',
        'Ainda estou decidindo'
      ],
      next: {
        'Sim, mudança definitiva': 'comprovacaoRenda',
        'Sim, parcial (vai e volta)': 'comprovacaoRenda',
        'Ainda estou decidindo': 'questionFamily'
      }
    },

    {
      id: 'comprovacaoRenda',
      question: 'Você possui comprovantes da sua renda (extratos, contratos, declaração)?',
      type: 'radio',
      options: [
        'Sim, completo',
        'Parcialmente',
        'Não tenho documentos'
      ],
      next: {
        'Sim, completo': 'passaporte',
        'Parcialmente': 'questionFamily',
        'Não tenho documentos': 'negativeResult'
      }
    },

    {
      id: 'passaporte',
      question: 'Você possui passaporte válido?',
      type: 'radio',
      options: [
        'Sim, válido',
        'Em renovação',
        'Não tenho'
      ],
      next: {
        'Sim, válido': 'moradia',
        'Em renovação': 'questionFamily',
        'Não tenho': 'negativeResult'
      }
    },

    {
      id: 'moradia',
      question: 'Você já possui moradia ou plano de residência em Portugal?',
      type: 'radio',
      options: [
        'Sim, já tenho imóvel/contrato',
        'Tenho plano, mas ainda não fechei',
        'Não tenho'
      ],
      next: {
        'Sim, já tenho imóvel/contrato': 'idioma',
        'Tenho plano, mas ainda não fechei': 'questionFamily',
        'Não tenho': 'questionFamily'
      }
    },

    {
      id: 'idioma',
      question: 'Você fala português?',
      type: 'radio',
      options: [
        'Sim, fluente',
        'Intermediário',
        'Básico',
        'Não falo'
      ],
      next: {
        'Sim, fluente': 'positiveResult',
        'Intermediário': 'questionFamily',
        'Básico': 'questionFamily',
        'Não falo': 'questionFamily'
      }
    },

    //NACIONALIDADE
    {
      id: 'nacionalidadePT',
      question: 'Você quer a nacionalidade por qual meio?',
      type: 'radio',
      options: [
        'Residência',
        'Descencência',
        'Casamento',
        'Serfadita'
      ],
      next: {
        'Descencência': 'descendenciaPT',
        'Residência': 'residenciaPT',
        'Casamento': 'casamentoPT',
        'Serfadita': 'serfadita'
      }
    },
    //Descendência
    {
      id: 'descendenciaPT',
      question: 'Você tem algum familiar português?',
      type: 'radio',
      options: [
        'Sim',
        'Não',
        'Não Sei'
      ],
      next: {
        'Sim': 'positiveFamily',
        'Não': 'negativeResult',
        'Não Sei': 'questionFamily',
      }
    },

    {
      id: 'positiveFamily',
      question: 'Quem da sua Familia é português?',
      type: 'radio',
      options: [
        'Pai ou mãe',
        'Avô ou avó',
        'Bisavô ou mais distante',
        'Não tenho certeza',
      ],
      next: {
        'Pai ou mãe': 'paisAvo',
        'Avô ou avó': 'paiAvos',
        'Bisavô ou mais distante': 'questionFamily',
        'Não tenho certeza': 'questionFamily',
      }
    },

    {
      id: 'paiAvo',
      question: 'Seus ascendentes são vivos?',
      type: 'radio',
      options: [
        'Sim',
        'Não'
      ],
      next: {
        'Sim': 'certidaoPT',
        'Não': 'certidaoPT'
      }
    },

    {
      id: 'certidaoPT',
      question: 'Você possui documentos dos seus ascendentes?',
      type: 'radio',
      options: [
        'Sim, tenho',
        'Não, não tenho'
      ],
      next: {
        'Sim, tenho': 'cidadePT',
        'Não, não tenho': 'cidadePT'
      }
    },

    {
      id: 'cidadePT',
      question: 'Você sabe em qual cidade portuguesa ele(a) nasceu?',
      type: 'radio',
      options: [
        'Sim, eu sei',
        'Não, não sei'
      ],
      next: {
        'Sim, eu sei': 'positiveResult',
        'Não, não sei': 'negativeResult'
      }
    },

    //Residência
    {
      id: 'residenciaPT',
      question: 'Qual o seu tipo de residência?',
      type: 'radio',
      options: [
        'Trabalho',
        'CPLP',
        'Estudante',
        'Reagrupamento familiar',
        'Manifestação de interesse antiga',
        'Outro'
      ],
      next: {
        'Trabalho' : 'temporesidenciaPT',
        'CPLP' : 'temporesidenciaPT',
        'Estudante' : 'temporesidenciaPT',
        'Reagrupamento familiar' : 'temporesidenciaPT',
        'Manifestação de interesse antiga' : 'temporesidenciaPT',
        'Outro' : 'negativeResult'
      }
    },

    {
      id: 'temporesidenciaPT',
      question: 'Há quanto tempo você reside legalmente em Portugal?',
      type: 'radio',
      options: [
        '1 a 3 anos',
        '3 a 5 anos',
        'Mais de 5 anos'
      ],
      next: {
        '1 a 3 anos' : 'negativeResult',
        '3 a 5 anos' : 'residenciaContinuaPT',
        'Mais de 5 anos' : 'residenciaContinuaPT'
      }
    },

    {
      id: 'residenciaContinuaPT',
      question: 'Sua residência foi contínua?',
      type: 'radio',
      options: [
        'Sim',
        'Não',
        'Não sei'
      ],
      next: {
      'Sim' : 'tituloResidence',
      'Não' : 'negativeResult',
      'Não sei' : 'negativeResult'}
    },

    {
      id: 'tituloResidence',
      question: 'Você possui título de residência válido atualmente?',
      type: 'radio',
      options: [
        "Sim",
        'Não',
        'Em renovação'
      ],
      next: {
        "Sim" : 'criminalPT',
        'Não' : 'negativeResult',
        'Em renovação' : 'criminalPT'
      }
    },

    {
      id : 'criminalPT',
      question: 'Você possui antecedentes criminais?',
      type: 'radio',
      options: [
        'Não',
        'Sim, em Portugal',
        'Sim, em outro país'
      ],
      next: {
        'Não' : 'nif',
        'Sim, em Portugal' : 'negativeResult',
        'Sim, em outro país' : 'negativeResult'
      }
    },

    {
      id : 'nif',
      question: 'Você possui NIF português?',
      type: 'radio',
      options: [
        'Sim',
        'Não'
      ],
      next: {
      'Sim' : 'residentPT',
      'Não' : 'residentPT'
      }
    },

    {
      id : 'residentPT',
      question: 'Você possui comprovantes de residência em Portugal?',
      type: 'radio',
      options: [
        'Sim',
        'Não'
      ],
      next: {
        'Sim' : 'bancoPT',
        'Não' : 'bancoPT'
      }
    },

    {
      id : 'bancoPT',
      question: 'Você possui vínculo profissional ou financeiro em Portugal?',
      type: 'radio',
      options: [
        'Sim',
        'Não'
      ],
      next: {
        'Sim' : 'soliAnt',
        'Não' : 'negativeResult'
      }
    },

    {
      id : 'soliAnt',
      question: 'Você já solicitou nacionalidade portuguesa antes?',
      type: 'radio',
      options: [
        'Sim',
        'Não'
      ],
      next: {
        'Sim' : 'positiveResult',
        'Não' : 'negativeResult'
      }
    },

    //Casamento
    {
      id: 'casamentoPT',
      question: 'Há quanto tempo dura o casamento ou união?',
      type: 'radio',
      options: [
        'Menos de 1 ano',
        '1 a 3 anos',
        'Mais de 6 anos'
      ],
      next: {
        'Menos de 1 ano' : 'negativeResult',
        '1 a 3 anos' : 'registroPT',
        'Mais de 6 anos' : 'registroPT'
      }
    },

    {
      id : 'registroPT',
      question: 'O casamento ou união está registrado oficialment',
      type: 'radio',
      options: [
        'Sim, em Portugal',
        'Sim, em outro país',
        'Não'
      ],
      next: {
        'Sim, em Portugal' : 'filhosComum',
        'Sim, em outro país' : 'filhosComum',
        'Não' : 'negativeResult'
      }
    },

    {
      id: 'filhosComum',
      question: 'O cônjuge possui nacionalidade portuguesa originária?',
      type: 'radio',
      options: [
        'Sim',
        'Não'
      ],
      next: {
        'Sim' : 'residePT',
        'Não' : 'residePT'
      }
    },

    {
      id : 'residePT',
      question: 'Você reside atualmente em Portugal?',
      type: 'radio',
      options: [
        'Sim',
        'Não'
      ],
      next: {
        'Sim' : 'separacaoPT',
        'Não' : 'separacaoPT'
      }
    },

    {
      id : 'separacaoPT',
      question: 'O relacionamento já passou por separação oficial?',
      type: 'radio',
      options: [
        'Sim',
        'Não'
      ],
      next: {
      'Sim' : 'soliAnt',
      'Não' : 'soliAnt'}
    },

    //Serfadita
    {
      id: 'serfadita',
      question: 'Você acredita possuir ascendência judaica sefardita?',
      type: 'radio',
      options: [
        'Sim',
        'Não',
        'Não sei'
      ],
      next: {
        'Sim' : 'arvoreJudaica',
        'Não' : 'negativeResult',
        'Não sei' : 'arvoreJudaica'
      }
    },

    {
      id : 'arvoreJudaica',
      question: 'Você possui árvore genealógica da família?',
      type: 'radio',
      options: [
      'Sim',
      'Não',
      'Não sei'
    ],
      next: {
        'Sim' : 'certificadoJudaico',
        'Não' : 'geneologista',
        'Não sei' : 'geneologista'
      }
    },

    {
      id: 'geneologista',
      question: 'Você já contratou genealogista ou pesquisador?',
      type: 'radio',
      options: [
        'Sim',
        'Não'
      ],
      next: {
        'Sim' : 'positiveResult',
        'Não' : 'positiveResult'
      }
    },

    {
      id: 'certificadoJudaico',
      question: 'Você possui certificado de comunidade judaica?',
      type: 'radio',
      options: [
        'Sim',
        'Não'
      ],
      next: {
        'Sim' : 'positiveResult',
        'Não' : 'positiveResult'
      }
    },

    //DOCUMENTS E LEGALIZAçÃO
    {
      id: 'docPT',
      question: 'Qual tipo de serviço você precisa?',
      type: 'radio',
      options: [
        'Tradução de Documentos',
        'Validação de documentos, diplomas, etc.',
        'Solicitação de documento português (NIF, NISS, ...)'
      ],
      next: {
        'Tradução de Documentos': 'positiveResult',
        'Validação de documentos, diplomas, etc.': 'positiveResult',
        'Solicitação de documento português (NIF, NISS, ...)': 'positiveResult'
      }
    },

    //CNH
    {
      id: 'cnhPT',
      question: 'Como podemos ajudar nesse assunto?',
      type: 'radio',
      options: [
        'Quero transferir minha CNH para Portugal/Brasil',
        'Quero validar minha certidão da minha permissão de dirigir',
        'Quero orientação para exames'
      ],
      next: {
        'Quero transferir minha CNH para Portugal/Brasil': 'positiveResult',
        'Quero validar minha certidão da minha permissão de dirigir': 'positiveResult',
        'Quero orientação para exames': 'positiveResult'
      }
    },

    //GENEOLOGIA
    {
      id: 'genealogia',
      question: 'Qual o principal objetivo da sua pesquisa genealógica?',
      type: 'radio',
      options: [
        'Buscar nacionalidade portuguesa',
        'Buscar origem sefardita',
        'Montar árvore familiar',
        'Encontrar documentos antigos',
        'Descobrir origem da família'
      ],
      next: {
        'Buscar nacionalidade portuguesa': 'ascendenteEuropeu',
        'Buscar origem sefardita': 'ascendenteEuropeu',
        'Montar árvore familiar': 'informacoesFamilia',
        'Encontrar documentos antigos': 'informacoesFamilia',
        'Descobrir origem da família': 'informacoesFamilia'
      }
    },

    {
      id: 'ascendenteEuropeu',
      question: 'Você sabe qual ascendente pode ter origem portuguesa/europeia?',
      type: 'radio',
      options: [
        'Pai ou mãe',
        'Avô ou avó',
        'Bisavô ou mais distante',
        'Não tenho certeza'
      ],
      next: {
        'Pai ou mãe': 'documentosFamilia',
        'Avô ou avó': 'documentosFamilia',
        'Bisavô ou mais distante': 'documentosFamilia',
        'Não tenho certeza': 'informacoesFamilia'
      }
    },

    {
      id: 'informacoesFamilia',
      question: 'Você possui informações básicas da família?',
      type: 'radio',
      options: [
        'Sim, nomes completos e datas',
        'Tenho informações parciais',
        'Tenho poucas informações'
      ],
      next: {
        'Sim, nomes completos e datas': 'documentosFamilia',
        'Tenho informações parciais': 'cidadeOrigem',
        'Tenho poucas informações': 'questionFamily'
      }
    },

    {
      id: 'documentosFamilia',
      question: 'Você possui documentos antigos da família?',
      type: 'radio',
      options: [
        'Sim, vários documentos',
        'Tenho alguns documentos',
        'Não tenho documentos'
      ],
      next: {
        'Sim, vários documentos': 'cidadeOrigem',
        'Tenho alguns documentos': 'cidadeOrigem',
        'Não tenho documentos': 'questionFamily'
      }
    },

    {
      id: 'cidadeOrigem',
      question: 'Você sabe a cidade ou região de origem da família?',
      type: 'radio',
      options: [
        'Sim, exatamente',
        'Tenho ideia aproximada',
        'Não sei'
      ],
      next: {
        'Sim, exatamente': 'idiomaDocumentos',
        'Tenho ideia aproximada': 'idiomaDocumentos',
        'Não sei': 'questionFamily'
      }
    },

    {
      id: 'idiomaDocumentos',
      question: 'Os documentos da família estão em qual idioma?',
      type: 'radio',
      options: [
        'Português',
        'Espanhol',
        'Italiano',
        'Francês',
        'Outro',
        'Não sei'
      ],
      next: {
        'Português': 'objetivoFinal',
        'Espanhol': 'objetivoFinal',
        'Italiano': 'objetivoFinal',
        'Francês': 'objetivoFinal',
        'Outro': 'questionFamily',
        'Não sei': 'questionFamily'
      }
    },

    {
      id: 'objetivoFinal',
      question: 'Qual resultado você espera alcançar?',
      type: 'radio',
      options: [
        'Nacionalidade europeia',
        'Reconstruir história familiar',
        'Encontrar registros oficiais',
        'Confirmar origem da família'
      ],
      next: {
        'Nacionalidade europeia': 'positiveResult',
        'Reconstruir história familiar': 'positiveResult',
        'Encontrar registros oficiais': 'positiveResult',
        'Confirmar origem da família': 'positiveResult'
      }
    },

    //RESULT

    {
      id: 'questionFamily',
      question: 'Precisa de mais analise!',
      type: 'result',
      options: [],
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
