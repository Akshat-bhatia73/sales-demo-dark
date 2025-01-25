"use client";

import { Card } from "@/components/ui/card";

const positions = {
  leadership: [
    { area: "Content Quality", points: "+12" },
    { area: "API Capabilities", points: "+8" },
    { area: "Multi-language", points: "+15" },
    { area: "User Interface", points: "+6" }
  ],
  gaps: [
    { area: "Enterprise Security", points: "-8" },
    { area: "Compliance Features", points: "-12" },
    { area: "Role Management", points: "-10" },
    { area: "Audit Capabilities", points: "-15" }
  ]
};

export function CompetitivePosition() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Competitive Positioning Analysis</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <Card className="gradient-background p-6">
          <h3 className="text-lg font-medium text-slate-100 mb-4">Market Leadership Areas</h3>
          <div className="space-y-4">
            {positions.leadership.map((pos) => (
              <div key={pos.area} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{pos.area}</span>
                  <span className="text-green-400">{pos.points} points</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${(parseInt(pos.points) / 15) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="gradient-background p-6">
          <h3 className="text-lg font-medium text-slate-100 mb-4">Gap Analysis</h3>
          <div className="space-y-4">
            {positions.gaps.map((gap) => (
              <div key={gap.area} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{gap.area}</span>
                  <span className="text-red-400">{gap.points} points</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: `${(Math.abs(parseInt(gap.points)) / 15) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}