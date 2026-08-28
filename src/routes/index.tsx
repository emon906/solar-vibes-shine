import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bird,
  BadgeCheck,
  Droplets,
  Gauge,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { LazyVideo } from "@/components/LazyVideo";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

import heroPoster from "@/assets/hero-poster.jpg";
import texasWide from "@/assets/texas-wide.jpg";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceAnimal from "@/assets/service-animal.jpg";
import serviceLeak from "@/assets/service-leak.jpg";
import beforeImg from "@/assets/before-1.jpg";
import afterImg from "@/assets/after-1.jpg";
import splitImg from "@/assets/before-after-split.jpg";
import whyTeam from "@/assets/why-team.jpg";
import heroVideo from "@/assets/hero.mp4.asset.json";
import showcaseVideo from "@/assets/showcase.mp4.asset.json";
import texasVideo from "@/assets/texas.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solar Vibes SA | Solar Panel Cleaning in San Antonio, TX" },
      {
        name: "description",
        content:
          "Premium solar panel cleaning, maintenance, bird protection and leak inspections in San Antonio and across Texas. Insured crews, English & Spanish. Call (210) 891-9457.",
      },
      { property: "og:title", content: "Solar Vibes SA | Solar Panel Cleaning & Maintenance" },
      {
        property: "og:description",
        content:
          "Restore up to 30% lost output. Professional solar panel cleaning and maintenance across San Antonio and Texas.",
      },
    ],
  }),
  component: Home,
});

const PHONE = "+1 210-891-9457";
const TEL = "tel:+12108919457";

const services = [
  {
    icon: Droplets,
    title: "Solar Panel Cleaning",
    image: serviceCleaning,
    text: "Deionized pure-water cleaning with soft brushes — no chemicals, no scratches, no residue. Panels return to factory-level clarity.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Health Checks",
    image: serviceMaintenance,
    text: "Full inspection of wiring, inverters, junction boxes and racking, with a photo report and performance readings after every visit.",
  },
  {
    icon: Bird,
    title: "Animal & Bird Protection",
    image: serviceAnimal,
    text: "Stainless critter guard installed around the array to stop pigeons, squirrels and nesting damage — sealed clean and built to last.",
  },
  {
    icon: ShieldCheck,
    title: "Leak Inspections",
    image: serviceLeak,
    text: "Moisture testing and flashing checks around every mount and penetration, so a small roof leak never becomes a ceiling repair.",
  },
];

const stats = [
  { value: "30%", label: "Output typically lost to Texas dust & pollen" },
  { value: "2,400+", label: "Panels cleaned across South Texas" },
  { value: "4.9★", label: "Average customer rating" },
  { value: "100%", label: "Insured & background-checked crews" },
];

const process = [
  {
    step: "01",
    title: "Free Assessment",
    text: "We review your roof, array size and access by phone or a quick on-site visit, then quote a flat price.",
  },
  {
    step: "02",
    title: "Safe Setup",
    text: "Fall protection, roof padding and property covers go down before a single drop of water is used.",
  },
  {
    step: "03",
    title: "Pure-Water Clean",
    text: "Soft-brush wash with deionized water lifts dust, pollen and droppings — then dries spot-free.",
  },
  {
    step: "04",
    title: "Inspect & Report",
    text: "We check mounts, wiring and seals, then send before/after photos and a short health summary.",
  },
];

