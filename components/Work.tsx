import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    name: "natwelch.com",
    href: "https://natwelch.com",
    role: "Personal site & wiki",
    summary:
      "A long-running writing and reference site rebuilt on Next.js 16 with a content pipeline tuned for two decades of posts.",
    tag: "Web",
  },
  {
    name: "etu",
    href: "https://etu.natwelch.com",
    role: "Habit tracker",
    summary:
      "A full-stack habit tracker with web and mobile clients, GraphQL backend, and a clean enough data model to keep extending.",
    tag: "Mobile + API",
  },
  {
    name: "gotak",
    href: "https://gotak.app",
    role: "Multiplayer Tak",
    summary:
      "A real-time multiplayer board game running on Go, GraphQL, and React Native — built so it can be picked up and put down again on a phone.",
    tag: "Realtime",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-b border-base-300/60 bg-base-100">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs tracking-wide text-base-content/50 uppercase">
              Selected work
            </span>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
              A few of the apps we&rsquo;ve shipped.
            </h2>
          </div>
          <p className="max-w-md text-base text-base-content/70 md:text-lg">
            We work with a small number of clients per year. Here are some of
            our own products that show how we think.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-base-300/60 bg-base-200/40 transition-all hover:-translate-y-1 hover:border-base-content/30 hover:bg-base-200/80"
              >
                <div className="hero-gradient relative flex aspect-[4/3] items-end p-6">
                  <span className="rounded-full border border-base-content/15 bg-base-100/60 px-3 py-1 text-xs font-medium text-base-content/70 backdrop-blur">
                    {project.tag}
                  </span>
                  <ArrowUpRightIcon className="absolute top-6 right-6 h-5 w-5 text-base-content/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-base-content" />
                </div>
                <div className="flex flex-1 flex-col gap-2 border-t border-base-300/60 p-6">
                  <span className="text-xs tracking-wide text-base-content/50 uppercase">
                    {project.role}
                  </span>
                  <h3 className="text-xl font-medium tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-base-content/70">
                    {project.summary}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
