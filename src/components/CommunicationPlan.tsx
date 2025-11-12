import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, TrendingUp, Target, CheckCircle2, ArrowRight, Presentation, RefreshCw, Lightbulb, Megaphone, ExternalLink, AlertTriangle } from "lucide-react";

export const CommunicationPlan = () => {
  return (
    <div className="space-y-8">
      {/* Seção 1: Importância da Comunicação */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <MessageSquare className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-2xl">1. Importância da Comunicação na Etapa Pós-Pesquisa</CardTitle>
            </div>
            <a
              href="https://www.researchgate.net/publication/351868521_Effects_of_Action_Planning_After_Employee_Surveys"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-200 text-blue-400 hover:text-blue-300"
              title="Abrir artigo no ResearchGate"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Artigo</span>
            </a>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Segundo <strong className="text-foreground">Huebner & Zacher (2021)</strong>, o impacto real de uma pesquisa de clima não está apenas em coletar dados, mas em comunicar e agir sobre eles.
          </p>

          <div className="p-5 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium mb-2">
                  A ausência de devolutiva gera frustração, descrédito e desengajamento — os colaboradores precisam perceber que suas opiniões inspiraram mudanças reais.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Quando os colaboradores não veem ações após expressarem suas opiniões, isso gera frustração e reduz a confiança no processo."
                </p>
                <p className="text-xs text-muted-foreground mt-1">(Huebner & Zacher, 2021)</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <p className="text-foreground">
              <ArrowRight className="w-4 h-4 inline mr-2 text-primary" />
              Dessa forma, comunicar o plano de ação é tão essencial quanto implementá-lo. É o elo entre o diagnóstico e a transformação cultural, e deve ser conduzido com clareza, empatia e continuidade.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Seção 2: Etapas da Comunicação */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <Presentation className="w-6 h-6 text-purple-400" />
            </div>
            <CardTitle className="text-2xl">2. Etapas da Comunicação do Plano de Ação</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            O artigo propõe que o processo de comunicação pós-pesquisa — o chamado <strong className="text-foreground">survey follow-up process</strong> — ocorra em três etapas principais, cada uma com objetivos e formatos específicos.
          </p>

          {/* Etapa 1 */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-500/20">
                <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-lg">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  Etapa 1 – Compartilhar Resultados
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Logo após a conclusão das análises, os resultados devem ser divulgados de forma transparente e acessível:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Realizar reuniões gerais e por área para apresentar os principais achados.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Utilizar recursos visuais e comparativos (dashboards, gráficos, infográficos).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Mostrar tanto pontos fortes quanto oportunidades de melhoria, evitando comunicações apenas "positivas".</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-500/30">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground font-medium mb-1">
                    A transparência inicial cria a base de confiança necessária para o engajamento nas ações
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    (Church & Oliver, 2006, citados por Huebner & Zacher, 2021)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Etapa 2 */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-500/20">
                <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-lg">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  Etapa 2 – Co-construir as Ações
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Os autores enfatizam que a participação ativa dos colaboradores aumenta a legitimidade das decisões. Assim, o plano deve ser co-criado com as equipes:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Conduzir workshops participativos para discutir os resultados e propor soluções.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Estimular os times a identificar causas e ideias práticas para melhoria em cada fator (liderança, comunicação, carreira etc.).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Registrar as contribuições e transformá-las em metas concretas e mensuráveis, com prazos e responsáveis definidos.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-purple-500/20 border border-purple-500/30">
              <div className="flex items-start gap-2">
                <Users className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground font-medium mb-1">
                    O envolvimento direto dos colaboradores aumenta a adesão ao processo de mudança
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    (Huebner & Zacher, 2021)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Etapa 3 */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-emerald-500/20">
                <div className="w-10 h-10 rounded-full bg-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-lg">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-emerald-400" />
                  Etapa 3 – Manter Comunicação Contínua
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Após o lançamento do plano de ação, a comunicação precisa ser constante e evolutiva. O plano deve "respirar" dentro da organização:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Divulgar atualizações mensais ou bimestrais sobre o andamento das iniciativas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Usar múltiplos canais (e-mail, intranet, mural físico, newsletter, reuniões curtas).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Mostrar exemplos concretos de avanços e histórias reais de melhoria.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Reforçar a mensagem de continuidade: o processo não termina com a divulgação do plano, mas se renova com cada resultado alcançado.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
              <div className="flex items-start gap-2">
                <RefreshCw className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground font-medium mb-1">
                    A ausência de acompanhamento comunica desinteresse, mesmo quando o plano está em execução.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    (Huebner & Zacher, 2021)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Seção 3: Papel da Liderança */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20">
              <Target className="w-6 h-6 text-amber-400" />
            </div>
            <CardTitle className="text-2xl">3. O Papel da Liderança na Comunicação</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Os líderes são agentes centrais na comunicação do plano. Segundo o artigo, a mudança organizacional depende de coerência e presença ativa da liderança em todo o processo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-5 rounded-lg bg-background/50 border border-border/30">
              <div className="flex items-center gap-2 mb-3">
                <Presentation className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-foreground">Apresentar Resultados</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Apresentar os resultados de sua área, interpretando o que significam.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-background/50 border border-border/30">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRight className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold text-foreground">Traduzir em Ações Locais</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Traduzir as ações corporativas em medidas locais e tangíveis.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-background/50 border border-border/30">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <h4 className="font-semibold text-foreground">Estimular Diálogo</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Estimular o diálogo, acolhendo dúvidas e sugestões.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-background/50 border border-border/30">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                <h4 className="font-semibold text-foreground">Ser Modelo</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Ser modelo de comportamento, demonstrando comprometimento com as ações.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
            <p className="text-foreground text-sm italic">
              "A mudança organizacional requer dedicação desde a alta gestão até os supervisores diretos."
            </p>
            <p className="text-xs text-muted-foreground mt-1">(Huebner & Zacher, 2021, p.4)</p>
          </div>
        </CardContent>
      </Card>

      {/* Seção 4: Boas Práticas */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
            </div>
            <CardTitle className="text-2xl">4. Boas Práticas para uma Comunicação Eficaz</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Prática Recomendada</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Efeito Esperado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/20 hover:bg-background/30 transition-colors">
                  <td className="p-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span>Treinamento rápido para líderes sobre comunicação de resultados</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-foreground">Maior adesão e consistência na mensagem</td>
                </tr>
                <tr className="border-b border-border/20 hover:bg-background/30 transition-colors">
                  <td className="p-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Presentation className="w-4 h-4 text-purple-400" />
                      <span>Apresentações visuais com indicadores claros</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-foreground">Melhor compreensão dos colaboradores</td>
                </tr>
                <tr className="border-b border-border/20 hover:bg-background/30 transition-colors">
                  <td className="p-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Sessões de feedback coletivo (times pequenos)</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-foreground">Engajamento e senso de pertencimento</td>
                </tr>
                <tr className="hover:bg-background/30 transition-colors">
                  <td className="p-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-amber-400" />
                      <span>Acompanhamento público de metas (painel de status)</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-foreground">Reforço da transparência e da cultura de melhoria contínua</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Seção 5: Estratégia Aplicada */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
              <Megaphone className="w-6 h-6 text-cyan-400" />
            </div>
            <CardTitle className="text-2xl">5. Estratégia de Comunicação Aplicada ao Plano de Clima</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Para este contexto organizacional específico, recomenda-se:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-background/50 border border-border/30 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-400 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Apresentação Oficial dos Resultados</h4>
                <p className="text-sm text-muted-foreground">
                  Apresentação oficial dos resultados gerais (Entregáveis 1–3 do dashboard).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background/50 border border-border/30 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Reuniões Setoriais</h4>
                <p className="text-sm text-muted-foreground">
                  Reuniões setoriais conduzidas pelos líderes, focando em fatores críticos (ex: Liderança, Comunicação Interna e Carreira).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background/50 border border-border/30 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-emerald-400 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Publicação Digital do Plano</h4>
                <p className="text-sm text-muted-foreground">
                  Publicação digital do Plano de Ação em formato visual (infográfico "Mapa de Compromissos").
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background/50 border border-border/30 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-amber-400 font-bold text-sm">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Follow-ups Mensais</h4>
                <p className="text-sm text-muted-foreground">
                  Follow-ups mensais, curtos e objetivos, mostrando evolução das ações.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-background/50 border border-border/30 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-cyan-400 font-bold text-sm">5</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Encerramento do Ciclo</h4>
                <p className="text-sm text-muted-foreground">
                  Encerramento do ciclo com uma devolutiva geral antes da próxima pesquisa, apresentando avanços concretos.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
            <p className="text-foreground text-sm leading-relaxed">
              Essa estrutura mantém transparência, consistência e engajamento contínuo, elementos que — conforme <strong>Huebner & Zacher (2021)</strong> — são indispensáveis para que a pesquisa de clima se transforme em uma ferramenta real de desenvolvimento organizacional.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Seção 6: Conclusão */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
              <CheckCircle2 className="w-6 h-6 text-purple-400" />
            </div>
            <CardTitle className="text-2xl">6. Conclusão</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            A comunicação do plano de ação não é apenas um repasse de informações, mas um processo estratégico de construção de confiança.
          </p>

          <div className="p-5 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium mb-2">
                  Ao comunicar de forma clara, participativa e constante, a organização transforma a pesquisa de clima em um ciclo vivo de escuta, resposta e evolução.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-background/30 border border-border/20">
                  <p className="text-sm text-foreground italic mb-1">
                    "O sucesso do plano de ação depende tanto da qualidade das ações quanto da forma como elas são comunicadas e acompanhadas."
                  </p>
                  <p className="text-xs text-muted-foreground">(Huebner & Zacher, 2021)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

