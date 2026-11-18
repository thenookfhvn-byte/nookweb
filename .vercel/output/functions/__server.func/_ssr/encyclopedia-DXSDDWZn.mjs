import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteFooter, c as asset, d as drinkPage, f as foodHref, l as catalogs, p as foodPage, u as drinkHref } from "./router-Ac2meZLC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/encyclopedia-DXSDDWZn.js
var import_jsx_runtime = require_jsx_runtime();
function FoodEncyclopedia({ shop }) {
	const menu = catalogs(shop).food;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "chalkboard min-h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "sr-only",
					children: "Encyclopedia of Nook Food"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuCrawl, { shop }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "encyc-frame",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/encyclopedia-food.jpg",
							alt: "A chalk drawing titled Encyclopedia of Nook Food, with cookbooks, a bakery roll, and baking notes",
							className: "h-auto w-full"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "encyc-panel px-5 py-6 sm:px-7 sm:py-7",
						children: [menu.intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-8 max-w-xl text-base leading-relaxed text-ink",
							children: menu.intro
						}) : null, menu.categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FoodGroup, {
							category,
							shop,
							first: index === 0
						}, category.title))]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { shop })]
	});
}
function FoodGroup({ category, shop, first }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${first ? "" : "mt-8"} ${category.sometimes ? "mt-10 border border-dashed border-pepper/50 px-4 py-4" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "flex items-baseline gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `font-serif leading-none ${category.sometimes ? "text-3xl text-muted" : "text-4xl text-pepper"}`,
					children: category.letter
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.7rem] font-medium uppercase tracking-[0.34em] text-muted",
					children: category.title
				})]
			}),
			category.sometimes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: "Some of our customer favorites are either seasonal or “sometimes” items."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2",
				children: category.foods.map((food) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: category.sometimes ? "border-b border-dashed border-border" : "border-b border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: foodHref(shop, food.slug),
						className: "group flex items-baseline justify-between gap-3 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `font-serif text-xl tracking-wide transition-colors duration-150 group-hover:text-pepper ${category.sometimes ? "font-medium text-ink" : "font-semibold text-fg"}`,
							children: food.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "text-pepper opacity-0 transition-opacity duration-150 group-hover:opacity-100",
							children: "→"
						})]
					})
				}, food.slug))
			})
		]
	});
}
function DrinkEncyclopedia({ shop }) {
	const menu = catalogs(shop).drinks;
	const slides = menu.slides ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "chalkboard min-h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "sr-only",
					children: "Encyclopedia of Nook Drinks"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuCrawl, { shop }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "encyc-frame",
						children: slides[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: asset(slides[0].src),
							alt: slides[0].alt,
							className: "h-auto w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/encyclopedia-chalkboard.jpg",
							alt: "",
							className: "h-auto w-full"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "encyc-panel px-5 py-6 sm:px-7 sm:py-7",
						children: menu.categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrinkGroup, {
							category,
							shop,
							first: index === 0
						}, category.title))
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { shop })]
	});
}
function DrinkGroup({ category, shop, first }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: first ? "" : "mt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "flex items-baseline gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-serif text-4xl leading-none text-pepper",
				children: category.letter
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[0.7rem] font-medium uppercase tracking-[0.34em] text-muted",
				children: category.title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2",
			children: category.drinks.map((drink) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: drinkHref(shop, drink.slug),
					className: "group flex items-baseline justify-between gap-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-xl font-semibold tracking-wide text-fg transition-colors duration-150 group-hover:text-pepper",
						children: drink.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "text-pepper opacity-0 transition-opacity duration-150 group-hover:opacity-100",
						children: "→"
					})]
				})
			}, drink.slug))
		})]
	});
}
function MenuCrawl({ shop }) {
	const { food, drinks } = catalogs(shop);
	const town = shop === "plymouth" ? "Plymouth" : "Fairhaven";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sr-only",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [town, " menu"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				town,
				" breakfast is linguica rolls, croissants, and a LVLUP breakfast sandwich.",
				shop === "fairhaven" ? " The Nook CoffeeHouse, 58 Washington Street, Fairhaven." : " The Nook Plymouth drive-thru, 2235 State Road, Plymouth."
			] }),
			food.categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: category.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: category.foods.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item.name }, item.slug)) })] }, category.title)),
			drinks.categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: category.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: category.drinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item.name }, item.slug)) })] }, category.title))
		]
	});
}
function ItemArticle({ shop, kind, page }) {
	const back = kind === "food" ? shop === "plymouth" ? "/plymouth/food" : "/fairhaven/food" : shop === "plymouth" ? "/plymouth/drinks" : "/fairhaven/drinks";
	const backLabel = kind === "food" ? "Encyclopedia of Nook: Food" : "Encyclopedia of Nook: Drinks";
	const images = page.images?.length ? page.images : page.image ? [{
		src: page.image,
		alt: page.imageAlt ?? page.name
	}] : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "chalkboard min-h-dvh",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: back,
					className: "text-[0.7rem] font-medium uppercase tracking-[0.34em] text-pepper underline-offset-4 hover:underline",
					children: backLabel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "drink-title text-fg",
						children: page.name
					}), page.ribbon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrizeRibbon, { label: page.ribbon }) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-px w-28 bg-pepper" }),
				page.hotOrIced || page.hotOnly || page.icedOnly ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs font-medium uppercase tracking-[0.28em] text-muted",
					children: page.hotOnly ? "Hot" : page.icedOnly ? "Iced" : "Hot or iced"
				}) : null,
				images.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mt-6 grid gap-2 ${page.gallery === "row" || images.length > 3 ? "max-w-xl grid-cols-2 sm:grid-cols-4" : images.length > 1 ? "max-w-xl grid-cols-3" : "max-w-xl"}`,
					children: images.map((image) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: asset(image.src),
						alt: image.alt,
						className: images.length === 1 && page.imageWide ? "w-full rounded-xl border border-border" : images.length === 1 ? "size-44 rounded-xl border border-border object-cover" : "aspect-square w-full rounded-xl border border-border object-cover"
					}, image.src))
				}) : null,
				page.paragraphs?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 max-w-xl space-y-4 text-base leading-relaxed text-ink",
					children: page.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WikiText, {
						shop,
						text: paragraph
					}) }, paragraph))
				}) : null,
				page.stageNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-sm text-muted",
					children: page.stageNote
				}) : null,
				page.steps?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, {
					shop,
					steps: page.steps
				}) : null,
				page.flavors?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 max-w-xl",
					children: [
						page.flavorLead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base text-ink",
							children: page.flavorLead
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							children: page.flavors.map((flavor) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-ink",
								children: flavor
							}, flavor))
						}),
						page.flavorNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: page.flavorNote
						}) : null
					]
				}) : null,
				page.meter?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meters, { meters: page.meter }) : null,
				page.fact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "mt-8 max-w-xl border-l-2 border-pepper pl-4 text-sm leading-relaxed text-muted",
					children: page.fact
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: back,
						className: "inline-flex items-center rounded-full border border-pepper px-7 py-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-pepper transition-colors duration-150 hover:bg-pepper hover:text-white",
						children: "Back to encyclopedia"
					})
				})
			]
		})
	});
}
function Steps({ shop, steps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "mt-8 max-w-xl space-y-6",
		children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-8 shrink-0 pt-0.5 text-sm font-medium tracking-[0.2em] text-pepper",
				children: String(index + 1).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1",
				children: step.finale ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 border border-pepper/40 bg-surface px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl text-pepper",
						"aria-hidden": "true",
						children: "↑"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl text-fg",
						children: step.label
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.28em] text-muted",
					children: step.label
				}), step.choices ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: `mt-3 grid gap-2 ${choiceCols(step.choices.length)}`,
					children: step.choices.map((choice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: choice.slug && foodOn(shop, choice.slug) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: foodHref(shop, choice.slug),
						className: choiceClass,
						children: choice.name
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: choiceClass,
						children: choice.name
					}) }, choice.name))
				}) : null] })
			})]
		}, step.label))
	});
}
function foodOn(shop, slug) {
	return catalogs(shop).food.categories.some((category) => category.foods.some((food) => food.slug === slug));
}
var choiceClass = "flex h-full min-h-14 items-center justify-center border border-border bg-surface px-3 py-3 text-center text-sm leading-snug text-ink transition-colors hover:border-pepper";
function choiceCols(count) {
	if (count === 2) return "grid-cols-2";
	if (count === 3) return "grid-cols-1 sm:grid-cols-3";
	return "grid-cols-2 sm:grid-cols-3";
}
function Meters({ meters }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-8 max-w-xl space-y-4",
		children: meters.map((meter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium uppercase tracking-[0.28em] text-muted",
					children: meter.label
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-ink",
				children: meter.detail
			}),
			typeof meter.level === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 h-1.5 overflow-hidden rounded-full bg-raised",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-pepper",
					style: { width: `${Math.max(0, Math.min(100, meter.level))}%` }
				})
			}) : null
		] }, meter.label))
	});
}
function WikiText({ shop, text }) {
	const parts = text.split(/(\[\[[^\]]+\]\])/g);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts.map((part, index) => {
		const match = part.match(/^\[\[([^|\]]+)\|([^\]]+)\]\]$/);
		if (!match) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, index);
		const [, label, target] = match;
		const className = "text-pepper underline decoration-pepper/40 underline-offset-4 hover:decoration-pepper";
		if (target?.startsWith("http")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: target,
			target: "_blank",
			rel: "noreferrer",
			className,
			children: label
		}, index);
		const href = foodPage(target ?? "") ? foodHref(shop, target ?? "") : drinkPage(target ?? "") ? drinkHref(shop, target ?? "") : foodHref(shop, target ?? "");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: href,
			className,
			children: label
		}, index);
	}) });
}
function PrizeRibbon({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex shrink-0",
		role: "img",
		"aria-label": label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 192",
			className: "h-32 w-32 drop-shadow-md sm:h-40 sm:w-40",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "prize-star",
					x1: "100",
					y1: "12",
					x2: "100",
					y2: "178",
					gradientUnits: "userSpaceOnUse",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0",
							stopColor: "#ffe7a3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0.42",
							stopColor: "#f0b429"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "1",
							stopColor: "#b87412"
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M100 12 L124.7 70 L187.5 75.6 L139.9 117 L154.1 178.4 L100 146 L45.9 178.4 L60.1 117 L12.5 75.6 L75.3 70 Z",
					fill: "url(#prize-star)",
					stroke: "#6e4a0e",
					strokeWidth: "3",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "100",
					y: "108",
					textAnchor: "middle",
					fill: "#1a1208",
					fontFamily: "Verdana, Geneva, sans-serif",
					fontSize: "34",
					fontWeight: "700",
					children: "#1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "100",
					y: "126",
					textAnchor: "middle",
					fill: "#1a1208",
					fontFamily: "Verdana, Geneva, sans-serif",
					fontSize: "11",
					fontWeight: "700",
					letterSpacing: "1.6",
					children: "SELLER"
				})
			]
		})
	});
}
//#endregion
export { FoodEncyclopedia as n, ItemArticle as r, DrinkEncyclopedia as t };
