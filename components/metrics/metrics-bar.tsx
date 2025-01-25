"use client";

import { MetricCard } from "./metric-card";

const metrics = [
  {
    title: "SQL Conversion",
    value: "32%",
    trend: { value: "+15% this month", isPositive: true },
    description: "Message resonance improving in healthcare"
  },
  {
    title: "Customer Acquisition Cost",
    value: "$2,850",
    trend: { value: "-12% vs baseline", isPositive: true },
    description: "Multi-channel optimization driving efficiency"
  },
  {
    title: "Pipeline Velocity",
    value: "45 days",
    trend: { value: "-4 days vs Q3", isPositive: true },
    description: "Improved nurture timing impact"
  },
  {
    title: "MQLs Generated",
    value: "245",
    trend: { value: "+15% vs target", isPositive: true },
    description: "Exceeding quarterly goal"
  }
];

export function MetricsBar() {
  return (
    <div className="grid grid-cols-4 gap-4 my-6">
      {metrics.map((metric, i) => (
        <MetricCard key={i} {...metric} />
      ))}
    </div>
  );
}