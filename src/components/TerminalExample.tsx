import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TerminalExample = () => {
  return (
    <div className="space-y-6">
      {/* Exemplo de Terminal */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">Exemplo de Uso no Terminal</CardTitle>
          <p className="text-sm text-muted-foreground">
            Simulação básica de como a IA foi utilizada via terminal durante o desenvolvimento
          </p>
        </CardHeader>
        <CardContent>
          <div className="bg-[#1e1e1e] rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <div className="space-y-2">
              {/* Prompt do usuário */}
              <div className="flex items-start gap-2">
                <span className="text-green-400 flex-shrink-0">$</span>
                <span className="text-gray-300">
                  # Exemplo de prompt utilizado (genérico, sem dados sensíveis)
                </span>
              </div>
              
              <div className="flex items-start gap-2 ml-4">
                <span className="text-blue-400 flex-shrink-0">{">"}</span>
                <span className="text-gray-200">
                  Como criar um componente React com TypeScript que exiba dados em formato de card?
                </span>
              </div>

              {/* Resposta da IA */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 flex-shrink-0">AI:</span>
                  <div className="text-gray-300 space-y-2">
                    <div>
                      <span className="text-green-300">import</span>{" "}
                      <span className="text-yellow-300">{"{ Card, CardContent, CardHeader, CardTitle }"}</span>{" "}
                      <span className="text-green-300">from</span>{" "}
                      <span className="text-yellow-300">"@/components/ui/card"</span>;
                    </div>
                    <div>
                      <span className="text-green-300">export const</span>{" "}
                      <span className="text-blue-300">MyComponent</span>{" "}
                      <span className="text-green-300">=</span>{" "}
                      <span className="text-yellow-300">()</span>{" "}
                      <span className="text-green-300">=&gt;</span>{" "}
                      <span className="text-yellow-300">{"{"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-green-300">return</span>{" "}
                      <span className="text-yellow-300">(</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-yellow-300">{"<Card>"}</span>
                    </div>
                    <div className="ml-12">
                      <span className="text-yellow-300">{"<CardHeader>"}</span>
                    </div>
                    <div className="ml-16">
                      <span className="text-yellow-300">{"<CardTitle>"}</span>
                      Título do Card
                      <span className="text-yellow-300">{"</CardTitle>"}</span>
                    </div>
                    <div className="ml-12">
                      <span className="text-yellow-300">{"</CardHeader>"}</span>
                    </div>
                    <div className="ml-12">
                      <span className="text-yellow-300">{"<CardContent>"}</span>
                    </div>
                    <div className="ml-16 text-gray-400">
                      {/* Conteúdo aqui */}
                    </div>
                    <div className="ml-12">
                      <span className="text-yellow-300">{"</CardContent>"}</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-yellow-300">{"</Card>"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-yellow-300">);</span>
                    </div>
                    <div>
                      <span className="text-yellow-300">{"};"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comando de execução */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 flex-shrink-0">$</span>
                  <span className="text-gray-300">
                    # O código foi implementado localmente, sem compartilhar dados reais
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-green-400 flex-shrink-0">$</span>
                <span className="text-gray-300">
                  npm run dev
                </span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-green-400 flex-shrink-0">$</span>
                <span className="text-gray-300">
                  # Servidor iniciado - dados confidenciais permanecem no ambiente local
                </span>
              </div>
            </div>
          </div>

          {/* Nota de segurança */}
          <div className="mt-4 p-4 bg-muted/30 border border-border/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Nota de Segurança:</strong>{" "}
              Durante todo o processo de desenvolvimento, nenhum dado real da pesquisa foi compartilhado 
              com a IA. Apenas estruturas de código genéricas, padrões de design e exemplos abstratos 
              foram utilizados nos prompts. Todos os dados confidenciais permaneceram exclusivamente 
              no ambiente local de desenvolvimento.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

