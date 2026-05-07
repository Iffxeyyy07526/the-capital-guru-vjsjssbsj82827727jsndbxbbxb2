export default function PrivacyPage() {
  return (
    <div className="bg-brand-surface min-h-screen py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black text-brand-text uppercase tracking-tighter mb-12">Privacy Protocol</h1>
        <div className="prose prose-invert max-w-none text-brand-gold-dark/80 tracking-wide leading-relaxed space-y-8 uppercase text-xs font-medium">
          <section>
            <h2 className="text-brand-gold text-sm font-bold tracking-[0.2em] mb-4">1. OPERATOR DATA</h2>
            <p>We collect minimal data required for terminal clearance. Your identity is secured within our institutional encryption vault.</p>
          </section>
          <section>
            <h2 className="text-brand-gold text-sm font-bold tracking-[0.2em] mb-4">2. TRANSMISSION SECURITY</h2>
            <p>All data transmissions between your terminal and our infrastructure are secured using 256-bit encryption. We do not track your specific trade execution logs.</p>
          </section>
          <section>
            <h2 className="text-brand-gold text-sm font-bold tracking-[0.2em] mb-4">3. THIRD-PARTY DISCLOSURE</h2>
            <p>The Capital Guru never sells operator data. We are an isolated infrastructure provider.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
