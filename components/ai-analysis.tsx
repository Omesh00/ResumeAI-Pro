import { Check, Sparkles } from 'lucide-react'

const benefits = [
  'Skill and keyword extraction mapped to each job requirement',
  'Seniority and experience estimation from work history',
  'Culture-add signals and role-fit reasoning you can audit',
  'Red-flag detection for gaps, mismatches, and duplicates',
]

const matchSignals = [
  { label: 'React & TypeScript', value: 96 },
  { label: 'Team leadership', value: 88 },
  { label: 'System design', value: 82 },
  { label: 'Communication', value: 91 },
]

export function AIAnalysis() {
  return (
    <section className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-primary">
              AI resume analysis
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Understand every candidate at a glance
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              ResumeAI Pro reads between the lines. It maps each resume to your
              role and explains exactly why a candidate is a strong match — so
              you can trust the score.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-accent text-primary font-semibold">
                  JD
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Jordan Diaz
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Senior Frontend Engineer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-primary">
                <Sparkles className="size-3.5" />
                92% match
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {matchSignals.map((signal) => (
                <div key={signal.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">
                      {signal.label}
                    </span>
                    <span className="text-muted-foreground">
                      {signal.value}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${signal.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-border bg-muted/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                AI summary
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Strong senior frontend profile with 7 years of React
                experience, proven leadership of a 6-person team, and a track
                record shipping design systems at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
