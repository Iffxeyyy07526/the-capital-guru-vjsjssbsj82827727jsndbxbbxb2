import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-brand-surface">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-40 border-b border-brand-gold/10">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-[10px] tracking-[0.2em] font-bold uppercase mb-8">
            <ShieldCheck size={14} /> INSTITUTIONAL ACCESS GRANTED
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-brand-text tracking-tighter leading-[0.9] mb-8 uppercase">
            Trade with <span className="text-brand-gold">Absolute</span> Precision.
          </h1>
          <p className="max-w-2xl mx-auto text-brand-gold-dark text-lg md:text-xl tracking-widest font-medium mb-12 uppercase leading-relaxed">
            The world&apos;s most elite institutional infrastructure for Nifty & BankNifty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto">GET INSTITUTIONAL ACCESS <ArrowRight className="ml-2" size={18} /></Button>
            </Link>
            <Link href="/performance">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">VIEW ACCURACY LOGS</Button>
            </Link>
          </div>
        </div>
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Features */}
      <section className="py-32 border-b border-brand-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">THE GURU EDGE</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-text uppercase tracking-tight">Institutional Transparency.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="text-brand-gold" />,
                title: "Precision Data",
                desc: "Direct-to-terminal institutional data streams. No delays. No retail noise.",
              },
              {
                icon: <Zap className="text-brand-gold" />,
                title: "Flash Execution",
                desc: "Identify institutional displacement in real-time. Trade high-probability setups.",
              },
              {
                icon: <ShieldCheck className="text-brand-gold" />,
                title: "Total Transparency",
                desc: "We don't hide our logs. Every trade and signal is documented with institutional rigour.",
              },
            ].map((feature, i) => (
              <div key={i} className="p-10 border border-brand-gold/10 bg-brand-surface-2 group hover:border-brand-gold/30 transition-all duration-500">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                <h4 className="text-xl font-bold text-brand-text mb-4 uppercase tracking-wider">{feature.title}</h4>
                <p className="text-brand-gold-dark/80 text-sm leading-relaxed tracking-wide">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Teaser */}
      <section className="py-32 bg-brand-surface-2/50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">TRACK RECORD</h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-text uppercase tracking-tighter leading-tight mb-8">
              Verified <span className="text-brand-gold">Alpha</span>.
            </h3>
            <p className="text-brand-gold-dark text-lg tracking-widest mb-10 leading-relaxed uppercase font-medium">
              Join the elite 5% who understand the narrative.
            </p>
            <Link href="/performance" className="inline-block px-10 py-5 border border-brand-gold text-brand-gold text-xs font-bold tracking-[0.3em] uppercase hover:bg-brand-gold hover:text-black transition-all duration-500">
              EXPLORE OUR AUDIT LOGS
            </Link>
          </div>
          <div className="flex-1 w-full max-w-xl aspect-square border border-brand-gold/10 p-4 bg-black/50 rotate-2">
             <div className="w-full h-full border border-brand-gold/5 bg-brand-surface flex flex-col items-center justify-center p-8 space-y-4">
                <div className="text-6xl font-bold text-brand-gold">87%</div>
                <div className="text-xs tracking-[0.2em] font-bold text-brand-gold-dark uppercase">MONTHLY ACCURACY RATE</div>
                <div className="w-full h-px bg-brand-gold/10" />
                <div className="text-6xl font-bold text-brand-text">1200+</div>
                <div className="text-xs tracking-[0.2em] font-bold text-brand-gold-dark uppercase">ELITE MEMBERS</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
