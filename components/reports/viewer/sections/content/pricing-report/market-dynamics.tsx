"use client";

import { Card } from "@/components/ui/card";

export function MarketDynamics() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Market Pricing Dynamics</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <Card className="gradient-background p-6">
          <h3 className="text-lg font-medium text-slate-100 mb-4">Pricing Model Shifts</h3>
          <div className="space-y-3">
            {[
              "60% of market moving to usage-based",
              "Security premiums becoming standard",
              "Compliance features as add-ons",
              "Professional services bundling"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="gradient-background p-6">
          <h3 className="text-lg font-medium text-slate-100 mb-4">Deal Size Analysis</h3>
          <div className="space-y-4">
            {[
              { segment: "Small (1000-2500 employees)", value: "$75K avg" },
              { segment: "Mid (2500-5000 employees)", value: "$150K avg" },
              { segment: "Large (5000+ employees)", value: "$250K+ avg" }
            ].map((segment) => (
              <div key={segment.segment} className="flex justify-between text-sm">
                <span className="text-slate-300">{segment.segment}</span>
                <span className="text-green-400">{segment.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}