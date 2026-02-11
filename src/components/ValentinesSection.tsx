import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import valentineBouquet1 from "@/assets/valentine-bouquet-1.jpg";
import valentineBouquet2 from "@/assets/valentine-bouquet-2.jpg";
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
import valentineCupcakeSalt from "@/assets/valentine-cupcake-salt.jpg";
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

interface ValentineProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const ValentinesSection = () => {
  const { language } = useLanguage();

  const valentineProducts: ValentineProduct[] = [
    {
      id: 'valentine-bouquet-1',
      name: language === 'cs' ? 'Mýdlová kytice - Růže a pivoňky' : 'Soap Bouquet - Roses & Peonies',
      price: 450,
      image: valentineBouquet1,
      description: language === 'cs' ? 'Nádherná kytice z ručně tvarovaných mýdlových růží a pivoněk v romantických růžových, korálových a mátových tónech - nezapomenutelný dárek lásky' : 'Gorgeous bouquet of hand-shaped soap roses and peonies in romantic pink, coral and mint tones - unforgettable gift of love'
    },
    {
      id: 'valentine-bouquet-2',
      name: language === 'cs' ? 'Mýdlová kytice se srdíčkem' : 'Soap Bouquet with Heart',
      price: 480,
      image: valentineBouquet2,
      description: language === 'cs' ? 'Romantická kytice mýdlových květin doplněná růžovým srdíčkem - dokonalé vyznání lásky ke Dni sv. Valentýna' : 'Romantic soap flower bouquet adorned with pink heart - perfect declaration of love for Valentine\'s Day'
    },
    {
      id: 'valentine-heart-pink',
      name: language === 'cs' ? 'Růžové srdíčko' : 'Pink Heart Soap',
      price: 89,
      image: valentineHeartPink,
      description: language === 'cs' ? 'Něžné růžové srdíčko v roztomilém košíčku - jemná krása plná lásky a romantiky' : 'Delicate pink heart in adorable cupcake wrapper - gentle beauty full of love and romance'
    },
    {
      id: 'valentine-heart-red-white',
      name: language === 'cs' ? 'Červeno-bílé srdíčko' : 'Red & White Heart',
      price: 89,
      image: valentineHeartRedWhite,
      description: language === 'cs' ? 'Dvouvrstvé srdíčko s vášnivou červenou a čistou bílou - symbol věčné lásky v elegantním provedení' : 'Two-layered heart with passionate red and pure white - symbol of eternal love in elegant design'
    },
    {
      id: 'valentine-heart-diamond',
      name: language === 'cs' ? 'Diamantové srdce' : 'Diamond Heart',
      price: 119,
      image: valentineHeartDiamond,
      description: language === 'cs' ? 'Luxusní fasetované srdce s mramorováním v růžové a červené - jako drahokam plný lásky a vášně' : 'Luxury faceted heart with pink and red marbling - like a gemstone full of love and passion'
    },
    {
      id: 'valentine-hearts-collection',
      name: language === 'cs' ? 'Kolekce diamantových srdcí' : 'Diamond Hearts Collection',
      price: 350,
      image: valentineHeartsCollection,
      description: language === 'cs' ? 'Okouzlující sbírka fasetovaných srdíček v různých odstínech růžové - dokonalý valentýnský dárek pro vaši lásku' : 'Enchanting collection of faceted hearts in various shades of pink - perfect Valentine\'s gift for your love'
    },
    {
      id: 'valentine-heart-layered',
      name: language === 'cs' ? 'Vrstvené červené srdce' : 'Layered Red Heart',
      price: 99,
      image: valentineHeartLayered,
      description: language === 'cs' ? 'Sytě červené srdce s krásným vrstvením červené a bílé - vášnivá láska zachycená v mýdle' : 'Rich red heart with beautiful red and white layering - passionate love captured in soap'
    },
    {
      id: 'valentine-hearts-duo',
      name: language === 'cs' ? 'Valentýnská sada srdíček' : 'Valentine Hearts Set',
      price: 199,
      image: valentineHeartsDuo,
      description: language === 'cs' ? 'Romantická sada červených a růžových srdíček v dárkových košíčcích - potěšte svou polovičku' : 'Romantic set of red and pink hearts in gift wrappers - delight your sweetheart'
    },
    {
      id: 'valentine-heart-red-salt',
      name: language === 'cs' ? 'Srdce na růžové soli' : 'Heart on Pink Salt',
      price: 109,
      image: valentineHeartRedSalt,
      description: language === 'cs' ? 'Zářivě červené srdce na polštářku z himalájské růžové soli - luxusní spa zážitek plný lásky' : 'Vibrant red heart on a bed of Himalayan pink salt - luxury spa experience full of love'
    },
    {
      id: 'valentine-hearts-diamond-pair',
      name: language === 'cs' ? 'Pár diamantových srdcí' : 'Diamond Hearts Pair',
      price: 199,
      image: valentineHeartsDiamondPair,
      description: language === 'cs' ? 'Dva fasetované srdíčka na růžové soli jako symbol nerozlučné lásky - ideální dárek pro páry' : 'Two faceted hearts on pink salt as symbol of inseparable love - ideal gift for couples'
    },
    {
      id: 'valentine-heart-salt-sprinkle',
      name: language === 'cs' ? 'Srdce s krystaly soli' : 'Heart with Salt Crystals',
      price: 119,
      image: valentineHeartSaltSprinkle,
      description: language === 'cs' ? 'Zářivě červené srdce posypané třpytivými krystaly himalájské soli - luxusní dekorativní kousek plný vášně a elegance' : 'Vibrant red heart sprinkled with sparkling Himalayan salt crystals - luxury decorative piece full of passion and elegance'
    },
    {
      id: 'valentine-diamond-hearts-salt',
      name: language === 'cs' ? 'Diamantové srdce se srdíčky' : 'Diamond Heart with Hearts',
      price: 139,
      image: valentineDiamondHeartsSalt,
      description: language === 'cs' ? 'Fasetované mramorové srdce obklopené malými červenými srdíčky na růžové soli - romantická dekorace, která okouzlí každého' : 'Faceted marble heart surrounded by small red hearts on pink salt - romantic decoration that enchants everyone'
    },
    {
      id: 'valentine-cupcake-salt',
      name: language === 'cs' ? 'Valentýnské cupcaky' : 'Valentine Cupcakes',
      price: 159,
      image: valentineCupcakeSalt,
      description: language === 'cs' ? 'Roztomilé bílé mýdlové cupcaky zdobené růžovými krystaly soli a červenými srdíčky - sladká romantika pro vaši lásku' : 'Adorable white soap cupcakes decorated with pink salt crystals and red hearts - sweet romance for your love'
    },
    {
      id: 'valentine-ornate-heart-box',
      name: language === 'cs' ? 'Ornamentální srdce v dárkové krabičce' : 'Ornamental Heart Gift Box',
      price: 179,
      image: valentineOrnateHeartBox,
      description: language === 'cs' ? 'Nádherné růžové srdce s propracovanými barokními ornamenty v elegantní zlaté krabičce na vyřezávaném podstavci - luxusní dárek lásky' : 'Gorgeous pink heart with intricate baroque ornaments in elegant golden box on carved stand - luxury gift of love'
    },
    {
      id: 'valentine-bouquet-pink-peonies',
      name: language === 'cs' ? 'Kytice růžových pivoněk' : 'Pink Peony Bouquet',
      price: 490,
      image: valentineBouquetPinkPeonies,
      description: language === 'cs' ? 'Okouzlující kytice ručně tvarovaných mýdlových pivoněk a růží v jemných růžových a korálových tónech s mátovými akcenty - dechberoucí valentýnský dar' : 'Enchanting bouquet of hand-shaped soap peonies and roses in soft pink and coral tones with mint accents - breathtaking Valentine\'s gift'
    },
    {
      id: 'valentine-bouquet-vase',
      name: language === 'cs' ? 'Kytice v dekorativní váze' : 'Bouquet in Decorative Vase',
      price: 550,
      image: valentineBouquetVase,
      description: language === 'cs' ? 'Luxusní mýdlová kytice růžových pivoněk v elegantní bílé váze s reliéfním vzorem - nádherná dekorace i romantický dárek v jednom' : 'Luxury soap bouquet of pink peonies in elegant white vase with embossed pattern - gorgeous decoration and romantic gift in one'
    },
    {
      id: 'valentine-i-love-prague',
      name: language === 'cs' ? 'Srdce I ♥ Prague' : 'I ♥ Prague Heart',
      price: 99,
      image: valentineILovePrague,
      description: language === 'cs' ? 'Romantické růžové srdce s vyraženým nápisem I ♥ Prague - ideální suvenýr a valentýnský dárek pro milovníky Prahy' : 'Romantic pink heart with embossed I ♥ Prague lettering - ideal souvenir and Valentine\'s gift for Prague lovers'
    },
    {
      id: 'valentine-flower-heart',
      name: language === 'cs' ? 'Květinové srdce' : 'Floral Heart',
      price: 109,
      image: valentineFlowerHeart,
      description: language === 'cs' ? 'Něžné srdce pokryté drobnými květinovými pupínky v jemné růžovo-bílé kombinaci - romantický symbol lásky a jemnosti' : 'Delicate heart covered with tiny floral buds in soft pink-white combination - romantic symbol of love and tenderness'
    },
    {
      id: 'valentine-bear-heart',
      name: language === 'cs' ? 'Medvídek se srdíčkem' : 'Bear with Heart',
      price: 149,
      image: valentineBearHeart,
      description: language === 'cs' ? 'Roztomilý růžový medvídek z mýdlových růžiček držící bílé pletené srdíčko s malými barevnými srdíčky - nejsladší valentýnské překvapení' : 'Adorable pink bear made of soap roses holding white knitted heart with small colorful hearts - the sweetest Valentine\'s surprise'
    },
    {
      id: 'valentine-heart-petal-pink',
      name: language === 'cs' ? 'Srdce s květinovými okvětními lístky' : 'Heart with Floral Petals',
      price: 129,
      image: valentineHeartPetalPink,
      description: language === 'cs' ? 'Jemné růžové srdce pokryté drobnými květinovými okvětními lístky v bohaté textuře - romantická dekorace plná elegance a měkkosti' : 'Delicate pink heart covered with tiny floral petals in rich texture - romantic decoration full of elegance and softness'
    },
    {
      id: 'valentine-heart-ribbed-pink',
      name: language === 'cs' ? 'Srdce s jemnými žebrují' : 'Heart with Gentle Ribbed Texture',
      price: 129,
      image: valentineHeartRibbedPink,
      description: language === 'cs' ? 'Elegantní růžové srdce s jemnými vertikálními žebrováním - dokonalá kombinace jednoduchosti a rafináace' : 'Elegant pink heart with gentle vertical ribbed pattern - perfect combination of simplicity and refinement'
    },
    {
      id: 'valentine-heart-wavy-pink',
      name: language === 'cs' ? 'Srdce s vlnravým vzorem' : 'Heart with Wavy Pattern',
      price: 129,
      image: valentineHeartWavyPink,
      description: language === 'cs' ? 'Krásné růžové srdce s plynulým vlnravým vzorem - symbolizuje tok lásky a něhy mezi dvěma srdci' : 'Beautiful pink heart with flowing wavy pattern - symbolizes the flow of love and tenderness between two hearts'
    },
    {
      id: 'valentine-heart-scalloped-pink',
      name: language === 'cs' ? 'Srdce s vlnkami' : 'Heart with Scalloped Edges',
      price: 129,
      image: valentineHeartScallopedPink,
      description: language === 'cs' ? 'Roztomilé růžové srdce se zdobenými vějířkovitými okraji - něžná a ženská forma pro ideální valentýnský dárek' : 'Adorable pink heart with decorative scalloped edges - delicate and feminine form for the perfect Valentine\'s gift'
    },
    {
      id: 'valentine-luxury-bouquet-arrangement',
      name: language === 'cs' ? 'Luxusní valentýnská kytice s dekoracemi' : 'Luxury Valentine\'s Bouquet with Decorations',
      price: 650,
      image: valentineLuxuryBouquetArrangement,
      description: language === 'cs' ? 'Nádherná luxusní kytice složená z ručně vyráběných mýdlových růží, pivoněk a srdcí v různých odstínech růžové a červené, doplněná dekorativními ozdobami, medvídky a valentýnskými tagy - nejexkluzivnější dárek lásky' : 'Gorgeous luxury bouquet composed of handmade soap roses, peonies and hearts in various shades of pink and red, adorned with decorative embellishments, teddy bears and Valentine\'s tags - the most exclusive gift of love'
    },
    {
      id: 'valentine-bear-heart-valentine',
      name: language === 'cs' ? 'Medvídek Be My Valentine' : 'Be My Valentine Bear',
      price: 159,
      image: valentineBearHeartValentine,
      description: language === 'cs' ? 'Roztomilý růžový medvídek z mýdlových růžiček s hladkým srdíčkem a valentýnskou kartičkou "Be my Valentine" - okouzlující dárek plný lásky a něhy' : 'Adorable pink bear made of soap roses with smooth heart and Valentine\'s card "Be my Valentine" - charming gift full of love and tenderness'
    },
  ];

