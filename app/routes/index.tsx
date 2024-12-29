import { createFileRoute } from "@tanstack/react-router";
import { signIn } from "../lib/auth/client";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-blue min-h-dvh flex gap-y-4 flex-col items-center justify-center">
      <h6>You are Signed Out</h6>
      <button
        onClick={() =>
          signIn.social({
            provider: "google",
            callbackURL: "/dashboard",
          })
        }
        className="px-4 py-2 rounded-md outline text-lg"
      >
        Sign In with Google
      </button>
    </div>
  );
}
