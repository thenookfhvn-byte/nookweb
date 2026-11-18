import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteFooter, c as asset } from "./router-Ac2meZLC.mjs";
import { t as classic_default } from "./classic-BMTeEAdj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/food-B-8nhCK7.js
var import_jsx_runtime = require_jsx_runtime();
function FoodMenu() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricedPage, {
		kicker: "Fairhaven",
		title: "The Food Menu",
		note: "Add a fried egg and cheese, plus bacon or sausage, to a linguica roll, cheese roll, croissant, biscuit, or bagel. That is a LVLUP.",
		extra: "Finish it with Trop Guac, bacon habanero jam, Fireflower buffalo sauce, or our house hot sauce.",
		items: classic_default.food
	});
}
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
//#endregion
export { PricedPage, FoodMenu as component };
