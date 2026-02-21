import Link from "next/link";

const whoWeServe = [
  {
    title: "Executive Leadership",
    description:
      "C-Suite and senior executives requiring secure, travel-ready, and resilient technology ecosystems.",
  },
  {
    title: "High-Net-Worth Individuals",
    description:
      "Private advisory for secure personal infrastructure, device governance, and discreet technology planning.",
  },
  {
    title: "Logistics & Operational Organizations",
    description:
      "Companies requiring workflow automation, operational visibility, and structured infrastructure.",
  },
];

const services = [
  {
    title: "Executive Technology Infrastructure",
    items: [
      "Secure device ecosystems",
      "Redundancy and backup planning",
      "Remote access architecture",
      "Travel-ready configurations",
      "Private technical advisory",
    ],
  },
  {
    title: "Governance & Endpoint Strategy",
    items: [
      "Microsoft 365 & Intune oversight",
      "Conditional access architecture",
      "Executive-grade security baselines",
      "Lifecycle & provisioning strategy",
    ],
  },
  {
    title: "Automation & Systems Engineering",
    items: [
      "Workflow automation design",
      "API integrations (Azure / M365 / third-party systems)",
      "License governance frameworks",
      "Internal operational tools",
    ],
  },
  {
    title: "Logistics & Operational Infrastructure",
    items: [
      "Asset & inventory tracking systems",
      "Fleet and operational dashboards",
      "Process engineering",
      "Executive-level reporting systems",
    ],
  },
  {
    title: "Data & Executive Intelligence",
    items: [
      "Power BI dashboard development",
      "Operational analytics",
      "Usage reporting",
      "Governance insights",
    ],
  },
];

const engagements = [
  "Private advisory consultations",
  "Project-based engagements",
  "Retainer-based executive support",
  "Confidential delivery",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-24 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-[720px]">
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-navy">
              C-Suite Technology.
              <br />
              Engineered for Clarity.
            </h1>
            <p className="mt-7 text-[17px] md:text-[19px] leading-[1.65] text-charcoal-light max-w-[580px]">
              ServiceLabs designs secure, structured, and resilient technology
              environments for executive leadership, high-net-worth individuals,
              and operationally complex organizations.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="inline-block rounded-[6px] bg-navy px-7 py-3.5 text-[13px] font-medium tracking-[0.04em] text-white transition-colors hover:bg-navy-light"
              >
                Request Private Consultation
              </Link>
              <Link
                href="#contact"
                className="inline-block text-[13px] tracking-[0.04em] text-muted hover:text-navy transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <p className="mt-20 text-[12px] tracking-[0.06em] uppercase text-subtle">
            Selective client engagements.
          </p>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="border-t border-border-light">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-[680px] fade-in">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-navy">
              Built for Leadership.
            </h2>
            <div className="mt-8 space-y-5 text-[16px] md:text-[17px] leading-[1.7] text-charcoal-light">
              <p>
                ServiceLabs provides private technology advisory and
                infrastructure engineering for decision-makers. We focus on
                governance, operational clarity, and long-term sustainability.
              </p>
              <p>
                Technology should operate quietly in the background — secure,
                organized, and resilient. Our approach prioritizes structure over
                reaction, systems over shortcuts, and precision over complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="bg-surface border-t border-border-light">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <h2 className="fade-in text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-navy">
            Who We Serve
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3 stagger">
            {whoWeServe.map(({ title, description }) => (
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

      {/* ── CORE SERVICES ── */}
      <section className="border-t border-border-light">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <h2 className="fade-in text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-navy">
            Core Services
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger">
            {services.map(({ title, items }) => (
              <div
                key={title}
                className="fade-in group border border-border rounded-[8px] p-8 md:p-10 transition-all duration-300 hover:border-navy/20 hover:shadow-[0_2px_20px_rgba(27,42,88,0.06)]"
              >
                <h3 className="text-[17px] font-semibold text-navy leading-tight">
                  {title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] leading-[1.6] text-charcoal-light"
                    >
                      <span className="mt-[7px] block h-[5px] w-[5px] shrink-0 rounded-full bg-navy/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="bg-surface border-t border-border-light">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-[680px] fade-in">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-navy">
              Structure Over Chaos.
            </h2>
            <div className="mt-8 space-y-5 text-[16px] md:text-[17px] leading-[1.7] text-charcoal-light">
              <p>Technology environments should reduce friction, not create it.</p>
              <p>
                We design systems that are secure, organized, and engineered for
                long-term resilience — ensuring leadership can focus on
                decisions, not disruptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODEL ── */}
      <section className="border-t border-border-light">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-[680px] fade-in">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-navy">
              Engagement Approach
            </h2>
            <ul className="mt-10 space-y-4">
              {engagements.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 text-[16px] md:text-[17px] text-charcoal-light"
                >
                  <span className="block h-px w-5 bg-navy/30" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-12 text-[13px] tracking-[0.04em] text-subtle">
              Engagements are structured and selective.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-surface border-t border-border-light">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <div className="fade-in">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-navy">
                Request Consultation
              </h2>
              <p className="mt-6 text-[15px] leading-[1.7] text-charcoal-light max-w-[400px]">
                For private inquiries:
              </p>
              <p className="mt-1 text-[15px] text-navy font-medium">
                contact@servicelabs.io
              </p>
              <p className="mt-6 text-[13px] tracking-[0.04em] text-subtle">
                Discretion assured.
              </p>
            </div>
            <div className="fade-in">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-[13px] font-medium tracking-[0.02em] text-charcoal mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-border rounded-[6px] bg-white px-4 py-3 text-[15px] text-charcoal outline-none transition-colors focus:border-navy/40 placeholder:text-subtle"
        />
      </div>
      <div>
        <label
          htmlFor="organization"
          className="block text-[13px] font-medium tracking-[0.02em] text-charcoal mb-2"
        >
          Organization{" "}
          <span className="font-normal text-subtle">(Optional)</span>
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          className="w-full border border-border rounded-[6px] bg-white px-4 py-3 text-[15px] text-charcoal outline-none transition-colors focus:border-navy/40 placeholder:text-subtle"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-[13px] font-medium tracking-[0.02em] text-charcoal mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-border rounded-[6px] bg-white px-4 py-3 text-[15px] text-charcoal outline-none transition-colors focus:border-navy/40 placeholder:text-subtle"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-[13px] font-medium tracking-[0.02em] text-charcoal mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-border rounded-[6px] bg-white px-4 py-3 text-[15px] text-charcoal outline-none transition-colors focus:border-navy/40 resize-none placeholder:text-subtle"
        />
      </div>
      <button
        type="submit"
        className="rounded-[6px] bg-navy px-7 py-3.5 text-[13px] font-medium tracking-[0.04em] text-white transition-colors hover:bg-navy-light"
      >
        Schedule Consultation
      </button>
    </form>
  );
}
