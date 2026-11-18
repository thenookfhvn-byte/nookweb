import { S as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as Route$2 } from "./_ssr/router-Ac2meZLC.mjs";
import { r as ItemArticle } from "./_ssr/encyclopedia-DXSDDWZn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Up_qkcAv.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { page } = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemArticle, {
		shop: "plymouth",
		kind: "drinks",
		page
	});
}
//#endregion
export { Page as component };
