import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "ServiceLabs — C-Suite Technology Advisory",
  description:
    "ServiceLabs designs secure, structured, and resilient technology environments for executive leadership, high-net-worth individuals, and operationally complex organizations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 md:px-10 py-5">
            <Link href="/" className="text-[15px] font-semibold tracking-[0.04em] text-navy">
              ServiceLabs
            </Link>
            <nav className="flex items-center gap-8">
              <Link
                href="/founder"
                className="hidden sm:block text-[13px] tracking-[0.02em] text-charcoal-light hover:text-navy transition-colors"
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-[13px] tracking-[0.02em] text-charcoal-light hover:text-navy transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 pt-[68px]">{children}</main>

        {/* Footer */}
        <footer className="border-t border-border-light">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div>
                <p className="text-[15px] font-semibold tracking-[0.04em] text-navy">
                  ServiceLabs
                </p>
                <p className="mt-2 text-[13px] text-muted leading-relaxed">
                  C-Suite Technology Advisory
                  <br />
                  United States
                </p>
              </div>
              <div className="text-[13px] text-subtle md:text-right">
                <p>&copy; 2026 ServiceLabs. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>

        <ScrollReveal />
      </body>
    </html>
  );
}
