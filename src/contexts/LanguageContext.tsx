import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'cs' | 'en';

interface Translation {
  // Hero section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    disclaimer: string;
    trustBadge: string;
    freeDelivery: string;
    rating: string;
    natural: string;
    handmade: string;
  };
  // About section
  about: {
    title: string;
    description: string;
    brandStoryTitle: string;
    brandStorySubtitle: string;
    brandStory: string;
    brandNote: string;
    naturalBenefit: string;
    naturalDesc: string;
    handmadeBenefit: string;
    handmadeDesc: string;
    uniqueBenefit: string;
    uniqueDesc: string;
    giftBenefit: string;
    giftDesc: string;
    learnMore: string;
  };
  // Gift section
  gift: {
    title: string;
    description: string;
    weddings: string;
    hotels: string;
    birthdays: string;
    corporate: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  // FAQ section
  faq: {
    title: string;
    description: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
    ctaTitle: string;
    ctaText: string;
  };
  // Gallery section  
  gallery: {
    title: string;
    description: string;
  };
  // Video section
  video: {
    title: string;
    description: string;
  };
  // Order section
  order: {
    title: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    samples: string;
  };
  // Contact section
  contact: {
    title: string;
    email: string;
    account: string;
    delivery: string;
    location: string;
  };
  // Products section
  products: {
    title: string;
    description: string;
    orderNow: string;
    newsletterTitle: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    subscribe: string;
  };
  // Common
  common: {
    toggleLanguage: string;
  };
}

