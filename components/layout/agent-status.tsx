"use client";

import { Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AgentStatus() {
  const activeAgents = 2;
  const connectedTools = ["Salesforce", "Marketo", "LinkedIn"];

  return (
    <div className="flex items-center gap-2 py-2 px-1">
      <div className="flex items-center gap-2">
        <Bot className="w-4 h-4 text-green-400" />
        <span className="text-sm text-neutral-300">{activeAgents} Active</span>
      </div>
      <div className="flex gap-1 ml-auto">
        {connectedTools.map((tool) => (
          <Badge
            key={tool}
            variant="secondary"
            className="bg-neutral-800 text-xs px-1.5"
          >
            {tool}
          </Badge>
        ))}
      </div>
    </div>
  );
}