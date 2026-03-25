import { GitBranch } from "lucide-react";
import { TopBar } from "@/components/dashboard/TopBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <aside className="flex w-60 shrink-0 flex-col border-r border-border bg-card">
        <div className="flex h-14 items-center gap-2 border-b border-accent px-4 text-emerald-500">
          <GitBranch className="h-5 w-5" />
          <span className="text-sm font-semibold tracking-tight">DevStash</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-lg font-semibold text-foreground">Sidebar</h2>
        </div>
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
