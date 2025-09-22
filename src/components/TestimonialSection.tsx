import { useLanguage } from "@/contexts/LanguageContext";

export const TestimonialSection = () => {
  const { language } = useLanguage();

  const testimonial = language === 'cs' 
    ? {
        text: "Mýdla od Merak jsou hebká jako samet. Vůně růžové vody mi připomíná dětství u babičky. A co je nejlepší – žádná chemie!",
        author: "Jana K., Praha"
      }
    : {
        text: "Merak soaps are soft as velvet. The rose water scent reminds me of childhood at grandma's. And best of all – no chemicals!",
        author: "Jana K., Prague"
      };

  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote marks */}
            <div className="absolute -top-8 -left-4 text-6xl text-accent/30 font-heading">"</div>
            <div className="absolute -bottom-8 -right-4 text-6xl text-accent/30 font-heading">"</div>
            
            {/* Testimonial */}
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground/90 leading-relaxed italic mb-8 relative z-10">
              {testimonial.text}
            </blockquote>
            
            <cite className="text-lg text-primary font-semibold not-italic">
              – {testimonial.author}
            </cite>
          </div>
          
          {/* Stars */}
          <div className="flex justify-center space-x-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-yellow-400">★</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};