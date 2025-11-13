import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateSystemPrompt } from "@/data/dashboardContext";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Olá! Sou o IaBot AEBES, seu assistente especializado no Dashboard de Clima Organizacional. Tenho acesso completo a todos os dados do dashboard, incluindo:\n\n📊 Visão geral e demografia\n📈 Todos os 12 fatores de clima organizacional\n📉 Médias e desvios padrão\n⚠️ Pontos críticos e fortes\n💬 Análises das questões 42 e 43\n🏥 Setores com maior participação\n\nComo posso ajudá-lo hoje? Posso responder perguntas sobre os dados, explicar resultados, identificar pontos críticos e fornecer insights baseados na pesquisa.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input.trim();
    setInput("");
    setIsLoading(true);

    try {
      // API Key - Apenas de variável de ambiente (nunca hardcoded!)
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

      if (!apiKey || apiKey === "your_openai_api_key_here") {
        throw new Error("API Key não configurada. Por favor, configure VITE_OPENAI_API_KEY no arquivo .env.local");
      }

      // Preparar mensagens para a API (incluindo histórico)
      // Filtrar mensagens de erro anteriores e manter apenas conversas válidas
      const validMessages = messages.filter(
        (msg) => !msg.content.includes("❌ Erro") && !msg.content.includes("API Key não configurada")
      );
      
      const messagesForAPI = validMessages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o", // Modelo mais recente disponível (GPT-5 ainda não foi lançado)
          messages: [
            {
              role: "system",
              content: generateSystemPrompt(),
            },
            ...messagesForAPI,
          ],
          temperature: 0.7,
          max_tokens: 4000, // Aumentado para aproveitar melhor o GPT-4o
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error?.message || `Erro na API: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      const assistantContent = data.choices[0]?.message?.content || "Desculpe, não consegui gerar uma resposta.";

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: assistantContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Erro ao chamar API da OpenAI:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: error instanceof Error 
          ? `❌ Erro: ${error.message}\n\nPor favor, verifique se você configurou a API Key da OpenAI no arquivo .env.local com o nome VITE_OPENAI_API_KEY.`
          : "Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-h-[800px] bg-background">
      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3",
              message.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            {message.role === "assistant" && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
            )}
            <Card
              className={cn(
                "max-w-[80%] md:max-w-[70%]",
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              )}
            >
              <CardContent className="p-3">
                <p className="text-sm whitespace-pre-wrap break-words">
                  {message.content}
                </p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </CardContent>
            </Card>
            {message.role === "user" && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <Card className="bg-muted max-w-[80%] md:max-w-[70%]">
              <CardContent className="p-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-border/50 p-4 bg-card/50 backdrop-blur-sm">
        <div className="flex gap-2 items-end">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua mensagem... (Enter para enviar, Shift+Enter para nova linha)"
            className="min-h-[60px] max-h-[200px] resize-none flex-1"
            rows={1}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            size="icon"
            className="h-[60px] w-[60px] shrink-0"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          IaBot AEBES - Assistente de IA para o Dashboard de Clima Organizacional
        </p>
      </div>
    </div>
  );
};

