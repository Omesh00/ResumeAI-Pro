import { Upload, ScanLine, ListChecks, UserCheck } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Upload resumes',
    description:
      'Drag and drop a batch of resumes or sync directly from your ATS. Any format works.',
  },
  {
    icon: ScanLine,
    step: '02',
    title: 'AI analyzes',
    description:
      'Our models parse experience, skills, and achievements, then score each candidate against the role.',
  },
  {
    icon: ListChecks,
    step: '03',
    title: 'Review rankings',
    description:
      'See a ranked shortlist with transparent match scores and the reasoning behind every result.',
  },
  {
    icon: UserCheck,
    step: '04',
    title: 'Hire confidently',
    description:
      'Collaborate with your team, move top candidates forward, and make faster, fairer decisions.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">How it works</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From resume pile to shortlist in 4 steps
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Get up and running in minutes — no complex setup, no lengthy
            onboarding.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="text-sm font-semibold text-primary/60">
                {step.step}
              </span>
              <div className="mt-4 flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <step.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
