import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import valentineHeartPink from "@/assets/valentine-heart-pink.jpg";
import valentineHeartRedWhite from "@/assets/valentine-heart-red-white.jpg";
import valentineHeartDiamond from "@/assets/valentine-heart-diamond.jpg";
import valentineHeartsCollection from "@/assets/valentine-hearts-collection.jpg";
import valentineHeartLayered from "@/assets/valentine-heart-layered.jpg";
import valentineHeartsDuo from "@/assets/valentine-hearts-duo.jpg";
import valentineHeartRedSalt from "@/assets/valentine-heart-red-salt.jpg";
import valentineHeartsDiamondPair from "@/assets/valentine-hearts-diamond-pair.jpg";
import valentineHeartSaltSprinkle from "@/assets/valentine-heart-salt-sprinkle.jpg";
import valentineDiamondHeartsSalt from "@/assets/valentine-diamond-hearts-salt.jpg";
import valentineOrnateHeartBox from "@/assets/valentine-ornate-heart-box.jpg";
import valentineILovePrague from "@/assets/valentine-i-love-prague.jpg";
import valentineFlowerHeart from "@/assets/valentine-flower-heart.jpg";
import valentineBearHeart from "@/assets/valentine-bear-heart.jpg";
import valentineHeartPetalPink from "@/assets/valentine-heart-petal-pink.jpg";
import valentineHeartRibbedPink from "@/assets/valentine-heart-ribbed-pink.jpg";
import valentineHeartWavyPink from "@/assets/valentine-heart-wavy-pink.jpg";
import valentineHeartScallopedPink from "@/assets/valentine-heart-scalloped-pink.jpg";
import valentineBearHeartValentine from "@/assets/valentine-bear-heart-valentine.jpg";

interface ValentineProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
}

