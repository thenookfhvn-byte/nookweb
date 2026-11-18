import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Coffee, s as Cake, t as UtensilsCrossed } from "../_libs/lucide-react.mjs";
import { _ as SiteFooter, g as PlaceFacts, h as MenuTile, m as HoursPanel, v as SocialRow, y as shops } from "./router-Ac2meZLC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fairhaven-DqU5-lDS.js
var import_jsx_runtime = require_jsx_runtime();
function FairhavenHome() {
	const shop = shops.fairhaven;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "chalkboard min-h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialRow, { shop: "fairhaven" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-xs font-medium uppercase tracking-[0.28em] text-muted",
					children: [
						shop.town,
						", ",
						shop.state
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-bold text-fg sm:text-4xl",
					children: "The Nook CoffeeHouse"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: shop.visitBlurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceFacts, { shop }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTile, {
							to: "/fairhaven/food",
							label: "Food menu",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "size-10" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTile, {
							to: "/fairhaven/drinks",
							label: "Drink menu",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coffee, { className: "size-10" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTile, {
							to: "/fairhaven/cakes",
							label: "Custom cakes",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cake, { className: "size-10" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTile, {
							to: "/fairhaven/cupcakes",
							label: "Custom cupcakes",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CupcakeIcon, {})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid items-stretch gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl border border-border bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/fairhaven-storefront.jpg",
							alt: "The Nook CoffeeHouse on Washington Street in Fairhaven",
							className: "w-full grayscale"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoursPanel, { shop: "fairhaven" })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { shop: "fairhaven" })]
	});
}
function CupcakeIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-10",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3.5c.4 1 .2 1.8-.2 2.4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.2 10.2c.2-2.4 1.7-4.2 3.8-4.2s3.6 1.8 3.8 4.2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.4 10.4c-1.3.2-2.2 1.2-2.2 2.4 0 1.5 1.4 2.6 3.2 2.6h7.2c1.8 0 3.2-1.1 3.2-2.6 0-1.2-.9-2.2-2.2-2.4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.2 13.2 8.6 20.5h6.8l1.4-7.3" })
		]
	});
}
//#endregion
export { FairhavenHome as component };
