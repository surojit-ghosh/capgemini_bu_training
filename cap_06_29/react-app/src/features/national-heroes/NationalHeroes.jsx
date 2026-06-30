import { useEffect, useState } from "react";
import { apiClient } from "../../lib/api-client";

function NationalHeroes() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNationalHeroes() {
      try {
        const response = await apiClient.get("/nationalheroes");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching national heroes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNationalHeroes();
  }, []);

  if (loading) {
    return (
      <section className="rounded-xl border border-border bg-surface-1 p-8 shadow-card">
        <p className="text-sm font-medium text-ink-muted">Loading...</p>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="rounded-xl border border-border bg-surface-1 p-8 shadow-card">
        <p className="text-sm font-medium text-ink-muted">No data available.</p>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-primary">Archive</p>
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
}

export default NationalHeroes;
