import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CORRECT_PASSWORD = "trocar123@";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password === CORRECT_PASSWORD) {
      setIsSuccess(true);
      // Salvar autenticação no localStorage
      localStorage.setItem("isAuthenticated", "true");
      
      // Animação de sucesso antes de redirecionar
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError("Senha incorreta. Tente novamente.");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 border-0 shadow-2xl bg-card/95 backdrop-blur-sm">
        {!isSuccess ? (
          <>
            <CardHeader className="space-y-1 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Acesso ao Dashboard
              </CardTitle>
              <CardDescription className="text-base">
                Digite sua senha para continuar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    className="h-12 text-lg"
                    autoFocus
                  />
                  {error && (
                    <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1">
                      {error}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold"
                  disabled={!password}
                >
                  Entrar
                </Button>
              </form>
            </CardContent>
          </>
        ) : (
          <CardContent className="py-12">
            <div className="flex flex-col items-center justify-center space-y-6 animate-in fade-in zoom-in duration-500">
              {/* Success Animation */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
                    <CheckCircle2 className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Sparkles Animation */}
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="h-6 w-6 text-yellow-400 animate-bounce"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: "1s",
                    }}
                  />
                ))}
              </div>

              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">
                  Acesso Autorizado!
                </h2>
                <p className="text-muted-foreground">
                  Redirecionando para o dashboard...
                </p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes scale-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Login;

