import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, Users, Target, Award, Building, Heart, Compass, MapPin, ThumbsUp, ThumbsDown, AlertTriangle, DollarSign, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Dados para (i) O que mais gostam
const whatTheyLikeMost = [
  { position: "1º", item: "Relacionamentos e equipe unida", mentions: 361, percentage: "38%" },
  { position: "2º", item: "Gestão humanizada e liderança presente", mentions: 266, percentage: "28%" },
  { position: "3º", item: "Oportunidades de aprendizado e crescimento", mentions: 247, percentage: "26%" },
  { position: "4º", item: "Ambiente acolhedor e clima organizacional", mentions: 237, percentage: "25%" },
  { position: "5º", item: "Autonomia e liberdade para trabalhar", mentions: 228, percentage: "24%" },
  { position: "6º", item: "Estrutura e benefícios da empresa", mentions: 209, percentage: "22%" },
  { position: "7º", item: "Reconhecimento e valorização do trabalho", mentions: 171, percentage: "18%" },
  { position: "8º", item: "Propósito e missão de cuidar de vidas", mentions: 161, percentage: "17%" },
  { position: "9º", item: "Localização próxima e comodidade", mentions: 85, percentage: "9%" },
];

// Dados para (ii) O que menos gostam
const whatTheyLikeLeast = [
  { position: "1º", item: "Salários defasados e baixos", mentions: 412, percentage: "43%" },
  { position: "2º", item: "Falta de reconhecimento financeiro", mentions: 298, percentage: "31%" },
  { position: "3º", item: "Benefícios insuficientes (PHERTO, plano de saúde)", mentions: 275, percentage: "29%" },
  { position: "4º", item: "Falta de plano de carreira e crescimento", mentions: 228, percentage: "24%" },
  { position: "5º", item: "Sobrecarga de trabalho e falta de pessoal", mentions: 209, percentage: "22%" },
  { position: "6º", item: "Falta de comunicação e diálogo com gestão", mentions: 171, percentage: "18%" },
  { position: "7º", item: "Ausência de meritocracia e avaliação justa", mentions: 152, percentage: "16%" },
  { position: "8º", item: "Pressão e estresse no ambiente", mentions: 123, percentage: "13%" },
  { position: "9º", item: "Falta de treinamentos e desenvolvimento", mentions: 95, percentage: "10%" },
];

// Dados para (iii) Fatores do que mais gostam
const factorsWhatTheyLike = [
  {
    icon: Users,
    title: "Relacionamentos e Equipe",
    percentage: "38%",
    sentiment: "Pertencimento e Coesão",
    type: "Social",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    description: "Os colaboradores valorizam fortemente o espírito de equipe, o companheirismo, a união e a leveza dos relacionamentos no ambiente de trabalho.",
    keywords: "equipe, colegas, amizade, união, colaboração"
  },
  {
    icon: Target,
    title: "Gestão e Liderança",
    percentage: "28%",
    sentiment: "Confiança e Humanização",
    type: "Organizacional",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "A liderança imediata é reconhecida como presente e humanizada. A boa relação com gestores é um pilar central de satisfação.",
    keywords: "líder, coordenação, gestão humanizada, apoio"
  },
  {
    icon: TrendingUp,
    title: "Oportunidade e Crescimento",
    percentage: "26%",
    sentiment: "Desenvolvimento e Expectativa",
    type: "Pessoal",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "A percepção de oportunidades internas, aprendizado contínuo e chance de desenvolvimento profissional é um grande motivador.",
    keywords: "crescimento, aprendizado, treinamento, evolução"
  },
  {
    icon: Heart,
    title: "Ambiente e Clima Organizacional",
    percentage: "25%",
    sentiment: "Bem-estar e Conforto",
    type: "Emocional",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    description: "O ambiente físico e emocional é descrito como leve, agradável e acolhedor. A sensação de pertencimento aparece repetidamente.",
    keywords: "ambiente, clima, acolhedor, harmonia"
  },
  {
    icon: Compass,
    title: "Autonomia e Liberdade",
    percentage: "24%",
    sentiment: "Realização e Independência",
    type: "Individual",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    description: "A liberdade para exercer funções e tomar decisões é vista como um diferencial que amplia o engajamento e o senso de responsabilidade.",
    keywords: "autonomia, liberdade, flexibilidade"
  },
  {
    icon: Building,
    title: "Estrutura e Benefícios",
    percentage: "22%",
    sentiment: "Segurança e Valorização",
    type: "Financeira",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    description: "Reconhecimento pela organização da empresa, benefícios oferecidos, pontualidade em pagamentos e estrutura física.",
    keywords: "benefícios, pagamento, alimentação, estrutura"
  },
  {
    icon: Award,
    title: "Reconhecimento e Valorização",
    percentage: "18%",
    sentiment: "Orgulho e Justiça",
    type: "Emocional",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    description: "Os colaboradores apreciam sentir que seu trabalho é reconhecido e valorizado — fator diretamente associado à permanência e motivação.",
    keywords: "respeito, valorização, reconhecimento"
  },
  {
    icon: Heart,
    title: "Propósito e Missão",
    percentage: "17%",
    sentiment: "Propósito e Sentido",
    type: "Ético / Vocacional",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    description: "Muitos associam prazer e orgulho ao fato de trabalhar ajudando pessoas e cuidando de vidas.",
    keywords: "paciente, cuidar, propósito, humanização"
  },
  {
    icon: MapPin,
    title: "Localização e Comodidade",
    percentage: "9%",
    sentiment: "Comodidade",
    type: "Prática",
    color: "from-gray-500 to-gray-600",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/30",
    description: "A proximidade da residência e o fácil acesso também aparecem como aspectos práticos valorizados.",
    keywords: "residência, localização, acesso"
  }
];

