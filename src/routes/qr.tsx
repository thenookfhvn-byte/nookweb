import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/qr")({
  head: () => ({
    meta: [
      { title: "The Nook · QR code" },
      { name: "description", content: "QR code for The Nook CoffeeHouse." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: QrPage,
});

function QrPage() {
  const [svg, setSvg] = useState("");
  const [target, setTarget] = useState("https://thenookapp.grok.me/");

  useEffect(() => {
    const url = window.location.origin + "/";
    setTarget(url);
    void import("qrcode").then((QR) => {
      void QR.toString(url, { type: "svg", margin: 1, color: { dark: "#161616", light: "#f5f5f5" } }).then(setSvg);
    });
  }, []);

  return (
    <div className="chalkboard flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center">
      <img src="/logo.png" alt="" className="h-20 w-20 object-contain" />
      <h1 className="script-title mt-4 text-5xl text-fg">The Nook</h1>
      <p className="tagline mt-2 text-tagline text-ink">Fairhaven & Plymouth</p>
      <div
        className="mt-8 rounded-2xl bg-fg p-4"
        dangerouslySetInnerHTML={{ __html: svg || `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'/>` }}
      />
      <p className="mt-4 max-w-sm break-all text-sm text-muted">{target}</p>
    </div>
  );
}
