import { Bed, Bath, Maximize, ChevronRight } from "lucide-react";

interface FeaturedListingProps {
  image: string;
  label: string;
  beds: number;
  baths: number;
  area: string;
  price: string;
}

export function FeaturedListing({ image, label, beds, baths, area, price }: FeaturedListingProps) {
  return (
    <article className="card-imperial card-reflection rounded-sm bg-card">
      <div className="relative">
        <img
          src={image}
          alt="Featured property"
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-3 left-3 btn-silver text-xs px-3 py-1 rounded-sm">
          {label}
        </span>
      </div>

      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Bed size={16} className="text-primary" />
            {beds} Quartos
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={16} className="text-primary" />
            {baths} Banheiros
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize size={16} className="text-primary" />
            {area}
          </span>
        </div>

        <p className="text-2xl font-extrabold price-glow tracking-tight w-fit">{price}</p>

        <button className="w-full flex items-center justify-center gap-2 btn-silver py-3 rounded-sm text-sm">
          Ver Fotos & Detalhes
          <ChevronRight size={18} />
        </button>
      </div>
    </article>
  );
}
