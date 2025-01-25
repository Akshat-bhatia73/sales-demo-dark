"use client";

import { Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HeaderAgentStatus() {
  const activeAgents = 2;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 rounded-lg border border-neutral-700">
      <Bot className="w-4 h-4 text-green-400" />
      <span className="text-sm font-medium text-neutral-300">{activeAgents} Active Agents</span>
      <Badge variant="secondary" className="bg-green-400/10 text-green-400 border-green-500/30">
        Running
      </Badge>
    </div>
  );
}