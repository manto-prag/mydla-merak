import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle = ({ className = "" }: LanguageToggleProps) => {
  const { translations, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className={`rounded-full border-secondary/40 text-primary bg-card/70 backdrop-blur-sm px-4 text-xs font-semibold tracking-widest uppercase hover:bg-secondary/10 ${className}`}
    >
      {translations.common.toggleLanguage}
    </Button>
  );
};