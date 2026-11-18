import { S as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Route$6 } from "./_ssr/router-Ac2meZLC.mjs";
import { r as ItemArticle } from "./_ssr/encyclopedia-DXSDDWZn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CUZlZvXN.js
var import_jsx_runtime = require_jsx_runtime();
function DrinkItem() {
	const { page } = Route$6.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemArticle, {
		shop: "fairhaven",
		kind: "drinks",
		page
	});
}
//#endregion
export { DrinkItem as component };
