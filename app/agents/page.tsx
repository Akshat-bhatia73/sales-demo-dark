"use client";

import { AgentGrid } from "@/components/agents/management/agent-grid";
import { AgentMetrics } from "@/components/agents/management/agent-metrics";
import { Button } from "@/components/ui/button";
import { Plus, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AgentsPage() {
  const router = useRouter();

  return (
    <div className="h-screen bg-neutral-900 text-slate-100">
      <div className="max-w-[1400px] p-6 space-y-8">
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
          <div>
            <h1 className="text-4xl font-medium tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300 mb-2">Agent Studio</h1>
            <p className="text-lg text-neutral-300 leading-relaxed">Create, manage and monitor your AI Analysts</p>
          </div>
          <div className="flex gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="outline"
                onClick={() => router.push("/agents/skills")}
                className="font-semibold"
              >
                <Zap className="w-4 h-4 mr-1" />
                Skills Library
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                onClick={() => router.push("/agents/new")}
                className="font-semibold"
              >
                <Plus className="w-4 h-4 mr-1" />
                Create Agent
              </Button>
            </motion.div>
          </div>
        </div>

        <AgentMetrics />
        <AgentGrid />
      </div>
    </div>
  );
}