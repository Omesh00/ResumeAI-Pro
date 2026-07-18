import { Search, SlidersHorizontal, Star } from 'lucide-react'

const candidates = [
  { name: 'Jordan Diaz', role: 'Senior Frontend Engineer', score: 92, status: 'Top pick' },
  { name: 'Priya Nair', role: 'Product Designer', score: 89, status: 'Shortlist' },
  { name: 'Marcus Lee', role: 'Backend Engineer', score: 85, status: 'Shortlist' },
  { name: 'Sofia Rossi', role: 'Data Scientist', score: 81, status: 'Reviewing' },
]

const stats = [
  { label: 'Resumes screened', value: '12,480' },
  { label: 'Avg. time to shortlist', value: '3.2 min' },
  { label: 'Hiring bias reduced', value: '38%' },
]

export function DashboardPreview() {
  return (
    <section id="dashboard" className="scroll-mt-16 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Dashboard</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            One workspace for your entire pipeline
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Track candidates, compare scores, and collaborate with your team in
            a clean, focused interface.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-destructive/40" />
              <span className="size-3 rounded-full bg-primary/30" />
              <span className="size-3 rounded-full bg-primary/50" />
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground">
              <Search className="size-3.5" />
              Search candidates
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <SlidersHorizontal className="size-3.5" />
              Filters
            </div>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card p-5">
                <p className="text-2xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="divide-y divide-border border-t border-border">
            {candidates.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between gap-4 px-5 py-4"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary">
                    {c.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {c.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {c.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground sm:inline">
                    {c.status}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Star className="size-4 fill-primary text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      {c.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
