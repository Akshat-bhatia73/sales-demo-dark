"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Code, Zap } from "lucide-react";
import { CollapsibleSection } from "./sections/collapsible-section";
import { KeyMetrics } from "./sections/key-metrics";
import { TrendAnalysis } from "./sections/trend-analysis";
import { ActionExecution } from "./sections/action-execution";

interface AnalysisContentProps {
  type: "healthcare" | "nurture" | "content" | "developer";
}

export function AnalysisContent({ type }: AnalysisContentProps) {
  return (
    <div className="p-6 space-y-6">
      <CollapsibleSection 
        title="Key Metrics" 
        icon={<Code className="w-5 h-5 text-green-400" />}
        defaultExpanded={true}
      >
        <KeyMetrics type={type} />
      </CollapsibleSection>

      <CollapsibleSection 
        title="Technical Engagement Trend" 
        icon={<TrendingUp className="w-5 h-5 text-green-400" />}
        defaultExpanded={false}
      >
        <TrendAnalysis />
      </CollapsibleSection>

      <CollapsibleSection 
        title="Action Items" 
        icon={<Zap className="w-5 h-5 text-green-400" />}
        defaultExpanded={true}
      >
        <ActionExecution type={type} />
      </CollapsibleSection>
    </div>
  );
}