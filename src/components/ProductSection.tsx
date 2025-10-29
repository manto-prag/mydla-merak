import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'individual' | 'gift-set' | 'seasonal';
}

export const ProductSection = () => {
  const { language, translations } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'individual' | 'gift-set' | 'seasonal'>('all');

  const products: Product[] = [
    {
      id: 'swirl-artistry',
      name: language === 'cs' ? 'Vlny' : 'Waves',
      price: 120,
      image: '/lovable-uploads/031d688f-14e1-4243-98cd-3c6509a45216.png',
      description: language === 'cs' ? 'Modro-žluté vírové mýdlo s přírodními ingrediencemi' : 'Blue and yellow swirl soap with natural ingredients',
      category: 'individual'
    },
    {
      id: 'olive-branch',
      name: language === 'cs' ? 'Olivová větvička' : 'Olive Branch',
      price: 110,
      image: '/lovable-uploads/5f52e273-e3a4-44a6-80fd-13feac003cc3.png',
      description: language === 'cs' ? 'Elegantní ovální mýdlo s olivovou větvičkou' : 'Elegant oval soap with olive branch design',
      category: 'individual'
    },
    {
      id: 'ornamental-luxury',
      name: language === 'cs' ? 'Ornamentální luxus' : 'Ornamental Luxury',
      price: 150,
      image: '/lovable-uploads/d12edb48-38b0-441a-91ba-a85548bcd09a.png',
      description: language === 'cs' ? 'Medové mýdlo s detailním růžovým ornamentem' : 'Honey soap with detailed pink ornament',
      category: 'individual'
    },
    {
      id: 'rose-honey',
      name: language === 'cs' ? 'Růžové mýdlo s medem' : 'Rose Honey Soap',
      price: 120,
      image: '/lovable-uploads/3d1b0364-edfe-4f56-b9bb-6732417ef74a.png',
      description: language === 'cs' ? 'Luxusní mýdlo s růžovou vodou a medem' : 'Luxury soap with rose water and honey',
      category: 'individual'
    },
    {
      id: 'swirl-collection',
      name: language === 'cs' ? 'Vírová kolekce' : 'Swirl Collection',
      price: 380,
      image: '/lovable-uploads/d5f3dd1a-4837-49a7-ae16-a25b354de774.png',
      description: language === 'cs' ? 'Set 5 barevných mýdel s vírovými vzory' : 'Set of 5 colorful soaps with swirl patterns',
      category: 'gift-set'
    },
    {
      id: 'lavender-set',
      name: language === 'cs' ? 'Levandulový set' : 'Lavender Set',
      price: 350,
      image: '/lovable-uploads/acd8bdab-3c7e-4cf8-bb4b-f7fa9b3f1e25.png',
      description: language === 'cs' ? 'Set 3 levandulových mýdel pro relaxaci' : 'Set of 3 lavender soaps for relaxation',
      category: 'gift-set'
    },
    {
      id: 'clover-collection',
      name: language === 'cs' ? 'Kolekce čtyřlístek' : 'Clover Collection',
      price: 280,
      image: '/lovable-uploads/e51a7bd7-e07c-40e9-bf10-615691902e94.png',
      description: language === 'cs' ? 'Barevná kolekce se symbolem štěstí' : 'Colorful collection with lucky symbol',
      category: 'gift-set'
    },
    {
      id: 'unique-green-rhino',
      name: language === 'cs' ? 'Jedinečné zelené mýdlo s motivem nosorožce' : 'Unique green soap with rhino motif',
      price: 150,
      image: '/lovable-uploads/013a0911-ca75-4c22-8dfe-ab6e01d8dfc1.png',
      description: language === 'cs' ? 'Výjimečné zelené mýdlo s designem nosorožce' : 'Exceptional green soap with rhino design',
      category: 'individual'
    },
    {
      id: 'elegant-pink-hibiscus',
      name: language === 'cs' ? 'Elegantní růžové mýdlo s květy hibiscu' : 'Elegant pink soap with hibiscus flowers',
      price: 130,
      image: '/lovable-uploads/022c6570-2e64-4175-9c81-eadf0f13716b.png',
      description: language === 'cs' ? 'Jemné růžové mýdlo s tropickými květy hibiscu' : 'Delicate pink soap with tropical hibiscus flowers',
      category: 'seasonal'
    },
    {
      id: 'spring-roses',
      name: language === 'cs' ? 'Jarní růže - limitovaná edice' : 'Spring Roses - Limited Edition',
      price: 150,
      image: '/lovable-uploads/e836594d-8d7c-4fca-ad4b-5c63449d4d24.png',
      description: language === 'cs' ? 'Sezónní kolekce s růžovými plátky' : 'Seasonal collection with rose petals',
      category: 'seasonal'
    },
    {
      id: 'daisy-charm',
      name: language === 'cs' ? 'Kopretinové kouzlo' : 'Daisy Charm',
      price: 125,
      image: '/lovable-uploads/f0d749cf-d742-427c-b839-2cec27ab2e45.png',
      description: language === 'cs' ? 'Růžové mýdlo zdobené bílými kopretinami' : 'Pink soap decorated with white daisies',
      category: 'seasonal'
    },
    {
      id: 'flower-soaps',
      name: language === 'cs' ? 'Květinová kolekce' : 'Flower Collection',
      price: 130,
      image: '/lovable-uploads/168539e3-0182-418b-b4dc-1496bcec65fc.png',
      description: language === 'cs' ? 'Jemné květinové tvary v růžových tónech' : 'Delicate flower shapes in pink tones',
      category: 'individual'
    }
  ];

  const categories = [
    { id: 'all', label: language === 'cs' ? 'Vše' : 'All' },
    { id: 'individual', label: language === 'cs' ? 'Jednotlivá mýdla' : 'Individual Soaps' },
    { id: 'gift-set', label: language === 'cs' ? 'Dárkové sety' : 'Gift Sets' },
    { id: 'seasonal', label: language === 'cs' ? 'Sezónní kolekce' : 'Seasonal Collections' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleQuickOrder = (product: Product) => {
    const subject = encodeURIComponent(`Objednávka: ${product.name}`);
    const body = encodeURIComponent(`Dobrý den,\n\nráda bych si objednala:\n\n${product.name} - ${product.price} Kč\n\nDěkuji,`);
    window.location.href = `mailto:mydla.merak@email.cz?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            {translations.products.title}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-6">
            {translations.products.description}
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id as any)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="gradient-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-premium transition-bounce">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
                {product.category === 'seasonal' && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {language === 'cs' ? 'Limitované' : 'Limited'}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-primary">
                    {language === 'cs' ? 'Od 99 Kč' : 'From 99 CZK'}
                  </div>
                  <Button 
                    variant="default" 
                    onClick={() => handleQuickOrder(product)}
                    className="rounded-full"
                  >
                    {translations.products.orderNow}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="gradient-premium rounded-3xl p-8 max-w-2xl mx-auto shadow-elegant">
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
                className="flex-1 px-4 py-3 rounded-full border-2 border-primary/20 focus:border-primary outline-none"
              />
              <Button 
                variant="default" 
                className="rounded-full px-8"
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
    </section>
  );
};