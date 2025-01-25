"use client";

import { Sidebar } from "@/components/layout/sidebar";

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-screen flex bg-neutral-900 text-slate-100">
      <Sidebar />
      <div className="h-screen overflow-auto transition-all duration-300">
        {children}
      </div>
    </div>
  );
}