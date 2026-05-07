import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface EasterProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
}

export const EasterCollapsible = () => {
  const { language } = useLanguage();
  const [easterOpen, setEasterOpen] = useState(false);

  const easterProducts: EasterProduct[] = [
    {
      id: 'easter-bunny-green-pearl',
      name: language === 'cs' ? 'Zelený zajíček s perličkou' : 'Green Bunny with Pearl',
      price: 185,
      image: '/lovable-uploads/easter-bunny-green-pearl.jpg',
      description: language === 'cs' ? 'Jarní zajíček v jemně zelené se zlatou mašličkou a perličkou' : 'Spring bunny in soft green with golden bow and pearl',
      badge: language === 'cs' ? 'Novinka' : 'New'
    },
    {
      id: 'easter-bunny-white-pearl',
      name: language === 'cs' ? 'Bílý zajíček s perličkou' : 'White Bunny with Pearl',
      price: 185,
      image: '/lovable-uploads/easter-bunny-white-pearl.jpg',
      description: language === 'cs' ? 'Čistě bílý zajíček se srdíčkem a zlatou mašlí' : 'Pure white bunny with heart and golden bow'
    },
    {
      id: 'easter-bunny-yellow-pearl',
      name: language === 'cs' ? 'Žlutý zajíček s perličkou' : 'Yellow Bunny with Pearl',
      price: 185,
      image: '/lovable-uploads/easter-bunny-yellow-pearl.jpg',
      description: language === 'cs' ? 'Slunečně žlutý zajíček se srdíčkem a perličkou' : 'Sunny yellow bunny with heart and pearl'
    },
    {
      id: 'easter-bunnies-colorful-set',
      name: language === 'cs' ? 'Sada barevných zajíčků' : 'Colorful Bunny Set',
      price: 355,
      image: '/lovable-uploads/easter-bunnies-colorful-set.jpg',
      description: language === 'cs' ? 'Čtyři roztomilí zajíčci s mašličkami v zářivých barvách' : 'Four adorable bunnies with bows in vibrant colors',
      badge: language === 'cs' ? 'Dárková sada' : 'Gift Set'
    },
    {
      id: 'easter-bunny-blue-floral',
      name: language === 'cs' ? 'Tyrkysový zajíc s květinami' : 'Turquoise Bunny with Flowers',
      price: 195,
      image: '/lovable-uploads/easter-bunny-blue-floral.jpg',
      description: language === 'cs' ? 'Majestátní tyrkysový zajíc s vyřezávanými květinami' : 'Majestic turquoise bunny with carved flowers',
      badge: language === 'cs' ? 'Unikát' : 'Unique'
    },
    {
      id: 'easter-bunnies-pink-peach-pair',
      name: language === 'cs' ? 'Dvojice zajíčků růžová a broskvová' : 'Pink & Peach Bunny Pair',
      price: 310,
      image: '/lovable-uploads/easter-bunnies-pink-peach-pair.jpg',
      description: language === 'cs' ? 'Roztomilá dvojice s mašličkami v pastelových tónech' : 'Adorable pair with bows in pastel tones'
    },
    {
      id: 'easter-bunnies-trio',
      name: language === 'cs' ? 'Trio zajíčků s mašlemi' : 'Bunny Trio with Bows',
      price: 420,
      image: '/lovable-uploads/easter-bunnies-trio.jpg',
      description: language === 'cs' ? 'Tři zajíčci v růžové, tyrkysové a broskvové' : 'Three bunnies in pink, turquoise and peach',
      badge: language === 'cs' ? 'Bestseller' : 'Bestseller'
    },
    {
      id: 'easter-bunnies-blue-pink',
      name: language === 'cs' ? 'Dvojice zajíčků modrá a růžová' : 'Blue & Pink Bunny Pair',
      price: 310,
      image: '/lovable-uploads/easter-bunnies-blue-pink.jpg',
      description: language === 'cs' ? 'Zářivě modrý a jemně růžový zajíček s mašlemi' : 'Vibrant blue and soft pink bunny with bows'
    },
    {
      id: 'easter-bunnies-pastel-group',
      name: language === 'cs' ? 'Pastelová kolekce zajíčků' : 'Pastel Bunny Collection',
      price: 520,
      image: '/lovable-uploads/easter-bunnies-pastel-group.jpg',
      description: language === 'cs' ? 'Šest zajíčků s perličkami v pastelové duze' : 'Six bunnies with pearls in pastel rainbow',
      badge: language === 'cs' ? 'Premium' : 'Premium'
    },
    {
      id: 'easter-eggs-green-ornate',
      name: language === 'cs' ? 'Zdobená velikonoční vajíčka' : 'Ornate Easter Eggs',
      price: 290,
      image: '/lovable-uploads/easter-eggs-green-ornate.jpg',
      description: language === 'cs' ? 'Luxusní zelená vajíčka s reliéfními květinami a zajíčkem' : 'Luxury green eggs with relief flowers and bunny',
      badge: language === 'cs' ? 'Luxus' : 'Luxury'
    },
    {
      id: 'easter-heart-bunny-blue',
      name: language === 'cs' ? 'Srdce se zajíčkem' : 'Heart with Bunny',
      price: 220,
      image: '/lovable-uploads/easter-heart-bunny-blue.jpg',
      description: language === 'cs' ? 'Romantické srdce s květinovým rámečkem a roztomilým zajíčkem' : 'Romantic heart with floral frame and adorable bunny',
      badge: language === 'cs' ? 'Unikát' : 'Unique'
    },
    {
      id: 'easter-egg-bunny-ears-peach',
      name: language === 'cs' ? 'Vajíčko s oušky – broskvové' : 'Egg with Ears – Peach',
      price: 155,
      image: '/lovable-uploads/easter-egg-bunny-ears-peach.jpg',
      description: language === 'cs' ? 'Jemně broskvové vajíčko s vyčnívajícími zaječími oušky a saténovou mašlí' : 'Soft peach egg with peeking bunny ears and satin ribbon'
    },
    {
      id: 'easter-egg-bunny-silhouette-blue',
      name: language === 'cs' ? 'Vajíčko se zajíčkem – modré' : 'Egg with Bunny – Blue',
      price: 155,
      image: '/lovable-uploads/easter-egg-bunny-silhouette-blue.jpg',
      description: language === 'cs' ? 'Tyrkysové krajkové vajíčko se siluetou skákajícího zajíčka' : 'Turquoise scalloped egg with jumping bunny silhouette'
    },
    {
      id: 'easter-egg-bunny-ears-mint',
      name: language === 'cs' ? 'Vajíčko s oušky – mentolové' : 'Egg with Ears – Mint',
      price: 155,
      image: '/lovable-uploads/easter-egg-bunny-ears-mint.jpg',
      description: language === 'cs' ? 'Mentolovo-růžové vajíčko s vyčuhujícími oušky' : 'Mint-pink egg with peeking ears'
    },
    {
      id: 'easter-egg-zigzag-pastel',
      name: language === 'cs' ? 'Pastelové vajíčko cik-cak' : 'Pastel Zigzag Egg',
      price: 145,
      image: '/lovable-uploads/easter-egg-zigzag-pastel.jpg',
      description: language === 'cs' ? 'Tříbarevné vajíčko v žluté, růžové a mentolové s cik-cak vzorem' : 'Three-color egg in yellow, pink and mint with zigzag pattern'
    },
    {
      id: 'easter-eggs-collection-pastel',
      name: language === 'cs' ? 'Kolekce pastelových vajíček' : 'Pastel Eggs Collection',
      price: 690,
      image: '/lovable-uploads/easter-eggs-collection-pastel.jpg',
      description: language === 'cs' ? 'Bohatá kolekce ručně vyráběných vajíček a zajíčků v pastelových barvách' : 'Rich collection of handmade eggs and bunnies in pastel colors',
      badge: language === 'cs' ? 'Premium sada' : 'Premium Set'
    },
  ];

  const handleEasterOrder = (product: EasterProduct) => {
    const subject = encodeURIComponent(language === 'cs' ? `Velikonoční objednávka: ${product.name}` : `Easter order: ${product.name}`);
    const body = encodeURIComponent(language === 'cs'
      ? `Dobrý den,\n\nráda bych si objednala velikonoční mýdlo:\n\n${product.name}\nCena: ${product.price} Kč\n\nDěkuji,`
      : `Hello,\n\nI would like to order:\n\n${product.name}\nPrice: ${product.price} CZK\n\nThank you,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mb-16">
      <button
        onClick={() => setEasterOpen(!easterOpen)}
        className="w-full flex items-center justify-between bg-gradient-to-r from-green-500 via-yellow-400 to-green-500 text-white rounded-3xl px-8 py-6 shadow-premium hover:shadow-glow transition-bounce group"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">🐰</span>
          <div className="text-left">
            <h3 className="font-heading text-2xl md:text-3xl font-bold">
              {language === 'cs' ? 'Velikonoce' : 'Easter'}
            </h3>
            <p className="text-sm opacity-90">
              {language === 'cs' ? 'Velikonoční kolekce zajíčků a vajíček' : 'Easter collection of bunnies and eggs'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">🐣</span>
          {easterOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </button>

      {easterOpen && (
        <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {easterProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-premium transition-bounce border-2 border-green-100 dark:border-green-900/30 group">
                <div className="aspect-square relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover bg-white group-hover:scale-105 transition-smooth" loading="lazy" />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">{product.badge}</div>
                  )}
                  <div className="absolute top-4 right-4"><span className="text-2xl">🐰</span></div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-primary mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{product.price} Kč</span>
                    <Button variant="default" onClick={() => handleEasterOrder(product)} className="rounded-full" size="sm">
                      {language === 'cs' ? 'Objednat' : 'Order'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Easter Banner */}
          <div className="mt-8 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500 rounded-3xl p-8 text-center text-white shadow-premium">
            <h3 className="font-heading text-2xl font-bold mb-4">
              🐣 {language === 'cs' ? 'Ideální velikonoční dárek!' : 'Perfect Easter Gift!'} 🐣
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              {language === 'cs' ? 'Překvapte své blízké originálním ručně vyráběným velikonočním mýdlem.' : 'Surprise your loved ones with original handmade Easter soap.'}
            </p>
            <Button variant="secondary" size="lg" className="rounded-full bg-white text-green-600 hover:bg-gray-100 font-bold"
              onClick={() => {
                const subject = encodeURIComponent(language === 'cs' ? 'Velikonoční objednávka - celá kolekce' : 'Easter order - full collection');
                const body = encodeURIComponent(language === 'cs'
                  ? 'Dobrý den,\n\nmám zájem o velikonoční kolekci mýdel.\n\nDěkuji,'
                  : 'Hello,\n\nI am interested in the Easter soap collection.\n\nThank you,');
                window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
              }}>
              {language === 'cs' ? 'Objednat celou kolekci' : 'Order Full Collection'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
