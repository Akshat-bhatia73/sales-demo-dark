"use client";

import { Report } from "@/types/reports";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface KeyFindingsProps {
  report: Report;
}

export function KeyFindings({ report }: KeyFindingsProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Key Findings</h2>
      <Card className="gradient-backgroundp-6">
        <div className="space-y-4">
          {report.findings?.map((finding, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg"
            >
              <ArrowRight className="w-4 h-4 mt-1 text-green-400" />
              <p className="text-slate-300">{finding}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}