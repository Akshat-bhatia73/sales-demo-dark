"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, FileText, Code, Mail } from "lucide-react";

interface KeyMetricsProps {
  type: "healthcare" | "nurture" | "content" | "developer";
}

const metrics = {
  developer: [
    {
      label: "Technical Engagement",
      value: "3x Better ROI",
      trend: "+185% vs general",
      detail: "Driven by API documentation • Peak: Auth guides",
      icon: Code
    },
    {
      label: "Time to Technical Validation",
      value: "35 days",
      trend: "-18 days vs general",
      detail: "Faster proof-of-concept • Reduced technical questions",
      icon: Clock
    },
    {
      label: "Technical Decision Maker Access",
      value: "72% Principal+",
      trend: "+52% vs general",
      detail: "Higher quality conversations • Better technical alignment",
      icon: Users
    }
  ],
  // ... other metric types remain unchanged
};

export function KeyMetrics({ type }: KeyMetricsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-3 gap-4"
    >
      {metrics[type]?.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="bg-neutral-800 border-neutral-800 p-4 hover:border-neutral-700 transition-colors">
            <div className="flex items-start gap-2 mb-2">
              <metric.icon className="w-4 h-4 mt-0.5 text-green-400" />
              <span className="text-sm text-neutral-200">{metric.label}</span>
            </div>
            <div className="text-2xl font-semibold mb-1">{metric.value}</div>
            <div className="text-sm text-green-400 mb-2">{metric.trend}</div>
            {metric.detail && (
              <div className="text-xs text-neutral-200 border-t border-neutral-700 pt-2">
                {metric.detail}
              </div>
            )}
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}