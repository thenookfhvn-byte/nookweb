import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { catalogs } from "@/lib/menu";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "Menu board · The Nook CoffeeHouse Plymouth" },
      { name: "description", content: "In-store menu board for The Nook CoffeeHouse Plymouth." },
    ],
  }),
  component: Board,
});

function Board() {
  const menu = catalogs("plymouth");
  const pages = [
    ...menu.drinks.categories.map((category) => ({
      title: category.title,
      items: category.drinks.map((item) => item.name),
    })),
    ...menu.food.categories.map((category) => ({
      title: category.title,
      items: category.foods.map((item) => item.name),
    })),
  ].filter((page) => page.items.length > 0);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date()),
      );
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (paused || pages.length === 0) return;
    const id = window.setInterval(() => setIndex((current) => (current + 1) % pages.length), 8000);
    return () => window.clearInterval(id);
  }, [paused, pages.length]);

  const page = pages[index];

  return (
    <div className="board-shell">
      <div className="board-tools">
        <button type="button" className={`board-tool ${paused ? "board-tool-on" : ""}`} onClick={() => setPaused((value) => !value)}>
          {paused ? "Play" : "Pause"}
        </button>
        <Link to="/plymouth" className="board-tool">
          Exit
        </Link>
      </div>
      <div className="board-frame w-[min(1100px,92vw)] px-6 py-8 sm:px-10">
        <header className="board-head flex items-end justify-between gap-4">
          <div>
            <p className="board-brand text-xs uppercase tracking-[0.35em] text-pepper">The Nook</p>
            <h1 className="board-name mt-2 text-3xl font-bold uppercase tracking-[0.12em] text-fg sm:text-5xl">Plymouth</h1>
          </div>
          <p className="board-clock text-sm tabular-nums text-muted">{clock}</p>
        </header>
        {page ? (
          <section className="mt-8">
            <h2 className="board-cat text-sm uppercase tracking-[0.32em] text-pepper">{page.title}</h2>
            <ul className="board-items mt-4 divide-y divide-border">
              {page.items.map((item) => (
                <li key={item} className="board-row py-3 text-2xl text-fg sm:text-3xl">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <p className="board-foot mt-8 text-xs uppercase tracking-[0.28em] text-subtle">
          {index + 1} / {pages.length} · drive-thru
        </p>
      </div>
    </div>
  );
}
