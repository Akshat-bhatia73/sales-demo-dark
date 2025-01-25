"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "@/components/ui/command";
import { Search, Sparkles } from "lucide-react";

const missionControlQueries = [
  {
    text: "Show journey map for enterprise healthcare leads",
    type: "healthcare",
    path: "/journey/healthcare"
  },
  {
    text: "Which messages resonate with CFO persona?",
    type: "nurture",
    path: null
  },
  {
    text: "Compare channel performance for Q4 across segments",
    type: "healthcare",
    path: null
  },
  {
    text: "Analyze conversion rates by content type",
    type: "content",
    path: null
  }
];

export function SearchCommand() {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [selectedAnalysis, setSelectedAnalysis] = useState<string | null>(null);

  const handleQuerySelect = (type: string, path: string | null) => {
    if (path) {
      router.push(path);
    } else {
      setSelectedAnalysis(type);
    }
    setIsFocused(false);
  };

  return (
    <div className="relative w-full">
      <div className="relative group">
        <Command className="relative rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-lg shadow-neutral-800/20 overflow-visible">
          <div className="flex items-center px-4 py-3">
            <Search className="w-5 h-5 mr-2 text-muted-foreground" />
            <input
              placeholder="Ask anything about your marketing performance..."
              className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>
        </Command>
      </div>
      
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-xl rounded-xl border border-border p-2 shadow-2xl z-50">
          {missionControlQueries.map((query, i) => (
            <div
              key={i}
              className="px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800 rounded-lg cursor-pointer transition-colors"
              onClick={() => handleQuerySelect(query.type, query.path)}
            >
              {query.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}