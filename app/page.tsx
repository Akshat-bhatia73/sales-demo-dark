"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { MainContent } from "@/components/layout/main-content";

export default function Home() {
  return (
    <div className="h-screen flex bg-neutral-900 text-neutral-100">
      <Sidebar />
      <div className="max-w-[1400px] mx-auto p-6 h-screen overflow-auto">
        <MainContent />
      </div>
    </div>
  );
}
