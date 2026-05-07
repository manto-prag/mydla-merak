import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Sparkles, Gift } from "lucide-react";
import heartSoapsPolka from "@/assets/heart-soaps-polka.jpg";
import greenLayeredSoap from "@/assets/green-layered-soap.jpg";
import soapMakingProcess from "@/assets/soap-making-process.jpg";
import naturalIngredients from "@/assets/natural-ingredients.jpg";
import coffeeBeanSoap from "@/assets/coffee-bean-soap.jpg";

import dentalSoap from "@/assets/dental-soap.jpg";

// Valentine imports
import valentineBouquet1 from "@/assets/valentine-bouquet-1.jpg";
import valentineBouquet2 from "@/assets/valentine-bouquet-2.jpg";
import valentineHeartPink from "@/assets/valentine-heart-pink.jpg";
import valentineHeartRedWhite from "@/assets/valentine-heart-red-white.jpg";
import valentineHeartsCollection from "@/assets/valentine-hearts-collection.jpg";
import valentineHeartLayered from "@/assets/valentine-heart-layered.jpg";
import valentineHeartsDiamondPair from "@/assets/valentine-hearts-diamond-pair.jpg";
import valentineHeartSaltSprinkle from "@/assets/valentine-heart-salt-sprinkle.jpg";
import valentineDiamondHeartsSalt from "@/assets/valentine-diamond-hearts-salt.jpg";
import valentineOrnateHeartBox from "@/assets/valentine-ornate-heart-box.jpg";
import valentineBouquetPinkPeonies from "@/assets/valentine-bouquet-pink-peonies.jpg";
import valentineBouquetVase from "@/assets/valentine-bouquet-vase.jpg";
import valentineILovePrague from "@/assets/valentine-i-love-prague.jpg";
import valentineFlowerHeart from "@/assets/valentine-flower-heart.jpg";
import valentineBearHeart from "@/assets/valentine-bear-heart.jpg";
import valentineHeartPetalPink from "@/assets/valentine-heart-petal-pink.jpg";
import valentineHeartRibbedPink from "@/assets/valentine-heart-ribbed-pink.jpg";
import valentineHeartWavyPink from "@/assets/valentine-heart-wavy-pink.jpg";
import valentineHeartScallopedPink from "@/assets/valentine-heart-scalloped-pink.jpg";
import valentineLuxuryBouquetArrangement from "@/assets/valentine-luxury-bouquet-arrangement.jpg";
import valentineBearHeartValentine from "@/assets/valentine-bear-heart-valentine.jpg";

