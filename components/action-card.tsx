"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { OptimizationModal } from "./analysis/optimization/optimization-modal";
import { AnalysisModal } from "./analysis/modal/analysis-modal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ActionCardProps {
  action: {
    title: string;
    description: string;
    impact: string;
    tools: string[];
    priority: string;
    type: "healthcare" | "nurture" | "content";
    details?: string;
  };
}

export function ActionCard({ action }: ActionCardProps) {
  const [showOptimization, setShowOptimization] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <>
      <Card className="gradient-background hover:border-neutral-700 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-slate-100 mb-2">
                {action.title}
              </h3>
              <p className="text-neutral-200 text-sm mb-3">
                {action.description}
              </p>
            </div>
            <Badge
              variant="outline"
              className={cn(
                "ml-2",
                action.priority === "high"
                  ? "text-green-400 border-green-400/30"
                  : "text-yellow-500 border-yellow-500/30"
              )}
            >
              {action.impact}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {action.tools.map((tool, j) => (
                <Badge key={j} variant="outline">
                  {tool}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setShowAnalysis(true)}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Dive Deeper</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      variant="default"
                      size="icon"
                      onClick={() => setShowOptimization(true)}
                    >
                      <Play className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Execute</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </CardContent>
      </Card>

      <OptimizationModal
        isOpen={showOptimization}
        onClose={() => setShowOptimization(false)}
        actionType={action.type}
      />

      <AnalysisModal
        isOpen={showAnalysis}
        onClose={() => setShowAnalysis(false)}
        analysisType={action.type}
      />
    </>
  );
}
