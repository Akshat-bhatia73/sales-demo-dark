"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Save } from "lucide-react";
import { TestResult } from "@/types/testbox";
import { motion, AnimatePresence } from "framer-motion";

interface OutputPanelProps {
  results: TestResult[];
}

export function OutputPanel({ results }: OutputPanelProps) {
  return (
    <div className="w-1/3 p-4 space-y-4 h-[75vh] overflow-y-scroll">
      <h3 className="font-medium">Results</h3>

      <AnimatePresence>
        {results.map((result) => (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="bg-neutral-800/50 border-neutral-800 p-4 space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                  {result.confidence}% Confidence
                </Badge>
                <span className="text-sm text-neutral-300">{result.executionTime}</span>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-neutral-300">Input</div>
                <div className="text-sm">{result.input}</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-neutral-300">Output</div>
                <div className="text-sm">{result.output}</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-neutral-300 hover:text-green-400">
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-neutral-300 hover:text-red-400">
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-neutral-300">
                  <Save className="w-4 h-4 mr-2" />
                  Save as Template
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}