"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AgentChat } from "./chat/agent-chat";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  agentType: 'strategic' | 'deal' | 'market';
  title: string;
}

export function AgentModal({ isOpen, onClose, agentType, title }: AgentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] h-[600px] p-0 gradient-background">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-neutral-800">
            <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 rounded-full hover:bg-neutral-800 hover:border-neutral-700/50"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="flex-1 overflow-hidden">
            <AgentChat type={agentType} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}