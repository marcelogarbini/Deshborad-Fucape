import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const allSectorsData = [
  { name: "HIGIENIZACAO", count: 60 },
  { name: "CENTRO CIRURGICO", count: 54 },
  { name: "UTI", count: 50 },
  { name: "UTIN", count: 44 },
  { name: "MATERNIDADE", count: 44 },
  { name: "PRONTO SOCORRO", count: 42 },
  { name: "CME", count: 40 },
  { name: "ATENDIMENTO AO CLIENTE", count: 26 },
  { name: "FARMACIA", count: 25 },
  { name: "HEMODIALISE", count: 24 },
  { name: "AMBULATORIO", count: 23 },
  { name: "CTQ", count: 23 },
  { name: "CTI", count: 22 },
  { name: "INTERNACAO", count: 19 },
  { name: "ENDOSCOPIA", count: 17 },
  { name: "RECURSOS HUMANOS", count: 15 },
  { name: "USI", count: 15 },
  { name: "UTQ", count: 13 },
  { name: "SAME", count: 13 },
  { name: "LACTARIO", count: 12 },
  { name: "MANUTENCAO", count: 11 },
  { name: "NIR", count: 11 },
  { name: "EQUIPE MULTI", count: 10 },
  { name: "OUVIDORIA", count: 10 },
  { name: "ALMOXARIFADO", count: 10 },
  { name: "ROUPARIA", count: 8 },
  { name: "SND", count: 8 },
  { name: "DIRECAO GERAL", count: 8 },
  { name: "TI", count: 8 },
  { name: "DEPARTAMENTO PESSOAL", count: 7 },
  { name: "UCIN", count: 7 },
  { name: "UTIN/UCIN", count: 7 },
  { name: "SCIH", count: 6 },
  { name: "6A", count: 6 },
  { name: "QUALIDADE", count: 6 },
  { name: "FARMACIA CENTRAL", count: 6 },
  { name: "SEMI INTENSIVA", count: 5 },
  { name: "ENGENHARIA CLINICA", count: 5 },
  { name: "COMPRAS", count: 5 },
  { name: "MORGUE", count: 5 },
  { name: "CENTRO OBSTETRICO", count: 5 },
  { name: "AUXILIAR DE SERVICOS GERAIS", count: 4 },
  { name: "DIRECAO", count: 4 },
  { name: "LIMPEZA", count: 4 },
  { name: "RECEPCAO", count: 4 },
  { name: "INFRAESTRUTURA", count: 4 },
  { name: "UNIDADE SEMI INTENSIVA", count: 4 },
  { name: "SEGURANCA DO TRABALHO", count: 3 },
  { name: "TECNOLOGIA DA INFORMACAO", count: 3 },
  { name: "EQUIPE MULTIDISCIPLINAR", count: 3 },
  { name: "MEDICINA DO TRABALHO", count: 3 },
  { name: "5 ANDAR", count: 3 },
  { name: "SESMT", count: 3 },
  { name: "5A", count: 3 },
  { name: "FATURAMENTO", count: 3 },
  { name: "AGENCIA TRANSFUSIONAL", count: 3 },
  { name: "ASG", count: 3 },
  { name: "OUTROS", count: 160 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-3 rounded-lg shadow-lg">
        <p className="text-foreground font-semibold">{payload[0].payload.name}</p>
        <p className="text-primary">{payload[0].value} colaboradores</p>
      </div>
    );
  }
  return null;
};

export const TopSectors = () => {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl">Setores por Número de Colaboradores</CardTitle>
        <p className="text-sm text-muted-foreground">Total de {allSectorsData.length} setores mapeados</p>
      </CardHeader>
      <CardContent>
        <div className="h-[600px] overflow-y-auto pr-2">
          <ResponsiveContainer width="100%" height={allSectorsData.length * 35}>
            <BarChart data={allSectorsData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
              <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" width={200} tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" fill="hsl(var(--chart-4))" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
