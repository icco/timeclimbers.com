import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden border-b border-base-300/60">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-36 md:pb-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-base-content/15 bg-base-200/60 px-3 py-1 text-xs font-medium tracking-wide text-base-content/70 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            App studio
          </span>

          <h1 className="mt-8 text-5xl leading-[1.05] font-semibold tracking-tight text-balance md:text-7xl">
            We build modern apps people use{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              every day
            </span>
            .
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-pretty text-base-content/70 md:text-xl">
            TimeClimbers is a small software company making web and mobile
            applications. We design, build, and run the things we ship.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-content transition-transform hover:-translate-y-0.5"
            >
              What we build
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-base-content/15 px-5 py-3 text-sm font-medium text-base-content transition-colors hover:border-base-content/40 hover:bg-base-200/80"
            >
              About the company
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
                Platforms
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight">
                Web &middot; iOS &middot; Android
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-base-content/50 uppercase">
                Built on
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight">
                TypeScript &amp; Go
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
