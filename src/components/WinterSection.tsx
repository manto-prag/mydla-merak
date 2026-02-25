import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Snowflake, Star, Gift, Sparkles } from "lucide-react";

// Snowflakes
import christmasSnowflakeBaroquePink from "@/assets/christmas-snowflake-baroque-pink.jpg";
import christmasSnowflakeGreenFlower from "@/assets/christmas-snowflake-green-flower.jpg";
import christmasSnowflakeHollyGreen from "@/assets/christmas-snowflake-green.jpg";
import christmasSnowflakePinkDetailed from "@/assets/christmas-pink-snowflake-detailed.jpg";
import christmasSnowflakeElaborate from "@/assets/christmas-snowflake-elaborate.jpg";
import christmasSnowflakePinkNew from "@/assets/christmas-snowflake-pink-detailed.jpg";
import christmasBlueSnowflake from "@/assets/christmas-yellow-snowflake.jpg";
import christmasGreenSnowflakeStar from "@/assets/Bells.jpg";
import christmasWhiteSnowflakePearl from "@/assets/christmas-red-snowflake-pearl.jpg";

// Angels
import christmasAngelSoaps from "@/assets/christmas-angel-soaps.jpg";
import christmasAngelPink from "@/assets/christmas-angel-pink.jpg";


// Winter trees & scenes
import christmasTreeDeerForest from "@/assets/christmas-tree-deer-forest.jpg";
import christmasTreeDeerSnowflakesGreen from "@/assets/christmas-tree-deer-snowflakes-green.jpg";
import christmasTreesPairGreenPink from "@/assets/christmas-trees-pair-green-pink.jpg";
import christmasGreenTreesPair from "@/assets/christmas-green-trees-pair.jpg";
import christmasPinkTreePearls from "@/assets/christmas-pink-tree-pearls.jpg";

// Stars & gifts
import christmasStarPink from "@/assets/christmas-star-pink.jpg";
import christmasPinkStarTree from "@/assets/christmas-pink-star-tree.jpg";
import christmasWhiteStarOrnaments from "@/assets/christmas-white-star-ornaments.jpg";
import christmasGiftBoxBow from "@/assets/christmas-gift-box-bow.jpg";

// Characters
import christmasSantaClaus from "@/assets/christmas-santa-claus.jpg";

import christmasReindeerSoaps from "@/assets/christmas-reindeer-soaps.jpg";

interface WinterProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
  category: 'snowflake' | 'angel' | 'tree' | 'character' | 'star';
}

type FilterCategory = 'all' | 'snowflake' | 'angel' | 'tree' | 'character' | 'star';

