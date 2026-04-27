const steps = [
  {
    name: "Discover",
    detail:
      "A focused kickoff to map the problem, the people, and the constraints. Output: a written brief we both sign off on.",
  },
  {
    name: "Design",
    detail:
      "Lo-fi wires, then high-fidelity flows. Decisions captured in writing so the team can argue with the design, not the designer.",
  },
  {
    name: "Build",
    detail:
      "Weekly demos against the brief. You're never more than five working days away from clicking the latest version.",
  },
  {
    name: "Launch",
    detail:
      "Boring deploy, real monitoring, and a handover playbook. We stay on retainer if you want a steady hand for what's next.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-base-300/60 bg-base-200/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="text-xs tracking-wide text-base-content/50 uppercase">
            Process
          </span>
          <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
            Four steps. No theatre.
          </h2>
          <p className="mt-4 text-base text-base-content/70 md:text-lg">
            Every engagement runs the same way, whether it&rsquo;s a four-week
            sprint or a year-long partnership.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-base-300/60 bg-base-300/60 md:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.name}
              className="flex flex-col bg-base-100 p-8 md:p-10"
            >
              <span className="font-mono text-xs tracking-widest text-base-content/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-medium tracking-tight">
                {step.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-base-content/70">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
