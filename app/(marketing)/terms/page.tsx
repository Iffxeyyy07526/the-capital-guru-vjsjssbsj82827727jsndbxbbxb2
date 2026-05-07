export default function TermsPage() {
  return (
    <div className="bg-brand-surface min-h-screen py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black text-brand-text uppercase tracking-tighter mb-12">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-brand-gold-dark/80 tracking-wide leading-relaxed space-y-8 uppercase text-xs font-medium">
          <section>
            <h2 className="text-brand-gold text-sm font-bold tracking-[0.2em] mb-4">1. ELITE CLEARANCE</h2>
            <p>Access to The Capital Guru is restricted to authorized operators. Security keys are non-transferable.</p>
          </section>
          <section>
            <h2 className="text-brand-gold text-sm font-bold tracking-[0.2em] mb-4">2. DATA USAGE</h2>
            <p>Institutional data streams provided through this terminal are for individual use only. Redistribution is strictly prohibited.</p>
          </section>
          <section>
            <h2 className="text-brand-gold text-sm font-bold tracking-[0.2em] mb-4">3. NO FINANCIAL ADVICE</h2>
            <p>The Capital Guru is an infrastructure provider. We do not provide financial advice. All trades are executed at the operator&apos;s risk.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
