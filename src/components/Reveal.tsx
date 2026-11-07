import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "aside" | "header" | "footer" | "nav";
  id?: string;
}

export const Reveal = ({ children, className = "", as: Tag = "div", id }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={(node: HTMLElement | null) => { ref.current = node; }}
      id={id}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
};
