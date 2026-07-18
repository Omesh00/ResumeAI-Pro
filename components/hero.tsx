import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const highlights = [
  'No credit card required',
  '14-day free trial',
  'Cancel anytime',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent)]"
      />
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground shadow-sm">
          <Sparkles className="size-3.5 text-primary" />
          Introducing ResumeAI Pro 2.0
        </div>

        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Hire smarter with{' '}
          <span className="text-primary">AI-powered</span> resume intelligence
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          ResumeAI Pro screens, scores, and ranks candidates in seconds. Give
          your HR team explainable insights so they can focus on the people, not
          the paperwork.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-11 px-6 text-base"
            nativeButton={false}
            render={<a href="#pricing" />}
          >
            Start free trial
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 px-6 text-base"
            nativeButton={false}
            render={<a href="#dashboard" />}
          >
            View live demo
          </Button>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="size-4 text-primary" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/10">
            <img
              src="/hero-dashboard.png"
              alt="ResumeAI Pro dashboard showing candidate rankings and AI match scores"
              className="w-full rounded-xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
