import { createFileRoute, notFound } from "@tanstack/react-router";
import { ItemArticle } from "@/components/encyclopedia";
import { foodOnMenu, foodPage } from "@/lib/menu";

export const Route = createFileRoute("/fairhaven/food/$slug")({
  loader: ({ params }) => {
    if (!foodOnMenu("fairhaven", params.slug)) throw notFound();
    const page = foodPage(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData ? `${loaderData.page.name} – The Nook Fairhaven` : "Food – The Nook Fairhaven",
      },
      {
        name: "description",
        content: `${loaderData?.page.name ?? "Food"} at The Nook CoffeeHouse, 58 Washington Street, Fairhaven, Massachusetts.`,
      },
    ],
  }),
  component: FoodPage,
});

function FoodPage() {
  const { page } = Route.useLoaderData();
  return <ItemArticle shop="fairhaven" kind="food" page={page} />;
}
