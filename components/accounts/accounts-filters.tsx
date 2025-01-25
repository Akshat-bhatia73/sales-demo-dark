"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const filters = [
  "Enterprise ($1B+)",
  "Technical Decision Makers",
  "High Engagement",
  "Active Pipeline",
  "CISO Engaged"
];

export function AccountsFilters() {
  return (
    <div className="flex items-center gap-2">
      {filters.map((filter) => (
        <Badge
          key={filter}
          variant="outline"
          className="bg-green-400/10 text-green-400 border-green-500/30 hover:bg-green-500/20 cursor-pointer"
        >
          {filter}
        </Badge>
      ))}
      <Button variant="ghost" size="sm" className="text-neutral-200">
        + Add Filter
      </Button>
    </div>
  );
}