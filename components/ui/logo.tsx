import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export const Logo = ({ className, showTagline = false }: LogoProps) => {
  return (
    <Link href="/" className={cn("flex flex-col items-center group", className)}>
      <span className="text-xl md:text-2xl font-black tracking-[0.2em] text-brand-gold group-hover:text-brand-gold/80 transition-colors">
        THE CAPITAL GURU
      </span>
      {showTagline && (
        <span className="text-[8px] md:text-[10px] tracking-[0.4em] text-brand-gold-dark font-semibold mt-1">
          INSTITUTIONAL · PRECISE · ELITE
        </span>
      )}
    </Link>
  );
};
