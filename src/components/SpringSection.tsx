import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/Lightbox";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const springProducts: SpringProduct[] = [
    {
      id: 'spring-dahlia-pink',
      name: language === 'cs' ? "Růžová květina" : "Pink Blossom",
      price: 109,
      image: dahliaPink,
      description: language === 'cs' ? "Růžový květ s drobnými lístky a výrazným středem. Něžný detail pro radost." : "A pink bloom with tiny petals and a detailed centre. A delicate little gift."
    },
    {
      id: 'spring-peony-pink',
      name: language === 'cs' ? "Růžová pivoňka" : "Pink Peony",
      price: 109,
      image: peonyPink,
      description: language === 'cs' ? "Pastelově růžový květ s vrstvenými lístky. Romantická drobnost pro vaše blízké." : "A pastel pink bloom with layered petals. A romantic gift for someone special."
    },
    {
      id: 'spring-chrysanthemum',
      name: language === 'cs' ? "Květinový reliéf" : "Floral Relief",
      price: 109,
      image: chrysanthemumPink,
      description: language === 'cs' ? "Růžová destička pokrytá drobnými květy. Jemná květinová dekorace do vašeho domova." : "A pink tablet covered in small flowers. A delicate floral accent for your home."
    },
    {
      id: 'spring-rose-bouquet',
      name: language === 'cs' ? "Pastelová kytice" : "Pastel Bouquet",
      price: 549,
      image: roseBouquet,
      description: language === 'cs' ? "Kytice růžových, fialových a žlutozelených květů. Barevný dárek, který zaujme." : "A bouquet of pink, lilac and yellow-green blooms. A colourful gift that stands out.",
      badge: language === 'cs' ? 'Luxus' : 'Luxury'
    },
    {
      id: 'spring-roses-organza',
      name: language === 'cs' ? "Růže v organze" : "Roses in Organza",
      price: 109,
      image: rosesOrganza,
      description: language === 'cs' ? "Barevné růžičky v průsvitných sáčcích se zlatou stužkou. Milá pozornost v elegantním balení." : "Colourful roses in sheer bags with golden ribbons. A thoughtful, elegantly wrapped gift."
    },


    {
      id: 'spring-rose-buds',
      name: language === 'cs' ? "Poupata v růžové" : "Pink Rosebuds",
      price: 109,
      image: roseBuds,
      description: language === 'cs' ? "Pastelově růžový kousek se zvlněnými boky, korunovaný drobnými poupaty. Jemná dekorace, která rozzáří každý kout." : "A pastel pink piece with fluted sides, crowned with tiny rosebuds. A delicate decoration to brighten any corner.",
      badge: language === 'cs' ? 'Romantické' : 'Romantic'
    },
    {
      id: 'spring-hibiscus',
      name: language === 'cs' ? "Voňavý ibišek" : "Fragrant Hibiscus",
      price: 109,
      image: hibiscusOval,
      description: language === 'cs' ? "Růžová destička s květinovým reliéfem a zelenými lístky. Elegantní květinová pozornost." : "A pink tablet with floral relief and green leaves. An elegant floral gift."
    },
    {
      id: 'spring-diamond-organza',
      name: language === 'cs' ? "Srdíčka v organze" : "Hearts in Organza",
      price: 49,
      image: diamondOrganza,
      description: language === 'cs' ? "Pastelová fasetovaná srdíčka v sáčcích s červenou mašlí. Malá pozornost s romantickým nádechem." : "Pastel faceted hearts in bags with red bows. A little gift with a romantic touch.",
      badge: language === 'cs' ? 'Novinka' : 'New'
    },
    {
      id: 'spring-peony-collection',
      name: language === 'cs' ? "Pastelové květy – sada" : "Pastel Blooms – Set",
      price: 549,
      image: peonyCollection,
      description: language === 'cs' ? "Růžové, krémové a tyrkysové květy s různými tvary lístků. Pestrá sada pro milovníky květin." : "Pink, cream and turquoise flowers with varied petal shapes. A colourful set for flower lovers."
    },
    {
      id: 'spring-mandala-roses',
      name: language === 'cs' ? "Květinová mandala – sada" : "Floral Mandala – Set",
      price: 549,
      image: mandalaRoses,
      description: language === 'cs' ? "Výrazný květ uprostřed doplňují menší barevné růže. Harmonická sada k darování." : "A bold central bloom surrounded by smaller colourful roses. A harmonious gift set."
    },
    {
      id: 'four-leaf-clovers',
      name: language === 'cs' ? "Čtyřlístky pro štěstí" : "Lucky Clovers",
      price: 109,
      image: fourLeafClovers,
      description: language === 'cs' ? "Kulaté kousky s reliéfem čtyřlístku v pastelových barvách. Darujte drobný symbol štěstí." : "Round pieces with a clover relief in pastel colours. Give a little symbol of good luck.",
      badge: language === 'cs' ? 'Pro štěstí' : 'Lucky charm'
    },
    {
      id: 'massage-nubs',
      name: language === 'cs' ? "Barevný reliéf" : "Colourful Relief",
      price: 109,
      image: massageNubs,
      description: language === 'cs' ? "Oválné kousky s oblými výstupky v růžové, červené a oranžové. Hravý detail do interiéru." : "Oval pieces with rounded raised dots in pink, red and orange. A playful interior accent."
    },
  ];

  const handleQuickOrder = (product: SpringProduct) => {
    const subject = encodeURIComponent(language === 'cs' ? `Objednávka: ${product.name}` : `Order: ${product.name}`);
    const body = encodeURIComponent(language === 'cs'
      ? `Dobrý den,\n\nrád(a) bych si objednal(a) voňavý výrobek:\n\n${product.name}\nCena: ${product.price} Kč\n\nDěkuji,`
      : `Hello,\n\nI would like to order:\n\n${product.name}\nPrice: ${product.price} CZK\n\nThank you,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 gradient-premium relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight inline-flex items-center justify-center gap-3">
            <Sparkles className="w-6 h-6 text-secondary" />
            {language === 'cs' ? 'Nejprodávanější kolekce' : 'Bestselling Collection'}
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-4 font-light">
            {language === 'cs'
              ? 'Objevte naši nadčasovou kolekci ručně tvarovaných květin a voňavých výrobků. Každý kousek zaujme svými detaily, barvami a tvarem.'
              : 'Discover our timeless collection of hand-shaped flowers and fragrance products. Every piece stands out through its details, colours and shape.'}
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
            {language === 'cs' ? 'Nad 30 ks – doprava zdarma' : 'Over 30 pcs – free delivery'}
          </p>
          <p className="text-sm text-muted-foreground italic">
            {language === 'cs' ? 'Každý kousek je ručně vyráběný originál' : 'Every piece is a handmade original'}
          </p>
        </div>


        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {springProducts.map((product, idx) => (
            <div key={product.id} className="gradient-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] border border-secondary/10 group">
              <div className="aspect-square relative overflow-hidden bg-white cursor-zoom-in" onClick={() => setLightboxIndex(idx)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") setLightboxIndex(idx); }}>
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
              ? 'Darujte krásu ručně vyráběných voňavých výrobků. Vyberte si z květinových tvarů, jemných reliéfů a pestrých barev.'
              : 'Give the beauty of handmade fragrance products. Choose from floral shapes, delicate reliefs and colourful designs.'}
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
      <Lightbox
        items={springProducts.map((p) => ({ src: p.image, alt: p.name, caption: p.description }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </section>
  );
};
