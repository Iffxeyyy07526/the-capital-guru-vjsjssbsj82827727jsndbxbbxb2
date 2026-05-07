import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-brand-surface flex flex-col items-center justify-center p-4">
      <Logo showTagline className="mb-12" />
      <div className="w-full max-w-md p-10 border border-brand-gold/20 bg-brand-surface-2">
        <h1 className="text-2xl font-bold text-brand-text uppercase tracking-widest text-center mb-8">Access Terminal</h1>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-brand-gold tracking-[0.2em] uppercase">Email Clearance</label>
            <input 
              type="email" 
              placeholder="operator@thecapitalguru.com"
              className="w-full bg-black border border-brand-gold/10 p-4 text-sm text-brand-text focus:outline-none focus:border-brand-gold/40 transition-colors uppercase tracking-widest placeholder:text-brand-gold-dark/30"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-brand-gold tracking-[0.2em] uppercase">Security Key</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-black border border-brand-gold/10 p-4 text-sm text-brand-text focus:outline-none focus:border-brand-gold/40 transition-colors tracking-widest placeholder:text-brand-gold-dark/30"
            />
          </div>
          <Button className="w-full py-5">AUTHENTICATE</Button>
        </form>
        <div className="mt-8 pt-8 border-t border-brand-gold/5 flex flex-col items-center gap-4">
          <Link href="/forgot-password" className="text-[10px] text-brand-gold-dark hover:text-brand-gold tracking-widest uppercase transition-colors">
            Forgot Security Key?
          </Link>
          <p className="text-[10px] text-brand-text/40 tracking-widest uppercase">
            No Clearance? <Link href="/register" className="text-brand-gold hover:underline">Request Access</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
