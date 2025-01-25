"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AnalysisContent } from "./analysis-content";
import { AnalysisChat } from "./analysis-chat";
import { Download, Share2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysisType: "healthcare" | "nurture" | "content" | "developer";
}

export function AnalysisModal({
  isOpen,
  onClose,
  analysisType,
}: AnalysisModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] w-[1200px] max-h-[90vh] p-0 modal-gradient">
        <DialogTitle className="sr-only border-b border-neutral-800">
          Recommendation: Amplify Developer Experience Content
        </DialogTitle>

        <div className="flex flex-col h-full max-h-[90vh]">
          <div className="flex items-center justify-between h-16 px-6 border-b border-neutral-700 bg-transparent shadow-sm">
            <h1
              className="text-xl font-semibold text-white"
              style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)" }}
            >
              Recommendation: Amplify Developer Experience Content
            </h1>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent hover:bg-neutral-800 transition-colors"
              >
                <Download className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent hover:bg-neutral-800 transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent hover:bg-neutral-800 transition-colors"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-1 min-h-0">
            <div className="flex-1 overflow-y-auto">
              <div className="">
                <AnalysisContent type={analysisType} />
              </div>
            </div>

            <div className="w-[350px] border-l border-neutral-800 flex flex-col min-h-0">
              <AnalysisChat type={analysisType} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
