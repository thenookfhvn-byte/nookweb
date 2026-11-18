import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as catalogs } from "./router-Ac2meZLC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/board-RSV9H_XV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Board() {
	const menu = catalogs("plymouth");
	const pages = [...menu.drinks.categories.map((category) => ({
		title: category.title,
		items: category.drinks.map((item) => item.name)
	})), ...menu.food.categories.map((category) => ({
		title: category.title,
		items: category.foods.map((item) => item.name)
	}))].filter((page) => page.items.length > 0);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [clock, setClock] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const tick = () => setClock(new Intl.DateTimeFormat("en-US", {
			timeZone: "America/New_York",
			hour: "numeric",
			minute: "2-digit"
		}).format(/* @__PURE__ */ new Date()));
		tick();
		const id = window.setInterval(tick, 15e3);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (paused || pages.length === 0) return;
		const id = window.setInterval(() => setIndex((current) => (current + 1) % pages.length), 8e3);
		return () => window.clearInterval(id);
	}, [paused, pages.length]);
	const page = pages[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "board-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "board-tools",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `board-tool ${paused ? "board-tool-on" : ""}`,
				onClick: () => setPaused((value) => !value),
				children: paused ? "Play" : "Pause"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/plymouth",
				className: "board-tool",
				children: "Exit"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "board-frame w-[min(1100px,92vw)] px-6 py-8 sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "board-head flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "board-brand text-xs uppercase tracking-[0.35em] text-pepper",
						children: "The Nook"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "board-name mt-2 text-3xl font-bold uppercase tracking-[0.12em] text-fg sm:text-5xl",
						children: "Plymouth"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "board-clock text-sm tabular-nums text-muted",
						children: clock
					})]
				}),
				page ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "board-cat text-sm uppercase tracking-[0.32em] text-pepper",
						children: page.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "board-items mt-4 divide-y divide-border",
						children: page.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "board-row py-3 text-2xl text-fg sm:text-3xl",
							children: item
						}, item))
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "board-foot mt-8 text-xs uppercase tracking-[0.28em] text-subtle",
					children: [
						index + 1,
						" / ",
						pages.length,
						" · drive-thru"
					]
				})
			]
		})]
	});
}
//#endregion
export { Board as component };
