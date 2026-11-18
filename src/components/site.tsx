import { Link, useRouterState } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { plymouthFacebook, shops, socials, type Shop, type ShopId } from "@/data/locations";
import { shopRows, shopStatus, type OpenStatus } from "@/lib/hours";

export function SiteHeader() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center sm:h-20">
        <div className="flex justify-center px-3">
          <TownLink to="/fairhaven" label="Fairhaven" active={path.startsWith("/fairhaven")} />
        </div>
        <Link to="/" className="px-2" aria-label="The Nook CoffeeHouse home">
          <img src="/logo.png" alt="" className="h-12 w-12 object-contain sm:h-16 sm:w-16" />
        </Link>
        <div className="flex justify-center px-3">
          <TownLink to="/plymouth" label="Plymouth" active={path.startsWith("/plymouth")} />
        </div>
      </div>
    </header>
  );
}

function TownLink({ to, label, active }: { to: "/fairhaven" | "/plymouth"; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      aria-current={active ? "page" : undefined}
      className={`header-town transition-colors duration-150 ${active ? "text-pepper" : "text-muted hover:text-fg"}`}
    >
      {label}
    </Link>
  );
}

export function SocialRow({ shop }: { shop: ShopId }) {
  const links = shop === "plymouth" ? socials.filter((item) => item.name !== "DoorDash") : socials;
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3">
      {links.map((item) => {
        const href = shop === "plymouth" && item.name === "Facebook" ? plymouthFacebook : item.href;
        return (
          <li key={item.name}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center rounded-full border border-border bg-surface px-4 text-sm font-medium text-fg transition-colors duration-150 hover:bg-raised"
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteFooter({ shop }: { shop: ShopId }) {
  const place = shops[shop];
  return (
    <footer id="social" className="scroll-mt-24 border-t border-border px-4 py-10 text-center sm:px-6">
      <SocialRow shop={shop} />
      <p className="font-display mt-8 text-3xl text-fg">The Nook CoffeeHouse</p>
      <p className="mt-2 text-sm text-muted">
        Gourmet CoffeeHouse · {place.town}, MA
      </p>
      <p className="mt-4 text-sm text-subtle">
        {place.address}
        {" · "}
        {place.phoneTel ? (
          <a href={`tel:${place.phoneTel}`} className="text-muted hover:text-fg">
            {place.phoneDisplay}
          </a>
        ) : (
          <span>{place.phoneDisplay}</span>
        )}
        {" · "}
        <a href={`mailto:${place.email}`} className="text-muted hover:text-fg">
          {place.email}
        </a>
      </p>
      <p className="mt-6 text-sm text-subtle">
        <Link to="/about" className="hover:text-fg">
          About
        </Link>
        {" · "}
        <Link to="/menu" className="hover:text-fg">
          Priced menus
        </Link>
        {" · "}
        <Link to="/board" className="hover:text-fg">
          Menu board
        </Link>
      </p>
    </footer>
  );
}

export function HoursPanel({ shop }: { shop: ShopId }) {
  const place = shops[shop];
  const [status, setStatus] = useState<OpenStatus | null>(null);
  useEffect(() => {
    const tick = () => setStatus(shopStatus(shop));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [shop]);
  const rows = shopRows(shop);
  return (
    <section className="flex h-full flex-col rounded-xl border border-border bg-surface px-6 py-8 sm:px-8">
      <p
        className={`text-xs font-medium uppercase tracking-[0.3em] ${
          status ? (status.open ? "text-open" : "text-closed") : "text-muted"
        }`}
      >
        {status?.beforeOpen
          ? "Opening November 2026"
          : status
            ? status.open
              ? "We are open"
              : "We are closed"
            : "Hours"}
      </p>
      <h2 className="mt-3 text-3xl font-bold uppercase tracking-[0.14em] text-fg">Hours</h2>
      <p className="mt-2 text-sm text-muted">
        Today · {status?.todayLabel ?? "…"}
      </p>
      <ul className="mt-6 divide-y divide-border">
        {rows.map((row) => {
          const current = status ? row.match.includes(status.day) : false;
          return (
            <li key={row.days} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
              <span className={current ? "text-fg" : "text-muted"}>{row.days}</span>
              <span className={`text-lg tabular-nums ${current ? "text-fg" : "text-muted"}`}>{row.time}</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-auto flex items-center gap-2 pt-6 text-sm text-subtle">
        <Clock className="size-4 shrink-0" aria-hidden="true" />
        {place.hoursNote}
      </p>
    </section>
  );
}

export function PlaceFacts({ shop }: { shop: Shop }) {
  return (
    <dl className="mt-5 flex flex-col gap-3 text-fg sm:flex-row sm:gap-8">
      <div className="flex gap-2">
        <MapPin className="mt-0.5 size-5 shrink-0 text-muted" aria-hidden="true" />
        <div>
          <dt className="text-sm text-muted">Address</dt>
          <dd>
            <a href={shop.maps} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
              {shop.address}
            </a>
          </dd>
        </div>
      </div>
      <div className="flex gap-2">
        <Phone className="mt-0.5 size-5 shrink-0 text-muted" aria-hidden="true" />
        <div>
          <dt className="text-sm text-muted">Phone</dt>
          <dd>
            {shop.phoneTel ? (
              <a href={`tel:${shop.phoneTel}`} className="underline-offset-4 hover:underline">
                {shop.phoneDisplay}
              </a>
            ) : (
              shop.phoneDisplay
            )}
          </dd>
        </div>
      </div>
    </dl>
  );
}

export function MenuTile({
  to,
  label,
  icon,
}: {
  to: "/fairhaven/food" | "/fairhaven/drinks" | "/fairhaven/cakes" | "/fairhaven/cupcakes" | "/plymouth/food" | "/plymouth/drinks";
  label: string;
  icon: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface px-4 text-fg transition-colors duration-150 hover:bg-raised active:scale-[0.98]"
    >
      {icon}
      <span className="text-center text-base font-medium">{label}</span>
    </Link>
  );
}
