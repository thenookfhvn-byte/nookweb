import { createFileRoute, notFound } from "@tanstack/react-router";
import { ItemArticle } from "@/components/encyclopedia";
import { foodOnMenu, foodPage } from "@/lib/menu";

export const Route = createFileRoute("/plymouth/food/$slug")({
  loader: ({ params }) => {
    if (!foodOnMenu("plymouth", params.slug)) throw notFound();
    const page = foodPage(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.page.name} – The Nook Plymouth` : "Food – The Nook Plymouth" },
      {
        name: "description",
        content: `${loaderData?.page.name ?? "Food"} at The Nook Plymouth, 2235 State Road, Plymouth, Massachusetts.`,
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { page } = Route.useLoaderData();
  return <ItemArticle shop="plymouth" kind="food" page={page} />;
}
