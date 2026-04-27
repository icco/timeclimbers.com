import {
  CloudIcon,
  CodeBracketSquareIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const capabilities = [
  {
    icon: CodeBracketSquareIcon,
    name: "Web platforms",
    description:
      "Marketing sites, dashboards, and internal tools built with Next.js, TypeScript, and a design system you'll actually want to extend.",
  },
  {
    icon: DevicePhoneMobileIcon,
    name: "Mobile apps",
    description:
      "Native and cross-platform apps for iOS and Android, designed for daily use and shipped through the stores we already know inside out.",
  },
  {
    icon: CloudIcon,
    name: "Cloud & infrastructure",
    description:
      "Pragmatic infra on GCP, Cloudflare, and Fly. Boring deploy pipelines, clear observability, and runbooks that survive your first incident.",
  },
  {
    icon: LightBulbIcon,
    name: "Product strategy",
    description:
      "Short, opinionated sprints to get from rough idea to a buildable plan. Honest scoping, clear trade-offs, no decks for the sake of decks.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-b border-base-300/60 bg-base-100"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs tracking-wide text-base-content/50 uppercase">
              Capabilities
            </span>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
              A small team that handles the whole stack.
            </h2>
          </div>
          <p className="max-w-md text-base text-base-content/70 md:text-lg">
            We work end-to-end so you don&rsquo;t have to choreograph a dozen
            specialists. Pick one capability or all four.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-base-300/60 bg-base-300/60 sm:grid-cols-2">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.name}
                className="group relative bg-base-100 p-8 transition-colors hover:bg-base-200/60"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-base-content/10 bg-base-200/60 text-primary transition-colors group-hover:border-primary/40">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-medium tracking-tight">
                  {capability.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-base-content/70">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
