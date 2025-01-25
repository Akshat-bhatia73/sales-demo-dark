"use client";

import { useRouter } from "next/navigation";
import { SearchCommand } from "@/components/search-command";
import { JourneyHeader } from "@/components/journey/journey-header";
import { MetricsGrid } from "@/components/journey/metrics-grid";
import { JourneyFlow } from "@/components/journey/journey-flow";
import { InsightsPanel } from "@/components/journey/insights-panel";
import { StageAnalysis } from "@/components/journey/stage-analysis";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowLeftIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HealthcareJourneyPage() {
  const router = useRouter();

  return (
    <div className="h-screen overflow-auto bg-neutral-900 text-neutral-100">
      <div className="max-w-[1400px] mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-start gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="ghost"
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 bg-neutral-800/50 text-neutral-300 hover:text-slate-100"
                  >
                    <ArrowLeftIcon className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Back to Mission Control</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <JourneyHeader />
          </div>
        </div>
        <div className="mb-8">
          <SearchCommand />
        </div>
        <MetricsGrid />
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <JourneyFlow />
            <StageAnalysis />
          </div>
          <div className="col-span-4">
            <InsightsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
