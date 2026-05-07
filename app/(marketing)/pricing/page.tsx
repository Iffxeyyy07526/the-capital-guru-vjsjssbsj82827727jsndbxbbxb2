import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="bg-brand-surface min-h-screen py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">CLEARANCE TIERS</h1>
          <h2 className="text-4xl md:text-6xl font-black text-brand-text uppercase tracking-tighter leading-tight">Institutional Access.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             {
               name: "Silver Clearance",
               price: "₹4,999",
               period: "/ MONTH",
               desc: "Standard institutional data access for Nifty & BankNifty.",
               features: ["Real-time Data Stream", "Nifty Precision Signals", "BankNifty Precision Signals", "Basic Institutional Education"],
               button: "GET SILVER ACCESS",
               variant: "outline"
             },
             {
               name: "Gold Clearance",
               price: "₹9,999",
               period: "/ QUARTER",
               desc: "Elite execution infrastructure with proprietary alpha signals.",
               features: ["All Silver Benefits", "Proprietary Alpha Signals", "Institutional Trade Logs", "Priority Clearances", "Advanced Macro Insights"],
               button: "GET GOLD ACCESS",
               popular: true,
               variant: "primary"
             },
             {
               name: "Titanium Clearance",
               price: "₹24,999",
               period: "/ YEAR",
               desc: "The ultimate trading terminal for professional allocators.",
               features: ["All Gold Benefits", "Personal Portfolio Audits", "1-on-1 Institutional Strategy", "Private Executive Group", "Lifetime Infrastructure Upgrades"],
               button: "GET TITANIUM ACCESS",
               variant: "outline"
             },
           ].map((tier, i) => (
             <div key={i} className={`p-10 border ${tier.popular ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-gold/10 bg-brand-surface-2'} relative flex flex-col`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-black text-[10px] font-bold tracking-widest px-4 py-1 uppercase">
                    MOST ELITE
                  </div>
                )}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-brand-text uppercase tracking-widest mb-4">{tier.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-brand-gold">{tier.price}</span>
                    <span className="text-[10px] font-bold text-brand-gold-dark tracking-widest">{tier.period}</span>
                  </div>
                </div>
                <p className="text-brand-gold-dark text-xs tracking-widest leading-relaxed mb-10 min-h-[40px] uppercase font-medium">
                  {tier.desc}
                </p>
                <div className="space-y-4 mb-12 flex-grow">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-brand-text/80 uppercase">
                      <ShieldCheck size={14} className="text-brand-gold shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant={tier.variant as any} className="w-full py-5">{tier.button}</Button>
             </div>
           ))}
        </div>

        <div className="mt-20 p-12 border border-brand-gold/10 bg-brand-surface-2/50 text-center">
            <h4 className="text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-6">WHY THE GURU?</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Zap size={20} />, label: "0MS LATENCY" },
                { icon: <Globe size={20} />, label: "GLOBAL MACRO" },
                { icon: <ShieldCheck size={20} />, label: "VERIFIED LOGS" },
                { icon: <Cpu size={20} />, label: "AI DRIVEN" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group">
                  <div className="text-brand-gold-dark group-hover:text-brand-gold transition-colors">{item.icon}</div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold-dark uppercase">{item.label}</span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
