const steps = [
  {
    name: "Frame",
    detail:
      "We start by writing the problem down. What changes for a person using this? What does it stop us from doing later?",
  },
  {
    name: "Design",
    detail:
      "Lo-fi sketches before pixels. Decisions captured in writing so the team can argue with the design, not the designer.",
  },
  {
    name: "Build",
    detail:
      "Weekly demos against the brief. Production from day one, with the same monitoring and review the rest of our software gets.",
  },
  {
    name: "Run",
    detail:
      "Once it ships, we keep running it. New features land in small, reversible increments and the on-call rotation includes everyone.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-base-300/60 bg-base-200/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="text-xs tracking-wide text-base-content/50 uppercase">
            How we work
          </span>
          <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
            Four phases, no theatre.
          </h2>
          <p className="mt-4 text-base text-base-content/70 md:text-lg">
            Every product we ship moves through the same four phases. Small
            steps, frequent demos, real users in the loop.
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
