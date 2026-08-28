import { Mail, MapPin, Phone, Sun } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-[color:var(--surface)]/40">
      <div className="bg-dawn pointer-events-none absolute inset-x-0 top-0 h-40 opacity-40" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-[image:var(--gradient-solar)]">
              <Sun className="size-5 text-primary-foreground" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg font-semibold">Solar Vibes SA</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Professional solar panel cleaning, maintenance and protection for homeowners and
            businesses across San Antonio and Texas. Insured, background-checked crews.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            Se habla español — our team serves you in English &amp; Spanish.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>Solar Panel Cleaning</li>
            <li>System Maintenance</li>
            <li>Animal &amp; Bird Protection</li>
            <li>Leak Inspections</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href="tel:+12108919457"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="size-4 text-primary" /> +1 210-891-9457
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Mail className="size-4 text-primary" /> info@solarvibessa.com
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-primary" /> San Antonio &amp; all of Texas
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-3 border-t px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Solar Vibes SA. All rights reserved.</p>
        <p>Licensed &amp; insured · Serving Texas since 2018</p>
      </div>
    </footer>
  );
}
