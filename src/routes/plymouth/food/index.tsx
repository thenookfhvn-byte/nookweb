import { createFileRoute } from "@tanstack/react-router";
import { FoodEncyclopedia } from "@/components/encyclopedia";

export const Route = createFileRoute("/plymouth/food/")({
  head: () => ({
    meta: [
      { title: "Food – The Nook Plymouth" },
      {
        name: "description",
        content: "Linguica rolls, croissants, and LVLUP breakfast sandwiches at The Nook Plymouth.",
      },
    ],
  }),
  component: () => <FoodEncyclopedia shop="plymouth" />,
});
