import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About The Nook CoffeeHouse – Fairhaven" },
      {
        name: "description",
        content: "The Nook CoffeeHouse opened in 2016 at 58 Washington Street in Fairhaven, Massachusetts.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="chalkboard">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-muted">Since 2016</p>
        <h1 className="script-title mt-3 text-center text-[clamp(2.8rem,1.5rem+4vw,4.25rem)] text-fg">About Us</h1>
        <p className="tagline mx-auto mt-2 max-w-xl text-center text-tagline text-ink">
          Fairhaven’s First Coffee House.
          <br />
          Ten years on Washington St.
        </p>
        <div className="mt-12 overflow-hidden rounded-xl border border-border">
          <img
            src="/about-chalkboard.jpg"
            alt="The original Nook CoffeeHouse chalkboard, from when the shop opened in 2016"
            className="max-h-[32rem] w-full object-cover object-center"
          />
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
            <p>
              The Nook CoffeeHouse opened in 2016 at 58 Washington Street. A longtime Fairhaven shop built the way we would actually want to go. Video games on the tables. Guitars on the wall. Comics, movies, wrestling, action figures. Big kids with adult money and a serious attitude about quality, wrapped in a loving and fun atmosphere.
            </p>
            <p>
              There were no coffeehouses like this in town when we started. The first menu was small: a scientific approach to coffee, and a handful of baked goods in the case every day. Breakfast sandwiches came later. Linguica rolls became the thing people drive for. Bar-style pizza showed up on weekends. The drinks got weirder, on purpose — the Painkiller, the Aeroccino, the Local Buzz, Skooma — because a regular cup was never going to be enough.
            </p>
            <p>
              Ten years in, the important part is still the same. Regulars who brought their friends. Kids who weren’t born yet when the doors opened, now old enough to order their own drink. Fathers and sons on Pac-Man. First responders, teachers, nurses. South Coast Coffee Magazine once called it the most scientific coffee they had ever had. The Nook CoffeeHouse is more than a cup of coffee. It has always been about you and us.
            </p>
          </div>
          <figure className="overflow-hidden rounded-xl border border-border bg-surface">
            <img src="/about-katie.jpg" alt="Behind the counter at The Nook CoffeeHouse" className="aspect-[16/10] w-full object-cover object-center" />
            <figcaption className="px-5 py-4 text-sm text-subtle">
              Behind the counter — bakery case, cream cheese frosting, and a morning that still looks like that.
            </figcaption>
          </figure>
        </div>
        <blockquote className="mx-auto mt-16 max-w-3xl border-l-2 border-pepper pl-6">
          <p className="font-serif text-2xl italic leading-snug text-fg sm:text-3xl">
            You will feel like you stepped into our living room. Because you have.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted">The Nook CoffeeHouse</p>
        </blockquote>
        <h2 className="script-title mt-20 text-center text-[clamp(2.4rem,1.3rem+3vw,3.5rem)] text-fg">What We Specialize In</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Specialty
            title="Coffee"
            body="Espresso pulled for the middle notes. Dehydrated crystals. Cold-pressed mocha java. Cultured butter in the biscuits. Nothing from a chain recipe book."
          />
          <Specialty
            title="The case"
            body="Hand-rolled croissants with Plugra butter. Linguica rolls finished with our Sea Salt Sprinkle. Muffins, pudding, focaccia — whatever the case is that morning."
          />
          <Specialty
            title="Pizza"
            body="Slinging bar-style pizzas that are just a little different. 12-inch Nook crust, cheddar–mozzarella blend, Sea Salt Sprinkle. Call it in or DoorDash it."
          />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <img src="/food-linguica.jpg" alt="Linguica rolls from The Nook CoffeeHouse" className="aspect-[16/10] w-full rounded-xl border border-border object-cover" />
          <img src="/drink-painkiller.jpg" alt="A signature drink from The Nook CoffeeHouse" className="aspect-[16/10] w-full rounded-xl border border-border object-cover" />
          <img src="/about-kitchen.jpg" alt="The championship belt on the picnic table at The Nook CoffeeHouse" className="aspect-[16/10] w-full rounded-xl border border-border object-cover object-[center_80%]" />
          <img src="/about-tarts.jpg" alt="Fresh fruit tarts from The Nook CoffeeHouse" className="aspect-[16/10] w-full rounded-xl border border-border object-cover" />
        </div>
        <p className="mt-6 text-center text-muted">The linguica rolls. The drinks. The championship belt. Katie’s fruit tarts.</p>
        <div className="mt-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link to="/fairhaven" className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-fg">
            Fairhaven
          </Link>
          <Link to="/plymouth" className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-surface px-6 text-base font-medium text-fg">
            Plymouth
          </Link>
        </div>
      </div>
      <SiteFooter shop="fairhaven" />
    </div>
  );
}

function Specialty({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-xl border border-border bg-surface px-6 py-8">
      <h3 className="font-serif text-2xl text-fg">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
    </article>
  );
}
