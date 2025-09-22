import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-soap.jpg";

export const HeroSection = () => {
  const { translations, language } = useLanguage();

  const handleOrderClick = () => {
    window.location.href = "mailto:mydla.merak@email.cz?subject=Objednávka mýdel Merak&body=Dobrý den,%0D%0A%0D%0ARád(a) bych si objednal(a) Vaše přírodní mýdla.%0D%0A%0D%0APočet kusů:%0D%0AVýdejní místo (Zásilkovna):%0D%0A%0D%0ADěkuji";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="gradient-card backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-premium border border-accent/20">
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-accent/20 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-6">
            ✨ {translations.hero.trustBadge}
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
            {translations.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary mb-4 font-medium">
            {translations.hero.subtitle}
          </p>
          
          <p className="text-lg text-foreground/80 mb-6 font-medium">
            {translations.hero.description}
          </p>
          
          {/* Prominent Disclaimer - softer styling */}
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-4 mb-8 shadow-soft">
            <p className="text-primary font-medium text-base leading-relaxed">
              {translations.hero.disclaimer}
            </p>
          </div>
          
          {/* USP without price */}
          <div className="gradient-premium rounded-2xl p-6 shadow-elegant mb-8">
            <p className="text-lg font-semibold text-primary mb-2">🚚 {translations.hero.freeDelivery}</p>
            <p className="text-sm text-foreground/70">{language === 'cs' ? 'přes Zásilkovnu' : 'via Zásilkovna'}</p>
          </div>
          
          {/* CTA Button */}
          <Button 
            variant="luxury" 
            size="hero"
            onClick={handleOrderClick}
            className="mb-8"
          >
            {translations.hero.cta} →
          </Button>
          
          {/* Social Proof */}
          <div className="flex justify-center items-center space-x-8 text-sm text-foreground/70">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">★★★★★</span>
              <span>4.9/5 {translations.hero.rating}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600">✓</span>
              <span>100% {translations.hero.natural}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-600">🛡️</span>
              <span>{translations.hero.handmade}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};