import { useNationalHeroes } from "./national-heroes.queries";

const RQNationalHeroes = () => {
  const { data, isLoading, isError, error } = useNationalHeroes();

  if (isLoading) {
    return (
      <section className="rounded-xl border border-border bg-surface-1 p-8 shadow-card">
        <p className="text-sm font-medium text-ink-muted">Loading...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="rounded-xl border border-border bg-surface-1 p-8 shadow-card">
        <p className="text-sm font-medium text-ink-muted">
          {error.message || "Unable to load national heroes."}
        </p>
      </section>
    );
  }

  if (!data?.length) {
    return (
      <section className="rounded-xl border border-border bg-surface-1 p-8 shadow-card">
        <p className="text-sm font-medium text-ink-muted">No data available.</p>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-primary">React Query</p>
        <h2 className="font-display text-5xl font-extrabold leading-none tracking-[-0.03em] text-ink sm:text-6xl">
          National Heroes
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((hero) => (
          <article
            key={`${hero.id}-${hero.name}`}
            className="group rounded-xl border border-border bg-surface-1 p-6 shadow-card transition hover:-translate-y-0.5 hover:bg-surface-2 hover:shadow-elevated"
          >
            <div className="mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end" />
            <h3 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink">
              {hero.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-muted">{hero.pride}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RQNationalHeroes;
