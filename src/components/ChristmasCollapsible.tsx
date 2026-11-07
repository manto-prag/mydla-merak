import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/Lightbox";
import { ChevronDown, ChevronUp } from "lucide-react";

// Christmas imports - only loaded when this component is rendered
import christmasReindeerSoaps from "@/assets/christmas-reindeer-soaps.jpg";
import christmasAngelsPinkMint from "@/assets/christmas-angels-pink-mint.png";
import christmasAngelPink from "@/assets/christmas-angel-pink.jpg";
import christmasSnowflakePinkNew from "@/assets/christmas-snowflake-pink-detailed.jpg";
import christmasTreeDeerForest from "@/assets/christmas-tree-deer-forest.jpg";
import christmasTreeDeerSnowflakesGreen from "@/assets/christmas-tree-deer-snowflakes-green.jpg";
import christmasTreesPairGreenPink from "@/assets/christmas-trees-pair-green-pink.jpg";
import christmasSnowflakeBaroquePink from "@/assets/christmas-snowflake-baroque-pink.jpg";
import christmasGiftBoxBow from "@/assets/christmas-gift-box-bow.jpg";
import christmasTreeGreenOrnaments from "@/assets/christmas-tree-green-ornaments.jpg";
import christmasSnowflakeGreenFlower from "@/assets/christmas-snowflake-green-flower.jpg";
import christmasSnowflakeLimeStar from "@/assets/christmas-snowflake-lime-star.png";

