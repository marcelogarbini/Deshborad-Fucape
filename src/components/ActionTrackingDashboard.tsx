import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  Users, 
  MessageSquare, 
  Award, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  PlayCircle, 
  TrendingUp,
  BarChart3,
  PieChart as PieChartIcon
} from "lucide-react";
import { useState } from "react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  RadialBarChart,
  RadialBar
} from "recharts";

// Tipos
type Status = "planejada" | "em-andamento" | "concluida";

interface Acao {
  id: string;
  descricao: string;
  status: Status;
  prazo: string;
  responsavel: string;
  progresso: number;
}

interface Eixo {
  id: string;
  nome: string;
  cor: "blue" | "purple" | "emerald" | "amber";
  corGradiente: string;
  icon: typeof Target;
  objetivo: string;
  meta: string;
  acoes: Acao[];
}

const getColorClasses = (cor: "blue" | "purple" | "emerald" | "amber") => {
  const classes = {
    blue: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      icon: "text-blue-400",
      border: "border-blue-500/30",
    },
    purple: {
      bg: "bg-purple-500/20",
      text: "text-purple-400",
      icon: "text-purple-400",
      border: "border-purple-500/30",
    },
    emerald: {
      bg: "bg-emerald-500/20",
      text: "text-emerald-400",
      icon: "text-emerald-400",
      border: "border-emerald-500/30",
    },
    amber: {
      bg: "bg-amber-500/20",
      text: "text-amber-400",
      icon: "text-amber-400",
      border: "border-amber-500/30",
    },
  };
  return classes[cor];
};

// Dados iniciais baseados no Plano de Ação (Tópico 7)
const eixosIniciais: Eixo[] = [
  {
    id: "lideranca",
    nome: "Liderança e Gestão Humanizada",
    cor: "blue",
    corGradiente: "from-blue-500/10 to-cyan-500/10",
    icon: Users,
    objetivo: "Fortalecer o papel da liderança como agente de engajamento e comunicação",
    meta: "Aumentar a média de 'Liderança' de 3,30 para 3,80 até o próximo ciclo",
    acoes: [
      {
        id: "l1",
        descricao: "Implantar treinamento semestral de liderança com foco em feedback, escuta ativa e gestão empática",
        status: "planejada",
        prazo: "2024-06-30",
        responsavel: "RH e Desenvolvimento",
        progresso: 0,
      },
      {
        id: "l2",
        descricao: "Criar uma trilha de formação para novos líderes (mentoria + coaching interno)",
        status: "planejada",
        prazo: "2024-08-31",
        responsavel: "RH",
        progresso: 0,
      },
      {
        id: "l3",
        descricao: "Implementar reuniões 1:1 mensais entre líderes e colaboradores",
        status: "planejada",
        prazo: "2024-05-31",
        responsavel: "Lideranças",
        progresso: 0,
      },
    ],
  },
  {
    id: "comunicacao",
    nome: "Comunicação Interna e Participação",
    cor: "purple",
    corGradiente: "from-purple-500/10 to-pink-500/10",
    icon: MessageSquare,
    objetivo: "Promover transparência, diálogo e senso de pertencimento",
    meta: "Elevar a média de 'Comunicação Interna' de 3,34 para 3,75 e reduzir o desvio padrão para abaixo de 0,8",
    acoes: [
      {
        id: "c1",
        descricao: "Criar canais digitais de comunicação bidirecional (intranet interativa, formulário de sugestões)",
        status: "planejada",
        prazo: "2024-07-31",
        responsavel: "TI e Comunicação",
        progresso: 0,
      },
      {
        id: "c2",
        descricao: "Padronizar a divulgação de metas e resultados em formato visual e acessível",
        status: "planejada",
        prazo: "2024-04-30",
        responsavel: "Comunicação",
        progresso: 0,
      },
      {
        id: "c3",
        descricao: "Promover encontros trimestrais intersetoriais para alinhamento e troca de boas práticas",
        status: "planejada",
        prazo: "2024-09-30",
        responsavel: "Gestão",
        progresso: 0,
      },
    ],
  },
  {
    id: "carreira",
    nome: "Carreira e Reconhecimento",
    cor: "emerald",
    corGradiente: "from-emerald-500/10 to-teal-500/10",
    icon: Award,
    objetivo: "Estruturar oportunidades de crescimento e valorização profissional",
    meta: "Aumentar o fator 'Carreira' para 3,80 e 'Recompensas e Reconhecimento' para 3,60 até o próximo ciclo",
    acoes: [
      {
        id: "ca1",
        descricao: "Desenvolver plano de carreira e trilhas de desenvolvimento por cargo e área",
        status: "planejada",
        prazo: "2024-08-31",
        responsavel: "RH",
        progresso: 0,
      },
      {
        id: "ca2",
        descricao: "Revisar política de reconhecimento não financeiro (ex: destaque do mês, agradecimentos públicos)",
        status: "planejada",
        prazo: "2024-06-30",
        responsavel: "RH",
        progresso: 0,
      },
      {
        id: "ca3",
        descricao: "Avaliar a competitividade salarial e dos benefícios frente ao mercado",
        status: "planejada",
        prazo: "2024-07-31",
        responsavel: "RH e Financeiro",
        progresso: 0,
      },
    ],
  },
  {
    id: "sustentabilidade",
    nome: "Sustentabilidade do Processo",
    cor: "amber",
    corGradiente: "from-amber-500/10 to-orange-500/10",
    icon: RefreshCw,
    objetivo: "Garantir que o ciclo de clima organizacional se torne contínuo e estratégico",
    meta: "Consolidar o processo como instrumento permanente de melhoria organizacional",
    acoes: [
      {
        id: "s1",
        descricao: "Instituir um Comitê de Clima e Cultura com representantes de diferentes áreas",
        status: "planejada",
        prazo: "2024-03-31",
        responsavel: "Gestão",
        progresso: 0,
      },
      {
        id: "s2",
        descricao: "Realizar 'pulse surveys' trimestrais para medir avanços",
        status: "planejada",
        prazo: "2024-06-30",
        responsavel: "RH",
        progresso: 0,
      },
      {
        id: "s3",
        descricao: "Revisar o plano de ação anualmente, mantendo continuidade e aprendizado",
        status: "planejada",
        prazo: "2024-12-31",
        responsavel: "Comitê de Clima",
        progresso: 0,
      },
    ],
  },
];

