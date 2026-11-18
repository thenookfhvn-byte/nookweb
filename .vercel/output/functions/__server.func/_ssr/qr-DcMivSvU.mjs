import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/qr-DcMivSvU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QrPage() {
	const [svg, setSvg] = (0, import_react.useState)("");
	const [target, setTarget] = (0, import_react.useState)("https://thenookapp.grok.me/");
	(0, import_react.useEffect)(() => {
		const url = window.location.origin + "/";
		setTarget(url);
		import("../_libs/qrcode.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then((QR) => {
			QR.toString(url, {
				type: "svg",
				margin: 1,
				color: {
					dark: "#161616",
					light: "#f5f5f5"
				}
			}).then(setSvg);
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "chalkboard flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/logo.png",
				alt: "",
				className: "h-20 w-20 object-contain"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "script-title mt-4 text-5xl text-fg",
				children: "The Nook"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "tagline mt-2 text-tagline text-ink",
				children: "Fairhaven & Plymouth"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 rounded-2xl bg-fg p-4",
				dangerouslySetInnerHTML: { __html: svg || `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'/>` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-sm break-all text-sm text-muted",
				children: target
			})
		]
	});
}
//#endregion
export { QrPage as component };
