import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — ServiceLabs",
  description:
    "Learn about ServiceLabs, our mission, values, and the team behind modern IT solutions.",
};

const values = [
  {
    title: "Reliability",
    description:
      "We engineer systems you can count on. Every solution is built with uptime and resilience at its core.",
  },
  {
    title: "Simplicity",
    description:
      "Complex problems deserve elegant solutions. We cut through complexity to deliver clear, maintainable systems.",
  },
  {
    title: "Transparency",
    description:
      "No hidden costs, no black boxes. We communicate openly and give you full visibility into our work.",
  },
  {
    title: "Partnership",
    description:
      "We treat your goals as our own. Long-term relationships matter more to us than one-off engagements.",
  },
];

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "15+ years in enterprise IT with a focus on cloud architecture and digital transformation.",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Engineering",
    bio: "Former senior engineer at major cloud providers. Leads our technical delivery team.",
  },
  {
    name: "James Rivera",
    role: "Director of Security",
    bio: "Certified security expert with a background in financial services and compliance.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
              About us
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-[1.1]">
              Building better technology, together.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              ServiceLabs was founded on a simple idea: businesses deserve IT
              partners who speak their language and deliver real results. We
              combine deep technical expertise with a commitment to clear
              communication.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-border bg-light py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Our mission</h2>
              <p className="mt-4 text-muted leading-relaxed">
                To make enterprise-grade IT accessible to businesses of every
                size. We believe great technology shouldn&apos;t require a massive
                budget or an in-house team of specialists.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Since our founding, we&apos;ve helped over 150 businesses
                modernize their infrastructure, strengthen their security
                posture, and scale with confidence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-white p-6 text-center">
                <p className="text-3xl font-bold text-primary">2015</p>
                <p className="mt-1 text-sm text-muted">Founded</p>
              </div>
              <div className="rounded-xl border border-border bg-white p-6 text-center">
                <p className="text-3xl font-bold text-primary">150+</p>
                <p className="mt-1 text-sm text-muted">Clients</p>
              </div>
              <div className="rounded-xl border border-border bg-white p-6 text-center">
                <p className="text-3xl font-bold text-primary">40+</p>
                <p className="mt-1 text-sm text-muted">Team members</p>
              </div>
              <div className="rounded-xl border border-border bg-white p-6 text-center">
                <p className="text-3xl font-bold text-primary">99.9%</p>
                <p className="mt-1 text-sm text-muted">Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight">Our values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map(({ title, description }) => (
              <div key={title} className="rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-light py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight">Leadership</h2>
          <p className="mt-2 text-muted">
            The people driving ServiceLabs forward.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {team.map(({ name, role, bio }) => (
              <div
                key={name}
                className="rounded-xl border border-border bg-white p-6"
              >
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-lg">
                  {name.charAt(0)}
                </div>
                <h3 className="mt-4 font-semibold">{name}</h3>
                <p className="text-sm text-accent">{role}</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            We&apos;re always looking for great people and great projects.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
