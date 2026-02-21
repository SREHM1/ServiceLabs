import Link from "next/link";

const services = [
  {
    title: "Cloud Infrastructure",
    description:
      "Design, migration, and management of scalable cloud environments on AWS, Azure, and GCP.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Managed IT Services",
    description:
      "24/7 monitoring, maintenance, and support so your team can focus on what matters most.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security assessments, compliance auditing, and threat protection strategies.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions, from web applications to internal tools, built with modern technologies.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
];

const stats = [
  { value: "150+", label: "Clients served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support available" },
  { value: "10+", label: "Years of experience" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
              IT Services &amp; Consulting
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-[1.1]">
              Technology that
              <br />
              works for you.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg">
              We build and manage reliable IT infrastructure so your business can
              grow without limits. Simple, scalable, secure.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-light"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-light">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-primary">{value}</p>
                <p className="mt-1 text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-lg">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-2">
              What we do
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Services built for modern businesses
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              From cloud infrastructure to cybersecurity, we provide end-to-end
              IT services tailored to your needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map(({ title, description, icon }) => (
              <div
                key={title}
                className="group rounded-xl border border-border p-6 transition-colors hover:border-accent/30 hover:bg-light"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-accent hover:underline"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-light">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to modernize your IT?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted leading-relaxed">
            Let&apos;s discuss how ServiceLabs can streamline your technology
            operations and accelerate your business.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
