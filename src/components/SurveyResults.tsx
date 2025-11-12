import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const surveyQuestions = [
  { id: 5, text: "Ambiente favorece bem-estar físico e emocional", mean: 2.97, std: 1.07 },
  { id: 6, text: "Equilíbrio vida profissional e pessoal", mean: 3.90, std: 0.91 },
  { id: 7, text: "Empresa promove iniciativas de bem-estar", mean: 2.93, std: 1.10 },
  { id: 8, text: "Tenho orgulho de trabalhar nesta empresa", mean: 3.74, std: 0.88 },
  { id: 10, text: "Empresa valoriza a diversidade", mean: 3.83, std: 0.88 },
  { id: 11, text: "Sustentabilidade nas decisões da empresa", mean: 3.25, std: 0.98 },
  { id: 12, text: "Sou respeitado e valorizado", mean: 3.34, std: 1.09 },
  { id: 13, text: "Líder acessível e aberto ao diálogo", mean: 3.83, std: 1.06 },
  { id: 14, text: "Líderes agem de acordo com o que dizem", mean: 3.32, std: 1.08 },
  { id: 15, text: "Recebo feedbacks construtivos e frequentes", mean: 3.17, std: 1.20 },
  { id: 16, text: "Processos internos claros e definidos", mean: 3.41, std: 1.03 },
  { id: 17, text: "Ferramentas e recursos adequados", mean: 3.50, std: 1.04 },
  { id: 18, text: "Há organização e planejamento no setor", mean: 3.60, std: 1.02 },
  { id: 19, text: "Acesso a oportunidades de aprendizado", mean: 3.48, std: 1.04 },
  { id: 20, text: "Treinamentos são relevantes", mean: 3.70, std: 0.96 },
  { id: 21, text: "Empresa incentiva desenvolvimento contínuo", mean: 3.27, std: 1.08 },
  { id: 22, text: "Sei como meu trabalho contribui", mean: 4.02, std: 0.79 },
  { id: 23, text: "Empresa compartilha metas e conquistas", mean: 3.33, std: 1.10 },
  { id: 24, text: "Canais de comunicação são eficazes", mean: 3.39, std: 1.01 },
  { id: 25, text: "Recebo informações relevantes", mean: 3.59, std: 0.94 },
  { id: 26, text: "Sou ouvido quando expresso opiniões", mean: 3.23, std: 1.12 },
  { id: 27, text: "Empresa promove saúde dos colaboradores", mean: 3.05, std: 1.13 },
  { id: 28, text: "Condições de trabalho são seguras", mean: 3.46, std: 1.02 },
  { id: 29, text: "Qualidade de vida é preocupação real", mean: 3.09, std: 1.08 },
  { id: 30, text: "Clareza sobre oportunidades de crescimento", mean: 3.04, std: 1.17 },
  { id: 31, text: "Sou valorizado na função atual", mean: 3.09, std: 1.15 },
  { id: 32, text: "Empresa valoriza desenvolvimento interno", mean: 3.03, std: 1.12 },
  { id: 33, text: "Liberdade para tomar decisões", mean: 3.14, std: 1.08 },
  { id: 34, text: "Minhas ideias são consideradas", mean: 3.14, std: 1.04 },
  { id: 35, text: "Incentivo a contribuir com melhorias", mean: 3.40, std: 1.01 },
  { id: 36, text: "Bom relacionamento com colegas", mean: 4.08, std: 0.80 },
  { id: 37, text: "Ambiente colaborativo e respeitoso", mean: 3.58, std: 1.03 },
  { id: 38, text: "Espírito de equipe e cooperação", mean: 3.34, std: 1.08 },
  { id: 39, text: "Avaliação de resultados é clara", mean: 3.46, std: 1.08 },
  { id: 40, text: "Salário é justo", mean: 2.24, std: 1.17 },
  { id: 41, text: "Benefícios atendem necessidades", mean: 2.52, std: 1.20 },
];

const getColorForMean = (mean: number) => {
  if (mean >= 4) return "text-accent";
  if (mean >= 3.5) return "text-primary";
  if (mean >= 3) return "text-chart-4";
  if (mean >= 2.5) return "text-chart-5";
  return "text-destructive";
};

export const SurveyResults = () => {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl">Resultados da Pesquisa de Clima (Média e Desvio Padrão)</CardTitle>
        <p className="text-sm text-muted-foreground">Escala de 1 a 5</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
          {surveyQuestions.map((question) => (
            <div key={question.id} className="space-y-2 p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-colors">
              <div className="flex justify-between items-start gap-4">
                <p className="text-sm flex-1">{question.text}</p>
                <div className="flex gap-4 items-center">
                  <span className={`font-bold text-lg ${getColorForMean(question.mean)}`}>
                    {question.mean.toFixed(2)}
                  </span>
                  <span className="text-xs text-muted-foreground">σ: {question.std.toFixed(2)}</span>
                </div>
              </div>
              <Progress value={(question.mean / 5) * 100} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
