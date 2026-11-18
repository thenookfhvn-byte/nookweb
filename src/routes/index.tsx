import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="grid min-h-0 flex-1 grid-cols-2">
      <Gate
        to="/fairhaven"
        state="Massachusetts"
        town="Fairhaven"
        src="/gate-fairhaven.jpg"
        alt="The Nook CoffeeHouse sign on Washington Street in Fairhaven"
      />
      <Gate
        to="/plymouth"
        state="Massachusetts"
        town="Plymouth"
        src="/plymouth-hero.jpg"
        alt="Plymouth Harbor at dusk, with the Mayflower II at the dock"
        edge
      />
    </div>
  );
}

function Gate({
  to,
  state,
  town,
  src,
  alt,
  edge,
}: {
  to: "/fairhaven" | "/plymouth";
  state: string;
  town: string;
  src: string;
  alt: string;
  edge?: boolean;
}) {
  return (
    <Link to={to} className={`gate-half ${edge ? "border-l border-border" : ""}`}>
      <img src={src} alt="" className="gate-photo" />
      <span className="gate-shade" aria-hidden="true" />
      <span className="gate-copy">
        <span className="text-xs font-medium uppercase tracking-[0.28em]">{state}</span>
        <span className="gate-town">{town}</span>
      </span>
      <span className="sr-only">{alt}</span>
    </Link>
  );
}
