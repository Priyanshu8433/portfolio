import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const styles = {
  default: "px-8 py-3 font-medium transition-all duration-300",
  variant: {
    primary: "bg-primary-container hover:bg-primary text-brand-neutral",
    secondary:
      "bg-surface-container-low hover:bg-surface-container-high text-on-surface/70",
    tertiary:
      "bg-brand-secondary hover:bg-brand-secondary/80 text-brand-neutral",
    outline:
      "bg-transparent border-2 border-inset border-outline-variant hover:border-on-surface/40 text-outline-variant hover:text-on-surface/40",
  },
};

export const Button = ({
  variant = "primary",
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.default, styles.variant[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
