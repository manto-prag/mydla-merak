import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export const Lightbox = ({ items, index, onClose, onIndexChange }: LightboxProps) => {
  const open = index !== null && index >= 0 && index < items.length;
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (delta: number) => {
      if (index === null || items.length === 0) return;
      onIndexChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onIndexChange]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, go]);

  if (!open) return null;
  const item = items[index as number];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Zavřít"
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Předchozí"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Další"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div
        className="max-w-[92vw] max-h-[88vh] flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-w-[92vw] max-h-[74vh] w-auto h-auto object-contain rounded-2xl bg-white shadow-premium"
        />
        <div className="text-center px-4">
          <p className="text-white text-sm sm:text-base font-medium">{item.alt}</p>
          {item.caption && <p className="text-white/70 text-xs sm:text-sm mt-1">{item.caption}</p>}
          {items.length > 1 && (
            <p className="text-white/50 text-xs mt-2">
              {(index as number) + 1} / {items.length}
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
