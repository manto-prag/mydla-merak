import { useLanguage } from "@/contexts/LanguageContext";
import ecoPackagingImage from "@/assets/eco-packaging-new.jpg";

export const OrderSection = () => {
  const { translations } = useLanguage();

  const orderSteps = [
    { number: "1", text: translations.order.step1 },
    { number: "2", text: translations.order.step2 },
    { number: "3", text: translations.order.step3 },
    { number: "4", text: translations.order.step4 },
  ];

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            {translations.order.title}
          </h2>
          <div className="bg-accent/10 border border-accent rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-foreground font-medium">
              {translations.order.samples}
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {orderSteps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 p-6 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-smooth"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <p className="text-lg text-foreground leading-relaxed pt-2">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src={ecoPackagingImage} 
              alt="Ekologické balení"
              className="rounded-3xl shadow-elegant w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/10 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};