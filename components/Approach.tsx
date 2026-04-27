const values = [
  {
    title: "Senior-only team",
    body: "Every hour billed is a senior hour. No mystery juniors learning on your project, no offshore handoffs, no account managers.",
  },
  {
    title: "Tools you already use",
    body: "We meet your team in Linear, Slack, Figma, and GitHub. Less ceremony, more visibility into what's actually happening.",
  },
  {
    title: "Ship in weeks",
    body: "We default to small, demoable scope. The first end-to-end version is in your hands within four weeks of kickoff.",
  },
  {
    title: "Honest scoping",
    body: "If the project doesn't fit us, we'll tell you and recommend someone better. Most engagements start with a paid discovery week.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-b border-base-300/60 bg-base-200/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="text-xs tracking-wide text-base-content/50 uppercase">
              Approach
            </span>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
              How we work, in plain English.
            </h2>
            <p className="mt-6 text-base text-base-content/70 md:text-lg">
              TimeClimbers exists because we wanted to build software the way
              we&rsquo;d want it built for us &mdash; small team, real
              ownership, clear writing.
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
