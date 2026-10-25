import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/Lightbox";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const products: ValentineProduct[] = [
    { id: 'v-heart-pink', name: language === 'cs' ? "Růžové srdíčko" : "Pink Heart", price: 49, image: valentineHeartPink, description: language === 'cs' ? "Růžové srdíčko s jemným mramorováním a vroubkovanými boky. Něžná pozornost z lásky." : "A pink heart with soft marbling and fluted sides. A delicate token of love." },
    { id: 'v-heart-red-white', name: language === 'cs' ? "Červené srdíčko" : "Red Heart", price: 49, image: valentineHeartRedWhite, description: language === 'cs' ? "Červené srdce na světlém podkladu s vroubkovanými boky. Malý dárek s velkým gestem." : "A red heart on a pale base with fluted sides. A small gift with a heartfelt message." },
    { id: 'v-heart-diamond', name: language === 'cs' ? "Fasetované srdce" : "Faceted Heart", price: 109, image: valentineHeartDiamond, description: language === 'cs' ? "Růžovo-bílé srdce s červenými akcenty a hranatými plochami. Výrazná romantická dekorace." : "A pink and white heart with red accents and angular facets. A striking romantic decoration.", badge: language === 'cs' ? 'Luxus' : 'Luxury' },
    { id: 'v-hearts-collection', name: language === 'cs' ? "Fasetovaná srdce – sada" : "Faceted Hearts – Set", price: 549, image: valentineHeartsCollection, description: language === 'cs' ? "Růžová a červená srdíčka v pestré společné kompozici. Sada pro romantické obdarování." : "Pink and red hearts in a colourful arrangement. A set for a romantic gift.", badge: language === 'cs' ? 'Sada' : 'Set' },
    { id: 'v-heart-layered', name: language === 'cs' ? "Srdce v červené" : "Heart in Red", price: 109, image: valentineHeartLayered, description: language === 'cs' ? "Červené srdce s bílo-růžovým vrstvením a zvlněnými boky. Elegantní pozornost pro vaše blízké." : "A red heart with white and pink layers and fluted sides. An elegant gift for someone special." },
    { id: 'v-hearts-duo', name: language === 'cs' ? "Romantická srdíčka – sada" : "Romantic Hearts – Set", price: 200, image: valentineHeartsDuo, description: language === 'cs' ? "Růžová a červená srdíčka ve zdobených košíčcích. Milá sada pro společnou radost." : "Pink and red hearts in decorative wrappers. A charming set to share." },
    { id: 'v-heart-red-salt', name: language === 'cs' ? "Červené vrstvené srdce" : "Red Layered Heart", price: 109, image: valentineHeartRedSalt, description: language === 'cs' ? "Sytě červené srdce se světlým proužkem na růžových kamíncích. Romantický barevný akcent." : "A rich red heart with a pale stripe on pink crystals. A romantic splash of colour." },
    { id: 'v-hearts-diamond-pair', name: language === 'cs' ? "Dvojice fasetovaných srdcí" : "Faceted Heart Pair", price: 200, image: valentineHeartsDiamondPair, description: language === 'cs' ? "Dvě růžovo-bílá srdce s červenými akcenty a hranatými plochami. Romantická dárková dvojice." : "Two pink and white hearts with red accents and angular facets. A romantic gift pair." },
    { id: 'v-heart-salt-sprinkle', name: language === 'cs' ? "Srdce s růžovým zdobením" : "Heart with Pink Details", price: 109, image: valentineHeartSaltSprinkle, description: language === 'cs' ? "Červené srdce se světlou vrstvou a drobným růžovým zdobením. Detail, který upoutá." : "A red heart with a pale layer and small pink details. A decoration that catches the eye." },
    { id: 'v-diamond-hearts-salt', name: language === 'cs' ? "Srdce s červenými akcenty" : "Heart with Red Accents", price: 549, image: valentineDiamondHeartsSalt, description: language === 'cs' ? "Růžovo-bílé fasetované srdce obklopené drobnými červenými srdíčky. Romantická dárková kompozice." : "A pink and white faceted heart surrounded by little red hearts. A romantic gift arrangement." },
    { id: 'v-i-love-prague', name: language === 'cs' ? "Srdce I ♥ Prague" : "I ♥ Prague Heart", price: 109, image: valentineILovePrague, description: language === 'cs' ? "Růžové srdce s reliéfním nápisem I ♥ Prague. Milá vzpomínka na Prahu." : "A pink heart with raised I ♥ Prague lettering. A lovely keepsake from Prague." },
    { id: 'v-flower-heart', name: language === 'cs' ? "Lístkové srdce" : "Petal Heart", price: 109, image: valentineFlowerHeart, description: language === 'cs' ? "Srdce s drobnými lístky v růžových a zelených tónech. Něžná dekorace pro romantické chvíle." : "A heart with tiny petals in pink and green tones. A delicate romantic decoration." },
    { id: 'v-bear-heart', name: language === 'cs' ? "Medvídek se srdíčkem" : "Bear with Heart", price: 109, image: valentineBearHeart, description: language === 'cs' ? "Růžový medvídek s květinovým reliéfem a bílým srdcem nad hlavou. Hravý dárek z lásky." : "A pink bear with floral relief and a white heart above its head. A playful gift of love.", badge: language === 'cs' ? 'Novinka' : 'New' },
    { id: 'v-heart-petal-pink', name: language === 'cs' ? "Růžičkové srdce" : "Rose Relief Heart", price: 109, image: valentineHeartPetalPink, description: language === 'cs' ? "Růžové srdce pokryté drobnými růžičkami. Jemný romantický detail k darování." : "A pink heart covered in tiny rose shapes. A delicate romantic gift." },
    { id: 'v-heart-ribbed-pink', name: language === 'cs' ? "Žebrované srdce" : "Ribbed Heart", price: 109, image: valentineHeartRibbedPink, description: language === 'cs' ? "Pastelově růžové srdce s pravidelně žebrovanými boky. Střídmá a vkusná pozornost." : "A pastel pink heart with evenly ribbed sides. A simple, tasteful gift." },
    { id: 'v-heart-wavy-pink', name: language === 'cs' ? "Srdce s vlnkami" : "Wavy Heart", price: 109, image: valentineHeartWavyPink, description: language === 'cs' ? "Růžové srdce s jemně zvlněnými boky. Malá dekorace s něžným výrazem." : "A pink heart with gently waved sides. A small, delicate decoration." },
    { id: 'v-heart-scalloped-pink', name: language === 'cs' ? "Srdce se zdobeným okrajem" : "Scalloped Heart", price: 109, image: valentineHeartScallopedPink, description: language === 'cs' ? "Růžové srdíčko s vroubkovaným obrysem. Půvabný detail pro vaše blízké." : "A pink heart with a scalloped outline. A charming gift for someone special." },
    { id: 'v-bear-heart-valentine', name: language === 'cs' ? "Valentýnský medvídek" : "Valentine Bear", price: 109, image: valentineBearHeartValentine, description: language === 'cs' ? "Růžový medvídek se srdcem nad hlavou a valentýnskou kartičkou. Dárek, který řekne vše za vás." : "A pink bear with a heart above its head and a Valentine card. A gift that says it all.", badge: language === 'cs' ? 'Bestseller' : 'Bestseller' },
  ];

  const handleOrder = (product: ValentineProduct) => {
    const subject = encodeURIComponent(language === 'cs' ? `Valentýnská objednávka: ${product.name}` : `Valentine order: ${product.name}`);
    const body = encodeURIComponent(language === 'cs'
      ? `Dobrý den,\n\nrád(a) bych si objednal(a):\n\n${product.name}\nCena: ${product.price} Kč\n\nDěkuji,`
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
            {products.map((product, idx) => (
              <div key={product.id} className="bg-white dark:bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-premium transition-bounce border-2 border-pink-100 dark:border-pink-900/30 group">
                <div className="aspect-square relative overflow-hidden cursor-zoom-in" onClick={() => setLightboxIndex(idx)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter") setLightboxIndex(idx); }}>
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
      <Lightbox
        items={products.map((p) => ({ src: p.image, alt: p.name, caption: p.description }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </div>
  );
};