import christmasStarPink from "@/assets/christmas-star-pink.jpg";
import christmasSnowflakeYellow from "@/assets/christmas-snowflake-yellow.jpg";
import christmasStarRed from "@/assets/christmas-star-red.jpg";
import christmasBellsPinkOval from "@/assets/christmas-bells-pink-oval-green.jpg";
import christmasSnowflakeGold from "@/assets/christmas-snowflake-gold.jpg";
import christmasSantaSkiingPlaque from "@/assets/christmas-santa-skiing-plaque.jpg";
import christmasSnowflakeGreenWhite from "@/assets/christmas-snowflake-green-white.jpg";
import christmasSnowflakePinkWhite from "@/assets/christmas-snowflake-pink-white.jpg";
import christmasAngelPlaques from "@/assets/christmas-angel-plaques-pink-white.jpg";
import christmasSnowflakeGreenWhiteCenter from "@/assets/christmas-snowflake-green-white-center.jpg";

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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [christmasOpen, setChristmasOpen] = useState(false);

  const christmasProducts: ChristmasProduct[] = [
    { id: 'christmas-snowflake-baroque', name: language === 'cs' ? "Růžová ornamentální vločka" : "Pink Ornamental Snowflake", originalPrice: 109, discountedPrice: 109, image: christmasSnowflakeBaroquePink, description: language === 'cs' ? "Růžová vločka s kontrastními světlými ornamenty. Výrazná ozdoba pro sváteční chvíle." : "A pink snowflake with contrasting pale ornaments. A striking festive accent." },
    { id: 'christmas-gift-box', name: language === 'cs' ? "Dáreček s mašlí" : "Gift with Bow", originalPrice: 109, discountedPrice: 109, image: christmasGiftBoxBow, description: language === 'cs' ? "Zelený reliéfní dáreček s velkou růžovou mašlí. Hravý detail do vánoční výzdoby." : "A green gift-shaped piece with a large pink bow. A playful Christmas accent." },
    { id: 'christmas-tree-ornaments', name: language === 'cs' ? "Zelený stromeček" : "Green Christmas Tree", originalPrice: 109, discountedPrice: 109, image: christmasTreeGreenOrnaments, description: language === 'cs' ? "Zelený stromeček s drobnými ozdobami a hvězdou na špičce. Milá sváteční pozornost." : "A green tree with small ornaments and a star on top. A lovely festive gift." },
    { id: 'christmas-snowflake-flower', name: language === 'cs' ? "Květinová vločka" : "Floral Snowflake", originalPrice: 109, discountedPrice: 109, image: christmasSnowflakeGreenFlower, description: language === 'cs' ? "Zelená vločka s bílým květinovým středem. Jemná dekorace s neobvyklým detailem." : "A green snowflake with a white floral centre. A delicate decoration with an unusual detail." },
    { id: 'christmas-snowflake-lime-star', name: language === 'cs' ? "Limetková vločka" : "Lime Snowflake", originalPrice: 109, discountedPrice: 109, image: christmasSnowflakeLimeStar, description: language === 'cs' ? "Zářivě zelená vločka s hvězdicovým středem. Svěží barevný akcent na svátky." : "A bright green snowflake with a star-shaped centre. A fresh festive accent." },
    
    { id: 'christmas-star-pink', name: language === 'cs' ? "Růžová hvězda" : "Pink Star", originalPrice: 109, discountedPrice: 109, image: christmasStarPink, description: language === 'cs' ? "Růžová hvězda s jemným světlým krajkovým reliéfem. Něžný detail do vánoční výzdoby." : "A pink star with delicate pale lace relief. A gentle Christmas accent." },
    { id: 'christmas-snowflake-yellow', name: language === 'cs' ? "Žlutá vločka" : "Yellow Snowflake", originalPrice: 109, discountedPrice: 109, image: christmasSnowflakeYellow, description: language === 'cs' ? "Žlutá vločka s bílým reliéfním vzorem. Veselá drobnost pro sváteční atmosféru." : "A yellow snowflake with a white raised pattern. A cheerful festive detail." },
    { id: 'christmas-star-red', name: language === 'cs' ? "Červená hvězda" : "Red Star", originalPrice: 109, discountedPrice: 109, image: christmasStarRed, description: language === 'cs' ? "Červená hvězda se světlým krajkovým vzorem. Výrazná ozdoba v tradičních barvách." : "A red star with a pale lace pattern. A bold ornament in traditional colours." },
    { id: 'christmas-bells-pink-oval', name: language === 'cs' ? "Růžové zvonky" : "Pink Bells", originalPrice: 109, discountedPrice: 109, image: christmasBellsPinkOval, description: language === 'cs' ? "Zelený ovál s růžovými zvonky a mašlí. Půvabná vánoční dekorace." : "A green oval with pink bells and a bow. A charming Christmas decoration." },
    { id: 'christmas-snowflake-gold', name: language === 'cs' ? "Zlatavá vločka" : "Golden Snowflake", originalPrice: 109, discountedPrice: 109, image: christmasSnowflakeGold, description: language === 'cs' ? "Zlatožlutá vločka s jemným ornamentálním reliéfem. Teplý barevný tón pro sváteční výzdobu." : "A golden-yellow snowflake with delicate ornamental relief. A warm festive accent." },
    { id: 'christmas-santa-skiing-plaque', name: language === 'cs' ? "Vánoční reliéf se Santou" : "Christmas Santa Relief", originalPrice: 109, discountedPrice: 109, image: christmasSantaSkiingPlaque, description: language === 'cs' ? "Zelená destička s červenou postavičkou Santy na lyžích. Hravý vánoční motiv k darování." : "A green tablet with a red skiing Santa figure. A playful Christmas gift motif." },
    { id: 'christmas-snowflake-green-white', name: language === 'cs' ? "Zelenobílá vločka" : "Green and White Snowflake", originalPrice: 109, discountedPrice: 109, image: christmasSnowflakeGreenWhite, description: language === 'cs' ? "Zelenobílá vločka s výrazným hvězdicovým vzorem. Svěží ozdoba pro zimní chvíle." : "A green and white snowflake with a bold star pattern. A fresh winter ornament." },
    { id: 'christmas-snowflake-pink-white', name: language === 'cs' ? "Růžovobílá vločka" : "Pink and White Snowflake", originalPrice: 109, discountedPrice: 109, image: christmasSnowflakePinkWhite, description: language === 'cs' ? "Růžová vločka se světlými zdobenými rameny. Jemný sváteční detail do vašeho domova." : "A pink snowflake with pale ornamental arms. A delicate festive detail for your home." },
    { id: 'christmas-angel-plaques', name: language === 'cs' ? "Andělské destičky – dvojice" : "Angel Tablets – Pair", originalPrice: 549, discountedPrice: 549, image: christmasAngelPlaques, description: language === 'cs' ? "Dvojice destiček s růžovým a bílým andělským reliéfem. Něžná sada pro sváteční obdarování." : "A pair of tablets with pink and white angel relief. A delicate festive gift set." },
    { id: 'christmas-snowflake-green-white-center', name: language === 'cs' ? "Zelená vločka" : "Green Snowflake", originalPrice: 109, discountedPrice: 109, image: christmasSnowflakeGreenWhiteCenter, description: language === 'cs' ? "Zelená vločka s drobným bílým vzorem uprostřed. Střídmá a vkusná zimní dekorace." : "A green snowflake with a small white pattern in the centre. A simple, tasteful winter decoration." },
    { id: 'christmas-snowflake-pink', name: language === 'cs' ? "Pastelová růžová vločka" : "Pastel Pink Snowflake", originalPrice: 109, discountedPrice: 109, image: christmasSnowflakePinkNew, description: language === 'cs' ? "Světle růžová vločka s jemným reliéfem. Něžná pozornost pro vánoční čas." : "A pale pink snowflake with delicate relief. A thoughtful Christmas gift." },
    { id: 'christmas-tree-forest', name: language === 'cs' ? "Stromeček s lesním motivem" : "Forest Motif Tree", originalPrice: 109, discountedPrice: 109, image: christmasTreeDeerForest, description: language === 'cs' ? "Zelený stromeček s bílým reliéfem lesa a jelenů. Zimní scenérie v malém svátečním detailu." : "A green tree with white forest and deer relief. A winter scene in a small festive detail." },
    { id: 'christmas-tree-deer', name: language === 'cs' ? "Stromeček s jelenem" : "Deer Motif Tree", originalPrice: 109, discountedPrice: 109, image: christmasTreeDeerSnowflakesGreen, description: language === 'cs' ? "Zelený stromeček s bílým jelenem a vločkami. Půvabná dekorace pro milovníky zimních motivů." : "A green tree with a white deer and snowflakes. A charming decoration for winter motif lovers." },
    { id: 'christmas-trees-pair', name: language === 'cs' ? "Stromečky – dvojice" : "Christmas Trees – Pair", originalPrice: 549, discountedPrice: 549, image: christmasTreesPairGreenPink, description: language === 'cs' ? "Zelená a krémová destička s kontrastními stromečky. Barevně sladěná vánoční sada." : "Green and cream tablets with contrasting trees. A coordinated Christmas set." },
    { id: 'christmas-reindeers', name: language === 'cs' ? "Vánoční sobi – sada" : "Christmas Reindeer – Set", originalPrice: 549, discountedPrice: 549, image: christmasReindeerSoaps, description: language === 'cs' ? "Růžoví a bílí sobi s barevnými mašlemi. Hravá sada do sváteční výzdoby." : "Pink and white reindeer with colourful bows. A playful festive decoration set." },
    { id: 'christmas-angels-pink-mint', name: language === 'cs' ? "Pasteloví andílci – dvojice" : "Pastel Angels – Pair", originalPrice: 549, discountedPrice: 549, image: christmasAngelsPinkMint, description: language === 'cs' ? "Růžový a mátový ležící andílek s rozevřenými křídly. Něžná dárková dvojice." : "Pink and mint reclining angels with open wings. A delicate gift pair." },
    { id: 'christmas-angel-pink', name: language === 'cs' ? "Růžový andílek" : "Pink Angel", originalPrice: 109, discountedPrice: 109, image: christmasAngelPink, description: language === 'cs' ? "Růžový andílek se srdíčkovým otvorem. Malá dekorace s milým svátečním poselstvím." : "A pink angel with a heart-shaped opening. A little decoration with a heartfelt festive message." },
  ];

  const handleChristmasOrder = (product: ChristmasProduct) => {
    const subject = encodeURIComponent(`Vánoční objednávka: ${product.name}`);
    const body = encodeURIComponent(`Dobrý den,\n\nrád(a) bych si objednal(a) vánoční voňavý výrobek:\n\n${product.name}\nCena: ${product.discountedPrice} Kč\n\nDěkuji,`);
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
              {language === 'cs' ? 'Vánoční kolekce' : 'Christmas collection'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">🎁</span>
          {christmasOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </button>

      {christmasOpen && (
        <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {christmasProducts.map((product, idx) => (
              <div key={product.id} className="bg-white dark:bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-premium transition-bounce border-2 border-red-100 dark:border-red-900/30 group">
                <div className="aspect-square relative overflow-hidden cursor-zoom-in" onClick={() => setLightboxIndex(idx)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") setLightboxIndex(idx); }}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain bg-white group-hover:scale-105 transition-smooth" loading="lazy" />
                  {product.originalPrice > product.discountedPrice && <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">-{Math.round((1 - product.discountedPrice / product.originalPrice) * 100)}%</div>}
                  <div className="absolute top-4 right-4"><span className="text-2xl">🎄</span></div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-primary mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      {product.originalPrice !== product.discountedPrice && <span className="text-sm text-foreground/50 line-through">{product.originalPrice} Kč</span>}
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
                const body = encodeURIComponent('Dobrý den,\n\nmám zájem o vánoční kolekci voňavých výrobků.\n\nDěkuji,');
                window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
              }}>
              {language === 'cs' ? 'Objednat celou kolekci' : 'Order Full Collection'}
            </Button>
          </div>
        </div>
      )}
      <Lightbox
        items={christmasProducts.map((p) => ({ src: p.image, alt: p.name, caption: p.description }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
};
