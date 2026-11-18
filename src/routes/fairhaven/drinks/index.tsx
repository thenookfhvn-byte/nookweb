import { createFileRoute } from "@tanstack/react-router";
import { DrinkEncyclopedia } from "@/components/encyclopedia";

export const Route = createFileRoute("/fairhaven/drinks/")({
  head: () => ({
    meta: [
      { title: "Drinks – The Nook Fairhaven" },
      {
        name: "description",
        content: "Specialty coffee, the Painkiller, and the rest of the drink menu at The Nook CoffeeHouse in Fairhaven.",
      },
    ],
  }),
  component: () => <DrinkEncyclopedia shop="fairhaven" />,
});
