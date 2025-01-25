"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Save, Play, Settings } from "lucide-react";

interface HeaderProps {
  skillName: string;
  status: "draft" | "active" | "testing";
  onSave: () => void;
  onTest: () => void;
}

export function Header({ skillName, status, onSave, onTest }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 bg-neutral-800/50 p-4 rounded-lg">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">{skillName}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge
              variant="outline"
              className="bg-green-500/10 text-green-400 border-green-500/30 capitalize"
            >
              {status}
            </Badge>
            <span className="text-sm text-neutral-300">Last edited 2m ago</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <motion.div whileTap={{ scale: 0.98 }}>
          <Button variant="outline" onClick={onTest}>
            <Play className="w-4 h-4 mr-2" />
            Test
          </Button>
        </motion.div>
        <motion.div whileTap={{ scale: 0.98 }}>
          <Button onClick={onSave}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
