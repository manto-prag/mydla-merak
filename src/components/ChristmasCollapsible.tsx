import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

// Christmas imports - only loaded when this component is rendered
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
import christmasSantaSkiing from "@/assets/christmas-santa-skiing.jpg";
import christmasStarPink from "@/assets/christmas-star-pink.jpg";
import christmasRedSnowflakePearl from "@/assets/christmas-red-snowflake-pearl.jpg";
import christmasSantaClaus from "@/assets/christmas-santa-claus.jpg";
import christmasBabyAngels from "@/assets/christmas-baby-angels.jpg";
import christmassnow from "@/assets/Full White snowflake.jpg";
import christmasAngelswings from "@/assets/Angels wings.jpg";
import christmasBells from "@/assets/Bells.jpg";
import christmasgreensnow from "@/assets/Green snowflake.jpg";
import christmaswgsnow from "@/assets/White-green snowflake.jpg";

interface ChristmasProduct {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  description: string;
}

export const ChristmasCollapsible = () => {
  const { language } = useLanguage();
  const [christmasOpen, setChristmasOpen] = useState(false);

  const christmasProducts: ChristmasProduct[] = [
    { id: 'christmas-snowflake-baroque', name: language === 'cs' ? 'Barokní růžová vločka' : 'Baroque Pink Snowflake', originalPrice: 165, discountedPrice: 149, image: christmasSnowflakeBaroquePink, description: language === 'cs' ? 'Velkolepá barokní vločka v královské růžové s propracovanými ornamenty' : 'Magnificent baroque snowflake in royal pink with intricate ornaments' },
    { id: 'christmas-gift-box', name: language === 'cs' ? 'Vánoční dárek s mašlí' : 'Christmas Gift with Bow', originalPrice: 155, discountedPrice: 140, image: christmasGiftBoxBow, description: language === 'cs' ? 'Okouzlující dárkové balení v zelené s růžovou mašlí a srdíčkem' : 'Charming gift package in green with pink bow and heart' },
    { id: 'christmas-tree-ornaments', name: language === 'cs' ? 'Stromeček s ozdobami' : 'Tree with Ornaments', originalPrice: 145, discountedPrice: 131, image: christmasTreeGreenOrnaments, description: language === 'cs' ? 'Svěží zelený stromeček zdobený třpytivými ozdobami a korunovaný hvězdou' : 'Fresh green tree decorated with sparkling ornaments and crowned with star' },
    { id: 'christmas-snowflake-flower', name: language === 'cs' ? 'Vločka s květinovým vzorem' : 'Floral Pattern Snowflake', originalPrice: 175, discountedPrice: 158, image: christmasSnowflakeGreenFlower, description: language === 'cs' ? 'Unikátní zelená vločka s bílým květinovým středem' : 'Unique green snowflake with white floral center' },
    { id: 'christmas-holly-snowflake', name: language === 'cs' ? 'Cesmínová vločka' : 'Holly Snowflake', originalPrice: 165, discountedPrice: 149, image: christmasSnowflakeHollyGreen, description: language === 'cs' ? 'Majestátní zelená vločka s motivem cesmínových listů' : 'Majestic green snowflake with holly leaf motif' },
    { id: 'christmas-santa-skiing', name: language === 'cs' ? 'Santa na lyžích' : 'Skiing Santa', originalPrice: 185, discountedPrice: 167, image: christmasSantaSkiing, description: language === 'cs' ? 'Veselý Santa Claus sjíždějící alpské svahy s dárky' : 'Jolly Santa skiing down alpine slopes with gifts' },
    { id: 'christmas-star-pink', name: language === 'cs' ? 'Růžová vánoční hvězda' : 'Pink Christmas Star', originalPrice: 145, discountedPrice: 131, image: christmasStarPink, description: language === 'cs' ? 'Zářivá vánoční hvězda v jemně růžové s ornamentem' : 'Radiant Christmas star in soft pink with ornament' },
    { id: 'christmas-blue-snowflake', name: language === 'cs' ? 'Žlutá vánoční vločka' : 'Yellow Christmas Snowflake', originalPrice: 155, discountedPrice: 140, image: christmasBlueSnowflake, description: language === 'cs' ? 'Zářivě žlutá vločka evokující teplo vánočních svíček' : 'Radiant yellow snowflake evoking warmth of Christmas candles' },
    { id: 'christmas-white-snowflake-pearl', name: language === 'cs' ? 'Červená vánoční hvězda' : 'Red Christmas Star', originalPrice: 165, discountedPrice: 149, image: christmasWhiteSnowflakePearl, description: language === 'cs' ? 'Zářivě červená vánoční hvězda symbolizující teplo svátků' : 'Radiant red Christmas star symbolizing warmth of holidays' },
    { id: 'christmas-green-snowflake-star', name: language === 'cs' ? 'Zelená vločka s hvězdou' : 'Green Snowflake with Star', originalPrice: 155, discountedPrice: 140, image: christmasGreenSnowflakeStar, description: language === 'cs' ? 'Elegantní zelená vločka s hvězdicovým vzorem' : 'Elegant green snowflake with star pattern' },
    { id: 'christmas-pink-tree-pearls', name: language === 'cs' ? 'Růžový stromeček s perlami' : 'Pink Tree with Pearls', originalPrice: 175, discountedPrice: 158, image: christmasPinkTreePearls, description: language === 'cs' ? 'Jemně růžový stromeček ozdobený bílými perličkami' : 'Soft pink tree decorated with white pearls' },
    { id: 'christmas-santa-claus', name: language === 'cs' ? 'Roztomilý Santa Claus' : 'Adorable Santa Claus', originalPrice: 165, discountedPrice: 149, image: christmasSantaClaus, description: language === 'cs' ? 'Okouzlující Santa Claus v tradičním červeném obleku' : 'Charming Santa Claus in traditional red suit' },
    { id: 'christmas-green-trees-pair', name: language === 'cs' ? 'Dvojice zelených stromečků' : 'Green Trees Pair', originalPrice: 290, discountedPrice: 261, image: christmasGreenTreesPair, description: language === 'cs' ? 'Okouzlující dvojice zelených stromečků s ozdobami' : 'Charming pair of green trees with ornaments' },
    { id: 'christmas-white-star-ornaments', name: language === 'cs' ? 'Bílá hvězda s ozdobami' : 'White Star with Ornaments', originalPrice: 155, discountedPrice: 140, image: christmasWhiteStarOrnaments, description: language === 'cs' ? 'Zářivá bílá vánoční hvězda s červenými a zelenými ozdobami' : 'Radiant white Christmas star with red and green ornaments' },
    { id: 'christmas-pink-star-tree', name: language === 'cs' ? 'Růžová vánoční hvězda' : 'Pink Christmas Star', originalPrice: 165, discountedPrice: 149, image: christmasPinkStarTree, description: language === 'cs' ? 'Okouzlující růžová vánoční hvězda s propracovanými detaily' : 'Enchanting pink Christmas star with intricate details' },
    { id: 'christmas-pink-snowflake-detailed', name: language === 'cs' ? 'Detailní růžová vločka' : 'Detailed Pink Snowflake', originalPrice: 165, discountedPrice: 149, image: christmasPinkSnowflakeDetailed, description: language === 'cs' ? 'Propracovaná růžová vločka s jemnými detaily' : 'Intricate pink snowflake with fine details' },
    { id: 'christmas-snowflake-pink', name: language === 'cs' ? 'Růžová vločka s reliéfem' : 'Pink Relief Snowflake', originalPrice: 155, discountedPrice: 140, image: christmasSnowflakePinkNew, description: language === 'cs' ? 'Nádherná růžová vločka s kontrastním bílým reliéfem' : 'Gorgeous pink snowflake with contrasting white relief' },
    { id: 'christmas-tree-forest', name: language === 'cs' ? 'Stromeček s lesní scenérií' : 'Tree with Forest Scene', originalPrice: 175, discountedPrice: 158, image: christmasTreeDeerForest, description: language === 'cs' ? 'Kouzelný zelený stromeček se zimní scenérií s jeleny' : 'Magical green tree with winter scene and deer' },
    { id: 'christmas-tree-deer', name: language === 'cs' ? 'Stromeček s jelenem' : 'Tree with Deer', originalPrice: 175, discountedPrice: 158, image: christmasTreeDeerSnowflakesGreen, description: language === 'cs' ? 'Elegantní zelený stromeček s majestátním jelenem a vločkami' : 'Elegant green tree with majestic deer and snowflakes' },
    { id: 'christmas-trees-pair', name: language === 'cs' ? 'Dvojice stromečků' : 'Tree Pair', originalPrice: 310, discountedPrice: 280, image: christmasTreesPairGreenPink, description: language === 'cs' ? 'Okouzlující duo stromečků v zelené a růžové' : 'Charming duo of trees in green and pink' },
    { id: 'christmas-reindeers', name: language === 'cs' ? 'Vánoční sobi' : 'Christmas Reindeer Set', originalPrice: 355, discountedPrice: 320, image: christmasReindeerSoaps, description: language === 'cs' ? 'Roztomilá sada sobů s mašlemi ve vánočních barvách' : 'Adorable reindeer set with bows in Christmas colors' },
    { id: 'christmas-angels', name: language === 'cs' ? 'Vánoční andělé' : 'Christmas Angels', originalPrice: 310, discountedPrice: 280, image: christmasAngelSoaps, description: language === 'cs' ? 'Nádherná andělská sada v pastelových barvách' : 'Beautiful angel set in pastel colors' },
    { id: 'christmas-angel-pink', name: language === 'cs' ? 'Růžový anděl' : 'Pink Angel', originalPrice: 175, discountedPrice: 158, image: christmasAngelPink, description: language === 'cs' ? 'Jemný andílek se srdíčkem v něžně růžové barvě' : 'Delicate angel with heart in soft pink color' },
  ];

  const handleChristmasOrder = (product: ChristmasProduct) => {
    const subject = encodeURIComponent(`Vánoční objednávka: ${product.name}`);
    const body = encodeURIComponent(`Dobrý den,\n\nráda bych si objednala vánoční voňavý výrobek se slevou 10%:\n\n${product.name}\nPůvodní cena: ${product.originalPrice} Kč\nCena se slevou: ${product.discountedPrice} Kč\n\nDěkuji,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mb-16">
      <button
        onClick={() => setChristmasOpen(!christmasOpen)}
        className="w-full flex items-center justify-between bg-gradient-to-r from-red-600 via-green-600 to-red-600 text-white rounded-3xl px-8 py-6 shadow-premium hover:shadow-glow transition-bounce group"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">🎄</span>
          <div className="text-left">
            <h3 className="font-heading text-2xl md:text-3xl font-bold">
              {language === 'cs' ? 'Vánoce' : 'Christmas'}
            </h3>
            <p className="text-sm opacity-90">
              {language === 'cs' ? 'Vánoční kolekce se slevou 10%' : 'Christmas collection with 10% discount'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">-10%</span>
          {christmasOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </button>

      {christmasOpen && (
        <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {christmasProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-premium transition-bounce border-2 border-red-100 dark:border-red-900/30 group">
                <div className="aspect-square relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain bg-white group-hover:scale-105 transition-smooth" loading="lazy" />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">-10%</div>
                  <div className="absolute top-4 right-4"><span className="text-2xl">🎄</span></div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-primary mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm text-foreground/50 line-through">{product.originalPrice} Kč</span>
                      <span className="text-lg font-bold text-red-600">{product.discountedPrice} Kč</span>
                    </div>
                    <Button variant="default" onClick={() => handleChristmasOrder(product)} className="rounded-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white" size="sm">
                      {language === 'cs' ? 'Objednat' : 'Order'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Christmas Banner */}
          <div className="mt-8 bg-gradient-to-r from-red-600 via-green-600 to-red-600 rounded-3xl p-8 text-center text-white shadow-premium">
            <h3 className="font-heading text-2xl font-bold mb-4">
              🎁 {language === 'cs' ? 'Ideální vánoční dárek!' : 'Perfect Christmas Gift!'} 🎁
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              {language === 'cs' ? 'Překvapte své blízké originálním ručně vyráběným voňavým výrobkem.' : 'Surprise your loved ones with original handmade fragrance product.'}
            </p>
            <Button variant="secondary" size="lg" className="rounded-full bg-white text-red-600 hover:bg-gray-100 font-bold"
              onClick={() => {
                const subject = encodeURIComponent('Vánoční objednávka - celá kolekce');
                const body = encodeURIComponent('Dobrý den,\n\nmám zájem o vánoční kolekci voňavých výrobků se slevou 10%.\n\nDěkuji,');
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
