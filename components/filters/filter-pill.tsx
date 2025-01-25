"use client";

import { cn } from "@/lib/utils";

interface FilterPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function FilterPill({ label, active, onClick }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150",
        active
          ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
          : "bg-neutral-800 text-neutral-200 hover:bg-neutral-800 hover:border-neutral-700/70"
      )}
    >
      {label}
    </button>
  );
}