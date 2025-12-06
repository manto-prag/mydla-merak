import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import christmasReindeerSoaps from "@/assets/christmas-reindeer-soaps.jpg";
import christmasAngelSoaps from "@/assets/christmas-angel-soaps.jpg";
import christmasAngelPink from "@/assets/christmas-angel-pink.jpg";
import christmasSnowflakePinkNew from "@/assets/christmas-snowflake-pink-detailed.jpg";
import christmasTreeDeerForest from "@/assets/christmas-tree-deer-forest.jpg";
import christmasTreeDeerSnowflakesGreen from "@/assets/christmas-tree-deer-snowflakes-green.jpg";
import christmasTreesPairGreenPink from "@/assets/christmas-trees-pair-green-pink.jpg";
import christmasSnowflakeBaroquePink from "@/assets/christmas-snowflake-baroque-pink.jpg";
import christmasGiftBoxBow from "@/assets/christmas-gift-box-bow.jpg";
import christmasTreeGreenOrnaments from "@/assets/christmas-tree-green-ornaments.jpg";
import christmasSnowflakeGreenFlower from "@/assets/christmas-snowflake-ornate.jpg";
import christmasSnowflakeHollyGreen from "@/assets/christmas-snowflake-green.jpg";
import christmasStarPink from "@/assets/christmas-star-pink.jpg";
import christmasRedSnowflakePearl from "@/assets/christmas-red-snowflake-pearl.jpg";
import christmasSantaClaus from "@/assets/christmas-santa-claus.jpg";
import christmasBabyAngels from "@/assets/christmas-baby-angels.jpg";

interface ChristmasProduct {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  description: string;
}

