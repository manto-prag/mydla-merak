import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

import dahliaPink from "@/assets/spring/dahlia-pink.png";
import peonyPink from "@/assets/spring/peony-pink.png";
import chrysanthemumPink from "@/assets/spring/chrysanthemum-pink.png";
import roseBouquet from "@/assets/spring/rose-bouquet.jpg";
import rosesOrganza from "@/assets/spring/roses-organza.jpg";

import roseBuds from "@/assets/spring/rose-buds.png";
import hibiscusOval from "@/assets/spring/hibiscus-oval.png";
import diamondOrganza from "@/assets/spring/diamond-organza.jpg";
import peonyCollection from "@/assets/spring/peony-collection.jpg";
import mandalaRoses from "@/assets/spring/mandala-roses.jpg";
import fourLeafClovers from "@/assets/spring/four-leaf-clovers.png";
import massageNubs from "@/assets/spring/massage-nubs.png";

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
      name: language === 'cs' ? 'Voňavá kytice růží' : 'Fragrance product Rose Bouquet',
      price: 450,
      image: roseBouquet,
      description: language === 'cs' ? 'Luxusní kytice z ručně tvarovaných voňavých růží a pivoněk – dárek, který nikdy neuvadne.' : 'Luxurious bouquet of hand-shaped fragrance product roses and peonies – a gift that never wilts.',
      badge: language === 'cs' ? 'Luxus' : 'Luxury'
    },
    {
      id: 'spring-roses-organza',
      name: language === 'cs' ? 'Voňavé růže v organze' : 'Fragrance product Roses in Organza',
      price: 95,
      image: rosesOrganza,
      description: language === 'cs' ? 'Elegantní voňavé růžičky v ozdobných organzových sáčcích – okouzlující drobný dárek.' : 'Elegant fragrance product roses in decorative organza bags – a charming little gift.'
    },


    {
      id: 'spring-rose-buds',
      name: language === 'cs' ? 'Voňavý výrobek s poupátky růží' : 'Fragrance product with Rose Buds',
      price: 185,
      image: roseBuds,
      description: language === 'cs' ? 'Zdobené skutečnými poupátky růží – romantika, která okouzlí.' : 'Adorned with real rose buds – romance that enchants.',
      badge: language === 'cs' ? 'Romantické' : 'Romantic'
    },
    {
      id: 'spring-hibiscus',
      name: language === 'cs' ? 'Oválný voňavý výrobek s ibiškem' : 'Oval Fragrance product with Hibiscus',
      price: 155,
      image: hibiscusOval,
      description: language === 'cs' ? 'Tropický ibišek na elegantním oválu – exotická krása, která zaujme.' : 'Tropical hibiscus on elegant oval – exotic beauty that captivates.'
    },
    {
      id: 'spring-diamond-organza',
      name: language === 'cs' ? 'Srdíčka' : 'Hearts',
      price: 75,
      image: diamondOrganza,
      description: language === 'cs' ? 'Pastelová srdíčka v jemných organzových sáčcích s červenou mašlí – elegantní drobnost pro každou příležitost.' : 'Pastel hearts in delicate organza pouches with a red bow – an elegant little touch for any occasion.',
      badge: language === 'cs' ? 'Novinka' : 'New'
    },
    {
      id: 'spring-peony-collection',
      name: language === 'cs' ? 'Kolekce pivoněk' : 'Peony Collection',
      price: 285,
      image: peonyCollection,
      description: language === 'cs' ? 'Devítidílná kolekce pastelových pivoněk a růží – něžné odstíny, které potěší oko i duši.' : 'Nine-piece collection of pastel peonies and roses – tender shades that delight the eye and soul.'
    },
    {
      id: 'spring-mandala-roses',
      name: language === 'cs' ? 'Lotos s růžemi' : 'Lotus with Roses',
      price: 295,
      image: mandalaRoses,
      description: language === 'cs' ? 'Centrální lotos obklopený pastelovými růžemi a poupaty – harmonická kompozice plná detailů.' : 'Central lotus surrounded by pastel roses and buds – a harmonious composition full of detail.'
    },
    {
      id: 'four-leaf-clovers',
      name: language === 'cs' ? 'Čtyřlístky pro štěstí' : 'Four-Leaf Clovers for Luck',
      price: 145,
      image: fourLeafClovers,
      description: language === 'cs' ? 'Darujte štěstí! Čtyřlístky, které přinesou radost a úsměv do každého prostoru.' : 'Gift happiness! Four-leaf clovers that bring joy and smiles to any space.',
      badge: language === 'cs' ? 'Pro štěstí' : 'Lucky charm'
    },
    {
      id: 'massage-nubs',
      name: language === 'cs' ? 'Masážní výstupky' : 'Massage Nubs',
      price: 135,
      image: massageNubs,
      description: language === 'cs' ? 'Reliéfní výstupky a jemná vůně – dekorativní kousek s wellness atmosférou.' : 'Relief nubs and a delicate scent – a decorative piece with wellness atmosphere.'
    },
  ];

  const handleQuickOrder = (product: SpringProduct) => {
    const subject = encodeURIComponent(language === 'cs' ? `Objednávka: ${product.name}` : `Order: ${product.name}`);
    const body = encodeURIComponent(language === 'cs'
      ? `Dobrý den,\n\nráda bych si objednala voňavý výrobek:\n\n${product.name}\nCena: ${product.price} Kč\n\nDěkuji,`
      : `Hello,\n\nI would like to order:\n\n${product.name}\nPrice: ${product.price} CZK\n\nThank you,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 gradient-premium relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full text-[11px] font-semibold tracking-[0.25em] uppercase mb-8 border border-secondary/20">
            <Sparkles className="w-3 h-3" />
            {language === 'cs' ? 'Nejprodávanější kolekce' : 'Bestselling Collection'}
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight">
            {language === 'cs' ? 'Naše kolekce' : 'Our Collection'}
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-4 font-light">
            {language === 'cs'
              ? 'Objevte naši nadčasovou kolekci ručně tvarovaných květin a voňavých výrobků. Každý kousek je originál plný detailů, barev a jemných vůní.'
              : 'Discover our timeless collection of hand-shaped flowers and fragrance products. Every piece is an original full of detail, color, and delicate scent.'}
          </p>
          <p className="text-base text-secondary font-medium italic">
            {language === 'cs'
              ? '— Co kus, to originál —'
              : '— Every piece an original —'}
          </p>
        </div>

        {/* Offer banner */}
        <div className="mb-14 p-5 gradient-card rounded-2xl text-center border border-secondary/15 shadow-rose flex flex-col items-center gap-1">
          <p className="text-base font-medium text-primary tracking-wide">
            {language === 'cs' ? 'Doručení zdarma při objednávce nad 5 kusů' : 'Free delivery on orders over 5 pieces'}
          </p>
          <p className="text-sm text-muted-foreground italic">
            {language === 'cs' ? 'Každý kousek je ručně vyráběný originál' : 'Every piece is a handmade original'}
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

        {/* Collection Banner */}
        <div className="mt-16 gradient-card rounded-3xl p-8 md:p-12 text-center border border-secondary/15 shadow-elegant">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            {language === 'cs' ? 'Krása, která nikdy neuvadne' : 'Beauty That Never Wilts'}
          </h3>
          <div className="divider-elegant mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-6">
            {language === 'cs'
              ? 'Darujte krásu ručně vyráběných voňavých výrobků. Každý kousek voní a potěší celé měsíce.'
              : 'Give the beauty of handmade fragrance products. Every piece smells wonderful and delights for months.'}
          </p>
          <Button
            size="lg"
            className="rounded-full px-8"
            onClick={() => {
              const subject = encodeURIComponent(language === 'cs' ? 'Objednávka – naše kolekce' : 'Order – our collection');
              const body = encodeURIComponent(language === 'cs'
                ? 'Dobrý den,\n\nmám zájem o vaši kolekci voňavých výrobků.\n\nDěkuji,'
                : 'Hello,\n\nI am interested in your collection of fragrance products.\n\nThank you,');
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
