export type ShopId = "fairhaven" | "plymouth";

export type Shop = {
  id: ShopId;
  town: string;
  state: string;
  path: string;
  street: string;
  address: string;
  phoneDisplay: string;
  phoneTel: string;
  email: string;
  maps: string;
  status: string;
  visitBlurb: string;
  hoursNote: string;
};

export const shops: Record<ShopId, Shop> = {
  fairhaven: {
    id: "fairhaven",
    town: "Fairhaven",
    state: "Massachusetts",
    path: "/fairhaven",
    street: "58 Washington Street",
    address: "58 Washington Street, Fairhaven, MA",
    phoneDisplay: "(774) 202-7444",
    phoneTel: "+17742027444",
    email: "thenookfhvn@gmail.com",
    maps: "https://www.google.com/maps/search/?api=1&query=58+Washington+Street+Fairhaven+MA",
    status: "Open",
    visitBlurb:
      "Opened in July 2016, The Nook CoffeeHouse is celebrating a decade of decadence. We are honored to be community leaders in this beautiful town, and to have built an amazing community over the years.",
    hoursNote: "Kitchen and bakery case change with the day.",
  },
  plymouth: {
    id: "plymouth",
    town: "Plymouth",
    state: "Massachusetts",
    path: "/plymouth",
    street: "2235 State Road",
    address: "2235 State Road, Plymouth, MA 02360",
    phoneDisplay: "TBA",
    phoneTel: "",
    email: "thenookply@gmail.com",
    maps: "https://www.google.com/maps/search/?api=1&query=2235+State+Road+Plymouth+MA+02360",
    status: "Opening November 2026",
    visitBlurb:
      "Scheduled to open in November 2026. A drive-thru Nook, with a walk-up window and very little inside. Built for to-go. The menu will not match Fairhaven, on purpose. If it cannot be made fast and handed out the window, it does not get a spot. Nobody came here to admire a line.",
    hoursNote: "Drive-through and the walk-up window.",
  },
};

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/thenookfhvn/" },
  { name: "Facebook", href: "https://www.facebook.com/nookfhvn/" },
  { name: "TikTok", href: "https://www.tiktok.com/@the.nook.coffeeho" },
  {
    name: "DoorDash",
    href: "https://www.doordash.com/store/the-nook-cafe-fairhaven-36384419/",
  },
];

export const plymouthFacebook =
  "https://www.facebook.com/people/The-Nook-CoffeeHouse-Plymouth/61594936845055/";
