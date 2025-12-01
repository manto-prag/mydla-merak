import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import heartSoapsPolka from "@/assets/heart-soaps-polka.jpg";
import greenLayeredSoap from "@/assets/green-layered-soap.jpg";
import soapMakingProcess from "@/assets/soap-making-process.jpg";
import naturalIngredients from "@/assets/natural-ingredients.jpg";
import coffeeBeanSoap from "@/assets/coffee-bean-soap.jpg";
import christmasStarPink from "@/assets/christmas-star-pink.jpg";

export const GallerySection = () => {
  const { translations, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: coffeeBeanSoap,
      alt: language === 'cs' ? "Kávové mýdlo ve tvaru kávového zrna" : "Coffee soap shaped as coffee bean",
      description: language === 'cs' ? "Pro milovníky kávy - mýdlo ve tvaru kávového zrna s přírodními ingrediencemi" : "For coffee lovers - coffee bean shaped soap with natural ingredients"
    },
    {
      src: christmasStarPink,
      alt: language === 'cs' ? "Růžová vánoční hvězda s ornamentálním vzorem" : "Pink Christmas star with ornamental pattern",
      description: language === 'cs' ? "Vánoční hvězda v jemně růžové barvě s detailním ornamentem" : "Christmas star in soft pink with detailed ornament"
    },
    {
      src: "/lovable-uploads/031d688f-14e1-4243-98cd-3c6509a45216.png",
      alt: language === 'cs' ? "Modro-žluté vírové mýdlo s přírodními ingrediencemi" : "Blue and yellow swirl soap with natural ingredients",
      description: language === 'cs' ? "Umělecký vírový vzor v tyrkysových a žlutých tónech" : "Artistic swirl pattern in turquoise and yellow tones"
    },
    {
      src: "/lovable-uploads/5f52e273-e3a4-44a6-80fd-13feac003cc3.png",
      alt: language === 'cs' ? "Ovální mýdlo s olivovou větvičkou" : "Oval soap with olive branch design",
      description: language === 'cs' ? "Elegantní krémové mýdlo zdobené olivovou větvičkou" : "Elegant cream soap decorated with olive branch"
    },
    {
      src: "/lovable-uploads/d12edb48-38b0-441a-91ba-a85548bcd09a.png",
      alt: language === 'cs' ? "Čtvercové mýdlo s ornamentálním vzorem" : "Square soap with ornamental pattern",
      description: language === 'cs' ? "Luxusní medové mýdlo s detailním růžovým ornamentem" : "Luxury honey soap with detailed pink ornament"
    },
    {
      src: "/lovable-uploads/d5f3dd1a-4837-49a7-ae16-a25b354de774.png",
      alt: language === 'cs' ? "Kolekce barevných vírových mýdel" : "Collection of colorful swirl soaps",
      description: language === 'cs' ? "Pět různobarevných mýdel s úchvatnými vírovými vzory" : "Five colorful soaps with stunning swirl patterns"
    },
    {
      src: "/lovable-uploads/f0d749cf-d742-427c-b839-2cec27ab2e45.png",
      alt: language === 'cs' ? "Růžové mýdlo s kopretinami" : "Pink soap with daisy flowers",
      description: language === 'cs' ? "Jemně růžové mýdlo zdobené bílými kopretinami" : "Soft pink soap decorated with white daisies"
    },
    {
      src: "/lovable-uploads/022c6570-2e64-4175-9c81-eadf0f13716b.png",
      alt: language === 'cs' ? "Růžové mýdlo s tropickými květy" : "Pink soap with tropical flowers",
      description: language === 'cs' ? "Elegantní růžové mýdlo s hibiskusovými květy" : "Elegant pink soap with hibiscus flowers"
    },
    {
      src: "/lovable-uploads/8f824295-51a2-49b5-9dd5-1d7230217060.png",
      alt: language === 'cs' ? "Tyrkysové vírové mýdlo" : "Turquoise swirl soap",
      description: language === 'cs' ? "Živé tyrkysové a žluté víry v přírodním prostředí" : "Vibrant turquoise and yellow swirls in natural setting"
    },
    {
      src: "/lovable-uploads/701fba05-b384-4891-b658-5ebbd8060bf0.png",
      alt: language === 'cs' ? "Květinové mandala mýdlo" : "Floral mandala soap",
      description: language === 'cs' ? "Složitý květinový vzor s růžovým středem" : "Intricate floral pattern with pink center"
    },
    {
      src: "/lovable-uploads/fa8c4584-49bd-4414-89f9-2a2f9a4761a6.png",
      alt: language === 'cs' ? "Masážní mýdla s výstupky" : "Massage soaps with nubs",
      description: language === 'cs' ? "Speciální mýdla s masážními výstupky v růžových tónech" : "Special soaps with massage nubs in pink tones"
    },
    {
      src: "/lovable-uploads/013a0911-ca75-4c22-8dfe-ab6e01d8dfc1.png",
      alt: language === 'cs' ? "Zelené mýdlo s nosorožci" : "Green soap with rhinos",
      description: language === 'cs' ? "Unikátní zelené mýdlo s motivem nosorožce" : "Unique green soap with rhino motif"
    },
    {
      src: soapMakingProcess,
      alt: language === 'cs' ? "Proces výroby přírodních mýdel" : "Natural soap making process",
      description: language === 'cs' ? "Ruční výroba s přírodními ingrediencemi" : "Handcrafting with natural ingredients"
    },
    {
      src: "/lovable-uploads/3d1b0364-edfe-4f56-b9bb-6732417ef74a.png",
      alt: language === 'cs' ? "Růžová mýdla s květinovými plátky a přírodními dekoracemi" : "Pink soaps with flower petals and natural decorations",
      description: language === 'cs' ? "Luxusní mýdla zdobená sušenými květy a bylinkami" : "Luxury soaps decorated with dried flowers and herbs"
    },
    {
      src: "/lovable-uploads/acd8bdab-3c7e-4cf8-bb4b-f7fa9b3f1e25.png",
      alt: language === 'cs' ? "Levandulová mýdla v modro-fialových odstínech" : "Lavender soaps in blue-purple shades",
      description: language === 'cs' ? "Relaxační mýdla s levandulí a zklidňujícími barvami" : "Relaxing soaps with lavender and calming colors"
    },
    {
      src: naturalIngredients,
      alt: language === 'cs' ? "Přírodní ingredience pro výrobu mýdel" : "Natural ingredients for soap making",
      description: language === 'cs' ? "Olivový olej, kozí mléko, med a růžové plátky" : "Olive oil, goat milk, honey and rose petals"
    },
    {
      src: heartSoapsPolka,
      alt: language === 'cs' ? "Jemná srdíčková mýdla v puntíkovaných košíčcích" : "Delicate heart-shaped soaps in polka-dot wrappers",
      description: language === 'cs' ? "Krémová a bílá srdíčka z kozího mléka a medu" : "Cream and white hearts from goat milk and honey"
    },
    {
      src: greenLayeredSoap,
      alt: language === 'cs' ? "Zelené vrstvené mýdlo s bylinkami" : "Green layered soap with herbs", 
      description: language === 'cs' ? "Přírodní mýdlo se zelenými a krémovými vrstvami" : "Natural soap with green and cream layers"
    },
    {
      src: "/lovable-uploads/e836594d-8d7c-4fca-ad4b-5c63449d4d24.png",
      alt: language === 'cs' ? "Růžové mýdlo s poupátky růží" : "Pink soap with rose buds",
      description: language === 'cs' ? "Jemné růžové mýdlo zdobené skutečnými poupátky růží" : "Delicate pink soap decorated with real rose buds"
    },
    {
      src: "/lovable-uploads/1691336c-8212-4afc-8d75-af6a3c0b123e.png",
      alt: language === 'cs' ? "Zelené vrstvené mýdlo s bylinkami" : "Green layered soap with herbs",
      description: language === 'cs' ? "Přírodní mýdlo s výraznými zelenými a bílými vrstvami" : "Natural soap with distinctive green and white layers"
    },
    {
      src: "/lovable-uploads/9484dc8e-b707-4841-a8b2-ab69f427adb3.png",
      alt: language === 'cs' ? "Růžové květinové mýdlo" : "Pink flower soap",
      description: language === 'cs' ? "Krásné růžové mýdlo ve tvaru květu s jemnými detaily" : "Beautiful pink flower-shaped soap with delicate details"
    },
    {
      src: "/lovable-uploads/ec77542b-cdd2-436e-89d3-7e61c0a71cc8.png",
      alt: language === 'cs' ? "Medové kulaté mýdlo s poupátkem růže a srdíčky" : "Honey round soaps with rose bud and hearts",
      description: language === 'cs' ? "Kulatá mýdla s jemným vzorem a přírodní dekorací" : "Round soaps with delicate pattern and rose bud decoration"
    },
    {
      src: "/lovable-uploads/01faf456-2de1-4c49-8e90-0019bf7ffac3.png",
      alt: language === 'cs' ? "Růžové květinové mýdlo" : "Pink floral soap bar",
      description: language === 'cs' ? "Bohatá květinová textura v růžových tónech" : "Rich floral texture in pink tones"
    },
    {
      src: "/lovable-uploads/e51a7bd7-e07c-40e9-bf10-615691902e94.png",
      alt: language === 'cs' ? "Kulatá mýdla se čtyřlístkem" : "Round soaps with four-leaf clover",
      description: language === 'cs' ? "Sada zelených, růžových a bílých mýdel se symbolem štěstí" : "Set of green, pink and white soaps with lucky clover"
    },
    {
      src: "/lovable-uploads/aba33224-4ce2-4776-b8e1-6665cee2c613.png",
      alt: language === 'cs' ? "Růžové mýdlo s krystalickým povrchem" : "Pink soap with crystalline top",
      description: language === 'cs' ? "Jemný třpytivý efekt na horní vrstvě" : "Subtle sparkling texture on the top layer"
    },
    {
      src: "/lovable-uploads/168539e3-0182-418b-b4dc-1496bcec65fc.png",
      alt: language === 'cs' ? "Růžové květinové mýdlo" : "Pink flower soap",
      description: language === 'cs' ? "Detailně zpracovaný květ v jemných růžových odstínech" : "Detailed blossom in soft pink shades"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            {translations.gallery.title}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {translations.gallery.description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer aspect-square overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-gentle"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-gentle">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium leading-tight">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
