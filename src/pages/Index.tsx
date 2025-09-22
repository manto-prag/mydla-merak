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
import { ContactSection } from "@/components/ContactSection";
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
          <ContactSection />
        </main>
        
        {/* Enhanced Footer */}
        <footer className="py-12 gradient-accent text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-4">
              <h3 className="font-heading text-2xl font-bold mb-2">Mýdla Merak</h3>
              <p className="text-primary-foreground/80">Přírodní mýdla vyráběná s láskou v Praze</p>
            </div>
            <div className="flex justify-center space-x-8 text-sm mb-6">
              <span>📧 mydla.merak@email.cz</span>
              <span>🏦 4359439093 / 0800</span>
              <span>📦 Doručení přes Zásilkovnu</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              © 2024 Mýdla Merak • Vyrobeno s láskou v Praze
            </p>
          </div>
        </footer>
        
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
