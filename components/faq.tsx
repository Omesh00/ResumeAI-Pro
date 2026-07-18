'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How accurate is the AI resume analysis?',
    answer:
      'ResumeAI Pro is trained on millions of resumes and job descriptions. Every score is fully explainable, showing the skills and signals behind it so your team can validate each result.',
  },
  {
    question: 'Does ResumeAI Pro integrate with my ATS?',
    answer:
      'Yes. Pro and Enterprise plans connect with popular systems like Greenhouse, Lever, and Workday, so candidates and scores sync automatically with your existing workflow.',
  },
  {
    question: 'How do you handle candidate data and privacy?',
    answer:
      'We are GDPR and SOC 2 compliant. Data is encrypted in transit and at rest, and Enterprise customers get SSO, granular permissions, and configurable data retention.',
  },
  {
    question: 'Can ResumeAI Pro help reduce hiring bias?',
    answer:
      'Absolutely. Bias-aware screening applies fairness checks and can anonymize sensitive fields, helping you build more diverse and equitable shortlists.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes — every paid plan includes a 14-day free trial with no credit card required. You can also stay on the free Starter plan for as long as you like.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-16">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary">FAQ</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-foreground sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
