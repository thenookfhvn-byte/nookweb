import { createFileRoute } from "@tanstack/react-router";
import { Coffee, UtensilsCrossed } from "lucide-react";
import { shops } from "@/data/locations";
import { HoursPanel, MenuTile, PlaceFacts, SiteFooter, SocialRow } from "@/components/site";

export const Route = createFileRoute("/plymouth/")({
  head: () => ({
    meta: [
      { title: "The Nook Plymouth – Drive-Thru Coffee & Breakfast Sandwiches" },
      {
        name: "description",
        content:
          "Drive-thru coffee and breakfast sandwiches at The Nook Plymouth, 2235 State Road, Plymouth, Massachusetts. Walk-up window. Opening November 2026.",
      },
    ],
  }),
  component: PlymouthHome,
});

function PlymouthHome() {
  const shop = shops.plymouth;
  return (
    <div className="chalkboard min-h-dvh">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pt-10">
        <SocialRow shop="plymouth" />
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.28em] text-muted">
          {shop.town}, {shop.state}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">The Nook CoffeeHouse</h1>
        <p className="mt-3 max-w-xl text-muted">{shop.visitBlurb}</p>
        <PlaceFacts shop={shop} />
        <div className="mt-6 grid grid-cols-2 gap-4">
          <MenuTile to="/plymouth/food" label="Food menu" icon={<UtensilsCrossed className="size-10" />} />
          <MenuTile to="/plymouth/drinks" label="Drink menu" icon={<Coffee className="size-10" />} />
        </div>
        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <img
              src="/plymouth-storefront.jpg"
              alt="The Plymouth storefront in black and white, stamped location acquired"
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <HoursPanel shop="plymouth" />
        </div>
      </div>
      <SiteFooter shop="plymouth" />
    </div>
  );
}
