"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ChannelComparisonProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const channelData = {
  linkedin: {
    impressions: "15,000",
    formFills: "450",
    spend: "$96,750",
    sqlRate: "45%",
    velocity: "35 days"
  },
  sem: {
    impressions: "42,000",
    formFills: "680",
    spend: "$258,400",
    sqlRate: "15%",
    velocity: "58 days"
  }
};

export function ChannelComparison({ isExpanded, onToggle }: ChannelComparisonProps) {
  return (
    <Card className="bg-neutral-800 border-neutral-700 overflow-hidden">
      <motion.div
        className="p-4 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Channel Performance Comparison</h3>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 space-y-4">
          {Object.entries(channelData.linkedin).map(([key, value], i) => (
            <div key={key} className="grid grid-cols-3 gap-4">
              <div className="text-sm text-neutral-200 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </div>
              <div className="text-sm font-medium text-green-400">
                LinkedIn: {value}
              </div>
              <div className="text-sm font-medium text-neutral-200">
                SEM: {channelData.sem[key]}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Card>
  );
}