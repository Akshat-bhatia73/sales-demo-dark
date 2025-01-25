"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { stageAnalysis } from "@/lib/data/journey-insights";
import { ArrowRight } from "lucide-react";

export function StageAnalysis() {
  const [activeTab, setActiveTab] = useState("demo");

  return (
    <Card className="gradient-background mt-6">
      <Tabs defaultValue="demo" className="p-6">
        <TabsList className="bg-neutral-800 text-neutral-300">
          <TabsTrigger value="demo">Demo Stage</TabsTrigger>
          <TabsTrigger value="sales">Sales Stage</TabsTrigger>
          <TabsTrigger value="closing">Closing Stage</TabsTrigger>
        </TabsList>

        {Object.entries(stageAnalysis).map(([key, data]) => (
          <TabsContent key={key} value={key} className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">{data.title}</h3>
              <p className="text-2xl font-semibold text-green-400">{data.keyStat}</p>
            </div>

            <div className="space-y-3">
              {data.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-colors cursor-default"
                >
                  <ArrowRight className="w-4 h-4 mr-3 text-green-400" />
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
}