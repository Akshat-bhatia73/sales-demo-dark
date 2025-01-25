"use client";

import { Card } from "@/components/ui/card";

const dealData = {
  terms: [
    { type: "1-year", percentage: 25 },
    { type: "2-year", percentage: 30 },
    { type: "3-year", percentage: 45 }
  ],
  commitments: [
    { type: "Usage commitments", percentage: 60 },
    { type: "User-based", percentage: 30 },
    { type: "Hybrid", percentage: 10 }
  ],
  services: [
    { component: "Implementation", status: "Required" },
    { component: "Training", status: "Optional" },
    { component: "Custom dev", status: "Available" },
    { component: "Consulting", status: "Premium" }
  ]
};

export function DealStructure() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Deal Structure Trends</h2>
      
      <div className="grid grid-cols-3 gap-6">
        <Card className="gradient-background p-6">
          <h3 className="text-lg font-medium text-slate-100 mb-4">Length Distribution</h3>
          <div className="space-y-4">
            {dealData.terms.map((term) => (
              <div key={term.type} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{term.type}</span>
                  <span className="text-green-400">{term.percentage}%</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${term.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="gradient-background p-6">
          <h3 className="text-lg font-medium text-slate-100 mb-4">Commitment Types</h3>
          <div className="space-y-4">
            {dealData.commitments.map((commitment) => (
              <div key={commitment.type} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{commitment.type}</span>
                  <span className="text-green-400">{commitment.percentage}%</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${commitment.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="gradient-background p-6">
          <h3 className="text-lg font-medium text-slate-100 mb-4">Service Components</h3>
          <div className="space-y-3">
            {dealData.services.map((service) => (
              <div key={service.component} className="flex justify-between text-sm">
                <span className="text-slate-300">{service.component}</span>
                <span className="text-green-400">{service.status}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}