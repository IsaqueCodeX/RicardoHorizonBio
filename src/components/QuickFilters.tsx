import { Home, Building2, Palmtree, Gem } from "lucide-react";

const filters = [
  { icon: Home, label: "Casas" },
  { icon: Building2, label: "Apartamentos" },
  { icon: Palmtree, label: "Litoral" },
  { icon: Gem, label: "Coberturas" },
];

export function QuickFilters() {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
      {filters.map((f) => (
        <button
          key={f.label}
          className="flex items-center gap-2 whitespace-nowrap rounded-sm border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
        >
          <f.icon size={16} />
          {f.label}
        </button>
      ))}
    </div>
  );
}
