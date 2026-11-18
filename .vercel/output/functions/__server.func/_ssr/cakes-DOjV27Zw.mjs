import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteFooter, c as asset, y as shops } from "./router-Ac2meZLC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cakes-DOjV27Zw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cakes_default = [
	{
		"src": "/cakes/frame-owls.jpg",
		"alt": "A tree-stump wedding cake topped with two fondant owls, one in a veil, surrounded by mushrooms and moss",
		"caption": "A wedding on a tree stump"
	},
	{
		"src": "/cakes/frame-two-tier-blush.jpg",
		"alt": "A two-tier white cake with ridged frosting and pink and white roses",
		"caption": "Two tiers, blush roses"
	},
	{
		"src": "/cakes/frame-rainbow-roses.jpg",
		"alt": "A tall white ridged cake topped with rainbow roses, more roses at the base",
		"caption": "White ridges and rainbow roses"
	},
	{
		"src": "/cakes/frame-chocolate.jpg",
		"alt": "A chocolate cake with ridged frosting, a chocolate drip, and piped rosettes",
		"caption": "Chocolate, ridged and finished with rosettes"
	},
	{
		"src": "/cakes/frame-black-rose.jpg",
		"alt": "A black cake with a red drip, black piping, and a large red rose with gold edges",
		"caption": "Black cake, red drip, one rose"
	},
	{
		"src": "/cakes/frame-spheres.jpg",
		"alt": "A white cake with pastel stripes, covered on one side with pink, blue, yellow, and silver spheres",
		"caption": "Pastel spheres"
	},
	{
		"src": "/cakes/frame-stump.jpg",
		"alt": "A cake carved and painted to look like a cut tree stump, with a hollow in the bark",
		"caption": "A stump, with a hollow in the bark"
	},
	{
		"src": "/cakes/frame-ombre-roses.jpg",
		"alt": "A cake with green to blue ombre ridges, topped with white and red roses",
		"caption": "Green into blue, with roses"
	},
	{
		"src": "/cakes/frame-two-tier-mauve.jpg",
		"alt": "A two-tier white cake with rhinestone bands and mauve roses",
		"caption": "Rhinestone bands and mauve roses"
	},
	{
		"src": "/cakes/frame-wedding-drip.jpg",
		"alt": "A semi-naked wedding cake with a dark chocolate drip on a gold board",
		"caption": "A wedding cake with a dark drip"
	},
	{
		"src": "/cakes/shards.jpg",
		"alt": "A chocolate cake covered in chocolate chips, with piped swirls and chocolate shards standing up on top",
		"caption": "Chocolate shards and a drip"
	},
	{
		"src": "/cakes/moon.jpg",
		"alt": "A white cake with a gold moon, a hanging gold star, and gold stars down the side",
		"caption": "A gold moon, and stars"
	},
	{
		"src": "/cakes/peanut.jpg",
		"alt": "A peanut butter colored cake with a chocolate drip, peanut butter cups, and candy on top",
		"caption": "Peanut butter cups and a drip"
	},
	{
		"src": "/cakes/blue-bow.jpg",
		"alt": "A chocolate cake wrapped in chocolate bars and a bright blue bow",
		"caption": "Chocolate bars and a blue bow"
	},
	{
		"src": "/cakes/mario.jpg",
		"video": "/cakes/mario.mp4",
		"alt": "A cake turning on a stand. One side is white and quilted with gold. A curtain pulls aside to a light blue side with Mario, Peach, bricks, and a flower",
		"caption": "Super Mario 1-1 cake"
	}
];
var inquiry = `mailto:${shops.fairhaven.email}?subject=Custom%20Cake%20Inquiry&body=${encodeURIComponent([
	"Name:",
	"Phone number:",
	"Email:",
	"Best time to contact:",
	"Date needed:",
	"Is Delivery Needed?:",
	"Occasion:",
	"For how many people?:",
	"Cake flavor:",
	"Filling flavor:",
	"Buttercream flavor:",
	"Allergies:",
	"Anything else I need to know:",
	"(If you have any photos you would like us to see for inspiration please attach to this email)"
].join("\n"))}`;
function Cakes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "chalkboard min-h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-medium uppercase tracking-[0.28em] text-muted",
					children: "Fairhaven"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/cakes/kake-logo.png",
						alt: "Kake by Katie",
						className: "fade-in mx-auto w-full max-w-md"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-6 max-w-2xl space-y-4 text-center text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We've been lucky. You've let us into your celebrations, and into the memories that come with them. That is the part we care about most." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Each cake is made just for you. The kitchen is small, so a little notice goes a long way." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {
					slides: cakes_default,
					label: "cake"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "script-title mt-16 text-center text-[clamp(2.4rem,1.3rem+3vw,3.5rem)] text-fg",
					children: "Request a cake"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-sm text-muted italic",
					children: "Opens an email with the questions already started. Fill them in and press send."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-6 max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: inquiry,
						className: "block w-full rounded-lg bg-fg px-4 py-3 text-center font-medium text-primary-fg hover:bg-accent",
						children: "Request a cake"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-center text-sm text-muted",
						children: [
							"Subject is Custom Cake Inquiry. It goes to ",
							shops.fairhaven.email,
							"."
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { shop: "fairhaven" })]
	});
}
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
//#endregion
export { Gallery, Cakes as component };
