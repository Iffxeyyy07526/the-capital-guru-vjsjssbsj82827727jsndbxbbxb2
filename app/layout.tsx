import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE CAPITAL GURU | Institutional Elite Infrastructure",
  description: "Premium institutional trading infrastructure for Nifty, BankNifty, and Equity options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-brand-surface text-brand-text">
        {children}
      </body>
    </html>
  );
}
