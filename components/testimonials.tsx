const testimonials = [
  {
    quote:
      'ResumeAI Pro cut our time-to-shortlist from days to minutes. The explainable scores mean our hiring managers actually trust the recommendations.',
    name: 'Elena Marsh',
    role: 'Head of Talent, Northwind',
    initials: 'EM',
  },
  {
    quote:
      'We screen 3,000+ applications a month. This is the first tool that made that volume feel manageable without losing the human touch.',
    name: 'David Okafor',
    role: 'VP People, Lumen',
    initials: 'DO',
  },
  {
    quote:
      'The bias-aware screening gave our leadership real confidence. Our shortlists are more diverse and our offers convert better.',
    name: 'Grace Kim',
    role: 'Recruiting Lead, Vertex',
    initials: 'GK',
  },
]

export function Testimonials() {
  return (
    <section className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Testimonials</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Loved by modern talent teams
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <blockquote className="flex-1 text-pretty text-sm leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
