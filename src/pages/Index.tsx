import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductSection } from "@/components/ProductSection";
import { GiftSection } from "@/components/GiftSection";
import { GallerySection } from "@/components/GallerySection";
import { VideoSection } from "@/components/VideoSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { OrderSection } from "@/components/OrderSection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { QRCodesSection } from "@/components/QRCodesSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <LanguageToggle />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ProductSection />
          <GiftSection />
          <GallerySection />
          <VideoSection />
          <ReviewsSection />
          <OrderSection />
          <FAQSection />
          <TestimonialSection />
          <QRCodesSection />
        </main>
        
        {/* Footer */}
        <footer className="py-12 gradient-accent text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-primary-foreground/90 mb-2">
              Mýdla MERAK
            </p>
            <p className="text-sm text-primary-foreground/80 mb-1">
              Adresa: Argentinská 194/12 Praha 7, 17000
            </p>
            <p className="text-sm text-primary-foreground/80">
              IČO: 17645018
            </p>
          </div>
        </footer>
        
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
