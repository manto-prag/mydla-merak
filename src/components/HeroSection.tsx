import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, Truck, Star, Leaf, Hand } from "lucide-react";
import heroImage from "@/assets/hero-soap-new.jpg";

export const HeroSection = () => {
  const { translations, language } = useLanguage();

  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Photo on top */}
      <div className="relative w-full h-[45vh] min-h-[260px] md:h-[60vh] overflow-hidden">
        <img
          src={heroImage}
          alt={language === "cs" ? "Ručně vyráběné voňavé výrobky MERAK" : "Handmade fragrance creations MERAK"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      </div>

      {/* Content below photo */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 md:px-6 -mt-10 md:-mt-16 pb-16 animate-fade-in">
        <div className="gradient-card backdrop-blur-xl rounded-[2rem] p-6 md:p-14 shadow-premium border border-accent/20">
          {/* Trust Badge */}

          <div className="inline-flex items-center gap-2 bg-accent/15 text-primary font-medium px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-8 border border-accent/30">
            <Sparkles className="w-3.5 h-3.5" />
            {translations.hero.trustBadge}
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-7xl font-bold text-primary mb-6 tracking-tight leading-[1.1] break-words">
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

    </section>
  );
};
