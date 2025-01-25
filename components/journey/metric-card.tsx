"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  isPositive?: boolean;
  detail?: string;
  icon: React.ElementType;
}

export function MetricCard({ title, value, trend, isPositive, detail, icon: Icon }: MetricCardProps) {
  return (
    <Card className="gradient-background p-4 border-neutral-800 hover:border-neutral-700 transition-all duration-150">
      <div className="flex items-start justify-between mb-2">
        <span className="text-sm font-medium text-neutral-200">{title}</span>
        <Icon className="w-5 h-5 text-neutral-200" />
      </div>
      <div className="text-2xl font-semibold mb-1">{value}</div>
      {trend && (
        <div className={cn(
          "text-sm",
          isPositive ? "text-green-400" : "text-red-400"
        )}>
          {trend}
        </div>
      )}
      {detail && (
        <div className="text-sm text-neutral-200">{detail}</div>
      )}
    </Card>
  );
}