"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { TestResult } from "@/types/skills";

interface TestingSidebarProps {
  results: TestResult[];
  onFeedback: (id: string, feedback: "positive" | "negative") => void;
}

export function TestingSidebar({ results, onFeedback }: TestingSidebarProps) {
  return (
    <Card className="w-80 gradient-background overflow-hidden">
      <div className="p-4 border-b border-neutral-800">
        <h2 className="font-medium">Test Results</h2>
      </div>

      <ScrollArea className="h-[calc(100vh-14rem)]">
        <div className="p-4 space-y-4">
          {results.map((result) => (
            <Card
              key={result.id}
              className="p-4 bg-neutral-800/50 border-neutral-800/50 space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                    {Math.round(result.confidence * 100)}% Confidence
                  </Badge>
                  <span className="text-xs text-neutral-300">
                    {new Date(result.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <p className="text-xs text-neutral-300">Input</p>
                  <p className="text-sm">{result.input}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-neutral-300">Output</p>
                  <p className="text-sm">{result.output}</p>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${
                    result.feedback === "positive" 
                      ? "text-green-400" 
                      : "text-neutral-300 hover:text-green-400"
                  }`}
                  onClick={() => onFeedback(result.id, "positive")}
                >
                  <ThumbsUp className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${
                    result.feedback === "negative" 
                      ? "text-red-400" 
                      : "text-neutral-300 hover:text-red-400"
                  }`}
                  onClick={() => onFeedback(result.id, "negative")}
                >
                  <ThumbsDown className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}