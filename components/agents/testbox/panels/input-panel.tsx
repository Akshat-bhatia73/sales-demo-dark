"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Clock, X } from "lucide-react";

interface InputPanelProps {
  onExecute: (input: string) => void;
}

const quickTasks = [
  "Analyze market trends in healthcare vertical",
  "Monitor competitor pricing changes",
  "Track enterprise buying signals",
  "Identify high-intent prospects",
];

export function InputPanel({ onExecute }: InputPanelProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onExecute(input);
    setInput("");
  };

  return (
    <div className="w-1/3 border-r border-neutral-800 flex flex-col">
      <div className="p-4 border-b border-neutral-800">
        <h3 className="font-medium mb-4">Test Input</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter test scenario..."
            className="bg-neutral-800/50 border-neutral-800"
          />
          <Button
            variant={"default"}
            type="submit"
            className="w-full"
            disabled={!input.trim()}
          >
            <Play className="w-4 h-4 mr-2" />
            Execute
          </Button>
        </form>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div>
          <h4 className="text-sm font-medium text-neutral-300 mb-2">
            Quick Tasks
          </h4>
          <div className="space-y-2">
            {quickTasks.map((task) => (
              <Card
                key={task}
                className="p-3 bg-neutral-800/50 border-neutral-800 transition cursor-pointer hover:bg-neutral-800 hover:border-neutral-700"
                onClick={() => setInput(task)}
              >
                <div className="text-sm">{task}</div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-neutral-300 mb-2">
            Recent Tasks
          </h4>
          <div className="space-y-2">
            {/* Recent tasks would be populated from history */}
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-800">
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-neutral-800/50 text-neutral-300 hover:text-slate-100"
            onClick={() => console.log("Clear context")}
          >
            <X className="w-4 h-4 mr-2" />
            Clear Context
          </Button>
        </div>
      </div>
    </div>
  );
}