  const handleQuickOrder = (product: ValentineProduct) => {
    const subject = encodeURIComponent(`Valentýnská objednávka: ${product.name}`);
    const body = encodeURIComponent(`Dobrý den,\n\nráda bych si objednala valentýnské mýdlo:\n\n${product.name}\nCena: ${product.price} Kč\n\nDěkuji,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 via-red-50/30 to-pink-50 dark:from-pink-950/20 dark:via-red-950/10 dark:to-pink-950/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            💕 {language === 'cs' ? 'VALENTÝNSKÁ KOLEKCE' : "VALENTINE'S COLLECTION"} 💕
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-6">
            {language === 'cs' ? 'Valentýnská kolekce' : "Valentine's Collection"}
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {language === 'cs' 
              ? 'Překvapte svou lásku ručně vyráběnými mýdly ve tvaru srdce. Každý kousek je vytvořen s láskou a péčí - dokonalý dárek ke Dni sv. Valentýna.'
              : "Surprise your love with handmade heart-shaped soaps. Each piece is crafted with love and care - the perfect Valentine's Day gift."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {valentineProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-premium transition-bounce border-2 border-pink-100 dark:border-pink-900/30 group">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain bg-white group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 right-4">
                  <span className="text-2xl">💕</span>
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
                  <span className="text-lg font-bold text-pink-600">
                    {product.price} Kč
                  </span>
                  <Button 
                    variant="default" 
                    onClick={() => handleQuickOrder(product)}
                    className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"
                    size="sm"
                  >
                    {language === 'cs' ? 'Objednat' : 'Order'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Valentine Banner */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 rounded-3xl p-8 text-center text-white shadow-premium">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            💝 {language === 'cs' ? 'Darujte lásku ke Dni sv. Valentýna!' : "Give Love This Valentine's Day!"} 💝
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            {language === 'cs' 
              ? 'Každé srdíčko je ručně vyrobené s láskou. Objednejte včas a překvapte svou polovičku originálním dárkem.'
              : 'Every heart is handmade with love. Order early and surprise your sweetheart with an original gift.'}
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="rounded-full bg-white text-pink-600 hover:bg-gray-100 font-bold"
            onClick={() => {
              const subject = encodeURIComponent('Valentýnská objednávka - celá kolekce');
              const body = encodeURIComponent('Dobrý den,\n\nmám zájem o valentýnskou kolekci mýdel.\n\nProsím o více informací.\n\nDěkuji,');
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
