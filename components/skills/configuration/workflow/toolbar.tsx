"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, Download } from "lucide-react";

interface ToolbarProps {
  onAddNode: () => void;
}

export function Toolbar({ onAddNode }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between mb-4 p-2 bg-neutral-800/50 rounded-lg border border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-300" />
          <Input
            placeholder="Search nodes..."
            className="pl-9 bg-neutral-800/50 border-neutral-800"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <Download className="w-4 h-4" />
        </Button>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button onClick={onAddNode}>
            <Plus className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
