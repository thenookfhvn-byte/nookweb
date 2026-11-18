import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BpoyWeAl.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-0 flex-1 grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, {
			to: "/fairhaven",
			state: "Massachusetts",
			town: "Fairhaven",
			src: "/gate-fairhaven.jpg",
			alt: "The Nook CoffeeHouse sign on Washington Street in Fairhaven"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gate, {
			to: "/plymouth",
			state: "Massachusetts",
			town: "Plymouth",
			src: "/plymouth-hero.jpg",
			alt: "Plymouth Harbor at dusk, with the Mayflower II at the dock",
			edge: true
		})]
	});
}
function Gate({ to, state, town, src, alt, edge }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: `gate-half ${edge ? "border-l border-border" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				className: "gate-photo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "gate-shade",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "gate-copy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium uppercase tracking-[0.28em]",
					children: state
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gate-town",
					children: town
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: alt
			})
		]
	});
}
//#endregion
export { Home as component };
