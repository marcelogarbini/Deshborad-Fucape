import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Users, Target } from "lucide-react";

export const SampleSize = () => {
  // Dados do cálculo do tamanho da amostra
  const totalPopulation = 2254; // População total
  const sampleSize = 949;
  const responseRate = 42.1; // Taxa de resposta calculada: 949/2254 = 42.1%

  return (
    <div className="space-y-6">
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Calculator className="w-6 h-6" />
            Cálculo do Tamanho da Amostra
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Metodologia e resultados do dimensionamento amostral
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Método de Cálculo */}
          <div>
            <h3 className="font-semibold text-lg mb-3">📊 Metodologia</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O tamanho da amostra foi calculado considerando a população total de colaboradores.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A fórmula utilizada foi baseada em amostragem probabilística simples para população finita,
              garantindo representatividade estatística adequada para as inferências propostas.
            </p>
          </div>

          {/* Resultados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">População Total</p>
                    <p className="text-2xl font-bold">{totalPopulation.toLocaleString()} colaboradores</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent to-chart-4">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Amostra Obtida</p>
                    <p className="text-2xl font-bold">{sampleSize.toLocaleString()} respondentes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Parâmetros do Cálculo */}
          <div>
            <h3 className="font-semibold text-lg mb-3">⚙️ Parâmetros Estatísticos</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground">Taxa de Resposta:</span>
                <span className="font-semibold">{responseRate}%</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground">Precisão da Amostra:</span>
                <span className="font-semibold text-green-600">✅ Adequada</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};











