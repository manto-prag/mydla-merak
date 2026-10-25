import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/Lightbox";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [easterOpen, setEasterOpen] = useState(false);

  const easterProducts: EasterProduct[] = [
    {
      id: 'easter-bunny-green-pearl',
      name: language === 'cs' ? "Zelený zajíček" : "Green Bunny",
      price: 109,
      image: '@/assets/easter-bunny-green-pearl.jpg',
      description: language === 'cs' ? "Zelený zajíček se srdíčkovým otvorem, stužkou a perličkou. Milá jarní dekorace." : "A green bunny with a heart-shaped opening, ribbon and bead. A lovely spring decoration.",
      badge: language === 'cs' ? 'Novinka' : 'New'
    },
    {
      id: 'easter-bunny-white-pearl',
      name: language === 'cs' ? "Bílý zajíček" : "White Bunny",
      price: 109,
      image: '/lovable-uploads/easter-bunny-white-pearl.jpg',
      description: language === 'cs' ? "Bílý zajíček se zlatou stužkou a perličkou nad srdíčkem. Něžný velikonoční dárek." : "A white bunny with a golden ribbon and bead above a heart-shaped opening. A delicate Easter gift."
    },
    {
      id: 'easter-bunny-yellow-pearl',
      name: language === 'cs' ? "Žlutý zajíček" : "Yellow Bunny",
      price: 109,
      image: '/lovable-uploads/easter-bunny-yellow-pearl.jpg',
      description: language === 'cs' ? "Žlutý zajíček se srdíčkem, mašlí a perličkou. Veselý detail pro jarní výzdobu." : "A yellow bunny with a heart-shaped opening, bow and bead. A cheerful spring accent."
    },
    {
      id: 'easter-bunnies-colorful-set',
      name: language === 'cs' ? "Barevní zajíčci – sada" : "Colourful Bunnies – Set",
      price: 549,
      image: '/lovable-uploads/easter-bunnies-colorful-set.jpg',
      description: language === 'cs' ? "Čtyři zajíčci v růžové, broskvové a modré, každý s vlastním zdobením. Hravá velikonoční sada." : "Four bunnies in pink, peach and blue, each with its own details. A playful Easter set.",
      badge: language === 'cs' ? 'Dárková sada' : 'Gift Set'
    },
    {
      id: 'easter-bunny-blue-floral',
      name: language === 'cs' ? "Květinový zajíc" : "Floral Bunny",
      price: 109,
      image: '/lovable-uploads/easter-bunny-blue-floral.jpg',
      description: language === 'cs' ? "Modrý zajíc s květinovým reliéfem. Výrazný detail do velikonoční výzdoby." : "A blue bunny with floral relief. A striking detail for your Easter decorations.",
      badge: language === 'cs' ? 'Unikát' : 'Unique'
    },
    {
      id: 'easter-bunnies-pink-peach-pair',
      name: language === 'cs' ? "Pasteloví zajíčci – dvojice" : "Pastel Bunny Pair",
      price: 200,
      image: '/lovable-uploads/easter-bunnies-pink-peach-pair.jpg',
      description: language === 'cs' ? "Růžový a broskvový zajíček s mašličkami a srdíčky. Něžná dárková dvojice." : "Pink and peach bunnies with bows and heart-shaped openings. A delicate gift pair."
    },
    {
      id: 'easter-bunnies-trio',
      name: language === 'cs' ? "Zajíčci s mašlemi – trio" : "Bunnies with Bows – Trio",
      price: 549,
      image: '/lovable-uploads/easter-bunnies-trio.jpg',
      description: language === 'cs' ? "Tři zajíčci v růžové, modré a broskvové se zdobenými mašlemi. Barevná sada pro radost." : "Three bunnies in pink, blue and peach with decorative bows. A colourful, cheerful set.",
      badge: language === 'cs' ? 'Bestseller' : 'Bestseller'
    },
    {
      id: 'easter-bunnies-blue-pink',
      name: language === 'cs' ? "Růžový a modrý zajíček" : "Pink and Blue Bunny Pair",
      price: 200,
      image: '/lovable-uploads/easter-bunnies-blue-pink.jpg',
      description: language === 'cs' ? "Dvojice zajíčků s mašličkami a srdíčkovým otvorem. Svěží barevný dárek." : "A pair of bunnies with bows and heart-shaped openings. A fresh, colourful gift."
    },
    {
      id: 'easter-bunnies-pastel-group',
      name: language === 'cs' ? "Pasteloví zajíčci – sada" : "Pastel Bunnies – Set",
      price: 549,
      image: '/lovable-uploads/easter-bunnies-pastel-group.jpg',
      description: language === 'cs' ? "Zajíčci v pastelových barvách se stužkami a perličkami. Půvabná sada pro jarní chvíle." : "Pastel bunnies with ribbons and beads. A charming set for spring.",
      badge: language === 'cs' ? 'Premium' : 'Premium'
    },
    {
      id: 'easter-eggs-green-ornate',
      name: language === 'cs' ? "Zelená vajíčka – dvojice" : "Green Eggs – Pair",
      price: 200,
      image: '/lovable-uploads/easter-eggs-green-ornate.jpg',
      description: language === 'cs' ? "Dvě zelená vajíčka s bohatým reliéfem květin a zajíčka. Elegantní velikonoční sada." : "Two green eggs with detailed floral and bunny relief. An elegant Easter set.",
      badge: language === 'cs' ? 'Luxus' : 'Luxury'
    },
    {
      id: 'easter-heart-bunny-blue',
      name: language === 'cs' ? "Srdce se zajíčkem" : "Heart with Bunny",
      price: 109,
      image: '/lovable-uploads/easter-heart-bunny-blue.jpg',
      description: language === 'cs' ? "Modré srdce se žlutým zajíčkem a zdobeným světlým rámečkem. Originální jarní pozornost." : "A blue heart with a yellow bunny and an ornate pale border. An original spring gift.",
      badge: language === 'cs' ? 'Unikát' : 'Unique'
    },
    {
      id: 'easter-egg-bunny-ears-peach',
      name: language === 'cs' ? "Broskvové vajíčko" : "Peach Egg",
      price: 109,
      image: '/lovable-uploads/easter-egg-bunny-ears-peach.jpg',
      description: language === 'cs' ? "Broskvové vajíčko se žlutými oušky a stužkou k zavěšení. Jemná velikonoční ozdoba." : "A peach egg with yellow bunny ears and a hanging ribbon. A delicate Easter ornament."
    },
    {
      id: 'easter-egg-bunny-silhouette-blue',
      name: language === 'cs' ? "Modré vajíčko se zajíčkem" : "Blue Bunny Egg",
      price: 109,
      image: '/lovable-uploads/easter-egg-bunny-silhouette-blue.jpg',
      description: language === 'cs' ? "Modré vajíčko se žlutou siluetou zajíčka a vroubkovaným okrajem. Hravá závěsná dekorace." : "A blue egg with a yellow bunny silhouette and scalloped edge. A playful hanging decoration."
    },
    {
      id: 'easter-egg-bunny-ears-mint',
      name: language === 'cs' ? "Vajíčko s oušky" : "Egg with Bunny Ears",
      price: 109,
      image: '/lovable-uploads/easter-egg-bunny-ears-mint.jpg',
      description: language === 'cs' ? "Růžovo-zelené vajíčko s reliéfem oušek a stužkou. Něžný detail do jarní výzdoby." : "A pink and green egg with raised bunny ears and a ribbon. A delicate spring accent."
    },
    {
      id: 'easter-egg-zigzag-pastel',
      name: language === 'cs' ? "Pastelové vajíčko" : "Pastel Egg",
      price: 109,
      image: '/lovable-uploads/easter-egg-zigzag-pastel.jpg',
      description: language === 'cs' ? "Žluté, růžové a zelené vrstvy se zvlněnými hranami. Barevná ozdoba k zavěšení." : "Yellow, pink and green layers with zigzag edges. A colourful hanging ornament."
    },
    {
      id: 'easter-eggs-collection-pastel',
      name: language === 'cs' ? "Pastelová vajíčka – sada" : "Pastel Eggs – Set",
      price: 549,
      image: '/lovable-uploads/easter-eggs-collection-pastel.jpg',
      description: language === 'cs' ? "Závěsná vajíčka s motivy zajíčků v pastelových barvách. Pestrá sada pro velikonoční výzdobu." : "Hanging eggs with bunny motifs in pastel colours. A colourful Easter decoration set.",
      badge: language === 'cs' ? 'Premium sada' : 'Premium Set'
    },
  ];

  const handleEasterOrder = (product: EasterProduct) => {
    const subject = encodeURIComponent(language === 'cs' ? `Velikonoční objednávka: ${product.name}` : `Easter order: ${product.name}`);
    const body = encodeURIComponent(language === 'cs'
      ? `Dobrý den,\n\nrád(a) bych si objednal(a) velikonoční voňavý výrobek:\n\n${product.name}\nCena: ${product.price} Kč\n\nDěkuji,`
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
            {easterProducts.map((product, idx) => (
              <div key={product.id} className="bg-white dark:bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-premium transition-bounce border-2 border-green-100 dark:border-green-900/30 group">
                <div className="aspect-square relative overflow-hidden cursor-zoom-in" onClick={() => setLightboxIndex(idx)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") setLightboxIndex(idx); }}>
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
              {language === 'cs' ? 'Překvapte své blízké originálním ručně vyráběným velikonočním voňavým výrobkem.' : 'Surprise your loved ones with original handmade Easter fragrance product.'}
            </p>
            <Button variant="secondary" size="lg" className="rounded-full bg-white text-green-600 hover:bg-gray-100 font-bold"
              onClick={() => {
                const subject = encodeURIComponent(language === 'cs' ? 'Velikonoční objednávka - celá kolekce' : 'Easter order - full collection');
                const body = encodeURIComponent(language === 'cs'
                  ? 'Dobrý den,\n\nmám zájem o velikonoční kolekci voňavých výrobků.\n\nDěkuji,'
                  : 'Hello,\n\nI am interested in the Easter fragrance product collection.\n\nThank you,');
                window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
              }}>
              {language === 'cs' ? 'Objednat celou kolekci' : 'Order Full Collection'}
            </Button>
          </div>
        </div>
      )}
      <Lightbox
        items={easterProducts.map((p) => ({ src: p.image, alt: p.name, caption: p.description }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
};
