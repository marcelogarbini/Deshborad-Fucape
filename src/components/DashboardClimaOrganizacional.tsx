import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, BarChart3 } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Estrutura de dados: Fatores com suas perguntas
interface Pergunta {
  id: number;
  text: string;
  media: number;
  dp: number;
}

interface Fator {
  fator: string;
  media: number;
  dp: number;
  perguntas: Pergunta[];
}

const dadosFatores: Fator[] = [
  {
    fator: "Bem-Estar",
    media: 3.26,
    dp: 0.82,
    perguntas: [
      { id: 5, text: "Ambiente favorece bem-estar físico e emocional", media: 2.97, dp: 1.07 },
      { id: 6, text: "Equilíbrio vida profissional e pessoal", media: 3.90, dp: 0.91 },
      { id: 7, text: "Empresa promove iniciativas de bem-estar", media: 2.93, dp: 1.10 },
    ],
  },
  {
    fator: "Employer Branding",
    media: 3.74,
    dp: 0.88,
    perguntas: [
      { id: 8, text: "Tenho orgulho de trabalhar nesta empresa", media: 3.74, dp: 0.88 },
    ],
  },
  {
    fator: "Sustentabilidade e Diversidade",
    media: 3.47,
    dp: 0.87,
    perguntas: [
      { id: 10, text: "Empresa valoriza a diversidade", media: 3.83, dp: 0.88 },
      { id: 11, text: "Sustentabilidade nas decisões da empresa", media: 3.25, dp: 0.98 },
      { id: 12, text: "Sou respeitado e valorizado", media: 3.34, dp: 1.09 },
    ],
  },
  {
    fator: "Liderança",
    media: 3.30,
    dp: 0.93,
    perguntas: [
      { id: 13, text: "Líder acessível e aberto ao diálogo", media: 3.83, dp: 1.06 },
      { id: 14, text: "Líderes agem de acordo com o que dizem", media: 3.32, dp: 1.08 },
      { id: 15, text: "Recebo feedbacks construtivos e frequentes", media: 3.17, dp: 1.20 },
    ],
  },
  {
    fator: "Processos e Organização",
    media: 3.52,
    dp: 0.83,
    perguntas: [
      { id: 16, text: "Processos internos claros e definidos", media: 3.41, dp: 1.03 },
      { id: 17, text: "Ferramentas e recursos adequados", media: 3.50, dp: 1.04 },
      { id: 18, text: "Há organização e planejamento no setor", media: 3.60, dp: 1.02 },
    ],
  },
  {
    fator: "Educação Corporativa",
    media: 3.45,
    dp: 0.85,
    perguntas: [
      { id: 19, text: "Acesso a oportunidades de aprendizado", media: 3.48, dp: 1.04 },
      { id: 20, text: "Treinamentos são relevantes", media: 3.70, dp: 0.96 },
      { id: 21, text: "Empresa incentiva desenvolvimento contínuo", media: 3.27, dp: 1.08 },
    ],
  },
  {
    fator: "Estratégia e Objetivos",
    media: 3.68,
    dp: 0.81,
    perguntas: [
      { id: 22, text: "Sei como meu trabalho contribui", media: 4.02, dp: 0.79 },
      { id: 23, text: "Empresa compartilha metas e conquistas", media: 3.33, dp: 1.10 },
    ],
  },
  {
    fator: "Comunicação Interna",
    media: 3.34,
    dp: 0.89,
    perguntas: [
      { id: 24, text: "Canais de comunicação são eficazes", media: 3.39, dp: 1.01 },
      { id: 25, text: "Recebo informações relevantes", media: 3.59, dp: 0.94 },
      { id: 26, text: "Sou ouvido quando expresso opiniões", media: 3.23, dp: 1.12 },
    ],
  },
  {
    fator: "Saúde, Segurança e QVT",
    media: 3.56,
    dp: 0.90,
    perguntas: [
      { id: 27, text: "Empresa promove saúde dos colaboradores", media: 3.05, dp: 1.13 },
      { id: 28, text: "Condições de trabalho são seguras", media: 3.46, dp: 1.02 },
      { id: 29, text: "Qualidade de vida é preocupação real", media: 3.09, dp: 1.08 },
    ],
  },
  {
    fator: "Carreira",
    media: 3.41,
    dp: 0.92,
    perguntas: [
      { id: 30, text: "Clareza sobre oportunidades de crescimento", media: 3.04, dp: 1.17 },
      { id: 31, text: "Sou valorizado na função atual", media: 3.09, dp: 1.15 },
      { id: 32, text: "Empresa valoriza desenvolvimento interno", media: 3.03, dp: 1.12 },
    ],
  },
  {
    fator: "Participação e Autonomia",
    media: 3.49,
    dp: 0.84,
    perguntas: [
      { id: 33, text: "Liberdade para tomar decisões", media: 3.14, dp: 1.08 },
      { id: 34, text: "Minhas ideias são consideradas", media: 3.14, dp: 1.04 },
      { id: 35, text: "Incentivo a contribuir com melhorias", media: 3.40, dp: 1.01 },
    ],
  },
  {
    fator: "Relações Interpessoais",
    media: 3.60,
    dp: 0.80,
    perguntas: [
      { id: 36, text: "Bom relacionamento com colegas", media: 4.08, dp: 0.80 },
      { id: 37, text: "Ambiente colaborativo e respeitoso", media: 3.58, dp: 1.03 },
      { id: 38, text: "Espírito de equipe e cooperação", media: 3.34, dp: 1.08 },
    ],
  },
  {
    fator: "Recompensas e Reconhecimento",
    media: 3.38,
    dp: 0.86,
    perguntas: [
      { id: 39, text: "Avaliação de resultados é clara", media: 3.46, dp: 1.08 },
      { id: 40, text: "Salário é justo", media: 2.24, dp: 1.17 },
      { id: 41, text: "Benefícios atendem necessidades", media: 2.52, dp: 1.20 },
    ],
  },
];

