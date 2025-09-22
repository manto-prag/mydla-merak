import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const { translations } = useLanguage();

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            {translations.faq.title}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {translations.faq.description}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="gradient-card rounded-3xl p-8 shadow-elegant">
            <Accordion type="single" collapsible className="space-y-4">
              {translations.faq.questions.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-2xl px-6 shadow-soft hover:shadow-elegant transition-gentle"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary-glow py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Additional CTA */}
          <div className="text-center mt-12">
            <div className="gradient-premium rounded-2xl p-6 shadow-elegant inline-block">
              <p className="text-lg font-semibold text-primary mb-2">
                {translations.faq.ctaTitle}
              </p>
              <a 
                href="mailto:mydla.merak@email.cz"
                className="text-accent hover:text-accent/80 font-medium underline"
              >
                {translations.faq.ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};