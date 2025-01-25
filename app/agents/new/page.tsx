"use client";

import { AgentCreationStepper } from "@/components/agents/creation/agent-creation-stepper";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewAgentPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1400px] overflow-hidden mx-auto w-full p-6 space-y-6">
      <div className="flex items-start gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="ghost"
                onClick={() => router.push("/agents")}
                className="flex items-center gap-2 bg-neutral-800/50 text-neutral-300 hover:text-slate-100"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Back to Agents</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div>
          <h1 className="text-3xl font-bold">Create New Agent</h1>
          <p className="text-neutral-300 mt-2">
            Configure your AI agent in 4 simple steps
          </p>
        </div>
      </div>

      <AgentCreationStepper />
    </div>
  );
}
