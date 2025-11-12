import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, ThumbsUp, ThumbsDown, TrendingUp, AlertTriangle, Users, Award, Building, Heart, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Dados para (i) O que deixa mais satisfeitos
const whatMakesSatisfied = [
  { position: "1º", item: "Ambiente de trabalho e relações interpessoais positivas", mentions: 412, percentage: "43%" },
  { position: "2º", item: "Oportunidades de aprendizado e crescimento profissional", mentions: 342, percentage: "36%" },
  { position: "3º", item: "Propósito e orgulho institucional", mentions: 298, percentage: "31%" },
  { position: "4º", item: "Estrutura e organização da empresa", mentions: 275, percentage: "29%" },
  { position: "5º", item: "Reconhecimento e estabilidade", mentions: 228, percentage: "24%" },
  { position: "6º", item: "Gestão humanizada e presente", mentions: 190, percentage: "20%" },
  { position: "7º", item: "Benefícios e condições de trabalho", mentions: 152, percentage: "16%" },
  { position: "8º", item: "Autonomia e liberdade no trabalho", mentions: 123, percentage: "13%" },
];

// Dados para (ii) O que deixa mais insatisfeitos
const whatMakesDissatisfied = [
  { position: "1º", item: "Salários defasados e benefícios insatisfatórios", mentions: 456, percentage: "48%" },
  { position: "2º", item: "Falta de valorização e reconhecimento", mentions: 342, percentage: "36%" },
  { position: "3º", item: "Gestão distante e comunicação interna falha", mentions: 275, percentage: "29%" },
  { position: "4º", item: "Ausência de plano de carreira e meritocracia", mentions: 247, percentage: "26%" },
  { position: "5º", item: "Sobrecarga de trabalho e falta de pessoal", mentions: 209, percentage: "22%" },
  { position: "6º", item: "Falta de treinamentos e desenvolvimento", mentions: 171, percentage: "18%" },
  { position: "7º", item: "Pressão excessiva e estresse", mentions: 152, percentage: "16%" },
  { position: "8º", item: "Falta de diálogo e participação nas decisões", mentions: 123, percentage: "13%" },
];

// Dados para (iii) Fatores de satisfação
const satisfactionFactors = [
  {
    icon: Users,
    title: "Ambiente de trabalho e relações interpessoais positivas",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    description: "A convivência harmoniosa e o respeito mútuo são vistos como pilares do bem-estar.",
    keywords: "ambiente leve, equipe unida, acolhimento, respeito, amizade"
  },
  {
    icon: TrendingUp,
    title: "Oportunidades de aprendizado e crescimento profissional",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "A empresa é percebida como uma 'escola prática', onde se aprende constantemente.",
    keywords: "aprendizado, experiência, crescimento, ensino"
  },
  {
    icon: Heart,
    title: "Propósito e orgulho institucional",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Trabalhar com o cuidado à vida e o impacto positivo na sociedade gera motivação genuína.",
    keywords: "ajudar pessoas, cuidar, hospital referência, orgulho"
  },
  {
    icon: Building,
    title: "Estrutura e organização",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    description: "A estrutura física e o suporte organizacional são vistos como diferenciais frente a outras instituições.",
    keywords: "estrutura boa, organização, materiais disponíveis"
  },
  {
    icon: Award,
    title: "Reconhecimento e estabilidade",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    description: "A pontualidade e segurança do emprego são elogiadas, mesmo com ressalvas quanto ao valor dos salários.",
    keywords: "pagamento em dia, estabilidade, oportunidade de estar empregado"
  }
];

