import { createFileRoute } from "@tanstack/react-router";
import { Cake, Coffee, UtensilsCrossed } from "lucide-react";
import { shops } from "@/data/locations";
import { HoursPanel, MenuTile, PlaceFacts, SiteFooter, SocialRow } from "@/components/site";

export const Route = createFileRoute("/fairhaven/")({
  head: () => ({
    meta: [
      { title: "The Nook Fairhaven – Specialty Coffee & Bakery" },
      {
        name: "description",
        content:
          "The Nook CoffeeHouse at 58 Washington Street, Fairhaven. Linguica rolls, specialty coffee, and a decade of the shop.",
      },
    ],
  }),
  component: FairhavenHome,
});

function FairhavenHome() {
  const shop = shops.fairhaven;
  return (
    <div className="chalkboard min-h-dvh">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pt-10">
        <SocialRow shop="fairhaven" />
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.28em] text-muted">
          {shop.town}, {shop.state}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">The Nook CoffeeHouse</h1>
        <p className="mt-3 max-w-xl text-muted">{shop.visitBlurb}</p>
        <PlaceFacts shop={shop} />
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <MenuTile to="/fairhaven/food" label="Food menu" icon={<UtensilsCrossed className="size-10" />} />
          <MenuTile to="/fairhaven/drinks" label="Drink menu" icon={<Coffee className="size-10" />} />
          <MenuTile to="/fairhaven/cakes" label="Custom cakes" icon={<Cake className="size-10" />} />
          <MenuTile to="/fairhaven/cupcakes" label="Custom cupcakes" icon={<CupcakeIcon />} />
        </div>
        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <img
              src="/fairhaven-storefront.jpg"
              alt="The Nook CoffeeHouse on Washington Street in Fairhaven"
              className="w-full grayscale"
            />
          </div>
          <HoursPanel shop="fairhaven" />
        </div>
      </div>
      <SiteFooter shop="fairhaven" />
    </div>
  );
}

function CupcakeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-10" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3.5c.4 1 .2 1.8-.2 2.4" />
      <path d="M8.2 10.2c.2-2.4 1.7-4.2 3.8-4.2s3.6 1.8 3.8 4.2" />
      <path d="M7.4 10.4c-1.3.2-2.2 1.2-2.2 2.4 0 1.5 1.4 2.6 3.2 2.6h7.2c1.8 0 3.2-1.1 3.2-2.6 0-1.2-.9-2.2-2.2-2.4" />
      <path d="M7.2 13.2 8.6 20.5h6.8l1.4-7.3" />
    </svg>
  );
}
