import { createFileRoute } from "@tanstack/react-router";
import classic from "@/data/classic.json";
import { PricedPage } from "@/routes/menu/food";

export const Route = createFileRoute("/menu/drinks")({
  head: () => ({
    meta: [
      { title: "Drink Menu – The Nook Fairhaven" },
      { name: "description", content: "Specialty coffee at The Nook CoffeeHouse, 58 Washington Street, Fairhaven, Massachusetts." },
    ],
  }),
  component: () => <PricedPage kicker="Fairhaven" title="The Drink Menu" items={classic.drinks} />,
});