// Dados para (iv) Fatores de insatisfação
const dissatisfactionFactors = [
  {
    icon: AlertTriangle,
    title: "Salários defasados e benefícios insatisfatórios",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    description: "É o ponto de maior tensão. Há insatisfação generalizada com a remuneração, PHERTO e plano de saúde.",
    keywords: "salário baixo, benefícios ruins, plano caro, PHERTO injusto"
  },
  {
    icon: ThumbsDown,
    title: "Falta de valorização e reconhecimento",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    description: "Sensação de que o esforço diário não é reconhecido ou recompensado adequadamente.",
    keywords: "falta reconhecimento, não valorizam, sem retorno"
  },
  {
    icon: Target,
    title: "Gestão distante e comunicação interna falha",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "Percepção de líderes pouco acessíveis e decisões tomadas sem diálogo com as equipes.",
    keywords: "falta diálogo, chefias não ouvem, comunicação ruim"
  },
  {
    icon: TrendingUp,
    title: "Ausência de plano de carreira e meritocracia",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Desejo por critérios claros de promoção e crescimento dentro da instituição.",
    keywords: "sem plano de cargos, não há meritocracia, sem oportunidade de subir"
  },
  {
    icon: Users,
    title: "Sobrecarga de trabalho e falta de pessoal",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    description: "A demanda é considerada elevada e causa desgaste físico e emocional.",
    keywords: "muita pressão, cansaço, falta de funcionários"
  }
];

export const Q43Analysis = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <MessageSquare className="w-6 h-6" />
            Análise da Questão 43
          </CardTitle>
          <p className="text-muted-foreground">
            "GOSTARIA DE DEIXAR ALGUM COMENTÁRIO OU OBSERVAÇÃO?"
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Análise completa das respostas abertas da questão 43, organizada em quatro entregáveis principais:
            identificação do que deixa mais satisfeitos, do que deixa mais insatisfeitos, e os fatores derivados de cada categoria.
          </p>
        </CardContent>
      </Card>

      {/* (i) O que deixa mais satisfeitos - Listagem por ordem de importância */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <ThumbsUp className="w-5 h-5 text-green-500" />
            (i) O que deixa os funcionários mais satisfeitos - Por ordem de importância
          </CardTitle>
          <p className="text-sm text-muted-foreground">Listagem identificada e ranqueada por frequência de menções</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {whatMakesSatisfied.map((item, index) => (
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

      {/* (ii) O que deixa mais insatisfeitos - Listagem por ordem de importância */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <ThumbsDown className="w-5 h-5 text-red-500" />
            (ii) O que deixa os funcionários mais insatisfeitos - Por ordem de importância
          </CardTitle>
          <p className="text-sm text-muted-foreground">Listagem identificada e ranqueada por frequência de menções</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {whatMakesDissatisfied.map((item, index) => (
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

      {/* (iii) Fatores de satisfação */}
      <Card className="border-border/50 bg-green-500/5 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">(iii) Fatores de satisfação</CardTitle>
          <p className="text-sm text-muted-foreground">Fatores gerados a partir da análise semântica das respostas sobre satisfação</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {satisfactionFactors.map((factor, index) => (
            <Card key={index} className={`border ${factor.borderColor} ${factor.bgColor} transition-all duration-300 hover:scale-[1.01]`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${factor.color} shrink-0`}>
                    <factor.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-base">{factor.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {factor.description}
                    </p>
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

      {/* (iv) Fatores de insatisfação */}
      <Card className="border-border/50 bg-red-500/5 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">(iv) Fatores de insatisfação</CardTitle>
          <p className="text-sm text-muted-foreground">Fatores gerados a partir da análise semântica das respostas sobre insatisfação</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {dissatisfactionFactors.map((factor, index) => (
            <Card key={index} className={`border ${factor.borderColor} ${factor.bgColor} transition-all duration-300 hover:scale-[1.01]`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${factor.color} shrink-0`}>
                    <factor.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-base">{factor.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {factor.description}
                    </p>
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

      {/* Síntese Final */}
      <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">🔎 Síntese Final</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            A análise da Questão 43 reforça que o hospital é reconhecido como um <span className="text-foreground font-medium">ambiente humano e formador</span>, 
            mas precisa avançar urgentemente em <span className="text-foreground font-medium">valorização financeira e reconhecimento profissional</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Há um senso genuíno de pertencimento e orgulho entre os colaboradores — um ativo cultural forte —, 
            mas que pode ser comprometido se as demandas materiais e simbólicas de valorização não forem tratadas com clareza e empatia.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            O futuro da satisfação está menos em "corrigir problemas" e mais em <span className="text-foreground font-medium">"fortalecer vínculos"</span> — 
            transformando a comunicação e o reconhecimento em pilares estratégicos de engajamento.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
