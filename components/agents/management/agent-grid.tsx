"use client";

import { useAgents } from "@/hooks/use-agents";
import { AgentCard } from "./agent-card";
import { motion } from "framer-motion";

export function AgentGrid() {
  const { agents } = useAgents();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {agents.map((agent, i) => (
        <motion.div
          key={agent.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.3,
            delay: i * 0.1,
            ease: "easeOut"
          }}
          className="h-full"
        >
          <AgentCard agent={agent} />
        </motion.div>
      ))}
    </div>
  );
}