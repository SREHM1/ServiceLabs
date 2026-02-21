"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-[1.1]">
              Let&apos;s start a conversation.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Have a project in mind or need help with your IT? Fill out the form
              below and we&apos;ll get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 pt-16 md:grid-cols-3">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-2">
                  Email
                </h3>
                <p className="text-sm">hello@servicelabs.com</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-2">
                  Phone
                </h3>
                <p className="text-sm">+1 (555) 000-0000</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-2">
                  Office
                </h3>
                <p className="text-sm leading-relaxed">
                  123 Innovation Drive
                  <br />
                  Suite 400
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted mb-2">
                  Hours
                </h3>
                <p className="text-sm">
                  Monday &ndash; Friday, 9 AM &ndash; 6 PM PST
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              {submitted ? (
                <div className="rounded-xl border border-border bg-light p-8 text-center">
                  <svg
                    className="mx-auto h-10 w-10 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-4 text-lg font-semibold">
                    Message received
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Thanks for reaching out. We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-2"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-2"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Work email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium mb-2"
                    >
                      Service interested in
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="cloud">Cloud Infrastructure</option>
                      <option value="managed">Managed IT Services</option>
                      <option value="security">Cybersecurity</option>
                      <option value="software">Software Development</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="devops">DevOps &amp; Automation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent resize-none"
                      placeholder="Tell us about your project or challenge..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
