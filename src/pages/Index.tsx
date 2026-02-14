import agentPhoto from "@/assets/agent-photo.jpg";
import featuredHouse from "@/assets/featured-house.jpg";
import listingPenthouse from "@/assets/listing-penthouse.jpg";
import listingBeach from "@/assets/listing-beach.jpg";
import listingApartment from "@/assets/listing-apartment.jpg";
import { AgentHeader } from "@/components/AgentHeader";
import { FeaturedListing } from "@/components/FeaturedListing";
import { Gallery } from "@/components/Gallery";
import { QuickFilters } from "@/components/QuickFilters";
import { SmartActions } from "@/components/SmartActions";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ScrollReveal } from "@/components/ScrollReveal";

const galleryListings = [
  {
    image: listingPenthouse,
    title: "Cobertura Duplex — Jardins",
    beds: 3,
    baths: 4,
    area: "280m²",
    price: "R$ 4.200.000",
    tag: "Cobertura",
  },
  {
    image: listingBeach,
    title: "Villa Frente Mar — Guarujá",
    beds: 5,
    baths: 6,
    area: "520m²",
    price: "R$ 6.800.000",
    tag: "Litoral",
  },
  {
    image: listingApartment,
    title: "Apartamento Alto Padrão — Itaim",
    beds: 2,
    baths: 3,
    area: "180m²",
    price: "R$ 1.950.000",
    tag: "Apartamento",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen relative" style={{ background: 'linear-gradient(160deg, hsl(195 80% 6%) 0%, hsl(200 60% 10%) 40%, hsl(207 40% 12%) 100%)' }}>
      <ParticleBackground />

      <div className="relative z-10 flex justify-center">
        <div className="w-full max-w-md px-5 py-12 flex flex-col gap-10">
          <ScrollReveal>
            <AgentHeader
              photo={agentPhoto}
              name="Ricardo Horizon"
              subtitle="Especialista em Alto Padrão | CRECI 12345"
              badge="🏆 Top Seller 2025"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <FeaturedListing
              image={featuredHouse}
              label="Imóvel da Semana"
              beds={4}
              baths={5}
              area="400m²"
              price="R$ 2.500.000"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <QuickFilters />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Gallery listings={galleryListings} />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SmartActions />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <Footer />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Index;
