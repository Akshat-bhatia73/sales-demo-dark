"use client";

import { Sidebar } from "@/components/layout/sidebar";

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex overflow-hidden w-screen bg-neutral-900 text-slate-100">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
