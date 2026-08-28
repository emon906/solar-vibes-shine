import { useEffect, useState } from "react";
import { Menu, Phone, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#results", label: "Results" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b py-3" : "border-b border-transparent py-5",
      )}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[image:var(--gradient-solar)] shadow-glow">
            <Sun className="size-5 text-primary-foreground" strokeWidth={2.4} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-tight">
              Solar Vibes SA
            </span>
            <span className="block text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
              San Antonio, TX
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+12108919457"
            className="hidden items-center gap-2 rounded-full bg-[image:var(--gradient-solar)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] hover:shadow-glow sm:inline-flex"
          >
            <Phone className="size-4" strokeWidth={2.4} />
            (210) 891-9457
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mt-3 border-t px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+12108919457"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-solar)] px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="size-4" /> Call (210) 891-9457
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
