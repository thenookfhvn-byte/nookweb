import { Link } from "@tanstack/react-router";
import type { ShopId } from "@/data/locations";
import {
  asset,
  catalogs,
  drinkHref,
  drinkPage,
  foodHref,
  foodPage,
  type DrinkCategory,
  type FoodCategory,
  type ItemPage,
  type Meter,
  type Step,
} from "@/lib/menu";
import { SiteFooter } from "@/components/site";

export function FoodEncyclopedia({ shop }: { shop: ShopId }) {
  const menu = catalogs(shop).food;
  return (
    <div className="chalkboard min-h-dvh">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pt-10">
        <h1 className="sr-only">Encyclopedia of Nook Food</h1>
        <MenuCrawl shop={shop} />
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="encyc-frame">
            <img
              src="/encyclopedia-food.jpg"
              alt="A chalk drawing titled Encyclopedia of Nook Food, with cookbooks, a bakery roll, and baking notes"
              className="h-auto w-full"
            />
          </div>
          <section className="encyc-panel px-5 py-6 sm:px-7 sm:py-7">
            {menu.intro ? <p className="mb-8 max-w-xl text-base leading-relaxed text-ink">{menu.intro}</p> : null}
            {menu.categories.map((category, index) => (
              <FoodGroup key={category.title} category={category} shop={shop} first={index === 0} />
            ))}
          </section>
        </div>
      </div>
      <SiteFooter shop={shop} />
    </div>
  );
}

