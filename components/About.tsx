const stats = [
  { label: "Founded", value: "2024" },
  { label: "Team", value: "Senior" },
  { label: "Where", value: "Remote, US" },
];

const values = [
  {
    title: "Senior team, no handoffs",
    body: "Everyone at TimeClimbers has spent years writing and operating production software. The people who design the work are the people who ship and run it.",
  },
  {
    title: "Real production experience",
    body: "We have built and maintained software at scale, from consumer apps with millions of users to internal tools that hundreds of engineers depend on every day.",
  },
  {
    title: "Built to last",
    body: "We choose well-understood tools and write code we would still want to read in five years. Boring infrastructure, careful APIs, design systems that age well.",
  },
  {
    title: "Open by default",
    body: "Most of the libraries and tools that power TimeClimbers are open source, and we contribute back to the ones we depend on.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-base-200/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="text-xs tracking-wide text-base-content/50 uppercase">
              About TimeClimbers
            </span>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
              A small studio with a long resume.
            </h2>
            <p className="mt-6 text-base text-base-content/70 md:text-lg">
              TimeClimbers is a software company building modern web and mobile
              applications. We are a small, senior team with decades of
              combined experience shipping software people actually use.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-base-300/60 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs tracking-wide text-base-content/50 uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-lg font-medium tracking-tight">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
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
