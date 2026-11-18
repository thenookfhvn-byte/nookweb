import { i as __toESM } from "../_runtime.mjs";
import { J as notFound, S as require_jsx_runtime, Y as require_react, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as MapPin, n as TriangleAlert, o as Clock, r as Phone } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-ByMjOz0N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var shops = {
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
		visitBlurb: "Opened in July 2016, The Nook CoffeeHouse is celebrating a decade of decadence. We are honored to be community leaders in this beautiful town, and to have built an amazing community over the years.",
		hoursNote: "Kitchen and bakery case change with the day."
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
		visitBlurb: "Scheduled to open in November 2026. A drive-thru Nook, with a walk-up window and very little inside. Built for to-go. The menu will not match Fairhaven, on purpose. If it cannot be made fast and handed out the window, it does not get a spot. Nobody came here to admire a line.",
		hoursNote: "Drive-through and the walk-up window."
	}
};
var socials = [
	{
		name: "Instagram",
		href: "https://www.instagram.com/thenookfhvn/"
	},
	{
		name: "Facebook",
		href: "https://www.facebook.com/nookfhvn/"
	},
	{
		name: "TikTok",
		href: "https://www.tiktok.com/@the.nook.coffeeho"
	},
	{
		name: "DoorDash",
		href: "https://www.doordash.com/store/the-nook-cafe-fairhaven-36384419/"
	}
];
var plymouthFacebook = "https://www.facebook.com/people/The-Nook-CoffeeHouse-Plymouth/61594936845055/";
var weekday = {
	Sun: 0,
	Mon: 1,
	Tue: 2,
	Wed: 3,
	Thu: 4,
	Fri: 5,
	Sat: 6
};
var fairhavenWeek = [
	{
		open: 480,
		close: 840,
		label: "8 AM – 2 PM"
	},
	{
		open: 0,
		close: 0,
		label: "Closed"
	},
	{
		open: 0,
		close: 0,
		label: "Closed"
	},
	{
		open: 0,
		close: 0,
		label: "Closed"
	},
	{
		open: 480,
		close: 840,
		label: "8 AM – 2 PM"
	},
	{
		open: 360,
		close: 840,
		label: "6 AM – 2 PM"
	},
	{
		open: 360,
		close: 840,
		label: "6 AM – 2 PM"
	}
];
var fairhavenRows = [
	{
		days: "Monday – Wednesday",
		time: "Closed",
		match: [
			1,
			2,
			3
		]
	},
	{
		days: "Thursday",
		time: "8 AM – 2 PM",
		match: [4]
	},
	{
		days: "Friday – Saturday",
		time: "6 AM – 2 PM",
		match: [5, 6]
	},
	{
		days: "Sunday",
		time: "8 AM – 2 PM",
		match: [0]
	}
];
var plymouthOpens = {
	year: 2026,
	month: 11,
	day: 1
};
var plymouthWeek = [
	{
		open: 360,
		close: 720,
		label: "6 AM – 12 PM"
	},
	{
		open: 360,
		close: 720,
		label: "6 AM – 12 PM"
	},
	{
		open: 0,
		close: 0,
		label: "Closed"
	},
	{
		open: 360,
		close: 720,
		label: "6 AM – 12 PM"
	},
	{
		open: 360,
		close: 720,
		label: "6 AM – 12 PM"
	},
	{
		open: 360,
		close: 720,
		label: "6 AM – 12 PM"
	},
	{
		open: 360,
		close: 720,
		label: "6 AM – 12 PM"
	}
];
var plymouthRows = [
	{
		days: "Monday",
		time: "6 AM – 12 PM",
		match: [1]
	},
	{
		days: "Tuesday",
		time: "Closed",
		match: [2]
	},
	{
		days: "Wednesday – Sunday",
		time: "6 AM – 12 PM",
		match: [
			0,
			3,
			4,
			5,
			6
		]
	}
];
function parts(date, options) {
	const list = new Intl.DateTimeFormat("en-US", {
		timeZone: "America/New_York",
		...options
	}).formatToParts(date);
	const out = {};
	for (const part of list) if (part.type !== "literal") out[part.type] = part.value;
	return out;
}
function beforeOpen(date) {
	const p = parts(date, {
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	});
	return Number(p.year) * 1e4 + Number(p.month) * 100 + Number(p.day) < plymouthOpens.year * 1e4 + plymouthOpens.month * 100 + plymouthOpens.day;
}
function statusFor(week, date) {
	const p = parts(date, {
		weekday: "short",
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23"
	});
	const day = weekday[p.weekday ?? "Sun"] ?? 0;
	const minutes = Number(p.hour) * 60 + Number(p.minute);
	const today = week[day];
	return {
		open: minutes >= today.open && minutes < today.close && today.close > today.open,
		day,
		todayLabel: today.label,
		beforeOpen: false
	};
}
function shopStatus(shop, date = /* @__PURE__ */ new Date()) {
	if (shop === "plymouth") {
		const base = statusFor(plymouthWeek, date);
		const early = beforeOpen(date);
		return {
			...base,
			open: !early && base.open,
			beforeOpen: early
		};
	}
	return statusFor(fairhavenWeek, date);
}
function shopRows(shop) {
	return shop === "plymouth" ? plymouthRows : fairhavenRows;
}
function SiteHeader() {
	const path = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-16 grid-cols-[1fr_auto_1fr] items-center sm:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center px-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TownLink, {
						to: "/fairhaven",
						label: "Fairhaven",
						active: path.startsWith("/fairhaven")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "px-2",
					"aria-label": "The Nook CoffeeHouse home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: "",
						className: "h-12 w-12 object-contain sm:h-16 sm:w-16"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center px-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TownLink, {
						to: "/plymouth",
						label: "Plymouth",
						active: path.startsWith("/plymouth")
					})
				})
			]
		})
	});
}
function TownLink({ to, label, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		"aria-current": active ? "page" : void 0,
		className: `header-town transition-colors duration-150 ${active ? "text-pepper" : "text-muted hover:text-fg"}`,
		children: label
	});
}
function SocialRow({ shop }) {
	const links = shop === "plymouth" ? socials.filter((item) => item.name !== "DoorDash") : socials;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-wrap items-center justify-center gap-3",
		children: links.map((item) => {
			const href = shop === "plymouth" && item.name === "Facebook" ? plymouthFacebook : item.href;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href,
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex min-h-12 items-center rounded-full border border-border bg-surface px-4 text-sm font-medium text-fg transition-colors duration-150 hover:bg-raised",
				children: item.name
			}) }, item.name);
		})
	});
}
function SiteFooter({ shop }) {
	const place = shops[shop];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "social",
		className: "scroll-mt-24 border-t border-border px-4 py-10 text-center sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialRow, { shop }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display mt-8 text-3xl text-fg",
				children: "The Nook CoffeeHouse"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					"Gourmet CoffeeHouse · ",
					place.town,
					", MA"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-subtle",
				children: [
					place.address,
					" · ",
					place.phoneTel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${place.phoneTel}`,
						className: "text-muted hover:text-fg",
						children: place.phoneDisplay
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: place.phoneDisplay }),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${place.email}`,
						className: "text-muted hover:text-fg",
						children: place.email
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-subtle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "hover:text-fg",
						children: "About"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/menu",
						className: "hover:text-fg",
						children: "Priced menus"
					}),
					" · ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/board",
						className: "hover:text-fg",
						children: "Menu board"
					})
				]
			})
		]
	});
}
function HoursPanel({ shop }) {
	const place = shops[shop];
	const [status, setStatus] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => setStatus(shopStatus(shop));
		tick();
		const id = window.setInterval(tick, 3e4);
		return () => window.clearInterval(id);
	}, [shop]);
	const rows = shopRows(shop);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex h-full flex-col rounded-xl border border-border bg-surface px-6 py-8 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `text-xs font-medium uppercase tracking-[0.3em] ${status ? status.open ? "text-open" : "text-closed" : "text-muted"}`,
				children: status?.beforeOpen ? "Opening November 2026" : status ? status.open ? "We are open" : "We are closed" : "Hours"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl font-bold uppercase tracking-[0.14em] text-fg",
				children: "Hours"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: ["Today · ", status?.todayLabel ?? "…"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y divide-border",
				children: rows.map((row) => {
					const current = status ? row.match.includes(status.day) : false;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: current ? "text-fg" : "text-muted",
							children: row.days
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-lg tabular-nums ${current ? "text-fg" : "text-muted"}`,
							children: row.time
						})]
					}, row.days);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-auto flex items-center gap-2 pt-6 text-sm text-subtle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
					className: "size-4 shrink-0",
					"aria-hidden": "true"
				}), place.hoursNote]
			})
		]
	});
}
function PlaceFacts({ shop }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
		className: "mt-5 flex flex-col gap-3 text-fg sm:flex-row sm:gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
				className: "mt-0.5 size-5 shrink-0 text-muted",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-sm text-muted",
				children: "Address"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: shop.maps,
				target: "_blank",
				rel: "noreferrer",
				className: "underline-offset-4 hover:underline",
				children: shop.address
			}) })] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
				className: "mt-0.5 size-5 shrink-0 text-muted",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-sm text-muted",
				children: "Phone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: shop.phoneTel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `tel:${shop.phoneTel}`,
				className: "underline-offset-4 hover:underline",
				children: shop.phoneDisplay
			}) : shop.phoneDisplay })] })]
		})]
	});
}
function MenuTile({ to, label, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface px-4 text-fg transition-colors duration-150 hover:bg-raised active:scale-[0.98]",
		children: [icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-center text-base font-medium",
			children: label
		})]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/menu-BovBXsp3.js
var menu = {
	Xh: {
		"shop": "fairhaven",
		"title": "Encyclopedia of Nook Drinks",
		"slides": [
			{
				"src": "/drink-buzz.jpg",
				"alt": "Iced coffee on the arcade table at The Nook"
			},
			{
				"src": "/drink-latte.jpg",
				"alt": "Iced latte on the picnic table outside The Nook"
			},
			{
				"src": "/drink-mocha.jpg",
				"alt": "Iced mocha beside the Nook napkin dispenser"
			},
			{
				"src": "/drink-painkiller.jpg",
				"alt": "Iced Painkiller at the counter"
			},
			{
				"src": "/drink-skooma.jpg",
				"alt": "Two Skooma drinks on the picnic table"
			},
			{
				"src": "/drink-pistachio.jpg",
				"alt": "Iced pistachio drink"
			}
		],
		"categories": [
			{
				"letter": "B",
				"title": "Basics",
				"drinks": [
					{
						"name": "Espresso",
						"slug": "espresso"
					},
					{
						"name": "Latte",
						"slug": "latte"
					},
					{
						"name": "Cappuccino",
						"slug": "cappuccino"
					},
					{
						"name": "Cortado",
						"slug": "cortado"
					},
					{
						"name": "Macchiato",
						"slug": "macchiato"
					}
				]
			},
			{
				"letter": "C",
				"title": "Specialty Coffees",
				"drinks": [
					{
						"name": "The Local Buzz",
						"slug": "the-local-buzz"
					},
					{
						"name": "Mocha SMASH!",
						"slug": "mocha-smash"
					},
					{
						"name": "Painkiller",
						"slug": "painkiller"
					},
					{
						"name": "Aeroccino",
						"slug": "aeroccino"
					},
					{
						"name": "Skooma",
						"slug": "skooma"
					},
					{
						"name": "Root Beer Buzz",
						"slug": "root-beer-buzz"
					},
					{
						"name": "Sweet Renayy",
						"slug": "sweet-renayy"
					},
					{
						"name": "Creepy Jupin",
						"slug": "creepy-jupin"
					}
				]
			},
			{
				"letter": "D",
				"title": "Specialty Drinks",
				"drinks": [
					{
						"name": "Fluff-a-Nutter",
						"slug": "fluff-a-nutter",
						"kidFriendly": true
					},
					{
						"name": "Carnival Bizarre",
						"slug": "carnival-bizarre",
						"kidFriendly": true
					},
					{
						"name": "Lemonade",
						"slug": "lemonade",
						"kidFriendly": true
					},
					{
						"name": "Kiddie Latte",
						"slug": "kiddie-latte",
						"kidFriendly": true
					}
				]
			},
			{
				"letter": "H",
				"title": "Hot Chocolate",
				"drinks": [
					{
						"name": "Traditional Hot Chocolate",
						"slug": "traditional-hot-chocolate",
						"kidFriendly": true
					},
					{
						"name": "Oreo Hot Chocolate",
						"slug": "oreo-hot-chocolate",
						"kidFriendly": true
					},
					{
						"name": "Red Velvet",
						"slug": "red-velvet",
						"kidFriendly": true
					},
					{
						"name": "Epic Vanilla",
						"slug": "epic-vanilla",
						"kidFriendly": true
					},
					{
						"name": "Heath Bar",
						"slug": "heath-bar",
						"kidFriendly": true
					},
					{
						"name": "Girl Scout",
						"slug": "girl-scout",
						"kidFriendly": true
					},
					{
						"name": "It's International",
						"slug": "its-international",
						"kidFriendly": true
					}
				]
			},
			{
				"letter": "T",
				"title": "Tea",
				"drinks": [
					{
						"name": "Matcha Latte",
						"slug": "matcha-latte"
					},
					{
						"name": "Chai Latte",
						"slug": "chai-latte"
					},
					{
						"name": "Red Hibiscus",
						"slug": "red-hibiscus-tea",
						"maker": "Mighty Leaf"
					},
					{
						"name": "White Tea",
						"slug": "white-tea",
						"maker": "Mighty Leaf"
					},
					{
						"name": "Tropical Green",
						"slug": "tropical-green-tea",
						"maker": "Mighty Leaf"
					},
					{
						"name": "English Breakfast",
						"slug": "english-breakfast-tea",
						"maker": "Mighty Leaf"
					},
					{
						"name": "Paris",
						"slug": "paris",
						"maker": "Harney & Sons"
					},
					{
						"name": "English Breakfast",
						"slug": "harney-english-breakfast",
						"maker": "Harney & Sons"
					},
					{
						"name": "Royal Earl Grey",
						"slug": "royal-earl-grey",
						"maker": "Harney & Sons"
					},
					{
						"name": "Lemon Lift",
						"slug": "lemon-lift",
						"maker": "Bigelow"
					}
				]
			},
			{
				"letter": "*",
				"title": "Seasonal Drinks",
				"seasonal": true,
				"drinks": [
					{
						"name": "R.P.L. (Real Pumpkin Latte)",
						"slug": "real-pumpkin-latte",
						"seasonal": true,
						"inSeason": true
					},
					{
						"name": "Vernon's Apple Cider",
						"slug": "vernons-apple-cider",
						"seasonal": true,
						"inSeason": true
					},
					{
						"name": "The Nook Nog",
						"slug": "nook-nog",
						"seasonal": true,
						"inSeason": true
					}
				]
			}
		]
	},
	Zh: {
		"shop": "plymouth",
		"title": "Encyclopedia of Nook Drinks",
		"slides": [
			{
				"src": "/drink-buzz.jpg",
				"alt": "Iced coffee on the arcade table at The Nook"
			},
			{
				"src": "/drink-latte.jpg",
				"alt": "Iced latte on the picnic table outside The Nook"
			},
			{
				"src": "/drink-mocha.jpg",
				"alt": "Iced mocha beside the Nook napkin dispenser"
			},
			{
				"src": "/drink-painkiller.jpg",
				"alt": "Iced Painkiller at the counter"
			},
			{
				"src": "/drink-pistachio.jpg",
				"alt": "Iced pistachio drink"
			}
		],
		"categories": [
			{
				"letter": "B",
				"title": "Basics",
				"drinks": [
					{
						"name": "Espresso",
						"slug": "espresso"
					},
					{
						"name": "Latte",
						"slug": "latte"
					},
					{
						"name": "Cappuccino",
						"slug": "cappuccino"
					},
					{
						"name": "Cortado",
						"slug": "cortado"
					},
					{
						"name": "Macchiato",
						"slug": "macchiato"
					}
				]
			},
			{
				"letter": "C",
				"title": "Specialty Coffees",
				"drinks": [
					{
						"name": "The Local Buzz",
						"slug": "the-local-buzz"
					},
					{
						"name": "Mocha SMASH!",
						"slug": "mocha-smash"
					},
					{
						"name": "Painkiller",
						"slug": "painkiller"
					},
					{
						"name": "Aeroccino",
						"slug": "aeroccino"
					},
					{
						"name": "Root Beer Buzz",
						"slug": "root-beer-buzz"
					},
					{
						"name": "Sweet Renayy",
						"slug": "sweet-renayy"
					},
					{
						"name": "Creepy Jupin",
						"slug": "creepy-jupin"
					}
				]
			},
			{
				"letter": "D",
				"title": "Specialty Drinks",
				"drinks": [{
					"name": "Fluff-a-Nutter",
					"slug": "fluff-a-nutter",
					"kidFriendly": true
				}, {
					"name": "Kiddie Latte",
					"slug": "kiddie-latte",
					"kidFriendly": true
				}]
			},
			{
				"letter": "H",
				"title": "Hot Chocolate",
				"drinks": [
					{
						"name": "Traditional Hot Chocolate",
						"slug": "traditional-hot-chocolate",
						"kidFriendly": true
					},
					{
						"name": "Oreo Hot Chocolate",
						"slug": "oreo-hot-chocolate",
						"kidFriendly": true
					},
					{
						"name": "Red Velvet",
						"slug": "red-velvet",
						"kidFriendly": true
					},
					{
						"name": "Epic Vanilla",
						"slug": "epic-vanilla",
						"kidFriendly": true
					},
					{
						"name": "Heath Bar",
						"slug": "heath-bar",
						"kidFriendly": true
					},
					{
						"name": "Girl Scout",
						"slug": "girl-scout",
						"kidFriendly": true
					},
					{
						"name": "It's International",
						"slug": "its-international",
						"kidFriendly": true
					}
				]
			},
			{
				"letter": "T",
				"title": "Tea",
				"drinks": [
					{
						"name": "Matcha Latte",
						"slug": "matcha-latte"
					},
					{
						"name": "Chai Latte",
						"slug": "chai-latte"
					},
					{
						"name": "Red Hibiscus",
						"slug": "red-hibiscus-tea",
						"maker": "Mighty Leaf"
					},
					{
						"name": "White Tea",
						"slug": "white-tea",
						"maker": "Mighty Leaf"
					},
					{
						"name": "Tropical Green",
						"slug": "tropical-green-tea",
						"maker": "Mighty Leaf"
					},
					{
						"name": "English Breakfast",
						"slug": "english-breakfast-tea",
						"maker": "Mighty Leaf"
					},
					{
						"name": "Paris",
						"slug": "paris",
						"maker": "Harney & Sons"
					},
					{
						"name": "English Breakfast",
						"slug": "harney-english-breakfast",
						"maker": "Harney & Sons"
					},
					{
						"name": "Royal Earl Grey",
						"slug": "royal-earl-grey",
						"maker": "Harney & Sons"
					},
					{
						"name": "Lemon Lift",
						"slug": "lemon-lift",
						"maker": "Bigelow"
					}
				]
			},
			{
				"letter": "*",
				"title": "Seasonal Drinks",
				"seasonal": true,
				"drinks": [
					{
						"name": "R.P.L. (Real Pumpkin Latte)",
						"slug": "real-pumpkin-latte",
						"seasonal": true,
						"inSeason": true
					},
					{
						"name": "Vernon's Apple Cider",
						"slug": "vernons-apple-cider",
						"seasonal": true,
						"inSeason": true
					},
					{
						"name": "The Nook Nog",
						"slug": "nook-nog",
						"seasonal": true,
						"inSeason": true
					}
				]
			}
		]
	},
	Qh: /* @__PURE__ */ JSON.parse("{\"the-local-buzz\":{\"slug\":\"the-local-buzz\",\"name\":\"The Local Buzz\",\"image\":\"/drink-buzz.jpg\",\"imageAlt\":\"An iced Local Buzz at The Nook CoffeeHouse\",\"paragraphs\":[\"The Local Buzz is our specialty coffee milk.\",\"It is a Costa Rican light roast cold brew concentrate, finished with our coffee syrup. The Buzz contains notes of honey, maple, and vanilla.\",\"The Local Buzz is pre-made, so it cannot be done dairy-free. It can be served iced or hot.\",\"It is known for the caffeine, and that comes from the light roast.\"],\"fact\":\"Light roast coffee has more caffeine than any other roast. Espresso is actually the least caffeinated coffee that you can drink.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Notes of honey, maple, and vanilla\"},{\"label\":\"Sweetness\",\"detail\":\"7.5 / 10. High level of sweetness, especially with flavors added.\",\"level\":75},{\"label\":\"Caffeine\",\"detail\":\"Moderate to high\",\"level\":70}],\"flavorLead\":\"We also have different flavors of the Local Buzz.\",\"flavorNote\":\"All of our flavors are made with premium syrups and/or powders imported from France.\",\"flavors\":[\"Caramel\",\"Coconut\",\"Heath Bar\",\"Mocha\",\"Oreo\",\"Pistachio\",\"Root Beer\"],\"hotOrIced\":true},\"painkiller\":{\"slug\":\"painkiller\",\"name\":\"Painkiller\",\"image\":\"/drink-painkiller.jpg\",\"imageAlt\":\"An iced Painkiller at The Nook CoffeeHouse\",\"paragraphs\":[\"The Painkiller is a thick, creamy coffee. Fans of it will tell you there is no coffee quite like it.\",\"It starts with a cold-pressed espresso made from a single-origin Mocha Java bean. You would think there is chocolate in it. There is not. The bean itself is round and chocolatey, with almond notes.\",\"That espresso is blended with a sweet cream powder imported from France. The powder is GMO-free and lactose-free, so the drink can be made with almond or oat milk.\",\"Dehydrated espresso crystals go into the mix, and the whole thing is whipped until it is thick and creamy.\",\"The drink itself is 180 calories, plus whatever milk you choose.\"],\"fact\":\"The dehydrated espresso crystals linger after you drink it. Your saliva rehydrates them, leaving a chocolatey finish in your mouth that you're tasting after you're done drinking it.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Round, chocolatey, and almond.\"},{\"label\":\"Sweetness\",\"detail\":\"5.5 / 10. Sweetened, but not too sweet.\",\"level\":55},{\"label\":\"Caffeine\",\"detail\":\"Moderate\",\"level\":65}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"icedOnly\":true},\"mocha-smash\":{\"slug\":\"mocha-smash\",\"name\":\"Mocha SMASH!\",\"image\":\"/drink-mocha-smash.jpg\",\"imageAlt\":\"Mocha SMASH! poster with an iced chocolate drink\",\"paragraphs\":[\"It starts with espresso and our smash powder. That powder is a sweet cream imported from France, mixed with cocoa powder, and whipped smooth. The powder is lactose-free, so the drink can be made dairy-free.\",\"The drink is 190 calories, plus whatever milk you choose.\",\"The Mocha SMASH! is more chocolate than coffee. For anybody looking for a drink that is more coffee than chocolate, we suggest a mocha latte.\",\"Whipped cream, or a cup dressed in chocolate, is up to you.\"],\"fact\":\"Chocolate is the number one coffee flavor in America. The National Coffee Association's 2026 report ranks it ahead of caramel, brown sugar, and vanilla.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Chocolate, chocolate, and more chocolate.\"},{\"label\":\"Sweetness\",\"detail\":\"Sweet, but not too sweet.\",\"level\":65},{\"label\":\"Caffeine\",\"detail\":\"Moderate to high\",\"level\":70}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOrIced\":true},\"aeroccino\":{\"slug\":\"aeroccino\",\"name\":\"Aeroccino\",\"image\":\"/drink-latte.jpg\",\"imageAlt\":\"An iced coffee at The Nook CoffeeHouse\",\"paragraphs\":[\"We've been making the Aeroccino at The Nook since 2018. It started as a stupid scientific experiment I was running, to see if I could spread the oils that live in the crema. A lot of the round, sweet-tasting notes reside in those oils. Emulsifying them works like mayo. It breaks the oils into smaller droplets and whips air through them. This is what thickens the drink and makes the sweetness feel bigger.\",\"The drink has since been popularized as the Aerocano. A lot of places around the world have been making it. It is kind of becoming a viral drink. We have been doing it for a while, and in my opinion, it is the purest form of an iced coffee that you can get.\",\"Four ounces of espresso are poured over ice for the iced version. For the hot version, we just take the steam wand to the shot of espresso. The steam wand then whips it like a tornado, emulsifies the crema, thickens the espresso a little, and rounds out the bitter notes.\",\"What you taste is the middle of the bean. Not the bright fruity top. Not the burnt, woody bottom. It is silky, and there is no sugar in it.\",\"The Aeroccino comes standard with two tablespoons of half-and-half, or you can choose oat milk or almond milk if you want it lactose-free. As always, drinking it black is an option.\",\"The calories are whatever dairy you choose to add.\",\"Flavors are not recommended. They take away more than they add. Sugar, we can definitely add upon request.\"],\"fact\":\"When coffee is roasted, CO2 gets locked into the bean. The wand pushes in air. That air emulsifies the oils, thickens the espresso, and pulls the sweeter notes forward.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Silky, round, and creamy.\"},{\"label\":\"Sweetness\",\"detail\":\"No sugar added.\",\"level\":10},{\"label\":\"Caffeine\",\"detail\":\"Medium\",\"level\":55}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOrIced\":true},\"skooma\":{\"slug\":\"skooma\",\"name\":\"Skooma\",\"image\":\"/drink-skooma.jpg\",\"imageAlt\":\"Two Skooma drinks on the picnic table at The Nook CoffeeHouse\",\"paragraphs\":[\"Skooma is a problem. The kind you think about often, and the kind you cannot avoid.\",\"It will start an addiction, become part of your life, and lead you straight down the road to ruin. The recommendation is simple. Do not drink the Skooma. Avoid it at all costs.\",\"Then again, sometimes you need the drink that makes you a lot less stabby. This one is for the people who throw caution to the wind.\",\"Three coffees go in: the Buzz, Costa Rican cold brew, and a latte frappe powder we use in our shop drinks. It is a dessert drink. The default Skooma is dressed with chocolate and caramel.\"],\"statLine\":\"Drinking the Skooma will give you\",\"statEffects\":[\"+20 Strength\",\"+20 Speed\",\"−20 Intelligence\",\"−20 Agility\"],\"fact\":\"I used to be an adventurer like you. Then I took an arrow to the knee.\",\"factCredit\":\"Random NPC, Skyrim · 2011\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Chocolate and caramel. A dessert drink.\"},{\"label\":\"Sweetness\",\"detail\":\"Very sweet. A dessert drink.\",\"level\":90},{\"label\":\"Caffeine\",\"detail\":\"High\",\"level\":80}],\"flavorHeading\":\"Mutations\",\"flavorLead\":\"The Skooma has mutated\",\"flavorLeadCaps\":true,\"flavorNote\":\"despite our best efforts, the skooma's virus has spread and branched into a whole multitude of flavors. each one is more dangerous than the next. we warn you. do not try any of these. or try them all.\",\"flavors\":[\"Almond Joy\",\"Birthday Cake\",\"Java Chip\",\"Epic Vanilla\",\"Franklin Mint\",\"Oreo\",\"Peanut Butter\",\"Smash\"],\"icedOnly\":true},\"fluff-a-nutter\":{\"slug\":\"fluff-a-nutter\",\"name\":\"Fluff-a-Nutter\",\"image\":\"/drink-fluff.jpg\",\"imageAlt\":\"An iced Fluff-a-Nutter\",\"paragraphs\":[\"Alright, picture this, dude. Ya comin' home from school. Ya set ya book bag down. Ya ma made you the most wicked Fluffernutter sandwich evah. That's what you got right heah. In drink form.\",\"But seriously, dude... it starts with PB2 peanut butter powder and caramel syrup. Mixed with our vanilla sweet cream powder, that is the marshmallow.\",\"We make it with no caffeine, and that version is on the kids menu. You can also make it with the Local Buzz. That adds caffeine and more sweetness.\",\"On the no-caffeine version, any milk works, including oat or almond. Hot, it drinks like a peanut butter marshmallow cocoa. Iced, it is creamy.\",\"Fun for kids of all ages. Or if you just need to get your fix, bro.\"],\"stageNote\":\"Start bad Boston accent now.\",\"fact\":\"The sandwich is a Massachusetts thing. In 1918, Emma Curtis of Melrose published a peanut butter and marshmallow creme sandwich and called it the Liberty Sandwich. The name Fluffernutter showed up around 1960, from the company that makes Marshmallow Fluff.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Peanut butter and marshmallow.\"},{\"label\":\"Sweetness\",\"detail\":\"7.5 out of 10.\",\"level\":75},{\"label\":\"Caffeine\",\"detail\":\"None.\",\"level\":0}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOrIced\":true},\"sweet-renayy\":{\"slug\":\"sweet-renayy\",\"name\":\"Sweet Renayy\",\"image\":\"/drink-sweet-renayy-snow.jpg\",\"imageAlt\":\"Illustrated Sweet Renayy in a Christmas sweater and Santa hat, snowy hills behind her, Santa in the sky, and colorful lights\",\"paragraphs\":[\"This drink was previously known as our Buzz Chip. It starts with chocolate chips, our Local Buzz, and a latte frap powder.\",\"The name changed because one of our most loyal customers ordered it day after day. Every time she walked in. Like she was on the nice list and the regulars list, and she was not about to pick one.\",\"Her name is Renayy. She is sunshine every time she comes through the door, which is a bold choice in December. She is always good for a laugh, or a full geek-out session over Christmas, or any holiday really. Tinsel, lights, the whole operation. She deserves her own drink, damn it.\"],\"fact\":\"Java chip started as ice cream. In 1996 Starbucks and Dreyer's put out a Java Chip flavor, and for a while it was the most popular coffee ice cream in the country. People still argue about it. Starbucks ended the ice cream line in 2013. Chocolate chips in coffee did not end. They just moved into a cup.\\nThe blended version most people met is a Frappuccino. That drink started in 1993, when two baristas blended espresso, milk, and ice because the customers would not stop asking. In 1994 Starbucks bought the Coffee Connection and took the name idea with it. Frappé plus cappuccino. It was on the menu in 1995. The chips came later. Renayy came later than that. The drink is still hers.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Chocolate chips, Local Buzz, and latte frap.\"},{\"label\":\"Sweetness\",\"detail\":\"Sweet.\",\"level\":80},{\"label\":\"Caffeine\",\"detail\":\"From the Local Buzz.\",\"level\":70}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"creepy-jupin\":{\"slug\":\"creepy-jupin\",\"name\":\"Creepy Jupin\",\"image\":\"/drink-creepy-jupin.jpg\",\"imageAlt\":\"Illustrated Jupin in a backward cap and glasses, holding an iced coffee at a concert\",\"paragraphs\":[\"Every shop has a guy. Ours is named Jupin. He does a lot of our maintenance, and he is the person we call when we are in trouble. Something breaks, Jupin comes running.\",\"He used to order a Girl Scout hot chocolate with the Local Buzz in it. Then he named it, out loud. A buzzed Girl Scout.\",\"We decided that was creepy. So the drink is the Creepy Jupin.\",\"It is mint and chocolate, with coffee from the Buzz. The Girl Scout is the mint and the chocolate. The Buzz is the coffee, and the reason the name got weird. Hot or iced.\"],\"fact\":\"Mint does a trick on chocolate. Menthol hits the same cold receptors on your tongue that ice does, a channel called TRPM8. The chocolate does not get colder. Your mouth just thinks it did. That is why a Thin Mint tastes cleaner than a plain chocolate cookie. Jupin got there with a cup. He just used worse words for it.\",\"hotOrIced\":true,\"meter\":[{\"label\":\"Taste\",\"detail\":\"Mint chocolate coffee. A Girl Scout with the Local Buzz.\"},{\"label\":\"Sweetness\",\"detail\":\"Sweet.\",\"level\":75},{\"label\":\"Caffeine\",\"detail\":\"From the Local Buzz.\",\"level\":70}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"nook-nog\":{\"slug\":\"nook-nog\",\"name\":\"The Nook Nog\",\"image\":\"/drink-nook-nog.jpg?v=2\",\"imageAlt\":\"An iced Nook Nog with whipped cream and caramel\",\"paragraphs\":[\"There is no polite way to say this. We love Christmas at The Nook. Not a tasteful Christmas. A Griswold Christmas. Every year we do a Christmas weekend, and we geek out.\",\"Our friend David Arruda comes in and plays piano. He is a local jazz pianist, known for playing around the world. He plays the Christmas songs you already know, and then we sing along. Santa has made some appearances. Lots of surprises, and fun times had by all. It is a Christmas holiday miracle, and it happens inside these orange walls. We are so very lucky to be a community center.\",\"The Nook Nog is what you order while all of that is happening. Eggnog, mixed with the Local Buzz, finished with whipped cream. Hot or iced. Extremely popular. Very decadent. Very sweet. But if you gotta go, go with a smile.\",\"“If you gotta go, go with a smile.” — Jack Nicholson, Batman (1989).\"],\"fact\":\"Eggnog is a colonial American drink. Eggs, cream or milk, sugar, and usually a spirit, most often rum. The name shows up in print in the late 1700s. Nog may come from noggin, a small wooden cup. The carton in the grocery store, with no alcohol in it, is the later version.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Eggnog and the Local Buzz.\"},{\"label\":\"Sweetness\",\"detail\":\"Very sweet. Decadent.\",\"level\":90},{\"label\":\"Caffeine\",\"detail\":\"From the Local Buzz.\",\"level\":70}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOrIced\":true},\"real-pumpkin-latte\":{\"slug\":\"real-pumpkin-latte\",\"name\":\"R.P.L. (Real Pumpkin Latte)\",\"image\":\"/drink-pumpkin-latte.jpg\",\"imageAlt\":\"An iced Real Pumpkin Latte between a white pumpkin and an orange pumpkin\",\"paragraphs\":[\"The R.P.L. has been on the Fairhaven menu since we opened in 2016. Real Pumpkin Latte. The initials are just so it fits on a cup.\",\"A double shot of espresso. Then pumpkin puree and pumpkin spice, cooked on the steam wand until it turns into something closer to pie filling than a syrup. That gets mixed with whatever milk you want.\",\"It is not really sweet. If you want the dessert version, add caramel. If you want the traditional pumpkin-syrup drink, that is the Pumpkin Buzz. This one is the pie.\",\"Hot or iced. We like it hot. It tastes like a warm slice of pumpkin pie.\"],\"fact\":\"Starbucks put the Pumpkin Spice Latte on the menu in 2003. For the first twelve years there was no pumpkin in it. Cinnamon, nutmeg, clove, and a lot of sugar. They added pumpkin puree in 2015. Ours has had the puree in it since 2016.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"A warm slice of pumpkin pie. Real puree, cooked on the steam wand.\"},{\"label\":\"Sweetness\",\"detail\":\"Not really sweet. Add caramel if you want it sweet.\",\"level\":35},{\"label\":\"Caffeine\",\"detail\":\"A double shot of espresso.\",\"level\":65}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOrIced\":true},\"vernons-apple-cider\":{\"slug\":\"vernons-apple-cider\",\"name\":\"Vernon's Apple Cider\",\"paragraphs\":[\"Everybody knows that we at The Nook love our stabby stabby movies. Behind the Mask is the one where Leslie Vernon invites a film crew along and walks them through the job like it is a craft. Vernon's Apple Cider is named for him. The mockumentary crowd already got the joke. Everyone else can just drink the cider.\",\"Pasteurized apple cider, caramel, and cinnamon sticks. Finished with a little half-and-half, or the creamer you actually want. It is fall in a cup, which is less alarming than fall in the movie.\"],\"fact\":\"Do you know Leslie Vernon drinks this every year while he gets ready for Halloween? He does now. We decided.\\n\\nDo you know the cardio is the hard part? He has to run like a gazelle and still look like he is walking, while everybody else is sprinting. He said it himself. Making running look like walking is difficult.\\n\\nDo you know Leslie Vernon got greenlit for a sequel? Behind the Mask II: The Return of Leslie Vernon should be out next year. We wonder if apple cider will be involved.\",\"factLink\":{\"href\":\"https://www.leslievernonreturns.com\",\"label\":\"leslievernonreturns.com\"},\"quote\":\"“Paradise Lost... Found it.” Leslie Vernon, 2006\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Cider, caramel, and cinnamon.\"},{\"label\":\"Sweetness\",\"detail\":\"Sweet. There is caramel in it.\",\"level\":70},{\"label\":\"Caffeine\",\"detail\":\"None.\",\"level\":0}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"kiddie-latte\":{\"slug\":\"kiddie-latte\",\"name\":\"Kiddie Latte\",\"image\":\"/drink-latte.jpg\",\"imageAlt\":\"A small Kiddie Latte, dressed like a latte\",\"paragraphs\":[\"The Kiddie Latte is steamed milk and our coffee syrup. It is a coffee milk, with no caffeine in it.\",\"We only make it in a small. Hot or iced. It is dressed and built so it looks like the drink the grown-ups are holding.\",\"It is for the kids who want what their parents have. Add caramel, mocha, or any of our syrups or sauces if you want it sweeter. Then it tastes like a kid's drink.\"],\"fact\":\"Coffee milk is the state drink of Rhode Island. Diners there have been stirring coffee syrup into milk since the early 1900s. The Kiddie Latte is that idea, in a small cup, dressed like the grown-up order.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Coffee milk. No espresso.\"},{\"label\":\"Sweetness\",\"detail\":\"Lightly sweet, before any syrup.\",\"level\":35},{\"label\":\"Caffeine\",\"detail\":\"None.\",\"level\":0}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOrIced\":true},\"epic-vanilla\":{\"slug\":\"epic-vanilla\",\"name\":\"Epic Vanilla\",\"image\":\"/drink-vanilla.jpg\",\"imageAlt\":\"An iced Epic Vanilla\",\"paragraphs\":[\"The Epic Vanilla is a vanilla drink, hot or iced. There is no chocolate in it.\",\"It is a French vanilla powder mixed with the milk of your choice. The sweet cream powder is what makes it thick. It can be made lactose-free.\",\"The cup comes dressed with caramel unless you ask us to leave that off. Whipped cream is optional. We will ask.\",\"It is 180 calories, plus whatever milk you choose. Kids drink it too.\"],\"fact\":\"It tastes like a vanilla frappe, but it is not blended. The body comes from the sweet cream powder.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Thick vanilla. No chocolate.\"},{\"label\":\"Sweetness\",\"detail\":\"Very sweet.\",\"level\":80},{\"label\":\"Caffeine\",\"detail\":\"None\",\"level\":0}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOrIced\":true},\"traditional-hot-chocolate\":{\"slug\":\"traditional-hot-chocolate\",\"name\":\"Traditional Hot Chocolate\",\"image\":\"/drink-hot-chocolate.jpg?v=2\",\"imageAlt\":\"A glass mug of hot chocolate with whipped cream, in front of The Nook logo and pumpkins\",\"paragraphs\":[\"How good is our hot chocolate? Well, let's just say this. “Certain local fairs” offered us a booth. When they tried it, the other vendors asked us to dumb it down and make it with a cheap mix, so we would not take all of their business. Or raise the price until it was not comparable.\",\"We turned the offer down. Changing our quality is not what we are about. Iron sharpens iron. If your hot chocolate can't compete with ours, maybe you're just not hot chocolating properly. Simple solution. Get better at hot chocolate.\",\"Our hot chocolate is feared. That is the review.\",\"It's decadent. It's chocolate.\"],\"lines\":[\"Kids drink it\",\"Moms drink it\",\"Dads drink it\",\"Mogwais drink it (before midnight)\",\"E.T. drinks it (before he phones home)\",\"The Goonies drink it (they stole it from One-Eyed Willy)\",\"The Ghostbusters drink it (when they're ready to believe you)\",\"Marty McFly drank it back in the fifties (he knew you weren't ready for it, but your kids would love it)\",\"The Ninja Turtles drink it (when pizza is not on the menu)\"],\"tail\":[\"The powder we use is lactose-free. Almond milk and oat milk both work if dairy is a problem. Hot or iced. Kid friendly. Same as every hot chocolate here.\"],\"fact\":\"Before a fair asked us to cheapen it, cacao was money. The Maya and the Aztecs paid with the beans. The drink was called xocolatl. Bitter, frothed, often with chili. Spain added the sugar.\\nLondon's first chocolate house opened in 1657, in Queen's Head Alley near Bishopsgate. The ad called it an excellent West India drink. On April 24, 1661, the morning after Charles II's coronation, Samuel Pepys drank chocolate to settle his stomach.\",\"starNote\":\"Every hot chocolate can be made with the Local Buzz if you want the caffeine.\",\"hotOrIced\":true,\"meter\":[{\"label\":\"Taste\",\"detail\":\"Decadent chocolate.\"},{\"label\":\"Sweetness\",\"detail\":\"Sweet.\",\"level\":70},{\"label\":\"Caffeine\",\"detail\":\"A little. Chocolate, not coffee.\",\"level\":15}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"oreo-hot-chocolate\":{\"slug\":\"oreo-hot-chocolate\",\"name\":\"Oreo Hot Chocolate\",\"image\":\"/drink-oreo-hot-chocolate.jpg\",\"imageAlt\":\"A glass mug of hot chocolate with whipped cream, Oreo dust, and crumbled Oreos\",\"paragraphs\":[\"They say you can have too much of a good thing. I don't. I quote the great Swedish guitarist Yngwie J. Malmsteen. Less is not more. More is more. It doesn't even make sense that less is more. What are you talking about?\",\"The Oreo Hot Chocolate, or cookies and cream hot chocolate, whichever you call it, is decadent and smooth. Filled with cookies and cream. Extremely creamy. Absolutely heavenly.\",\"If you love Oreos, this one is the one for you.\",\"Hot or iced. Kid friendly. Same as every hot chocolate here. The powder is lactose-free, so almond milk or oat milk both work.\"],\"fact\":\"Cookies and cream has a few people claiming they invented it. The best story is South Dakota State University, 1979. Dairy plant manager Shirley Seas sent two students, still in white uniforms and rubber boots, to buy Oreos. They cleared the shelf. They crushed the cookies in a machine called a fruit feeder and mixed them into vanilla ice cream. Seas wanted to call it Oreo ice cream. A lawyer said no. So it became Cookies 'N Cream.\\nBlue Bell says they were first to mass-produce it, in 1980. Nabisco was not selling crumbled Oreos in bulk yet, so somebody at the creamery had to smash the packages by hand. By 1983, cookies and cream was a top-five ice cream flavor.\",\"starNote\":\"Every hot chocolate can be made with the Local Buzz if you want the caffeine.\",\"hotOrIced\":true,\"meter\":[{\"label\":\"Taste\",\"detail\":\"Cookies and cream.\"},{\"label\":\"Sweetness\",\"detail\":\"Sweet.\",\"level\":75},{\"label\":\"Caffeine\",\"detail\":\"A little. Chocolate, not coffee.\",\"level\":15}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"red-velvet\":{\"slug\":\"red-velvet\",\"name\":\"Red Velvet\",\"image\":\"/drink-red-velvet.jpg?v=2\",\"imageAlt\":\"A glass mug of red velvet hot chocolate with whipped cream and red drizzle\",\"paragraphs\":[\"Some people think red velvet is the height of sophistication and glam. Other people say it is glorified chocolate that found a bottle of red food coloring and a publicist.\",\"One thing is for certain. The people who love it really, really, really love red velvet. And why wouldn't you? It is eye-catching. It is motivating. It is a reason to wake up. And it is red. So you know it is good.\",\"Same as the rest of the hot chocolate. Hot or iced. Kid friendly. Dairy-free if you need it. Almond milk or oat milk. The powder is lactose-free.\"],\"fact\":\"Velvet did not mean red. It meant the crumb was soft. Bakers were already doing that in the 1800s, cutting the flour with cocoa or cornstarch. Cocoa, buttermilk, and vinegar turned a chocolate cake a little mahogany. That was the whole magic trick. Subtle. Brownish. If you squinted, red.\\nThen a dye company got bored. Adams Extract wanted to sell red food coloring, so they printed recipe cards and told the country to dump the bottle in. The cake went from 'sort of red in the right light' to lipstick. The Waldorf-Astoria likes to say they invented it in the 1920s. Their own records do not really agree. There is also a story about a guest who paid a fortune for the recipe and mailed it to strangers out of spite. Great story. Not history.\\nIn 1989 Steel Magnolias put a red velvet armadillo on a table and called it a groom's cake. America decided this was glamorous. Some people still say it is just chocolate in a red shirt. They are not entirely wrong. They also keep ordering it.\",\"starNote\":\"Every hot chocolate can be made with the Local Buzz if you want the caffeine.\",\"hotOrIced\":true,\"meter\":[{\"label\":\"Taste\",\"detail\":\"Red velvet. Chocolate with a publicist.\"},{\"label\":\"Sweetness\",\"detail\":\"Sweet.\",\"level\":70},{\"label\":\"Caffeine\",\"detail\":\"A little. Chocolate, not coffee.\",\"level\":15}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"heath-bar\":{\"slug\":\"heath-bar\",\"name\":\"Heath Bar\",\"image\":\"/drink-heath-bar.jpg?v=3\",\"imageAlt\":\"A glass mug of Heath Bar hot chocolate with plain whipped cream\",\"paragraphs\":[\"We stumbled onto this while trying to invent sticky toffee pudding you could drink. Then it turned into a Heath bar. That is how ideas go around here. They start respectable and end up as candy.\",\"The first version was built on the Buzz, which is why the Heath Bar Buzz exists. Then we found out you do not need the coffee. Powder and toffee. That is the whole trick. It tastes like a Heath bar.\",\"There is a little coffee flavor hanging around. It is not real coffee. There is no caffeine in it. Do not write us a letter.\",\"What you actually get is a mild caramel with real toffee chips sitting at the bottom of the cup. If something chunky hits, that is the toffee. Do not panic. That is the point.\",\"Parents love it. Kids love it. People love it. This is probably the sweetest drink on the menu, and I am not apologizing.\",\"I like this one hot more than iced. You get it however it tickles your fancy.\",\"Hot or iced. Kid friendly. Dairy-free if you need it. Almond milk or oat milk. The powder is lactose-free.\"],\"fact\":\"A Heath bar is English toffee, almonds, and milk chocolate. A schoolteacher named L.S. Heath bought a candy shop in Robinson, Illinois in 1913 so his sons, Bayard and Everett, would have a job. They opened it in 1914 as a candy store, an ice cream parlor, and a factory, which is a lot of ambition for one storefront.\\nThe toffee recipe supposedly showed up with a traveling salesman, who got it from a Greek confectioner. In 1928 they started selling it as Heath English Toffee and printed \\\"America's Finest\\\" on it. Bold, for a candy they were still stirring by hand in a copper kettle. They did not stop doing it by hand until 1942, when the Army ordered $175,000 worth and the kettle days ended.\\nFor a while you could get a Heath bar delivered with your milk, because the family also ran a dairy. In 1989 they sold the company to Leaf, a Finnish outfit. Hershey bought it in 1996. The bar is still made in Robinson. The town kept the candy. The family did not keep the company.\",\"starNote\":\"Every hot chocolate can be made with the Local Buzz if you want the caffeine.\",\"hotOrIced\":true,\"meter\":[{\"label\":\"Taste\",\"detail\":\"Mild caramel. Real toffee chips.\"},{\"label\":\"Sweetness\",\"detail\":\"The sweetest thing we serve.\",\"level\":95},{\"label\":\"Caffeine\",\"detail\":\"None. The coffee note is not coffee.\",\"level\":0}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"girl-scout\":{\"slug\":\"girl-scout\",\"name\":\"Girl Scout\",\"image\":\"/drink-girl-scout.jpg\",\"imageAlt\":\"A glass mug of Girl Scout hot chocolate with plain whipped cream and Thin Mints\",\"paragraphs\":[\"You know the cookie. Now try the drink.\",\"The Girl Scout is a heated-up chocolate mint. There is something about that combination that gives you the warm fuzzy feeling. Call it a holiday thing. Or call it the end of an Olive Garden feast.\",\"Do not tell me you did not fight over those mints. They are Andes. Not the ones from the store, either. Olive Garden has their own, still stamped Andes, one layer of chocolate over the mint, wrapped in the restaurant logo. You cannot buy them. You can only lose the argument about who gets the last one.\",\"Be sure to support the Girl Scouts. We sure do. Buy the box. Then come here and drink it like you have no plans for the rest of the day.\",\"Hot or iced. Kid friendly. Dairy-free if you need it. Almond milk or oat milk. The powder is lactose-free.\"],\"fact\":\"Thin Mints are the number one Girl Scout cookie in the country. In 2024 they were about 36 percent of every box sold. More than one in three. Samoas, or Caramel deLites if your baker calls them that, come in second. Massachusetts picks the coconut one. We are not here to fight your state. We are here to drink the mint.\\nThe cookie started as Chocolate Mints. By 1951, Girl Scout Cookies came in three kinds: Sandwich, Shortbread, and Chocolate Mints. The mint one is the one that never left.\\nCookie sales go back to 1917. The Mistletoe Troop in Muskogee, Oklahoma baked them and sold them in a high school cafeteria. Juliette Gordon Low had started the Girl Scouts five years earlier, in Savannah. The girls have been funding the whole thing with cookies ever since. Buy the box.\",\"factLink\":{\"href\":\"https://tootsie.com/products/andes-creme-de-menthe/\",\"label\":\"Andes Crème de Menthe\"},\"starNote\":\"Every hot chocolate can be made with the Local Buzz if you want the caffeine.\",\"hotOrIced\":true,\"meter\":[{\"label\":\"Taste\",\"detail\":\"Chocolate mint. Thin Mint, in a cup.\"},{\"label\":\"Sweetness\",\"detail\":\"Sweet.\",\"level\":75},{\"label\":\"Caffeine\",\"detail\":\"A little. Chocolate, not coffee.\",\"level\":15}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"its-international\":{\"slug\":\"its-international\",\"name\":\"It's International\",\"image\":\"/drink-its-international.jpg\",\"imageAlt\":\"A vintage-style tin of It's International from The Nook Coffee House\",\"paragraphs\":[\"When we were children, the international coffees were elite. To say they were anything less than elite meant you were not elite.\",\"Let's face facts. They used words like Vienna roast. They used words like cappuccino. They used words that did not make any sense with any of these mixes. It did not matter. Sure, it was just a vessel for sugar and no real coffee. It did not matter. When you were sipping on one of these, you were important.\",\"You are all important to us. So we made a mix that tastes like those memories. Like the old international coffees.\",\"There is no coffee in this. If you want the caffeine, we can put the Local Buzz in it, or add a shot of espresso. The shot will not taste the same. The original International House of Coffees really did not have coffee inside them. They were sugar masquerading as coffee. Don't we all love a masquerade?\",\"Hot or iced. Kid friendly. Dairy-free if you need it. Almond milk or oat milk. The powder is lactose-free.\"],\"fact\":\"General Foods International Coffee was put on shelves around 1973. The first three flavors were Suisse Mocha, Cafe Vienna, and Cafe au Lait, which they later renamed Cafe Francais. The 1980s slogan was \\\"Celebrate the moments of your life.\\\" The commercials had a man named Jean Luc, whose entire job was to make a powdered drink feel like a date in Europe.\\nCafe Vienna was not a Vienna roast. Orange Cappuccino was not a cappuccino. There was no foam and no espresso. There was sugar, creamer, and a little instant coffee wearing a flag. Each tin had a color so you could feel like you had been somewhere. In 1985 Philip Morris bought General Foods. By 2010 the line was wearing a Maxwell House label. The tins got quieter. The memory did not.\",\"starNote\":\"Every hot chocolate can be made with the Local Buzz if you want the caffeine.\",\"hotOrIced\":true,\"meter\":[{\"label\":\"Taste\",\"detail\":\"Those tins. Sugar with a European accent.\"},{\"label\":\"Sweetness\",\"detail\":\"Very sweet.\",\"level\":90},{\"label\":\"Caffeine\",\"detail\":\"None, unless you add the Buzz or a shot.\",\"level\":0}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"root-beer-buzz\":{\"slug\":\"root-beer-buzz\",\"name\":\"Root Beer Buzz\",\"image\":\"/drink-rootbeer.jpg\",\"imageAlt\":\"A Root Beer Buzz\",\"paragraphs\":[\"About ten years before we opened The Nook, I had a dream about a root beer coffee. I spent a long time working on root beer lattes. None of them were it.\",\"The idea clicked in a conversation with my friend Josh. We tried adding root beer to nitro coffee. It did not really work. The creaminess of the Local Buzz is what brought it to another level.\",\"The Root Beer Buzz is the best root beer float you have had, without the foam. You get a full glass. Coffee, caffeine, and all of it. Some would say we made the first dirty soda back in 2016. That is the trend now. This one has been here the whole time.\"],\"fact\":\"Back in the day, A&W sold what I still think of as bootleg root beer, poured into gallons. It looked sketchy. It was much creamier than the bottled root beer in the store. The Root Beer Buzz is an homage to the root beer I used to get at the A&W in Fairhaven, back when carhops on roller skates brought it out to your car and life was just rad.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Vanilla, root beer, and coffee.\"},{\"label\":\"Sweetness\",\"detail\":\"Very sweet. 7.5 out of 10.\",\"level\":75},{\"label\":\"Caffeine\",\"detail\":\"Medium\",\"level\":55}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"icedOnly\":true},\"carnival-bizarre\":{\"slug\":\"carnival-bizarre\",\"name\":\"Carnival Bizarre\",\"image\":\"/drink-carnival-2.jpg\",\"imageAlt\":\"A Carnival Bizarre frozen drink with whipped cream\",\"paragraphs\":[\"Vanilla base. Cotton candy syrup, whipped in. That is the Carnival Bizarre before anybody starts acting up.\",\"Then we put Pop Rocks on top. They pop while you drink it. Your mouth thinks it bought a ticket.\",\"Kids love it. Adults order it and say it is for the kids. Sure.\",\"It is a carnival in your mouth. Iced only. We are not putting this in a hot cup.\"],\"fact\":\"The rumor was that Mikey, the kid from the Life cereal commercial, died because he ate Pop Rocks and drank soda. His stomach exploded. It is false. John Gilchrist, who played Mikey, is alive. Pop Rocks went on sale in 1975. General Foods said a pack makes less gas than half a can of soda. In 1979 they still bought full-page ads in 45 papers, because the playground would not drop it.\\nCotton candy was invented by a dentist. William Morrison and confectioner John Wharton built the machine in Nashville in 1897. They called it fairy floss. At the 1904 St. Louis World's Fair they sold 68,655 boxes, at 25 cents each. That was about half the price of getting in.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Cotton candy.\"},{\"label\":\"Sweetness\",\"detail\":\"7 out of 10.\",\"level\":70},{\"label\":\"Caffeine\",\"detail\":\"None.\",\"level\":0}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"icedOnly\":true},\"lemonade\":{\"slug\":\"lemonade\",\"name\":\"Lemonade\",\"image\":\"/drink-lemonade-2.jpg\",\"imageAlt\":\"A cup of lemonade with lemons, zest, and mint\",\"paragraphs\":[\"The lemonade is fresh-squeezed. Lemon and sugar. That is the base.\",\"We make it in-house, in big batches. It is not squeezed to order every morning.\"],\"fact\":\"Two ingredients in the plain one. Lemon and sugar.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Lemon.\"},{\"label\":\"Sweetness\",\"detail\":\"Sweet.\",\"level\":65},{\"label\":\"Caffeine\",\"detail\":\"None, unless you mix it with tea.\",\"level\":0}],\"flavorLead\":\"You can dress it.\",\"flavorNote\":\"Mermaid is blue curacao. Watermelon is watermelon. Hibiscus is half red hibiscus tea. Arnold Palmer is half black tea. Cherry or strawberry syrup if you want it.\",\"flavors\":[\"Mermaid\",\"Watermelon\",\"Hibiscus\",\"Arnold Palmer\"],\"icedOnly\":true},\"matcha-latte\":{\"slug\":\"matcha-latte\",\"name\":\"Matcha Latte\",\"image\":\"/drink-matcha-2.jpg\",\"imageAlt\":\"An iced pistachio matcha latte with pistachios\",\"paragraphs\":[\"This is not a matcha tea. This is a matcha latte.\",\"We started at The Nook with ceremonial matcha. Nobody really liked it. It was a little too potent, and a little too bitter. Everybody was expecting a sweet dessert tea, like the one at Starbucks.\",\"So we found a really good quality matcha latte mix, and that is what we use.\",\"It is for hot or iced drinks. It is gluten-free and lactose-free. It is sweetened, and it has caffeine. It can also be done dairy-free, with the milk of your choice, or infused with the flavors listed below.\"],\"fact\":\"The matcha latte is the cafe version, not the tea ceremony. Starbucks put a green tea latte on the menu in the spring of 2006, made with Japanese matcha and steamed milk. A blended green tea drink had already shown up the summer before, in 2005, after customers who had it in Asia asked for it here. That is what made the latte ordinary in America. The bigger wave came later. Dunkin' rolled a matcha latte out nationwide in February 2020, and in the 2020s the drink took over social media.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Sweet matcha latte.\"},{\"label\":\"Sweetness\",\"detail\":\"Sweetened.\",\"level\":70},{\"label\":\"Caffeine\",\"detail\":\"Yes. It has caffeine.\"}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[\"Pistachio Matcha\",\"Coconut Matcha\"],\"hotOrIced\":true},\"chai-latte\":{\"slug\":\"chai-latte\",\"name\":\"Chai Latte\",\"image\":\"/drink-chai.jpg\",\"imageAlt\":\"An iced Chai Latte next to a game controller\",\"paragraphs\":[\"Not to be confused with chai tea. Our chai latte is a powdered mix of spices and tea, blended with the milk of your choice.\",\"We often refer to this here at The Nook as Christmas in a cup. It has a lot of holiday spices.\",\"We also do this with multiple flavors (listed below). It can be done lactose-free, or dairy-free, with the milk of your choice.\",\"Hot or iced.\"],\"fact\":\"The latte version of chai landed in American cafes in the 1990s. Heather Howitt started Oregon Chai in Portland in 1994, after drinking masala chai in the Himalayas, and sold it to coffee shops out of her car. Starbucks tested a chai tea latte in Los Angeles in January 1998. By 1999 it was a regular menu item across the United States and Canada. That is the drink that made it ordinary, and the holiday-spice reputation came with it.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Holiday spices.\"},{\"label\":\"Sweetness\",\"detail\":\"6.5 out of 10.\",\"level\":65},{\"label\":\"Caffeine\",\"detail\":\"From the tea in the mix.\"}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[\"Vanilla\",\"Pistachio\",\"Coconut\",\"Dirty Chai (espresso)\"],\"hotOrIced\":true},\"red-hibiscus-tea\":{\"slug\":\"red-hibiscus-tea\",\"name\":\"Red Hibiscus Tea\",\"image\":\"/drink-hibiscus.jpg\",\"imageAlt\":\"A glass of ruby red Mighty Leaf hibiscus tea\",\"paragraphs\":[\"Red Hibiscus Tea is Mighty Leaf Wild Berry Hibiscus.\",\"It is tart hibiscus with elderberry, blueberry, and strawberry. The cup comes out ruby red.\",\"There is no caffeine in it. Hot or iced.\"],\"fact\":\"Mighty Leaf's flavor card lists tart hibiscus, elderberry, and summer berries.\",\"factCredit\":\"Mighty Leaf\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Tart hibiscus and summer berries.\"},{\"label\":\"Sweetness\",\"detail\":\"Tart, lightly sweet.\",\"level\":40},{\"label\":\"Caffeine\",\"detail\":\"None.\",\"level\":0}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOrIced\":true},\"white-tea\":{\"slug\":\"white-tea\",\"name\":\"White Tea\",\"image\":\"/drink-white-tea.jpg\",\"imageAlt\":\"A box of Mighty Leaf White Orchard tea\",\"paragraphs\":[\"White Tea is Mighty Leaf White Orchard.\",\"It is white tea from China with a little green tea, and notes of melon and peach. The cup is pale gold.\",\"Caffeine is light. Hot or iced.\"],\"fact\":\"Mighty Leaf's flavor card lists fresh grass, summer melon, and ripe peach.\",\"factCredit\":\"Mighty Leaf\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Melon and peach.\"},{\"label\":\"Sweetness\",\"detail\":\"Light.\",\"level\":35},{\"label\":\"Caffeine\",\"detail\":\"Light.\",\"level\":30}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOrIced\":true},\"english-breakfast-tea\":{\"slug\":\"english-breakfast-tea\",\"name\":\"Mighty Leaf English Breakfast\",\"image\":\"/drink-breakfast-tea.jpg\",\"imageAlt\":\"Mighty Leaf Organic Breakfast tea brewing in a glass pot\",\"paragraphs\":[\"English Breakfast Tea is Mighty Leaf Organic Breakfast. That is their English breakfast.\",\"It is organic black tea from India. The cup is malty, with citrus and a toasty finish. It stands up to milk and sugar.\",\"Caffeine is high, for a tea. We only serve it hot.\"],\"fact\":\"Mighty Leaf's flavor card lists malt, citrus, and toasty. The leaves are mostly Assam and Nilgiri.\",\"factCredit\":\"Mighty Leaf\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Malt, citrus, and toasty.\"},{\"label\":\"Sweetness\",\"detail\":\"Not sweet on its own.\",\"level\":10},{\"label\":\"Caffeine\",\"detail\":\"High, for tea.\",\"level\":60}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOnly\":true},\"tropical-green-tea\":{\"slug\":\"tropical-green-tea\",\"name\":\"Tropical Green Tea\",\"image\":\"/drink-tropical-tea.jpg\",\"imageAlt\":\"A box of Mighty Leaf Green Tea Tropical\",\"paragraphs\":[\"Tropical Green Tea is Mighty Leaf Green Tea Tropical.\",\"Smooth green tea leaves with pineapple and other tropical fruit. Cornflower petals are in the blend.\",\"The box calls the caffeine light. Hot or iced.\"],\"fact\":\"Mighty Leaf's own line on the box: green tea leaves infused with sweet tropical notes.\",\"factCredit\":\"Mighty Leaf\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Pineapple and tropical fruit.\"},{\"label\":\"Sweetness\",\"detail\":\"Lightly sweet.\",\"level\":40},{\"label\":\"Caffeine\",\"detail\":\"Light.\",\"level\":35}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOrIced\":true},\"paris\":{\"slug\":\"paris\",\"name\":\"Paris\",\"image\":\"/drink-paris.jpg\",\"imageAlt\":\"A tin of Harney and Sons Paris tea\",\"paragraphs\":[\"Paris is Harney & Sons.\",\"It is a fruity black tea with caramel, vanilla, and black currant, finished with a hint of bergamot.\",\"Mike Harney built it as a tribute to the Parisian tea shops, and to his wife, Brigitte. We only serve it hot.\"],\"fact\":\"The blend is black tea, oolong, black currant, vanilla, bergamot oil, and caramel.\",\"factCredit\":\"Harney & Sons\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Caramel, vanilla, black currant, and bergamot.\"},{\"label\":\"Sweetness\",\"detail\":\"Lightly sweet.\",\"level\":45},{\"label\":\"Caffeine\",\"detail\":\"Medium, for tea.\",\"level\":55}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOnly\":true},\"harney-english-breakfast\":{\"slug\":\"harney-english-breakfast\",\"name\":\"Harney English Breakfast\",\"image\":\"/drink-harney-breakfast.jpg\",\"imageAlt\":\"A tin of Harney and Sons English Breakfast tea\",\"paragraphs\":[\"This English Breakfast is Harney & Sons. It is not the Mighty Leaf one.\",\"Theirs is 100% Chinese Keemun. Toasty and mellow, with a hint of honey. Medium to full body. It takes milk and sugar.\",\"We only serve it hot.\"],\"fact\":\"Harney keeps the older English breakfast, Chinese black tea, from before the fashion turned to India and Ceylon. A cup is about 40 to 60 milligrams of caffeine.\",\"factCredit\":\"Harney & Sons\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Toast and honey.\"},{\"label\":\"Sweetness\",\"detail\":\"Not sweet on its own.\",\"level\":15},{\"label\":\"Caffeine\",\"detail\":\"Medium, for tea.\",\"level\":55}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOnly\":true},\"royal-earl-grey\":{\"slug\":\"royal-earl-grey\",\"name\":\"Royal Earl Grey\",\"image\":\"/drink-earl-grey.jpg\",\"imageAlt\":\"A tin of Harney and Sons Earl Grey Imperial\",\"paragraphs\":[\"Royal Earl Grey is Harney & Sons Earl Grey Imperial.\",\"They blended it for the Historic Royal Palaces. The body is stronger than their Earl Grey Supreme, and so is the lemony bergamot.\",\"Black tea, a little oolong, and oil of bergamot. We only serve it hot.\"],\"fact\":\"The tin is blue on purpose. Harney says it is meant to look like the sapphires in the Crown Jewels.\",\"factCredit\":\"Harney & Sons\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Lemony bergamot.\"},{\"label\":\"Sweetness\",\"detail\":\"Not sweet.\",\"level\":10},{\"label\":\"Caffeine\",\"detail\":\"Medium, for tea.\",\"level\":55}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOnly\":true},\"lemon-lift\":{\"slug\":\"lemon-lift\",\"name\":\"Lemon Lift\",\"image\":\"/drink-lemon-lift.jpg\",\"imageAlt\":\"A box of Bigelow Lemon Lift black tea\",\"paragraphs\":[\"Lemon Lift is Bigelow.\",\"Black tea with lemon and a dash of spice. The box says just the right amount of lemon.\",\"The bag is black tea, natural lemon flavor, spice, and lemon peel. It has caffeine. We only serve it hot.\"],\"fact\":\"Bigelow's line on the box: a distinctive blend with just the right amount of lemon and a dash of spice.\",\"factCredit\":\"Bigelow\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Lemon and a little spice.\"},{\"label\":\"Sweetness\",\"detail\":\"Bright, not sugary.\",\"level\":30},{\"label\":\"Caffeine\",\"detail\":\"Medium, for tea.\",\"level\":50}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOnly\":true},\"espresso\":{\"slug\":\"espresso\",\"name\":\"Espresso\",\"image\":\"/drink-espresso-shop.jpg\",\"imageAlt\":\"A shot of espresso from The Nook with a rock candy stick\",\"paragraphs\":[\"Here at The Nook, we only pull double shots.\",\"The dose is 22 G of coffee. Most shops use 17 G. The extra coffee is there so we can pull a ristretto, which means restricted.\",\"Less water goes through the coffee, and the shot stops early. Sweetness extracts first. The burnt, bitter, and sharper acidic notes come later, which is what you get when a shot is over-pulled. That long pull is called a lungo.\",\"Caffeine dissolves quickly, so most of it is already in the ristretto. The cup is more concentrated, sip for sip. The shot has a little less caffeine than a lungo, because a lungo is more liquid and keeps extracting.\",\"Every shot at The Nook is a ristretto. Crema on top. No milk. No sugar, unless you ask.\"],\"fact\":\"There ain't no X in espresso. We charge extra for that.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Sweet, concentrated, and not pulled long.\"},{\"label\":\"Sweetness\",\"detail\":\"No sugar. Sweeter than a long pull.\",\"level\":20},{\"label\":\"Caffeine\",\"detail\":\"Low to medium.\",\"level\":35}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"latte\":{\"slug\":\"latte\",\"name\":\"Latte\",\"image\":\"/drink-latte.jpg\",\"imageAlt\":\"An iced latte at The Nook CoffeeHouse\",\"paragraphs\":[\"A latte is a double shot of espresso and milk.\",\"Hot, the milk is steamed, with a thin cap of foam. Iced, there is no steamed milk. Espresso, milk of your choice, over ice.\",\"It has more milk than a cappuccino, so the coffee sits further back.\"],\"fact\":\"Hey genius. Order a latte in Italy and you will probably get a cup of warm milk.\\nThe first one was in 1959, at Caffe Mediterraneum in Berkeley. Lino Meiorin kept getting asked for more milk in a cappuccino. Latte just means milk, so that is what he wrote on the menu. It started in a bowl, then a pint glass. Seattle made it famous in the 1980s.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Espresso, softened by milk.\"},{\"label\":\"Sweetness\",\"detail\":\"None, unless you add a flavor.\",\"level\":10},{\"label\":\"Caffeine\",\"detail\":\"The double shot. Milk does not add any.\",\"level\":35}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[],\"hotOrIced\":true},\"cappuccino\":{\"slug\":\"cappuccino\",\"name\":\"Cappuccino\",\"image\":\"/drink-cappuccino.jpg\",\"imageAlt\":\"A cappuccino with a thick cap of foam\",\"paragraphs\":[\"The height of 90s sophistication and class.\",\"It starts with a double shot of espresso. Then steamed milk, then a thick layer of foam.\",\"A cappuccino is a ratio. One third espresso, one third milk, and one third foam. The foam is the point. It is a hot drink. It cannot be done iced.\"],\"quote\":\"“Do you have a decaf cappuccino? Well, it’s a very popular drink.” Kramer, Seinfeld\",\"fact\":\"The name comes from the Capuchin friars. The brown and white foam looked like their hoods.\\nIt reached America in 1927, when Caffe Reggio in New York put an Italian espresso machine on the counter and started pulling cappuccinos.\\nIt stayed an Italian-cafe drink until the 90s. Then the coffee shops spread, Friends put one in every living room, and a cappuccino became the order.\",\"hotOnly\":true,\"meter\":[{\"label\":\"Taste\",\"detail\":\"Espresso under a thick foam cap.\"},{\"label\":\"Sweetness\",\"detail\":\"None.\",\"level\":5},{\"label\":\"Caffeine\",\"detail\":\"The double shot.\",\"level\":35}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"cortado\":{\"slug\":\"cortado\",\"name\":\"Cortado\",\"image\":\"/drink-cortado.jpg\",\"imageAlt\":\"A cortado in a small glass\",\"paragraphs\":[\"A cortado is equal parts espresso and warm milk, in a small cup.\",\"(At The Nook, we only do eight ounces.)\",\"A little foam. Not a cap.\",\"The milk cuts the espresso so it is smoother, without turning it into a big milky drink.\"],\"fact\":\"Cortado is Spanish for cut. Cortar. The milk cuts the espresso.\\nJohn Cena's favorite drink is the cortado. Unfortunately, the cortado just can't see John Cena.\",\"meter\":[{\"label\":\"Taste\",\"detail\":\"Espresso cut with warm milk.\"},{\"label\":\"Sweetness\",\"detail\":\"None.\",\"level\":5},{\"label\":\"Caffeine\",\"detail\":\"The double shot, in a small cup.\",\"level\":35}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]},\"macchiato\":{\"slug\":\"macchiato\",\"name\":\"Macchiato\",\"image\":\"/drink-macchiato.jpg\",\"imageAlt\":\"An espresso macchiato marked with a dollop of foam\",\"paragraphs\":[\"A macchiato is espresso marked with a spoon of foam.\",\"That is the whole drink. A shot, with a stain of milk on top. It is not a big flavored latte. It is a hot drink.\",\"There is a controversy, and it is worth getting out of the way. The real macchiato is not the drink most people are looking for.\",\"Starbucks bastardized it. An iced macchiato, or a caramel macchiato from Starbucks or any of the big chains, is a double latte. A latte here is two ounces of espresso. That drink is four. If the size calls for four ounces, you are looking at eight. That is a double latte. It is not a macchiato.\"],\"fact\":\"Macchiato is Italian for stained, or marked. It showed up in Italian cafes with the espresso bar, in the early 1900s. A spot of foam marked the cup so you could tell it from a straight shot.\\nStarbucks put a caramel macchiato on the menu in 1996 and changed what the word means. Vanilla, a pile of milk, espresso poured on top, caramel over that.\\nReal coffee shops still tense up when somebody orders a macchiato. We are afraid you are about to get a drink you did not want.\",\"hotOnly\":true,\"meter\":[{\"label\":\"Taste\",\"detail\":\"Espresso, marked with foam.\"},{\"label\":\"Sweetness\",\"detail\":\"None.\",\"level\":5},{\"label\":\"Caffeine\",\"detail\":\"The double shot, barely cut.\",\"level\":35}],\"flavorLead\":\"\",\"flavorNote\":\"\",\"flavors\":[]}}"),
	ng: {
		"shop": "fairhaven",
		"title": "Encyclopedia of Nook Food",
		"intro": "Food is where The Nook is a little different. The case changes. Some days it is seasonal. Some days it is a recipe we have made for years that is not in that morning. What is in this encyclopedia is a staple of The Nook, unless it is under Sometimes.",
		"categories": [
			{
				"letter": "R",
				"title": "Rolls",
				"foods": [{
					"name": "Linguiça Rolls",
					"slug": "linguica-rolls"
				}, {
					"name": "Cheese Rolls",
					"slug": "cheese-rolls"
				}]
			},
			{
				"letter": "B",
				"title": "Baked here",
				"foods": [
					{
						"name": "Croissants",
						"slug": "croissants"
					},
					{
						"name": "Buttermilk Biscuits",
						"slug": "buttermilk-biscuits"
					},
					{
						"name": "Muffins",
						"slug": "muffins"
					},
					{
						"name": "Bagels",
						"slug": "bagels"
					},
					{
						"name": "Donuts",
						"slug": "glazed-donut"
					},
					{
						"name": "Focaccia Pizza",
						"slug": "focaccia"
					}
				]
			},
			{
				"letter": "S",
				"title": "Built to order",
				"foods": [{
					"name": "LVLUP",
					"slug": "lvlup"
				}, {
					"name": "Açai Bowl",
					"slug": "acai-bowl"
				}]
			},
			{
				"letter": "*",
				"title": "Sometimes",
				"sometimes": true,
				"foods": [
					{
						"name": "Cinnamon Rolls",
						"slug": "cinnamon-rolls"
					},
					{
						"name": "Sticky Buns",
						"slug": "sticky-buns"
					},
					{
						"name": "Nanner Pudding",
						"slug": "nanner-pudding"
					},
					{
						"name": "Coffee House Chili",
						"slug": "coffee-house-chili"
					},
					{
						"name": "Caçoila",
						"slug": "cacoila"
					},
					{
						"name": "ChokoKong",
						"slug": "choko-kong"
					}
				]
			}
		]
	},
	ig: {
		"shop": "plymouth",
		"title": "Encyclopedia of Nook Food",
		"intro": "Food is where The Nook is a little different. The case changes. Some days it is seasonal. Some days it is a recipe we have made for years that is not in that morning. What is in this encyclopedia is a staple of The Nook, unless it is under Sometimes.",
		"categories": [
			{
				"letter": "R",
				"title": "Rolls",
				"foods": [{
					"name": "Linguiça Rolls",
					"slug": "linguica-rolls"
				}, {
					"name": "Cheese Rolls",
					"slug": "cheese-rolls"
				}]
			},
			{
				"letter": "B",
				"title": "Baked here",
				"foods": [
					{
						"name": "Croissants",
						"slug": "croissants"
					},
					{
						"name": "Bagels",
						"slug": "bagels"
					},
					{
						"name": "Donuts",
						"slug": "glazed-donut"
					}
				]
			},
			{
				"letter": "S",
				"title": "Built to order",
				"foods": [{
					"name": "LVLUP",
					"slug": "lvlup"
				}]
			},
			{
				"letter": "*",
				"title": "Sometimes",
				"sometimes": true,
				"foods": [
					{
						"name": "Nanner Pudding",
						"slug": "nanner-pudding"
					},
					{
						"name": "Coffee House Chili",
						"slug": "coffee-house-chili"
					},
					{
						"name": "Caçoila",
						"slug": "cacoila"
					}
				]
			}
		]
	},
	ag: /* @__PURE__ */ JSON.parse("{\"linguica-rolls\":{\"slug\":\"linguica-rolls\",\"name\":\"Linguiça Rolls\",\"image\":\"/food-linguica.jpg?v=3\",\"imageAlt\":\"A linguica roll from The Nook\",\"ribbon\":\"#1 Seller\",\"paragraphs\":[\"Linguiça rolls were the first thing we made at The Nook that was going on the menu.\",\"We only did two real revisions. We already knew what we wanted it to taste like. Nostalgic, like the places we went growing up, with a Nook twist.\",\"We treat the bread almost like a pretzel bun, with a little sea salt that we affectionately call our “Sea Salt Sprinkle.” We also add cheese inside the linguiça rolls. The cheese is a mix of Colby, cheddar, and American.\",\"Over the years our linguiça rolls have become a staple in Fairhaven, Massachusetts. A lot of our customers say they are the best around.\",\"We are far too humble to say they are the best around. In fact, we would never say THEY ARE THE BEST AROUND!\",\"They are salty, with a garlicky kick, and they make an amazing base for a breakfast sandwich.\",\"We bake them fresh throughout the day, so you are getting them fresh and hot. Or at least warm.\",\"We go through these things like crazy.\"],\"fact\":\"Linguiça is a smoked Portuguese pork sausage, heavy on garlic and paprika. The name comes from the Latin lūcānica, a sausage the Romans picked up in Lucania, in southern Italy. Portuguese ships carried it to the Azores, to Brazil, and eventually to the docks and mills of the South Coast.\\n\\nNew Bedford’s Portuguese community started with the whaling ships, which stopped in the Azores and came home with new crews. Fall River’s textile mills brought the next wave. After the Capelinhos volcano erupted on Faial in 1957, another generation of Azoreans settled here. Fall River now has the largest Portuguese population in the country, and New Bedford is right behind it. Around here, New Bedford tends to say linguiça and Fall River tends to say chouriço. Same family of sausage. Different hometown. Chouriço is often made a little spicier, with a stronger flavor. A lot of people say linguiça is the Temu chorizo. We refute that here at The Nook.\"},\"cheese-rolls\":{\"slug\":\"cheese-rolls\",\"name\":\"Cheese Rolls\",\"image\":\"/food-cheese-roll.jpg\",\"imageAlt\":\"A cheese roll from The Nook\",\"paragraphs\":[\"Sometimes simple is better. The cheese roll is the epitome of simplicity.\",\"A blend of cheddar, Colby, and American, baked into our Nook house dough. Topped with our “Sea Salt Sprinkle.” Made with love.\",\"A perfect vessel for a breakfast sandwich. Simple. Easy. Everything that is good about food. Sometimes the simple things are what make us happy.\",\"But don’t you dare call these cheese rolls plain Jane. They’re not.\"],\"fact\":\"A lot of people taste a cheese roll and file it under Portuguese. It is not. The bakeries in Fall River and New Bedford are Portuguese. The cheese roll is what those bakeries started making once they were here.\\n\\nNew Bedford has its version. Fall River has its version. Ask either city who does it right and you will start an argument. Not a recipe from Lisbon. A roll this area decided it could not live without.\\n\\nA lot of people didn’t realize American cheese started off as a mild cheddar. Over the years, companies like Cooper Sharp and Land O’Lakes have kept that going. Some have even added Colby, for the way it melts. It gives the cheese a better texture, and more of a tangy punch.\"},\"croissants\":{\"slug\":\"croissants\",\"name\":\"Croissants\",\"image\":\"/food-croissant.jpg?v=2\",\"imageAlt\":\"A hand-rolled croissant from The Nook\",\"paragraphs\":[\"We hand-roll our croissants every morning. Not pulled from a freezer. Not “croissant-style.” Rolled.\",\"The recipe is simple. We learned it in the New Orleans French style, which is a polite way of saying it should taste like you just stepped off Bourbon Street.\",\"Plain, they are fantastic. Put one under a breakfast sandwich and they get even better. We call that a [[LVLUP|lvlup]].\",\"Come on down to The Nook and try one. Bourbon Street is a long drive from Fairhaven.\"],\"fact\":\"The shape is Austrian. The pastry is French. Vienna already had a crescent roll called the kipferl. The 1683 siege story is a myth. Around 1839, August Zang opened a Viennese bakery in Paris and sold kipferl there. The French named the crescent a croissant. The flaky kind shows up in French recipes in the early 1900s.\\n\\nAmerica got it late, and mostly frozen. Sara Lee put one in the freezer case in 1981. Denis Leary said it best in the nineties. The French gave us the croissant, and we went and turned it into the Croissan’wich. An obvious jab. Looking at you, Burger King.\"},\"muffins\":{\"slug\":\"muffins\",\"name\":\"Muffins\",\"images\":[{\"src\":\"/food-muffin-1.jpg\",\"alt\":\"Blueberry muffins from The Nook\"},{\"src\":\"/food-muffin-2.jpg\",\"alt\":\"Berry muffins and crumb muffins in the case\"},{\"src\":\"/food-muffin-3.jpg\",\"alt\":\"Sugar-topped muffins, blueberry and chocolate\"},{\"src\":\"/food-muffin-4.jpg\",\"alt\":\"Glazed muffins on a tray at The Nook\"}],\"gallery\":\"row\",\"paragraphs\":[\"Muffins at The Nook are no joke.\",\"We usually feature one or two options a day. Made special. We try to use what is in season. Blueberry season, blueberries. Strawberry season, a strawberry lemonade muffin.\",\"The famous one is the [[ChokoKong|choko-kong]]. It does not live on this page every day. It lives under Sometimes. If it is in the case, you already know what to do.\"],\"fact\":\"The English muffin and the American muffin are not the same bread. The English one is older. A yeasted round, cooked on a griddle, split with a fork. That is the one that shows up in London in the 1700s.\\n\\nThe muffin in a coffee shop case is a quick bread. Baking powder, a cup, an oven. No yeast, no wait. America turned that into the blueberry muffin, then into the giant one. Same word. Different breakfast.\"},\"buttermilk-biscuits\":{\"slug\":\"buttermilk-biscuits\",\"name\":\"Buttermilk Biscuits\",\"image\":\"/food-biscuit.jpg?v=2\",\"imageAlt\":\"Buttermilk biscuits from The Nook\",\"paragraphs\":[\"On our trip to Memphis, we were lucky enough to meet a local and ended up at a family Sunday dinner. The woman cooking for everyone was called Auntie Mae. We were invited as guests. We insisted on buying the groceries and cooking with her.\",\"She led us into her kitchen and sat us down with her family. It was one of the best culinary experiences we have ever had.\",\"She gave us her buttermilk biscuit recipe. She also gave us her banana pudding recipe, with one condition. “If you call it banana pudding, I will come back to haunt you.” In Memphis, it is referred to as [[nanner pudding|nanner-pudding]].\",\"We kept the recipe and put a Nook twist on it. The butter is cultured here, a 48-hour process. The buttermilk left from that butter is the buttermilk in the biscuits.\",\"They are baked fresh every morning. They make a very good breakfast sandwich.\"],\"fact\":\"The soft Southern biscuit is newer than the story sounds. Before baking soda, a Southern biscuit was beaten by hand and came out hard, closer to a cracker. Baking soda reached American kitchens in the 1840s. The acid in leftover buttermilk, the sour milk from churning butter, could finally lift the dough. The style belongs to the South. Tennessee, Kentucky, the Carolinas, Georgia, and Alabama are the places people mean. Biscuits and gravy leans toward the mountains. A plain buttermilk biscuit is the one the whole South claims.\"},\"nanner-pudding\":{\"slug\":\"nanner-pudding\",\"name\":\"Nanner Pudding\",\"images\":[{\"src\":\"/food-nanner-1.jpg\",\"alt\":\"A cup of nanner pudding\"},{\"src\":\"/food-nanner-2.jpg\",\"alt\":\"Biscoff nanner pudding parfaits\"},{\"src\":\"/food-nanner-3.jpg\",\"alt\":\"Strawberry nanner pudding parfaits with whipped cream\"}],\"paragraphs\":[\"Calling it amazing is an understatement. We have been to Magnolia. We have had the pudding everyone will not stop talking about. We would venture to say ours is better.\",\"The recipe was a gift from Auntie Mae, a wonderful woman in Memphis. We took it and did our own thing with it.\",\"It is a sometimes item. Not every day. More weekends than not, it is in the case. The big sellers are the Biscoff and the strawberry. We make them as parfaits, with stabilized whipped cream. One of the best things we put in that case.\"],\"fact\":\"Banana pudding is American. Recipes show up in the 1890s, usually sponge cake or ladyfingers under a custard and sliced bananas. Vanilla wafers show up around 1920, in a recipe from Laura Kerley in Bloomington, Illinois. In the 1940s Nabisco started printing a banana pudding recipe on the Nilla Wafers box, and that became the one people mean.\\n\\nIt was not born a Southern dish. It became one. Easy to make in a big bowl, no oven, happy at a picnic. The South kept it. New York made a version of it famous again. The argument is still the same one. Wafers, bananas, custard, cream.\"},\"bagels\":{\"slug\":\"bagels\",\"name\":\"Bagels\",\"image\":\"/food-bagel.jpg\",\"imageAlt\":\"Sesame, plain, and everything bagels baked at The Nook\",\"paragraphs\":[\"Over the last decade, we have made some wonderful vendor relationships. We are lucky, and honored, to be close with our friends at [[New York Bagel|https://newyorkbagelco.org/]] in Dartmouth, Massachusetts.\",\"They send the bagels to us par-baked, and we bake them in the shop every morning. You are not getting a bagel that has been sitting around. You are not getting one that was frozen. It comes out of the oven at The Nook.\",\"We usually carry three or four flavors. They are fantastic on their own. Mostly, they are the vessel for a breakfast sandwich. We call that a [[LVLUP|lvlup]].\"],\"fact\":\"The bagel comes from Jewish communities in Poland. A 1610 rule in Kraków mentions bagels given to women in childbirth. Immigrants brought the boiled-then-baked ring to New York in the late 1800s, and for a long time it stayed a neighborhood bread.\\n\\nFrozen bagels, especially Lender’s, put them in supermarkets in the 1960s. By the 1980s and 90s the bagel was a national breakfast, and America did what it does. It put an egg, cheese, and meat on it and called it a sandwich.\"},\"glazed-donut\":{\"slug\":\"glazed-donut\",\"name\":\"Donuts\",\"image\":\"/food-donut.jpg\",\"imageAlt\":\"Donuts from USA Homemade Donuts\",\"paragraphs\":[\"We are lucky enough to have partnered with some amazing vendors here at The Nook. Our donuts come from our friends at [[USA Homemade Donuts|https://www.facebook.com/USAHomemadeDonuts]] in New Bedford.\",\"The first time I went in, I was with a friend. We wanted blueberry filled donuts, and they only had one. She went in the back and made a blueberry donut fresh for my friend. I thought, that is customer service. That is the kind we want next to us.\",\"USA Homemade Donuts are fresh to perfection. They have been a partner of ours for about as long as they have been open. We look forward to keeping it that way.\"],\"fact\":\"The hole has a legend. Hanson Gregory, a Maine sailor, is said to have punched it out in 1847 because the middle of the cake would not cook. Cute story. The part that is documented is the machine. In 1920 Adolph Levitt put an automatic donut machine in a Harlem bakery window, and a glazed ring became something a shop could sell all morning.\"},\"focaccia\":{\"slug\":\"focaccia\",\"name\":\"Focaccia Pizza\",\"images\":[{\"src\":\"/food-focaccia-1.jpg\",\"alt\":\"Pepperoni focaccia pizza with peppers and onions\"},{\"src\":\"/food-focaccia-2.jpg\",\"alt\":\"Buffalo chicken focaccia pizza\"},{\"src\":\"/food-focaccia-3.jpg\",\"alt\":\"Barbecue chicken focaccia pizza\"}],\"paragraphs\":[\"Here at The Nook, the focaccia pizza changes pretty much every day. Come back tomorrow and it will be a different one. That is the idea.\",\"It might be Fireflower, which is buffalo chicken. It might be Harvest Moon, the vegetable one. Onions, peppers, garlic, and sometimes a hot honey drizzle. The honey is from [[Nettie's Bees|https://www.nettiesbees.com/]], a small farm in Rochester, Massachusetts. It is honey. Not a bottle of cane syrup that waved at a pepper.\",\"The ones people ask for most are Fireflower, the Swineapple, Harvest Moon, and the barbecue chicken.\",\"Come grab a slice. Some people eat it at room temperature. Some people want it warm in a hurry, and a microwave will do that. If you are not in a rush, have us put it on the pizza stone. It takes a little longer. The bottom gets crisp. That is the way to enjoy it.\"],\"fact\":\"Traditional focaccia is from Liguria, especially Genoa. The name comes from the Latin focus, the hearth. It is an olive-oil bread, dimpled, salted, sometimes finished with rosemary or onions. It is bread. Pizza is a different argument.\\n\\nIn a lot of the United States, and around here, focaccia got recruited. Thicker dough, cheese, chicken, sauce. Closer to a square pizza that used to be a bread. That is the one we make.\"},\"lvlup\":{\"slug\":\"lvlup\",\"name\":\"LVLUP\",\"images\":[{\"src\":\"/food-lvlup-bacon.jpg\",\"alt\":\"Bacon, egg, and cheese LVLUP\"},{\"src\":\"/food-lvlup-asiago.jpg\",\"alt\":\"Asiago bagel LVLUP with bacon, egg, and cheese\"},{\"src\":\"/food-lvlup-sausage.jpg\",\"alt\":\"Sausage, egg, and cheese LVLUP\"},{\"src\":\"/food-lvlup-croissant.jpg\",\"alt\":\"Croissant LVLUP with bacon, egg, and cheese\"}],\"paragraphs\":[\"We do things a little differently here at The Nook. A roll, a croissant, a biscuit, a bagel, even a [[glazed donut|glazed-donut]]. Egg, and bacon or sausage. That is a LVLUP.\",\"Here are the steps. It is really easy.\"],\"steps\":[{\"label\":\"Pick your roll\",\"choices\":[{\"name\":\"Cheese roll\",\"slug\":\"cheese-rolls\"},{\"name\":\"Linguiça roll\",\"slug\":\"linguica-rolls\"},{\"name\":\"Croissant\",\"slug\":\"croissants\"},{\"name\":\"Biscuit\",\"slug\":\"buttermilk-biscuits\"},{\"name\":\"Bagel\",\"slug\":\"bagels\"},{\"name\":\"Glazed donut\",\"slug\":\"glazed-donut\"}]},{\"label\":\"Pick your protein\",\"choices\":[{\"name\":\"Bacon\"},{\"name\":\"Sausage\"}]},{\"label\":\"Choose your sauce\",\"choices\":[{\"name\":\"House-made Nook sauce\"},{\"name\":\"Fireflower buffalo\"},{\"name\":\"Bacon habanero jam\"}]},{\"label\":\"You leveled up.\",\"finale\":true}],\"fact\":\"An egg on bread is old. The breakfast sandwich, as America means it, is not. Through the middle of the 20th century it lived at diners, truck stops, and New York deli counters. A fried egg, some meat, a roll. Nobody had given it a national name.\\n\\nIn 1971 Herb Peterson, a McDonald’s operator in Santa Barbara, wanted a breakfast that could survive a car. He started with eggs Benedict, swapped the hollandaise for a slice of cheese, and set it on an English muffin with Canadian bacon. He cooked the egg in a Teflon ring so it would fit. That was the Egg McMuffin. It cost 63 cents in test markets in 1972 and went national in 1975. In 1977 McDonald’s put a whole breakfast menu on the board. Once a drive-through could sell the morning, everybody else did too. Biscuits, croissants, bagels, the bacon, egg, and cheese. Breakfast stopped being a table and became something you carried.\"},\"coffee-house-chili\":{\"slug\":\"coffee-house-chili\",\"name\":\"Coffee House Chili\",\"image\":\"/food-chili.jpg?v=2\",\"imageAlt\":\"A pot of chili with beans and a ladle\",\"paragraphs\":[\"My wife and I have been making Coffee House Chili since way before The Nook existed. If there was a dish to bring, people were not subtle about it. Oh my god, you have to bring your chili. It got popular that way. When we opened, we already knew it was going on the menu.\",\"It is a sometimes item. Mostly winter. We barely make it in the summer, because my wife has decided soup is not allowed once the weather gets nice. Crazy talk. I am writing this down so there is a record.\",\"It starts with sirloin. We blacken the steak with espresso powder, get a real sear on it, and chop it. Then ground beef. Then three kinds of beans, because one kind of bean is a side and three kinds is a commitment.\",\"The ingredient that matters is time. The clock. It cooks a long time. That is the whole trick. Everything else is just in the pot, getting along.\",\"The chili powders are gluten free, so the chili is too. You may relax.\",\"We also do it as breakfast. A specialty sandwich called the Sloppy Nook. A [[cheese roll|cheese-rolls]], the chili, an egg, and cheese. It is extremely sloppy. That is the idea. Our version of a sloppy joe.\",\"It is often served with our cornbread muffins (which are not gluten free). Those, in my opinion, are some of the best muffins around. The chili does not argue.\"],\"fact\":\"Chili con carne, as America means it, was a San Antonio plaza food. In the late 1800s, families set up stands in the squares and sold a stew of meat and dried red chile. Visitors started writing about it around 1877. Outsiders later called the women who cooked it the Chili Queens. They did not call themselves that. The name in the plazas was closer to carne con chile. The trains brought more visitors, the newspapers kept writing, and the bowl left Texas. The argument about beans came later.\"},\"cinnamon-rolls\":{\"slug\":\"cinnamon-rolls\",\"name\":\"Cinnamon Rolls\",\"images\":[{\"src\":\"/food-cinnamon-3.jpg\",\"alt\":\"Pecan cinnamon rolls before they go in the oven\"},{\"src\":\"/food-cinnamon-1.jpg\",\"alt\":\"A tray of cinnamon rolls baked at The Nook\"},{\"src\":\"/food-cinnamon-2.jpg\",\"alt\":\"Cinnamon rolls finished with cream cheese frosting\"},{\"src\":\"/food-cinnamon-4.jpg\",\"alt\":\"A cinnamon roll pulled apart, with cream cheese frosting\"}],\"paragraphs\":[\"Here at The Nook, we take our cinnamon rolls pretty seriously. They are a sometimes item. More winter than summer. When the weather turns, they show up in the case. When it does not, we behave.\",\"They start with a brioche-style dough. Soft, a little rich, already sure of itself before the cinnamon gets a vote.\",\"Then Katie’s cream cheese frosting. People lose their minds over it. We are not going to talk them out of it.\",\"We do not stick to one roll. A cocoa hot chocolate one, with marshmallows and chocolate ganache in the swirl. A pistachio one. Other flavors, when the mood hits. If it is in the case, that is the one today.\"],\"fact\":\"The cinnamon roll people argue about is not one pastry. Sweden’s is the kanelbulle. Cardamom in the dough, cinnamon and sugar in the spiral, pearl sugar on top, and no frosting. In 1999 the Swedish Home Baking Council made October 4 Kanelbullens dag. The country treats it like a holiday.\\n\\nThe frosted bakery roll is the American one. German bakers had already brought schnecken, the snail-shaped sweet roll. Here it got bigger, sweeter, and covered. Cream cheese frosting showed up late. Thicker than a glaze, a little tangy, and it stays where you put it. That is the one Katie makes.\"},\"sticky-buns\":{\"slug\":\"sticky-buns\",\"name\":\"Sticky Buns\",\"images\":[{\"src\":\"/food-sticky-1.jpg\",\"alt\":\"A pecan caramel sticky bun from The Nook\"},{\"src\":\"/food-sticky-2.jpg\",\"alt\":\"A pan of pecan sticky buns\"},{\"src\":\"/food-sticky-3.jpg\",\"alt\":\"Sticky buns covered in pecans and caramel\"}],\"paragraphs\":[\"Same dough as the [[cinnamon rolls|cinnamon-rolls]]. That is where the family resemblance ends. Sticky buns hit a little different.\",\"We top them with whatever we are in the mood for. The default, the one people mean, is pecan and caramel. Pecan-laced. Caramel-infused. A delicious bun thing. That is the technical description.\",\"What is the difference between a cinnamon roll and a sticky bun? Toppings, and how sticky you are willing to get. A cinnamon roll wears frosting. A sticky bun is the frosting. Sticky buns are sticky. We checked.\",\"They are a sometimes item. We do not put them out every day. When they show up in the case, they sell out. Every time.\"],\"fact\":\"Sticky buns are the Philadelphia version of a German pastry. The German name is schnecken, which means snails, because of the spiral. Pennsylvania German bakers brought them over. In Philadelphia the pan gets butter, brown sugar, and usually pecans. The roll bakes in that, then gets turned out, so the sticky part is the top.\\n\\nA cinnamon roll is frosted after it comes out. A sticky bun is glazed by the pan it baked in. Same family. Different crime.\"},\"choko-kong\":{\"slug\":\"choko-kong\",\"name\":\"ChokoKong\",\"image\":\"/food-chokokong.jpg\",\"imageAlt\":\"ChokoKong muffin, a southern buttermilk banana bread muffin with chocolate chunks\",\"paragraphs\":[\"Before The Nook, there was a shot. Banana and Godiva chocolate. We called it the ChokoKong. Like Chaka Khan. Also like Donkey Kong. We were not choosing.\",\"We opened. The shot became the muffin. A Southern buttermilk banana bread muffin, with chocolate chunks. Of course it did.\",\"Sometimes item. Huge seller. If it is in the case, get here early. You might have a hard time getting one. That is not our problem.\",\"Good luck finding a muffin that can move and shake like this.\",\"The ChokoKong is so good you'll be losing your mind... and we'll be reaping the benefits.\",\"“Chaka Khan!!!” — Jon Lovitz, The Wedding Singer.\"],\"fact\":\"Banana bread shows up in American cookbooks in the 1930s, once ships were bringing in more bananas than anyone could eat ripe. The brown ones went into a quick bread. The muffin is that idea, in a cup, with the chocolate we refused to leave out.\"},\"cacoila\":{\"slug\":\"cacoila\",\"name\":\"Caçoila\",\"paragraphs\":[\"Portuguese braised pork.\",\"On a cheese roll, a biscuit, or a pop.\"]},\"acai-bowl\":{\"slug\":\"acai-bowl\",\"name\":\"Açai Bowl\",\"image\":\"/food-acai.jpg?v=2\",\"imageAlt\":\"An açai bowl from The Nook, with strawberry, blueberry, banana, coconut, and granola\",\"imageWide\":true,\"paragraphs\":[\"Sometimes simple is better. Our açai bowls take that approach. Marco Pierre White said it, and he got it from Fernand Point. “Perfection is lots of little things done well.”\",\"Strawberry, blueberry, banana, coconut, and granola. Finished with raw honey from [[Nettie's Bees|https://www.facebook.com/nettiesbees]], a small honey farm in Rochester. It is honey. Not the sugary stuff.\",\"Peanut butter, almond butter, or Nutella, for a slight upcharge.\"],\"fact\":\"Açaí is the fruit of a palm in the Amazon floodplain, mostly in Pará, Brazil. For a long time it was a staple, eaten savory, with fish or manioc. Not a dessert.\\n\\nThe sweet bowl is newer. In Rio in the 1980s and 90s, frozen pulp got blended thick, often with banana and guaraná, and topped with granola. Surfers and the jiu-jitsu gyms made it a thing you ate after training. It reached the United States around 2000, when a few California surfers came home from Brazil and started importing the frozen pulp. Juice bars piled on the fruit. That is the bowl people mean now.\"}}")
};
function asset(src) {
	if (!src) return "";
	return src.split("?")[0] ?? src;
}
function catalogs(shop) {
	return shop === "plymouth" ? {
		food: menu.ig,
		drinks: menu.Zh
	} : {
		food: menu.ng,
		drinks: menu.Xh
	};
}
function foodPage(slug) {
	return menu.ag[slug];
}
function drinkPage(slug) {
	return menu.Qh[slug];
}
function foodOnMenu(shop, slug) {
	return catalogs(shop).food.categories.some((category) => category.foods.some((food) => food.slug === slug));
}
function drinkOnMenu(shop, slug) {
	return catalogs(shop).drinks.categories.some((category) => category.drinks.some((drink) => drink.slug === slug));
}
function foodHref(shop, slug) {
	return shop === "plymouth" ? `/plymouth/food/${slug}` : `/fairhaven/food/${slug}`;
}
function drinkHref(shop, slug) {
	return shop === "plymouth" ? `/plymouth/drinks/${slug}` : `/fairhaven/drinks/${slug}`;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Ac2meZLC.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles--Nw4NsQ8.css";
var Route$20 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "The Nook CoffeeHouse – Fairhaven & Plymouth" },
			{
				name: "description",
				content: "Two Nook shops. Fairhaven is the original coffeehouse at 58 Washington Street. Plymouth is a drive-thru for coffee and breakfast sandwiches at 2235 State Road."
			},
			{
				name: "theme-color",
				content: "#161616"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,500;1,600&family=Dancing+Script:wght@700&family=Press+Start+2P&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: Root
});
function Root() {
	const path = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased chalkboard",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-bg text-fg font-sans",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-dvh flex-col",
					children: [path === "/board" || path === "/qr" ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex min-h-0 flex-1 flex-col",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$19 = () => import("./routes-BpoyWeAl.mjs");
var Route$19 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./about-B4qahXX9.mjs");
var Route$18 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About The Nook CoffeeHouse – Fairhaven" }, {
		name: "description",
		content: "The Nook CoffeeHouse opened in 2016 at 58 Washington Street in Fairhaven, Massachusetts."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./board-RSV9H_XV.mjs");
var Route$17 = createFileRoute("/board")({
	head: () => ({ meta: [{ title: "Menu board · The Nook CoffeeHouse Plymouth" }, {
		name: "description",
		content: "In-store menu board for The Nook CoffeeHouse Plymouth."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./qr-DcMivSvU.mjs");
var Route$16 = createFileRoute("/qr")({
	head: () => ({ meta: [
		{ title: "The Nook · QR code" },
		{
			name: "description",
			content: "QR code for The Nook CoffeeHouse."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./fairhaven-DqU5-lDS.mjs");
var Route$15 = createFileRoute("/fairhaven/")({
	head: () => ({ meta: [{ title: "The Nook Fairhaven – Specialty Coffee & Bakery" }, {
		name: "description",
		content: "The Nook CoffeeHouse at 58 Washington Street, Fairhaven. Linguica rolls, specialty coffee, and a decade of the shop."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./cakes-DOjV27Zw.mjs");
var Route$14 = createFileRoute("/fairhaven/cakes")({
	head: () => ({ meta: [{ title: "Custom cakes – The Nook Fairhaven" }, {
		name: "description",
		content: "Kake by Katie. Custom cakes from The Nook CoffeeHouse in Fairhaven."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
function Gallery({ slides, label }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const slide = slides[index] ?? slides[0];
	if (!slide) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mt-10 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl border border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: asset(slide.src),
					alt: slide.alt,
					className: "aspect-[4/3] w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "min-h-12 rounded-full border border-border px-4 text-sm text-fg hover:bg-raised",
						onClick: () => setIndex((current) => (current - 1 + slides.length) % slides.length),
						children: ["Previous ", label]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-sm text-ink",
						children: slide.caption
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "min-h-12 rounded-full border border-border px-4 text-sm text-fg hover:bg-raised",
						onClick: () => setIndex((current) => (current + 1) % slides.length),
						children: ["Next ", label]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-center text-xs uppercase tracking-[0.2em] text-subtle",
				children: [
					index + 1,
					" / ",
					slides.length
				]
			})
		]
	});
}
var $$splitComponentImporter$13 = () => import("./cupcakes-ByGCOa2I.mjs");
var Route$13 = createFileRoute("/fairhaven/cupcakes")({
	head: () => ({ meta: [{ title: "Custom cupcakes – The Nook Fairhaven" }, {
		name: "description",
		content: "Custom cupcakes from Kake by Katie at The Nook CoffeeHouse in Fairhaven."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./menu-bv58cIeM.mjs");
var Route$12 = createFileRoute("/menu/")({
	head: () => ({ meta: [{ title: "The Menu – The Nook CoffeeHouse" }, {
		name: "description",
		content: "Drinks, food, and bar-style pizza at The Nook CoffeeHouse in Fairhaven."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./drinks-BtA9GWv3.mjs");
var Route$11 = createFileRoute("/menu/drinks")({
	head: () => ({ meta: [{ title: "Drink Menu – The Nook Fairhaven" }, {
		name: "description",
		content: "Specialty coffee at The Nook CoffeeHouse, 58 Washington Street, Fairhaven, Massachusetts."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./food-B-8nhCK7.mjs");
var Route$10 = createFileRoute("/menu/food")({
	head: () => ({ meta: [{ title: "Food Menu – The Nook Fairhaven" }, {
		name: "description",
		content: "Linguica rolls, croissants, and LVLUP breakfast sandwiches at The Nook CoffeeHouse in Fairhaven."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
function PricedPage({ kicker, title, tagline, note, extra, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "chalkboard",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 pb-8 pt-10 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-medium uppercase tracking-[0.3em] text-muted",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-center text-4xl font-bold text-fg sm:text-5xl",
					children: title
				}),
				tagline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tagline mx-auto mt-2 max-w-2xl text-center text-tagline text-ink",
					children: tagline
				}) : null,
				note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-2xl text-center text-muted",
					children: note
				}) : null,
				extra ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-center text-sm text-subtle",
					children: extra
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 space-y-6",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "overflow-hidden rounded-xl border border-border bg-surface sm:grid sm:grid-cols-[180px_1fr]",
						children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: asset(item.image),
							alt: "",
							className: "h-44 w-full object-cover sm:h-full"
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-5 py-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif text-2xl text-fg",
										children: item.name
									}), item.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.65rem] font-medium uppercase tracking-[0.2em] text-pepper",
										children: item.badge
									}) : null]
								}),
								item.blurb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-ink",
									children: item.blurb
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm font-medium text-fg",
									children: item.price
								}),
								item.flavors?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: item.flavors.join(" · ")
								}) : null
							]
						})]
					}, item.name))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { shop: "fairhaven" })]
	});
}
var $$splitComponentImporter$9 = () => import("./pizza-Lfo0sKbh.mjs");
var Route$9 = createFileRoute("/menu/pizza")({
	head: () => ({ meta: [{ title: "Pizza Menu – The Nook Fairhaven" }, {
		name: "description",
		content: "Bar-style pizza at The Nook CoffeeHouse, 58 Washington Street, Fairhaven, Massachusetts."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./plymouth-Bdi6dX17.mjs");
var Route$8 = createFileRoute("/plymouth/")({
	head: () => ({ meta: [{ title: "The Nook Plymouth – Drive-Thru Coffee & Breakfast Sandwiches" }, {
		name: "description",
		content: "Drive-thru coffee and breakfast sandwiches at The Nook Plymouth, 2235 State Road, Plymouth, Massachusetts. Walk-up window. Opening November 2026."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./drinks-DLC5-Kau.mjs");
var Route$7 = createFileRoute("/fairhaven/drinks/")({
	head: () => ({ meta: [{ title: "Drinks – The Nook Fairhaven" }, {
		name: "description",
		content: "Specialty coffee, the Painkiller, and the rest of the drink menu at The Nook CoffeeHouse in Fairhaven."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("../_slug-CUZlZvXN.mjs");
var Route$6 = createFileRoute("/fairhaven/drinks/$slug")({
	loader: ({ params }) => {
		if (!drinkOnMenu("fairhaven", params.slug)) throw notFound();
		const page = drinkPage(params.slug);
		if (!page) throw notFound();
		return { page };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.page.name} – The Nook Fairhaven` : "Drink – The Nook Fairhaven" }, {
		name: "description",
		content: `${loaderData?.page.name ?? "A drink"} at The Nook CoffeeHouse, 58 Washington Street, Fairhaven, Massachusetts.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./food-CMSkXNKe.mjs");
var Route$5 = createFileRoute("/fairhaven/food/")({
	head: () => ({ meta: [{ title: "Food – The Nook Fairhaven" }, {
		name: "description",
		content: "Linguica rolls, croissants, and LVLUP breakfast sandwiches at The Nook CoffeeHouse in Fairhaven."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("../_slug-Cz9lWoZv.mjs");
var Route$4 = createFileRoute("/fairhaven/food/$slug")({
	loader: ({ params }) => {
		if (!foodOnMenu("fairhaven", params.slug)) throw notFound();
		const page = foodPage(params.slug);
		if (!page) throw notFound();
		return { page };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.page.name} – The Nook Fairhaven` : "Food – The Nook Fairhaven" }, {
		name: "description",
		content: `${loaderData?.page.name ?? "Food"} at The Nook CoffeeHouse, 58 Washington Street, Fairhaven, Massachusetts.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./drinks-B6yBt8Dm.mjs");
var Route$3 = createFileRoute("/plymouth/drinks/")({
	head: () => ({ meta: [{ title: "Drinks – The Nook Plymouth" }, {
		name: "description",
		content: "The drink menu at The Nook Plymouth, a drive-thru coffee shop at 2235 State Road."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_slug-Up_qkcAv.mjs");
var Route$2 = createFileRoute("/plymouth/drinks/$slug")({
	loader: ({ params }) => {
		if (!drinkOnMenu("plymouth", params.slug)) throw notFound();
		const page = drinkPage(params.slug);
		if (!page) throw notFound();
		return { page };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.page.name} – The Nook Plymouth` : "Drink – The Nook Plymouth" }, {
		name: "description",
		content: `${loaderData?.page.name ?? "A drink"} at The Nook Plymouth, 2235 State Road, Plymouth, Massachusetts.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./food-BMY4tlmG.mjs");
var Route$1 = createFileRoute("/plymouth/food/")({
	head: () => ({ meta: [{ title: "Food – The Nook Plymouth" }, {
		name: "description",
		content: "Linguica rolls, croissants, and LVLUP breakfast sandwiches at The Nook Plymouth."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-qGC-x1yS.mjs");
var Route = createFileRoute("/plymouth/food/$slug")({
	loader: ({ params }) => {
		if (!foodOnMenu("plymouth", params.slug)) throw notFound();
		const page = foodPage(params.slug);
		if (!page) throw notFound();
		return { page };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.page.name} – The Nook Plymouth` : "Food – The Nook Plymouth" }, {
		name: "description",
		content: `${loaderData?.page.name ?? "Food"} at The Nook Plymouth, 2235 State Road, Plymouth, Massachusetts.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$19.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$20
});
var AboutRoute = Route$18.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$20
});
var BoardRoute = Route$17.update({
	id: "/board",
	path: "/board",
	getParentRoute: () => Route$20
});
var QrRoute = Route$16.update({
	id: "/qr",
	path: "/qr",
	getParentRoute: () => Route$20
});
var FairhavenIndexRoute = Route$15.update({
	id: "/fairhaven/",
	path: "/fairhaven/",
	getParentRoute: () => Route$20
});
var FairhavenCakesRoute = Route$14.update({
	id: "/fairhaven/cakes",
	path: "/fairhaven/cakes",
	getParentRoute: () => Route$20
});
var FairhavenCupcakesRoute = Route$13.update({
	id: "/fairhaven/cupcakes",
	path: "/fairhaven/cupcakes",
	getParentRoute: () => Route$20
});
var MenuIndexRoute = Route$12.update({
	id: "/menu/",
	path: "/menu/",
	getParentRoute: () => Route$20
});
var MenuDrinksRoute = Route$11.update({
	id: "/menu/drinks",
	path: "/menu/drinks",
	getParentRoute: () => Route$20
});
var MenuFoodRoute = Route$10.update({
	id: "/menu/food",
	path: "/menu/food",
	getParentRoute: () => Route$20
});
var MenuPizzaRoute = Route$9.update({
	id: "/menu/pizza",
	path: "/menu/pizza",
	getParentRoute: () => Route$20
});
var PlymouthIndexRoute = Route$8.update({
	id: "/plymouth/",
	path: "/plymouth/",
	getParentRoute: () => Route$20
});
var FairhavenDrinksIndexRoute = Route$7.update({
	id: "/fairhaven/drinks/",
	path: "/fairhaven/drinks/",
	getParentRoute: () => Route$20
});
var FairhavenDrinksSlugRoute = Route$6.update({
	id: "/fairhaven/drinks/$slug",
	path: "/fairhaven/drinks/$slug",
	getParentRoute: () => Route$20
});
var FairhavenFoodIndexRoute = Route$5.update({
	id: "/fairhaven/food/",
	path: "/fairhaven/food/",
	getParentRoute: () => Route$20
});
var FairhavenFoodSlugRoute = Route$4.update({
	id: "/fairhaven/food/$slug",
	path: "/fairhaven/food/$slug",
	getParentRoute: () => Route$20
});
var PlymouthDrinksIndexRoute = Route$3.update({
	id: "/plymouth/drinks/",
	path: "/plymouth/drinks/",
	getParentRoute: () => Route$20
});
var PlymouthDrinksSlugRoute = Route$2.update({
	id: "/plymouth/drinks/$slug",
	path: "/plymouth/drinks/$slug",
	getParentRoute: () => Route$20
});
var PlymouthFoodIndexRoute = Route$1.update({
	id: "/plymouth/food/",
	path: "/plymouth/food/",
	getParentRoute: () => Route$20
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BoardRoute,
	QrRoute,
	FairhavenCakesRoute,
	FairhavenCupcakesRoute,
	MenuDrinksRoute,
	MenuFoodRoute,
	MenuPizzaRoute,
	FairhavenIndexRoute,
	MenuIndexRoute,
	PlymouthIndexRoute,
	FairhavenDrinksSlugRoute,
	FairhavenFoodSlugRoute,
	PlymouthDrinksSlugRoute,
	PlymouthFoodSlugRoute: Route.update({
		id: "/plymouth/food/$slug",
		path: "/plymouth/food/$slug",
		getParentRoute: () => Route$20
	}),
	FairhavenDrinksIndexRoute,
	FairhavenFoodIndexRoute,
	PlymouthDrinksIndexRoute,
	PlymouthFoodIndexRoute
};
var routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { SiteFooter as _, Route$6 as a, asset as c, drinkPage as d, foodHref as f, PlaceFacts as g, MenuTile as h, Route$4 as i, catalogs as l, HoursPanel as m, Route as n, PricedPage as o, foodPage as p, Route$2 as r, Gallery as s, router_exports as t, drinkHref as u, SocialRow as v, shops as y };
