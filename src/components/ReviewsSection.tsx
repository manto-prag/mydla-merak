import { useLanguage } from "@/contexts/LanguageContext";

export const ReviewsSection = () => {
  const { language } = useLanguage();

  const reviews = language === 'cs' ? [
    {
      name: "Anna K.",
      rating: 5,
      text: "Absolutně úžasná mýdla! Vůně růžové vody je nádherná a pokožka je po použití hedvábně měkká.",
      product: "Růžové mýdlo s medem"
    },
    {
      name: "Tomáš H.",
      rating: 5,
      text: "Koupil jsem dárkový set pro manželku a byl jsem nadšený z krásného balení. Kvalita je na vysoké úrovni.",
      product: "Levandulový set"
    },
    {
      name: "Marie S.",
      rating: 5,
      text: "Pro náš hotel jsme objednali kolekci mýdel a hosté si je velmi chválí. Budeme určitě objednávat znovu.",
      product: "Hotelová kolekce"
    },
    {
      name: "Pavel D.",
      rating: 5,
      text: "Na svatbu jsme chtěli něco originálního pro hosty. Mýdla od MERAK byly perfektní volbou!",
      product: "Svatební dárečky"
    }
  ] : [
    {
      name: "Anna K.",
      rating: 5,
      text: "Absolutely amazing soaps! The rose water scent is beautiful and skin feels silky smooth after use.",
      product: "Rose Honey Soap"
    },
    {
      name: "Tomáš H.",
      rating: 5,
      text: "I bought a gift set for my wife and was impressed with the beautiful packaging. Quality is top-notch.",
      product: "Lavender Set"
    },
    {
      name: "Marie S.",
      rating: 5,
      text: "We ordered a soap collection for our hotel and guests praise them highly. We will definitely order again.",
      product: "Hotel Collection"
    },
    {
      name: "Pavel D.",
      rating: 5,
      text: "For our wedding we wanted something original for guests. MERAK soaps were the perfect choice!",
      product: "Wedding Favors"
    }
  ];

  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            {language === 'cs' ? 'Co říkají naši zákazníci' : 'What Our Customers Say'}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {language === 'cs' 
              ? 'Přečtěte si recenze spokojených zákazníků' 
              : 'Read reviews from satisfied customers'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="gradient-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-smooth">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              {/* Review Text */}
              <blockquote className="text-foreground/80 text-center mb-4 italic">
                "{review.text}"
              </blockquote>
              
              {/* Customer Info */}
              <div className="text-center">
                <div className="font-semibold text-primary mb-1">
                  {review.name}
                </div>
                <div className="text-sm text-accent font-medium">
                  {review.product}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-8 py-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <div className="text-lg font-semibold text-primary">
              5.0 / 5.0
            </div>
            <div className="text-foreground/70">
              ({language === 'cs' ? 'na základě 120+ recenzí' : 'based on 120+ reviews'})
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};