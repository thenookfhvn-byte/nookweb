import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteHeader } from "@/components/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Nook CoffeeHouse – Fairhaven & Plymouth" },
      {
        name: "description",
        content:
          "Two Nook shops. Fairhaven is the original coffeehouse at 58 Washington Street. Plymouth is a drive-thru for coffee and breakfast sandwiches at 2235 State Road.",
      },
      { name: "theme-color", content: "#161616" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,500;1,600&family=Dancing+Script:wght@700&family=Press+Start+2P&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: Root,
});

function Root() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const bare = path === "/board" || path === "/qr";
  return (
    <html lang="en" className="antialiased chalkboard" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-bg text-fg font-sans">
        <PreviewHostBridge />
        <AuthProvider>
          <div className="flex min-h-dvh flex-col">
            {bare ? null : <SiteHeader />}
            <main className="flex min-h-0 flex-1 flex-col">
              <Outlet />
            </main>
          </div>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
