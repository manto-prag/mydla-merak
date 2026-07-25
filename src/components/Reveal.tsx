import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

export const Reveal = ({ children, className = "", as: Tag = "div", id }: RevealProps) => {
  const { ref, visible } = useReveal();
  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      id={id}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
};
