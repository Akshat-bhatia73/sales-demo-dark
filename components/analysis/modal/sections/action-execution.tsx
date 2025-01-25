"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Clock,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Download,
  Share2,
  Clock2,
  Loader2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const executionPlans = {
  developer: {
    title: "Shift $40,000 to Developer-Focused Content",
    timeline: "Next 30 days",
    risk: "Low Risk - Reversible",
    impact: {
      savings: "$40,000 monthly savings",
      improvement: "35% higher technical validation rate",
    },
    steps: [
      "Expand API documentation coverage",
      "Create technical comparison content",
      "Launch dedicated developer campaign",
      "Set up technical validation monitoring",
    ],
  },
};

export function ActionExecution({ type = "developer" }) {
  const [showTimeline, setShowTimeline] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const plan = executionPlans.developer;

  const handleExecute = () => {
    setIsExecuting(true);
    setTimeout(() => setIsExecuting(false), 2000);
  };

  return (
    <Card className="gradient-background mt-6">
      <div className="p-6 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <div className="flex items-center gap-4 text-sm text-neutral-200">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {plan.timeline}
              </span>
              <span className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                {plan.risk}
              </span>
            </div>
          </div>
          <Badge
            variant="outline"
            className="bg-green-500/10 text-green-400 border-green-500/30"
          >
            Ready to Execute
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-lg font-medium">Expected Impact</div>
            <div className="text-sm text-neutral-200">
              {plan.impact.savings} • {plan.impact.improvement}
            </div>
          </div>
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowTimeline(!showTimeline)}
                  >
                    {showTimeline ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <Clock2 className="w-5 h-5" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Timeline</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="icon">
                    <Download className="w-5 h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Export</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Share</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="default"
                    size="icon"
                    onClick={handleExecute}
                    disabled={isExecuting}
                  >
                    {isExecuting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {isExecuting ? "Executing..." : "Execute"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <AnimatePresence>
          {showTimeline && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-4 gap-4 pt-4 border-t border-neutral-700">
                {plan.steps.map((step, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-sm text-neutral-200">
                      Week {index + 1}
                    </div>
                    <div className="p-4 rounded-lg bg-neutral-800 space-y-2">
                      <div className="font-medium">{step}</div>
                      <div className="flex items-center justify-between text-sm">
                        <Badge
                          variant="outline"
                          className={
                            index === 0
                              ? "bg-green-400/10 text-green-400 border-green-500/30 capitalize px-2 py-1"
                              : "bg-transparent text-neutral-300 border-neutral-700 capitalize px-2 py-1"
                          }
                        >
                          {index === 0 ? "ready" : "pending"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}
