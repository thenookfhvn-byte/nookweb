import { createFileRoute, notFound } from "@tanstack/react-router";
import { ItemArticle } from "@/components/encyclopedia";
import { drinkOnMenu, drinkPage } from "@/lib/menu";

export const Route = createFileRoute("/fairhaven/drinks/$slug")({
  loader: ({ params }) => {
    if (!drinkOnMenu("fairhaven", params.slug)) throw notFound();
    const page = drinkPage(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.page.name} – The Nook Fairhaven` : "Drink – The Nook Fairhaven" },
      {
        name: "description",
        content: `${loaderData?.page.name ?? "A drink"} at The Nook CoffeeHouse, 58 Washington Street, Fairhaven, Massachusetts.`,
      },
    ],
  }),
  component: DrinkItem,
});

function DrinkItem() {
  const { page } = Route.useLoaderData();
  return <ItemArticle shop="fairhaven" kind="drinks" page={page} />;
}
