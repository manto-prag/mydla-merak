import { useLanguage } from "@/contexts/LanguageContext";
import soapDetailImage from "@/assets/soap-hands-making.jpg";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  const { translations, language } = useLanguage();

  const benefits = [
    { icon: "🌿", title: translations.about.naturalBenefit, desc: translations.about.naturalDesc },
    { icon: "✋", title: translations.about.handmadeBenefit, desc: translations.about.handmadeDesc },
    { icon: "🎨", title: translations.about.uniqueBenefit, desc: translations.about.uniqueDesc },
    { icon: "🎁", title: translations.about.giftBenefit, desc: translations.about.giftDesc }
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src={soapDetailImage} 
                alt={language === 'cs' ? "Ručně vyráběná přírodní mýdla z olivového oleje" : "Handmade natural soaps from olive oil"}
                className="rounded-3xl shadow-premium w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="mb-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                {translations.about.brandStoryTitle}
              </h2>
              <h3 className="text-xl text-accent font-semibold mb-6">
                {translations.about.brandStorySubtitle}
              </h3>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {translations.about.brandStory}
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="gradient-card rounded-2xl p-4 shadow-soft hover:shadow-elegant transition-gentle">
                  <div className="text-2xl mb-2">{benefit.icon}</div>
                  <h3 className="font-semibold text-primary mb-1">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70">{benefit.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Ingredients */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="bg-accent/20 px-4 py-2 rounded-full border border-accent/30">
                <span className="text-accent-foreground font-medium">🐐 {language === 'cs' ? 'Kozí mléko' : 'Goat milk'}</span>
              </div>
              <div className="bg-accent/30 px-4 py-2 rounded-full border border-accent/40">
                <span className="text-accent-foreground font-medium">🍯 {language === 'cs' ? 'Med' : 'Honey'}</span>
              </div>
              <div className="bg-secondary/30 px-4 py-2 rounded-full border border-secondary/40">
                <span className="text-secondary-foreground font-medium">🌹 {language === 'cs' ? 'Růžová voda' : 'Rose water'}</span>
              </div>
            </div>

            <Button 
              variant="premium" 
              size="premium"
              onClick={() => window.location.href = "mailto:mydla.merak@email.cz"}
            >
              {translations.about.learnMore}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};