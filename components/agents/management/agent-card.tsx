"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Bot, Play, Pause, Settings, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { Agent } from "@/types/agents";
import { useState } from "react";
import { TestBoxModal } from "../testbox/test-box-modal";
import { motion } from "framer-motion";

interface AgentCardProps {
  agent: Agent;
}

export const dynamicParams = false

export function AgentCard({ agent }: AgentCardProps) {
  const router = useRouter();
  const [showTestBox, setShowTestBox] = useState(false);

  return (
    <>
      <motion.div transition={{ duration: 0.15 }}>
        <Card className="gradient-background p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
          <div className="flex items-start justify-between mb-6">
            <div className="">
              <div>
                <h3 className="text-lg font-medium text-slate-100">
                  {agent.name}
                </h3>
                <p className="text-sm text-neutral-300 mt-1">
                  {agent.description}
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className={`
                px-4 py-1 rounded-full transition-all duration-150 capitalize
                ${
                  agent.status === "active"
                    ? "bg-green-500/10 text-green-400 border-green-500/30"
                    : "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
                }
              `}
            >
              {agent.status}
            </Badge>
          </div>

          <div className="space-y-6 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-300">Accuracy</span>
              <span className="font-mono font-semibold text-green-400">
                {agent.accuracy}%
              </span>
            </div>
            <Progress value={agent.accuracy} className="h-2" />

            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-neutral-300 mb-2">Signals Processed</div>
                <div className="font-mono font-semibold text-slate-100">
                  {agent.signalsProcessed}
                </div>
              </div>
              <div>
                <div className="text-neutral-300 mb-2">Last Active</div>
                <div className="font-mono font-semibold text-slate-100">
                  {agent.lastActive}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="flex-1 transition-all duration-150"
              onClick={() => setShowTestBox(true)}
            >
              <Play className="w-4 h-4 mr-3" />
              Test
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1 transition-all duration-150"
              onClick={() => router.push(`/agents/${agent.id}/configure`)}
            >
              <Settings className="w-4 h-4 mr-3" />
              Configure
            </Button>
          </div>
        </Card>
      </motion.div>

      <TestBoxModal
        isOpen={showTestBox}
        onClose={() => setShowTestBox(false)}
        agent={agent}
      />
    </>
  );
}