const reviews = [
  {
    name: "Marisol R.",
    area: "Alamo Heights",
    text: "Our production jumped the very next billing cycle. They were on time, respectful of the house, and explained everything in Spanish for my mother.",
  },
  {
    name: "Dylan K.",
    area: "Stone Oak",
    text: "Pigeons had nested under our array for two years. Solar Vibes cleaned it out, installed critter guard, and it has been silent ever since.",
  },
  {
    name: "Anthony P.",
    area: "New Braunfels",
    text: "The photo report alone was worth it — they caught a loose mount and a small leak before the summer storms hit. Genuinely professional outfit.",
  },
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* 1. Hero */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <div className="absolute inset-0">
            <LazyVideo src={heroVideo.url} poster={heroPoster} eager />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.14_0.014_68/0.94),oklch(0.14_0.014_68/0.72)_45%,oklch(0.14_0.014_68/0.35))]" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_top,var(--background),transparent)]" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24 sm:px-8">
            <Reveal className="max-w-3xl">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
                <Sparkles className="size-3.5 text-primary" />
                San Antonio &amp; statewide Texas · English &amp; Español
              </span>

              <h1 className="mt-8 font-display text-5xl leading-[0.95] font-semibold sm:text-6xl lg:text-7xl">
                Your panels were built
                <br />
                to catch <span className="text-solar-gradient">every ray.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Professional solar panel cleaning, maintenance and protection. We remove the Texas
                dust, pollen and droppings quietly stealing up to a third of your output.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={TEL}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[image:var(--gradient-solar)] px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-[1.03]"
                >
                  <Phone className="size-4" strokeWidth={2.5} />
                  Call {PHONE}
                </a>
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-border px-8 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-accent"
                >
                  Explore services
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 2. Trust / stats */}
        <section className="relative border-y bg-[color:var(--surface)]/30">
          <div className="mx-auto grid w-full max-w-7xl gap-px px-5 sm:px-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.value}
                delay={i * 90}
                className="border-border/60 px-2 py-12 md:border-l md:px-8 md:first:border-l-0"
              >
                <div className="font-display text-4xl font-semibold text-solar-gradient lg:text-5xl">
                  {s.value}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 3. Services */}
        <section id="services" className="relative py-28 lg:py-36">
          <div className="bg-dawn pointer-events-none absolute inset-x-0 top-0 h-96 opacity-60" />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
                Four services. One perfectly performing array.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Every visit is carried out by trained, insured technicians using equipment designed
                specifically for photovoltaic glass.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-7 md:grid-cols-2">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <article className="group h-full overflow-hidden rounded-3xl border bg-card shadow-panel transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        width={1200}
                        height={750}
                        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--card),transparent_60%)]" />
                    </div>
                    <div className="p-8">
                      <span className="grid size-11 place-items-center rounded-xl border border-primary/25 bg-primary/10">
                        <s.icon className="size-5 text-primary" strokeWidth={2.2} />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Full-width video showcase */}
        <section className="relative h-[70svh] min-h-[460px] overflow-hidden">
          <LazyVideo src={showcaseVideo.url} poster={splitImg} />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.14_0.014_68/0.95),oklch(0.14_0.014_68/0.35))]" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
              <Reveal className="max-w-2xl">
                <span className="eyebrow">Pure-water method</span>
                <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
                  No chemicals. No streaks. No scratched glass.
                </h2>
                <p className="mt-5 max-w-xl text-base text-muted-foreground">
                  Deionized water dries without leaving a single mineral spot, so panels stay clear
                  for longer between visits.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 5. Why Solar Vibes SA */}
        <section id="why" className="py-28 lg:py-36">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-solar)] opacity-15 blur-2xl" />
                <img
                  src={whyTeam}
                  alt="Solar Vibes SA technicians on a San Antonio rooftop at sunset"
                  loading="lazy"
                  width={1200}
                  height={1408}
                  className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-panel"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="eyebrow">Why Solar Vibes SA</span>
              <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
                A local crew that treats your roof like their own.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                We are a San Antonio company built around one belief: a solar system is an
                investment, and investments deserve maintenance. No subcontractors, no upsells — the
                same trained technicians every visit.
              </p>

              <ul className="mt-10 space-y-6">
                {[
                  {
                    icon: BadgeCheck,
                    title: "Fully insured & background checked",
                    text: "Documented safety procedures on every roof, residential or commercial.",
                  },
                  {
                    icon: Gauge,
                    title: "Measured, reported results",
                    text: "Before/after photos and production readings sent after each service.",
                  },
                  {
                    icon: Sun,
                    title: "Built for Texas conditions",
                    text: "Caliche dust, cedar pollen, hard water and heat — we plan for all of it.",
                  },
                ].map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10">
                      <f.icon className="size-5 text-primary" strokeWidth={2.2} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {f.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 6. Before / After gallery */}
        <section id="results" className="border-y bg-[color:var(--surface)]/30 py-28 lg:py-36">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">Real results</span>
              <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
                Before &amp; after, on real Texas rooftops.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              <Reveal className="lg:col-span-2">
                <figure className="group relative overflow-hidden rounded-3xl border shadow-panel">
                  <img
                    src={splitImg}
                    alt="Solar panel array half dirty and half professionally cleaned"
                    loading="lazy"
                    width={1408}
                    height={912}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,oklch(0.14_0.014_68/0.92),transparent)] p-7">
                    <span className="eyebrow">Same array, same day</span>
                    <p className="mt-2 font-display text-xl font-semibold">
                      Left: two years of buildup. Right: after one visit.
                    </p>
                  </figcaption>
                </figure>
              </Reveal>

              <div className="grid gap-6">
                {[
                  { img: beforeImg, tag: "Before", note: "Pollen, dust and bird droppings" },
                  { img: afterImg, tag: "After", note: "Spot-free, full sun exposure" },
                ].map((g, i) => (
                  <Reveal key={g.tag} delay={i * 120}>
                    <figure className="group relative overflow-hidden rounded-3xl border shadow-panel">
                      <img
                        src={g.img}
                        alt={`${g.tag} solar panel cleaning — ${g.note}`}
                        loading="lazy"
                        width={1200}
                        height={912}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]"
                      />
                      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-[linear-gradient(to_top,oklch(0.14_0.014_68/0.9),transparent)] p-5">
                        <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                          {g.tag}
                        </span>
                        <span className="text-xs text-muted-foreground">{g.note}</span>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Process */}
        <section id="process" className="py-28 lg:py-36">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">The process</span>
              <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
                Four calm steps, start to finish.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 90}>
                  <div className="group h-full border-t border-primary/25 pt-8 transition-colors duration-500 hover:border-primary lg:pr-8">
                    <span className="font-display text-sm font-semibold tracking-[0.2em] text-primary">
                      {p.step}
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Full-width visual with overlay text */}
        <section className="relative h-[65svh] min-h-[420px] overflow-hidden">
          <LazyVideo src={texasVideo.url} poster={texasWide} />
          <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_50%,oklch(0.14_0.014_68/0.55),oklch(0.14_0.014_68/0.92))]" />
          <div className="absolute inset-0 grid place-items-center px-5 text-center">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">San Antonio · Austin · Houston · Dallas</span>
              <h2 className="mt-5 font-display text-3xl font-semibold sm:text-5xl">
                Serving solar homes and businesses across Texas.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
                From single-home rooftops to commercial arrays, our crews travel statewide with the
                same standard of care.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 9. Reviews */}
        <section id="reviews" className="border-y bg-[color:var(--surface)]/30 py-28 lg:py-36">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">Customer reviews</span>
              <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
                Trusted by homeowners across South Texas.
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-7 lg:grid-cols-3">
              {reviews.map((r, i) => (
                <Reveal key={r.name} delay={i * 100}>
                  <blockquote className="glass h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                    <Quote className="size-7 text-primary/60" />
                    <p className="mt-6 leading-relaxed text-foreground/90">{r.text}</p>
                    <footer className="mt-8 flex items-center justify-between border-t pt-6">
                      <div>
                        <div className="font-display text-sm font-semibold">{r.name}</div>
                        <div className="text-xs text-muted-foreground">{r.area}</div>
                      </div>
                      <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="size-3.5 fill-primary text-primary" />
                        ))}
                      </div>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="relative overflow-hidden py-28 lg:py-36">
          <div className="bg-dawn pointer-events-none absolute inset-0 opacity-80" />
          <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
            <Reveal>
              <span className="eyebrow">Ready when you are</span>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] font-semibold sm:text-6xl">
                Let&apos;s get your panels
                <br />
                <span className="text-solar-gradient">back to full power.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base text-muted-foreground">
                Free quotes over the phone. Same-week scheduling across San Antonio. We speak
                English and Spanish.
              </p>
              <a
                href={TEL}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[image:var(--gradient-solar)] px-10 py-5 font-display text-base font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-[1.03]"
              >
                <Phone className="size-5" strokeWidth={2.5} />
                {PHONE}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
