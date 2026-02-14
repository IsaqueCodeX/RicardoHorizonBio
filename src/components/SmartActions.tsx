import { Calculator, MessageCircle } from "lucide-react";

export function SmartActions() {
  return (
    <div className="flex flex-col gap-3">
      <button className="w-full flex items-center justify-center gap-2 rounded-sm border border-border bg-card py-3.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-colors">
        <Calculator size={18} className="text-primary" />
        Avalie seu Imóvel Grátis
      </button>

      <button className="w-full flex items-center justify-center gap-2 rounded-sm bg-[hsl(142,70%,35%)] text-[hsl(0,0%,100%)] py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity">
        <MessageCircle size={18} />
        Falar no WhatsApp
      </button>
    </div>
  );
}
