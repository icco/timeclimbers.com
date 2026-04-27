import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden border-b border-base-300/60">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-36 md:pb-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-base-content/15 bg-base-200/60 px-3 py-1 text-xs font-medium tracking-wide text-base-content/70 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Independent app studio
          </span>

          <h1 className="mt-8 text-5xl leading-[1.05] font-semibold tracking-tight text-balance md:text-7xl">
            We design and build the apps your team actually{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              ships
            </span>
            .
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-pretty text-base-content/70 md:text-xl">
            TimeClimbers is a small, senior studio for ambitious teams. We
            partner with founders and product leaders to ship web and mobile
            products in weeks, not quarters.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@timeclimbers.com?subject=New%20project"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-content transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-base-content/15 px-5 py-3 text-sm font-medium text-base-content transition-colors hover:border-base-content/40 hover:bg-base-200/80"
            >
              See selected work
            </a>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-x-10 gap-y-6 border-t border-base-300/60 pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-xs tracking-wide text-base-content/50 uppercase">
                Founded
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight">
                2024
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-base-content/50 uppercase">
                Engagements
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight">
                Senior&#8209;only
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-base-content/50 uppercase">
                Cadence
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight">
                Weeks, not quarters
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