function FoodGroup({ category, shop, first }: { category: FoodCategory; shop: ShopId; first: boolean }) {
  return (
    <div className={`${first ? "" : "mt-8"} ${category.sometimes ? "mt-10 border border-dashed border-pepper/50 px-4 py-4" : ""}`}>
      <h2 className="flex items-baseline gap-3">
        <span className={`font-serif leading-none ${category.sometimes ? "text-3xl text-muted" : "text-4xl text-pepper"}`}>
          {category.letter}
        </span>
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-muted">{category.title}</span>
      </h2>
      {category.sometimes ? (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Some of our customer favorites are either seasonal or “sometimes” items.
        </p>
      ) : null}
      <ul className="mt-2">
        {category.foods.map((food) => (
          <li key={food.slug} className={category.sometimes ? "border-b border-dashed border-border" : "border-b border-border"}>
            <Link
              to={foodHref(shop, food.slug)}
              className="group flex items-baseline justify-between gap-3 py-3"
            >
              <span
                className={`font-serif text-xl tracking-wide transition-colors duration-150 group-hover:text-pepper ${
                  category.sometimes ? "font-medium text-ink" : "font-semibold text-fg"
                }`}
              >
                {food.name}
              </span>
              <span aria-hidden="true" className="text-pepper opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DrinkEncyclopedia({ shop }: { shop: ShopId }) {
  const menu = catalogs(shop).drinks;
  const slides = menu.slides ?? [];
  return (
    <div className="chalkboard min-h-dvh">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pt-10">
        <h1 className="sr-only">Encyclopedia of Nook Drinks</h1>
        <MenuCrawl shop={shop} />
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="encyc-frame">
            {slides[0] ? (
              <img src={asset(slides[0].src)} alt={slides[0].alt} className="h-auto w-full object-cover" />
            ) : (
              <img src="/encyclopedia-chalkboard.jpg" alt="" className="h-auto w-full" />
            )}
          </div>
          <section className="encyc-panel px-5 py-6 sm:px-7 sm:py-7">
            {menu.categories.map((category, index) => (
              <DrinkGroup key={category.title} category={category} shop={shop} first={index === 0} />
            ))}
          </section>
        </div>
      </div>
      <SiteFooter shop={shop} />
    </div>
  );
}

function DrinkGroup({ category, shop, first }: { category: DrinkCategory; shop: ShopId; first: boolean }) {
  return (
    <div className={first ? "" : "mt-8"}>
      <h2 className="flex items-baseline gap-3">
        <span className="font-serif text-4xl leading-none text-pepper">{category.letter}</span>
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-muted">{category.title}</span>
      </h2>
      <ul className="mt-2">
        {category.drinks.map((drink) => (
          <li key={drink.slug} className="border-b border-border">
            <Link to={drinkHref(shop, drink.slug)} className="group flex items-baseline justify-between gap-3 py-3">
              <span className="font-serif text-xl font-semibold tracking-wide text-fg transition-colors duration-150 group-hover:text-pepper">
                {drink.name}
              </span>
              <span aria-hidden="true" className="text-pepper opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuCrawl({ shop }: { shop: ShopId }) {
  const { food, drinks } = catalogs(shop);
  const town = shop === "plymouth" ? "Plymouth" : "Fairhaven";
  return (
    <div className="sr-only">
      <h2>{town} menu</h2>
      <p>
        {town} breakfast is linguica rolls, croissants, and a LVLUP breakfast sandwich.
        {shop === "fairhaven"
          ? " The Nook CoffeeHouse, 58 Washington Street, Fairhaven."
          : " The Nook Plymouth drive-thru, 2235 State Road, Plymouth."}
      </p>
      {food.categories.map((category) => (
        <div key={category.title}>
          <h3>{category.title}</h3>
          <ul>
            {category.foods.map((item) => (
              <li key={item.slug}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
      {drinks.categories.map((category) => (
        <div key={category.title}>
          <h3>{category.title}</h3>
          <ul>
            {category.drinks.map((item) => (
              <li key={item.slug}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ItemArticle({
  shop,
  kind,
  page,
}: {
  shop: ShopId;
  kind: "food" | "drinks";
  page: ItemPage;
}) {
  const back = kind === "food" ? (shop === "plymouth" ? "/plymouth/food" : "/fairhaven/food") : shop === "plymouth" ? "/plymouth/drinks" : "/fairhaven/drinks";
  const backLabel = kind === "food" ? "Encyclopedia of Nook: Food" : "Encyclopedia of Nook: Drinks";
  const images = page.images?.length ? page.images : page.image ? [{ src: page.image, alt: page.imageAlt ?? page.name }] : [];
  return (
    <div className="chalkboard min-h-dvh">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
        <Link to={back} className="text-[0.7rem] font-medium uppercase tracking-[0.34em] text-pepper underline-offset-4 hover:underline">
          {backLabel}
        </Link>
        <div className="mt-4 flex items-center justify-between gap-4">
          <h1 className="drink-title text-fg">{page.name}</h1>
          {page.ribbon ? <PrizeRibbon label={page.ribbon} /> : null}
        </div>
        <div className="mt-4 h-px w-28 bg-pepper" />
        {page.hotOrIced || page.hotOnly || page.icedOnly ? (
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.28em] text-muted">
            {page.hotOnly ? "Hot" : page.icedOnly ? "Iced" : "Hot or iced"}
          </p>
        ) : null}
        {images.length > 0 ? (
          <div
            className={`mt-6 grid gap-2 ${
              page.gallery === "row" || images.length > 3 ? "max-w-xl grid-cols-2 sm:grid-cols-4" : images.length > 1 ? "max-w-xl grid-cols-3" : "max-w-xl"
            }`}
          >
            {images.map((image) => (
              <img
                key={image.src}
                src={asset(image.src)}
                alt={image.alt}
                className={
                  images.length === 1 && page.imageWide
                    ? "w-full rounded-xl border border-border"
                    : images.length === 1
                      ? "size-44 rounded-xl border border-border object-cover"
                      : "aspect-square w-full rounded-xl border border-border object-cover"
                }
              />
            ))}
          </div>
        ) : null}
        {page.paragraphs?.length ? (
          <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-ink">
            {page.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <WikiText shop={shop} text={paragraph} />
              </p>
            ))}
          </div>
        ) : null}
        {page.stageNote ? <p className="mt-4 max-w-xl text-sm text-muted">{page.stageNote}</p> : null}
        {page.steps?.length ? <Steps shop={shop} steps={page.steps} /> : null}
        {page.flavors?.length ? (
          <div className="mt-8 max-w-xl">
            {page.flavorLead ? <p className="text-base text-ink">{page.flavorLead}</p> : null}
            <ul className="mt-3 flex flex-wrap gap-2">
              {page.flavors.map((flavor) => (
                <li key={flavor} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-ink">
                  {flavor}
                </li>
              ))}
            </ul>
            {page.flavorNote ? <p className="mt-3 text-sm text-muted">{page.flavorNote}</p> : null}
          </div>
        ) : null}
        {page.meter?.length ? <Meters meters={page.meter} /> : null}
        {page.fact ? (
          <aside className="mt-8 max-w-xl border-l-2 border-pepper pl-4 text-sm leading-relaxed text-muted">{page.fact}</aside>
        ) : null}
        <div className="mt-14 flex justify-center">
          <Link
            to={back}
            className="inline-flex items-center rounded-full border border-pepper px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-pepper transition-colors duration-150 hover:bg-pepper hover:text-white"
          >
            Back to encyclopedia
          </Link>
        </div>
      </div>
    </div>
  );
}

function Steps({ shop, steps }: { shop: ShopId; steps: Step[] }) {
  return (
    <ol className="mt-8 max-w-xl space-y-6">
      {steps.map((step, index) => (
        <li key={step.label} className="flex gap-4">
          <span className="w-8 shrink-0 pt-0.5 text-sm font-medium tracking-[0.2em] text-pepper">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            {step.finale ? (
              <div className="flex items-center gap-3 border border-pepper/40 bg-surface px-4 py-3">
                <span className="text-2xl text-pepper" aria-hidden="true">
                  ↑
                </span>
                <p className="text-2xl text-fg">{step.label}</p>
              </div>
            ) : (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">{step.label}</p>
                {step.choices ? (
                  <ul className={`mt-3 grid gap-2 ${choiceCols(step.choices.length)}`}>
                    {step.choices.map((choice) => (
                      <li key={choice.name}>
                        {choice.slug && foodOn(shop, choice.slug) ? (
                          <Link to={foodHref(shop, choice.slug)} className={choiceClass}>
                            {choice.name}
                          </Link>
                        ) : (
                          <span className={choiceClass}>{choice.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function foodOn(shop: ShopId, slug: string) {
  return catalogs(shop).food.categories.some((category) => category.foods.some((food) => food.slug === slug));
}

const choiceClass =
  "flex h-full min-h-14 items-center justify-center border border-border bg-surface px-3 py-3 text-center text-sm leading-snug text-ink transition-colors hover:border-pepper";

function choiceCols(count: number) {
  if (count === 2) return "grid-cols-2";
  if (count === 3) return "grid-cols-1 sm:grid-cols-3";
  return "grid-cols-2 sm:grid-cols-3";
}

function Meters({ meters }: { meters: Meter[] }) {
  return (
    <ul className="mt-8 max-w-xl space-y-4">
      {meters.map((meter) => (
        <li key={meter.label}>
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted">{meter.label}</span>
          </div>
          <p className="mt-1 text-sm text-ink">{meter.detail}</p>
          {typeof meter.level === "number" ? (
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-raised">
              <div className="h-full bg-pepper" style={{ width: `${Math.max(0, Math.min(100, meter.level))}%` }} />
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function WikiText({ shop, text }: { shop: ShopId; text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[\[([^|\]]+)\|([^\]]+)\]\]$/);
        if (!match) return <span key={index}>{part}</span>;
        const [, label, target] = match;
        const className = "text-pepper underline decoration-pepper/40 underline-offset-4 hover:decoration-pepper";
        if (target?.startsWith("http")) {
          return (
            <a key={index} href={target} target="_blank" rel="noreferrer" className={className}>
              {label}
            </a>
          );
        }
        const href = foodPage(target ?? "")
          ? foodHref(shop, target ?? "")
          : drinkPage(target ?? "")
            ? drinkHref(shop, target ?? "")
            : foodHref(shop, target ?? "");
        return (
          <Link key={index} to={href} className={className}>
            {label}
          </Link>
        );
      })}
    </>
  );
}

export function PrizeRibbon({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0" role="img" aria-label={label}>
      <svg viewBox="0 0 200 192" className="h-32 w-32 drop-shadow-md sm:h-40 sm:w-40" aria-hidden="true">
        <defs>
          <linearGradient id="prize-star" x1="100" y1="12" x2="100" y2="178" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffe7a3" />
            <stop offset="0.42" stopColor="#f0b429" />
            <stop offset="1" stopColor="#b87412" />
          </linearGradient>
        </defs>
        <path
          d="M100 12 L124.7 70 L187.5 75.6 L139.9 117 L154.1 178.4 L100 146 L45.9 178.4 L60.1 117 L12.5 75.6 L75.3 70 Z"
          fill="url(#prize-star)"
          stroke="#6e4a0e"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <text x="100" y="108" textAnchor="middle" fill="#1a1208" fontFamily="Verdana, Geneva, sans-serif" fontSize="34" fontWeight="700">
          #1
        </text>
        <text x="100" y="126" textAnchor="middle" fill="#1a1208" fontFamily="Verdana, Geneva, sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.6">
          SELLER
        </text>
      </svg>
    </span>
  );
}
