"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { AgentMessage } from "@/types/agents";

interface UserMessageProps {
  message: AgentMessage;
}

export function UserMessage({ message }: UserMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3 mb-4 justify-end"
    >
      <div className="flex-1 max-w-[80%]">
        <div className="bg-green-500/10 text-blue-100 rounded-lg p-4">
          <p className="text-sm">{message.content}</p>
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center">
        <User className="w-4 h-4 text-neutral-300" />
      </div>
    </motion.div>
  );
}