import React from "react";
import { Users, Briefcase, GraduationCap, BarChart3, Heart, FileText, Lightbulb, CheckCircle2, ExternalLink, AlertTriangle, BookOpen, TrendingUp, MessageSquare, Award, DollarSign, Target, Settings, Bot } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { DemographicCharts } from "@/components/DemographicCharts";
import { TopSectors } from "@/components/TopSectors";
import { DashboardClimaOrganizacional } from "@/components/DashboardClimaOrganizacional";
import { Q42Analysis } from "@/components/Q42Analysis";
import { Q43Analysis } from "@/components/Q43Analysis";
import { SampleSize } from "@/components/SampleSize";
import { ActionPlan } from "@/components/ActionPlan";
import { CommunicationPlan } from "@/components/CommunicationPlan";
import { ActionTrackingDashboard } from "@/components/ActionTrackingDashboard";
import { TerminalExample } from "@/components/TerminalExample";
import { ChatBot } from "@/components/ChatBot";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = React.useState("sample-size");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="AEBES Logo" 
              className="h-16 w-auto object-contain"
              onError={(e) => {
                // Fallback caso a imagem não exista
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Dashboard de Clima Organizacional
              </h1>
              <p className="text-muted-foreground mt-2">Análise completa da pesquisa de clima - 2024</p>
            </div>
            <Button
              onClick={() => setActiveTab("iabot-aebes")}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Bot className="w-5 h-5" />
              IaBot AEBES
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards - Visão Geral */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Visão Geral</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total de Respondentes"
              value={949}
              icon={Users}
              gradient="from-primary to-secondary"
            />
            <StatCard
              title="Taxa de Participação Feminina"
              value="82.5%"
              icon={Users}
              gradient="from-secondary to-accent"
            />
            <StatCard
              title="Idade Predominante"
              value="<25 anos"
              icon={BarChart3}
              gradient="from-accent to-chart-4"
            />
            <StatCard
              title="Escolaridade Principal"
              value="Técnico"
              icon={GraduationCap}
              gradient="from-chart-4 to-chart-5"
            />
          </div>
        </section>

        {/* Tabs para os Entregáveis */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-11 mb-6">
            <TabsTrigger value="sample-size">
              1
            </TabsTrigger>
            <TabsTrigger value="characterization">
              2
            </TabsTrigger>
            <TabsTrigger value="mean-std">
              3
            </TabsTrigger>
            <TabsTrigger value="q42">
              4
            </TabsTrigger>
            <TabsTrigger value="q43">
              5
            </TabsTrigger>
            <TabsTrigger value="topic6">
              6
            </TabsTrigger>
            <TabsTrigger value="action-plan">
              7
            </TabsTrigger>
            <TabsTrigger value="communication">
              8
            </TabsTrigger>
            <TabsTrigger value="tracking">
              9
            </TabsTrigger>
            <TabsTrigger value="topic10">
              10
            </TabsTrigger>
            <TabsTrigger value="iabot-aebes" className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              IaBot
            </TabsTrigger>
          </TabsList>

          {/* Tópico 1: Cálculo Tamanho da Amostra */}
          <TabsContent value="sample-size" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground">Tópico 1 – Cálculo do Tamanho da Amostra</h2>
              <p className="text-muted-foreground">Metodologia e dimensionamento estatístico da pesquisa</p>
            </div>
            <SampleSize />
          </TabsContent>

          {/* Tópico 2: Caracterização da Amostra */}
          <TabsContent value="characterization" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground">Tópico 2 – Caracterização da Amostra</h2>
              <p className="text-muted-foreground">Perfil demográfico e distribuição dos respondentes</p>
            </div>
            <DemographicCharts />
            <section>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Setores com Maior Participação</h3>
              <TopSectors />
            </section>
          </TabsContent>

          {/* Tópico 3: Cálculo Média e Desvio Padrão */}
          <TabsContent value="mean-std" className="space-y-6">
            <DashboardClimaOrganizacional />
          </TabsContent>

          {/* Tópico 4: Questão 42 */}
          <TabsContent value="q42" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground">Tópico 4 – Análise da Questão 42</h2>
            </div>
            <Q42Analysis />
          </TabsContent>

          {/* Tópico 5: Questão 43 */}
          <TabsContent value="q43" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground">Tópico 5 – Análise da Questão 43</h2>
            </div>
            <Q43Analysis />
          </TabsContent>

          {/* Tópico 6: Pesquisar e sugerir uma nova escala de pesquisa de clima */}
          <TabsContent value="topic6" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground">Tópico 6 – Pesquisar e sugerir uma nova escala de pesquisa de clima</h2>
            </div>

            {/* 1) Embasamento e fonte */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">1) Embasamento e fonte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Optou-se pela Work Environment Scale (WES), instrumento psicométrico desenvolvido por Rudolf H. Moos para avaliar o clima psicossocial do trabalho por meio de dez subescalas (envolvimento, coesão entre colegas, apoio do supervisor, autonomia, orientação à tarefa, pressão de trabalho, clareza, controle gerencial, inovação e conforto físico). Esse conjunto oferece visão abrangente do ambiente, cobrindo fatores críticos de desempenho e de bem-estar organizacional.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trata-se de uma medida consolidada, com histórico de aplicação em hospitais e serviços de saúde no exterior, capaz de converter percepções de colaboradores em indicadores objetivos e comparáveis para suporte à decisão gerencial.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Na AEBES, a aplicação será feita por meio de questionário com escala Likert de 1 a 5, permitindo cálculo de médias por dimensão e cortes por unidade, turno e equipe. Os resultados serão apresentados em painéis sintéticos (por exemplo, heatmaps e rankings), acompanhados de um sumário executivo com três fortalezas e três oportunidades prioritárias, além de recomendações objetivas para cada oportunidade (responsável, prazo e indicador), favorecendo priorização e acompanhamento.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A adoção de uma única pesquisa-base reconhecida visa preservar a coerência metodológica e a comparabilidade longitudinal, reduzindo arbitrariedades na seleção de itens. A opção por Likert (em vez da resposta dicotômica presente em versões originais) aumenta a sensibilidade das medidas e a utilidade gerencial, mantendo a equivalência semântica dos construtos. Para assegurar transparência com a estrutura originalmente utilizada na disciplina, será disponibilizado um mapeamento conceitual entre os fatores da planilha e as subescalas da WES.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Quanto à qualidade técnica, deve ser conduzida validação psicométrica com a amostra da AEBES (confiabilidade por Alfa de Cronbach e verificação estrutural por KMO/Bartlett e análise fatorial exploratória). A coleta será anônima e o reporte ocorrerá de forma agregada, em conformidade com a LGPD.
                </p>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <strong>Fonte:</strong> Moos, R. H. Work Environment Scale (WES) – Manual (edições diversas). Mind Garden.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 2) Dados demográficos */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">2) Dados demográficos (alinhados a aplicações WES em saúde)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Idade */}
                  <div className="border border-border/30 rounded-lg p-4 bg-card/30">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Idade (em anos)</label>
                    <div className="text-muted-foreground text-sm">____</div>
                  </div>

                  {/* Gênero */}
                  <div className="border border-border/30 rounded-lg p-4 bg-card/30">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Gênero</label>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>( ) Feminino</span>
                      <span>( ) Masculino</span>
                      <span>( ) Outro</span>
                      <span>( ) Prefiro não responder</span>
                    </div>
                  </div>

                  {/* Categoria profissional */}
                  <div className="border border-border/30 rounded-lg p-4 bg-card/30">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Categoria profissional</label>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>( ) Assistencial/Clínica</span>
                      <span>( ) Educacional</span>
                      <span>( ) Administrativa</span>
                      <span>( ) Apoio/Operacional</span>
                      <span>( ) Outra: ________</span>
                    </div>
                  </div>

                  {/* Unidade/Setor */}
                  <div className="border border-border/30 rounded-lg p-4 bg-card/30">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Unidade/Setor de atuação</label>
                    <div className="text-muted-foreground text-sm">______________________</div>
                  </div>

                  {/* Tempo na instituição */}
                  <div className="border border-border/30 rounded-lg p-4 bg-card/30">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Tempo na instituição</label>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>( ) &lt;1 ano</span>
                      <span>( ) 1–3</span>
                      <span>( ) 3–5</span>
                      <span>( ) &gt;5</span>
                    </div>
                  </div>

                  {/* Tempo na unidade/setor atual */}
                  <div className="border border-border/30 rounded-lg p-4 bg-card/30">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Tempo na unidade/setor atual</label>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>( ) &lt;1 ano</span>
                      <span>( ) 1–3</span>
                      <span>( ) 3–5</span>
                      <span>( ) &gt;5</span>
                    </div>
                  </div>

                  {/* Turno predominante */}
                  <div className="border border-border/30 rounded-lg p-4 bg-card/30">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Turno predominante</label>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>( ) Manhã</span>
                      <span>( ) Tarde</span>
                      <span>( ) Noite</span>
                      <span>( ) Rotativo/Plantonista</span>
                    </div>
                  </div>

                  {/* Carga horária semanal */}
                  <div className="border border-border/30 rounded-lg p-4 bg-card/30">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Carga horária semanal</label>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>( ) Até 20h</span>
                      <span>( ) 21–30h</span>
                      <span>( ) 31–40h</span>
                      <span>( ) &gt;40h</span>
                    </div>
                  </div>

                  {/* Escolaridade */}
                  <div className="border border-border/30 rounded-lg p-4 bg-card/30">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Escolaridade</label>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>( ) Médio</span>
                      <span>( ) Técnico</span>
                      <span>( ) Graduação</span>
                      <span>( ) Pós-graduação</span>
                      <span>( ) Mestrado/Doutorado</span>
                    </div>
                  </div>

                  {/* Vínculo/Contrato */}
                  <div className="border border-border/30 rounded-lg p-4 bg-card/30">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Vínculo/Contrato</label>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span>( ) CLT</span>
                      <span>( ) Temporário</span>
                      <span>( ) Prestador</span>
                      <span>( ) Estágio</span>
                      <span>( ) Outro: ________</span>
                    </div>
                  </div>

                  {/* Função de chefia/supervisão */}
                  <div className="border border-border/30 rounded-lg p-4 bg-card/30">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Função de chefia/supervisão</label>
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <span>( ) Sim</span>
                      <span>( ) Não</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3) Instrumento */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">3) Instrumento (Subescalas WES e itens adaptados — Likert 1–5)</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">Escala Likert de 1 a 5 para cada item</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 3.1 Involvement */}
                <Card className="border-border/30 bg-card/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">3.1</span>
                      Involvement (Envolvimento)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Sinto-me envolvido(a) com as atividades do meu setor.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Procuro dar o meu melhor para que o trabalho seja bem realizado.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Tenho interesse genuíno pelo que fazemos na unidade/organização.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Participo ativamente das rotinas e projetos da equipe.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 3.2 Peer Cohesion */}
                <Card className="border-border/30 bg-card/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">3.2</span>
                      Peer Cohesion (Coesão entre Colegas)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Os colegas se apoiam mutuamente nas demandas do trabalho.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Existe cooperação e espírito de equipe no dia a dia.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Posso contar com os colegas quando preciso.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Há bom relacionamento e respeito entre os membros da equipe.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 3.3 Supervisor Support */}
                <Card className="border-border/30 bg-card/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">3.3</span>
                      Supervisor Support (Apoio do Gestor)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Meu gestor oferece apoio quando necessário.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Recebo orientação e feedback úteis do meu superior imediato.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Sinto que a liderança se preocupa com o bem-estar da equipe.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Posso recorrer ao meu gestor diante de dificuldades no trabalho.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 3.4 Autonomy */}
                <Card className="border-border/30 bg-card/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">3.4</span>
                      Autonomy (Autonomia)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Tenho liberdade para organizar como executo minhas tarefas.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Posso tomar decisões dentro do escopo da minha função.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Sou encorajado(a) a usar meu julgamento profissional no trabalho.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Tenho margem para ajustar prioridades conforme as demandas.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 3.5 Task Orientation */}
                <Card className="border-border/30 bg-card/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">3.5</span>
                      Task Orientation (Orientação à Tarefa)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Há foco em qualidade e padrões de desempenho na unidade.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Os processos de trabalho estimulam organização e eficiência.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>As metas de tarefa são claras e desafiadoras.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Revisamos o trabalho para assegurar a qualidade do que entregamos.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 3.6 Work Pressure */}
                <Card className="border-border/30 bg-card/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">3.6</span>
                      Work Pressure (Pressão/Ritmo de Trabalho)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>O ritmo de trabalho costuma ser intenso.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Frequentemente lidamos com prazos apertados.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>A carga de trabalho exige esforço constante.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Sinto pressão para entregar resultados rapidamente.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 3.7 Clarity */}
                <Card className="border-border/30 bg-card/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">3.7</span>
                      Clarity (Clareza)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Minhas responsabilidades são claramente definidas.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>As regras e procedimentos de trabalho são conhecidos.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Sei o que esperam do meu cargo.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>As orientações recebidas para realizar as tarefas são claras.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 3.8 Managerial Control */}
                <Card className="border-border/30 bg-card/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">3.8</span>
                      Managerial Control (Controle Gerencial)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>As decisões de trabalho são, em geral, centralizadas pela gestão.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Existe supervisão próxima do andamento das atividades.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Há monitoramento frequente do cumprimento de normas e prazos.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>As políticas e procedimentos são rigidamente aplicados.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 3.9 Innovation */}
                <Card className="border-border/30 bg-card/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">3.9</span>
                      Innovation (Inovação)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Novas ideias e sugestões de melhoria são incentivadas.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Existe abertura para experimentar mudanças nos processos.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Propostas de inovação são consideradas pela gestão.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Sinto segurança para propor soluções novas.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 3.10 Physical Comfort */}
                <Card className="border-border/30 bg-card/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-semibold">3.10</span>
                      Physical Comfort (Conforto Físico)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>O ambiente físico de trabalho é confortável.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Os equipamentos e instalações são adequados às tarefas.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Condições como temperatura e ruído são apropriadas.</span>
                      </li>
                      <li className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">–</span>
                        <span>Tenho condições ergonômicas adequadas para trabalhar.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* 4) Apêndice */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">4) Apêndice — Termo de Consentimento (LGPD)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 border border-border/50 rounded-lg p-4">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "Este questionário é anônimo e tem finalidade acadêmico-organizacional. Os dados serão analisados de forma agregada, sem identificação individual. A participação é voluntária e pode ser interrompida a qualquer momento. Dúvidas: e-mail institucional do projeto."
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tópico 7: Plano de Ação */}
          <TabsContent value="action-plan" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground">TÓPICO 7 – Elaboração do Plano de Ação com base nos resultados da pesquisa</h2>
            </div>
            <ActionPlan />
          </TabsContent>

          {/* Tópico 8: Comunicação do Plano de Ação */}
          <TabsContent value="communication" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground">Tópico 8 – Como comunicar o Plano de Ação a toda a equipe</h2>
              <p className="text-muted-foreground">
                Estratégias e práticas para comunicação eficaz do plano de ação organizacional
              </p>
            </div>
            <CommunicationPlan />
          </TabsContent>

          {/* Tópico 9: Dashboard de Acompanhamento */}
          <TabsContent value="tracking" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground">Tópico 9 – Dashboard de Acompanhamento das Ações</h2>
              <p className="text-muted-foreground">
                Acompanhe, ajuste e programe o progresso das ações do plano de ação organizacional
              </p>
            </div>
            <ActionTrackingDashboard />
          </TabsContent>

          {/* Tópico 10: Uso de IA */}
          <TabsContent value="topic10" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Tópico 10 – (i) Utilizou IA? Qual? Em qual etapa?; (ii) Qual prompt utilizado? Como procedeu para preservar/manter a confidencialidade dos dados?
              </h2>
              <p className="text-muted-foreground">
                Documentação sobre o uso de IA no desenvolvimento e medidas de preservação da confidencialidade
              </p>
            </div>
            <TerminalExample />
          </TabsContent>

          {/* IaBot AEBES */}
          <TabsContent value="iabot-aebes" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Bot className="w-6 h-6" />
                IaBot AEBES
              </h2>
              <p className="text-muted-foreground">
                Assistente de IA para o Dashboard de Clima Organizacional
              </p>
            </div>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <ChatBot />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
          <p>Dashboard de Clima Organizacional © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