const getStatusConfig = (status: Status) => {
  switch (status) {
    case "concluida":
      return {
        label: "Concluída",
        icon: CheckCircle2,
        color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        bgColor: "bg-emerald-500/10",
        headerColor: "bg-emerald-500/20 border-emerald-500/30",
      };
    case "em-andamento":
      return {
        label: "Em Andamento",
        icon: PlayCircle,
        color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        bgColor: "bg-blue-500/10",
        headerColor: "bg-blue-500/20 border-blue-500/30",
      };
    default:
      return {
        label: "Planejada",
        icon: Clock,
        color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
        bgColor: "bg-amber-500/10",
        headerColor: "bg-amber-500/20 border-amber-500/30",
      };
  }
};

export const ActionTrackingDashboard = () => {
  const [eixos, setEixos] = useState(eixosIniciais);

  const updateAcaoStatus = (eixoId: string, acaoId: string, novoStatus: Status) => {
    setEixos((prev) =>
      prev.map((eixo) => {
        if (eixo.id === eixoId) {
          return {
            ...eixo,
            acoes: eixo.acoes.map((acao) => {
              if (acao.id === acaoId) {
                // Progresso automático baseado no status
                let novoProgresso = 0;
                if (novoStatus === "planejada") {
                  novoProgresso = 0;
                } else if (novoStatus === "em-andamento") {
                  novoProgresso = 50;
                } else if (novoStatus === "concluida") {
                  novoProgresso = 100;
                }
                return { ...acao, status: novoStatus, progresso: novoProgresso };
              }
              return acao;
            }),
          };
        }
        return eixo;
      })
    );
  };

  // Cálculos gerais
  const todasAcoes = eixos.flatMap((eixo) => eixo.acoes);
  const totalAcoes = todasAcoes.length;
  const acoesConcluidas = todasAcoes.filter((a) => a.status === "concluida").length;
  const acoesEmAndamento = todasAcoes.filter((a) => a.status === "em-andamento").length;
  const progressoGeral = totalAcoes > 0 ? (acoesConcluidas / totalAcoes) * 100 : 0;
  const progressoMedio = totalAcoes > 0 ? todasAcoes.reduce((sum, a) => sum + a.progresso, 0) / totalAcoes : 0;

  const statusColumns: Status[] = ["planejada", "em-andamento", "concluida"];

  // Dados para gráficos
  const statusData = [
    { name: "Concluídas", value: acoesConcluidas, color: "#10b981" },
    { name: "Em Andamento", value: acoesEmAndamento, color: "#3b82f6" },
    { name: "Planejadas", value: totalAcoes - acoesConcluidas - acoesEmAndamento, color: "#f59e0b" },
  ];

  const progressoPorEixo = eixos.map((eixo) => {
    // Criar nome abreviado para o gráfico
    const palavras = eixo.nome.split(" ");
    const nomeAbreviado = palavras.length > 2 
      ? palavras[0] + " " + palavras[1] 
      : eixo.nome;
    
    return {
      nome: nomeAbreviado,
      nomeCompleto: eixo.nome,
      progresso: eixo.acoes.length > 0 
        ? eixo.acoes.reduce((sum, a) => sum + a.progresso, 0) / eixo.acoes.length 
        : 0,
      total: eixo.acoes.length,
      concluidas: eixo.acoes.filter((a) => a.status === "concluida").length,
      cor: eixo.cor === "blue" ? "#3b82f6" : eixo.cor === "purple" ? "#a855f7" : eixo.cor === "emerald" ? "#10b981" : "#f59e0b",
    };
  });

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border p-3 rounded-lg shadow-lg">
          <p className="text-foreground font-semibold">{payload[0].name}</p>
          <p className="text-primary">{payload[0].value} ações</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Visão Geral - Métricas com Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico de Pizza - Distribuição por Status */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm lg:col-span-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <PieChartIcon className="w-5 h-5 text-purple-400" />
              <CardTitle className="text-lg">Distribuição por Status</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2">
                {statusData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gráfico de Barras - Progresso por Eixo */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <CardTitle className="text-lg">Progresso por Eixo</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={progressoPorEixo} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                <YAxis 
                  type="category" 
                  dataKey="nome" 
                  stroke="hsl(var(--muted-foreground))" 
                  width={120}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-card border border-border p-3 rounded-lg shadow-lg">
                          <p className="text-foreground font-semibold">{data.nomeCompleto}</p>
                          <p className="text-blue-400">Progresso: {data.progresso.toFixed(0)}%</p>
                          <p className="text-muted-foreground text-xs">
                            {data.concluidas}/{data.total} concluídas
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  dataKey="progresso" 
                  radius={[0, 8, 8, 0]}
                  fill={(entry: any) => entry.cor}
                >
                  {progressoPorEixo.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-border/50 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border-blue-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-blue-500/20">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-400">{progressoGeral.toFixed(0)}%</p>
                <p className="text-xs text-muted-foreground">Progresso Geral</p>
              </div>
            </div>
            <Progress value={progressoGeral} className="h-3" />
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <span>{acoesConcluidas} de {totalAcoes} concluídas</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border-emerald-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-emerald-500/20">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-emerald-400">
                  {acoesConcluidas}
                </p>
                <p className="text-xs text-muted-foreground">Concluídas</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Total de ações</span>
                <span className="font-semibold text-foreground">{totalAcoes}</span>
              </div>
              <Progress 
                value={((acoesConcluidas / totalAcoes) * 100)} 
                className="h-2"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border-blue-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-blue-500/20">
                <PlayCircle className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-400">{acoesEmAndamento}</p>
                <p className="text-xs text-muted-foreground">Em Andamento</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Ações ativas</span>
                <span className="font-semibold text-foreground">
                  {((acoesEmAndamento / totalAcoes) * 100).toFixed(0)}%
                </span>
              </div>
              <Progress 
                value={((acoesEmAndamento / totalAcoes) * 100)} 
                className="h-2"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-purple-500/20">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-purple-400">{progressoMedio.toFixed(0)}%</p>
                <p className="text-xs text-muted-foreground">Progresso Médio</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Média geral</span>
                <span className="font-semibold text-foreground">de todas ações</span>
              </div>
              <Progress value={progressoMedio} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kanban Board para cada Eixo */}
      <div className="space-y-8">
        {eixos.map((eixo) => {
          const Icon = eixo.icon;
          const eixoColor = getColorClasses(eixo.cor);
          const progressoEixo = eixo.acoes.length > 0 
            ? eixo.acoes.reduce((sum, a) => sum + a.progresso, 0) / eixo.acoes.length 
            : 0;
          const acoesConcluidasEixo = eixo.acoes.filter((a) => a.status === "concluida").length;

          // Agrupar ações por status
          const acoesPorStatus = {
            planejada: eixo.acoes.filter((a) => a.status === "planejada"),
            "em-andamento": eixo.acoes.filter((a) => a.status === "em-andamento"),
            concluida: eixo.acoes.filter((a) => a.status === "concluida"),
          };

          return (
            <Card key={eixo.id} className={`border-border/50 bg-card/50 backdrop-blur-sm ${eixo.corGradiente}`}>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`p-3 rounded-lg ${eixoColor.bg}`}>
                      <Icon className={`w-6 h-6 ${eixoColor.icon}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{eixo.nome}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-2">{eixo.objetivo}</p>
                      <span className="text-xs text-muted-foreground">
                        Meta: {eixo.meta}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${eixoColor.text}`}>{progressoEixo.toFixed(0)}%</p>
                    <p className="text-xs text-muted-foreground">progresso</p>
                  </div>
                </div>
                <Progress value={progressoEixo} className="h-2" />
              </CardHeader>
              <CardContent>
                {/* Kanban Board do Eixo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {statusColumns.map((status) => {
                    const statusConfig = getStatusConfig(status);
                    const StatusIcon = statusConfig.icon;
                    const acoesNaColuna = acoesPorStatus[status];

                    return (
                      <div key={status} className="flex flex-col h-full">
                        {/* Header da Coluna */}
                        <div className={`p-4 rounded-t-lg border ${statusConfig.headerColor} mb-3`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <StatusIcon className="w-5 h-5" />
                              <h3 className="font-semibold text-foreground">{statusConfig.label}</h3>
                            </div>
                            <Badge variant="outline" className="bg-background/50">
                              {acoesNaColuna.length}
                            </Badge>
                          </div>
                        </div>

                        {/* Cards das Ações */}
                        <div className="flex-1 space-y-3 min-h-[300px] max-h-[500px] overflow-y-auto pr-2">
                          {acoesNaColuna.map((acao) => {
                            return (
                              <Card
                                key={acao.id}
                                className="border-border/30 bg-background/50 hover:border-border/50 transition-all cursor-pointer"
                                onClick={() => {
                                  // Ciclar entre os status ao clicar
                                  const statusOrder: Status[] = ["planejada", "em-andamento", "concluida"];
                                  const currentIndex = statusOrder.indexOf(acao.status);
                                  const nextIndex = (currentIndex + 1) % statusOrder.length;
                                  updateAcaoStatus(eixo.id, acao.id, statusOrder[nextIndex]);
                                }}
                              >
                                <CardContent className="p-4">
                                  {/* Descrição */}
                                  <p className="text-sm text-foreground mb-3 line-clamp-3">{acao.descricao}</p>

                                  {/* Informações */}
                                  <div className="space-y-2 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                      <Users className="w-3 h-3" />
                                      <span>{acao.responsavel}</span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}

                          {acoesNaColuna.length === 0 && (
                            <div className="flex items-center justify-center h-32 text-muted-foreground text-sm border-2 border-dashed border-border/30 rounded-lg">
                              Nenhuma ação
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
