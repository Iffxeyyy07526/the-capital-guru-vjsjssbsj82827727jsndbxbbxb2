export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "NET PROFIT", value: "+$42,840", trend: "+12.4%" },
          { label: "WIN RATE", value: "84.2%", trend: "+2.1%" },
          { label: "OPEN POSITIONS", value: "3", trend: "NEUTRAL" },
        ].map((stat, i) => (
          <div key={i} className="p-8 border border-brand-gold/10 bg-brand-surface-2 flex flex-col gap-2">
            <span className="text-[10px] font-bold text-brand-gold tracking-[0.3em] uppercase">{stat.label}</span>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-black text-brand-text ">{stat.value}</span>
              <span className="text-[10px] font-bold text-green-500 tracking-widest">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-brand-gold/10 bg-brand-surface-2">
        <div className="p-6 border-b border-brand-gold/10 flex justify-between items-center">
          <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-gold">Real-Time Data Feed</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-green-500 uppercase">Live Transmission</span>
          </div>
        </div>
        <div className="p-20 flex items-center justify-center text-center">
          <div>
            <div className="text-brand-gold/20 mb-4 flex justify-center">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
            <p className="text-brand-gold-dark text-xs tracking-widest uppercase font-medium">Terminal Initializing... Analyzing Global Macro Flows</p>
          </div>
        </div>
      </div>
    </div>
  );
}
