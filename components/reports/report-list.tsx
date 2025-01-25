"use client";

import { ReportCard } from "./report-card";
import { useReports } from "@/hooks/use-reports";

export function ReportList() {
  const { reports, loading } = useReports();

  if (loading) {
    return <div className="text-neutral-300">Loading reports...</div>;
  }

  return (
    <div className="space-y-4">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </div>
  );
}