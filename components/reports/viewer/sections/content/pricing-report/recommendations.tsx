"use client";

import { Card } from "@/components/ui/card";

const recommendations = {
  pricing: [
    "Develop usage-based option",
    "Create security add-ons",
    "Build compliance packages"
  ],
  structure: [
    "Enhance multi-year incentives",
    "Develop service packages",
    "Create volume discounts"
  ],
  competitive: [
    "Match security pricing",
    "Enhance compliance offerings",
    "Develop service capabilities"
  ]
};

export function Recommendations() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Recommendations</h2>
      
      <div className="grid grid-cols-3 gap-6">
        {Object.entries(recommendations).map(([category, items]) => (
          <Card key={category} className="gradient-background p-6">
            <h3 className="text-lg font-medium text-slate-100 mb-4">
              {category.charAt(0).toUpperCase() + category.slice(1)} Model
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}