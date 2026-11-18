import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteFooter } from "./router-Ac2meZLC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-bv58cIeM.js
var import_jsx_runtime = require_jsx_runtime();
function MenuHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "chalkboard",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4 pb-8 pt-10 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "script-title text-center text-[clamp(2.8rem,1.5rem+4vw,4.25rem)] text-fg",
				children: "The Menu"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						to: "/menu/drinks",
						title: "Drinks",
						image: "/drink-skooma.jpg",
						alt: "Two Skooma drinks on the picnic table"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						to: "/menu/food",
						title: "Food",
						image: "/food-linguica.jpg",
						alt: "Linguiça rolls"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						to: "/menu/pizza",
						title: "Pizza",
						image: "/pizza-cheese.jpg",
						alt: "A cheese pizza from The Nook CoffeeHouse",
						wide: true
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { shop: "fairhaven" })]
	});
}
function Card({ to, title, image, alt, wide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: `group relative min-h-72 overflow-hidden rounded-xl border border-border bg-surface ${wide ? "sm:col-span-2" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt,
				className: "absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "script-title absolute inset-x-0 bottom-6 text-center text-5xl text-fg sm:text-6xl",
				children: title
			})
		]
	});
}
//#endregion
export { MenuHome as component };
