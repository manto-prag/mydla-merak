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
      title: "MÝDLA MERAK",
      subtitle: "Přírodní dekorativní mýdla z olivového oleje, kozího mléka a medu",
      description: "Ručně vyráběná s láskou v Praze • Co kus to originál",
      cta: "Objednat",
      disclaimer: "Podle legislativy označena jako dekorativní mýdla",
      trustBadge: "Vyrobeno s láskou v Praze od roku 2020",
      freeDelivery: "Doručení zdarma nad 30Ks",
      rating: "hodnocení",
      natural: "přírodní",
      handmade: "Ručně vyráběno"
    },
    about: {
      title: "Příběh značky MERAK",
      description: "Každé mýdlo Merak vzniká ručně v Praze z těch nejčistších surovin: olivový olej, kozí mléko, med a růžová voda. Bez chemie, bez kompromisů – jen příroda, která pečuje.",
      brandStoryTitle: "Příběh značky MERAK",
      brandStorySubtitle: "Od vášně k řemeslu",
      brandStory: "Značka MERAK vznikla z lásky k přírodní kosmetice a touhy vytvářet něco jedinečného. Každé mýdlo je ručně vyráběno s pečlivostí a pozorností k detailům. Používáme pouze ty nejkvalitnější přírodní ingredience - olivový olej, kozí mléko, med a růžovou vodu.",
      brandNote: "Naša mýdla jsou nejen krásná na pohled, ale také voní a vytváří atmosféru v interiéru.",
      naturalBenefit: "100% přírodní",
      naturalDesc: "Pouze nejčistší ingredience",
      handmadeBenefit: "Ručně vyráběno",
      handmadeDesc: "S láskou a péčí v Praze",
      uniqueBenefit: "Unikátní design",
      uniqueDesc: "Každé mýdlo je originál",
      giftBenefit: "Ideální dárek",
      giftDesc: "Pro každou příležitost",
      learnMore: "Zjistit více o našich mýdlech"
    },
    gift: {
      title: "Mýdla pro různé příležitosti",
      description: "Hledáte originální dárek? Připravím vám mýdla na míru pro:",
      weddings: "Svatební hosty a oslavy",
      hotels: "Hotelové pokoje a penziony", 
      birthdays: "Narozeninové a výroční oslavy",
      corporate: "Firemní dárky a události",
      ctaTitle: "Připravíme vám mýdla na míru",
      ctaDescription: "Každá příležitost si zaslouží originální dárek. Kontaktujte nás pro individuální nabídku.",
      ctaButton: "Objednat dárková mýdla"
    },
    order: {
      title: "Jak objednat",
      step1: "Napište mi e-mail na mydla.merak@email.cz",
      step2: "Uveďte počet kusů a výdejní místo Zásilkovny",
      step3: "Platba na účet 4359439093 / 0800",
      step4: "Vaše mýdlo přijde v recyklované krabičce",
      samples: "Nejste si jistí, které mýdlo je to pravé? Vyzkoušejte vzorky za 30 Kč"
    },
    contact: {
      title: "Spojte se se mnou",
      email: "E-mail: mydla.merak@email.cz",
      account: "Účet pro platbu: 4359439093 / 0800",
      delivery: "Doručování přes Zásilkovnu",
      location: "Praha, Česká republika"
    },
    products: {
      title: "Naše kolekce",
      description: "Objevte jedinečné ručně vyráběná mýdla s láskou",
      orderNow: "Objednat",
      newsletterTitle: "Získejte 10% slevu na první objednávku!",
      newsletterDesc: "Přihlaste se k odběru novinek a buďte první, kdo se dozví o nových kolekcích",
      emailPlaceholder: "Váš e-mail",
      subscribe: "Přihlásit se"
    },
    faq: {
      title: "Často kladené otázky",
      description: "Vše, co potřebujete vědět o našich přírodních mýdlech",
      questions: [
        {
          question: "Jsou mýdla skutečně přírodní?",
          answer: "Ano, všechna naša mýdla obsahují pouze přírodní ingredience: olivový olej, kozí mléko, med, růžovou vodu a přírodní barviva. Nepoužíváme žádné chemické přísady nebo konzervants."
        },
        {
          question: "Jak dlouho mýdla vydrží?",
          answer: "Při správném skladování v suché místnosti vydrží naše mýdla až 2 roky. Doporučujeme je uchovávat na suchém místě mimo dosah přímého slunečního světla."
        },
        {
          question: "Můžu si objednat mýdla s vlastním designem?",
          answer: "Samozřejmě! Nabízíme možnost vyrobit mýdla na míru pro svatby, firemní akce, hotely nebo jiné speciální příležitosti. Kontaktujte nás pro individuální nabídku."
        },
        {
          question: "Jak rychle mi mýdla doručíte?",
          answer: "Standardní doba výroby je 3-5 pracovních dnů. Poté odesíláme přes Zásilkovnu, doručení trvá obvykle 1-2 pracovní dny. Celková doba je tedy 4-7 pracovních dnů."
        },
        {
          question: "Kolik stojí doručení?",
          answer: "Doručení přes Zásilkovnu je zdarma při objednávce od 3 ks mýdel. Pro menší objednávky je poplatek 79 Kč."
        }
      ],
      ctaTitle: "Máte další otázky?",
      ctaText: "Napište nám na mydla.merak@email.cz"
    },
    gallery: {
      title: "Galerie našich mýdel",
      description: "Prohlédněte si naši kolekci jedinečných dekorativních mýdel"
    },
    video: {
      title: "Jak vznikají naše mýdla",
      description: "Podívejte se na proces ručního výroby našich přírodních mýdel"
    },
    common: {
      toggleLanguage: "EN"
    }
  },
  en: {
    hero: {
      title: "MERAK SOAPS",
      subtitle: "Natural decorative soaps from olive oil, goat milk and honey",
      description: "Handcrafted with love in Prague • Each one unique",
      cta: "Order",
      disclaimer: "Classified as decorative soaps according to legislation",
      trustBadge: "Made with love in Prague since 2020",
      freeDelivery: "Free delivery over 30 pcs",
      rating: "rating",
      natural: "natural",
      handmade: "Handcrafted"
    },
    about: {
      title: "The MERAK Brand Story",
      description: "Each Merak soap is handcrafted in Prague using only the purest ingredients: olive oil, goat milk, honey, and rose water. No chemicals, no compromises – just nature taking care.",
      brandStoryTitle: "The MERAK Brand Story",
      brandStorySubtitle: "From passion to craft",
      brandStory: "The MERAK brand was born from a love of natural cosmetics and the desire to create something unique. Each soap is handmade with care and attention to detail. We use only the finest natural ingredients - olive oil, goat milk, honey and rose water.",
      brandNote: "Our soaps are not only beautiful to look at, but also fragrant and create atmosphere in your interior.",
      naturalBenefit: "100% natural",
      naturalDesc: "Only the purest ingredients",
      handmadeBenefit: "Handcrafted",
      handmadeDesc: "With love and care in Prague",
      uniqueBenefit: "Unique design",
      uniqueDesc: "Each soap is original",
      giftBenefit: "Perfect gift",
      giftDesc: "For any occasion",
      learnMore: "Learn more about our soaps"
    },
    gift: {
      title: "Soaps for various occasions",
      description: "Looking for an original gift? I'll prepare custom soaps for:",
      weddings: "Wedding guests and celebrations",
      hotels: "Hotel rooms and guesthouses",
      birthdays: "Birthday and anniversary celebrations", 
      corporate: "Corporate gifts and events",
      ctaTitle: "We'll prepare custom soaps for you",
      ctaDescription: "Every occasion deserves an original gift. Contact us for an individual quote.",
      ctaButton: "Order gift soaps"
    },
    order: {
      title: "How to order",
      step1: "Send me an email at mydla.merak@email.cz",
      step2: "Specify quantity and pickup location at Zásilkovna",
      step3: "Payment to bank account 4359439093 / 0800",
      step4: "Your soap arrives in recycled packaging",
      samples: "Not sure which soap is right for you? Try samples for 30 CZK"
    },
    contact: {
      title: "Get in touch",
      email: "Email: mydla.merak@email.cz",
      account: "Payment account: 4359439093 / 0800",
      delivery: "Delivery via Zásilkovna",
      location: "Prague, Czech Republic"
    },
    products: {
      title: "Our Collection",
      description: "Discover unique handcrafted soaps made with love",
      orderNow: "Order",
      newsletterTitle: "Get 10% off your first order!",
      newsletterDesc: "Subscribe to our newsletter and be the first to know about new collections",
      emailPlaceholder: "Your email",
      subscribe: "Subscribe"
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Everything you need to know about our natural soaps",
      questions: [
        {
          question: "Are the soaps truly natural?",
          answer: "Yes, all our soaps contain only natural ingredients: olive oil, goat milk, honey, rose water, and natural colorants. We don't use any chemical additives or preservatives."
        },
        {
          question: "How long do the soaps last?",
          answer: "When stored properly in a dry place, our soaps last up to 2 years. We recommend keeping them in a dry place away from direct sunlight."
        },
        {
          question: "Can I order soaps with custom design?",
          answer: "Absolutely! We offer custom soap making for weddings, corporate events, hotels, or other special occasions. Contact us for an individual quote."
        },
        {
          question: "How quickly will you deliver the soaps?",
          answer: "Standard production time is 3-5 working days. Then we ship via Zásilkovna, delivery usually takes 1-2 working days. Total time is 4-7 working days."
        },
        {
          question: "How much does delivery cost?",
          answer: "Delivery via Zásilkovna is free for orders of 3+ soaps. For smaller orders, there's a 79 CZK fee."
        }
      ],
      ctaTitle: "Have more questions?",
      ctaText: "Write to us at mydla.merak@email.cz"
    },
    gallery: {
      title: "Gallery of Our Soaps",
      description: "Explore our collection of unique decorative soaps"
    },
    video: {
      title: "How Our Soaps Are Made",
      description: "Watch the process of handcrafting our natural soaps"
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