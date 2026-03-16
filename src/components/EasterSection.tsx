import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

import eastergreen from "@/assets/easter-bunny-green-pearl.jpg";

interface EasterProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
}

export const EasterSection = () => {
  const { language } = useLanguage();

  const easterProducts: EasterProduct[] = [
    {
      id: 'easter-bunny-green-pearl',
      name: language === 'cs' ? 'Zelený zajíček s perličkou' : 'Green Bunny with Pearl',
      price: 185,
      image: eastergreen,
      description: language === 'cs' ? 'Jarní zajíček v jemně zelené se zlatou mašličkou a perličkou – elegantní velikonoční dekorace' : 'Spring bunny in soft green with golden bow and pearl – elegant Easter decoration',
      badge: language === 'cs' ? 'Novinka' : 'New'
    },
    {
      id: 'easter-bunny-white-pearl',
      name: language === 'cs' ? 'Bílý zajíček s perličkou' : 'White Bunny with Pearl',
      price: 185,
      image: '@/assets/easter-bunny-white-pearl.jpg',
      description: language === 'cs' ? 'Čistě bílý zajíček se srdíčkem a zlatou mašlí – něžný dárek pro jarní radost' : 'Pure white bunny with heart and golden bow – a tender gift for spring joy'
    },
    {
      id: 'easter-bunny-yellow-pearl',
      name: language === 'cs' ? 'Žlutý zajíček s perličkou' : 'Yellow Bunny with Pearl',
      price: 185,
      image: '/src/assets/easter-bunny-yellow-pearl.jpg',
      description: language === 'cs' ? 'Slunečně žlutý zajíček se srdíčkem a perličkou – kousek jara u vás doma' : 'Sunny yellow bunny with heart and pearl – a piece of spring at your home'
    },
    {
      id: 'easter-bunnies-colorful-set',
      name: language === 'cs' ? 'Sada barevných zajíčků' : 'Colorful Bunny Set',
      price: 355,
      image: '/src/assets/easter-bunnies-colorful-set.jpg',
      description: language === 'cs' ? 'Čtyři roztomilí zajíčci s mašličkami a srdíčky v zářivých barvách – dárek, co okouzlí' : 'Four adorable bunnies with bows and hearts in vibrant colors – a gift that charms',
      badge: language === 'cs' ? 'Dárková sada' : 'Gift Set'
    },
    {
      id: 'easter-bunny-blue-floral',
      name: language === 'cs' ? 'Tyrkysový zajíc s květinami' : 'Turquoise Bunny with Flowers',
      price: 195,
      image: '/src/assets/easter-bunny-blue-floral.jpg',
      description: language === 'cs' ? 'Majestátní tyrkysový zajíc s vyřezávanými květinami – unikátní umělecké dílo' : 'Majestic turquoise bunny with carved flowers – a unique work of art',
      badge: language === 'cs' ? 'Unikát' : 'Unique'
    },
    {
      id: 'easter-bunnies-pink-peach-pair',
      name: language === 'cs' ? 'Dvojice zajíčků růžová a broskvová' : 'Pink & Peach Bunny Pair',
      price: 310,
      image: '/src/assets/easter-bunnies-pink-peach-pair.jpg',
      description: language === 'cs' ? 'Roztomilá dvojice s mašličkami v pastelových tónech – ideální jarní dárek' : 'Adorable pair with bows in pastel tones – the ideal spring gift'
    },
    {
      id: 'easter-bunnies-trio',
      name: language === 'cs' ? 'Trio zajíčků s mašlemi' : 'Bunny Trio with Bows',
      price: 420,
      image: '/src/assets/easter-bunnies-trio.jpg',
      description: language === 'cs' ? 'Tři zajíčci v růžové, tyrkysové a broskvové – jarní harmonie barev' : 'Three bunnies in pink, turquoise and peach – spring color harmony',
      badge: language === 'cs' ? 'Bestseller' : 'Bestseller'
    },
    {
      id: 'easter-bunnies-blue-pink',
      name: language === 'cs' ? 'Dvojice zajíčků modrá a růžová' : 'Blue & Pink Bunny Pair',
      price: 310,
      image: '/src/assets/easter-bunnies-blue-pink.jpg',
      description: language === 'cs' ? 'Zářivě modrý a jemně růžový zajíček s mašlemi – perfektní pár pro Velikonoce' : 'Vibrant blue and soft pink bunny with bows – the perfect Easter pair'
    },
    {
      id: 'easter-bunnies-pastel-group',
      name: language === 'cs' ? 'Pastelová kolekce zajíčků' : 'Pastel Bunny Collection',
      price: 520,
      image: '/src/assets/easter-bunnies-pastel-group.jpg',
      description: language === 'cs' ? 'Šest zajíčků s perličkami v pastelové duze – nádherný velikonoční středobod' : 'Six bunnies with pearls in pastel rainbow – a stunning Easter centerpiece',
      badge: language === 'cs' ? 'Premium' : 'Premium'
    },
    {
      id: 'easter-eggs-green-ornate',
      name: language === 'cs' ? 'Zdobená velikonoční vajíčka' : 'Ornate Easter Eggs',
      price: 290,
      image: '/src/assets/easter-eggs-green-ornate.jpg',
      description: language === 'cs' ? 'Luxusní zelená vajíčka s reliéfními květinami a zajíčkem – tradiční krása v moderním provedení' : 'Luxury green eggs with relief flowers and bunny – traditional beauty in modern style',
      badge: language === 'cs' ? 'Luxus' : 'Luxury'
    },
    {
      id: 'easter-heart-bunny-blue',
      name: language === 'cs' ? 'Srdce se zajíčkem' : 'Heart with Bunny',
      price: 220,
      image: '/src/assets/easter-heart-bunny-blue.jpg',
      description: language === 'cs' ? 'Romantické srdce s květinovým rámečkem a roztomilým zajíčkem na tyrkysovém pozadí – okouzlující velikonoční dekorace' : 'Romantic heart with floral frame and adorable bunny on turquoise background – a charming Easter decoration',
      badge: language === 'cs' ? 'Unikát' : 'Unique'
    },
    {
      id: 'easter-egg-bunny-ears-peach',
      name: language === 'cs' ? 'Vajíčko s oušky – broskvové' : 'Egg with Ears – Peach',
      price: 155,
      image: '/src/assets/easter-egg-bunny-ears-peach.jpg',
      description: language === 'cs' ? 'Jemně broskvové vajíčko s vyčnívajícími zaječími oušky a saténovou mašlí – rozkošná jarní ozdoba' : 'Soft peach egg with peeking bunny ears and satin ribbon – a delightful spring ornament'
    },
    {
      id: 'easter-egg-bunny-silhouette-blue',
      name: language === 'cs' ? 'Vajíčko se zajíčkem – modré' : 'Egg with Bunny – Blue',
      price: 155,
      image: '/src/assets/easter-egg-bunny-silhouette-blue.jpg',
      description: language === 'cs' ? 'Tyrkysové krajkové vajíčko se siluetou skákajícího zajíčka – hravý velikonoční závěs' : 'Turquoise scalloped egg with jumping bunny silhouette – a playful Easter hanging'
    },
    {
      id: 'easter-egg-bunny-ears-mint',
      name: language === 'cs' ? 'Vajíčko s oušky – mentolové' : 'Egg with Ears – Mint',
      price: 155,
      image: '/src/assets/easter-egg-bunny-ears-mint.jpg',
      description: language === 'cs' ? 'Mentolovo-růžové vajíčko s vyčuhujícími oušky – něžná pastelová dekorace pro jarní atmosféru' : 'Mint-pink egg with peeking ears – a tender pastel decoration for spring atmosphere'
    },
    {
      id: 'easter-egg-zigzag-pastel',
      name: language === 'cs' ? 'Pastelové vajíčko cik-cak' : 'Pastel Zigzag Egg',
      price: 145,
      image: '/src/assets/easter-egg-zigzag-pastel.jpg',
      description: language === 'cs' ? 'Tříbarevné vajíčko v žluté, růžové a mentolové s cik-cak vzorem – veselá jarní dekorace' : 'Three-color egg in yellow, pink and mint with zigzag pattern – a cheerful spring decoration'
    },
    {
      id: 'easter-eggs-collection-pastel',
      name: language === 'cs' ? 'Kolekce pastelových vajíček' : 'Pastel Eggs Collection',
      price: 690,
      image: '/src/assets/easter-eggs-collection-pastel.jpg',
      description: language === 'cs' ? 'Bohatá kolekce ručně vyráběných vajíček a zajíčků v pastelových barvách se saténovými mašlemi – dokonalý velikonoční set' : 'Rich collection of handmade eggs and bunnies in pastel colors with satin ribbons – the perfect Easter set',
      badge: language === 'cs' ? 'Premium sada' : 'Premium Set'
    },
  ];

  const handleQuickOrder = (product: EasterProduct) => {
    const subject = encodeURIComponent(language === 'cs' ? `Velikonoční objednávka: ${product.name}` : `Easter order: ${product.name}`);
    const body = encodeURIComponent(language === 'cs'
      ? `Dobrý den,\n\nráda bych si objednala velikonoční mýdlo:\n\n${product.name}\nCena: ${product.price} Kč\n\nDěkuji,`
      : `Hello,\n\nI would like to order:\n\n${product.name}\nPrice: ${product.price} CZK\n\nThank you,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 gradient-premium relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div className="absolute top-16 left-16 text-7xl" style={{ animation: 'pulse 4s ease-in-out infinite' }}>🐣</div>
        <div className="absolute top-48 right-24 text-5xl" style={{ animation: 'pulse 4s ease-in-out infinite 1.5s' }}>🌸</div>
        <div className="absolute bottom-24 left-1/4 text-6xl" style={{ animation: 'pulse 4s ease-in-out infinite 3s' }}>🥚</div>
        <div className="absolute top-1/3 right-1/4 text-4xl" style={{ animation: 'pulse 4s ease-in-out infinite 0.8s' }}>✿</div>
        <div className="absolute bottom-48 right-16 text-6xl" style={{ animation: 'pulse 4s ease-in-out infinite 2s' }}>🐰</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-8 border border-secondary/20">
            🐰 {language === 'cs' ? 'Velikonoční kolekce 2026' : 'Easter Collection 2026'} 🐰
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight">
            {language === 'cs' ? 'Velikonoční kolekce' : 'Easter Collection'}
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-4 font-light">
            {language === 'cs'
              ? 'Přivítejte jaro s naší kouzelnou velikonoční kolekcí. Roztomilí zajíčci a zdobená vajíčka – každý kousek je ručně vyráběný originál plný jarních barev.'
              : 'Welcome spring with our enchanting Easter collection. Adorable bunnies and ornate eggs – each piece is a handcrafted original full of spring colors.'}
          </p>
          <p className="text-base text-secondary font-medium italic">
            {language === 'cs'
              ? '— Ideální jarní dárek pro vaše blízké —'
              : '— The perfect spring gift for your loved ones —'}
          </p>
        </div>

        {/* Offer banner */}
        <div className="mb-14 p-6 gradient-card rounded-2xl text-center border border-secondary/15 shadow-rose">
          <p className="text-base font-medium text-primary">
            🌷 {language === 'cs' ? 'Doručení zdarma při objednávce nad 5 kusů' : 'Free delivery on orders over 5 pieces'} 🌷
          </p>
          <p className="text-sm text-muted-foreground mt-1 italic">
            {language === 'cs' ? 'Limitovaná velikonoční edice — každý kousek je originál' : 'Limited Easter edition — every piece is an original'}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {easterProducts.map((product) => (
            <div key={product.id} className="gradient-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] border border-secondary/10 group">
              <div className="aspect-square relative overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
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

        {/* Easter Banner */}
        <div className="mt-16 gradient-card rounded-3xl p-8 md:p-12 text-center border border-secondary/15 shadow-elegant">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
            🐣 {language === 'cs' ? 'Ideální velikonoční dárek!' : 'Perfect Easter Gift!'} 🐣
          </h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-6">
            {language === 'cs'
              ? 'Překvapte své blízké originálním ručně vyráběným velikonočním mýdlem. Každý zajíček a vajíčko jsou malé umělecké dílo.'
              : 'Surprise your loved ones with original handmade Easter soap. Every bunny and egg is a small work of art.'}
          </p>
          <Button
            size="lg"
            className="rounded-full px-8"
            onClick={() => {
              const subject = encodeURIComponent(language === 'cs' ? 'Velikonoční objednávka - celá kolekce' : 'Easter order - full collection');
              const body = encodeURIComponent(language === 'cs' 
                ? 'Dobrý den,\n\nmám zájem o velikonoční kolekci mýdel.\n\nDěkuji,' 
                : 'Hello,\n\nI am interested in the Easter soap collection.\n\nThank you,');
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
