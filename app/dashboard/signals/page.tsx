import { Button } from "@/components/ui/button";
import { Shield, ArrowUpRight, TrendingUp, AlertTriangle } from "lucide-react";

export default function SignalsPage() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-black tracking-widest text-brand-text uppercase italic">Active Transmissions</h3>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold text-brand-gold-dark tracking-widest uppercase">Filter: ALL SESSIONS</span>
          <Button variant="outline" size="sm">CALIBRATE</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { 
            symbol: "NIFTY-BANK", 
            type: "INSTITUTIONAL BUY", 
            entry: "48240.25", 
            target: "48650.00", 
            sl: "48050.00", 
            status: "ACTIVE",
            confidence: "HIGH"
          },
          { 
            symbol: "NIFTY-50", 
            type: "LIQUIDITY SWEEP", 
            entry: "22340.50", 
            target: "22100.00", 
            sl: "22420.00", 
            status: "PENDING",
            confidence: "MEDIUM"
          },
        ].map((signal, i) => (
          <div key={i} className="border border-brand-gold/10 bg-brand-surface-2 group hover:border-brand-gold/40 transition-all duration-500">
             <div className="p-6 border-b border-brand-gold/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Shield size={16} className="text-brand-gold" />
                  <span className="text-xs font-bold tracking-widest text-brand-text uppercase">{signal.symbol}</span>
                </div>
                <span className={`text-[10px] font-bold tracking-widest px-2 py-1 ${signal.status === 'ACTIVE' ? 'bg-green-500/10 text-green-500' : 'bg-brand-gold/10 text-brand-gold'} uppercase`}>
                  {signal.status}
                </span>
             </div>
             <div className="p-8 space-y-6">
                <div>
                  <p className="text-[10px] text-brand-gold-dark tracking-widest mb-1 font-bold">SETUP TYPE</p>
                  <p className="text-xl font-bold text-brand-text tracking-wider uppercase">{signal.type}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[10px] text-brand-gold-dark tracking-widest mb-1">ENTRY</p>
                    <p className="text-sm font-bold text-brand-text">{signal.entry}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-gold-dark tracking-widest mb-1 font-bold text-green-500">TARGET</p>
                    <p className="text-sm font-bold text-green-500">{signal.target}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-gold-dark tracking-widest mb-1 font-bold text-red-500">EXIT (SL)</p>
                    <p className="text-sm font-bold text-red-500">{signal.sl}</p>
                  </div>
                </div>
             </div>
             <div className="p-6 bg-black/50 border-t border-brand-gold/5 flex justify-between items-center">
                <span className="text-[10px] font-bold text-brand-gold-dark tracking-widest uppercase">CONFIDENCE: {signal.confidence}</span>
                <Button variant="ghost" size="sm" className="text-brand-gold p-0 h-auto">EXECUTE TERMINAL <ArrowUpRight size={14} className="ml-1" /></Button>
             </div>
          </div>
        ))}
      </div>

      <div className="p-8 border border-brand-gold/5 bg-brand-surface-2/40 flex items-center gap-6">
        <AlertTriangle size={24} className="text-brand-gold shrink-0 italic" />
        <p className="text-[10px] text-brand-gold-dark tracking-widest uppercase italic leading-relaxed">
           Transmission restricted. Signals are for institutional educational purposes only. Maintain strict risk protocols.
        </p>
      </div>
    </div>
  );
}
