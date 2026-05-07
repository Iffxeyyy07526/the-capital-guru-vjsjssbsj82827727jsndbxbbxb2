import { Logo } from "@/components/ui/logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-brand-gold/10 bg-brand-surface/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Logo showTagline />
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-brand-gold-dark">
            <Link href="/" className="hover:text-brand-gold transition-colors">HOME</Link>
            <Link href="/performance" className="hover:text-brand-gold transition-colors">PERFORMANCE</Link>
            <Link href="/pricing" className="hover:text-brand-gold transition-colors">PRICING</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">LOGIN</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">GET ACCESS</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="border-t border-brand-gold/10 bg-brand-surface py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <Logo showTagline className="items-start" />
              <p className="mt-6 text-brand-text/60 text-sm leading-relaxed max-w-sm">
                The world&apos;s most elite institutional trading infrastructure. Precision data streams, proprietary signals, and total transparency.
              </p>
            </div>
            <div>
              <h4 className="text-brand-gold text-xs font-bold tracking-[0.2em] mb-6 uppercase">Legal</h4>
              <ul className="space-y-4 text-xs font-medium tracking-widest text-brand-gold-dark">
                <li><Link href="/terms" className="hover:text-brand-gold transition-colors">TERMS OF SERVICE</Link></li>
                <li><Link href="/privacy" className="hover:text-brand-gold transition-colors">PRIVACY POLICY</Link></li>
                <li><Link href="/disclaimer" className="hover:text-brand-gold transition-colors">RISK DISCLAIMER</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-gold text-xs font-bold tracking-[0.2em] mb-6 uppercase">Connect</h4>
              <ul className="space-y-4 text-xs font-medium tracking-widest text-brand-gold-dark">
                <li><Link href="https://t.me/yourgroup" className="hover:text-brand-gold transition-colors">TELEGRAM</Link></li>
                <li><Link href="/contact" className="hover:text-brand-gold transition-colors">SUPPORT</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-brand-gold/5 text-center">
            <p className="text-[10px] tracking-[0.1em] text-brand-gold-dark/40 uppercase">
              © 2026 THE CAPITAL GURU. INSTITUTIONAL CLEARANCE REQUIRED. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
