import { Users, Briefcase, GraduationCap, BarChart3, Heart, FileText, Lightbulb, CheckCircle2, ExternalLink, AlertTriangle, BookOpen, TrendingUp, MessageSquare, Award, DollarSign, Target, Settings } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
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
        <Tabs defaultValue="sample-size" className="w-full">
          <TabsList className="grid w-full grid-cols-9 mb-6">
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
            <TabsTrigger value="action-plan">
              7
            </TabsTrigger>
            <TabsTrigger value="communication">
              8
            </TabsTrigger>
            <TabsTrigger value="tracking">
              9
            </TabsTrigger>
            <TabsTrigger value="solutions">
              10
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

          {/* Tópico 10: Soluções para Problemas */}
          <TabsContent value="solutions" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground">Tópico 10 – Soluções para Problemas</h2>
            </div>

            <Tabs defaultValue="bloco1" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 mb-6 gap-2">
                <TabsTrigger value="bloco1" className="text-xs sm:text-sm">Bem-Estar</TabsTrigger>
                <TabsTrigger value="bloco2" className="text-xs sm:text-sm">Desenvolvimento</TabsTrigger>
                <TabsTrigger value="bloco3" className="text-xs sm:text-sm">Comunicação</TabsTrigger>
                <TabsTrigger value="bloco4" className="text-xs sm:text-sm">Reconhecimento</TabsTrigger>
                <TabsTrigger value="bloco5" className="text-xs sm:text-sm">Remuneração</TabsTrigger>
                <TabsTrigger value="bloco6" className="text-xs sm:text-sm">Carreira</TabsTrigger>
                <TabsTrigger value="bloco7" className="text-xs sm:text-sm">Estrutura</TabsTrigger>
              </TabsList>

              {/* BLOCO 1 */}
              <TabsContent value="bloco1" className="space-y-6">
              {/* BLOCO 1 – Bem-Estar e Qualidade de Vida no Trabalho */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                      <Heart className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">BLOCO 1 – Bem-Estar e Qualidade de Vida no Trabalho</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Evidências */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-amber-500/20">
                        <AlertTriangle className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Evidências</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"O ambiente não favorece o bem-estar físico e emocional."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"A empresa não promove iniciativas de bem-estar."</p>
                      </div>
                      <p className="text-muted-foreground italic pt-2">
                        Questões abertas apontaram sobrecarga de trabalho, pressão emocional e ausência de ações institucionais de cuidado com o colaborador.
                      </p>
                    </div>
                  </div>

                  {/* Síntese do Problema */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <FileText className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Síntese do Problema</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          Os dados revelam que o ambiente de trabalho atual não oferece suporte físico, psicológico nem social suficientes para equilibrar as demandas profissionais com a saúde e o bem-estar.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          O cenário é de alta exigência e baixa recuperação emocional, o que favorece fadiga crônica, absenteísmo e queda de engajamento.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          Há pouca institucionalização do cuidado, ou seja, ações de bem-estar acontecem de forma pontual e não estratégica.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fundamentação Científica */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <FileText className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Fundamentação Científica</h3>
                      </div>
                      <a
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10298158/?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-200 text-purple-400 hover:text-purple-300"
                        title="Abrir artigo científico"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Artigo</span>
                      </a>
                    </div>
                    <div className="space-y-4 pl-2">
                      <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                        <p className="text-foreground mb-1">
                          <strong className="text-purple-400">Shiri, R. et al. (2023).</strong> Effectiveness of Workplace Interventions to Improve Health and Well-being.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          PMC 10298158
                        </p>
                      </div>
                      <p className="text-foreground leading-relaxed">
                        A pesquisa revisou 108 intervenções de bem-estar implementadas em diferentes organizações e concluiu que:
                      </p>
                      <ul className="list-none space-y-3 text-foreground">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                          <span>Intervenções isoladas (como palestras ou eventos esporádicos) produzem efeitos pequenos e de curta duração.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                          <span>As iniciativas mais eficazes foram aquelas integradas à gestão organizacional, com apoio de líderes e acompanhamento contínuo.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                          <span>Programas sustentáveis combinam ações de promoção de saúde física, mental e organizacional — incluindo ergonomia, apoio psicológico, equilíbrio entre vida pessoal e trabalho, e cultura de empatia.</span>
                        </li>
                      </ul>
                      <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-5 mt-6">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-foreground font-semibold mb-2">Conclusão central do artigo:</p>
                            <p className="text-foreground italic leading-relaxed">
                              "O bem-estar no trabalho precisa ser tratado como um processo institucional contínuo, não como uma campanha temporária."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Aplicação Prática / Solução Viável */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Aplicação Prática / Solução Viável</h3>
                    </div>
                    <div className="space-y-4 pl-2">
                      <p className="text-foreground leading-relaxed">
                        Com base nas evidências do artigo e na realidade identificada na pesquisa interna, recomenda-se que o hospital implemente um <strong>Programa Permanente de Bem-Estar e Qualidade de Vida (PPBQV)</strong> com três eixos estruturantes:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {/* Eixo 1 */}
                        <Card className="border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">1</span>
                              Eixo Físico e Ocupacional
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Implantar pausas ativas e ginástica laboral guiada.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Promover ajustes ergonômicos e mapeamento de riscos ocupacionais.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Criar indicadores mensais de absenteísmo e fadiga por setor.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 2 */}
                        <Card className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">2</span>
                              Eixo Psicológico e Emocional
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Disponibilizar atendimento psicológico institucional (individual e em grupo).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Realizar rodas de escuta e descompressão emocional com psicólogos e líderes.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Implementar campanhas permanentes de empatia e respeito no ambiente de trabalho.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 3 */}
                        <Card className="border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">3</span>
                              Eixo Organizacional e Cultural
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Incluir indicadores de bem-estar nas metas de liderança.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Formar "Embaixadores do Bem-Estar" (colaboradores de referência que incentivam o equilíbrio no dia a dia).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Criar um painel trimestral de qualidade de vida, comunicando resultados e boas práticas.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
              </TabsContent>

              {/* BLOCO 2 */}
              <TabsContent value="bloco2" className="space-y-6">
              {/* BLOCO 2 – Desenvolvimento e Treinamento */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">BLOCO 2 – Desenvolvimento e Treinamento</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Evidências */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-amber-500/20">
                        <AlertTriangle className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Evidências</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"A empresa não desenvolve os colaboradores."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Falta de treinamento e desenvolvimento profissional."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Ausência de oportunidades de aprendizado e crescimento."</p>
                      </div>
                      <p className="text-muted-foreground italic pt-2">
                        Questões abertas apontam falta de capacitação interna, carência de treinamentos periódicos e desalinhamento entre aprendizado e necessidade real do trabalho.
                      </p>
                    </div>
                  </div>

                  {/* Síntese do Problema */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <FileText className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Síntese do Problema</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          A ausência de uma política consistente de desenvolvimento e aprendizado contínuo gera sensação de estagnação profissional e baixa perspectiva de crescimento.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          Os colaboradores relatam que o aprendizado depende mais de iniciativa individual do que de estímulo organizacional. Isso causa desengajamento, perda de motivação e alta rotatividade.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          Há também falta de reconhecimento do aprendizado adquirido, o que desestimula a busca por capacitação. Em suma, o hospital não oferece um caminho claro de evolução profissional nem programas de aprimoramento estruturados.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fundamentação Científica */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <FileText className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Fundamentação Científica</h3>
                      </div>
                      <a
                        href="https://www.emerald.com/insight/content/doi/10.1108/JOCM-01-2023-0001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-200 text-purple-400 hover:text-purple-300"
                        title="Abrir artigo científico"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Artigo</span>
                      </a>
                    </div>
                    <div className="space-y-4 pl-2">
                      <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                        <p className="text-foreground mb-1">
                          <strong className="text-purple-400">Bharadwaj, M., Singh, P. & Ahuja, V. (2023).</strong> Influence of Training and Development Interventions on Employee Retention.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Disponível em: Emerald Insight
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-foreground font-semibold mb-3">Principais achados do estudo:</p>
                        <ul className="list-none space-y-3 text-foreground">
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>Empresas que implementam programas de treinamento estruturados, constantes e mensuráveis apresentam maior retenção e engajamento.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>O treinamento é mais eficaz quando personalizado por nível hierárquico e função, e quando o colaborador enxerga o reflexo direto do aprendizado no seu desempenho e reconhecimento.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>A presença de mentoria, feedback contínuo e planos de desenvolvimento individual (PDI) aumenta o sentimento de pertencimento e reduz a intenção de desligamento.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-5 mt-6">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-foreground font-semibold mb-2">Conclusão central do artigo:</p>
                            <p className="text-foreground italic leading-relaxed">
                              "O treinamento eficaz não é um evento, mas um ciclo contínuo de aprendizado, aplicação e reconhecimento."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Aplicação Prática / Solução Viável */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Aplicação Prática / Solução Viável</h3>
                    </div>
                    <div className="space-y-4 pl-2">
                      <p className="text-foreground leading-relaxed">
                        Com base no estudo e no contexto organizacional identificado, recomenda-se a criação de um <strong>Programa Estruturado de Desenvolvimento e Treinamento Contínuo (PDT)</strong> com foco em crescimento técnico e comportamental.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {/* Eixo 1 */}
                        <Card className="border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">1</span>
                              Eixo de Formação Técnica e Funcional
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Criar Trilhas de Aprendizado por Função (ex.: enfermagem, administrativo, técnico).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Oferecer reciclagens periódicas obrigatórias sobre protocolos, tecnologia e atendimento.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Implantar microcursos online e presenciais com certificação interna.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 2 */}
                        <Card className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">2</span>
                              Eixo de Desenvolvimento Humano e Liderança
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Implementar Programa de Mentoria Interna, ligando profissionais experientes a novos colaboradores.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Promover workshops de competências comportamentais (comunicação, empatia, liderança).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Criar rodadas de feedback trimestrais, com base em planos individuais de desenvolvimento (PDI).</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 3 */}
                        <Card className="border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">3</span>
                              Eixo Estratégico e de Carreira
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Integrar o treinamento às metas institucionais e indicadores de desempenho.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Reconhecer publicamente os colaboradores que concluírem trilhas de capacitação.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Alinhar o programa de desenvolvimento à estrutura de progressão de carreira (o que será retomado no Bloco 6).</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
              </TabsContent>

              {/* BLOCO 3 */}
              <TabsContent value="bloco3" className="space-y-6">
              {/* BLOCO 3 – Comunicação e Participação */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      <MessageSquare className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">BLOCO 3 – Comunicação e Participação</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Evidências */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-amber-500/20">
                        <AlertTriangle className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Evidências</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Não sou ouvido quando expresso minhas opiniões."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Falta de diálogo e comunicação interna falha."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Gestão distante e decisões sem participação."</p>
                      </div>
                      <p className="text-muted-foreground italic pt-2">
                        Questões abertas revelam falta de espaço para diálogo, centralização de decisões e ausência de feedback sobre sugestões apresentadas.
                      </p>
                    </div>
                  </div>

                  {/* Síntese do Problema */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <FileText className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Síntese do Problema</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          O hospital apresenta um modelo de comunicação vertical e unidirecional, onde a informação flui da gestão para as equipes, mas raramente no sentido contrário. Os colaboradores relatam que não são ouvidos, nem consultados sobre decisões que impactam diretamente o seu trabalho.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed mb-2">
                          Essa ausência de escuta e de canais estruturados para participação gera:
                        </p>
                        <ul className="list-none space-y-2 text-foreground ml-4">
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Desmotivação e sensação de invisibilidade;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Baixa confiança na liderança;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Desalinhamento entre discurso institucional e prática cotidiana.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          Em síntese, há uma cultura de comunicação informativa, mas não participativa. O resultado é um ambiente em que as pessoas executam, mas não se sentem parte das decisões.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fundamentação Científica */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <FileText className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Fundamentação Científica</h3>
                      </div>
                      <a
                        href="https://www.researchgate.net/publication/362345678_The_Influence_of_Employee_Participation_Rewards_and_Recognition_on_Employee_Engagement"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-200 text-purple-400 hover:text-purple-300"
                        title="Abrir artigo científico"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Artigo</span>
                      </a>
                    </div>
                    <div className="space-y-4 pl-2">
                      <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                        <p className="text-foreground mb-1">
                          <strong className="text-purple-400">Quay, C. & Yusof, N. (2022).</strong> The Influence of Employee Participation, Rewards and Recognition on Employee Engagement.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Disponível em: ResearchGate
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-foreground font-semibold mb-3">Principais Achados do Estudo:</p>
                        <ul className="list-none space-y-3 text-foreground">
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>A participação ativa dos colaboradores nas decisões organizacionais aumenta significativamente o nível de engajamento, satisfação e lealdade institucional.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>Quando o funcionário percebe que sua voz é ouvida e valorizada, ele desenvolve maior sentimento de pertencimento.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>Empresas com sistemas formais de comunicação bidirecional (como fóruns, comitês e feedback 360°) apresentam menor rotatividade e maior comprometimento coletivo.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>A retroalimentação (feedback sobre o que foi feito com as sugestões) é tão importante quanto o ato de ouvir.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-5 mt-6">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-foreground font-semibold mb-2">Conclusão central do artigo:</p>
                            <p className="text-foreground italic leading-relaxed">
                              "A participação e o feedback são catalisadores do engajamento — escutar sem agir é tão ineficaz quanto não escutar."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Aplicação Prática / Solução Viável */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Aplicação Prática / Solução Viável</h3>
                    </div>
                    <div className="space-y-4 pl-2">
                      <p className="text-foreground leading-relaxed">
                        Com base nos achados do artigo e nas evidências da pesquisa interna, recomenda-se a implementação de um <strong>Programa Institucional de Escuta e Participação Ativa (PIEPA)</strong>, composto por ações de comunicação horizontal, feedback e envolvimento coletivo nas decisões.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {/* Eixo 1 */}
                        <Card className="border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">1</span>
                              Eixo de Escuta Estruturada
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Criar Comitês de Escuta Ativa em cada setor, formados por representantes eleitos dos colaboradores.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Implantar encontros mensais de alinhamento entre equipes e lideranças, com pauta de melhorias locais.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Estabelecer rodadas de "voz do colaborador" — encontros trimestrais com a direção para debater avanços e pendências.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 2 */}
                        <Card className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">2</span>
                              Eixo de Comunicação Interna Transparente
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Reformular os canais institucionais (e-mails, murais, intranet) para que tenham espaço de retorno.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Publicar "Painel de Resultados das Sugestões", mostrando ideias aplicadas e status das em andamento.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Garantir que toda decisão corporativa relevante tenha comunicação clara, contextualizada e humanizada.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 3 */}
                        <Card className="border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">3</span>
                              Eixo de Cultura Participativa
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Treinar líderes em comunicação empática e gestão de diálogo.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Vincular metas de engajamento à avaliação de desempenho das lideranças.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Criar o programa "Construindo Juntos", no qual projetos e melhorias sejam co-desenvolvidos entre áreas e times.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
              </TabsContent>

              {/* BLOCO 4 */}
              <TabsContent value="bloco4" className="space-y-6">
              {/* BLOCO 4 – Reconhecimento e Valorização Profissional */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                      <Award className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">BLOCO 4 – Reconhecimento e Valorização Profissional</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Evidências */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-amber-500/20">
                        <AlertTriangle className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Evidências</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Falta de reconhecimento financeiro."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Sinto que não sou valorizado(a) na minha função."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Ausência de meritocracia e avaliação justa."</p>
                      </div>
                      <p className="text-muted-foreground italic pt-2">
                        Questões abertas mencionam injustiça nas avaliações, falta de retorno positivo e esforços não reconhecidos.
                      </p>
                    </div>
                  </div>

                  {/* Síntese do Problema */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <FileText className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Síntese do Problema</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          Os colaboradores expressam falta de reconhecimento formal e informal pelo trabalho desempenhado. Há uma percepção de que os resultados e esforços individuais ou coletivos não são valorizados, e de que os critérios de avaliação e mérito são pouco claros.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed mb-2">
                          Essa lacuna gera:
                        </p>
                        <ul className="list-none space-y-2 text-foreground ml-4">
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Desmotivação e queda de produtividade,</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Sensação de invisibilidade e injustiça,</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>E redução do senso de propósito e pertencimento.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          O ambiente institucional não estimula a celebração de conquistas nem o feedback positivo, fatores essenciais para manter engajamento emocional.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fundamentação Científica */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <FileText className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Fundamentação Científica</h3>
                      </div>
                      <a
                        href="https://www.mdpi.com/2071-1050/14/19/12018"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-200 text-purple-400 hover:text-purple-300"
                        title="Abrir artigo científico"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Artigo</span>
                      </a>
                    </div>
                    <div className="space-y-4 pl-2">
                      <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                        <p className="text-foreground mb-1">
                          <strong className="text-purple-400">Yang, J. (2022).</strong> Employee Recognition, Task Performance, and Organizational Citizenship Behavior.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Disponível em: MDPI – Sustainability Journal
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-foreground font-semibold mb-3">Principais Achados do Estudo:</p>
                        <ul className="list-none space-y-3 text-foreground">
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>O reconhecimento sistemático e recorrente está diretamente associado a maior desempenho de tarefas, menor absenteísmo e maior colaboração espontânea.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>A valorização não precisa ser apenas financeira — reconhecimento simbólico, público e pessoal tem impacto psicológico duradouro.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>Ambientes que aplicam feedbacks positivos regulares criam vínculos emocionais mais fortes entre o colaborador e a instituição.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>O artigo também mostra que organizações que institucionalizam o reconhecimento (com programas formais) apresentam melhor clima e retenção de talentos.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-5 mt-6">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-foreground font-semibold mb-2">Conclusão central do artigo:</p>
                            <p className="text-foreground italic leading-relaxed">
                              "O reconhecimento é uma das formas mais eficazes e menos custosas de fortalecer o engajamento e a cidadania organizacional."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Aplicação Prática / Solução Viável */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Aplicação Prática / Solução Viável</h3>
                    </div>
                    <div className="space-y-4 pl-2">
                      <p className="text-foreground leading-relaxed">
                        Com base nas conclusões do artigo e nas evidências internas da pesquisa, recomenda-se a criação de um <strong>Programa Institucional de Reconhecimento e Valorização Contínua (PIRV)</strong>. Esse programa deve ser estruturado, transparente e emocionalmente significativo, para promover orgulho e motivação.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {/* Eixo 1 */}
                        <Card className="border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">1</span>
                              Eixo de Reconhecimento Contínuo
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Implantar o Programa "Destaques do Mês", com critérios claros (resultados, atitudes, colaboração).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Publicar histórias inspiradoras de colaboradores em canais internos (intranet, murais, redes).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Incentivar líderes a praticarem feedbacks positivos semanais, reforçando comportamentos alinhados aos valores institucionais.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 2 */}
                        <Card className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">2</span>
                              Eixo de Avaliação Justa e Transparente
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Estabelecer critérios padronizados de avaliação de desempenho e meritocracia.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Promover revisões semestrais de performance com devolutivas individuais construtivas.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Criar comitê de revisão de mérito para garantir equidade e evitar percepções de favoritismo.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 3 */}
                        <Card className="border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">3</span>
                              Eixo de Cultura de Valorização
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Treinar líderes e gestores em reconhecimento emocional e simbólico.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Realizar eventos periódicos de celebração de resultados (mensais ou trimestrais).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Introduzir o reconhecimento entre pares ("colaborador do colaborador"), para reforçar o senso de comunidade.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
              </TabsContent>

              {/* BLOCO 5 */}
              <TabsContent value="bloco5" className="space-y-6">
              {/* BLOCO 5 – Remuneração e Benefícios */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">BLOCO 5 – Remuneração e Benefícios</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Evidências */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-amber-500/20">
                        <AlertTriangle className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Evidências</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"O salário não é justo para as funções desempenhadas."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Os benefícios não atendem às necessidades."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">Questão 42: "Salários defasados", "PHERTO não funciona", "Plano de saúde caro."</p>
                      </div>
                      <p className="text-muted-foreground italic pt-2">
                        Colaboradores também mencionam falta de reconhecimento financeiro e diferenças salariais entre funções equivalentes.
                      </p>
                    </div>
                  </div>

                  {/* Síntese do Problema */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <FileText className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Síntese do Problema</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          A estrutura atual de remuneração e benefícios da instituição é percebida como injusta e desatualizada. Os colaboradores sentem que o salário não reflete a complexidade e o valor do trabalho realizado, especialmente nas funções de linha de frente.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          Além disso, o programa de benefícios (PHERTO) é visto como ineficiente e de baixo retorno prático, o que reforça a insatisfação.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed mb-2">
                          O cenário aponta para desalinhamento entre esforço e recompensa, gerando:
                        </p>
                        <ul className="list-none space-y-2 text-foreground ml-4">
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Sensação de desvalorização e baixa motivação;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Desconfiança na política de remuneração;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>E percepção de desigualdade entre cargos e setores.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          No contexto hospitalar, onde as cargas emocionais e físicas são elevadas, a injustiça percebida na remuneração se torna um fator crítico de desengajamento e rotatividade.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fundamentação Científica */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <FileText className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Fundamentação Científica</h3>
                      </div>
                      <a
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10012906"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-200 text-purple-400 hover:text-purple-300"
                        title="Abrir artigo científico"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Artigo</span>
                      </a>
                    </div>
                    <div className="space-y-4 pl-2">
                      <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                        <p className="text-foreground mb-1">
                          <strong className="text-purple-400">Wahyuhadi, L., et al. (2023).</strong> Remuneration, Job Satisfaction, and Performance of Health Workers in a General Academic Hospital.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Disponível em: pmc.ncbi.nlm.nih.gov/articles/PMC10012906
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-foreground font-semibold mb-3">Principais Achados do Estudo:</p>
                        <div className="p-4 rounded-lg bg-background/50 border border-border/30 mb-4">
                          <p className="text-foreground text-sm italic">
                            Realizado em um hospital acadêmico com 716 profissionais de saúde (médicos, enfermeiros e técnicos).
                          </p>
                        </div>
                        <ul className="list-none space-y-3 text-foreground">
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>O estudo confirmou que a remuneração é o fator mais determinante da satisfação e desempenho organizacional — mesmo mais do que fatores como ambiente ou promoção.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>Identificou três elementos essenciais para aumentar satisfação sem necessariamente elevar o valor absoluto do salário:</span>
                          </li>
                        </ul>
                        <div className="ml-6 mt-3 space-y-2">
                          <div className="p-3 rounded-lg bg-purple-500/5 border-l-2 border-purple-500/50">
                            <p className="text-foreground text-sm"><strong>Percepção de justiça e equidade interna</strong> — a clareza sobre critérios salariais aumenta a satisfação, mesmo sem aumento imediato.</p>
                          </div>
                          <div className="p-3 rounded-lg bg-purple-500/5 border-l-2 border-purple-500/50">
                            <p className="text-foreground text-sm"><strong>Reconhecimento simbólico e complementar</strong> — recompensas financeiras pequenas, mas direcionadas, geram alto valor emocional.</p>
                          </div>
                          <div className="p-3 rounded-lg bg-purple-500/5 border-l-2 border-purple-500/50">
                            <p className="text-foreground text-sm"><strong>Gestão participativa da política salarial</strong> — quando os colaboradores compreendem os limites orçamentários e participam da discussão, a percepção de "injustiça" diminui.</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-5 mt-6">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-foreground font-semibold mb-2">Conclusão central do artigo:</p>
                            <p className="text-foreground italic leading-relaxed">
                              "Mesmo em contextos de restrição orçamentária, políticas de remuneração baseadas em justiça, reconhecimento e transparência são capazes de elevar a satisfação e o desempenho dos profissionais de saúde."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Aplicação Prática / Solução Viável */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Aplicação Prática / Solução Viável</h3>
                    </div>
                    <div className="space-y-4 pl-2">
                      <p className="text-foreground leading-relaxed">
                        Com base nos achados do artigo e na realidade institucional da AEBES (hospital filantrópico de regime CLT), recomenda-se a implementação do <strong>Plano de Valorização e Equidade Remuneratória Hospitalar (PVERH)</strong>, com três eixos de atuação:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {/* Eixo 1 */}
                        <Card className="border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">1</span>
                              Eixo de Justiça e Transparência Salarial
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Criar uma estrutura de cargos e salários atualizada e acessível, mostrando faixas, critérios de progressão e comparativos internos.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Realizar pesquisa salarial anual com base no mercado hospitalar regional (SINDISAÚDE e SINDHES).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Estabelecer um "Comitê de Equidade Remuneratória" para revisar distorções e acompanhar percepções de justiça.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 2 */}
                        <Card className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">2</span>
                              Eixo de Reconhecimento Financeiro e Simbólico
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Instituir bônus ou premiações de desempenho coletivo (ex.: produtividade de setor, metas de qualidade e satisfação do paciente).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Reestruturar o programa PHERTO, transformando-o em um "benefício flexível" — o colaborador escolhe entre opções (saúde, transporte, alimentação, educação).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Criar recompensas simbólicas de valor afetivo, como "vales de reconhecimento" ou "agradecimentos institucionais" em eventos internos.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 3 */}
                        <Card className="border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">3</span>
                              Eixo de Comunicação e Participação
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Promover reuniões anuais abertas para explicar a política de remuneração, limites orçamentários e perspectivas futuras.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Divulgar relatórios de transparência com dados consolidados de faixas e progressões salariais.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Treinar líderes para que comuniquem reconhecimento financeiro e simbólico com clareza, reforçando o vínculo emocional com a instituição.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
              </TabsContent>

              {/* BLOCO 6 */}
              <TabsContent value="bloco6" className="space-y-6">
              {/* BLOCO 6 – Carreira e Crescimento */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-500/20">
                      <Target className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">BLOCO 6 – Carreira e Crescimento</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Evidências */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-amber-500/20">
                        <AlertTriangle className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Evidências</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Falta de plano de carreira e crescimento."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Ausência de meritocracia."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Critérios de promoção pouco transparentes."</p>
                      </div>
                      <p className="text-muted-foreground italic pt-2">
                        Nas respostas abertas (Q42/Q43): colaboradores apontam estagnação profissional, falta de oportunidades internas e ausência de reconhecimento por tempo de casa ou evolução por mérito.
                      </p>
                    </div>
                  </div>

                  {/* Síntese do Problema */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <FileText className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Síntese do Problema</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          Os colaboradores não enxergam um caminho de desenvolvimento dentro da instituição. Há falta de clareza sobre critérios de promoção, progressão e valorização de competências, o que leva à percepção de que o crescimento depende mais de tempo ou sorte do que de desempenho.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed mb-2">
                          Isso gera:
                        </p>
                        <ul className="list-none space-y-2 text-foreground ml-4">
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Desmotivação e alta rotatividade entre profissionais jovens e técnicos;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Sensação de inércia profissional e falta de reconhecimento de talentos internos;</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Perda de profissionais qualificados, que buscam planos de carreira em outras instituições hospitalares.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          O hospital, ao não estruturar mecanismos formais de progressão, acaba desincentivando o engajamento de longo prazo — um risco estratégico para qualquer organização de saúde.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fundamentação Científica */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <FileText className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Fundamentação Científica</h3>
                      </div>
                      <a
                        href="https://www.gov.uk/government/publications/learning-and-development-employee-engagement-and-well-being"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-200 text-purple-400 hover:text-purple-300"
                        title="Abrir relatório científico"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Relatório</span>
                      </a>
                    </div>
                    <div className="space-y-4 pl-2">
                      <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                        <p className="text-foreground mb-1">
                          <strong className="text-purple-400">UK Government (2025).</strong> Learning and Development, Employee Engagement and Well-being.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Disponível em: gov.uk
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-foreground font-semibold mb-3">Principais Achados do Relatório:</p>
                        <ul className="list-none space-y-3 text-foreground">
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>Aprendizado e desenvolvimento estruturados têm forte correlação positiva com engajamento, produtividade e bem-estar emocional.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>Funcionários que percebem oportunidades claras de crescimento tendem a se comprometer mais e permanecer mais tempo na organização.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>As práticas mais eficazes incluem:</span>
                          </li>
                        </ul>
                        <div className="ml-6 mt-3 space-y-2">
                          <div className="p-3 rounded-lg bg-purple-500/5 border-l-2 border-purple-500/50">
                            <p className="text-foreground text-sm"><strong>Planos de Carreira e Trilhas de Desenvolvimento</strong> formais e transparentes;</p>
                          </div>
                          <div className="p-3 rounded-lg bg-purple-500/5 border-l-2 border-purple-500/50">
                            <p className="text-foreground text-sm"><strong>Programas de aprendizagem contínua e mentoria;</strong></p>
                          </div>
                          <div className="p-3 rounded-lg bg-purple-500/5 border-l-2 border-purple-500/50">
                            <p className="text-foreground text-sm"><strong>Integração entre metas individuais e metas organizacionais;</strong></p>
                          </div>
                          <div className="p-3 rounded-lg bg-purple-500/5 border-l-2 border-purple-500/50">
                            <p className="text-foreground text-sm"><strong>Reconhecimento do aprendizado</strong> como forma de valorização simbólica.</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-5 mt-6">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-foreground font-semibold mb-2">Conclusão central do relatório:</p>
                            <p className="text-foreground italic leading-relaxed">
                              "Desenvolver é reter. O aprendizado contínuo e a visibilidade de oportunidades de crescimento são os principais preditores de engajamento e lealdade organizacional."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Aplicação Prática / Solução Viável */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Aplicação Prática / Solução Viável</h3>
                    </div>
                    <div className="space-y-4 pl-2">
                      <p className="text-foreground leading-relaxed">
                        Com base no relatório e na realidade hospitalar da AEBES, recomenda-se a criação do <strong>Programa de Desenvolvimento e Carreira Hospitalar (PDCH)</strong> — uma estrutura integrada de trilhas, avaliações e reconhecimento do crescimento profissional.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {/* Eixo 1 */}
                        <Card className="border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">1</span>
                              Eixo de Estruturação de Carreira
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Mapear todos os cargos e criar planos de progressão por competência e tempo de experiência.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Definir critérios objetivos de promoção (formação, desempenho, certificações, comportamento).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Criar um "Mapa de Carreira Visual", acessível a todos, mostrando caminhos possíveis dentro da instituição.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 2 */}
                        <Card className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">2</span>
                              Eixo de Desenvolvimento Contínuo
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Oferecer trilhas de aprendizado personalizadas (técnicas, comportamentais e gerenciais).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Implantar programas de mentoria e coaching interno, priorizando talentos emergentes.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Estimular parcerias educacionais com universidades e escolas técnicas, oferecendo bolsas ou descontos.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 3 */}
                        <Card className="border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">3</span>
                              Eixo de Avaliação e Reconhecimento
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Adotar avaliações semestrais de desempenho com feedback estruturado e planos individuais de desenvolvimento (PDI).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Reconhecer publicamente colaboradores que avançarem nas trilhas de carreira.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Criar o "Selo de Desenvolvimento Interno", valorizando quem completa formações internas ou assume novos desafios.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
              </TabsContent>

              {/* BLOCO 7 */}
              <TabsContent value="bloco7" className="space-y-6">
              {/* BLOCO 7 – Estrutura, Processos e Pressão Organizacional */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20">
                      <Settings className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">BLOCO 7 – Estrutura, Processos e Pressão Organizacional</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Evidências */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-amber-500/20">
                        <AlertTriangle className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Evidências</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Sobrecarga de trabalho e falta de pessoal."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Ambiente burocrático e pressão excessiva."</p>
                      </div>
                      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-500/50">
                        <p className="text-foreground font-medium">"Avaliações sem critérios claros."</p>
                      </div>
                      <p className="text-muted-foreground italic pt-2">
                        Nas respostas abertas, colaboradores relatam falta de planejamento, excesso de tarefas administrativas, escassez de recursos humanos e ambiente de alta pressão e cobrança.
                      </p>
                    </div>
                  </div>

                  {/* Síntese do Problema */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <FileText className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Síntese do Problema</h3>
                    </div>
                    <div className="space-y-3 pl-2">
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          O hospital apresenta processos internos desorganizados, lentos e burocráticos, que sobrecarregam as equipes e dificultam a execução das atividades essenciais. A falta de planejamento e priorização faz com que as demandas operacionais ultrapassem a capacidade física e emocional dos profissionais, gerando:
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <ul className="list-none space-y-2 text-foreground">
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Cansaço crônico,</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>Desmotivação e queda de desempenho,</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                            <span>E, em alguns casos, absenteísmo e adoecimento ocupacional.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                        <p className="text-foreground leading-relaxed">
                          A gestão por resultados tem se mostrado mais punitiva do que pedagógica, sem foco em melhoria contínua. Na prática, o excesso de burocracia e pressão reduz a qualidade do atendimento e corrói o engajamento.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fundamentação Científica */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <FileText className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Fundamentação Científica</h3>
                      </div>
                      <a
                        href="https://www.sciencedirect.com/science/article/pii/S0168851021000845"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-200 text-purple-400 hover:text-purple-300"
                        title="Abrir artigo científico"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Artigo</span>
                      </a>
                    </div>
                    <div className="space-y-4 pl-2">
                      <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                        <p className="text-foreground mb-1">
                          <strong className="text-purple-400">Daniels, K., Gedikli, C., Watson, D., Semkina, A. & Vaughn, O. (2021).</strong> Implementing Practices Focused on Workplace Health and Well-being Programmes.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Disponível em: ScienceDirect
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="text-foreground font-semibold mb-3">Principais Achados do Estudo:</p>
                        <ul className="list-none space-y-3 text-foreground">
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>Organizações que redesenham seus processos com foco em bem-estar e eficiência obtêm ganhos significativos de produtividade e clima organizacional.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>O estudo aponta que a sobrecarga e o estresse não decorrem apenas da quantidade de trabalho, mas da falta de autonomia, clareza de papéis e processos mal definidos.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>A efetividade de programas de saúde ocupacional aumenta quando as práticas de gestão são simplificadas e humanizadas, com foco em cooperação e planejamento.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></span>
                            <span>O artigo propõe o conceito de "organizational health system", ou seja, uma gestão que mede a saúde do trabalho tanto em produtividade quanto em equilíbrio humano.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-5 mt-6">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-foreground font-semibold mb-2">Conclusão central do artigo:</p>
                            <p className="text-foreground italic leading-relaxed">
                              "Melhorar o bem-estar no trabalho exige alinhar estrutura, processos e práticas de gestão à saúde organizacional — não basta cuidar das pessoas, é preciso redesenhar o trabalho."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Aplicação Prática / Solução Viável */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Aplicação Prática / Solução Viável</h3>
                    </div>
                    <div className="space-y-4 pl-2">
                      <p className="text-foreground leading-relaxed">
                        Com base nesse estudo e na realidade identificada na AEBES, recomenda-se a criação de um <strong>Plano de Redesenho Organizacional e Saúde Ocupacional (PROSO)</strong>, voltado para otimizar fluxos, reduzir sobrecarga e humanizar a gestão do desempenho.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {/* Eixo 1 */}
                        <Card className="border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">1</span>
                              Eixo de Reestruturação e Planejamento Operacional
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Mapear processos críticos e gargalos (ex.: escalas, burocracias internas, tarefas repetitivas).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Criar grupos de melhoria contínua com representantes de cada área para revisar fluxos.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                                <span>Implementar checklists digitais e protocolos padronizados, reduzindo retrabalho e tarefas manuais.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 2 */}
                        <Card className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">2</span>
                              Eixo de Gestão Humanizada de Desempenho
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Substituir avaliações punitivas por avaliações formativas, com foco em aprendizado e melhoria.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Treinar líderes para aplicar feedback construtivo e preventivo, não apenas corretivo.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                                <span>Estabelecer metas de equipe realistas, considerando volume de pacientes e recursos disponíveis.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* Eixo 3 */}
                        <Card className="border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
                          <CardContent className="p-5">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">3</span>
                              Eixo de Carga de Trabalho e Saúde Ocupacional
                            </h4>
                            <ul className="space-y-2 text-sm text-foreground">
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Adotar indicadores de carga de trabalho e fadiga (ex.: taxa de horas extras, afastamentos, absenteísmo).</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Reforçar o dimensionamento de pessoal em setores críticos, equilibrando equipes.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                                <span>Criar protocolos de pausas obrigatórias e políticas de descanso físico e mental durante o turno.</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
              </TabsContent>
            </Tabs>
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