export const ChristmasSection = () => {
  const { language } = useLanguage();

  const christmasProducts: ChristmasProduct[] = [
    {
      id: 'christmas-snowflake-baroque',
      name: language === 'cs' ? 'Barokní růžová vločka' : 'Baroque Pink Snowflake',
      originalPrice: 165,
      discountedPrice: 149,
      image: christmasSnowflakeBaroquePink,
      description: language === 'cs' ? 'Velkolepá barokní vločka v královské růžové s propracovanými ornamenty - mistrovské dílo inspirované paláci, které přinese do vašeho domova okázalost a eleganci hodnou šlechty' : 'Magnificent baroque snowflake in royal pink with intricate ornaments - masterpiece inspired by palaces bringing grandeur and elegance worthy of nobility to your home'
    },
    {
      id: 'christmas-gift-box',
      name: language === 'cs' ? 'Vánoční dárek s mašlí' : 'Christmas Gift with Bow',
      originalPrice: 155,
      discountedPrice: 140,
      image: christmasGiftBoxBow,
      description: language === 'cs' ? 'Okouzlující dárkové balení v svěží zelené s romantickou růžovou mašlí a srdíčkem - symbol lásky a péče, ideální překvapení pro vaše blízké pod stromeček' : 'Charming gift package in fresh green with romantic pink bow and heart - symbol of love and care, ideal surprise for your loved ones under the tree'
    },
    {
      id: 'christmas-tree-ornaments',
      name: language === 'cs' ? 'Stromeček s ozdobami' : 'Tree with Ornaments',
      originalPrice: 145,
      discountedPrice: 131,
      image: christmasTreeGreenOrnaments,
      description: language === 'cs' ? 'Svěží zelený stromeček zdobený třpytivými ozdobami a korunovaný hvězdou - klasická vánoční krása, která nikdy nevyjde z módy a rozzáří každý interiér' : 'Fresh green tree decorated with sparkling ornaments and crowned with star - classic Christmas beauty that never goes out of style and brightens every interior'
    },
    {
      id: 'christmas-snowflake-flower',
      name: language === 'cs' ? 'Vločka s květinovým vzorem' : 'Floral Pattern Snowflake',
      originalPrice: 175,
      discountedPrice: 158,
      image: christmasSnowflakeGreenFlower,
      description: language === 'cs' ? 'Unikátní zelená vločka s bílým květinovým středem kombinující zimní eleganci s jarní něhou - mistrovské dílo propojující roční období v harmonické kráse' : 'Unique green snowflake with white floral center combining winter elegance with spring tenderness - masterpiece connecting seasons in harmonious beauty'
    },
    {
      id: 'christmas-holly-snowflake',
      name: language === 'cs' ? 'Cesmínová vločka' : 'Holly Snowflake',
      originalPrice: 165,
      discountedPrice: 149,
      image: christmasSnowflakeHollyGreen,
      description: language === 'cs' ? 'Majestátní zelená vločka s motivem cesmínových listů - tradiční vánoční symbol štěstí a ochrany, který přinese do vašeho domova požehnání svátků' : 'Majestic green snowflake with holly leaf motif - traditional Christmas symbol of luck and protection bringing holiday blessings to your home'
    },
    {
      id: 'christmas-star-pink',
      name: language === 'cs' ? 'Růžová vánoční hvězda' : 'Pink Christmas Star',
      originalPrice: 145,
      discountedPrice: 131,
      image: christmasStarPink,
      description: language === 'cs' ? 'Zářivá vánoční hvězda v jemně růžové barvě s propracovaným ornamentem - přineste do svého domova kouzlo Vánoc a okouzlete každého návštěvníka' : 'Radiant Christmas star in soft pink with intricate ornament - bring Christmas magic to your home and enchant every visitor'
    },
    {
      id: 'christmas-white-snowflake-pearl',
      name: language === 'cs' ? 'Červená vánoční hvězda' : 'Red Christmas Star',
      originalPrice: 165,
      discountedPrice: 149,
      image: christmasRedSnowflakePearl,
      description: language === 'cs' ? 'Zářivě červená vánoční hvězda symbolizující teplo a radost svátků - dokonalá dekorace, která rozzáří váš domov vánoční atmosférou' : 'Radiant red Christmas star symbolizing warmth and joy of holidays - perfect decoration that brightens your home with Christmas atmosphere'
    },
    {
      id: 'christmas-santa-claus',
      name: language === 'cs' ? 'Roztomilý Santa Claus' : 'Adorable Santa Claus',
      originalPrice: 165,
      discountedPrice: 149,
      image: christmasSantaClaus,
      description: language === 'cs' ? 'Okouzlující Santa Claus v tradičním červeném obleku - přineste domů radost Vánoc s tímto roztomilým pomocníkem, který rozzáří každý interiér' : 'Charming Santa Claus in traditional red suit - bring home Christmas joy with this adorable helper that brightens every interior'
    },
    {
      id: 'christmas-baby angels',
      name: language === 'cs' ? 'Vánoční andělé' : 'Christmas Baby Angels',
      originalPrice: 310,
      discountedPrice: 280,
      image: christmasBabyAngels,
      description: language === 'cs' ? 'Nádherná andělská sada' : 'Beautiful Baby angels - different set of colours'
    },
    {
      id: 'christmas-snowflake-pink',
      name: language === 'cs' ? 'Růžová vločka s reliéfem' : 'Pink Relief Snowflake',
      originalPrice: 155,
      discountedPrice: 140,
      image: christmasSnowflakePinkNew,
      description: language === 'cs' ? 'Nádherná růžová vločka s kontrastním bílým reliéfem - tento unikátní kousek v sobě spojuje jemnost a eleganci zimní pohádky' : 'Gorgeous pink snowflake with contrasting white relief - this unique piece combines delicacy and elegance of a winter fairy tale'
    },
    {
      id: 'christmas-tree-forest',
      name: language === 'cs' ? 'Stromeček s lesní scenérií' : 'Tree with Forest Scene',
      originalPrice: 175,
      discountedPrice: 158,
      image: christmasTreeDeerForest,
      description: language === 'cs' ? 'Kouzelný zelený stromeček zachycující idylickou zimní scenérii s jeleny v zasněženém lese - přeneste se do světa pohádkové přírody' : 'Magical green tree capturing idyllic winter scene with deer in snowy forest - transport yourself to world of fairy-tale nature'
    },
    {
      id: 'christmas-tree-deer',
      name: language === 'cs' ? 'Stromeček s jelenem' : 'Tree with Deer',
      originalPrice: 175,
      discountedPrice: 158,
      image: christmasTreeDeerSnowflakesGreen,
      description: language === 'cs' ? 'Elegantní zelený stromeček s majestátním jelenem obklopeným třpytivými vločkami - symbol síly a krásy zimní přírody' : 'Elegant green tree with majestic deer surrounded by sparkling snowflakes - symbol of strength and beauty of winter nature'
    },
    {
      id: 'christmas-trees-pair',
      name: language === 'cs' ? 'Dvojice stromečků' : 'Tree Pair',
      originalPrice: 310,
      discountedPrice: 280,
      image: christmasTreesPairGreenPink,
      description: language === 'cs' ? 'Okouzlující duo stromečků v harmonické kombinaci zelené a růžové - dokonalý dárek pro páry nebo pro ty, kteří milují kontrast a originalitu' : 'Charming duo of trees in harmonious green and pink combination - perfect gift for couples or those who love contrast and originality'
    },
    {
      id: 'christmas-reindeers',
      name: language === 'cs' ? 'Vánoční sobi' : 'Christmas Reindeer Set',
      originalPrice: 355,
      discountedPrice: 320,
      image: christmasReindeerSoaps,
      description: language === 'cs' ? 'Roztomilá sada sobů s mašlemi v tradičních vánočních barvách - dokonalý vánoční dárek, který potěší srdce malých i velkých' : 'Adorable reindeer set with bows in traditional Christmas colors - perfect Christmas gift that delights hearts of young and old'
    },
    {
      id: 'christmas-angels',
      name: language === 'cs' ? 'Vánoční andělé' : 'Christmas Angels',
      originalPrice: 310,
      discountedPrice: 280,
      image: christmasAngelSoaps,
      description: language === 'cs' ? 'Nádherná andělská sada v pastelových barvách - symbol ochrany, lásky a štěstí pro váš domov během celého roku' : 'Beautiful angel set in pastel colors - symbol of protection, love and happiness for your home throughout the year'
    },
    {
      id: 'christmas-angel-pink',
      name: language === 'cs' ? 'Růžový anděl' : 'Pink Angel',
      originalPrice: 175,
      discountedPrice: 158,
      image: christmasAngelPink,
      description: language === 'cs' ? 'Jemný andílek se srdíčkem v něžně růžové barvě - nádherný symbol lásky a ochrany pro vaše blízké, ideální dárek pro každou příležitost' : 'Delicate angel with heart in soft pink color - beautiful symbol of love and protection for your loved ones, ideal gift for any occasion'
    },
  ];

  const handleQuickOrder = (product: ChristmasProduct) => {
    const subject = encodeURIComponent(`Vánoční objednávka: ${product.name}`);
    const body = encodeURIComponent(`Dobrý den,\n\nráda bych si objednala vánoční mýdlo se slevou 10%:\n\n${product.name}\nPůvodní cena: ${product.originalPrice} Kč\nCena se slevou: ${product.discountedPrice} Kč\n\nDěkuji,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 via-green-50/30 to-red-50 dark:from-red-950/20 dark:via-green-950/10 dark:to-red-950/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-600 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎄 {language === 'cs' ? 'VÁNOČNÍ SLEVA 10%' : 'CHRISTMAS SALE 10%'} 🎄
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-green-600 to-red-600 bg-clip-text text-transparent mb-6">
            {language === 'cs' ? 'Vánoční kolekce' : 'Christmas Collection'}
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {language === 'cs' 
              ? 'Objevte naši kouzelnou vánoční kolekci ručně vyráběných dekorativních mýdel. Každý kousek je vytvořen s láskou a péčí, aby přinesl do vašeho domova kouzlo Vánoc.'
              : 'Discover our magical Christmas collection of handmade decorative soaps. Each piece is crafted with love and care to bring Christmas magic to your home.'}
          </p>
        </div>

        {/* Christmas Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {christmasProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-premium transition-bounce border-2 border-red-100 dark:border-red-900/30 group">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  -10%
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-2xl">🎄</span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-primary mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-foreground/50 line-through">
                      {product.originalPrice} Kč
                    </span>
                    <span className="text-lg font-bold text-red-600">
                      {product.discountedPrice} Kč
                    </span>
                  </div>
                  <Button 
                    variant="default" 
                    onClick={() => handleQuickOrder(product)}
                    className="rounded-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white"
                    size="sm"
                  >
                    {language === 'cs' ? 'Objednat' : 'Order'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Christmas Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-600 via-green-600 to-red-600 rounded-3xl p-8 text-center text-white shadow-premium">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            🎁 {language === 'cs' ? 'Ideální vánoční dárek!' : 'Perfect Christmas Gift!'} 🎁
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            {language === 'cs' 
              ? 'Překvapte své blízké originálním ručně vyráběným mýdlem. Každý kousek je unikátní umělecké dílo zabalené s láskou.'
              : 'Surprise your loved ones with original handmade soap. Each piece is a unique work of art wrapped with love.'}
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="rounded-full bg-white text-red-600 hover:bg-gray-100 font-bold"
            onClick={() => {
              const subject = encodeURIComponent('Vánoční objednávka - celá kolekce');
              const body = encodeURIComponent('Dobrý den,\n\nmám zájem o vánoční kolekci mýdel se slevou 10%.\n\nProsím o více informací.\n\nDěkuji,');
              window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
            }}
          >
            {language === 'cs' ? 'Objednat celou kolekci' : 'Order Full Collection'}
          </Button>
        </div>
      </div>
    </section>
  );
};
