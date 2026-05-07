export default function DisclaimerPage() {
  return (
    <div className="bg-brand-surface min-h-screen py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black text-brand-text uppercase tracking-tighter mb-12">Risk Disclaimer</h1>
        <div className="p-12 border border-brand-gold/30 bg-brand-gold/5 mb-12">
           <p className="text-brand-gold text-sm font-bold tracking-widest leading-loose uppercase">
             TRADING INVOLVES SIGNIFICANT RISK OF LOSS AND IS NOT SUITABLE FOR ALL INVESTORS. THE VALUATION OF FINANCIAL INSTRUMENTS MAY FLUCTUATE, AND AS A RESULT, CLIENTS MAY LOSE MORE THAN THEIR ORIGINAL INVESTMENT.
           </p>
        </div>
        <div className="prose prose-invert max-w-none text-brand-gold-dark/80 tracking-wide leading-relaxed space-y-8 uppercase text-xs font-medium">
          <p>The Capital Guru provides institutional-grade data and signals based on proprietary algorithms. Past performance is not indicative of future results.</p>
          <p>By using this terminal, you acknowledge that you are a sophisticated operator who understands the inherent risks of market participation.</p>
        </div>
      </div>
    </div>
  );
}
