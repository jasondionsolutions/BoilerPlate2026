import { cookies } from "next/headers";
import { VisitorForm } from "@/modules/example/ui/VisitorForm";

export default async function Home() {
  const cookieStore = await cookies();
  const name = cookieStore.get("visitor_name")?.value || "";

  return (
    <div className="bg-background text-foreground grid min-h-screen place-items-center px-4 py-20 font-[family-name:var(--font-geist-sans)] sm:px-10">
      <main className="w-full max-w-xl space-y-12 text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          ✅ Modular Architecture Ready
        </h1>

        <p className="text-muted-foreground text-base leading-relaxed">
          This project uses a <strong>modular architecture</strong> with Server
          Actions, Hooks, Prisma + MongoDB, Zod validation, TanStack Query, and
          RBAC middleware.
        </p>

        <div className="bg-muted/40 space-y-4 rounded-lg border px-6 py-6 text-left">
          <h2 className="text-lg font-medium">
            🏗️ Modular Server Action Example
          </h2>

          <VisitorForm />

          <p className="text-muted-foreground text-sm">
            Your saved name:{" "}
            <span className="text-foreground font-semibold">
              {name || "none saved yet"}
            </span>
          </p>

          <div className="text-muted-foreground space-y-1 border-t pt-4 text-xs">
            <p>
              ✅ Server Action:{" "}
              <code>modules/example/serverActions/visitor.action.ts</code>
            </p>
            <p>
              ✅ Hook: <code>modules/example/hooks/useSubmitName.ts</code>
            </p>
            <p>
              ✅ Component: <code>modules/example/ui/VisitorForm.tsx</code>
            </p>
            <p>
              ✅ Middleware: <code>lib/middleware/withAccess.ts</code>
            </p>
          </div>
        </div>

        <footer className="text-muted-foreground pt-12 text-xs">
          <p>Built with Next.js 16, Modular Architecture, and ❤️ by you.</p>
        </footer>
      </main>
    </div>
  );
}
