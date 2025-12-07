import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Sparkles, Gift } from "lucide-react";
import heartSoapsPolka from "@/assets/heart-soaps-polka.jpg";
import greenLayeredSoap from "@/assets/green-layered-soap.jpg";
import soapMakingProcess from "@/assets/soap-making-process.jpg";
import naturalIngredients from "@/assets/natural-ingredients.jpg";
import coffeeBeanSoap from "@/assets/coffee-bean-soap.jpg";
import daisySoapsYellowPink from "@/assets/daisy-soaps-yellow-pink.jpg";
import dentalSoap from "@/assets/dental-soap.jpg";
import greenpinkroses from "@/assets/Green and rose small flowers.jpg";
import greenpinkfl from "@/assets/Small green and pink flowers.jpg";
import butterfly from "@/assets/Butterfly.jpg";

export const GallerySection = () => {
  const { translations, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'individual' | 'gift-set' | 'seasonal'>('all');
  
  const categories = [
    { id: 'all', label: language === 'cs' ? 'Vše' : 'All', icon: Sparkles },
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
      description: language === 'cs' ? "Probuďte smysly luxusní vůní čerstvě pražené kávy! Toto realistické kávové zrno je perfektní dárek pro milovníky kávy." : "Awaken your senses with luxury freshly roasted coffee aroma! This realistic coffee bean is the perfect gift for coffee lovers.",
      category: 'individual',
      badge: language === 'cs' ? 'Bestseller' : 'Bestseller'
    },
    {
      src: butterfly,
      alt: language === 'cs' ? "Zdobené" : "butterfly",
      description: language === 'cs' ? "Ručně vyráběné mýdlo zdobené jemným motivem motýlka působí lehce, hravě a elegantně" : "A delicate butterfly design feels light, playful, and elegant",
      category: 'individual',
      badge: language === 'cs' ? 'Oblíbené' : 'Popular'
    },
    {
      src: dentalSoap,
      alt: language === 'cs' ? "Mýdlo ve tvaru zubu" : "Tooth shaped soap",
      description: language === 'cs' ? "Originální dárek pro zubaře a dentální hygienistky! Unikátní zub s úsměvem rozveselí každou ordinaci." : "Original gift for dentists and dental hygienists! Unique smiling tooth brightens every dental office.",
      category: 'individual',
      badge: language === 'cs' ? 'Unikát' : 'Unique'
    },
    {
      src: "/lovable-uploads/031d688f-14e1-4243-98cd-3c6509a45216.png",
      alt: language === 'cs' ? "Mořská hvězdice tyrkysová a žlutá" : "Starfish turquoise and yellow",
      description: language === 'cs' ? "Přineste moře domů! Roztomilé hvězdice v zářivé tyrkysové a slunečné žluté - ideální letní dekorace." : "Bring the ocean home! Cute starfish in vibrant turquoise and sunny yellow - ideal summer decoration.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/5f52e273-e3a4-44a6-80fd-13feac003cc3.png",
      alt: language === 'cs' ? "Krémové mýdlo s olivovou větvičkou" : "Cream soap with olive branch",
      description: language === 'cs' ? "Elegance středomoří ve vašem domě. Olivová větvička symbolizuje mír a pohodu - nádherný dárek." : "Mediterranean elegance in your home. Olive branch symbolizes peace and harmony - gorgeous gift.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/d12edb48-38b0-441a-91ba-a85548bcd09a.png",
      alt: language === 'cs' ? "Medové mýdlo s královským ornamentem" : "Honey soap with royal ornament",
      description: language === 'cs' ? "Královská elegance v každém detailu! Zlatý med s propracovaným ornamentem - luxusní dárek pro náročné." : "Royal elegance in every detail! Golden honey with intricate ornament - luxury gift for the discerning.",
      category: 'individual',
      badge: language === 'cs' ? 'Luxus' : 'Luxury'
    },
    {
      src: "/lovable-uploads/013a0911-ca75-4c22-8dfe-ab6e01d8dfc1.png",
      alt: language === 'cs' ? "Zelené mýdlo s nosorožcem" : "Green soap with rhino",
      description: language === 'cs' ? "Pro milovníky exotické přírody! Majestátní nosorožec v zeleni - unikátní kousek pro sběratele." : "For exotic nature lovers! Majestic rhino in green - unique piece for collectors.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/168539e3-0182-418b-b4dc-1496bcec65fc.png",
      alt: language === 'cs' ? "Růžová dahlia" : "Pink dahlia",
      description: language === 'cs' ? "Mistrovské dílo přírody! Každý lístek této nádherné dahlie je ručně tvarován - okouzlující květinová krása." : "Nature's masterpiece! Every petal of this gorgeous dahlia is hand-shaped - enchanting floral beauty.",
      category: 'individual',
      badge: language === 'cs' ? 'Ruční práce' : 'Handmade'
    },
    {
      src: "/lovable-uploads/9484dc8e-b707-4841-a8b2-ab69f427adb3.png",
      alt: language === 'cs' ? "Růžová pivoňka" : "Pink peony",
      description: language === 'cs' ? "Symbol romantiky a prosperity! Jemná pivoňka v pastelových růžových tónech - perfektní pro milovníky květin." : "Symbol of romance and prosperity! Delicate peony in pastel pink tones - perfect for flower lovers.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/01faf456-2de1-4c49-8e90-0019bf7ffac3.png",
      alt: language === 'cs' ? "Růžová chryzantéma" : "Pink chrysanthemum",
      description: language === 'cs' ? "Přineste štěstí domů! Chryzantéma je symbolem dlouhého života a radosti - okouzlující pastelová krása." : "Bring happiness home! Chrysanthemum symbolizes long life and joy - enchanting pastel beauty.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/aba33224-4ce2-4776-b8e1-6665cee2c613.png",
      alt: language === 'cs' ? "Třpytivé glamour mýdlo" : "Sparkling glamour soap",
      description: language === 'cs' ? "Dodejte koupelně nádech luxusu! Třpytivé růžové mýdlo s glamour efektem - pro ty, kdo milují eleganci." : "Add luxury touch to your bathroom! Sparkling pink soap with glamour effect - for those who love elegance.",
      category: 'individual'
    },
    {
      src: greenLayeredSoap,
      alt: language === 'cs' ? "Vrstvené zelené mýdlo s bylinkami" : "Layered green soap with herbs",
      description: language === 'cs' ? "Svěžest přírody ve vrstvách! Aromatické bylinky v krémových vrstvách - přineste si zahradu domů." : "Nature's freshness in layers! Aromatic herbs in cream layers - bring the garden home.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/1691336c-8212-4afc-8d75-af6a3c0b123e.png",
      alt: language === 'cs' ? "Bylinné zelené mýdlo" : "Green herbal soap",
      description: language === 'cs' ? "Harmonie lesa a louky! Bylinková esence v odstínech zelené - pro milovníky přírodní krásy." : "Harmony of forest and meadow! Herbal essence in shades of green - for natural beauty lovers.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/8f824295-51a2-49b5-9dd5-1d7230217060.png",
      alt: language === 'cs' ? "Tyrkysové vírové mýdlo" : "Turquoise swirl soap",
      description: language === 'cs' ? "Energie oceánu v dynamickém víru! Tyrkysová a žlutá v hravém spojení - osvěžující kousek." : "Ocean energy in dynamic swirl! Turquoise and yellow in playful fusion - refreshing piece.",
      category: 'individual'
    },
    {
      src: "/lovable-uploads/022c6570-2e64-4175-9c81-eadf0f13716b.png",
      alt: language === 'cs' ? "Oválné mýdlo s ibiškem" : "Oval soap with hibiscus",
      description: language === 'cs' ? "Tropická elegance! Propracovaný květ ibišku na elegantním oválu - exotická krása pro váš domov." : "Tropical elegance! Intricate hibiscus flower on elegant oval - exotic beauty for your home.",
      category: 'seasonal'
    },
    // Gift sets
    {
      src: daisySoapsYellowPink,
      alt: language === 'cs' ? "Kopretiny žluté a růžové" : "Daisies yellow and pink",
      description: language === 'cs' ? "Jarní pohádka! Slunečné kopretiny ve žluté a růžové přinesou radost do každého dne." : "Spring fairy tale! Sunny daisies in yellow and pink bring joy to every day.",
      category: 'gift-set',
      badge: language === 'cs' ? 'Oblíbené' : 'Popular'
    },
    {
      src: greenpinkfl,
      alt: language === 'cs' ? "květinovým vzorem" : "a floral designn",
      description: language === 'cs' ? "Přírodně a elegantně s květinovým vzorem — ideální do dárkových sad i jako dekorativní prvek v koupelně" : "Naturally elegant with a floral design — perfect for gift sets or as a decorative element in the bathroom",
      category: 'gift-set',
    },
    {
      src: greenpinkroses,
      alt: language === 'cs' ? "Mýdlo ve tvaru zelené a růžov" : "Green and pink rose–shaped",
      description: language === 'cs' ? "Mýdlo ve tvaru zelené a růžové růžičky okouzlí svou jemnou barvou a svěží vůní" : "This handmade green and pink rose–shaped soap charms with its soft color and fresh scent",
      category: 'gift-set',
      badge: language === 'cs' ? 'Oblíbené' : 'Popular'
    },
    {
      src: "/lovable-uploads/d5f3dd1a-4837-49a7-ae16-a25b354de774.png",
      alt: language === 'cs' ? "Kolekce pěti reliéfních mýdel" : "Collection of five relief soaps",
      description: language === 'cs' ? "Kompletní sbírka pro znalce! Pět unikátních mýdel s propracovanými vzory - impozantní dárková sada." : "Complete collection for connoisseurs! Five unique soaps with intricate patterns - impressive gift set.",
      category: 'gift-set'
    },
    {
      src: "/lovable-uploads/acd8bdab-3c7e-4cf8-bb4b-f7fa9b3f1e25.png",
      alt: language === 'cs' ? "Levandulová kolekce" : "Lavender collection",
      description: language === 'cs' ? "Uklidňující levandule! Harmonická modro-fialová sada pro relaxaci a pohodu - ideální pro odpočinek." : "Soothing lavender! Harmonious blue-purple set for relaxation and wellbeing - ideal for unwinding.",
      category: 'gift-set'
    },
    {
      src: "/lovable-uploads/e51a7bd7-e07c-40e9-bf10-615691902e94.png",
      alt: language === 'cs' ? "Čtyřlístky pro štěstí" : "Four-leaf clovers for luck",
      description: language === 'cs' ? "Přineste štěstí blízkým! Krásné čtyřlístky v zelené, růžové a bílé - symbol dobré náhody." : "Bring luck to loved ones! Beautiful four-leaf clovers in green, pink and white - symbol of good fortune.",
      category: 'gift-set',
      badge: language === 'cs' ? 'Pro štěstí' : 'Lucky charm'
    },
    {
      src: heartSoapsPolka,
      alt: language === 'cs' ? "Romantická srdíčka v puntíkovaném balení" : "Romantic hearts in polka-dot packaging",
      description: language === 'cs' ? "Láska v každém detailu! Něžná srdíčka z kozího mléka a medu v roztomilém balení - dokonalý dárek lásky." : "Love in every detail! Delicate hearts from goat milk and honey in adorable packaging - perfect love gift.",
      category: 'gift-set',
      badge: language === 'cs' ? 'Romantické' : 'Romantic'
    },
    {
      src: "/lovable-uploads/ec77542b-cdd2-436e-89d3-7e61c0a71cc8.png",
      alt: language === 'cs' ? "Sladká romantická sada" : "Sweet romantic set",
      description: language === 'cs' ? "Sladkost romantiky! Medové mýdlo, srdíčka a poupátko růže - vyznání lásky v mýdlové formě." : "Sweetness of romance! Honey soap, hearts and rose bud - declaration of love in soap form.",
      category: 'gift-set'
    },
    {
      src: "/lovable-uploads/701fba05-b384-4891-b658-5ebbd8060bf0.png",
      alt: language === 'cs' ? "Pastelová kolekce s přírodními motivy" : "Pastel collection with natural motifs",
      description: language === 'cs' ? "Jemná krása přírody! Nádherná pastelová kolekce inspirovaná přírodou - elegance pro každý domov." : "Gentle beauty of nature! Gorgeous pastel collection inspired by nature - elegance for every home.",
      category: 'gift-set'
    },
    {
      src: "/lovable-uploads/3d1b0364-edfe-4f56-b9bb-6732417ef74a.png",
      alt: language === 'cs' ? "Luxusní kolekce se sušenými květy" : "Luxury collection with dried flowers",
      description: language === 'cs' ? "Květinová nádhera! Ozdobená sušenými květy a voňavou levandulí - luxusní dárek pro náročné." : "Floral splendor! Adorned with dried flowers and fragrant lavender - luxury gift for the discerning.",
      category: 'gift-set',
      badge: language === 'cs' ? 'Premium' : 'Premium'
    },
    // Seasonal
    {
      src: "/lovable-uploads/e836594d-8d7c-4fca-ad4b-5c63449d4d24.png",
      alt: language === 'cs' ? "Růžové mýdlo s poupátky růží" : "Pink soap with rose buds",
      description: language === 'cs' ? "Symbol věčné lásky! Nádherné mýdlo zdobené skutečnými poupátky růží - romantika v každém detailu." : "Symbol of eternal love! Gorgeous soap adorned with real rose buds - romance in every detail.",
      category: 'seasonal',
      badge: language === 'cs' ? 'Romantické' : 'Romantic'
    },
    {
      src: "/lovable-uploads/f0d749cf-d742-427c-b839-2cec27ab2e45.png",
      alt: language === 'cs' ? "Jarní mýdlo s kopretinami" : "Spring soap with daisies",
      description: language === 'cs' ? "Jarní probuzení! Něžné růžové mýdlo s rozkvetlými kopretinami - přinese jarní atmosféru celoročně." : "Spring awakening! Delicate pink soap with blooming daisies - brings spring atmosphere year-round.",
      category: 'seasonal'
    },
    {
      src: "/lovable-uploads/fa8c4584-49bd-4414-89f9-2a2f9a4761a6.png",
      alt: language === 'cs' ? "Relaxační masážní mýdla" : "Relaxation massage soaps",
      description: language === 'cs' ? "Spa zážitek doma! Speciální mýdla s masážními výstupky pro dokonalou relaxaci - wellness pro vaše smysly." : "Spa experience at home! Special soaps with massage nubs for perfect relaxation - wellness for your senses.",
      category: 'seasonal'
    },
    // Craft showcase
    {
      src: soapMakingProcess,
      alt: language === 'cs' ? "Ruční výroba mýdel" : "Handmade soap crafting",
      description: language === 'cs' ? "Řemeslná tradice! Každé mýdlo vzniká s láskou a péčí v našem ateliéru - kvalita, kterou ucítíte." : "Craft tradition! Each soap is created with love and care in our studio - quality you can feel.",
      category: 'individual'
    },
    {
      src: naturalIngredients,
      alt: language === 'cs' ? "Přírodní ingredience" : "Natural ingredients",
      description: language === 'cs' ? "Pouze to nejlepší z přírody! Olivový olej, kozí mléko, med a růžové plátky - přírodní luxus." : "Only the best from nature! Olive oil, goat milk, honey and rose petals - natural luxury.",
      category: 'individual'
    }
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
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
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
