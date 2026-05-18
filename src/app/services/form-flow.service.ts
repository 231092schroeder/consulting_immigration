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
      question: 'Qual serviço você precisa?',
      type: 'radio',
      options: [
        'Nacionalidade francesa',
        'Vistos para França',
        'Troca de carteira de motorista',
        'Ajudas sociais',
      ],
      next: {
        'Nacionalidade francesa' : 'nacionalidadeFR',
        'Vistos para França' : 'vistosFR',
        'Troca de carteira de motorista' : 'cnh',
        'Ajudas sociais' : 'socialFR',
      }
    },

    //VISTOS FR
    {
      id: 'vistosFR',
      question: 'Qual tipo de visto você deseja solicitar para a França?',
      type: 'radio',
      options: [
        'Visto de trabalho',
        'Visto férias-trabalho (PVT)',
        'Visto de estudante',
        'Visto de família',
        'Passeport Talent',
        'Au Pair',
        'Empreendedor / Empresa',
        'Não tenho certeza'
      ],
      next: {
        'Visto de trabalho': 'visaTrabalhoFR',
        'Visto férias-trabalho (PVT)': 'pvtFrance',
        'Visto de estudante': 'visaEstudanteFR',
        'Visto de família': 'visaFamiliaFR',
        'Passeport Talent': 'passeportTalentFR',
        'Au Pair': 'auPairFR',
        'Empreendedor / Empresa': 'empreendedorFR',
        'Não tenho certeza': 'questionFamily'
      }
    },

    //Empreendedor FR
    {
      id: 'empreendedorFR',
      question: 'Você já possui uma ideia ou projeto de negócio para a França?',
      type: 'radio',
      options: [
        'Sim, já estruturado',
        'Tenho uma ideia em desenvolvimento',
        'Ainda não tenho ideia definida'
      ],
      next: {
        'Sim, já estruturado': 'planoNegocioFR',
        'Tenho uma ideia em desenvolvimento': 'planoNegocioFR',
        'Ainda não tenho ideia definida': 'questionFamily'
      }
    },

    {
      id: 'planoNegocioFR',
      question: 'Você possui um plano de negócios (business plan) formalizado?',
      type: 'radio',
      options: [
        'Sim, completo',
        'Parcialmente',
        'Não tenho'
      ],
      next: {
        'Sim, completo': 'setorNegocioFR',
        'Parcialmente': 'questionFamily',
        'Não tenho': 'questionFamily'
      }
    },

    {
      id: 'setorNegocioFR',
      question: 'Em qual setor você pretende atuar na França?',
      type: 'radio',
      options: [
        'Tecnologia / Startups',
        'Comércio / Loja física ou online',
        'Restauração / Alimentação',
        'Serviços (beleza, estética, etc.)',
        'Importação / Exportação',
        'Outro'
      ],
      next: {
        'Tecnologia / Startups': 'capitalFR',
        'Comércio / Loja física ou online': 'capitalFR',
        'Restauração / Alimentação': 'capitalFR',
        'Serviços (beleza, estética, etc.)': 'capitalFR',
        'Importação / Exportação': 'capitalFR',
        'Outro': 'capitalFR'
      }
    },

    {
      id: 'capitalFR',
      question: 'Você possui capital para investir na França?',
      type: 'radio',
      options: [
        'Mais de €300.000',
        'Entre €100.000 e €300.000',
        'Menos de €100.000',
        'Não possuo capital'
      ],
      next: {
        'Mais de €300.000': 'experienciaEmpresarialFR',
        'Entre €100.000 e €300.000': 'experienciaEmpresarialFR',
        'Menos de €100.000': 'questionFamily',
        'Não possuo capital': 'negativeResult'
      }
    },

    {
      id: 'experienciaEmpresarialFR',
      question: 'Você já teve experiência como empreendedor ou gestor?',
      type: 'radio',
      options: [
        'Sim, empresa própria',
        'Sim, gestão de equipe',
        'Pouca experiência',
        'Nenhuma experiência'
      ],
      next: {
        'Sim, empresa própria': 'idiomaEmpreendedorFR',
        'Sim, gestão de equipe': 'idiomaEmpreendedorFR',
        'Pouca experiência': 'questionFamily',
        'Nenhuma experiência': 'questionFamily'
      }
    },

    {
      id: 'idiomaEmpreendedorFR',
      question: 'Qual seu nível de francês ou inglês?',
      type: 'radio',
      options: [
        'Fluente',
        'Intermediário',
        'Básico',
        'Não falo nenhum'
      ],
      next: {
        'Fluente': 'documentosEmpreendedorFR',
        'Intermediário': 'documentosEmpreendedorFR',
        'Básico': 'questionFamily',
        'Não falo nenhum': 'questionFamily'
      }
    },

    {
      id: 'documentosEmpreendedorFR',
      question: 'Você possui passaporte válido e documentos profissionais (CV, diplomas, portfólio, empresa)?',
      type: 'radio',
      options: [
        'Sim, completo',
        'Parcialmente',
        'Não possuo'
      ],
      next: {
        'Sim, completo': 'historicoEmpreendedorFR',
        'Parcialmente': 'questionFamily',
        'Não possuo': 'negativeResult'
      }
    },

    {
      id: 'historicoEmpreendedorFR',
      question: 'Você já teve visto recusado para França ou outro país europeu?',
      type: 'radio',
      options: [
        'Não',
        'Sim, uma vez',
        'Sim, mais de uma vez'
      ],
      next: {
        'Não': 'antecedentesEmpreendedorFR',
        'Sim, uma vez': 'questionFamily',
        'Sim, mais de uma vez': 'negativeResult'
      }
    },

    {
      id: 'antecedentesEmpreendedorFR',
      question: 'Você possui antecedentes criminais?',
      type: 'radio',
      options: [
        'Não',
        'Sim'
      ],
      next: {
        'Não': 'positiveResult',
        'Sim': 'negativeResult'
      }
    },

    //aupair FR
    {
      id: 'auPairFR',
      question: 'Qual sua idade?',
      type: 'radio',
      options: [
        '18 a 26 anos',
        '27 a 30 anos',
        'Menos de 18',
        'Mais de 30'
      ],
      next: {
        '18 a 26 anos': 'idiomaAuPairFR',
        '27 a 30 anos': 'questionFamily',
        'Menos de 18': 'negativeResult',
        'Mais de 30': 'negativeResult'
      }
    },

    {
      id: 'idiomaAuPairFR',
      question: 'Qual seu nível de francês?',
      type: 'radio',
      options: [
        'Fluente',
        'Intermediário',
        'Básico',
        'Não falo francês'
      ],
      next: {
        'Fluente': 'experienciaCriançasAuPairFR',
        'Intermediário': 'experienciaCriançasAuPairFR',
        'Básico': 'questionFamily',
        'Não falo francês': 'questionFamily'
      }
    },

    {
      id: 'experienciaCriançasAuPairFR',
      question: 'Você possui experiência com cuidados de crianças?',
      type: 'radio',
      options: [
        'Sim, mais de 2 anos',
        'Sim, menos de 2 anos',
        'Pouca experiência',
        'Nenhuma experiência'
      ],
      next: {
        'Sim, mais de 2 anos': 'disponibilidadeAuPairFR',
        'Sim, menos de 2 anos': 'disponibilidadeAuPairFR',
        'Pouca experiência': 'questionFamily',
        'Nenhuma experiência': 'negativeResult'
      }
    },

    {
      id: 'disponibilidadeAuPairFR',
      question: 'Você tem disponibilidade para morar com uma família na França?',
      type: 'radio',
      options: [
        'Sim, totalmente disponível',
        'Parcialmente disponível',
        'Não tenho disponibilidade'
      ],
      next: {
        'Sim, totalmente disponível': 'documentosAuPairFR',
        'Parcialmente disponível': 'questionFamily',
        'Não tenho disponibilidade': 'negativeResult'
      }
    },

    {
      id: 'documentosAuPairFR',
      question: 'Você possui passaporte válido e documentos pessoais organizados?',
      type: 'radio',
      options: [
        'Sim',
        'Parcialmente',
        'Não'
      ],
      next: {
        'Sim': 'motivacaoAuPairFR',
        'Parcialmente': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'motivacaoAuPairFR',
      question: 'Qual seu principal objetivo como Au Pair na França?',
      type: 'radio',
      options: [
        'Aprender francês',
        'Experiência cultural',
        'Trabalhar e viajar',
        'Possível imigração futura',
        'Ainda não sei'
      ],
      next: {
        'Aprender francês': 'historicoAuPairFR',
        'Experiência cultural': 'historicoAuPairFR',
        'Trabalhar e viajar': 'historicoAuPairFR',
        'Possível imigração futura': 'questionFamily',
        'Ainda não sei': 'questionFamily'
      }
    },

    {
      id: 'historicoAuPairFR',
      question: 'Você já teve visto recusado para França ou outro país europeu?',
      type: 'radio',
      options: [
        'Não',
        'Sim, uma vez',
        'Sim, mais de uma vez'
      ],
      next: {
        'Não': 'antecedentesAuPairFR',
        'Sim, uma vez': 'questionFamily',
        'Sim, mais de uma vez': 'negativeResult'
      }
    },

    {
      id: 'antecedentesAuPairFR',
      question: 'Você possui antecedentes criminais?',
      type: 'radio',
      options: [
        'Não',
        'Sim'
      ],
      next: {
        'Não': 'positiveResult',
        'Sim': 'negativeResult'
      }
    },

    //Passport TelentFR
    {
      id: 'passeportTalentFR',
      question: 'Você se enquadra em alguma categoria profissional qualificada para o Passeport Talent?',
      type: 'radio',
      options: [
        'Trabalhador altamente qualificado',
        'Pesquisador / acadêmico',
        'Empreendedor / startup',
        'Investidor',
        'Artista / profissional cultural',
        'Não tenho certeza'
      ],
      next: {
        'Trabalhador altamente qualificado': 'qualificacaoTalentFR',
        'Pesquisador / acadêmico': 'qualificacaoTalentFR',
        'Empreendedor / startup': 'projetoTalentFR',
        'Investidor': 'capitalTalentFR',
        'Artista / profissional cultural': 'experienciaTalentFR',
        'Não tenho certeza': 'questionFamily'
      }
    },

    {
      id: 'qualificacaoTalentFR',
      question: 'Você possui diploma superior ou qualificação equivalente?',
      type: 'radio',
      options: [
        'Sim, graduação',
        'Sim, mestrado/doutorado',
        'Sim, técnico',
        'Não possuo diploma'
      ],
      next: {
        'Sim, graduação': 'experienciaTalentFR',
        'Sim, mestrado/doutorado': 'experienciaTalentFR',
        'Sim, técnico': 'experienciaTalentFR',
        'Não possuo diploma': 'negativeResult'
      }
    },

    {
      id: 'experienciaTalentFR',
      question: 'Quantos anos de experiência profissional você possui?',
      type: 'radio',
      options: [
        'Mais de 10 anos',
        '5 a 10 anos',
        '1 a 5 anos',
        'Menos de 1 ano'
      ],
      next: {
        'Mais de 10 anos': 'idiomaTalentFR',
        '5 a 10 anos': 'idiomaTalentFR',
        '1 a 5 anos': 'questionFamily',
        'Menos de 1 ano': 'negativeResult'
      }
    },

    {
      id: 'projetoTalentFR',
      question: 'Você possui um projeto de empresa ou startup na França?',
      type: 'radio',
      options: [
        'Sim, já estruturado',
        'Em desenvolvimento',
        'Ainda não'
      ],
      next: {
        'Sim, já estruturado': 'idiomaTalentFR',
        'Em desenvolvimento': 'questionFamily',
        'Ainda não': 'negativeResult'
      }
    },

    {
      id: 'capitalTalentFR',
      question: 'Você possui capital para investimento na França?',
      type: 'radio',
      options: [
        'Sim, mais de €300.000',
        'Sim, entre €100.000 e €300.000',
        'Menos de €100.000',
        'Não possuo capital'
      ],
      next: {
        'Sim, mais de €300.000': 'idiomaTalentFR',
        'Sim, entre €100.000 e €300.000': 'questionFamily',
        'Menos de €100.000': 'negativeResult',
        'Não possuo capital': 'negativeResult'
      }
    },

    {
      id: 'idiomaTalentFR',
      question: 'Qual seu nível de francês ou inglês?',
      type: 'radio',
      options: [
        'Fluente',
        'Intermediário',
        'Básico',
        'Não falo nenhum'
      ],
      next: {
        'Fluente': 'documentosTalentFR',
        'Intermediário': 'documentosTalentFR',
        'Básico': 'questionFamily',
        'Não falo nenhum': 'questionFamily'
      }
    },

    {
      id: 'documentosTalentFR',
      question: 'Você possui passaporte válido e documentos profissionais (diplomas, contratos, portfólio)?',
      type: 'radio',
      options: [
        'Sim, completo',
        'Parcialmente',
        'Não possuo'
      ],
      next: {
        'Sim, completo': 'historicoTalentFR',
        'Parcialmente': 'questionFamily',
        'Não possuo': 'negativeResult'
      }
    },

    {
      id: 'historicoTalentFR',
      question: 'Você já teve visto recusado para França ou outro país europeu?',
      type: 'radio',
      options: [
        'Não',
        'Sim, uma vez',
        'Sim, mais de uma vez'
      ],
      next: {
        'Não': 'antecedentesTalentFR',
        'Sim, uma vez': 'questionFamily',
        'Sim, mais de uma vez': 'negativeResult'
      }
    },

    {
      id: 'antecedentesTalentFR',
      question: 'Você possui antecedentes criminais?',
      type: 'radio',
      options: [
        'Não',
        'Sim'
      ],
      next: {
        'Não': 'positiveResult',
        'Sim': 'negativeResult'
      }
    },

    //visto trabalho FR
    {
      id: 'visaTrabalhoFR',
      question: 'Você já possui uma proposta de trabalho na França?',
      type: 'radio',
      options: [
        'Sim, contrato assinado',
        'Sim, promessa de contratação',
        'Ainda não',
        'Estou procurando vagas'
      ],
      next: {
        'Sim, contrato assinado': 'empresaFrancaFR',
        'Sim, promessa de contratação': 'empresaFrancaFR',
        'Ainda não': 'areaProfissionalFR',
        'Estou procurando vagas': 'areaProfissionalFR'
      }
    },

    {
      id: 'empresaFrancaFR',
      question: 'A empresa está localizada na França e registrada legalmente?',
      type: 'radio',
      options: [
        'Sim',
        'Não sei',
        'Não'
      ],
      next: {
        'Sim': 'tipoContratoFR',
        'Não sei': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'tipoContratoFR',
      question: 'Qual o tipo do contrato oferecido?',
      type: 'radio',
      options: [
        'CDI (contrato permanente)',
        'CDD (contrato temporário)',
        'Freelance / prestação de serviço',
        'Não sei'
      ],
      next: {
        'CDI (contrato permanente)': 'salarioFR',
        'CDD (contrato temporário)': 'salarioFR',
        'Freelance / prestação de serviço': 'questionFamily',
        'Não sei': 'questionFamily'
      }
    },

    {
      id: 'salarioFR',
      question: 'O salário atende ou supera o salário mínimo francês?',
      type: 'radio',
      options: [
        'Sim',
        'Não sei',
        'Não'
      ],
      next: {
        'Sim': 'experienciaFR',
        'Não sei': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'areaProfissionalFR',
      question: 'Em qual área você pretende trabalhar na França?',
      type: 'radio',
      options: [
        'Tecnologia / TI',
        'Construção civil',
        'Hotelaria / turismo',
        'Saúde',
        'Restauração',
        'Limpeza / serviços gerais',
        'Outro'
      ],
      next: {
        'Tecnologia / TI': 'experienciaFR',
        'Construção civil': 'experienciaFR',
        'Hotelaria / turismo': 'experienciaFR',
        'Saúde': 'experienciaFR',
        'Restauração': 'experienciaFR',
        'Limpeza / serviços gerais': 'experienciaFR',
        'Outro': 'experienciaFR'
      }
    },

    {
      id: 'experienciaFR',
      question: 'Você possui experiência profissional comprovada?',
      type: 'radio',
      options: [
        'Mais de 5 anos',
        'Entre 1 e 5 anos',
        'Menos de 1 ano',
        'Não tenho experiência'
      ],
      next: {
        'Mais de 5 anos': 'idiomaFR',
        'Entre 1 e 5 anos': 'idiomaFR',
        'Menos de 1 ano': 'questionFamily',
        'Não tenho experiência': 'negativeResult'
      }
    },

    {
      id: 'idiomaFR',
      question: 'Qual seu nível de francês?',
      type: 'radio',
      options: [
        'Fluente',
        'Intermediário',
        'Básico',
        'Não falo francês'
      ],
      next: {
        'Fluente': 'documentosFR',
        'Intermediário': 'documentosFR',
        'Básico': 'questionFamily',
        'Não falo francês': 'questionFamily'
      }
    },

    {
      id: 'documentosFR',
      question: 'Você possui passaporte válido e documentos profissionais?',
      type: 'radio',
      options: [
        'Sim, tudo válido',
        'Parcialmente',
        'Não possuo'
      ],
      next: {
        'Sim, tudo válido': 'moradiaFR',
        'Parcialmente': 'questionFamily',
        'Não possuo': 'negativeResult'
      }
    },

    {
      id: 'moradiaFR',
      question: 'Você possui plano de moradia na França?',
      type: 'radio',
      options: [
        'Sim, já tenho endereço',
        'Tenho opções em vista',
        'Ainda não tenho'
      ],
      next: {
        'Sim, já tenho endereço': 'historicoMigratorioFR',
        'Tenho opções em vista': 'historicoMigratorioFR',
        'Ainda não tenho': 'questionFamily'
      }
    },

    {
      id: 'historicoMigratorioFR',
      question: 'Você já teve visto recusado para França ou outro país europeu?',
      type: 'radio',
      options: [
        'Não',
        'Sim, uma vez',
        'Sim, mais de uma vez'
      ],
      next: {
        'Não': 'antecedentesFR',
        'Sim, uma vez': 'questionFamily',
        'Sim, mais de uma vez': 'negativeResult'
      }
    },

    {
      id: 'antecedentesFR',
      question: 'Você possui antecedentes criminais?',
      type: 'radio',
      options: [
        'Não',
        'Sim'
      ],
      next: {
        'Não': 'positiveResult',
        'Sim': 'negativeResult'
      }
    },

    //PVT FR
    {
      id: 'pvtFrance',
      question: 'Qual sua idade?',
      type: 'radio',
      options: [
        '18 a 30 anos',
        '31 a 35 anos',
        'Menos de 18',
        'Mais de 35'
      ],
      next: {
        '18 a 30 anos': 'nacionalidadePVTFR',
        '31 a 35 anos': 'negativeResult',
        'Menos de 18': 'negativeResult',
        'Mais de 35': 'negativeResult'
      }
    },

    {
      id: 'nacionalidadePVTFR',
      question: 'Qual sua nacionalidade?',
      type: 'radio',
      options: [
        'Brasileira',
        'Argentina',
        'Chilena',
        'Colombiana',
        'Outra'
      ],
      next: {
        'Brasileira': 'passaportePVTFR',
        'Argentina': 'passaportePVTFR',
        'Chilena': 'passaportePVTFR',
        'Colombiana': 'passaportePVTFR',
        'Outra': 'questionFamily'
      }
    },

    {
      id: 'passaportePVTFR',
      question: 'Você possui passaporte válido?',
      type: 'radio',
      options: [
        'Sim',
        'Está vencendo',
        'Não'
      ],
      next: {
        'Sim': 'primeiroPVTFR',
        'Está vencendo': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'primeiroPVTFR',
      question: 'Será sua primeira participação no programa férias-trabalho francês?',
      type: 'radio',
      options: [
        'Sim',
        'Não'
      ],
      next: {
        'Sim': 'financeiroPVTFR',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'financeiroPVTFR',
      question: 'Você possui recursos financeiros para início da estadia na França?',
      type: 'radio',
      options: [
        'Sim, tenho reserva financeira',
        'Tenho parcialmente',
        'Não tenho'
      ],
      next: {
        'Sim, tenho reserva financeira': 'seguroSaudePVTFR',
        'Tenho parcialmente': 'questionFamily',
        'Não tenho': 'negativeResult'
      }
    },

    {
      id: 'seguroSaudePVTFR',
      question: 'Você possui ou pretende contratar seguro saúde internacional?',
      type: 'radio',
      options: [
        'Sim',
        'Ainda não',
        'Não'
      ],
      next: {
        'Sim': 'idiomaPVTFR',
        'Ainda não': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'idiomaPVTFR',
      question: 'Qual seu nível de francês?',
      type: 'radio',
      options: [
        'Fluente',
        'Intermediário',
        'Básico',
        'Não falo francês'
      ],
      next: {
        'Fluente': 'objetivoPVTFR',
        'Intermediário': 'objetivoPVTFR',
        'Básico': 'questionFamily',
        'Não falo francês': 'questionFamily'
      }
    },

    {
      id: 'objetivoPVTFR',
      question: 'Qual seu principal objetivo na França?',
      type: 'radio',
      options: [
        'Trabalhar e viajar',
        'Conhecer cultura francesa',
        'Melhorar idioma',
        'Migrar futuramente',
        'Ainda não sei'
      ],
      next: {
        'Trabalhar e viajar': 'historicoMigratorioPVTFR',
        'Conhecer cultura francesa': 'historicoMigratorioPVTFR',
        'Melhorar idioma': 'historicoMigratorioPVTFR',
        'Migrar futuramente': 'questionFamily',
        'Ainda não sei': 'questionFamily'
      }
    },

    {
      id: 'historicoMigratorioPVTFR',
      question: 'Você já teve visto recusado para França ou Europa?',
      type: 'radio',
      options: [
        'Não',
        'Sim, uma vez',
        'Sim, mais de uma vez'
      ],
      next: {
        'Não': 'antecedentesPVTFR',
        'Sim, uma vez': 'questionFamily',
        'Sim, mais de uma vez': 'negativeResult'
      }
    },

    {
      id: 'antecedentesPVTFR',
      question: 'Você possui antecedentes criminais?',
      type: 'radio',
      options: [
        'Não',
        'Sim'
      ],
      next: {
        'Não': 'positiveResult',
        'Sim': 'negativeResult'
      }
    },

    //Visto Estudante FR
    {
      id: 'visaEstudanteFR',
      question: 'Você já foi aceito(a) em uma instituição de ensino na França?',
      type: 'radio',
      options: [
        'Sim, já tenho carta de aceitação',
        'Estou em processo de candidatura',
        'Ainda não me candidatei'
      ],
      next: {
        'Sim, já tenho carta de aceitação': 'tipoCursoFR',
        'Estou em processo de candidatura': 'instituicaoFR',
        'Ainda não me candidatei': 'negativeResult'
      }
    },

    {
      id: 'instituicaoFR',
      question: 'Você já escolheu a instituição de ensino?',
      type: 'radio',
      options: [
        'Sim',
        'Ainda não'
      ],
      next: {
        'Sim': 'tipoCursoFR',
        'Ainda não': 'questionFamily'
      }
    },

    {
      id: 'tipoCursoFR',
      question: 'Qual tipo de curso você pretende fazer na França?',
      type: 'radio',
      options: [
        'Graduação',
        'Mestrado',
        'Doutorado',
        'Curso técnico',
        'Curso de francês',
        'Intercâmbio'
      ],
      next: {
        'Graduação': 'idiomaEstudanteFR',
        'Mestrado': 'idiomaEstudanteFR',
        'Doutorado': 'idiomaEstudanteFR',
        'Curso técnico': 'idiomaEstudanteFR',
        'Curso de francês': 'idiomaEstudanteFR',
        'Intercâmbio': 'idiomaEstudanteFR'
      }
    },

    {
      id: 'idiomaEstudanteFR',
      question: 'Qual seu nível de francês?',
      type: 'radio',
      options: [
        'Fluente',
        'Intermediário',
        'Básico',
        'Não falo francês'
      ],
      next: {
        'Fluente': 'financeiroEstudanteFR',
        'Intermediário': 'financeiroEstudanteFR',
        'Básico': 'questionFamily',
        'Não falo francês': 'questionFamily'
      }
    },

    {
      id: 'financeiroEstudanteFR',
      question: 'Você possui recursos financeiros para estudar e viver na França?',
      type: 'radio',
      options: [
        'Sim, totalmente',
        'Parcialmente',
        'Não tenho recursos suficientes'
      ],
      next: {
        'Sim, totalmente': 'moradiaEstudanteFR',
        'Parcialmente': 'questionFamily',
        'Não tenho recursos suficientes': 'negativeResult'
      }
    },

    {
      id: 'moradiaEstudanteFR',
      question: 'Você já possui plano de moradia na França?',
      type: 'radio',
      options: [
        'Sim, já tenho endereço',
        'Estou procurando',
        'Ainda não pensei nisso'
      ],
      next: {
        'Sim, já tenho endereço': 'documentosEstudanteFR',
        'Estou procurando': 'documentosEstudanteFR',
        'Ainda não pensei nisso': 'questionFamily'
      }
    },

    {
      id: 'documentosEstudanteFR',
      question: 'Você possui passaporte válido e documentos escolares?',
      type: 'radio',
      options: [
        'Sim, tudo pronto',
        'Parcialmente',
        'Não possuo'
      ],
      next: {
        'Sim, tudo pronto': 'historicoEstudanteFR',
        'Parcialmente': 'questionFamily',
        'Não possuo': 'negativeResult'
      }
    },

    {
      id: 'historicoEstudanteFR',
      question: 'Você já teve visto recusado anteriormente?',
      type: 'radio',
      options: [
        'Não',
        'Sim, uma vez',
        'Sim, mais de uma vez'
      ],
      next: {
        'Não': 'objetivoEstudanteFR',
        'Sim, uma vez': 'questionFamily',
        'Sim, mais de uma vez': 'negativeResult'
      }
    },

    {
      id: 'objetivoEstudanteFR',
      question: 'Qual seu principal objetivo com os estudos na França?',
      type: 'radio',
      options: [
        'Construir carreira internacional',
        'Aprender francês',
        'Migrar futuramente',
        'Experiência cultural',
        'Ainda não tenho certeza'
      ],
      next: {
        'Construir carreira internacional': 'antecedentesEstudanteFR',
        'Aprender francês': 'antecedentesEstudanteFR',
        'Migrar futuramente': 'questionFamily',
        'Experiência cultural': 'antecedentesEstudanteFR',
        'Ainda não tenho certeza': 'questionFamily'
      }
    },

    {
      id: 'antecedentesEstudanteFR',
      question: 'Você possui antecedentes criminais?',
      type: 'radio',
      options: [
        'Não',
        'Sim'
      ],
      next: {
        'Não': 'positiveResult',
        'Sim': 'negativeResult'
      }
    },

    //Visto Familia FR
    {
      id: 'visaFamiliaFR',
      question: 'Você possui familiar direto vivendo legalmente na França?',
      type: 'radio',
      options: [
        'Sim, cônjuge',
        'Sim, pai ou mãe',
        'Sim, filho(a)',
        'Sim, outro familiar',
        'Não'
      ],
      next: {
        'Sim, cônjuge': 'statusFamiliarFR',
        'Sim, pai ou mãe': 'statusFamiliarFR',
        'Sim, filho(a)': 'statusFamiliarFR',
        'Sim, outro familiar': 'tipoParentescoFR',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'tipoParentescoFR',
      question: 'Qual é o grau de parentesco?',
      type: 'radio',
      options: [
        'Irmão/irmã',
        'Avô/avó',
        'Tio/tia',
        'Outro'
      ],
      next: {
        'Irmão/irmã': 'questionFamily',
        'Avô/avó': 'questionFamily',
        'Tio/tia': 'questionFamily',
        'Outro': 'questionFamily'
      }
    },

    {
      id: 'statusFamiliarFR',
      question: 'Qual a situação legal do seu familiar na França?',
      type: 'radio',
      options: [
        'Cidadão francês',
        'Residência permanente',
        'Visto válido',
        'Em situação irregular',
        'Não sei'
      ],
      next: {
        'Cidadão francês': 'documentosFamiliaFR',
        'Residência permanente': 'documentosFamiliaFR',
        'Visto válido': 'documentosFamiliaFR',
        'Em situação irregular': 'negativeResult',
        'Não sei': 'questionFamily'
      }
    },

    {
      id: 'documentosFamiliaFR',
      question: 'Você possui documentos que comprovem o vínculo familiar?',
      type: 'radio',
      options: [
        'Sim, completos',
        'Parcialmente',
        'Não possuo'
      ],
      next: {
        'Sim, completos': 'convivenciaFR',
        'Parcialmente': 'questionFamily',
        'Não possuo': 'negativeResult'
      }
    },

    {
      id: 'convivenciaFR',
      question: 'Você já viveu com esse familiar?',
      type: 'radio',
      options: [
        'Sim, atualmente',
        'Já vivi anteriormente',
        'Nunca vivi'
      ],
      next: {
        'Sim, atualmente': 'financeiroFamiliaFR',
        'Já vivi anteriormente': 'financeiroFamiliaFR',
        'Nunca vivi': 'financeiroFamiliaFR'
      }
    },

    {
      id: 'financeiroFamiliaFR',
      question: 'Seu familiar possui condições financeiras para ajudar na sua estadia?',
      type: 'radio',
      options: [
        'Sim',
        'Parcialmente',
        'Não'
      ],
      next: {
        'Sim': 'moradiaFamiliaFR',
        'Parcialmente': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'moradiaFamiliaFR',
      question: 'Você terá moradia garantida na França?',
      type: 'radio',
      options: [
        'Sim',
        'Ainda estou organizando',
        'Não'
      ],
      next: {
        'Sim': 'idiomaFamiliaFR',
        'Ainda estou organizando': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'idiomaFamiliaFR',
      question: 'Qual seu nível de francês?',
      type: 'radio',
      options: [
        'Fluente',
        'Intermediário',
        'Básico',
        'Não falo francês'
      ],
      next: {
        'Fluente': 'historicoMigratorioFamiliaFR',
        'Intermediário': 'historicoMigratorioFamiliaFR',
        'Básico': 'questionFamily',
        'Não falo francês': 'questionFamily'
      }
    },

    {
      id: 'historicoMigratorioFamiliaFR',
      question: 'Você já teve visto recusado para França ou Europa?',
      type: 'radio',
      options: [
        'Não',
        'Sim, uma vez',
        'Sim, mais de uma vez'
      ],
      next: {
        'Não': 'antecedentesFamiliaFR',
        'Sim, uma vez': 'questionFamily',
        'Sim, mais de uma vez': 'negativeResult'
      }
    },

    {
      id: 'antecedentesFamiliaFR',
      question: 'Você possui antecedentes criminais?',
      type: 'radio',
      options: [
        'Não',
        'Sim'
      ],
      next: {
        'Não': 'positiveResult',
        'Sim': 'negativeResult'
      }
    },

    //NACIONALIDADE FR
    {
      id: 'nacionalidadeFR',
      question: 'Por qual via você deseja solicitar a nacionalidade francesa?',
      type: 'radio',
      options: [
        'Por residência legal na França',
        'Por casamento com cidadão francês',
        'Por nascimento / filiação',
        'Por naturalização (caso geral)',
        'Não tenho certeza'
      ],
      next: {
        'Por residência legal na França': 'residenciaNacionalidadeFR',
        'Por casamento com cidadão francês': 'casamentoNacionalidadeFR',
        'Por nascimento / filiação': 'filiaçãoNacionalidadeFR',
        'Por naturalização (caso geral)': 'naturalizacaoNacionalidadeFR',
        'Não tenho certeza': 'questionFamily'
      }
    },

    {
      id: 'residenciaNacionalidadeFR',
      question: 'Há quanto tempo você reside legalmente na França?',
      type: 'radio',
      options: [
        'Menos de 2 anos',
        '2 a 5 anos',
        'Mais de 5 anos',
        'Nunca residi na França'
      ],
      next: {
        'Menos de 2 anos': 'negativeResult',
        '2 a 5 anos': 'statusResidenciaFR',
        'Mais de 5 anos': 'statusResidenciaFR',
        'Nunca residi na França': 'negativeResult'
      }
    },

    {
      id: 'statusResidenciaFR',
      question: 'Qual seu status atual na França?',
      type: 'radio',
      options: [
        'Visto válido',
        'Titre de séjour (residência)',
        'Cidadão europeu residente',
        'Sem status legal'
      ],
      next: {
        'Visto válido': 'integracaoFR',
        'Titre de séjour (residência)': 'integracaoFR',
        'Cidadão europeu residente': 'integracaoFR',
        'Sem status legal': 'negativeResult'
      }
    },

    {
      id: 'casamentoNacionalidadeFR',
      question: 'Você é casado(a) ou vive em união estável com cidadão francês?',
      type: 'radio',
      options: [
        'Casado(a)',
        'União estável (PACS)',
        'Sim, mas não formalizado',
        'Não'
      ],
      next: {
        'Casado(a)': 'tempoCasamentoFR',
        'União estável (PACS)': 'tempoCasamentoFR',
        'Sim, mas não formalizado': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'tempoCasamentoFR',
      question: 'Há quanto tempo você está nesta relação?',
      type: 'radio',
      options: [
        'Menos de 1 ano',
        '1 a 3 anos',
        'Mais de 3 anos'
      ],
      next: {
        'Menos de 1 ano': 'questionFamily',
        '1 a 3 anos': 'integracaoFR',
        'Mais de 3 anos': 'integracaoFR'
      }
    },

    {
      id: 'filiaçãoNacionalidadeFR',
      question: 'Você possui pai/mãe francês ou nascido na França?',
      type: 'radio',
      options: [
        'Sim, pai francês',
        'Sim, mãe francesa',
        'Sim, ambos',
        'Sim, mas não tenho documentos',
        'Não'
      ],
      next: {
        'Sim, pai francês': 'documentosFiliaçãoFR',
        'Sim, mãe francesa': 'documentosFiliaçãoFR',
        'Sim, ambos': 'documentosFiliaçãoFR',
        'Sim, mas não tenho documentos': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'documentosFiliaçãoFR',
      question: 'Você possui documentos que comprovem a filiação?',
      type: 'radio',
      options: [
        'Sim, completos',
        'Parcialmente',
        'Não possuo'
      ],
      next: {
        'Sim, completos': 'integracaoFR',
        'Parcialmente': 'questionFamily',
        'Não possuo': 'negativeResult'
      }
    },

    {
      id: 'naturalizacaoNacionalidadeFR',
      question: 'Você já residiu legalmente na França anteriormente?',
      type: 'radio',
      options: [
        'Sim',
        'Não',
        'Parcialmente'
      ],
      next: {
        'Sim': 'integracaoFR',
        'Parcialmente': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'integracaoFR',
      question: 'Você possui integração com a sociedade francesa (trabalho, idioma, impostos)?',
      type: 'radio',
      options: [
        'Sim, totalmente integrado',
        'Parcialmente integrado',
        'Ainda não estou integrado'
      ],
      next: {
        'Sim, totalmente integrado': 'idiomaNacionalidadeFR',
        'Parcialmente integrado': 'questionFamily',
        'Ainda não estou integrado': 'questionFamily'
      }
    },

    {
      id: 'idiomaNacionalidadeFR',
      question: 'Qual seu nível de francês?',
      type: 'radio',
      options: [
        'Fluente',
        'Intermediário',
        'Básico',
        'Não falo francês'
      ],
      next: {
        'Fluente': 'antecedentesNacionalidadeFR',
        'Intermediário': 'antecedentesNacionalidadeFR',
        'Básico': 'questionFamily',
        'Não falo francês': 'questionFamily'
      }
    },

    {
      id: 'antecedentesNacionalidadeFR',
      question: 'Você possui antecedentes criminais?',
      type: 'radio',
      options: [
        'Não',
        'Sim'
      ],
      next: {
        'Não': 'positiveResult',
        'Sim': 'negativeResult'
      }
    },
    //AJUDA SOCIAL FR
    {
      id: 'socialFR',
      question: 'Qual tipo de ajuda social você deseja na França?',
      type: 'radio',
      options: [
        'Ajuda para moradia (CAF)',
        'Auxílio desemprego (France Travail)',
        'Ajuda financeira emergencial',
        'Auxílio saúde (Sécurité Sociale)',
        'Ajuda para família com filhos',
        'Não sei qual se aplica ao meu caso'
      ],
      next: {
        'Ajuda para moradia (CAF)': 'situacaoMoradiaFR',
        'Auxílio desemprego (France Travail)': 'situacaoTrabalhoFR',
        'Ajuda financeira emergencial': 'situacaoFinanceiraFR',
        'Auxílio saúde (Sécurité Sociale)': 'situacaoSaudeFR',
        'Ajuda para família com filhos': 'situacaoFamiliaFR',
        'Não sei qual se aplica ao meu caso': 'questionFamily'
      }
    },

    {
      id: 'situacaoMoradiaFR',
      question: 'Você possui contrato de aluguel na França?',
      type: 'radio',
      options: [
        'Sim',
        'Não',
        'Estou em alojamento temporário'
      ],
      next: {
        'Sim': 'rendaMoradiaFR',
        'Não': 'questionFamily',
        'Estou em alojamento temporário': 'questionFamily'
      }
    },

    {
      id: 'rendaMoradiaFR',
      question: 'Sua renda atual está registrada na França?',
      type: 'radio',
      options: [
        'Sim, renda estável',
        'Sim, renda baixa',
        'Não tenho renda'
      ],
      next: {
        'Sim, renda estável': 'documentosSocialFR',
        'Sim, renda baixa': 'questionFamily',
        'Não tenho renda': 'questionFamily'
      }
    },

    {
      id: 'situacaoTrabalhoFR',
      question: 'Você está atualmente desempregado na França?',
      type: 'radio',
      options: [
        'Sim',
        'Não',
        'Estou em transição de trabalho'
      ],
      next: {
        'Sim': 'historicoTrabalhoFR',
        'Não': 'negativeResult',
        'Estou em transição de trabalho': 'questionFamily'
      }
    },

    {
      id: 'historicoTrabalhoFR',
      question: 'Você trabalhou na França com contrato formal?',
      type: 'radio',
      options: [
        'Sim, CDI',
        'Sim, CDD',
        'Não trabalhei formalmente'
      ],
      next: {
        'Sim, CDI': 'documentosSocialFR',
        'Sim, CDD': 'documentosSocialFR',
        'Não trabalhei formalmente': 'questionFamily'
      }
    },

    {
      id: 'situacaoFinanceiraFR',
      question: 'Sua renda atual é inferior ao mínimo social francês?',
      type: 'radio',
      options: [
        'Sim',
        'Não sei',
        'Não'
      ],
      next: {
        'Sim': 'documentosSocialFR',
        'Não sei': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'situacaoSaudeFR',
      question: 'Você já está inscrito na Sécurité Sociale?',
      type: 'radio',
      options: [
        'Sim',
        'Não',
        'Em processo de inscrição'
      ],
      next: {
        'Sim': 'documentosSocialFR',
        'Não': 'questionFamily',
        'Em processo de inscrição': 'questionFamily'
      }
    },

    {
      id: 'situacaoFamiliaFR',
      question: 'Você possui filhos menores de idade na França?',
      type: 'radio',
      options: [
        'Sim',
        'Não',
        'Estou grávida(o)'
      ],
      next: {
        'Sim': 'rendaFamiliaFR',
        'Não': 'negativeResult',
        'Estou grávida(o)': 'questionFamily'
      }
    },

    {
      id: 'rendaFamiliaFR',
      question: 'Sua renda familiar é suficiente para sustentar os filhos?',
      type: 'radio',
      options: [
        'Sim',
        'Parcialmente',
        'Não'
      ],
      next: {
        'Sim': 'documentosSocialFR',
        'Parcialmente': 'questionFamily',
        'Não': 'questionFamily'
      }
    },

    {
      id: 'documentosSocialFR',
      question: 'Você possui documentos de residência válidos na França?',
      type: 'radio',
      options: [
        'Sim',
        'Parcialmente',
        'Não'
      ],
      next: {
        'Sim': 'antecedentesSocialFR',
        'Parcialmente': 'questionFamily',
        'Não': 'negativeResult'
      }
    },

    {
      id: 'antecedentesSocialFR',
      question: 'Você possui antecedentes criminais?',
      type: 'radio',
      options: [
        'Não',
        'Sim'
      ],
      next: {
        'Não': 'positiveResult',
        'Sim': 'negativeResult'
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
        '🚗 Carteira de motorista': 'cnh',
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
      id: 'cnh',
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
