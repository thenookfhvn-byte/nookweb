import { createFileRoute } from "@tanstack/react-router";
import classic from "@/data/classic.json";
import { asset } from "@/lib/menu";
import { SiteFooter } from "@/components/site";

export const Route = createFileRoute("/menu/food")({
  head: () => ({
    meta: [
      { title: "Food Menu – The Nook Fairhaven" },
      { name: "description", content: "Linguica rolls, croissants, and LVLUP breakfast sandwiches at The Nook CoffeeHouse in Fairhaven." },
    ],
  }),
  component: FoodMenu,
});

function FoodMenu() {
  return (
    <PricedPage
      kicker="Fairhaven"
      title="The Food Menu"
      note="Add a fried egg and cheese, plus bacon or sausage, to a linguica roll, cheese roll, croissant, biscuit, or bagel. That is a LVLUP."
      extra="Finish it with Trop Guac, bacon habanero jam, Fireflower buffalo sauce, or our house hot sauce."
      items={classic.food}
    />
  );
}

export type ClassicItem = {
  name: string;
  image?: string;
  blurb?: string;
  price: string;
  badge?: string;
  flavors?: string[];
};

export function PricedPage({
  kicker,
  title,
  tagline,
  note,
  extra,
  items,
}: {
  kicker: string;
  title: string;
  tagline?: string;
  note?: string;
  extra?: string;
  items: ClassicItem[];
}) {
  return (
    <div className="chalkboard">
      <div className="mx-auto max-w-3xl px-4 pb-8 pt-10 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-muted">{kicker}</p>
        <h1 className="mt-3 text-center text-4xl font-bold text-fg sm:text-5xl">{title}</h1>
        {tagline ? <p className="tagline mx-auto mt-2 max-w-2xl text-center text-tagline text-ink">{tagline}</p> : null}
        {note ? <p className="mx-auto mt-5 max-w-2xl text-center text-muted">{note}</p> : null}
        {extra ? <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-subtle">{extra}</p> : null}
        <ul className="mt-10 space-y-6">
          {items.map((item) => (
            <li key={item.name} className="overflow-hidden rounded-xl border border-border bg-surface sm:grid sm:grid-cols-[180px_1fr]">
              {item.image ? <img src={asset(item.image)} alt="" className="h-44 w-full object-cover sm:h-full" /> : null}
              <div className="px-5 py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-serif text-2xl text-fg">{item.name}</h2>
                  {item.badge ? (
                    <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-pepper">{item.badge}</span>
                  ) : null}
                </div>
                {item.blurb ? <p className="mt-2 text-sm leading-relaxed text-ink">{item.blurb}</p> : null}
                <p className="mt-3 text-sm font-medium text-fg">{item.price}</p>
                {item.flavors?.length ? (
                  <p className="mt-3 text-sm text-muted">{item.flavors.join(" · ")}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <SiteFooter shop="fairhaven" />
    </div>
  );
}
