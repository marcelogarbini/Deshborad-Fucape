/**
 * Contexto completo do Dashboard de Clima Organizacional
 * Este arquivo contém todas as informações que a IA precisa conhecer
 * para ser uma assistente eficaz do dashboard
 */

export const dashboardContext = {
  // Informações Gerais
  overview: {
    title: "Dashboard de Clima Organizacional - AEBES",
    year: 2024,
    totalRespondents: 949,
    totalPopulation: 2254,
    responseRate: 42.1,
    demographics: {
      gender: {
        female: { percentage: 82.51, count: 783 },
        male: { percentage: 15.6, count: 148 },
        preferNotToSay: { percentage: 1.9, count: 18 }
      },
      age: {
        under25: { percentage: 75.84, count: 678 },
        "25-34": { percentage: 9.4, count: 84 },
        "35-44": { percentage: 7.72, count: 69 },
        "45-54": { percentage: 5.93, count: 53 },
        "55+": { percentage: 1.12, count: 10 }
      },
      education: {
        technical: { percentage: 41.83, count: 397 },
        basic: { percentage: 24.76, count: 235 },
        graduation: { percentage: 19.39, count: 184 },
        specialization: { percentage: 13.38, count: 127 },
        masterDoctorate: { percentage: 0.63, count: 6 }
      }
    }
  },

  // Tópico 1: Cálculo do Tamanho da Amostra
  sampleSize: {
    totalPopulation: 2254,
    sampleSize: 949,
    responseRate: 42.1,
    methodology: "Amostragem probabilística simples para população finita, garantindo representatividade estatística adequada"
  },

  // Tópico 3: Fatores de Clima Organizacional (Médias e Desvios Padrão)
  factors: [
    {
      factor: "Relações Interpessoais",
      media: 3.60,
      dp: 1.025,
      questions: [
        { id: 36, text: "Bom relacionamento com colegas", media: 4.08, dp: 0.80 },
        { id: 37, text: "Ambiente colaborativo e respeitoso", media: 3.58, dp: 1.03 },
        { id: 38, text: "Espírito de equipe e cooperação", media: 3.34, dp: 1.08 }
      ]
    },
    {
      factor: "Estratégia e Objetivos",
      media: 3.68,
      dp: 1.019,
      questions: [
        { id: 22, text: "Sei como meu trabalho contribui", media: 4.02, dp: 0.79 },
        { id: 23, text: "Empresa compartilha metas e conquistas", media: 3.33, dp: 1.10 }
      ]
    },
    {
      factor: "Processos e Organização",
      media: 3.52,
      dp: 1.030,
      questions: [
        { id: 16, text: "Processos internos claros e definidos", media: 3.41, dp: 1.03 },
        { id: 17, text: "Ferramentas e recursos adequados", media: 3.50, dp: 1.04 },
        { id: 18, text: "Há organização e planejamento no setor", media: 3.60, dp: 1.02 }
      ]
    },
    {
      factor: "Participação e Autonomia",
      media: 3.49,
      dp: 1.049,
      questions: [
        { id: 33, text: "Liberdade para tomar decisões", media: 3.14, dp: 1.08 },
        { id: 34, text: "Minhas ideias são consideradas", media: 3.14, dp: 1.04 },
        { id: 35, text: "Incentivo a contribuir com melhorias", media: 3.40, dp: 1.01 }
      ]
    },
    {
      factor: "Educação Corporativa",
      media: 3.45,
      dp: 1.042,
      questions: [
        { id: 19, text: "Acesso a oportunidades de aprendizado", media: 3.48, dp: 1.04 },
        { id: 20, text: "Treinamentos são relevantes", media: 3.70, dp: 0.96 },
        { id: 21, text: "Empresa incentiva desenvolvimento contínuo", media: 3.27, dp: 1.08 }
      ]
    },
    {
      factor: "Sustentabilidade e Diversidade",
      media: 3.47,
      dp: 1.015,
      questions: [
        { id: 10, text: "Empresa valoriza a diversidade", media: 3.83, dp: 0.88 },
        { id: 11, text: "Sustentabilidade nas decisões da empresa", media: 3.25, dp: 0.98 },
        { id: 12, text: "Sou respeitado e valorizado", media: 3.34, dp: 1.09 }
      ]
    },
    {
      factor: "Comunicação Interna",
      media: 3.34,
      dp: 1.034,
      questions: [
        { id: 24, text: "Canais de comunicação são eficazes", media: 3.39, dp: 1.01 },
        { id: 25, text: "Recebo informações relevantes", media: 3.59, dp: 0.94 },
        { id: 26, text: "Sou ouvido quando expresso opiniões", media: 3.23, dp: 1.12 }
      ]
    },
    {
      factor: "Liderança",
      media: 3.30,
      dp: 1.151,
      questions: [
        { id: 13, text: "Líder acessível e aberto ao diálogo", media: 3.83, dp: 1.06 },
        { id: 14, text: "Líderes agem de acordo com o que dizem", media: 3.32, dp: 1.08 },
        { id: 15, text: "Recebo feedbacks construtivos e frequentes", media: 3.17, dp: 1.20 }
      ]
    },
    {
      factor: "Recompensas e Reconhecimento",
      media: 3.38,
      dp: 1.263,
      questions: [
        { id: 39, text: "Avaliação de resultados é clara", media: 3.46, dp: 1.08 },
        { id: 40, text: "Salário é justo", media: 2.24, dp: 1.17 },
        { id: 41, text: "Benefícios atendem necessidades", media: 2.52, dp: 1.20 }
      ]
    },
    {
      factor: "Bem-Estar",
      media: 3.26,
      dp: 1.124,
      questions: [
        { id: 5, text: "Ambiente favorece bem-estar físico e emocional", media: 2.97, dp: 1.07 },
        { id: 6, text: "Equilíbrio vida profissional e pessoal", media: 3.90, dp: 0.91 },
        { id: 7, text: "Empresa promove iniciativas de bem-estar", media: 2.93, dp: 1.10 }
      ]
    },
    {
      factor: "Employer Branding",
      media: 3.74,
      dp: 0.876,
      questions: [
        { id: 8, text: "Tenho orgulho de trabalhar nesta empresa", media: 3.74, dp: 0.88 }
      ]
    },
    {
      factor: "Saúde, Segurança e QVT",
      media: 3.03,
      dp: 1.120,
      questions: [
        { id: 27, text: "Empresa promove saúde dos colaboradores", media: 3.05, dp: 1.12 }
      ]
    }
  ],

  // Tópico 4: Questão 42 - O que mais gostam na empresa
  q42: {
    whatTheyLikeMost: [
      { position: "1º", item: "Equipe / colegas / relacionamento", mentions: 258, percentage: "27,2%" },
      { position: "2º", item: "Atividades do trabalho / autonomia / sentido", mentions: 78, percentage: "8,2%" },
      { position: "3º", item: "Aprendizado e oportunidades de crescimento", mentions: 78, percentage: "8,2%" },
      { position: "4º", item: "Ambiente / clima de trabalho", mentions: 67, percentage: "7,1%" },
      { position: "5º", item: "Benefícios e salário", mentions: 61, percentage: "6,4%" },
      { position: "6º", item: "Assistência ao paciente / propósito", mentions: 55, percentage: "5,8%" },
      { position: "7º", item: "Escala, horário, folgas", mentions: 50, percentage: "5,3%" },
      { position: "8º", item: "Gestão, liderança e valorização", mentions: 44, percentage: "4,6%" },
      { position: "9º", item: "Estrutura, organização e processos", mentions: 31, percentage: "3,3%" },
      { position: "10º", item: "Nada / não sei dizer", mentions: 30, percentage: "3,2%" },
      { position: "11º", item: "Hora de ir embora / pagamento como alívio", mentions: 23, percentage: "2,4%" },
      { position: "12º", item: "Localização", mentions: 15, percentage: "1,6%" },
      { position: "13º", item: "Cultura, valores e religião", mentions: 9, percentage: "0,9%" }
    ],
    whatTheyLikeLeast: [
      { position: "1º", item: "Estrutura / processos", mentions: 31, percentage: "~3,3%" },
      { position: "2º", item: "A hora de ir embora / só quando sai o pagamento", mentions: 23, percentage: "~2,4%" },
      { position: "3º", item: "Localização", mentions: 15, percentage: "~1,6%" },
      { position: "4º", item: "Cultura, valores e religião", mentions: 9, percentage: "~0,9%" }
    ],
    factorsOrder: [
      { position: 1, factor: "Relações Interpessoais", percentage: "27%" },
      { position: 2, factor: "Carreira", percentage: "8%" },
      { position: 3, factor: "Educação Corporativa", percentage: "8%" },
      { position: 4, factor: "Participação e Autonomia", percentage: "8%" },
      { position: 5, factor: "Bem-Estar", percentage: "7%" },
      { position: 6, factor: "Recompensas e Reconhecimento", percentage: "6%" },
      { position: 7, factor: "QVT (Saúde, Segurança e Qualidade de Vida no Trabalho)", percentage: "5%" },
      { position: 8, factor: "Liderança", percentage: "4-5%" },
      { position: 9, factor: "Processos e Organização", percentage: "3%" },
      { position: 10, factor: "Employer Branding", percentage: "~1%" },
      { position: 11, factor: "Estratégia e Objetivos", percentage: "~1%" },
      { position: 12, factor: "Comunicação Interna", percentage: "~1%" },
      { position: 13, factor: "Sustentabilidade e Diversidade", percentage: "<1%" }
    ]
  },

  // Tópico 5: Questão 43 - Comentários e observações
  q43: {
    whatMakesSatisfied: [
      { position: "1º", item: "Ambiente de trabalho e relações interpessoais positivas", mentions: 412, percentage: "43%" },
      { position: "2º", item: "Oportunidades de aprendizado e crescimento profissional", mentions: 342, percentage: "36%" },
      { position: "3º", item: "Propósito e orgulho institucional", mentions: 298, percentage: "31%" },
      { position: "4º", item: "Estrutura e organização da empresa", mentions: 275, percentage: "29%" },
      { position: "5º", item: "Reconhecimento e estabilidade", mentions: 228, percentage: "24%" },
      { position: "6º", item: "Gestão humanizada e presente", mentions: 190, percentage: "20%" },
      { position: "7º", item: "Benefícios e condições de trabalho", mentions: 152, percentage: "16%" },
      { position: "8º", item: "Autonomia e liberdade no trabalho", mentions: 123, percentage: "13%" }
    ],
    whatMakesDissatisfied: [
      { position: "1º", item: "Salários defasados e benefícios insatisfatórios", mentions: 456, percentage: "48%" },
      { position: "2º", item: "Falta de valorização e reconhecimento", mentions: 342, percentage: "36%" },
      { position: "3º", item: "Gestão distante e comunicação interna falha", mentions: 275, percentage: "29%" },
      { position: "4º", item: "Ausência de plano de carreira e meritocracia", mentions: 247, percentage: "26%" },
      { position: "5º", item: "Sobrecarga de trabalho e falta de pessoal", mentions: 209, percentage: "22%" },
      { position: "6º", item: "Falta de treinamentos e desenvolvimento", mentions: 171, percentage: "18%" },
      { position: "7º", item: "Pressão excessiva e estresse", mentions: 152, percentage: "16%" },
      { position: "8º", item: "Falta de diálogo e participação nas decisões", mentions: 123, percentage: "13%" }
    ]
  },

  // Interpretação das Médias (Escala 1-5)
  interpretation: {
    excellent: "4.0-5.0 (Verde) - Área de força, menos crítico",
    good: "3.0-4.0 (Amarelo) - Zona mediana, atenção necessária",
    critical: "1.0-3.0 (Vermelho) - Área crítica, requer ação imediata"
  },

  // Pontos Críticos Identificados
  criticalPoints: [
    {
      factor: "Recompensas e Reconhecimento",
      issue: "Salário é justo",
      media: 2.24,
      status: "CRÍTICO",
      description: "A menor média de todo o dashboard. Indica insatisfação significativa com remuneração."
    },
    {
      factor: "Recompensas e Reconhecimento",
      issue: "Benefícios atendem necessidades",
      media: 2.52,
      status: "CRÍTICO",
      description: "Segunda menor média. Benefícios não estão atendendo às expectativas."
    },
    {
      factor: "Bem-Estar",
      issue: "Ambiente favorece bem-estar físico e emocional",
      media: 2.97,
      status: "CRÍTICO",
      description: "Apenas abaixo de 3.0. Ambiente precisa de melhorias para bem-estar."
    },
    {
      factor: "Bem-Estar",
      issue: "Empresa promove iniciativas de bem-estar",
      media: 2.93,
      status: "CRÍTICO",
      description: "Iniciativas de bem-estar precisam ser ampliadas."
    }
  ],

  // Pontos Fortes Identificados
  strengths: [
    {
      factor: "Relações Interpessoais",
      issue: "Bom relacionamento com colegas",
      media: 4.08,
      status: "FORÇA",
      description: "A maior média do dashboard. Relacionamentos interpessoais são um diferencial positivo."
    },
    {
      factor: "Estratégia e Objetivos",
      issue: "Sei como meu trabalho contribui",
      media: 4.02,
      status: "FORÇA",
      description: "Colaboradores entendem o propósito e impacto do seu trabalho."
    },
    {
      factor: "Bem-Estar",
      issue: "Equilíbrio vida profissional e pessoal",
      media: 3.90,
      status: "FORÇA",
      description: "Bom equilíbrio entre vida pessoal e profissional."
    },
    {
      factor: "Employer Branding",
      issue: "Tenho orgulho de trabalhar nesta empresa",
      media: 3.74,
      status: "FORÇA",
      description: "Orgulho institucional é um ponto positivo."
    }
  ],

  // Setores com Maior Participação
  topSectors: [
    { name: "HIGIENIZACAO", count: 60 },
    { name: "CENTRO CIRURGICO", count: 54 },
    { name: "UTI", count: 50 },
    { name: "UTIN", count: 44 },
    { name: "MATERNIDADE", count: 44 },
    { name: "PRONTO SOCORRO", count: 42 },
    { name: "CME", count: 40 },
    { name: "ATENDIMENTO AO CLIENTE", count: 26 },
    { name: "FARMACIA", count: 25 },
    { name: "HEMODIALISE", count: 24 }
  ]
};

