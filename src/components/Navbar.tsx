import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";

const sections = [
  { id: "about", cs: "O nás", en: "About" },
  { id: "collection", cs: "Kolekce", en: "Collection" },
  { id: "gallery", cs: "Galerie", en: "Gallery" },
  { id: "gifts", cs: "Dárky", en: "Gifts" },
  { id: "reviews", cs: "Recenze", en: "Reviews" },
  { id: "order", cs: "Objednat", en: "Order" },
];

export const Navbar = () => {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-secondary/20 shadow-soft"
          : "bg-background/80 backdrop-blur-sm border-b border-secondary/10"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-heading text-xl font-bold text-primary tracking-wide shrink-0"
        >
          MERAK
        </button>

        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          <ul className="flex items-center gap-5 lg:gap-7">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className="relative text-sm font-semibold text-primary/90 hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-secondary after:transition-all hover:after:w-full whitespace-nowrap"
                >
                  {language === "cs" ? s.cs : s.en}
                </button>
              </li>
            ))}
          </ul>
          <span className="h-5 w-px bg-secondary/25" />
          <LanguageToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <button
            className="p-2 text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-secondary/15">
          <ul className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className="w-full text-left py-2 text-sm font-semibold text-primary/90 hover:text-primary transition-colors"
                >
                  {language === "cs" ? s.cs : s.en}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
