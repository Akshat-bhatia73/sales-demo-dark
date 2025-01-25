"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReportList } from "./report-list";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function ReportsPanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed right-0 top-0 h-screen z-10">
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className={`absolute -left-8 top-6 bg-slate-900 border-l border-t border-b border-neutral-800 rounded-l-lg z-20 transition-all ${
          isExpanded ? 'h-8 w-8' : 'h-24 w-8'
        }`}
      >
        {isExpanded ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="text-xs font-medium rotate-90 mt-2">Reports</span>
          </div>
        )}
      </Button>

      {/* Panel Content */}
      <motion.div
        initial={false}
        animate={{
          width: isExpanded ? "320px" : "0px",
          opacity: isExpanded ? 1 : 0
        }}
        className="h-full bg-slate-900/95 border-l border-neutral-800 overflow-hidden shadow-2xl"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-400" />
              <h2 className="text-lg font-semibold">Reports</h2>
            </div>
          </div>

          {/* Report List */}
          <ScrollArea className="flex-1">
            <div className="p-4">
              <ReportList />
            </div>
          </ScrollArea>
        </div>
      </motion.div>
    </div>
  );
}