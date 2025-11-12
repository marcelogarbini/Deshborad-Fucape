import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const allSectorsData = [
  { name: "UTI", count: 50 },
  { name: "UTIN", count: 44 },
  { name: "MATERNIDADE", count: 43 },
  { name: "CME", count: 40 },
  { name: "CENTRO CIRÚRGICO", count: 29 },
  { name: "ATENDIMENTO AO CLIENTE", count: 25 },
  { name: "CTQ", count: 23 },
  { name: "HIGIENIZAÇÃO", count: 23 },
  { name: "CTI", count: 22 },
  { name: "PRONTO SOCORRO", count: 21 },
  { name: "PS", count: 21 },
  { name: "HEMODIÁLISE", count: 19 },
  { name: "INTERNAÇÃO", count: 19 },
  { name: "CENTRO CIRURGICO", count: 19 },
  { name: "ENDOSCOPIA", count: 17 },
  { name: "FARMÁCIA", count: 17 },
  { name: "HIGIENIZACAO", count: 15 },
  { name: "USI", count: 15 },
  { name: "SAME", count: 13 },
  { name: "AMBULATÓRIO", count: 13 },
  { name: "UTQ", count: 13 },
  { name: "RH", count: 12 },
  { name: "NIR", count: 11 },
  { name: "AMBULATORIO", count: 10 },
  { name: "EQUIPE MULTI", count: 10 },
  { name: "OUVIDORIA", count: 10 },
  { name: "ALMOXARIFADO", count: 10 },
  { name: "MANUTENÇÃO", count: 9 },
  { name: "FARMACIA", count: 8 },
  { name: "TI", count: 8 },
  { name: "ROUPARIA", count: 8 },
  { name: "SND", count: 8 },
  { name: "LACTÁRIO", count: 7 },
  { name: "DIREÇÃO GERAL", count: 7 },
  { name: "UCIN", count: 7 },
  { name: "HIGIENIZAÇAO", count: 7 },
  { name: "QUALIDADE", count: 6 },
  { name: "SCIH", count: 6 },
  { name: "6A", count: 6 },
  { name: "UTIN/UCIN", count: 5 },
  { name: "FARMÁCIA CENTRAL", count: 5 },
  { name: "MORGUE", count: 5 },
  { name: "ENGENHARIA CLÍNICA", count: 5 },
  { name: "LACTARIO", count: 5 },
  { name: "SEMI INTENSIVA", count: 5 },
  { name: "COMPRAS", count: 5 },
  { name: "HEMODIALISE", count: 5 },
  { name: "DEPARTAMENTO PESSOAL", count: 4 },
  { name: "CC", count: 4 },
  { name: "AUXILIAR DE SERVIÇOS GERAIS", count: 4 },
  { name: "INFRAESTRUTURA", count: 4 },
  { name: "DIREÇÃO", count: 4 },
  { name: "LIMPEZA", count: 4 },
  { name: "CENTRO OBSTETRICO", count: 3 },
  { name: "UNIDADE SEMI INTENSIVA", count: 3 },
  { name: "RECEPÇÃO", count: 3 },
  { name: "ASG", count: 3 },
  { name: "MEDICINA DO TRABALHO", count: 3 },
  { name: "5A", count: 3 },
  { name: "5 ANDAR", count: 3 },
  { name: "FATURAMENTO", count: 3 },
  { name: "SESMT", count: 3 },
  { name: "RECURSOS HUMANOS", count: 3 },
  { name: "SEGURANÇA DO TRABALHO", count: 3 },
  { name: "EQUIPE MULTIDISCIPLINAR", count: 3 },
  { name: "TECNOLOGIA DA INFORMAÇÃO", count: 3 },
  { name: "Outros (< 3 colaboradores)", count: 177 },
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
