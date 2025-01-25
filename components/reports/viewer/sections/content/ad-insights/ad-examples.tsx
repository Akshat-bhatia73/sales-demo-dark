"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const adExamples = [
  {
    headline: "Enterprise AI Security That Never Sleeps",
    subheadline: "AI Security for the Fortune 500",
    description: "SOC 2 Type II certified. SSO enabled. Enterprise-ready.",
    cta: "See Security Features",
    performance: { ctr: "2.8%", leads: 380 },
    details: {
      visuals: "Security dashboard, compliance badges",
      target: "Security leaders, IT decision makers",
      placement: "LinkedIn, Technical forums"
    }
  },
  {
    headline: "Scale Your Content. Keep Control.",
    subheadline: "Enterprise Content Operations",
    description: "Role-based access. Audit logs. Compliance ready.",
    cta: "Start Enterprise Trial",
    performance: { ctr: "3.2%", leads: 420 },
    details: {
      visuals: "Dashboard interface, workflow diagrams",
      target: "Content operations leaders",
      placement: "LinkedIn, Content marketing sites"
    }
  }
];

export function AdExamples() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Detailed Ad Creative Analysis</h2>
      
      <div className="grid gap-6">
        {adExamples.map((ad, i) => (
          <Card key={i} className="gradient-background p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-slate-100 mb-2">{ad.headline}</h3>
                <div className="space-y-2">
                  <p className="text-green-400 font-medium">{ad.subheadline}</p>
                  <p className="text-slate-300">{ad.description}</p>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                    {ad.cta}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-neutral-300 mb-3">Performance</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-slate-300">CTR</div>
                      <div className="text-lg font-medium text-green-400">{ad.performance.ctr}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-300">Leads</div>
                      <div className="text-lg font-medium text-green-400">{ad.performance.leads}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-neutral-300 mb-3">Ad Details</h4>
                  <div className="space-y-2">
                    {Object.entries(ad.details).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-slate-300">{key}</span>
                        <span className="text-green-400">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}