import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, Users, Target, Award, Building, Heart, Compass, MapPin, ThumbsUp, ThumbsDown, AlertTriangle, DollarSign, XCircle, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Dados para (i) O que mais gostam
const whatTheyLikeMost = [
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
  { position: "13º", item: "Cultura, valores e religião", mentions: 9, percentage: "0,9%" },
];

// Dados para (ii) O que menos gostam
const whatTheyLikeLeast = [
  { position: "1º", item: "Estrutura / processos", mentions: 31, percentage: "~3,3%" },
  { position: "2º", item: "A hora de ir embora / só quando sai o pagamento", mentions: 23, percentage: "~2,4%" },
  { position: "3º", item: "Localização", mentions: 15, percentage: "~1,6%" },
  { position: "4º", item: "Cultura, valores e religião", mentions: 9, percentage: "~0,9%" },
];

// Dados para (iii) Ordem dos fatores do que mais gostam na empresa
const factorsWhatTheyLike = [
  {
    icon: Users,
    title: "Relações Interpessoais",
    percentage: "27%",
    sentiment: "Pertencimento e Coesão",
    type: "Social",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    description: "Os colaboradores valorizam fortemente o espírito de equipe, o companheirismo, a união e a leveza dos relacionamentos no ambiente de trabalho.",
    keywords: "equipe, colegas, amizade, união, colaboração"
  },
  {
    icon: TrendingUp,
    title: "Carreira",
    percentage: "8%",
    sentiment: "Desenvolvimento e Expectativa",
    type: "Pessoal",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Oportunidades de crescimento profissional e desenvolvimento de carreira são fatores importantes de satisfação.",
    keywords: "crescimento, carreira, evolução profissional"
  },
  {
    icon: Brain,
    title: "Educação Corporativa",
    percentage: "8%",
    sentiment: "Aprendizado Contínuo",
    type: "Educacional",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    description: "Aprendizado e oportunidades de crescimento através de educação corporativa e treinamentos.",
    keywords: "aprendizado, educação, treinamento, desenvolvimento"
  },
  {
    icon: Compass,
    title: "Participação e Autonomia",
    percentage: "8%",
    sentiment: "Realização e Independência",
    type: "Individual",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    description: "A liberdade para exercer funções, tomar decisões e participar ativamente do trabalho.",
    keywords: "autonomia, participação, liberdade, flexibilidade"
  },
  {
    icon: Heart,
    title: "Bem-Estar",
    percentage: "7%",
    sentiment: "Bem-estar e Conforto",
    type: "Emocional",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    description: "Ambiente físico e emocional que promove bem-estar, clima organizacional positivo e qualidade de vida no trabalho.",
    keywords: "bem-estar, ambiente, clima, qualidade de vida"
  },
  {
    icon: Award,
    title: "Recompensas e Reconhecimento",
    percentage: "6%",
    sentiment: "Orgulho e Justiça",
    type: "Emocional",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    description: "Reconhecimento do trabalho realizado, valorização e recompensas adequadas.",
    keywords: "reconhecimento, valorização, recompensas"
  },
  {
    icon: Building,
    title: "QVT (Saúde, Segurança e Qualidade de Vida no Trabalho)",
    percentage: "5%",
    sentiment: "Segurança e Cuidado",
    type: "Organizacional",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    description: "Programas e iniciativas voltados para saúde, segurança e qualidade de vida no trabalho.",
    keywords: "saúde, segurança, qualidade de vida, QVT"
  },
  {
    icon: Target,
    title: "Liderança",
    percentage: "4-5%",
    sentiment: "Confiança e Humanização",
    type: "Organizacional",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "Liderança presente, humanizada e que inspira confiança nos colaboradores.",
    keywords: "líder, coordenação, gestão, liderança"
  },
  {
    icon: Building,
    title: "Processos e Organização",
    percentage: "3%",
    sentiment: "Eficiência e Estrutura",
    type: "Organizacional",
    color: "from-gray-500 to-gray-600",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/30",
    description: "Estrutura organizacional, processos bem definidos e organização eficiente.",
    keywords: "processos, organização, estrutura, eficiência"
  },
  {
    icon: Award,
    title: "Employer Branding",
    percentage: "~1%",
    sentiment: "Orgulho Institucional",
    type: "Organizacional",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    description: "Marca empregadora, reputação e imagem da organização.",
    keywords: "marca, reputação, employer branding"
  },
  {
    icon: Target,
    title: "Estratégia e Objetivos",
    percentage: "~1%",
    sentiment: "Direcionamento",
    type: "Organizacional",
    color: "from-slate-500 to-slate-600",
    bgColor: "bg-slate-500/10",
    borderColor: "border-slate-500/30",
    description: "Estratégia organizacional clara e objetivos bem definidos.",
    keywords: "estratégia, objetivos, planejamento"
  },
  {
    icon: MessageSquare,
    title: "Comunicação Interna",
    percentage: "~1%",
    sentiment: "Transparência",
    type: "Comunicacional",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    description: "Comunicação interna eficiente e transparente.",
    keywords: "comunicação, transparência, diálogo"
  },
  {
    icon: Heart,
    title: "Sustentabilidade e Diversidade",
    percentage: "<1%",
    sentiment: "Responsabilidade Social",
    type: "Ético",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    description: "Iniciativas de sustentabilidade e promoção da diversidade.",
    keywords: "sustentabilidade, diversidade, responsabilidade social"
  }
];

