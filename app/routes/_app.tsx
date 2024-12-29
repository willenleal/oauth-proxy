import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  beforeLoad: ({ context }) => {
    if (!context.auth?.session) {
      throw redirect({ to: "/" });
    }
  },
});
