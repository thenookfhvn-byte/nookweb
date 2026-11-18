import { createFileRoute } from "@tanstack/react-router";
import { FoodEncyclopedia } from "@/components/encyclopedia";

export const Route = createFileRoute("/fairhaven/food/")({
  head: () => ({
    meta: [
      { title: "Food – The Nook Fairhaven" },
      {
        name: "description",
        content: "Linguica rolls, croissants, and LVLUP breakfast sandwiches at The Nook CoffeeHouse in Fairhaven.",
      },
    ],
  }),
  component: () => <FoodEncyclopedia shop="fairhaven" />,
});
