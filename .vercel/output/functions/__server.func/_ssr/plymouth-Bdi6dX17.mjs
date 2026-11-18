import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Coffee, t as UtensilsCrossed } from "../_libs/lucide-react.mjs";
import { _ as SiteFooter, g as PlaceFacts, h as MenuTile, m as HoursPanel, v as SocialRow, y as shops } from "./router-Ac2meZLC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plymouth-Bdi6dX17.js
var import_jsx_runtime = require_jsx_runtime();
function PlymouthHome() {
	const shop = shops.plymouth;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "chalkboard min-h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialRow, { shop: "plymouth" }),
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
					className: "mt-6 grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTile, {
						to: "/plymouth/food",
						label: "Food menu",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "size-10" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTile, {
						to: "/plymouth/drinks",
						label: "Drink menu",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coffee, { className: "size-10" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid items-stretch gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl border border-border bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/plymouth-storefront.jpg",
							alt: "The Plymouth storefront in black and white, stamped location acquired",
							className: "h-full w-full object-cover grayscale"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoursPanel, { shop: "plymouth" })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { shop: "plymouth" })]
	});
}
//#endregion
export { PlymouthHome as component };
