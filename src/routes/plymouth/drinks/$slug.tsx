import { createFileRoute, notFound } from "@tanstack/react-router";
import { ItemArticle } from "@/components/encyclopedia";
import { drinkOnMenu, drinkPage } from "@/lib/menu";

export const Route = createFileRoute("/plymouth/drinks/$slug")({
  loader: ({ params }) => {
    if (!drinkOnMenu("plymouth", params.slug)) throw notFound();
    const page = drinkPage(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.page.name} – The Nook Plymouth` : "Drink – The Nook Plymouth" },
      {
        name: "description",
        content: `${loaderData?.page.name ?? "A drink"} at The Nook Plymouth, 2235 State Road, Plymouth, Massachusetts.`,
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { page } = Route.useLoaderData();
  return <ItemArticle shop="plymouth" kind="drinks" page={page} />;
}
