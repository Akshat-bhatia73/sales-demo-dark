"use client";

import { SkillsGrid } from "@/components/skills/skills-grid";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AgentSkillsPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1400px] w-[1190px] mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="ghost"
                  onClick={() => router.push("/agents")}
                  className="flex items-center gap-2 bg-neutral-800/50 text-slate-300 hover:text-slate-100"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Back to Agents</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div>
            <h1 className="text-3xl font-bold">Skills Library</h1>
            <p className="text-neutral-300 mt-2">
              Reusable workflow components for your agents
            </p>
          </div>
        </div>
        <Button
          className=""
          onClick={() => router.push("/agents/skills/create")}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Skill
        </Button>
      </div>

      <SkillsGrid />
    </div>
  );
}
