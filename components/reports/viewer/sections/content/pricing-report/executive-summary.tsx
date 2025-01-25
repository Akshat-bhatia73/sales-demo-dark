"use client";

import { Card } from "@/components/ui/card";

export function ExecutiveSummary() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Executive Summary</h2>
      <Card className="gradient-background p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-neutral-300 mb-1">Analysis Period</div>
              <div className="font-medium text-slate-100">Q2 2024 (April-June)</div>
            </div>
            <div>
              <div className="text-sm text-neutral-300 mb-1">Market Focus</div>
              <div className="font-medium text-slate-100">Enterprise AI Writing Solutions</div>
            </div>
            <div>
              <div className="text-sm text-neutral-300 mb-1">Key Finding</div>
              <div className="font-medium text-slate-100">Major shift toward usage-based pricing</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-slate-100">Market Dynamics</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Average enterprise deal size: $125K (↑15%)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                60% of market moving to usage-based pricing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Security premiums becoming standard
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Multi-year commitments increasing
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}