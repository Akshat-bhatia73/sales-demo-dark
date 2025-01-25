"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { AgentMessage as AgentMessageType } from "@/types/agents";
import { AgentOptions } from "./agent-options";

interface AgentMessageProps {
  message: AgentMessageType;
  onOptionSelect: (optionId: string) => void;
}

export function AgentMessage({ message, onOptionSelect }: AgentMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3 mb-4"
    >
      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
        <Bot className="w-4 h-4 text-green-400" />
      </div>
      <div className="flex-1">
        <div className="bg-slate-800/50 rounded-lg p-4">
          <p className="text-sm mb-2">{message.content}</p>
          {message.confidence && (
            <div className="text-xs text-neutral-300">
              Confidence: {message.confidence}%
            </div>
          )}
        </div>
        {message.options && (
          <AgentOptions options={message.options} onSelect={onOptionSelect} />
        )}
      </div>
    </motion.div>
  );
}