const translations: Record<Language, Translation> = {
  cs: {
    hero: {
      title: "MERAK – Voňavá řemeslná tvorba",
      subtitle: "Originální ručně vyráběné produkty vytvářené s důrazem na detail, estetiku a jedinečnost.",
      description: "Ručně vyráběno s láskou v Praze\nCo kus to originál",
      cta: "Prohlédnout kolekci",
      disclaimer: "Voňavá dekorace interiéru – voňavka koupelen a obytných prostor. Slouží výhradně jako vonná dekorace.",
      trustBadge: "Vyrobeno s láskou v Praze od roku 2020",
      freeDelivery: "Doručení zdarma nad 30 Ks",
      rating: "hodnocení",
      natural: "přírodní materiály",
      handmade: "Ručně vyráběno"
    },

    about: {
      title: "Příběh značky MERAK",
      description: "Každý dekorativní voňavý výrobek Merak vzniká ručně v Praze. Slouží jako voňavá dekorace prostoru a koupelen – provoní váš interiér a vytvoří příjemnou atmosféru.",
      brandStoryTitle: "Příběh značky MERAK",
      brandStorySubtitle: "Od vášně k řemeslu",
      brandStory: "Značka MERAK vznikla z lásky k ručnímu řemeslu a touhy vytvářet něco jedinečného. Každý dekorativní voňavý výrobek je vyráběn s pečlivostí a pozorností k detailům a slouží jako voňavá dekorace pro váš domov, koupelnu či pracovnu.",
      brandNote: "Naše voňavé výrobky jsou nejen krásná na pohled, ale především krásně voní a vytváří atmosféru v interiéru.",
      naturalBenefit: "100% přírodní",
      naturalDesc: "Pouze nejčistší ingredience",
      handmadeBenefit: "Ručně vyráběno",
      handmadeDesc: "S láskou a péčí v Praze",
      uniqueBenefit: "Unikátní design",
      uniqueDesc: "Každý voňavý výrobek je originál",
      giftBenefit: "Ideální dárek",
      giftDesc: "Pro každou příležitost",
      learnMore: "Zjistit více o našich voňavých výrobcích"
    },
    gift: {
      title: "Voňavé výrobky pro různé příležitosti",
      description: "Hledáte originální dárek? Připravím vám voňavé výrobky na míru pro:",
      weddings: "Svatební hosty a oslavy",
      hotels: "Hotelové pokoje a penziony", 
      birthdays: "Narozeninové a výroční oslavy",
      corporate: "Firemní dárky a události",
      ctaTitle: "Připravíme vám voňavé výrobky na míru",
      ctaDescription: "Každá příležitost si zaslouží originální dárek. Kontaktujte nás pro individuální nabídku.",
      ctaButton: "Objednat dárkové voňavé výrobky"
    },
    order: {
      title: "Jak objednat",
      step1: "Napište mi e-mail na mydla.merak@email.cz",
      step2: "Uveďte počet kusů a výdejní místo Zásilkovny",
      step3: "Platba na účet 6007850013 / 0800",
      step4: "Vaše voňavý výrobek přijde v recyklované krabičce",
      samples: "Nejste si jistí, který voňavý výrobek je to pravé? Vyzkoušejte vzorky za 30 Kč"
    },
    contact: {
      title: "Spojte se se mnou",
      email: "E-mail: mydla.merak@email.cz",
      account: "Účet pro platbu: 6007850013 / 0800",
      delivery: "Doručování přes Zásilkovnu",
      location: "Praha, Česká republika"
    },
    products: {
      title: "Naše kolekce",
      description: "Objevte jedinečné ručně vyráběná voňavé výrobky s láskou",
      orderNow: "Objednat",
      newsletterTitle: "Získejte 10% slevu na první objednávku!",
      newsletterDesc: "Přihlaste se k odběru novinek a buďte první, kdo se dozví o nových kolekcích",
      emailPlaceholder: "Váš e-mail",
      subscribe: "Přihlásit se"
    },
    faq: {
      title: "Často kladené otázky",
      description: "Vše, co potřebujete vědět o našich přírodních voňavých výrobcích",
      questions: [
        {
          question: "Jsou voňavé výrobky skutečně přírodní?",
          answer: "Ano, všechna naše voňavé výrobky obsahují pouze přírodní ingredience: olivový olej, kozí mléko, med, růžovou vodu a přírodní barviva. Nepoužíváme žádné chemické přísady nebo konzervants."
        },
        {
          question: "Jak dlouho voňavé výrobky vydrží?",
          answer: "Při správném skladování v suché místnosti vydrží naše voňavé výrobky až 2 roky. Doporučujeme je uchovávat na suchém místě mimo dosah přímého slunečního světla."
        },
        {
          question: "Můžu si objednat voňavé výrobky s vlastním designem?",
          answer: "Samozřejmě! Nabízíme možnost vyrobit voňavé výrobky na míru pro svatby, firemní akce, hotely nebo jiné speciální příležitosti. Kontaktujte nás pro individuální nabídku."
        },
        {
          question: "Jak rychle mi voňavé výrobky doručíte?",
          answer: "Standardní doba výroby je 3-5 pracovních dnů. Poté odesíláme přes Zásilkovnu, doručení trvá obvykle 1-2 pracovní dny. Celková doba je tedy 4-7 pracovních dnů."
        },
        {
          question: "Kolik stojí doručení?",
          answer: "Doručení přes Zásilkovnu je zdarma při objednávce od 3 ks voňavých výrobků. Pro menší objednávky je poplatek 79 Kč."
        }
      ],
      ctaTitle: "Máte další otázky?",
      ctaText: "Napište nám na mydla.merak@email.cz"
    },
    gallery: {
      title: "Galerie našich voňavých výrobků",
      description: "Prohlédněte si naši kolekci jedinečných dekorativních voňavých výrobků"
    },
    video: {
      title: "Jak vznikají naše voňavé výrobky",
      description: "Podívejte se na proces ručního výroby našich přírodních voňavých výrobků"
    },
    common: {
      toggleLanguage: "EN"
    }
  },
  en: {
    hero: {
      title: "MERAK – Fragrant Handcraft",
      subtitle: "Original handcrafted creations made with attention to detail, aesthetics and uniqueness.",
      description: "Handcrafted with love in Prague\nEach one unique",
      cta: "Browse the collection",
      disclaimer: "Fragrant interior decoration – a scent for bathrooms and living spaces. Intended solely as a fragrant decoration.",
      trustBadge: "Made with love in Prague since 2020",
      freeDelivery: "Free delivery over 30 pcs",
      rating: "rating",
      natural: "natural materials",
      handmade: "Handcrafted"
    },

    about: {
      title: "The MERAK Brand Story",
      description: "Each Merak decorative fragrance product is handcrafted in Prague. It serves as a fragrant decoration for rooms and bathrooms – perfuming your interior and creating a pleasant atmosphere.",
      brandStoryTitle: "The MERAK Brand Story",
      brandStorySubtitle: "From passion to craft",
      brandStory: "The MERAK brand was born from a love of handmade craft and the desire to create something unique. Each decorative fragrance product is made with care and attention to detail and serves as a fragrant decoration for your home, bathroom or office.",
      brandNote: "Our fragrance products are not only beautiful to look at, but above all they smell wonderful and create atmosphere in your interior.",
      naturalBenefit: "100% natural",
      naturalDesc: "Only the purest ingredients",
      handmadeBenefit: "Handcrafted",
      handmadeDesc: "With love and care in Prague",
      uniqueBenefit: "Unique design",
      uniqueDesc: "Each fragrance product is original",
      giftBenefit: "Perfect gift",
      giftDesc: "For any occasion",
      learnMore: "Learn more about our fragrance products"
    },
    gift: {
      title: "Fragrance Products for various occasions",
      description: "Looking for an original gift? I'll prepare custom fragrance products for:",
      weddings: "Wedding guests and celebrations",
      hotels: "Hotel rooms and guesthouses",
      birthdays: "Birthday and anniversary celebrations", 
      corporate: "Corporate gifts and events",
      ctaTitle: "We'll prepare custom fragrance products for you",
      ctaDescription: "Every occasion deserves an original gift. Contact us for an individual quote.",
      ctaButton: "Order gift fragrance products"
    },
    order: {
      title: "How to order",
      step1: "Send me an email at mydla.merak@email.cz",
      step2: "Specify quantity and pickup location at Zásilkovna",
      step3: "Payment to bank account 6007850013 / 0800",
      step4: "Your fragrance product arrives in recycled packaging",
      samples: "Not sure which fragrance product is right for you? Try samples for 30 CZK"
    },
    contact: {
      title: "Get in touch",
      email: "Email: mydla.merak@email.cz",
      account: "Payment account: 6007850013 / 0800",
      delivery: "Delivery via Zásilkovna",
      location: "Prague, Czech Republic"
    },
    products: {
      title: "Our Collection",
      description: "Discover unique handcrafted fragrance products made with love",
      orderNow: "Order",
      newsletterTitle: "Get 10% off your first order!",
      newsletterDesc: "Subscribe to our newsletter and be the first to know about new collections",
      emailPlaceholder: "Your email",
      subscribe: "Subscribe"
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Everything you need to know about our natural fragrance products",
      questions: [
        {
          question: "Are the fragrance products truly natural?",
          answer: "Yes, all our fragrance products contain only natural ingredients: olive oil, goat milk, honey, rose water, and natural colorants. We don't use any chemical additives or preservatives."
        },
        {
          question: "How long do the fragrance products last?",
          answer: "When stored properly in a dry place, our fragrance products last up to 2 years. We recommend keeping them in a dry place away from direct sunlight."
        },
        {
          question: "Can I order fragrance products with custom design?",
          answer: "Absolutely! We offer custom craft for weddings, corporate events, hotels, or other special occasions. Contact us for an individual quote."
        },
        {
          question: "How quickly will you deliver the fragrance products?",
          answer: "Standard production time is 3-5 working days. Then we ship via Zásilkovna, delivery usually takes 1-2 working days. Total time is 4-7 working days."
        },
        {
          question: "How much does delivery cost?",
          answer: "Delivery via Zásilkovna is free for orders of 3+ fragrance products. For smaller orders, there's a 79 CZK fee."
        }
      ],
      ctaTitle: "Have more questions?",
      ctaText: "Write to us at mydla.merak@email.cz"
    },
    gallery: {
      title: "Gallery of Our Fragrance Products",
      description: "Explore our collection of unique decorative fragrance products"
    },
    video: {
      title: "How Our Fragrance Products Are Made",
      description: "Watch the process of handcrafting our natural fragrance products"
    },
    common: {
      toggleLanguage: "CZ"
    }
  }
};

interface LanguageContextType {
  language: Language;
  translations: Translation;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('cs');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'cs' ? 'en' : 'cs');
  };

  const value = {
    language,
    translations: translations[language],
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};