export const GallerySection = () => {
  const { translations, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'individual' | 'gift-set' | 'seasonal' | 'valentine' | 'winter'>('all');
  
  const categories = [
    { id: 'all', label: language === 'cs' ? 'Vše' : 'All', icon: Sparkles },
    { id: 'valentine', label: language === 'cs' ? 'Romantická kolekce' : "Romantic Collection", icon: Heart },
    
    { id: 'individual', label: language === 'cs' ? 'Jednotlivá mýdla' : 'Individual Soaps', icon: Heart },
    { id: 'gift-set', label: language === 'cs' ? 'Dárkové sety' : 'Gift Sets', icon: Gift },
    { id: 'seasonal', label: language === 'cs' ? 'Sezónní kolekce' : 'Seasonal Collections', icon: ShoppingBag }
  ];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    // Individual soaps - unique items
    {
      src: coffeeBeanSoap,
      alt: language === 'cs' ? "Kávové mýdlo ve tvaru zrna" : "Coffee bean shaped soap",
      description: language === 'cs' ? "Dokonalý dárek pro milovníky kávy! Realistické zrno, které okouzlí každého." : "The perfect gift for coffee lovers! A realistic bean that charms everyone.",
      category: 'individual'
    },
    {
      src: dentalSoap,
      alt: language === 'cs' ? "Mýdlo ve tvaru zubu" : "Tooth shaped soap",
      description: language === 'cs' ? "Hit mezi zubaři! Veselý zoubek, který rozsvítí každou ordinaci." : "A hit among dentists! Cheerful little tooth that lights up any office.",
      category: 'individual',
      badge: language === 'cs' ? 'Unikát' : 'Unique'
    },
    {
      src: "/lovable-uploads/gallery-blue-ginkgo-soap.jpg",
      alt: language === 'cs' ? "Tyrkysové mýdlo s listy ginkga" : "Turquoise ginkgo leaf soap",
      description: language === 'cs' ? "Nádherný tyrkysový reliéf listů ginkga – unikátní umělecké dílo inspirované přírodou." : "Stunning turquoise ginkgo leaf relief – a unique work of art inspired by nature.",
      category: 'individual',
      badge: language === 'cs' ? 'Unikát' : 'Unique'
    },
    {
      src: "/lovable-uploads/gallery-i-love-prague-hearts.jpg",
      alt: language === 'cs' ? "Srdíčka I Love Prague v organzových sáčcích" : "I Love Prague heart soaps in organza bags",
      description: language === 'cs' ? "Barevn\u00e1 srd\u00ed\u010dka s n\u00e1pisem I Love Prague \u2013 origin\u00e1ln\u00ed pra\u017esk\u00fd suven\u00fdr v elegantn\u00edm balen\u00ed." : "Colorful heart soaps with 'I Love Prague' inscription \u2013 an original Prague souvenir in elegant packaging.",
      category: 'gift-set',
      badge: language === 'cs' ? 'Bestseller' : 'Bestseller'
    },
    {
      src: "/lovable-uploads/031d688f-14e1-4243-98cd-3c6509a45216.png",
      alt: language === 'cs' ? "Mořská hvězdice tyrkysová a žlutá" : "Starfish turquoise and yellow",
      description: language === 'cs' ? "Kousek moře u vás doma! Zářivé barvy léta, které nikdy neuvadnou." : "A piece of the ocean at home! Vibrant summer colors that never fade.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/5f52e273-e3a4-44a6-80fd-13feac003cc3.png",
      alt: language === 'cs' ? "Krémové mýdlo s olivovou větvičkou" : "Cream soap with olive branch",
      description: language === 'cs' ? "Středomořská elegance, která uchvátí. Nádherný dárek plný harmonie." : "Mediterranean elegance that captivates. A gorgeous gift full of harmony.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/d12edb48-38b0-441a-91ba-a85548bcd09a.png",
      alt: language === 'cs' ? "Medové mýdlo s královským ornamentem" : "Honey soap with royal ornament",
      description: language === 'cs' ? "Královský luxus v každém detailu! Zlatý med a propracovaný ornament – dárek, který ohromí." : "Royal luxury in every detail! Golden honey and intricate ornament – a gift that impresses.",
      category: 'individual',
      badge: language === 'cs' ? 'Luxus' : 'Luxury'
    },
    {
      src: "/lovable-uploads/013a0911-ca75-4c22-8dfe-ab6e01d8dfc1.png",
      alt: language === 'cs' ? "Zelené mýdlo s nosorožcem" : "Green soap with rhino",
      description: language === 'cs' ? "Exotika, která zaujme! Majestátní nosorožec – sběratelský unikát." : "Exotic charm! Majestic rhino – a true collector's piece.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/aba33224-4ce2-4776-b8e1-6665cee2c613.png",
      alt: language === 'cs' ? "Třpytivé glamour mýdlo" : "Sparkling glamour soap",
      description: language === 'cs' ? "Třpytivý glamour, který zaručeně upoutá pozornost! Elegance v růžové." : "Sparkling glamour that's guaranteed to turn heads! Elegance in pink.",
      category: 'individual'
    },
    {
      src: greenLayeredSoap,
      alt: language === 'cs' ? "Vrstvené zelené mýdlo s bylinkami" : "Layered green soap with herbs",
      description: language === 'cs' ? "Svěžest bylinné zahrady v krémových vrstvách – příroda u vás doma." : "Freshness of an herb garden in creamy layers – nature at your home.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/1691336c-8212-4afc-8d75-af6a3c0b123e.png",
      alt: language === 'cs' ? "Bylinné zelené mýdlo" : "Green herbal soap",
      description: language === 'cs' ? "Harmonie lesa a louky v jednom kousku – přírodní zelená krása." : "Harmony of forest and meadow in one piece – natural green beauty.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/8f824295-51a2-49b5-9dd5-1d7230217060.png",
      alt: language === 'cs' ? "Tyrkysové vírové mýdlo" : "Turquoise swirl soap",
      description: language === 'cs' ? "Hravý vír barev plný energie! Tyrkys a zlato v jednom originálním kousku." : "Playful swirl of colors full of energy! Turquoise and gold in one original piece.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/d5f3dd1a-4837-49a7-ae16-a25b354de774.png",
      alt: language === 'cs' ? "Kolekce pěti reliéfních mýdel" : "Collection of five relief soaps",
      description: language === 'cs' ? "Pět unikátních kousků v jedné sadě – wow efekt zaručen!" : "Five unique pieces in one set – wow effect guaranteed!",
      category: 'gift-set'
    },
    {
      src: "/lovable-uploads/acd8bdab-3c7e-4cf8-bb4b-f7fa9b3f1e25.png",
      alt: language === 'cs' ? "Levandulová kolekce" : "Lavender collection",
      description: language === 'cs' ? "Levandulová harmonie v modro-fialových tónech – klid a krása v jednom." : "Lavender harmony in blue-purple tones – calm and beauty in one.",
      category: 'gift-set'
    },
    {
      src: "/lovable-uploads/e51a7bd7-e07c-40e9-bf10-615691902e94.png",
      alt: language === 'cs' ? "Čtyřlístky pro štěstí" : "Four-leaf clovers for luck",
      description: language === 'cs' ? "Darujte štěstí! Čtyřlístky, které přinesou radost a úsměv." : "Gift happiness! Four-leaf clovers that bring joy and smiles.",
      category: 'gift-set',
      badge: language === 'cs' ? 'Pro štěstí' : 'Lucky charm'
    },
    {
      src: heartSoapsPolka,
      alt: language === 'cs' ? "Romantická srdíčka v puntíkovaném balení" : "Romantic hearts in polka-dot packaging",
      description: language === 'cs' ? "Něžná srdíčka v roztomilém balení – dokonalé vyznání lásky." : "Delicate hearts in adorable packaging – the perfect love confession.",
      category: 'gift-set',
      badge: language === 'cs' ? 'Romantické' : 'Romantic'
    },
    {
      src: "/lovable-uploads/ec77542b-cdd2-436e-89d3-7e61c0a71cc8.png",
      alt: language === 'cs' ? "Sladká romantická sada" : "Sweet romantic set",
      description: language === 'cs' ? "Med, srdíčka a růže – sladká romantika, kterou musíte mít!" : "Honey, hearts and roses – sweet romance you simply must have!",
      category: 'gift-set'
    },
    {
      src: "/lovable-uploads/701fba05-b384-4891-b658-5ebbd8060bf0.png",
      alt: language === 'cs' ? "Pastelová kolekce s přírodními motivy" : "Pastel collection with natural motifs",
      description: language === 'cs' ? "Pastelová kolekce plná přírodní elegance – krása do každého domova." : "Pastel collection full of natural elegance – beauty for every home.",
      category: 'gift-set'
    },
    {
      src: "/lovable-uploads/3d1b0364-edfe-4f56-b9bb-6732417ef74a.png",
      alt: language === 'cs' ? "Luxusní kolekce se sušenými květy" : "Luxury collection with dried flowers",
      description: language === 'cs' ? "Sušené květy a levandule – prémiový dárek, který nadchne každého." : "Dried flowers and lavender – a premium gift that delights everyone.",
      category: 'gift-set',
      badge: language === 'cs' ? 'Premium' : 'Premium'
    },
    // Seasonal
    {
      src: "/lovable-uploads/fa8c4584-49bd-4414-89f9-2a2f9a4761a6.png",
      alt: language === 'cs' ? "Relaxační masážní mýdla" : "Relaxation massage soaps",
      description: language === 'cs' ? "Masážní výstupky pro dokonalou relaxaci – wellness dárek číslo jedna." : "Massage nubs for perfect relaxation – the number one wellness gift.",
      category: 'seasonal'
    },
    // Craft showcase
    {
      src: soapMakingProcess,
      alt: language === 'cs' ? "Ruční výroba mýdel" : "Handmade soap crafting",
      description: language === 'cs' ? "Každý kousek vzniká s láskou a péčí – řemeslná kvalita z Prahy." : "Every piece is crafted with love and care – artisan quality from Prague.",
      category: 'individual'
    },
    {
      src: naturalIngredients,
      alt: language === 'cs' ? "Přírodní ingredience" : "Natural ingredients",
      description: language === 'cs' ? "Olivový olej, kozí mléko, med a růže – přírodní luxus bez kompromisů." : "Olive oil, goat milk, honey and roses – natural luxury without compromise.",
      category: 'individual'
    },
    // Valentine's Collection
    {
      src: valentineBouquet1,
      alt: language === 'cs' ? "Mýdlová kytice - Růže a pivoňky" : "Soap Bouquet - Roses & Peonies",
      description: language === 'cs' ? "Růže a pivoňky v růžových tónech – náš nejprodávanější dárek!" : "Roses and peonies in pink tones – our best-selling gift!",
      category: 'valentine',
      badge: language === 'cs' ? 'Bestseller' : 'Bestseller'
    },
    {
      src: valentineBouquet2,
      alt: language === 'cs' ? "Mýdlová kytice se srdíčkem" : "Soap Bouquet with Heart",
      description: language === 'cs' ? "Kytice se srdíčkem – řekněte to květinami, které vydrží navždy!" : "Bouquet with heart – say it with flowers that last forever!",
      category: 'valentine'
    },
    {
      src: valentineHeartPink,
      alt: language === 'cs' ? "Růžové srdíčko" : "Pink Heart Soap",
      description: language === 'cs' ? "Roztomilé srdíčko v košíčku – malý dárek, velká radost!" : "Cute heart in a wrapper – small gift, big joy!",
      category: 'valentine'
    },
    {
      src: valentineHeartRedWhite,
      alt: language === 'cs' ? "Červeno-bílé srdíčko" : "Red & White Heart",
      description: language === 'cs' ? "Vášnivá červená a čistá bílá – symbol lásky, který musíte mít." : "Passionate red and pure white – a love symbol you must have.",
      category: 'valentine'
    },
    {
      src: valentineHeartsCollection,
      alt: language === 'cs' ? "Kolekce diamantových srdcí" : "Diamond Hearts Collection",
      description: language === 'cs' ? "Sbírka třpytivých srdíček v růžové – dárkový hit!" : "Collection of sparkling pink hearts – a gift hit!",
      category: 'valentine',
      badge: language === 'cs' ? 'Dárková sada' : 'Gift Set'
    },
    {
      src: valentineHeartLayered,
      alt: language === 'cs' ? "Vrstvené červené srdce" : "Layered Red Heart",
      description: language === 'cs' ? "Sytě červené srdce s vrstvením – vášeň a elegance v jednom." : "Rich red layered heart – passion and elegance in one.",
      category: 'valentine'
    },
    {
      src: valentineHeartsDiamondPair,
      alt: language === 'cs' ? "Pár diamantových srdcí" : "Diamond Hearts Pair",
      description: language === 'cs' ? "Dvě srdíčka na růžové soli – nerozlučná láska v luxusním provedení." : "Two hearts on pink salt – inseparable love in luxury style.",
      category: 'valentine',
      badge: language === 'cs' ? 'Romantické' : 'Romantic'
    },
    {
      src: valentineHeartSaltSprinkle,
      alt: language === 'cs' ? "Srdce s krystaly soli" : "Heart with Salt Crystals",
      description: language === 'cs' ? "Červené srdce s třpytivými krystaly soli – okouzlí na první pohled!" : "Red heart with sparkling salt crystals – love at first sight!",
      category: 'valentine'
    },
    {
      src: valentineDiamondHeartsSalt,
      alt: language === 'cs' ? "Diamantové srdce se srdíčky" : "Diamond Heart with Hearts",
      description: language === 'cs' ? "Mramorové srdce se srdíčky na růžové soli – luxusní dekorace." : "Marble heart with hearts on pink salt – luxury decoration.",
      category: 'valentine'
    },
    {
      src: valentineOrnateHeartBox,
      alt: language === 'cs' ? "Ornamentální srdce v dárkové krabičce" : "Ornamental Heart Gift Box",
      description: language === 'cs' ? "Barokní srdce ve zlaté krabičce – prémiový dárek, který ohromí!" : "Baroque heart in golden box – a premium gift that wows!",
      category: 'valentine',
      badge: language === 'cs' ? 'Premium' : 'Premium'
    },
    {
      src: valentineBouquetPinkPeonies,
      alt: language === 'cs' ? "Kytice růžových pivoněk" : "Pink Peony Bouquet",
      description: language === 'cs' ? "Ručně tvarované pivoňky a růže – kytice, co nikdy nezvadne." : "Hand-shaped peonies and roses – a bouquet that never wilts.",
      category: 'valentine'
    },
    {
      src: valentineBouquetVase,
      alt: language === 'cs' ? "Kytice v dekorativní váze" : "Bouquet in Decorative Vase",
      description: language === 'cs' ? "Pivoňky v bílé váze – luxusní dekorace, co vydrží věčně." : "Peonies in white vase – luxury decor that lasts forever.",
      category: 'valentine',
      badge: language === 'cs' ? 'Luxus' : 'Luxury'
    },
    {
      src: valentineILovePrague,
      alt: language === 'cs' ? "Srdce I ♥ Prague" : "I ♥ Prague Heart",
      description: language === 'cs' ? "I ♥ Prague – nejkrásnější suvenýr z Prahy!" : "I ♥ Prague – the most beautiful souvenir from Prague!",
      category: 'valentine',
      badge: language === 'cs' ? 'Unikát' : 'Unique'
    },
    {
      src: valentineFlowerHeart,
      alt: language === 'cs' ? "Květinové srdce" : "Floral Heart",
      description: language === 'cs' ? "Květinové srdce v růžovo-bílé – jemná krása, která uchvátí." : "Floral heart in pink-white – delicate beauty that captivates.",
      category: 'valentine'
    },
    {
      src: valentineBearHeart,
      alt: language === 'cs' ? "Medvídek se srdíčkem" : "Bear with Heart",
      description: language === 'cs' ? "Medvídek z růžiček se srdíčkem – nejroztomilejší dárek vůbec!" : "Rose bear with heart – the most adorable gift ever!",
      category: 'valentine',
      badge: language === 'cs' ? 'Oblíbené' : 'Popular'
    },
    {
      src: valentineHeartPetalPink,
      alt: language === 'cs' ? "Srdce s květinovými lístky" : "Heart with Floral Petals",
      description: language === 'cs' ? "Srdce posypané okvětními lístky – romantika v každém detailu." : "Heart sprinkled with petals – romance in every detail.",
      category: 'valentine'
    },
    {
      src: valentineHeartRibbedPink,
      alt: language === 'cs' ? "Srdce s jemným žebrováním" : "Heart with Ribbed Texture",
      description: language === 'cs' ? "Elegantní žebrované srdce – minimalistická krása, maximální efekt." : "Elegant ribbed heart – minimalist beauty, maximum effect.",
      category: 'valentine'
    },
    {
      src: valentineHeartWavyPink,
      alt: language === 'cs' ? "Srdce s vlnitým vzorem" : "Heart with Wavy Pattern",
      description: language === 'cs' ? "Vlnitý vzor plný pohybu – srdce, které zaujme na první pohled." : "Wavy pattern full of motion – a heart that catches every eye.",
      category: 'valentine'
    },
    {
      src: valentineHeartScallopedPink,
      alt: language === 'cs' ? "Srdce s vlnkami" : "Heart with Scalloped Edges",
      description: language === 'cs' ? "Srdíčko se zdobenými okraji – roztomilý detail, který potěší." : "Heart with scalloped edges – an adorable detail that delights.",
      category: 'valentine'
    },
    {
      src: valentineLuxuryBouquetArrangement,
      alt: language === 'cs' ? "Luxusní valentýnská kytice" : "Luxury Valentine's Bouquet",
      description: language === 'cs' ? "Luxusní kytice růží, pivoněk a srdcí – ten nejlepší dárek!" : "Luxury bouquet of roses, peonies and hearts – the ultimate gift!",
      category: 'valentine',
      badge: language === 'cs' ? 'Premium' : 'Premium'
    },
    {
      src: valentineBearHeartValentine,
      alt: language === 'cs' ? "Medvídek Be My Valentine" : "Be My Valentine Bear",
      description: language === 'cs' ? "Medvídek z růžiček s kartičkou – darujte lásku stylově!" : "Rose bear with card – give love in style!",
      category: 'valentine'
    },
    // Winter/Christmas items moved to Christmas Collection section
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const handleQuickOrder = (imageName: string) => {
    const subject = encodeURIComponent(language === 'cs' ? `Objednávka: ${imageName}` : `Order: ${imageName}`);
    const body = encodeURIComponent(language === 'cs' 
      ? `Dobrý den,\n\nráda bych si objednala:\n\n${imageName}\n\nDěkuji,`
      : `Hello,\n\nI would like to order:\n\n${imageName}\n\nThank you,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/20 to-background">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {language === 'cs' ? 'Ručně vyráběná mýdla s láskou' : 'Handcrafted soaps with love'}
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            {translations.gallery.title}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            {translations.gallery.description}
          </p>
          
          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`rounded-full gap-2 transition-all ${
                  selectedCategory === category.id 
                    ? 'shadow-lg scale-105' 
                    : 'hover:scale-105'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Special Offer Banner */}
        <div className="mb-12 p-6 bg-gradient-to-r from-primary/20 via-accent to-primary/20 rounded-3xl text-center border-2 border-primary/30">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Gift className="w-8 h-8 text-primary" />
            <div>
              <p className="text-lg font-bold text-primary">
                {language === 'cs' ? '🎁 Doručení ZDARMA při objednávce nad 30 kusů!' : '🎁 FREE delivery on orders over 30 pieces!'}
              </p>
              <p className="text-sm text-foreground/70">
                {language === 'cs' ? 'Ideální pro firemní dárky, svatby a speciální příležitosti' : 'Ideal for corporate gifts, weddings and special occasions'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer aspect-square overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] bg-card"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain bg-white transition-smooth group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Badge */}
              {image.badge && (
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                  {image.badge}
                </div>
              )}

              {/* Heart icon for wishlist feel */}
              <button 
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10 shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickOrder(image.alt);
                }}
              >
                <ShoppingBag className="w-4 h-4 text-primary" />
              </button>

              {/* Hover overlay with description */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium leading-tight mb-3">
                    {image.description}
                  </p>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="w-full rounded-full text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuickOrder(image.alt);
                    }}
                  >
                    <ShoppingBag className="w-3 h-3 mr-1" />
                    {language === 'cs' ? 'Objednat' : 'Order'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-card rounded-3xl shadow-elegant border border-primary/20">
            <Heart className="w-12 h-12 text-primary" />
            <h3 className="font-heading text-2xl font-bold text-primary">
              {language === 'cs' ? 'Hledáte něco speciálního?' : 'Looking for something special?'}
            </h3>
            <p className="text-foreground/70 max-w-md">
              {language === 'cs' 
                ? 'Vyrobíme vám mýdla na míru pro vaši speciální příležitost - svatby, firemní akce, narozeniny a další!' 
                : 'We create custom soaps for your special occasion - weddings, corporate events, birthdays and more!'}
            </p>
            <Button 
              size="lg"
              className="rounded-full px-8"
              onClick={() => {
                const subject = encodeURIComponent(language === 'cs' ? 'Poptávka na zakázku' : 'Custom order inquiry');
                window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}`;
              }}
            >
              {language === 'cs' ? 'Napište nám' : 'Contact us'}
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="gradient-premium rounded-3xl p-8 max-w-2xl mx-auto shadow-elegant">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              {translations.products.newsletterTitle}
            </h3>
            <p className="text-foreground/80 mb-6">
              {translations.products.newsletterDesc}
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={translations.products.emailPlaceholder}
                className="flex-1 px-4 py-3 rounded-full border-2 border-primary/20 focus:border-primary outline-none transition-colors"
              />
              <Button 
                variant="default" 
                className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  const email = (document.querySelector('input[type="email"]') as HTMLInputElement)?.value;
                  if (email) {
                    const subject = encodeURIComponent('Newsletter - 10% sleva');
                    const body = encodeURIComponent(`Dobrý den,\n\nráda bych se přihlásila k odběru novinek.\n\nE-mail: ${email}\n\nDěkuji,`);
                    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
                  }
                }}
              >
                {translations.products.subscribe}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt=""
              className="max-w-full max-h-full object-contain rounded-2xl shadow-premium"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-gentle"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
