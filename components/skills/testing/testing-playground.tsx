"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TestingPlaygroundProps {
  skillId: string;
  onTest: (input: string) => void;
}

export function TestingPlayground({ skillId, onTest }: TestingPlaygroundProps) {
  const [input, setInput] = useState("");

  const sampleInputs = [
    "Analyze enterprise security requirements",
    "Track competitor feature changes",
    "Monitor market sentiment trends",
    "Identify high-intent buying signals"
  ];

  return (
    <div className="flex-1 w-full">
      <Card className="gradient-background p-6 space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-4">Test Input</h2>
          <div className="space-y-4">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter test input..."
              className="bg-neutral-800/50 border-neutral-800"
            />
            <Button
              onClick={() => onTest(input)}
              disabled={!input.trim()}
              className="w-full"
            >
              <Play className="w-4 h-4 mr-2" />
              Run Test
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-neutral-300 mb-3">Sample Inputs</h3>
          <ScrollArea className="h-[400px]">
            <div className="space-y-2">
              {sampleInputs.map((sample, i) => (
                <Card
                  key={i}
                  className="p-3 bg-neutral-800/50 border-neutral-800/50 cursor-pointer hover:bg-neutral-800 hover:border-neutral-700"
                  onClick={() => setInput(sample)}
                >
                  <p className="text-sm">{sample}</p>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </Card>
    </div>
  );
}