"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AgentThinkingProps {
  onFeedback: (isCorrect: boolean) => void;
}

export function AgentThinking({ onFeedback }: AgentThinkingProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 rounded-lg bg-neutral-800"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm text-neutral-200 hover:text-neutral-300 transition-colors"
      >
        <Brain className="w-4 h-4" />
        Help me understand your thinking
      </button>

      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="mt-4 space-y-4"
        >
          <p className="text-sm text-neutral-300">
            I'm looking at enterprise healthcare patterns across your LinkedIn and SEM campaigns, 
            focusing on technical decision-maker engagement and conversion rates.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-200">Is this the right focus?</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onFeedback(true)}
              className="text-green-400 hover:text-green-500"
            >
              <ThumbsUp className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onFeedback(false)}
              className="text-red-400 hover:text-red-500"
            >
              <ThumbsDown className="w-4 h-4 mt-1" />
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}