import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CTA() {
  return (
    <section id="contact" className="bg-base-100">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="hero-gradient relative overflow-hidden rounded-3xl border border-base-300/60 bg-base-200/40 px-8 py-16 md:px-16 md:py-24">
          <div className="relative max-w-3xl">
            <span className="text-xs tracking-wide text-base-content/50 uppercase">
              Get in touch
            </span>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
              Want to talk to TimeClimbers?
            </h2>
            <p className="mt-6 max-w-xl text-base text-base-content/70 md:text-lg">
              We answer our own email. Drop us a line about a product, an
              opening, or just to say hello.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@timeclimbers.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-content transition-transform hover:-translate-y-0.5"
              >
                hello@timeclimbers.com
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
