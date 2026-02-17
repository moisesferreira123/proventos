import { TrendingUp } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-40 flex items-center justify-between px-8">
      <div className="flex items-center gap-2 text-primary">
        <TrendingUp size={20} />
        <span className="text-md font-medium text-foreground">Proventos</span>
      </div>
      <div>
        {/* Colocar usuário */}
      </div>
    </header>
  );
}