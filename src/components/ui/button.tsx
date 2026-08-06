import Link from "next/link";
import { ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonProps extends BaseButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
}

const baseClasses = "inline-flex items-center gap-2 rounded-full font-bold transition duration-200";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-violet-600 px-5 py-3 text-sm hover:bg-violet-500 hover:shadow-glow-btn",
  outline: "border border-white/[.1] px-5 py-3 text-sm hover:border-white/[.2] hover:bg-white/[.04]",
  ghost: "px-4 py-2 text-sm hover:text-violet-300",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-4 text-base",
};

function getButtonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  customClass?: string
) {
  return `${baseClasses} ${variantClasses[variant]} ${customClass || ""}`.trim();
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClasses(variant, size, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={getButtonClasses(variant, size, className)}
    >
      {children}
    </Link>
  );
}
