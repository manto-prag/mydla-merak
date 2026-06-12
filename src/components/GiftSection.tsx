import { lazy, Suspense } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import weddingGiftImage from "@/assets/wedding-gift-soaps.jpg";
import hotelAmenityImage from "@/assets/hotel-amenity-soaps.jpg";
import birthdayGiftImage from "@/assets/birthday-gift-soaps.jpg";
const corporateGiftImage = "/lovable-uploads/adc6072c-e734-47d0-b8a9-38c60933b12d.png";

// Lazy load seasonal collapsible sections
const EasterCollapsible = lazy(() => import("@/components/EasterCollapsible").then(m => ({ default: m.EasterCollapsible })));

export const GiftSection = () => {
  const { translations, language } = useLanguage();

  const giftTypes = [
    { icon: "💒", text: translations.gift.weddings, image: weddingGiftImage, alt: "Svatební dárkové voňavé výrobky" },
    { icon: "🏨", text: translations.gift.hotels, image: hotelAmenityImage, alt: "Hotelové voňavé výrobky" },
    { icon: "🎂", text: translations.gift.birthdays, image: birthdayGiftImage, alt: "Narozeninové voňavé výrobky" },
    { icon: "🎁", text: translations.gift.corporate, image: corporateGiftImage, alt: "Firemní dárkové voňavé výrobky" },
  ];

  return (
    <section className="py-20 gradient-premium">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            {translations.gift.title}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {translations.gift.description}
          </p>
        </div>
        
        {/* Gift showcase grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {giftTypes.map((gift, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-premium hover:shadow-glow transition-bounce">
              <div className="aspect-video relative">
                <img src={gift.image} alt={gift.alt} className="w-full h-full object-cover transition-smooth group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl bg-background/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-soft">{gift.icon}</div>
                    <div className="bg-background/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-soft">
                      <p className="text-lg font-semibold text-foreground">{gift.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Easter Collection - Lazy loaded */}
        <Suspense fallback={<div className="py-8 flex justify-center"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
          <EasterCollapsible />
        </Suspense>

        {/* Call to action */}
        <div className="text-center">
          <div className="gradient-card rounded-3xl p-8 max-w-3xl mx-auto shadow-elegant">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
              {translations.gift.ctaTitle}
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              {translations.gift.ctaDescription}
            </p>
            <a href="mailto:mydla.merak@email.cz?subject=Objednávka dárkových voňavých výrobků"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold shadow-elegant hover:shadow-glow transition-bounce hover:scale-105">
              {translations.gift.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