// Função para determinar a cor baseada na média
// Verde: médias altas (4.0-5.0) - menos crítico
// Amarelo: médias medianas (3.0-4.0) - zona mediana
// Vermelho: médias baixas (1.0-3.0) - mais crítico
const getColorForMean = (mean: number) => {
  if (mean >= 4.0) return "from-green-500 to-emerald-500";
  if (mean >= 3.0) return "from-yellow-500 to-amber-500";
  return "from-red-500 to-rose-600";
};

// Função para determinar a cor do texto da média
const getTextColorForMean = (mean: number) => {
  if (mean >= 4.0) return "text-green-400";
  if (mean >= 3.0) return "text-yellow-400";
  return "text-red-400";
};

export const DashboardClimaOrganizacional = () => {
  const [expandedFatores, setExpandedFatores] = useState<Set<string>>(new Set());

  const toggleFator = (fator: string) => {
    const newExpanded = new Set(expandedFatores);
    if (newExpanded.has(fator)) {
      newExpanded.delete(fator);
    } else {
      newExpanded.add(fator);
    }
    setExpandedFatores(newExpanded);
  };

  // Preparar dados para o gráfico de barras (manter ordem original)
  const chartData = dadosFatores.map((item) => ({
    name: item.fator,
    media: item.media,
    dp: item.dp,
  }));

  const getBarTextColor = (media: number) => {
    if (media >= 4.0) return "text-green-400";
    if (media >= 3.0) return "text-yellow-400";
    return "text-red-400";
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const textColor = getBarTextColor(data.media);
      return (
        <div className="bg-card/95 backdrop-blur-sm border border-border/50 p-4 rounded-xl shadow-xl">
          <p className="text-foreground font-bold text-base mb-2">{data.name}</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground text-sm">Média:</span>
              <span className={`font-bold text-lg ${textColor}`}>{data.media.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground text-sm">Desvio Padrão:</span>
              <span className="font-semibold text-foreground">{data.dp.toFixed(2)}</span>
            </div>
            <div className="pt-2 mt-2 border-t border-border/50">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  data.media >= 4.0 ? 'bg-green-500' :
                  data.media >= 3.0 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></div>
                <span className="text-xs text-muted-foreground">
                  {data.media >= 4.0 ? 'Alto' : data.media >= 3.0 ? 'Médio' : 'Baixo'}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const getBarColor = (index: number) => {
    // Cores alternadas para melhor visualização
    const colors = [
      "url(#gradientBlue)",
      "url(#gradientPurple)",
      "url(#gradientCyan)",
      "url(#gradientIndigo)",
      "url(#gradientPink)",
      "url(#gradientTeal)",
      "url(#gradientOrange)",
      "url(#gradientViolet)",
      "url(#gradientEmerald)",
      "url(#gradientRose)",
      "url(#gradientSky)",
      "url(#gradientAmber)",
      "url(#gradientLime)",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-6">
      {/* Gráfico de Barras - Média por Fator */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            <CardTitle className="text-xl">Média por Fator</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Visão geral das médias de cada fator (Escala de 1 a 5)
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={450}>
            <BarChart data={chartData} layout="vertical" margin={{ top: 20, right: 40, left: 160, bottom: 20 }}>
              <defs>
                <linearGradient id="gradientBlue" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientPurple" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity={1} />
                  <stop offset="100%" stopColor="#9333ea" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientCyan" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity={1} />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientIndigo" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientPink" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity={1} />
                  <stop offset="100%" stopColor="#db2777" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientTeal" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientOrange" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f97316" stopOpacity={1} />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientViolet" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientEmerald" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={1} />
                  <stop offset="100%" stopColor="#059669" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientRose" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f43f5e" stopOpacity={1} />
                  <stop offset="100%" stopColor="#e11d48" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientSky" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity={1} />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientAmber" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity={1} />
                  <stop offset="100%" stopColor="#d97706" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="gradientLime" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#84cc16" stopOpacity={1} />
                  <stop offset="100%" stopColor="#65a30d" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                type="number" 
                domain={[0, 5]}
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                tickLine={{ stroke: "hsl(var(--border))" }}
                axisLine={{ stroke: "hsl(var(--border))" }}
                label={{ 
                  value: 'Média', 
                  position: 'insideBottom', 
                  offset: -10, 
                  style: { 
                    textAnchor: 'middle',
                    fill: "hsl(var(--foreground))",
                    fontSize: 13,
                    fontWeight: 500
                  } 
                }}
              />
              <YAxis 
                type="category" 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                width={155}
                tick={{ fontSize: 12, fill: "hsl(var(--foreground))", fontWeight: 500 }}
                tickLine={{ stroke: "hsl(var(--border))" }}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              />
              <Bar 
                dataKey="media" 
                radius={[0, 12, 12, 0]}
                animationDuration={1000}
                animationBegin={0}
              >
                {chartData.map((entry, index) => (
                  <Bar.Cell key={`cell-${index}`} fill={getBarColor(index)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
        </CardContent>
      </Card>

      {/* Seção 1: Resultados por Fator */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Resultados por Fator
            </h2>
            <p className="text-sm text-muted-foreground">
              Média e Desvio Padrão (σ) - Escala de 1 a 5
            </p>
          </div>

          <div className="space-y-4">
            {dadosFatores.map((item) => {
              const percentage = (item.media / 5) * 100;
              const gradientClass = getColorForMean(item.media);
              const textColor = getTextColorForMean(item.media);
              const isExpanded = expandedFatores.has(item.fator);

              return (
                <div
                  key={item.fator}
                  className="rounded-xl bg-background/30 hover:bg-background/50 transition-all duration-300 border border-border/30 hover:border-border/50 overflow-hidden"
                >
                  {/* Cabeçalho do Fator */}
                  <div
                    className="p-5 cursor-pointer"
                    onClick={() => toggleFator(item.fator)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <button className="p-1 rounded hover:bg-background/50 transition-colors">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </button>
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-foreground mb-1">
                            {item.fator}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <span className="font-mono">σ:</span>
                              <span className="font-semibold">{item.dp.toFixed(2)}</span>
                            </span>
                            <span className="text-muted-foreground/50">•</span>
                            <span>{item.perguntas.length} pergunta{item.perguntas.length > 1 ? "s" : ""}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className={`text-2xl font-bold ${textColor}`}>
                            {item.media.toFixed(2)}
                          </p>
                          <p className="text-xs text-muted-foreground">média</p>
                        </div>
                      </div>
                    </div>

                    {/* Barra de progresso do fator */}
                    <div className="relative mt-3">
                      <div className="h-3 rounded-full bg-muted/30 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${gradientClass} transition-all duration-500 ease-out`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      {/* Marcadores na barra */}
                      <div className="absolute inset-0 flex justify-between items-center px-1 pointer-events-none">
                        {[1, 2, 3, 4, 5].map((mark) => (
                          <div
                            key={mark}
                            className="w-0.5 h-3 bg-border/20"
                            style={{ marginLeft: mark === 1 ? "0%" : `${(mark - 1) * 20 - 0.5}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Perguntas do Fator (expandível) */}
                  {isExpanded && (
                    <div className="border-t border-border/30 bg-background/20">
                      <div className="p-4 space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground mb-3 px-2">
                          Perguntas deste fator:
                        </h4>
                        {item.perguntas.map((pergunta) => {
                          const perguntaPercentage = (pergunta.media / 5) * 100;
                          const perguntaGradientClass = getColorForMean(pergunta.media);
                          const perguntaTextColor = getTextColorForMean(pergunta.media);

                          return (
                            <div
                              key={pergunta.id}
                              className="p-4 rounded-lg bg-background/40 border border-border/20 hover:border-border/40 transition-all"
                            >
                              <div className="flex items-center justify-between gap-4 mb-2">
                                <div className="flex-1">
                                  <p className="text-sm text-foreground/90 mb-1">
                                    {pergunta.text}
                                  </p>
                                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <span className="font-mono">σ:</span>
                                      <span className="font-semibold">{pergunta.dp.toFixed(2)}</span>
                                    </span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className={`text-lg font-bold ${perguntaTextColor}`}>
                                    {pergunta.media.toFixed(2)}
                                  </p>
                                  <p className="text-xs text-muted-foreground">média</p>
                                </div>
                              </div>

                              {/* Barra de progresso da pergunta */}
                              <div className="relative mt-2">
                                <div className="h-2 rounded-full bg-muted/20 overflow-hidden">
                                  <div
                                    className={`h-full rounded-full bg-gradient-to-r ${perguntaGradientClass} transition-all duration-500 ease-out`}
                                    style={{ width: `${perguntaPercentage}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
