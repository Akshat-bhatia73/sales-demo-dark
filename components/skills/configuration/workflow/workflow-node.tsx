"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDrag } from "./hooks/use-drag";
import { WorkflowNode as WorkflowNodeType } from "@/types/skills";
import { Position } from "@/lib/utils/workflow";

interface WorkflowNodeProps {
  node: WorkflowNodeType;
  isSelected: boolean;
  onSelect: () => void;
  onPositionChange: (id: string, position: Position) => void;
}

export function WorkflowNode({ node, isSelected, onSelect, onPositionChange }: WorkflowNodeProps) {
  const { isDragging, offset, handleDragStart } = useDrag({
    onDragEnd: (position) => {
      onPositionChange(node.id, {
        x: node.position.x + position.x,
        y: node.position.y + position.y
      });
    }
  });

  return (
    <motion.div
      className="absolute"
      style={{ 
        left: node.position.x, 
        top: node.position.y,
        width: 250,
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: isSelected ? 10 : 1,
        touchAction: 'none',
        userSelect: 'none'
      }}
      animate={{ 
        x: isDragging ? offset.x : 0,
        y: isDragging ? offset.y : 0,
        scale: isSelected ? 1.02 : 1,
        transition: { type: "spring", stiffness: 300, damping: 30 }
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onMouseDown={(e) => handleDragStart(e, node.position)}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{ left: 0, right: 1000, top: 0, bottom: 600 }}
    >
      <Card 
        className={`p-4 transition-colors ${
          isSelected 
            ? 'bg-green-500/20 border-green-500/50 shadow-lg' 
            : 'modal-gradient border-neutral-800 hover:border-neutral-700'
        }`}
      >
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-medium mb-1">{node.data.name}</h3>
            <p className="text-sm text-neutral-300">{node.data.description}</p>
          </div>
          <Badge variant="outline" className="gradient-background capitalize border-green-500">
            {node.type}
          </Badge>
        </div>
        
        {node.data.model && (
          <div className="text-xs text-slate-500 mt-2">
            Model: {node.data.model}
          </div>
        )}
      </Card>
    </motion.div>
  );
}