export const Q42Analysis = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Brain className="w-6 h-6" />
            Análise da Questão 42
          </CardTitle>
          <p className="text-muted-foreground">
            "O QUE MAIS GOSTO NA EMPRESA É:"
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Análise completa das respostas abertas da questão 42, organizada em três entregáveis principais:
            identificação do que mais gostam, do que menos gostam, e a ordem dos fatores do que mais gostam na empresa.
          </p>
        </CardContent>
      </Card>

      {/* (i) O que mais gostam - Listagem por ordem de importância */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <ThumbsUp className="w-5 h-5 text-green-500" />
            (i) O que mais gostam na empresa - Por ordem de importância
          </CardTitle>
          <p className="text-sm text-muted-foreground">Listagem identificada e ranqueada por frequência de menções</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {whatTheyLikeMost.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold">
                  {item.position}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">{item.item}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-muted-foreground">{item.mentions} menções</span>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-700">
                      {item.percentage}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* (ii) O que menos gostam - Listagem por ordem de importância */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <ThumbsDown className="w-5 h-5 text-red-500" />
            (ii) O que menos foi citado - Por ordem de menções
          </CardTitle>
          <p className="text-sm text-muted-foreground">Listagem identificada e ranqueada por frequência de menções</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {whatTheyLikeLeast.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/20 hover:bg-red-500/10 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold">
                  {item.position}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">{item.item}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-muted-foreground">{item.mentions} menções</span>
                    <Badge variant="destructive" className="bg-red-500/20 text-red-700">
                      {item.percentage}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* (iii) Ordem dos fatores do que mais gostam na empresa */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">(iii) Ordem dos fatores do que mais gostam na empresa</CardTitle>
          <p className="text-sm text-muted-foreground">Fatores organizados por ordem de importância baseados nas respostas dos colaboradores</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {factorsWhatTheyLike.map((factor, index) => (
            <Card key={index} className={`border ${factor.borderColor} ${factor.bgColor} transition-all duration-300 hover:scale-[1.01]`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${factor.color} shrink-0`}>
                    <factor.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="font-semibold text-lg">{factor.title}</h3>
                      <Badge variant="secondary" className="text-base font-bold">
                        {factor.percentage}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {factor.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        {factor.sentiment}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {factor.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Palavras-chave:</span> {factor.keywords}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
