"use client";

import { Card } from "@/components/ui/card";
import { Bot, Activity, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  {
    title: "Active Agents",
    value: "8",
    trend: "+2 this month",
    icon: Bot
  },
  {
    title: "Average Accuracy",
    value: "94.2%",
    trend: "+1.5% vs last month",
    icon: Activity
  },
  {
    title: "Insights Generated",
    value: "1,250/hour",
    trend: "+12% vs baseline",
    icon: Zap
  },
  {
    title: "Response Time",
    value: "1.2s",
    trend: "-0.3s this week",
    icon: Clock
  }
];

export function AgentMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.3,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          whileHover={{ 
            transition: { duration: 0.2 }
          }}
        >
          <Card className="gradient-background border border-neutral-800 hover:border-neutral-700 transition-all p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-neutral-300">{metric.title}</span>
              <metric.icon className="w-6 h-6 text-green-400" />
            </div>
            <div className="font-mono text-3xl font-semibold mb-2 text-slate-100 text-shadow tracking-tight">
              {metric.value}
            </div>
            <div className="text-sm text-green-400 font-medium">{metric.trend}</div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}