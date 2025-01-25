"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function ReportSearch() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-300" />
      <Input
        placeholder="Search reports..."
        className="pl-9 bg-neutral-800/50 border-neutral-800"
      />
    </div>
  );
}