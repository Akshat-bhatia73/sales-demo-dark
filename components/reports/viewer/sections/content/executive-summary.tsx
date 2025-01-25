"use client";

import { Report } from "@/types/reports";
import { Card } from "@/components/ui/card";

interface ExecutiveSummaryProps {
  report: Report;
}

export function ExecutiveSummary({ report }: ExecutiveSummaryProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Executive Summary</h2>
      <Card className="gradient-background p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-neutral-300 mb-1">Time Period</div>
              <div className="font-medium text-slate-100">June 1-30, 2024</div>
            </div>
            <div>
              <div className="text-sm text-neutral-300 mb-1">Total Reviews</div>
              <div className="font-medium text-slate-100">142 Analyzed</div>
            </div>
            <div>
              <div className="text-sm text-neutral-300 mb-1">Enterprise Definition</div>
              <div className="font-medium text-slate-100">1000+ employees</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-slate-100">Critical Insights</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Enterprise security becoming primary selection factor
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                API capabilities driving technical evaluations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Integration depth increasingly critical
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Compliance features gap emerging
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}