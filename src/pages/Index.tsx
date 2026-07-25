import { lazy, Suspense } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Reveal } from "@/components/Reveal";

// Lazy load heavy image sections to prevent memory crashes
const SpringSection = lazy(() => import("@/components/SpringSection").then(m => ({ default: m.SpringSection })));
const GallerySection = lazy(() => import("@/components/GallerySection").then(m => ({ default: m.GallerySection })));
const GiftSection = lazy(() => import("@/components/GiftSection").then(m => ({ default: m.GiftSection })));

const ReviewsSection = lazy(() => import("@/components/ReviewsSection").then(m => ({ default: m.ReviewsSection })));
const OrderSection = lazy(() => import("@/components/OrderSection").then(m => ({ default: m.OrderSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const TestimonialSection = lazy(() => import("@/components/TestimonialSection").then(m => ({ default: m.TestimonialSection })));
const QRCodesSection = lazy(() => import("@/components/QRCodesSection").then(m => ({ default: m.QRCodesSection })));

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
