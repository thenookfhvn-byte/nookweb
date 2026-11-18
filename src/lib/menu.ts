import raw from "@/data/menu.json";
import type { ShopId } from "@/data/locations";

export type Shot = { src: string; alt: string };
export type FoodRef = { name: string; slug: string };
export type DrinkRef = { name: string; slug: string; kidFriendly?: boolean };
export type FoodCategory = {
  letter: string;
  title: string;
  sometimes?: boolean;
  foods: FoodRef[];
};
export type DrinkCategory = { letter: string; title: string; drinks: DrinkRef[] };
export type Catalog<T> = {
  shop: ShopId;
  title: string;
  intro?: string;
  slides?: Shot[];
  categories: T[];
};
export type Choice = { name: string; slug?: string };
export type Step = { label: string; choices?: Choice[]; finale?: boolean };
export type Meter = { label: string; detail: string; level?: number };
export type ItemPage = {
  slug: string;
  name: string;
  image?: string;
  imageAlt?: string;
  imageWide?: boolean;
  images?: Shot[];
  gallery?: string;
  ribbon?: string;
  paragraphs?: string[];
  fact?: string;
  steps?: Step[];
  meter?: Meter[];
  flavors?: string[];
  flavorLead?: string;
  flavorNote?: string;
  hotOrIced?: boolean;
  hotOnly?: boolean;
  icedOnly?: boolean;
  stageNote?: string;
};

type MenuFile = {
  Xh: Catalog<DrinkCategory>;
  Zh: Catalog<DrinkCategory>;
  Qh: Record<string, ItemPage>;
  ng: Catalog<FoodCategory>;
  ig: Catalog<FoodCategory>;
  ag: Record<string, ItemPage>;
};

const menu = raw as MenuFile;

export function asset(src?: string) {
  if (!src) return "";
  return src.split("?")[0] ?? src;
}

export function catalogs(shop: ShopId) {
  return shop === "plymouth"
    ? { food: menu.ig, drinks: menu.Zh }
    : { food: menu.ng, drinks: menu.Xh };
}

export function foodPage(slug: string) {
  return menu.ag[slug];
}

export function drinkPage(slug: string) {
  return menu.Qh[slug];
}

export function foodOnMenu(shop: ShopId, slug: string) {
  return catalogs(shop).food.categories.some((category) =>
    category.foods.some((food) => food.slug === slug),
  );
}

export function drinkOnMenu(shop: ShopId, slug: string) {
  return catalogs(shop).drinks.categories.some((category) =>
    category.drinks.some((drink) => drink.slug === slug),
  );
}

export function foodHref(shop: ShopId, slug: string) {
  return shop === "plymouth" ? `/plymouth/food/${slug}` : `/fairhaven/food/${slug}`;
}

export function drinkHref(shop: ShopId, slug: string) {
  return shop === "plymouth" ? `/plymouth/drinks/${slug}` : `/fairhaven/drinks/${slug}`;
}
