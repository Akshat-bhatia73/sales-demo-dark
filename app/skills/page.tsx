"use client";

import { SkillsGrid } from "@/components/skills/skills-grid";

export default function SkillsPage() {
  return (
    <div className="max-w-[1400px] w-[1190px] p-6 space-y-6">
      <h1 className="text-2xl font-bold">Skills Library</h1>
      <p className="text-neutral-300">Configure and manage your AI skills</p>
      <SkillsGrid />
    </div>
  );
}