/**
 * Gera um prompt de sistema completo com todo o contexto do dashboard
 */
export const generateSystemPrompt = (): string => {
  return `Você é o IaBot AEBES, um assistente de IA especializado no Dashboard de Clima Organizacional da AEBES.

CONTEXTO DO DASHBOARD:

INFORMAÇÕES GERAIS:
- Ano da pesquisa: ${dashboardContext.overview.year}
- Total de respondentes: ${dashboardContext.overview.totalRespondents}
- População total: ${dashboardContext.overview.totalPopulation}
- Taxa de resposta: ${dashboardContext.overview.responseRate}%

PERFIL DEMOGRÁFICO:
- Gênero: ${dashboardContext.overview.demographics.gender.female.percentage}% feminino, ${dashboardContext.overview.demographics.gender.male.percentage}% masculino
- Idade: ${dashboardContext.overview.demographics.age.under25.percentage}% com menos de 25 anos
- Escolaridade: ${dashboardContext.overview.demographics.education.technical.percentage}% ensino técnico

FATORES DE CLIMA ORGANIZACIONAL (ordenados por média):
${dashboardContext.factors.map(f => `- ${f.factor}: Média ${f.media} (DP: ${f.dp})`).join('\n')}

PONTOS CRÍTICOS (requerem atenção imediata):
${dashboardContext.criticalPoints.map(cp => `- ${cp.issue} (${cp.factor}): Média ${cp.media} - ${cp.description}`).join('\n')}

PONTOS FORTES (áreas de destaque):
${dashboardContext.strengths.map(s => `- ${s.issue} (${s.factor}): Média ${s.media} - ${s.description}`).join('\n')}

O QUE MAIS GOSTAM NA EMPRESA (Questão 42):
${dashboardContext.q42.whatTheyLikeMost.slice(0, 5).map(item => `${item.position}: ${item.item} (${item.percentage})`).join('\n')}

O QUE MENOS GOSTAM NA EMPRESA (Questão 42):
${dashboardContext.q42.whatTheyLikeLeast.map(item => `${item.position}: ${item.item} (${item.percentage})`).join('\n')}

O QUE DEIXA SATISFEITOS (Questão 43):
${dashboardContext.q43.whatMakesSatisfied.slice(0, 3).map(item => `${item.position}: ${item.item} (${item.percentage})`).join('\n')}

O QUE DEIXA INSATISFEITOS (Questão 43):
${dashboardContext.q43.whatMakesDissatisfied.slice(0, 3).map(item => `${item.position}: ${item.item} (${item.percentage})`).join('\n')}

SETORES COM MAIOR PARTICIPAÇÃO:
${dashboardContext.topSectors.slice(0, 10).map(s => `- ${s.name}: ${s.count} colaboradores`).join('\n')}

INTERPRETAÇÃO DAS MÉDIAS:
- 4.0-5.0: Área de força (verde)
- 3.0-4.0: Zona mediana, atenção necessária (amarelo)
- 1.0-3.0: Área crítica, requer ação imediata (vermelho)

SUAS RESPONSABILIDADES:
1. Responder perguntas sobre os dados do dashboard
2. Explicar os resultados da pesquisa de clima organizacional
3. Identificar pontos críticos e fortes
4. Sugerir interpretações baseadas nos dados
5. Ajudar a navegar pelas informações do dashboard
6. Fornecer insights baseados nas médias, desvios padrão e respostas abertas

Seja prestativo, claro, objetivo e sempre baseie suas respostas nos dados fornecidos acima.`;
};