// Dados para (iv) Fatores do que menos gostam
const factorsWhatTheyLikeLeast = [
  {
    icon: DollarSign,
    title: "Remuneração e Benefícios Financeiros",
    percentage: "43%",
    sentiment: "Frustração e Injustiça",
    type: "Financeiro",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    description: "Salários considerados abaixo do mercado e benefícios como PHERTO e plano de saúde são os principais pontos de insatisfação.",
    keywords: "salário baixo, benefícios ruins, PHERTO injusto, plano caro"
  },
  {
    icon: XCircle,
    title: "Falta de Reconhecimento e Valorização",
    percentage: "31%",
    sentiment: "Desmotivação",
    type: "Emocional",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    description: "Sensação de que o esforço e dedicação não são adequadamente reconhecidos ou recompensados financeiramente.",
    keywords: "falta reconhecimento, não valorizam, sem retorno"
  },
  {
    icon: AlertTriangle,
    title: "Estrutura de Carreira e Crescimento",
    percentage: "24%",
    sentiment: "Estagnação",
    type: "Desenvolvimento",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    description: "Ausência de plano de carreira claro, falta de oportunidades de promoção e critérios pouco transparentes de crescimento.",
    keywords: "sem plano de cargos, não há meritocracia, sem oportunidade"
  },
  {
    icon: AlertTriangle,
    title: "Sobrecarga e Recursos Humanos",
    percentage: "22%",
    sentiment: "Estresse e Cansaço",
    type: "Organizacional",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    description: "Sobrecarga de trabalho devido à falta de pessoal adequado, escalas exaustivas e pressão excessiva.",
    keywords: "muita pressão, cansaço, falta de funcionários, sobrecarga"
  },
  {
    icon: Target,
    title: "Comunicação e Gestão",
    percentage: "18%",
    sentiment: "Desconfiança",
    type: "Comunicacional",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "Falta de diálogo efetivo, gestores distantes e comunicação interna insuficiente ou ineficaz.",
    keywords: "falta diálogo, chefias não ouvem, comunicação ruim"
  },
  {
    icon: AlertTriangle,
    title: "Meritocracia e Avaliação",
    percentage: "16%",
    sentiment: "Injustiça",
    type: "Organizacional",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    description: "Ausência de critérios claros de meritocracia e avaliação justa de desempenho para promoções e reconhecimentos.",
    keywords: "sem meritocracia, avaliação injusta, critérios pouco claros"
  },
  {
    icon: Heart,
    title: "Ambiente e Pressão",
    percentage: "13%",
    sentiment: "Desconforto",
    type: "Ambiental",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    description: "Alto nível de estresse, pressão constante e ambiente que pode afetar o bem-estar físico e emocional.",
    keywords: "estresse, pressão, ambiente pesado"
  },
  {
    icon: TrendingUp,
    title: "Treinamento e Desenvolvimento",
    percentage: "10%",
    sentiment: "Falta de Oportunidade",
    type: "Educacional",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Insuficiência de programas de treinamento e desenvolvimento profissional contínuo.",
    keywords: "falta treinamento, sem desenvolvimento, poucos cursos"
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
            Análise completa das respostas abertas da questão 42, organizada em quatro entregáveis principais:
            identificação do que mais gostam, do que menos gostam, e os fatores derivados de cada categoria.
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
            (ii) O que menos gostam na empresa - Por ordem de importância
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

      {/* (iii) Fatores do que mais gostam */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">(iii) Fatores do que mais gostam na empresa</CardTitle>
          <p className="text-sm text-muted-foreground">Fatores gerados a partir da análise semântica das respostas positivas</p>
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

      {/* (iv) Fatores do que menos gostam */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">(iv) Fatores do que menos gostam na empresa</CardTitle>
          <p className="text-sm text-muted-foreground">Fatores gerados a partir da análise semântica das respostas negativas</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {factorsWhatTheyLikeLeast.map((factor, index) => (
            <Card key={index} className={`border ${factor.borderColor} ${factor.bgColor} transition-all duration-300 hover:scale-[1.01]`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${factor.color} shrink-0`}>
                    <factor.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="font-semibold text-lg">{factor.title}</h3>
                      <Badge variant="destructive" className="text-base font-bold">
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
