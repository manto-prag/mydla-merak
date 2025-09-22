import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageToggle = () => {
  const { translations, toggleLanguage } = useLanguage();

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-card/80 backdrop-blur-sm"
    >
      {translations.common.toggleLanguage}
    </Button>
  );
};