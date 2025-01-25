"use client";

import { Report } from "@/types/reports";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ReportHeaderProps {
  report: Report;
}

export function ReportHeader({ report }: ReportHeaderProps) {
  const router = useRouter();

  return (
    <div className="border-b border-neutral-800 bg-neutral-900">
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex items-center justify-between mb-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="ghost"
                  onClick={() => router.push("/")}
                  className="flex items-center gap-2 bg-neutral-800/50 text-neutral-300 hover:text-slate-100"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Back to Mission Control</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-slate-100 border-neutral-800"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-slate-100 border-neutral-800"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="bg-green-500/10 capitalize text-green-400 border-green-500/30"
            >
              {report.type}
            </Badge>
            <span className="text-sm text-neutral-300">{report.date}</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-100">{report.title}</h1>
          <Badge
            variant="outline"
            className="bg-green-500/10 text-green-400 border-green-500/30"
          >
            {report.confidence}% Confidence
          </Badge>
        </div>
      </div>
    </div>
  );
}
