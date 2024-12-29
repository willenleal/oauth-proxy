import { createFileRoute, useRouter } from "@tanstack/react-router";
import { signOut } from "../../lib/auth/client";

export const Route = createFileRoute("/_app/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();

  const onSignOut = async () => {
    await signOut();
    return router.navigate({ to: "/" });
  };

  return (
    <div className="bg-blue min-h-dvh flex gap-y-4 flex-col items-center justify-center">
      <h6>Dashboard</h6>
      <button
        onClick={onSignOut}
        className="px-4 py-2 rounded-md outline text-lg"
      >
        Sign Out
      </button>
    </div>
  );
}
