import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteFooter, s as Gallery, y as shops } from "./router-Ac2meZLC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cupcakes-ByGCOa2I.js
var import_jsx_runtime = require_jsx_runtime();
var cupcakes_default = [
	{
		"src": "/cupcakes/pumpkin.jpg",
		"alt": "A pumpkin cupcake in a gold wrapper, cream frosting, pecan crumbs, and a pumpkin behind it",
		"caption": "Pecans, and a pumpkin"
	},
	{
		"src": "/cupcakes/brittle.jpg",
		"alt": "A cupcake with a pale swirl of frosting and shards of nut brittle on the plate",
		"caption": "A swirl, and brittle"
	},
	{
		"src": "/cupcakes/halloween.jpg",
		"alt": "Two cupcakes on a tray, one green with candy bones and one pink with sprinkles",
		"caption": "Green and pink, for a dark night"
	},
	{
		"src": "/cupcakes/skulls.jpg",
		"alt": "A box of cupcakes in black and red frosting, each topped with a white chocolate skull",
		"caption": "A dozen, each with a skull"
	},
	{
		"src": "/cupcakes/roses.jpg",
		"alt": "A close view of cupcakes piped in pink and yellow rosettes",
		"caption": "Pink and yellow rosettes"
	},
	{
		"src": "/cupcakes/bees.jpg",
		"alt": "Yellow cupcakes topped with little bees and pieces of honeycomb",
		"caption": "Bees and honeycomb"
	},
	{
		"src": "/cupcakes/sprinkles.jpg",
		"alt": "Cupcakes in purple, pink, and white frosting, covered in sprinkles and a pink pearl",
		"caption": "Purple, pink, and white"
	},
	{
		"src": "/cupcakes/thirty.jpg",
		"alt": "Pink cupcakes in a box, one topped with a gold number 30",
		"caption": "A gold 30"
	},
	{
		"src": "/cupcakes/shells.jpg",
		"alt": "Mint green cupcakes with seashells, gold stars, and blue sprinkles",
		"caption": "Shells and a little gold"
	}
];
var inquiry = `mailto:${shops.fairhaven.email}?subject=Custom%20Cupcake%20Inquiry&body=${encodeURIComponent([
	"Name:",
	"Phone number:",
	"Email:",
	"Best time to contact:",
	"Date needed:",
	"Is Delivery Needed?:",
	"Occasion:",
	"For how many people?:",
	"Cupcake flavor:",
	"Filling flavor:",
	"Buttercream flavor:",
	"Allergies:",
	"Anything else I need to know:",
	"(If you have any photos you would like us to see for inspiration please attach to this email)"
].join("\n"))}`;
function Cupcakes() {
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
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sometimes a whole cake is just too much, or you want your own special portion for the party. These little cupcakes are exactly what will do the trick." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Add them to a wedding, or set them out beside the cake so everyone gets their own." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We can fill them with creams and frostings. Lemon meringue, Bavarian cream, chocolate mousse, and more." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Everybody loves a cupcake." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {
					slides: cupcakes_default,
					label: "cupcake"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "script-title mt-16 text-center text-[clamp(2.4rem,1.3rem+3vw,3.5rem)] text-fg",
					children: "Request cupcakes"
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
						children: "Request cupcakes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-center text-sm text-muted",
						children: [
							"Subject is Custom Cupcake Inquiry. It goes to ",
							shops.fairhaven.email,
							"."
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { shop: "fairhaven" })]
	});
}
//#endregion
export { Cupcakes as component };
