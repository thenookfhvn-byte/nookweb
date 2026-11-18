import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site";

export const Route = createFileRoute("/menu/")({
  head: () => ({
    meta: [
      { title: "The Menu – The Nook CoffeeHouse" },
      { name: "description", content: "Drinks, food, and bar-style pizza at The Nook CoffeeHouse in Fairhaven." },
    ],
  }),
  component: MenuHome,
});

function MenuHome() {
  return (
    <div className="chalkboard">
      <div className="mx-auto max-w-5xl px-4 pb-8 pt-10 sm:px-6">
        <h1 className="script-title text-center text-[clamp(2.8rem,1.5rem+4vw,4.25rem)] text-fg">The Menu</h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card to="/menu/drinks" title="Drinks" image="/drink-skooma.jpg" alt="Two Skooma drinks on the picnic table" />
          <Card to="/menu/food" title="Food" image="/food-linguica.jpg" alt="Linguiça rolls" />
          <Card to="/menu/pizza" title="Pizza" image="/pizza-cheese.jpg" alt="A cheese pizza from The Nook CoffeeHouse" wide />
        </div>
      </div>
      <SiteFooter shop="fairhaven" />
    </div>
  );
}

function Card({
  to,
  title,
  image,
  alt,
  wide,
}: {
  to: "/menu/drinks" | "/menu/food" | "/menu/pizza";
  title: string;
  image: string;
  alt: string;
  wide?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`group relative min-h-72 overflow-hidden rounded-xl border border-border bg-surface ${wide ? "sm:col-span-2" : ""}`}
    >
      <img src={image} alt={alt} className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      <h2 className="script-title absolute inset-x-0 bottom-6 text-center text-5xl text-fg sm:text-6xl">{title}</h2>
    </Link>
  );
}
