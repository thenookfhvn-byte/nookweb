import { S as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Route$4 } from "./_ssr/router-Ac2meZLC.mjs";
import { r as ItemArticle } from "./_ssr/encyclopedia-DXSDDWZn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Cz9lWoZv.js
var import_jsx_runtime = require_jsx_runtime();
function FoodPage() {
	const { page } = Route$4.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemArticle, {
		shop: "fairhaven",
		kind: "food",
		page
	});
}
//#endregion
export { FoodPage as component };