export const ValentineCollapsible = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  const products: ValentineProduct[] = [
    { id: 'v-heart-pink', name: language === 'cs' ? 'Růžové srdíčko' : 'Pink Heart', price: 89, image: valentineHeartPink, description: language === 'cs' ? 'Něžné růžové srdíčko v roztomilém košíčku' : 'Delicate pink heart in adorable cupcake wrapper' },
    { id: 'v-heart-red-white', name: language === 'cs' ? 'Červeno-bílé srdíčko' : 'Red & White Heart', price: 89, image: valentineHeartRedWhite, description: language === 'cs' ? 'Dvouvrstvé srdíčko - symbol věčné lásky' : 'Two-layered heart - symbol of eternal love' },
    { id: 'v-heart-diamond', name: language === 'cs' ? 'Diamantové srdce' : 'Diamond Heart', price: 119, image: valentineHeartDiamond, description: language === 'cs' ? 'Luxusní fasetované srdce s mramorováním' : 'Luxury faceted heart with marbling', badge: language === 'cs' ? 'Luxus' : 'Luxury' },
    { id: 'v-hearts-collection', name: language === 'cs' ? 'Kolekce diamantových srdcí' : 'Diamond Hearts Collection', price: 350, image: valentineHeartsCollection, description: language === 'cs' ? 'Okouzlující sbírka fasetovaných srdíček' : 'Enchanting collection of faceted hearts', badge: language === 'cs' ? 'Sada' : 'Set' },
    { id: 'v-heart-layered', name: language === 'cs' ? 'Vrstvené červené srdce' : 'Layered Red Heart', price: 99, image: valentineHeartLayered, description: language === 'cs' ? 'Sytě červené srdce s vrstvením' : 'Rich red heart with beautiful layering' },
    { id: 'v-hearts-duo', name: language === 'cs' ? 'Valentýnská sada srdíček' : 'Valentine Hearts Set', price: 199, image: valentineHeartsDuo, description: language === 'cs' ? 'Romantická sada srdíček v košíčkách' : 'Romantic set of hearts in gift wrappers' },
    { id: 'v-heart-red-salt', name: language === 'cs' ? 'Srdce na růžové soli' : 'Heart on Pink Salt', price: 109, image: valentineHeartRedSalt, description: language === 'cs' ? 'Červené srdce na himalájské soli' : 'Red heart on Himalayan pink salt' },
    { id: 'v-hearts-diamond-pair', name: language === 'cs' ? 'Pár diamantových srdcí' : 'Diamond Hearts Pair', price: 199, image: valentineHeartsDiamondPair, description: language === 'cs' ? 'Dvě fasetované srdíčka pro páry' : 'Two faceted hearts for couples' },
    { id: 'v-heart-salt-sprinkle', name: language === 'cs' ? 'Srdce s krystaly soli' : 'Heart with Salt Crystals', price: 119, image: valentineHeartSaltSprinkle, description: language === 'cs' ? 'Červené srdce s třpytivými krystaly' : 'Red heart with sparkling crystals' },
    { id: 'v-diamond-hearts-salt', name: language === 'cs' ? 'Diamantové srdce se srdíčky' : 'Diamond Heart with Hearts', price: 139, image: valentineDiamondHeartsSalt, description: language === 'cs' ? 'Mramorové srdce s malými srdíčky' : 'Marble heart with small hearts' },
    { id: 'v-ornate-heart-box', name: language === 'cs' ? 'Ornamentální srdce v krabičce' : 'Ornamental Heart Gift Box', price: 179, image: valentineOrnateHeartBox, description: language === 'cs' ? 'Barokní srdce v zlaté krabičce' : 'Baroque heart in golden box', badge: language === 'cs' ? 'Premium' : 'Premium' },
    { id: 'v-i-love-prague', name: language === 'cs' ? 'Srdce I ♥ Prague' : 'I ♥ Prague Heart', price: 99, image: valentineILovePrague, description: language === 'cs' ? 'Růžové srdce s nápisem I ♥ Prague' : 'Pink heart with I ♥ Prague lettering' },
    { id: 'v-flower-heart', name: language === 'cs' ? 'Květinové srdce' : 'Floral Heart', price: 109, image: valentineFlowerHeart, description: language === 'cs' ? 'Srdce pokryté drobnými pupínky' : 'Heart covered with tiny floral buds' },
    { id: 'v-bear-heart', name: language === 'cs' ? 'Medvídek se srdíčkem' : 'Bear with Heart', price: 149, image: valentineBearHeart, description: language === 'cs' ? 'Růžový medvídek s pleteným srdíčkem' : 'Pink bear with knitted heart', badge: language === 'cs' ? 'Novinka' : 'New' },
    { id: 'v-heart-petal-pink', name: language === 'cs' ? 'Srdce s okvětními lístky' : 'Heart with Floral Petals', price: 129, image: valentineHeartPetalPink, description: language === 'cs' ? 'Růžové srdce s texturou okvětních lístků' : 'Pink heart with floral petal texture' },
    { id: 'v-heart-ribbed-pink', name: language === 'cs' ? 'Srdce s jemným žebrováním' : 'Ribbed Heart', price: 129, image: valentineHeartRibbedPink, description: language === 'cs' ? 'Elegantní růžové srdce s žebrováním' : 'Elegant pink heart with ribbed pattern' },
    { id: 'v-heart-wavy-pink', name: language === 'cs' ? 'Srdce s vlnitým vzorem' : 'Wavy Heart', price: 129, image: valentineHeartWavyPink, description: language === 'cs' ? 'Růžové srdce s plynulým vzorem' : 'Pink heart with flowing wavy pattern' },
    { id: 'v-heart-scalloped-pink', name: language === 'cs' ? 'Srdce s vlnkami' : 'Scalloped Heart', price: 129, image: valentineHeartScallopedPink, description: language === 'cs' ? 'Srdce se zdobenými okraji' : 'Heart with decorative scalloped edges' },
    { id: 'v-bear-heart-valentine', name: language === 'cs' ? 'Medvídek Be My Valentine' : 'Be My Valentine Bear', price: 159, image: valentineBearHeartValentine, description: language === 'cs' ? 'Medvídek se srdíčkem a kartičkou' : 'Bear with heart and Valentine card', badge: language === 'cs' ? 'Bestseller' : 'Bestseller' },
  ];

  const handleOrder = (product: ValentineProduct) => {
    const subject = encodeURIComponent(language === 'cs' ? `Valentýnská objednávka: ${product.name}` : `Valentine order: ${product.name}`);
    const body = encodeURIComponent(language === 'cs'
      ? `Dobrý den,\n\nráda bych si objednala:\n\n${product.name}\nCena: ${product.price} Kč\n\nDěkuji,`
      : `Hello,\n\nI would like to order:\n\n${product.name}\nPrice: ${product.price} CZK\n\nThank you,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mb-16">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 text-white rounded-3xl px-8 py-6 shadow-premium hover:shadow-glow transition-bounce group"
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl">💕</span>
          <div className="text-left">
            <h3 className="font-heading text-2xl md:text-3xl font-bold">
              {language === 'cs' ? 'Valentýnská kolekce' : "Valentine's Collection"}
            </h3>
            <p className="text-sm opacity-90">
              {language === 'cs' ? 'Ručně vyráběná srdíčka plná lásky' : 'Handmade hearts full of love'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">💝</span>
          {open ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </button>

      {open && (
        <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white dark:bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-premium transition-bounce border-2 border-pink-100 dark:border-pink-900/30 group">
                <div className="aspect-square relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain bg-white group-hover:scale-105 transition-smooth" loading="lazy" />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">{product.badge}</div>
                  )}
                  <div className="absolute top-4 right-4"><span className="text-2xl">💕</span></div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-primary mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-pink-600">{product.price} Kč</span>
                    <Button variant="default" onClick={() => handleOrder(product)} className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white" size="sm">
                      {language === 'cs' ? 'Objednat' : 'Order'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 rounded-3xl p-8 text-center text-white shadow-premium">
            <h3 className="font-heading text-2xl font-bold mb-4">
              💝 {language === 'cs' ? 'Darujte lásku!' : 'Give Love!'} 💝
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
              {language === 'cs' ? 'Každé srdíčko je ručně vyrobené s láskou. Překvapte svou polovičku originálním dárkem.' : 'Every heart is handmade with love. Surprise your sweetheart with an original gift.'}
            </p>
            <Button variant="secondary" size="lg" className="rounded-full bg-white text-pink-600 hover:bg-gray-100 font-bold"
              onClick={() => {
                const subject = encodeURIComponent(language === 'cs' ? 'Valentýnská objednávka - celá kolekce' : 'Valentine order - full collection');
                const body = encodeURIComponent(language === 'cs'
                  ? 'Dobrý den,\n\nmám zájem o valentýnskou kolekci.\n\nDěkuji,'
                  : 'Hello,\n\nI am interested in the Valentine collection.\n\nThank you,');
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
