const companies = [
  'Northwind',
  'Acme Corp',
  'Lumen',
  'Vertex',
  'Foundry',
  'Cascade',
]

export function TrustedCompanies() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by talent teams at 2,000+ fast-growing companies
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
          {companies.map((name) => (
            <div
              key={name}
              className="text-center text-lg font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
