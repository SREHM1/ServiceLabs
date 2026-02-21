import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — ServiceLabs",
  description:
    "The leadership behind ServiceLabs — private technology advisory for executive environments.",
};

const principles = [
  {
    title: "Structure First",
    description:
      "Every engagement begins with architecture. We design before we deploy — building technology ecosystems that scale without disorder.",
  },
  {
    title: "Discretion as Standard",
    description:
      "Our clients operate at the highest levels. Confidentiality and precision are foundational to how we work, not afterthoughts.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "We don't optimize for the quarter. We build infrastructure and governance models that serve leadership for years, not months.",
  },
];

export default function FounderPage() {
  return (
    <>
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-24 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-[720px]">
            <p className="text-[12px] tracking-[0.08em] uppercase text-subtle mb-6">
              About
            </p>
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-navy">
              Leadership & Perspective
            </h1>
            <p className="mt-7 text-[17px] md:text-[19px] leading-[1.65] text-charcoal-light max-w-[580px]">
              ServiceLabs was founded to bring enterprise-grade technology
              thinking to the environments where it matters most — executive
              leadership, private wealth, and operationally critical
              organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="border-t border-border-light">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-5 md:gap-20">
            <div className="md:col-span-2 fade-in">
              {/* Monogram block instead of photo */}
              <div className="w-full aspect-[4/5] max-w-[280px] bg-surface border border-border rounded-[8px] flex items-center justify-center">
                <span className="text-[48px] font-semibold tracking-[-0.02em] text-navy/20">
                  SL
                </span>
              </div>
            </div>
            <div className="md:col-span-3 fade-in">
              <p className="text-[12px] tracking-[0.08em] uppercase text-subtle mb-4">
                Founder
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-navy">
                The Thinking Behind ServiceLabs
              </h2>
              <div className="mt-8 space-y-5 text-[16px] md:text-[17px] leading-[1.7] text-charcoal-light">
                <p>
                  ServiceLabs emerged from a straightforward observation:
                  the people making the most consequential decisions often
                  operate on technology environments that don't reflect their
                  standards.
                </p>
                <p>
                  Our founder has spent years at the intersection of enterprise
                  infrastructure and executive environments — designing systems
                  for leaders who require technology that is secure, silent, and
                  structured.
                </p>
                <p>
                  The firm was built around a single principle: technology should
                  serve leadership, not the other way around. Every system,
                  policy, and architecture we design is oriented toward
                  operational clarity and long-term resilience.
                </p>
                <p>
                  ServiceLabs operates selectively. We take on engagements where
                  our approach delivers the most value — and where the
                  relationship is built on trust, discretion, and shared
                  standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-surface border-t border-border-light">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <h2 className="fade-in text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-navy">
            Operating Principles
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3 stagger">
            {principles.map(({ title, description }) => (
              <div
                key={title}
                className="fade-in border border-border bg-white rounded-[8px] p-8 md:p-10"
              >
                <h3 className="text-[18px] font-semibold text-navy leading-tight">
                  {title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-charcoal-light">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border-light">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-[580px] fade-in">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-navy">
              Interested in working together?
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-charcoal-light">
              ServiceLabs partners with executives and organizations who value
              structure, security, and long-term thinking. If that describes your
              environment, we should talk.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-block rounded-[6px] bg-navy px-7 py-3.5 text-[13px] font-medium tracking-[0.04em] text-white transition-colors hover:bg-navy-light"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
