const values = [
  {
    title: "Small by design",
    body: "We stay small on purpose. Every person on a project is on every project, and the people who plan the work are the people who write the code.",
  },
  {
    title: "Built to last",
    body: "We pick boring, well-understood tools. The software we ship today should still be easy to change in five years.",
  },
  {
    title: "Writing first",
    body: "Decisions live in writing, not in slack threads. It keeps the company honest and makes onboarding feel like reading a book.",
  },
  {
    title: "Quietly opinionated",
    body: "TypeScript, Next.js, Go, GCP, Cloudflare. We have favorites and we use them, but we will tell you why.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-base-300/60 bg-base-200/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="text-xs tracking-wide text-base-content/50 uppercase">
              About us
            </span>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
              A software company, built like a software product.
            </h2>
            <p className="mt-6 text-base text-base-content/70 md:text-lg">
              TimeClimbers is a small company making web and mobile
              applications. We were founded in 2024 and we still answer our own
              support email.
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:col-span-7">
            {values.map((value) => (
              <div key={value.title}>
                <dt className="text-base font-medium tracking-tight">
                  {value.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-base-content/70">
                  {value.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
