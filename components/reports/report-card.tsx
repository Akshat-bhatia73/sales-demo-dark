"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ReportCardProps {
  report: {
    id: string;
    title: string;
    type: string;
    date: string;
  };
}

export function ReportCard({ report }: ReportCardProps) {
  const router = useRouter();

  return (
    <Card 
      className="bg-neutral-800/50 border-neutral-800/50 p-3 w-1/2 hover:bg-neutral-800 hover:border-neutral-700 transition-all cursor-pointer"
      onClick={() => router.push(`/reports/${report.id}`)}
    >
      <div className="flex items-center justify-between mb-2">
        <Badge 
          variant="outline" 
          className={`capitalize
            ${report.type === 'market' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
              report.type === 'competitive' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
              'bg-purple-500/10 text-purple-400 border-purple-500/30'}
          `}
        >
          {report.type}
        </Badge>
        <span className="text-xs text-neutral-300">{report.date}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium truncate mr-2">{report.title}</h3>
        <ArrowRight className="w-4 h-4 text-neutral-300" />
      </div>
    </Card>
  );
}