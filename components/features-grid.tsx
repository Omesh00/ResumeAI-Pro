import {
  BrainCircuit,
  Gauge,
  ShieldCheck,
  Users,
  FileSearch,
  Workflow,
} from 'lucide-react'

const features = [
  {
    icon: BrainCircuit,
    title: 'Explainable AI scoring',
    description:
      'Every candidate gets a transparent match score with the exact skills, keywords, and signals behind it.',
  },
  {
    icon: FileSearch,
    title: 'Instant resume parsing',
    description:
      'Upload thousands of resumes and get structured, searchable profiles in seconds — any format.',
  },
  {
    icon: Gauge,
    title: 'Smart candidate ranking',
    description:
      'Automatically surface your strongest applicants for each role with customizable scoring criteria.',
  },
  {
    icon: ShieldCheck,
    title: 'Bias-aware screening',
    description:
      'Built-in fairness checks help you reduce unconscious bias and hire with confidence.',
  },
  {
    icon: Users,
    title: 'Team collaboration',
    description:
      'Share shortlists, leave notes, and align hiring managers all in one shared workspace.',
  },
  {
    icon: Workflow,
    title: 'ATS integrations',
    description:
      'Connect Greenhouse, Lever, Workday, and more so ResumeAI Pro fits right into your stack.',
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Features</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything you need to hire faster
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A complete toolkit that turns your resume pile into a ranked,
            searchable, and fair hiring pipeline.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <feature.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
