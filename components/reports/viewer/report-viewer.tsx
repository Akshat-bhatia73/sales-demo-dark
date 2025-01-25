"use client";

import { Report } from "@/types/reports";
import { ReportContent } from "./sections/report-content";
import { ReportAssistant } from "./sections/report-assistant";

interface ReportViewerProps {
  report: Report;
}

export function ReportViewer({ report }: ReportViewerProps) {
  return (
    <div className="h-screen bg-neutral-900">
      <div className="flex h-screen">
        {/* Assistant Panel - Left Side */}
        <div className="w-[400px] border-r border-neutral-800">
          <ReportAssistant report={report} />
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden bg-slate-900">
          <ReportContent report={report} />
        </div>
      </div>
    </div>
  );
}