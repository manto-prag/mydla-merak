import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, Truck, Star, Leaf, Hand } from "lucide-react";
import heroImage from "@/assets/hero-soap.jpg";

export const HeroSection = () => {
  const { translations, language } = useLanguage();

  const handleOrderClick = () => {
    window.location.href = "mailto:mydla.merak@email.cz?subject=Objednávka voňavých výrobků Merak&body=Dobrý den,%0D%0A%0D%0ARád(a) bych si objednal(a) Vaše přírodní voňavé výrobky.%0D%0A%0D%0APočet kusů:%0D%0AVýdejní místo (Zásilkovna):%0D%0A%0D%0ADěkuji";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 animate-fade-in">
        <div className="gradient-card backdrop-blur-xl rounded-[2rem] p-8 md:p-14 shadow-premium border border-accent/20">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/15 text-primary font-medium px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-8 border border-accent/30">
            <Sparkles className="w-3.5 h-3.5" />
            {translations.hero.trustBadge}
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight leading-[1.05]">
            {translations.hero.title}
          </h1>

          <div className="divider-elegant mb-6" />

          <p className="text-lg md:text-xl text-secondary mb-4 font-medium tracking-wide">
            {translations.hero.subtitle}
          </p>

          <p className="text-base md:text-lg text-foreground/75 mb-8 font-light leading-relaxed whitespace-pre-line max-w-xl mx-auto">
            {translations.hero.description}
          </p>

          {/* Prominent Disclaimer */}
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-4 mb-8 shadow-soft">
            <p className="text-primary font-medium text-sm md:text-base leading-relaxed">
              {translations.hero.disclaimer}
            </p>
          </div>

          {/* USP */}
          <div className="gradient-premium rounded-2xl p-5 shadow-elegant mb-8 flex items-center justify-center gap-3">
            <Truck className="w-5 h-5 text-primary shrink-0" />
            <div className="text-left">
              <p className="text-base font-semibold text-primary leading-tight">
                {translations.hero.freeDelivery}
              </p>
              <p className="text-xs text-foreground/70 mt-0.5">
                {language === "cs" ? "přes Zásilkovnu" : "via Zásilkovna"}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="luxury" size="hero" onClick={handleOrderClick} className="mb-10">
            {translations.hero.cta} →
          </Button>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs md:text-sm text-foreground/70">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span>4.9/5 {translations.hero.rating}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-primary" />
              <span>100% {translations.hero.natural}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Hand className="w-4 h-4 text-secondary" />
              <span>{translations.hero.handmade}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white/60 rounded-full backdrop-blur-sm">
          <div className="w-1 h-2.5 bg-white/80 rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
