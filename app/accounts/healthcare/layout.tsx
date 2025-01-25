"use client";

import { Sidebar } from "@/components/layout/sidebar";

export default function HealthcareJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="gradient-background flex w-screen h-screen text-slate-100">
      <Sidebar />
      <div className="transition-all w-full duration-300 h-screen overflow-auto">
        {children}
      </div>
    </div>
  );
}