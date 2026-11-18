import { createFileRoute } from "@tanstack/react-router";
import { DrinkEncyclopedia } from "@/components/encyclopedia";

export const Route = createFileRoute("/plymouth/drinks/")({
  head: () => ({
    meta: [
      { title: "Drinks – The Nook Plymouth" },
      {
        name: "description",
        content: "The drink menu at The Nook Plymouth, a drive-thru coffee shop at 2235 State Road.",
      },
    ],
  }),
  component: () => <DrinkEncyclopedia shop="plymouth" />,
});