export const WinterSection = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filters: { id: FilterCategory; label: string; icon: typeof Snowflake }[] = [
    { id: 'all', label: language === 'cs' ? 'Vše' : 'All', icon: Sparkles },
    { id: 'snowflake', label: language === 'cs' ? 'Vločky' : 'Snowflakes', icon: Snowflake },
    { id: 'angel', label: language === 'cs' ? 'Andělé' : 'Angels', icon: Star },
    { id: 'tree', label: language === 'cs' ? 'Stromečky' : 'Trees', icon: Gift },
    { id: 'character', label: language === 'cs' ? 'Postavičky' : 'Characters', icon: Gift },
    { id: 'star', label: language === 'cs' ? 'Hvězdy & Dárky' : 'Stars & Gifts', icon: Star },
  ];

  const winterProducts: WinterProduct[] = [
    // Snowflakes
    {
      id: 'winter-snowflake-baroque',
      name: language === 'cs' ? 'Barokní růžová vločka' : 'Baroque Pink Snowflake',
      price: 165,
      image: christmasSnowflakeBaroquePink,
      description: language === 'cs' ? 'Velkolepá barokní vločka v královské růžové s propracovanými ornamenty - zimní elegance pro váš domov' : 'Magnificent baroque snowflake in royal pink with intricate ornaments - winter elegance for your home',
      badge: language === 'cs' ? 'Bestseller' : 'Bestseller',
      category: 'snowflake'
    },
    {
      id: 'winter-snowflake-green-flower',
      name: language === 'cs' ? 'Vločka s květinovým vzorem' : 'Floral Pattern Snowflake',
      price: 175,
      image: christmasSnowflakeGreenFlower,
      description: language === 'cs' ? 'Unikátní zelená vločka s bílým květinovým středem - dokonalé spojení zimní krásy a přírody' : 'Unique green snowflake with white floral center - perfect blend of winter beauty and nature',
      category: 'snowflake'
    },
    {
      id: 'winter-snowflake-holly',
      name: language === 'cs' ? 'Cesmínová vločka' : 'Holly Snowflake',
      price: 165,
      image: christmasSnowflakeHollyGreen,
      description: language === 'cs' ? 'Majestátní zelená vločka s motivem cesmínových listů - tradiční zimní motiv plný kouzla' : 'Majestic green snowflake with holly leaf motif - traditional winter charm',
      badge: language === 'cs' ? 'Oblíbené' : 'Popular',
      category: 'snowflake'
    },
    {
      id: 'winter-snowflake-pink-detailed',
      name: language === 'cs' ? 'Mentolová vločka' : 'Mint Green Snowflake',
      price: 165,
      image: christmasSnowflakePinkDetailed,
      description: language === 'cs' ? 'Svěží mentolová vločka s jemným vzorem – elegantní zimní kouzlo, které okouzlí.' : 'Fresh mint green snowflake with delicate pattern – elegant winter charm that captivates.',
      category: 'snowflake'
    },
    {
      id: 'winter-snowflake-elaborate',
      name: language === 'cs' ? 'Velká sněhová vločka' : 'Grand Snowflake',
      price: 185,
      image: christmasSnowflakeElaborate,
      description: language === 'cs' ? 'Impozantní velká vločka s detailním reliéfem - okouzlující středobod zimní dekorace' : 'Impressive grand snowflake with detailed relief - enchanting centerpiece of winter decoration',
      category: 'snowflake'
    },
    {
      id: 'winter-snowflake-pink-relief',
      name: language === 'cs' ? 'Růžová vločka s reliéfem' : 'Pink Relief Snowflake',
      price: 155,
      image: christmasSnowflakePinkNew,
      description: language === 'cs' ? 'Nádherná růžová vločka s kontrastním bílým reliéfem - romantická zimní krása' : 'Gorgeous pink snowflake with contrasting white relief - romantic winter beauty',
      category: 'snowflake'
    },
    {
      id: 'winter-snowflake-blue',
      name: language === 'cs' ? 'Žlutá zimní vločka' : 'Yellow Winter Snowflake',
      price: 155,
      image: christmasBlueSnowflake,
      description: language === 'cs' ? 'Zářivě žlutá vločka evokující teplo zimních svíček u krbu' : 'Radiant yellow snowflake evoking warmth of winter candles by the fireplace',
      category: 'snowflake'
    },
    {
      id: 'winter-snowflake-star-green',
      name: language === 'cs' ? 'Zelený ovál se zvonečkem' : 'Green Oval with Bell',
      price: 155,
      image: christmasGreenSnowflakeStar,
      description: language === 'cs' ? 'Romantický zvoneček s cesmínou na zeleném oválu – nádherný zimní dárek.' : 'Romantic bell with holly on green oval – a gorgeous winter gift.',
      category: 'snowflake'
    },
    {
      id: 'winter-snowflake-red-star',
      name: language === 'cs' ? 'Červená zimní hvězda' : 'Red Winter Star',
      price: 165,
      image: christmasWhiteSnowflakePearl,
      description: language === 'cs' ? 'Zářivě červená hvězda symbolizující teplo a pohodu zimních večerů' : 'Radiant red star symbolizing warmth and coziness of winter evenings',
      category: 'snowflake'
    },

    // Angels
    {
      id: 'winter-angels-set',
      name: language === 'cs' ? 'Sada zimních andělů' : 'Winter Angels Set',
      price: 310,
      image: christmasAngelSoaps,
      description: language === 'cs' ? 'Nádherná andělská sada v pastelových zimních barvách - přinese klid a harmonii do vašeho domova' : 'Beautiful angel set in pastel winter colors - brings peace and harmony to your home',
      badge: language === 'cs' ? 'Dárková sada' : 'Gift Set',
      category: 'angel'
    },
    {
      id: 'winter-angel-pink',
      name: language === 'cs' ? 'Růžový andílek se srdíčkem' : 'Pink Angel with Heart',
      price: 175,
      image: christmasAngelPink,
      description: language === 'cs' ? 'Jemný andílek se srdíčkem v něžně růžové - strážný anděl pro vaše blízké' : 'Delicate angel with heart in soft pink - guardian angel for your loved ones',
      badge: language === 'cs' ? 'Ruční práce' : 'Handmade',
      category: 'angel'
    },



    // Trees & winter scenes
    {
      id: 'winter-tree-deer-forest',
      name: language === 'cs' ? 'Stromeček s lesní scenérií' : 'Tree with Forest Scene',
      price: 175,
      image: christmasTreeDeerForest,
      description: language === 'cs' ? 'Kouzelný stromeček se zimní scenérií s jeleny v zasněženém lese - magie zimní přírody' : 'Magical tree with winter scene and deer in snowy forest - magic of winter nature',
      badge: language === 'cs' ? 'Bestseller' : 'Bestseller',
      category: 'tree'
    },
    {
      id: 'winter-tree-deer-snowflakes-green',
      name: language === 'cs' ? 'Stromeček s jelenem a vločkami' : 'Tree with Deer & Snowflakes',
      price: 175,
      image: christmasTreeDeerSnowflakesGreen,
      description: language === 'cs' ? 'Elegantní zelený stromeček s majestátním jelenem a vločkami - zimní pohádka' : 'Elegant green tree with majestic deer and snowflakes - winter fairy tale',
      category: 'tree'
    },
    {
      id: 'winter-trees-pair',
      name: language === 'cs' ? 'Dvojice stromečků zelená a růžová' : 'Tree Pair Green & Pink',
      price: 310,
      image: christmasTreesPairGreenPink,
      description: language === 'cs' ? 'Okouzlující duo stromečků v zelené a růžové - elegantní zimní dekorace' : 'Charming duo of trees in green and pink - elegant winter decoration',
      badge: language === 'cs' ? 'Dárková sada' : 'Gift Set',
      category: 'tree'
    },
    {
      id: 'winter-green-trees-pair',
      name: language === 'cs' ? 'Bílo-zelená vločka' : 'White-Green Snowflake',
      price: 290,
      image: christmasGreenTreesPair,
      description: language === 'cs' ? 'Elegantní bílá vločka se zeleným vzorem – čistá zimní krása, která zaujme.' : 'Elegant white snowflake with green pattern – pure winter beauty that impresses.',
      category: 'tree'
    },
    {
      id: 'winter-pink-tree-pearls',
      name: language === 'cs' ? 'Zlatá vločka s ornamentem' : 'Golden Snowflake with Ornament',
      price: 175,
      image: christmasPinkTreePearls,
      description: language === 'cs' ? 'Zářivě zlatá vločka s propracovaným ornamentem – luxusní zimní třpyt.' : 'Radiant golden snowflake with intricate ornament – luxury winter sparkle.',
      badge: language === 'cs' ? 'Luxus' : 'Luxury',
      category: 'tree'
    },



    // Stars & gifts
    {
      id: 'winter-star-pink',
      name: language === 'cs' ? 'Růžová zimní hvězda' : 'Pink Winter Star',
      price: 145,
      image: christmasStarPink,
      description: language === 'cs' ? 'Zářivá hvězda v jemně růžové s ornamentem - rozsvítí každý zimní večer' : 'Radiant star in soft pink with ornament - lights up every winter evening',
      category: 'star'
    },
    {
      id: 'winter-star-tree',
      name: language === 'cs' ? 'Andělíčci – pár' : 'Angel Pair',
      price: 165,
      image: christmasPinkStarTree,
      description: language === 'cs' ? 'Nádherný pár andělíčků v bílé a růžové – ochránci vašeho domova.' : 'Beautiful angel pair in white and pink – guardians of your home.',
      category: 'star'
    },
    {
      id: 'winter-star-white-ornaments',
      name: language === 'cs' ? 'Růžová hvězda s ornamenty' : 'Pink Star with Ornaments',
      price: 155,
      image: christmasWhiteStarOrnaments,
      description: language === 'cs' ? 'Okouzlující růžová hvězda s bílými ornamenty – romantická zimní dekorace.' : 'Enchanting pink star with white ornaments – romantic winter decoration.',
      category: 'star'
    },
    {
      id: 'winter-gift-box',
      name: language === 'cs' ? 'Zimní dárek s mašlí' : 'Winter Gift with Bow',
      price: 155,
      image: christmasGiftBoxBow,
      description: language === 'cs' ? 'Okouzlující dárkové balení v zelené s růžovou mašlí a srdíčkem - ideální dárek' : 'Charming gift package in green with pink bow and heart - ideal gift',
      category: 'star'
    },

    // Characters
    {
      id: 'winter-santa-claus',
      name: language === 'cs' ? 'Roztomilý Santa Claus' : 'Adorable Santa Claus',
      price: 165,
      image: christmasSantaClaus,
      description: language === 'cs' ? 'Okouzlující Santa Claus v tradičním červeném obleku - zimní radost pro celou rodinu' : 'Charming Santa Claus in traditional red suit - winter joy for the whole family',
      badge: language === 'cs' ? 'Oblíbené' : 'Popular',
      category: 'character'
    },
    {
      id: 'winter-reindeer-set',
      name: language === 'cs' ? 'Sada zimních sobů' : 'Winter Reindeer Set',
      price: 355,
      image: christmasReindeerSoaps,
      description: language === 'cs' ? 'Roztomilá sada sobů s mašlemi - magičtí průvodci zimní pohádkou' : 'Adorable reindeer set with bows - magical guides of winter fairy tale',
      badge: language === 'cs' ? 'Dárková sada' : 'Gift Set',
      category: 'character'
    },
  ];

  const filteredProducts = filter === 'all'
    ? winterProducts
    : winterProducts.filter(p => p.category === filter);

  const handleQuickOrder = (product: WinterProduct) => {
    const subject = encodeURIComponent(language === 'cs' ? `Zimní objednávka: ${product.name}` : `Winter order: ${product.name}`);
    const body = encodeURIComponent(language === 'cs'
      ? `Dobrý den,\n\nráda bych si objednala zimní mýdlo:\n\n${product.name}\nCena: ${product.price} Kč\n\nDěkuji,`
      : `Hello,\n\nI would like to order:\n\n${product.name}\nPrice: ${product.price} CZK\n\nThank you,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 gradient-premium relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div className="absolute top-16 left-16 text-7xl" style={{ animation: 'pulse 4s ease-in-out infinite' }}>❄</div>
        <div className="absolute top-48 right-24 text-5xl" style={{ animation: 'pulse 4s ease-in-out infinite 1.5s' }}>✦</div>
        <div className="absolute bottom-24 left-1/4 text-6xl" style={{ animation: 'pulse 4s ease-in-out infinite 3s' }}>❄</div>
        <div className="absolute top-1/3 right-1/4 text-4xl" style={{ animation: 'pulse 4s ease-in-out infinite 0.8s' }}>✧</div>
        <div className="absolute bottom-48 right-16 text-6xl" style={{ animation: 'pulse 4s ease-in-out infinite 2s' }}>❄</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase mb-8 border border-secondary/20">
            ✦ {language === 'cs' ? 'Zimní kolekce 2025/2026' : 'Winter Collection 2025/2026'} ✦
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight">
            {language === 'cs' ? 'Zimní kouzelná kolekce' : 'Winter Magic Collection'}
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-4 font-light">
            {language === 'cs'
              ? 'Objevte kouzlo zimy v ručně vyráběných dekorativních mýdlech. Vločky, andělé, zasněžené stromečky — každý kousek je unikátní umělecké dílo.'
              : 'Discover winter magic in handmade decorative soaps. Snowflakes, angels, snowy trees — each piece is a unique work of art.'}
          </p>
          <p className="text-base text-secondary font-medium italic">
            {language === 'cs'
              ? '— Ideální dárek pro zimní měsíce —'
              : '— The perfect gift for winter months —'}
          </p>
        </div>

        {/* Refined offer banner */}
        <div className="mb-14 p-6 gradient-card rounded-2xl text-center border border-secondary/15 shadow-rose">
          <p className="text-base font-medium text-primary">
            ✦ {language === 'cs' ? 'Doručení zdarma při objednávce nad 5 kusů' : 'Free delivery on orders over 5 pieces'} ✦
          </p>
          <p className="text-sm text-muted-foreground mt-1 italic">
            {language === 'cs' ? 'Limitovaná zimní edice — každý kousek je originál' : 'Limited winter edition — every piece is an original'}
          </p>
        </div>

        {/* Elegant category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((f) => (
            <Button
              key={f.id}
              variant={filter === f.id ? "default" : "outline"}
              onClick={() => setFilter(f.id)}
              className={`rounded-full gap-2 transition-all text-xs tracking-wider uppercase ${
                filter === f.id
                  ? 'shadow-elegant scale-105'
                  : 'hover:scale-105 border-border hover:border-secondary/40 hover:text-secondary'
              }`}
              size="sm"
            >
              <f.icon className="w-3.5 h-3.5" />
              {f.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredProducts.map((product) => (
            <div key={product.id} className="gradient-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-[1.02] border border-secondary/10 group">
              <div className="aspect-square relative overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-smooth"
                  loading="lazy"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-secondary/90 text-white px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase shadow-rose z-10">
                    {product.badge}
                  </div>
                )}
                <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-70 transition-all">
                  <span className="text-xl">❄</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading text-base font-semibold text-primary mb-2 line-clamp-1 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2 leading-relaxed font-light">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <span className="text-lg font-semibold text-secondary">
                    {product.price} Kč
                  </span>
                  <Button
                    variant="default"
                    onClick={() => handleQuickOrder(product)}
                    className="rounded-full shadow-soft text-xs tracking-wider uppercase"
                    size="sm"
                  >
                    {language === 'cs' ? 'Objednat' : 'Order'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Banner */}
        <div className="mt-20 gradient-accent rounded-3xl p-10 md:p-14 text-center text-primary-foreground shadow-premium relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-6 left-10 text-5xl">✦</div>
            <div className="absolute bottom-6 right-10 text-5xl">✦</div>
            <div className="absolute top-10 right-1/4 text-3xl">❄</div>
            <div className="absolute bottom-10 left-1/4 text-3xl">❄</div>
          </div>
          <div className="relative z-10">
            <p className="text-xs tracking-[0.3em] uppercase opacity-80 mb-4 font-medium">
              {language === 'cs' ? 'Exkluzivní kolekce' : 'Exclusive Collection'}
            </p>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              {language === 'cs' ? 'Darujte kouzlo zimy' : 'Give the Magic of Winter'}
            </h3>
            <div className="w-16 h-[1px] bg-primary-foreground/40 mx-auto mb-6" />
            <p className="text-base opacity-85 max-w-xl mx-auto mb-3 leading-relaxed font-light">
              {language === 'cs'
                ? 'Každý kousek je ručně vyrobený s láskou z přírodních ingrediencí. Překvapte své blízké originálním dárkem.'
                : 'Every piece is handmade with love from natural ingredients. Surprise your loved ones with an original gift.'}
            </p>
            <p className="text-sm opacity-70 mb-8 italic">
              {language === 'cs'
                ? 'Růžová voda · Kozí mléko · Med · Přírodní vůně'
                : 'Rose water · Goat milk · Honey · Natural fragrances'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full bg-background text-primary hover:bg-background/90 font-semibold shadow-elegant tracking-wider uppercase text-sm"
                onClick={() => {
                  const subject = encodeURIComponent(language === 'cs' ? 'Zimní objednávka - celá kolekce' : 'Winter order - full collection');
                  const body = encodeURIComponent(language === 'cs'
                    ? 'Dobrý den,\n\nmám zájem o zimní kolekci mýdel.\n\nProsím o více informací.\n\nDěkuji,'
                    : 'Hello,\n\nI am interested in the winter soap collection.\n\nPlease provide more information.\n\nThank you,');
                  window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
                }}
              >
                {language === 'cs' ? 'Objednat celou kolekci' : 'Order Full Collection'}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25 font-semibold border border-primary-foreground/30 tracking-wider uppercase text-sm"
                onClick={() => {
                  const subject = encodeURIComponent(language === 'cs' ? 'Individuální zimní objednávka' : 'Custom winter order');
                  const body = encodeURIComponent(language === 'cs'
                    ? 'Dobrý den,\n\nmám zájem o sestavení vlastní zimní kolekce mýdel.\n\nProsím o nabídku.\n\nDěkuji,'
                    : 'Hello,\n\nI am interested in building my own winter soap collection.\n\nPlease provide an offer.\n\nThank you,');
                  window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
                }}
              >
                {language === 'cs' ? 'Sestavit vlastní kolekci' : 'Build Your Own Collection'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
