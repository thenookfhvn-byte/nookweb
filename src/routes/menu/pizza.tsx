import { createFileRoute } from "@tanstack/react-router";
import classic from "@/data/classic.json";
import { PricedPage } from "@/routes/menu/food";

export const Route = createFileRoute("/menu/pizza")({
  head: () => ({
    meta: [
      { title: "Pizza Menu – The Nook Fairhaven" },
      { name: "description", content: "Bar-style pizza at The Nook CoffeeHouse, 58 Washington Street, Fairhaven, Massachusetts." },
    ],
  }),
  component: Pizza,
});

function Pizza() {
  return (
    <div>
      <PricedPage
        kicker="Weekend pizza"
        title="THAT NOOK CRUST"
        tagline="Cheddar–mozzarella blend pushed into the sides of the dough for a Cheez-It laced edge, topped with our Sea Salt Sprinkle."
        note="Call it in or DoorDash it. Weekend pizza runs Friday and Saturday until 2 PM, Sunday until 2 PM."
        extra="(774) 202-7444"
        items={classic.pizza}
      />
    </div>
  );
}
