import { Suspense } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { lazyRetry } from "@/lib/lazyRetry";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Reveal } from "@/components/Reveal";

// Lazy load heavy image sections to prevent memory crashes
const SpringSection = lazyRetry(() => import("@/components/SpringSection").then(m => ({ default: m.SpringSection })));
const GallerySection = lazyRetry(() => import("@/components/GallerySection").then(m => ({ default: m.GallerySection })));
const GiftSection = lazyRetry(() => import("@/components/GiftSection").then(m => ({ default: m.GiftSection })));

const ReviewsSection = lazyRetry(() => import("@/components/ReviewsSection").then(m => ({ default: m.ReviewsSection })));
const OrderSection = lazyRetry(() => import("@/components/OrderSection").then(m => ({ default: m.OrderSection })));
const FAQSection = lazyRetry(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const TestimonialSection = lazyRetry(() => import("@/components/TestimonialSection").then(m => ({ default: m.TestimonialSection })));
const QRCodesSection = lazyRetry(() => import("@/components/QRCodesSection").then(m => ({ default: m.QRCodesSection })));

const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        
        <main>
          <HeroSection />
          <Reveal as="section" id="about"><AboutSection /></Reveal>
          <Reveal as="section" id="collection">
            <Suspense fallback={<SectionFallback />}>
              <SpringSection />
            </Suspense>
          </Reveal>
          <Reveal as="section" id="gallery">
            <Suspense fallback={<SectionFallback />}>
              <GallerySection />
            </Suspense>
          </Reveal>
          <Reveal as="section" id="gifts">
            <Suspense fallback={<SectionFallback />}>
              <GiftSection />
            </Suspense>
          </Reveal>
          <Reveal as="section" id="reviews">
            <Suspense fallback={<SectionFallback />}>
              <ReviewsSection />
            </Suspense>
          </Reveal>
          <Reveal as="section" id="order">
            <Suspense fallback={<SectionFallback />}>
              <OrderSection />
            </Suspense>
          </Reveal>
          <Reveal>
            <Suspense fallback={<SectionFallback />}>
              <FAQSection />
            </Suspense>
          </Reveal>
          <Reveal>
            <Suspense fallback={<SectionFallback />}>
              <TestimonialSection />
            </Suspense>
          </Reveal>
          <Reveal>
            <Suspense fallback={<SectionFallback />}>
              <QRCodesSection />
            </Suspense>
          </Reveal>
        </main>

        
        {/* Footer */}
        <footer className="py-12 gradient-accent text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-primary-foreground/90 mb-2">
              MERAK
            </p>
            <p className="text-sm text-primary-foreground/80 mb-1">
              Adresa: Argentinská 194/12 Praha 7, 17000
            </p>
            <p className="text-sm text-primary-foreground/80 mb-4">
              IČO: 17645018
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a href="/obchodni-podminky" className="text-primary-foreground/80 hover:text-primary-foreground underline">
                Obchodní podmínky
              </a>
              <a href="/ochrana-osobnich-udaju" className="text-primary-foreground/80 hover:text-primary-foreground underline">
                Ochrana osobních údajů
              </a>
            </div>
          </div>
        </footer>
        
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
