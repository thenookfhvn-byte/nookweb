import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import slides from "@/data/cakes.json";
import { shops } from "@/data/locations";
import { asset } from "@/lib/menu";
import { SiteFooter } from "@/components/site";

const inquiry = `mailto:${shops.fairhaven.email}?subject=Custom%20Cake%20Inquiry&body=${encodeURIComponent(
  [
    "Name:",
    "Phone number:",
    "Email:",
    "Best time to contact:",
    "Date needed:",
    "Is Delivery Needed?:",
    "Occasion:",
    "For how many people?:",
    "Cake flavor:",
    "Filling flavor:",
    "Buttercream flavor:",
    "Allergies:",
    "Anything else I need to know:",
    "(If you have any photos you would like us to see for inspiration please attach to this email)",
  ].join("\n"),
)}`;

export const Route = createFileRoute("/fairhaven/cakes")({
  head: () => ({
    meta: [
      { title: "Custom cakes – The Nook Fairhaven" },
      { name: "description", content: "Kake by Katie. Custom cakes from The Nook CoffeeHouse in Fairhaven." },
    ],
  }),
  component: Cakes,
});

function Cakes() {
  return (
    <div className="chalkboard min-h-dvh">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <p className="text-center text-xs font-medium uppercase tracking-[0.28em] text-muted">Fairhaven</p>
        <h1 className="mt-4">
          <img src="/cakes/kake-logo.png" alt="Kake by Katie" className="fade-in mx-auto w-full max-w-md" />
        </h1>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center text-muted">
          <p>We've been lucky. You've let us into your celebrations, and into the memories that come with them. That is the part we care about most.</p>
          <p>Each cake is made just for you. The kitchen is small, so a little notice goes a long way.</p>
        </div>
        <Gallery slides={slides} label="cake" />
        <h2 className="script-title mt-16 text-center text-[clamp(2.4rem,1.3rem+3vw,3.5rem)] text-fg">Request a cake</h2>
        <p className="mt-2 text-center text-sm text-muted italic">
          Opens an email with the questions already started. Fill them in and press send.
        </p>
        <div className="mx-auto mt-6 max-w-xl">
          <a href={inquiry} className="block w-full rounded-lg bg-fg px-4 py-3 text-center font-medium text-primary-fg hover:bg-accent">
            Request a cake
          </a>
          <p className="mt-3 text-center text-sm text-muted">Subject is Custom Cake Inquiry. It goes to {shops.fairhaven.email}.</p>
        </div>
      </div>
      <SiteFooter shop="fairhaven" />
    </div>
  );
}

export function Gallery({ slides, label }: { slides: { src: string; alt: string; caption?: string }[]; label: string }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index] ?? slides[0];
  if (!slide) return null;
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <img src={asset(slide.src)} alt={slide.alt} className="aspect-[4/3] w-full object-cover" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          className="min-h-12 rounded-full border border-border px-4 text-sm text-fg hover:bg-raised"
          onClick={() => setIndex((current) => (current - 1 + slides.length) % slides.length)}
        >
          Previous {label}
        </button>
        <p className="text-center text-sm text-ink">{slide.caption}</p>
        <button
          type="button"
          className="min-h-12 rounded-full border border-border px-4 text-sm text-fg hover:bg-raised"
          onClick={() => setIndex((current) => (current + 1) % slides.length)}
        >
          Next {label}
        </button>
      </div>
      <p className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-subtle">
        {index + 1} / {slides.length}
      </p>
    </div>
  );
}
