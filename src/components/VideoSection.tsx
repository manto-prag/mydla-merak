import { useLanguage } from "@/contexts/LanguageContext";

export const VideoSection = () => {
  const { translations } = useLanguage();

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            {translations.video.title}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {translations.video.description}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="gradient-card rounded-3xl p-8 shadow-elegant">
            {/* Video placeholder with attractive design */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center shadow-soft relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/30"></div>
              
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <div className="w-0 h-0 border-l-[20px] border-l-primary border-y-[12px] border-y-transparent ml-2"></div>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    Video přípravy mýdel
                  </h3>
                  <p className="text-foreground/70 text-lg">
                    Brzy zde uvidíte proces výroby našich přírodních mýdel
                  </p>
                </div>
                
                {/* Coming soon badge */}
                <div className="inline-flex items-center bg-accent/20 text-primary font-semibold px-6 py-3 rounded-full text-sm shadow-soft">
                  🎬 Připravujeme video pro vás
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-accent/30 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-6 w-4 h-4 bg-secondary/40 rounded-full animate-pulse delay-500"></div>
            </div>
            
            {/* Call to action */}
            <div className="text-center mt-8">
              <p className="text-foreground/80 mb-4">
                Mezitím se můžete podívat na naše fotografie v galerii nebo nás kontaktovat pro více informací o výrobě.
              </p>
              <a 
                href="mailto:mydla.merak@email.cz?subject=Dotaz na výrobu mýdel"
                className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-6 py-3 font-semibold shadow-elegant hover:shadow-glow transition-bounce hover:scale-105"
              >
                Napište nám
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};