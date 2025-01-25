"use client";

import { Database, LineChart, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const tools = [
  { name: "Salesforce", icon: Database, status: "Connected" },
  { name: "LinkedIn Analytics", icon: LineChart, status: "Active" },
  { name: "Marketo", icon: Mail, status: "Connected" }
];

export function ConnectedTools() {
  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-neutral-800 rounded-lg ">
      <span className="text-sm font-medium text-neutral-200">Connected Tools:</span>
      <div className="flex gap-3">
        {tools.map((tool) => (
          <div key={tool.name} className="flex items-center gap-2">
            <tool.icon className="w-4 h-4 text-green-400" />
            <span className="text-sm text-neutral-300">{tool.name}</span>
            <Badge 
              variant="secondary" 
              className="bg-green-500/10 text-green-400 border-green-500/30 text-xs"
            >
              {tool.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}