"use client";

import { Sidebar } from "@/components/layout/sidebar";

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="  bg-neutral-900 flex h-screen text-slate-100">
      <Sidebar />
      <div className="transition-all w-full duration-300">{children}</div>
    </div>
  );
}
