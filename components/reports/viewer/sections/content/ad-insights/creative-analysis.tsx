"use client";

import { Card } from "@/components/ui/card";

const themes = [
  { name: "Security Certifications", ctr: "+45%" },
  { name: "ROI Calculators", ctr: "+38%" },
  { name: "Case Studies", ctr: "+32%" },
  { name: "Integration Demos", ctr: "+28%" }
];

const elements = [
  { name: "Security badges prominent", type: "visual" },
  { name: "Enterprise logos featured", type: "visual" },
  { name: "Technical specifications", type: "content" },
  { name: "Performance metrics", type: "content" }
];

export function CreativeAnalysis() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Creative Strategy Analysis</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <Card className="gradient-background p-6">
          <h3 className="text-lg font-medium text-slate-100 mb-4">High-Performing Themes</h3>
          <div className="space-y-4">
            {themes.map((theme) => (
              <div key={theme.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{theme.name}</span>
                  <span className="text-green-400">{theme.ctr} CTR</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: theme.ctr.replace("+", "").replace("%", "") + "%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="gradient-background p-6">
          <h3 className="text-lg font-medium text-slate-100 mb-4">Creative Elements</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-neutral-300 mb-3">Visual Elements</h4>
              <div className="space-y-2">
                {elements.filter(e => e.type === "visual").map((element) => (
                  <div key={element.name} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {element.name}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-neutral-300 mb-3">Content Elements</h4>
              <div className="space-y-2">
                {elements.filter(e => e.type === "content").map((element) => (
                  <div key={element.name} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {element.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}