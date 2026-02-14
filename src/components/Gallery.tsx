import { Bed, Bath, Maximize } from "lucide-react";

interface Listing {
  image: string;
  title: string;
  beds: number;
  baths: number;
  area: string;
  price: string;
  tag: string;
}

interface GalleryProps {
  listings: Listing[];
}

export function Gallery({ listings }: GalleryProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
        Outros Imóveis
      </h2>
      <div className="grid gap-4">
        {listings.map((l, i) => (
          <div key={i} className="card-imperial card-reflection rounded-sm bg-card flex overflow-hidden">
            <div className="relative w-24 sm:w-32 min-h-[120px] flex-shrink-0">
              <img src={l.image} alt={l.title} className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 text-[10px] btn-silver px-2 py-0.5 rounded-sm">
                {l.tag}
              </span>
            </div>
            <div className="p-3 flex flex-col justify-between flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-foreground truncate">{l.title}</h3>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                <span className="flex items-center gap-1"><Bed size={12} />{l.beds}</span>
                <span className="flex items-center gap-1"><Bath size={12} />{l.baths}</span>
                <span className="flex items-center gap-1"><Maximize size={12} />{l.area}</span>
              </div>
              <p className="text-sm font-bold price-glow w-fit mt-1">{l.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
