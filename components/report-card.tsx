"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LineChart, BarChart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ReportItem {
  title: string;
  time: string;
  icon: any;
  details?: string;
  path?: string;
}

interface ReportCardProps {
  category: string;
  items: ReportItem[];
}

export function ReportCard({ category, items }: ReportCardProps) {
  const router = useRouter();
  const [selectedReport, setSelectedReport] = useState<ReportItem | null>(null);

  const handleDiveDeeper = (item: ReportItem) => {
    if (item.path) {
      router.push(item.path);
    } else {
      setSelectedReport(item);
    }
  };

  return (
    <Card className="gradient-background backdrop-blur-xl hover:border-neutral-700 transition-all duration-300">
      <CardHeader className="border-b border-neutral-800 py-4">
        <CardTitle className="text-lg font-medium text-slate-100">
          {category}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {items.map((item, j) => (
          <div
            key={j}
            className="group flex items-center p-3 rounded-lg hover:bg-neutral-800 cursor-pointer transition-all"
          >
            <item.icon className="w-5 h-5 mr-3 text-green-400" />
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-200">
                {item.title}
              </div>
              <div className="text-xs text-neutral-200">{item.time}</div>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="outline"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleDiveDeeper(item)}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <span className="">Dive Deeper</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
