import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { createServerFn, Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import appCss from "../styles/app.css?url";
import { auth } from "../lib/auth";
import { getWebRequest } from "vinxi/http";

export const getSession = createServerFn({
  method: "GET",
}).handler(async () => {
  const req = getWebRequest();
  return auth.api.getSession({ headers: req.headers });
});

export const Route = createRootRouteWithContext<{
  auth: Awaited<ReturnType<typeof auth.api.getSession>>;
}>()({
  beforeLoad: async () => {
    return { auth: await getSession() };
  },
  head: () => ({
    links: [{ rel: "stylesheet", href: appCss }],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <div>Not Found</div>,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
