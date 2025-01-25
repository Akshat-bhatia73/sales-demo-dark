"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bot, Zap } from "lucide-react";
import { Agent } from "@/types/agents";
import { motion } from "framer-motion";

interface ExecutionPanelProps {
  isExecuting: boolean;
  agent: Agent;
}

export function ExecutionPanel({ isExecuting, agent }: ExecutionPanelProps) {
  return (
    <div className="flex-1 border-r border-neutral-800 p-4">
      <h3 className="font-medium mb-4">Execution</h3>

      {isExecuting ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <Card className="bg-neutral-800/50 border-neutral-800 p-4">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-5 h-5 text-green-400" />
              <div>
                <div className="font-medium">Processing Input</div>
                <div className="text-sm text-neutral-300">Analyzing content...</div>
              </div>
            </div>
            <Progress value={45} className="h-1" />
          </Card>

          <Card className="bg-neutral-800/50 border-neutral-800 p-4">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-green-400" />
              <div>
                <div className="font-medium">Active Skills</div>
                <div className="text-sm text-neutral-300">2 skills in use</div>
              </div>
            </div>
            <div className="space-y-2">
              {["Intent Classification", "Sentiment Analysis"].map((skill) => (
                <div key={skill} className="flex items-center justify-between">
                  <span className="text-sm">{skill}</span>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                    Active
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      ) : (
        <div className="flex items-center justify-center h-[200px] text-neutral-300">
          Enter a test scenario to begin
        </div>
      )}
    </div>
  );
}