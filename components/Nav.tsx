import ThemeToggle from "@icco/react-common/ThemeToggle";
import Link from "next/link";

const navLinks = [
  { name: "What we build", href: "#capabilities" },
  { name: "How we work", href: "#process" },
  { name: "About", href: "#about" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-base-300/60 bg-base-100/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <Link
          href="/"
          className="flex items-baseline gap-2 text-base font-semibold tracking-tight"
        >
          <span className="text-base-content">TimeClimbers</span>
          <span
            aria-hidden
            className="hidden h-1 w-1 rounded-full bg-primary sm:block"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-base-content/70 transition-colors hover:text-base-content"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle className="swap swap-rotate text-base-content/70 hover:text-base-content" />
          <a
            href="mailto:hello@timeclimbers.com"
            className="hidden rounded-full border border-base-content/15 px-4 py-2 text-sm font-medium text-base-content transition-colors hover:border-base-content/40 hover:bg-base-200/80 sm:inline-flex"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
