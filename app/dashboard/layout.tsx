import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LayoutDashboard, Shield, BarChart2, Settings, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-brand-surface">
      {/* Sidebar */}
      <aside className="w-64 border-r border-brand-gold/10 flex flex-col bg-black">
        <div className="p-8 border-b border-brand-gold/10">
          <Logo className="items-start" />
        </div>
        <nav className="flex-grow p-6 space-y-2">
          {[
            { icon: <LayoutDashboard size={18} />, label: "OVERVIEW", href: "/dashboard" },
            { icon: <Shield size={18} />, label: "SIGNALS", href: "/dashboard/signals" },
            { icon: <BarChart2 size={18} />, label: "PERFORMANCE", href: "/dashboard/performance" },
            { icon: <Settings size={18} />, label: "SETTINGS", href: "/dashboard/settings" },
          ].map((item, i) => (
            <Link 
              key={i} 
              href={item.href}
              className="flex items-center gap-4 p-4 text-xs font-bold tracking-[0.2em] text-brand-gold-dark hover:text-brand-gold hover:bg-brand-gold/5 border border-transparent hover:border-brand-gold/10 transition-all duration-300 uppercase"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t border-brand-gold/10">
          <Button variant="ghost" className="w-full justify-start gap-4 text-brand-gold-dark">
            <LogOut size={18} /> LOGOUT
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <header className="h-24 border-b border-brand-gold/10 flex items-center justify-between px-10 bg-black">
          <h2 className="text-xl font-bold tracking-widest text-brand-text uppercase">Institutional Terminal</h2>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs font-bold text-brand-gold tracking-widest">ELITE OPERATOR</p>
              <p className="text-[10px] text-brand-gold-dark tracking-widest">ID: TK-9042</p>
            </div>
            <div className="w-10 h-10 border border-brand-gold/20 bg-brand-surface-2" />
          </div>
        </header>
        <div className="flex-grow p-10 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
