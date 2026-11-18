import { createFileRoute } from "@tanstack/react-router";
import slides from "@/data/cupcakes.json";
import { shops } from "@/data/locations";
import { SiteFooter } from "@/components/site";
import { Gallery } from "@/routes/fairhaven/cakes";

const inquiry = `mailto:${shops.fairhaven.email}?subject=Custom%20Cupcake%20Inquiry&body=${encodeURIComponent(
  [
    "Name:",
    "Phone number:",
    "Email:",
    "Best time to contact:",
    "Date needed:",
    "Is Delivery Needed?:",
    "Occasion:",
    "For how many people?:",
    "Cupcake flavor:",
    "Filling flavor:",
    "Buttercream flavor:",
    "Allergies:",
    "Anything else I need to know:",
    "(If you have any photos you would like us to see for inspiration please attach to this email)",
  ].join("\n"),
)}`;

export const Route = createFileRoute("/fairhaven/cupcakes")({
  head: () => ({
    meta: [
      { title: "Custom cupcakes – The Nook Fairhaven" },
      { name: "description", content: "Custom cupcakes from Kake by Katie at The Nook CoffeeHouse in Fairhaven." },
    ],
  }),
  component: Cupcakes,
});

function Cupcakes() {
  return (
    <div className="chalkboard min-h-dvh">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        <p className="text-center text-xs font-medium uppercase tracking-[0.28em] text-muted">Fairhaven</p>
        <h1 className="mt-4">
          <img src="/cakes/kake-logo.png" alt="Kake by Katie" className="fade-in mx-auto w-full max-w-md" />
        </h1>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center text-muted">
          <p>Sometimes a whole cake is just too much, or you want your own special portion for the party. These little cupcakes are exactly what will do the trick.</p>
          <p>Add them to a wedding, or set them out beside the cake so everyone gets their own.</p>
          <p>We can fill them with creams and frostings. Lemon meringue, Bavarian cream, chocolate mousse, and more.</p>
          <p>Everybody loves a cupcake.</p>
        </div>
        <Gallery slides={slides} label="cupcake" />
        <h2 className="script-title mt-16 text-center text-[clamp(2.4rem,1.3rem+3vw,3.5rem)] text-fg">Request cupcakes</h2>
        <p className="mt-2 text-center text-sm text-muted italic">
          Opens an email with the questions already started. Fill them in and press send.
        </p>
        <div className="mx-auto mt-6 max-w-xl">
          <a href={inquiry} className="block w-full rounded-lg bg-fg px-4 py-3 text-center font-medium text-primary-fg hover:bg-accent">
            Request cupcakes
          </a>
          <p className="mt-3 text-center text-sm text-muted">
            Subject is Custom Cupcake Inquiry. It goes to {shops.fairhaven.email}.
          </p>
        </div>
      </div>
      <SiteFooter shop="fairhaven" />
    </div>
  );
}
