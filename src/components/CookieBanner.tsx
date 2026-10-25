import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "merak-cookie-consent";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4">
      <div className="max-w-3xl mx-auto bg-card border border-primary/20 rounded-2xl shadow-elegant p-4 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-foreground/80 text-center sm:text-left">
          Tento web používá pouze nezbytné cookies pro své fungování. Více informací najdete v{" "}
          <Link to="/ochrana-osobnich-udaju" className="text-primary underline">Ochraně osobních údajů</Link>.
        </p>
        <button
          onClick={accept}
          className="shrink-0 bg-primary text-primary-foreground rounded-full px-6 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Rozumím
        </button>
      </div>
    </div>
  );
};
