"use client";

import { Card } from "@/components/ui/card";

const campaigns = {
  copyai: {
    name: "Copy.ai",
    spend: "$2.8M",
    segments: [
      { name: "Enterprise Security", spend: "$980K" },
      { name: "API Capabilities", spend: "$620K" },
      { name: "Team Collaboration", spend: "$540K" },
      { name: "ROI Calculator", spend: "$460K" },
      { name: "Other", spend: "$200K" }
    ],
    messages: [
      "Enterprise-grade AI Security",
      "Seamless Team Workflows",
      "Advanced API Integration",
      "99.99% Uptime SLA"
    ]
  },
  writer: {
    name: "Writer.ai",
    spend: "$2.2M",
    segments: [
      { name: "Compliance Features", spend: "$880K" },
      { name: "Custom Models", spend: "$560K" },
      { name: "Enterprise Scale", spend: "$420K" },
      { name: "Integration Suite", spend: "$340K" }
    ],
    messages: [
      "Compliance-First AI",
      "Custom Enterprise Models",
      "Enterprise Scale & Security",
      "Full Audit Capabilities"
    ]
  }
};

export function CampaignFocus() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Campaign Focus Analysis</h2>
      
      <div className="grid gap-6">
        {Object.entries(campaigns).map(([key, company]) => (
          <Card key={key} className="gradient-background p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-slate-100">{company.name}</h3>
              <span className="text-green-400 font-medium">Total Spend: {company.spend}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium text-neutral-300 mb-4">Target Segments</h4>
                <div className="space-y-3">
                  {company.segments.map((segment) => (
                    <div key={segment.name} className="flex justify-between text-sm">
                      <span className="text-slate-300">{segment.name}</span>
                      <span className="text-green-400">{segment.spend}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-neutral-300 mb-4">Key Messages</h4>
                <ul className="space-y-2">
                  {company.messages.map((message, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {message}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}