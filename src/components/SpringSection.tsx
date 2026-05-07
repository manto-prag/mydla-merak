import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

import dahliaPink from "@/assets/spring/dahlia-pink.jpg";
import peonyPink from "@/assets/spring/peony-pink.jpg";
import chrysanthemumPink from "@/assets/spring/chrysanthemum-pink.jpg";
import roseBouquet from "@/assets/spring/rose-bouquet.jpg";
import rosesOrganza from "@/assets/spring/roses-organza.jpg";
import daisiesPink from "@/assets/spring/daisies-pink.jpg";
import roseBuds from "@/assets/spring/rose-buds.jpg";
import hibiscusOval from "@/assets/spring/hibiscus-oval.jpg";

interface SpringProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
}

export const SpringSection = () => {
  const { language } = useLanguage();

  const springProducts: SpringProduct[] = [
    {
      id: 'spring-dahlia-pink',
      name: language === 'cs' ? 'Růžová dahlia' : 'Pink Dahlia',
      price: 175,
      image: dahliaPink,
      description: language === 'cs' ? 'Ručně tvarovaná dahlie – každý lístek je malé umělecké dílo.' : 'Hand-shaped dahlia – every petal is a small work of art.'
    },
    {
      id: 'spring-peony-pink',
      name: language === 'cs' ? 'Růžová pivoňka' : 'Pink Peony',
      price: 175,
      image: peonyPink,
      description: language === 'cs' ? 'Jemná pivoňka v pastelových tónech – romantika, která nikdy nezvadne.' : 'Delicate peony in pastel tones – romance that never wilts.'
    },
    {
      id: 'spring-chrysanthemum',
      name: language === 'cs' ? 'Růžová chryzantéma' : 'Pink Chrysanthemum',
      price: 165,
      image: chrysanthemumPink,
      description: language === 'cs' ? 'Symbol štěstí a radosti! Okouzlující pastelová chryzantéma do každého interiéru.' : 'Symbol of happiness and joy! Enchanting pastel chrysanthemum for any interior.'
    },
    {
      id: 'spring-rose-bouquet',
      name: language === 'cs' ? 'Mýdlová kytice růží' : 'Soap Rose Bouquet',
      price: 450,
      image: roseBouquet,
      description: language === 'cs' ? 'Luxusní kytice z ručně tvarovaných mýdlových růží a pivoněk – dárek, který nikdy neuvadne.' : 'Luxurious bouquet of hand-shaped soap roses and peonies – a gift that never wilts.',
      badge: language === 'cs' ? 'Luxus' : 'Luxury'
    },
    {
      id: 'spring-roses-organza',
      name: language === 'cs' ? 'Mýdlové růže v organze' : 'Soap Roses in Organza',
      price: 95,
      image: rosesOrganza,
      description: language === 'cs' ? 'Elegantní mýdlové růžičky v ozdobných organzových sáčcích – okouzlující drobný dárek.' : 'Elegant soap roses in decorative organza bags – a charming little gift.'
    },
    {
      id: 'spring-daisies-pink',
      name: language === 'cs' ? 'Jarní kopretiny na růžovém' : 'Spring Daisies on Pink',
      price: 155,
      image: daisiesPink,
      description: language === 'cs' ? 'Rozkvetlé kopretiny na růžovém podkladu – jaro u vás celý rok!' : 'Blooming daisies on pink base – spring at your place all year!'
    },
    {
      id: 'spring-rose-buds',
      name: language === 'cs' ? 'Mýdlo s poupátky růží' : 'Soap with Rose Buds',
      price: 185,
      image: roseBuds,
      description: language === 'cs' ? 'Zdobené skutečnými poupátky růží – romantika, která okouzlí.' : 'Adorned with real rose buds – romance that enchants.',
      badge: language === 'cs' ? 'Romantické' : 'Romantic'
    },
    {
      id: 'spring-hibiscus',
      name: language === 'cs' ? 'Oválné mýdlo s ibiškem' : 'Oval Soap with Hibiscus',
      price: 155,
      image: hibiscusOval,
      description: language === 'cs' ? 'Tropický ibišek na elegantním oválu – exotická krása, která zaujme.' : 'Tropical hibiscus on elegant oval – exotic beauty that captivates.'
    },
  ];

  const handleQuickOrder = (product: SpringProduct) => {
    const subject = encodeURIComponent(language === 'cs' ? `Jarní objednávka: ${product.name}` : `Spring order: ${product.name}`);
    const body = encodeURIComponent(language === 'cs'
      ? `Dobrý den,\n\nráda bych si objednala jarní mýdlo:\n\n${product.name}\nCena: ${product.price} Kč\n\nDěkuji,`
      : `Hello,\n\nI would like to order:\n\n${product.name}\nPrice: ${product.price} CZK\n\nThank you,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 gradient-premium relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div className="absolute top-16 left-16 text-7xl" style={{ animation: 'pulse 4s ease-in-out infinite' }}>🌸</div>
        <div className="absolute top-48 right-24 text-5xl" style={{ animation: 'pulse 4s ease-in-out infinite 1.5s' }}>🌷</div>
        <div className="absolute bottom-24 left-1/4 text-6xl" style={{ animation: 'pulse 4s ease-in-out infinite 3s' }}>🌺</div>
        <div className="absolute top-1/3 right-1/4 text-4xl" style={{ animation: 'pulse 4s ease-in-out infinite 0.8s' }}>✿</div>
        <div className="absolute bottom-48 right-16 text-6xl" style={{ animation: 'pulse 4s ease-in-out infinite 2s' }}>🌻</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-8 border border-secondary/20">
            🌸 {language === 'cs' ? 'Jarní kolekce 2026' : 'Spring Collection 2026'} 🌸
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight">
            {language === 'cs' ? 'Jarní kolekce' : 'Spring Collection'}
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-4 font-light">
            {language === 'cs'
              ? 'Přivítejte jaro s naší květinovou kolekcí. Ručně tvarované růže, pivoňky, dahlie a kopretiny – každý květ je malé umělecké dílo plné jarních barev a vůní.'
              : 'Welcome spring with our floral collection. Hand-shaped roses, peonies, dahlias and daisies – every flower is a small work of art full of spring colors and scents.'}
          </p>
          <p className="text-base text-secondary font-medium italic">
            {language === 'cs'
              ? '— Květiny, které nikdy neuvadnou —'
              : '— Flowers that never wilt —'}
          </p>
        </div>

        {/* Offer banner */}
        <div className="mb-14 p-6 gradient-card rounded-2xl text-center border border-secondary/15 shadow-rose">
          <p className="text-base font-medium text-primary">
            🌷 {language === 'cs' ? 'Doručení zdarma při objednávce nad 5 kusů' : 'Free delivery on orders over 5 pieces'} 🌷
          </p>
          <p className="text-sm text-muted-foreground mt-1 italic">
            {language === 'cs' ? 'Každý květ je ručně vyráběný originál' : 'Every flower is a handmade original'}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {springProducts.map((product) => (
            <div key={product.id} className="gradient-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] border border-secondary/10 group">
              <div className="aspect-square relative overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-smooth group-hover:scale-105"
                  loading="lazy"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-primary mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{product.price} Kč</span>
                  <Button
                    variant="default"
                    size="sm"
                    className="rounded-full"
                    onClick={() => handleQuickOrder(product)}
                  >
                    {language === 'cs' ? 'Objednat' : 'Order'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spring Banner */}
        <div className="mt-16 gradient-card rounded-3xl p-8 md:p-12 text-center border border-secondary/15 shadow-elegant">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            🌺 {language === 'cs' ? 'Květiny, které nikdy neuvadnou!' : 'Flowers That Never Wilt!'} 🌺
          </h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-6">
            {language === 'cs'
              ? 'Darujte krásu jarních květin v podobě luxusních ručně vyráběných mýdel. Každý kousek voní a potěší celé měsíce.'
              : 'Give the beauty of spring flowers as luxury handmade soaps. Every piece smells wonderful and delights for months.'}
          </p>
          <Button
            size="lg"
            className="rounded-full px-8"
            onClick={() => {
              const subject = encodeURIComponent(language === 'cs' ? 'Jarní objednávka - květinová kolekce' : 'Spring order - floral collection');
              const body = encodeURIComponent(language === 'cs'
                ? 'Dobrý den,\n\nmám zájem o jarní květinovou kolekci mýdel.\n\nDěkuji,'
                : 'Hello,\n\nI am interested in the spring floral soap collection.\n\nThank you,');
              window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
            }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            {language === 'cs' ? 'Objednat celou kolekci' : 'Order Full Collection'}
          </Button>
        </div>
      </div>
    </section>
  );
};
