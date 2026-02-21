import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — ServiceLabs",
  description:
    "Explore our IT services: cloud infrastructure, managed services, cybersecurity, software development, and more.",
};

const services = [
  {
    title: "Cloud Infrastructure",
    description:
      "We design, build, and manage cloud environments that scale with your business. Whether you're migrating from on-premises or optimizing an existing setup, we ensure your infrastructure is cost-effective and resilient.",
    features: [
      "Multi-cloud architecture (AWS, Azure, GCP)",
      "Migration planning & execution",
      "Cost optimization & governance",
      "Infrastructure as Code (Terraform, Pulumi)",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Managed IT Services",
    description:
      "Focus on your business while we handle the day-to-day of your IT operations. Our team provides proactive monitoring, maintenance, and rapid support around the clock.",
    features: [
      "24/7 infrastructure monitoring",
      "Helpdesk & end-user support",
      "Patch management & updates",
      "Vendor management",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with comprehensive security services. We assess vulnerabilities, implement defenses, and ensure compliance with industry standards.",
    features: [
      "Security audits & penetration testing",
      "Compliance (SOC 2, ISO 27001, HIPAA)",
      "Incident response planning",
      "Employee security training",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Software Development",
    description:
      "Custom-built software that solves real problems. From web applications to APIs and internal tools, we deliver clean, maintainable code on modern stacks.",
    features: [
      "Full-stack web applications",
      "API design & development",
      "System integrations",
      "Legacy system modernization",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "IT Consulting",
    description:
      "Strategic guidance for technology decisions. We help you evaluate options, plan roadmaps, and make informed investments that align with your business goals.",
    features: [
      "Technology roadmap planning",
      "Architecture reviews",
      "Digital transformation strategy",
      "Build vs. buy analysis",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: "DevOps & Automation",
    description:
      "Streamline your development pipeline with modern DevOps practices. We implement CI/CD, containerization, and infrastructure automation to ship faster and safer.",
    features: [
      "CI/CD pipeline design",
      "Container orchestration (Kubernetes, Docker)",
      "Monitoring & observability",
      "Automated testing infrastructure",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
              Services
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-[1.1]">
              End-to-end IT services,
              <br />
              tailored to you.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              We offer a full range of technology services designed to help
              businesses operate more efficiently, securely, and at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          {services.map(({ title, description, features, icon }, index) => (
            <div
              key={title}
              className={`grid gap-8 py-16 md:grid-cols-2 md:gap-12 items-start ${
                index < services.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {icon}
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  {title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">{description}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-4">
                  What&apos;s included
                </h3>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-light py-20 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted leading-relaxed">
            Let&apos;s talk through your challenges. We&apos;ll recommend the
            right mix of services for your situation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
