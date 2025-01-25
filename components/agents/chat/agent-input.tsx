"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Loader2 } from "lucide-react";

interface AgentInputProps {
  onSend: (message: string) => void;
  isThinking: boolean;
  placeholder?: string;
}

export function AgentInput({ onSend, isThinking, placeholder }: AgentInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isThinking) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-800">
      <div className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder || "Type a message..."}
          disabled={isThinking}
          className="bg-slate-800/50"
        />
        <Button 
          type="submit" 
          disabled={!message.trim() || isThinking}
          className="bg-green-500 hover:bg-blue-600"
        >
          {isThinking ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
        </Button>
      </div>
    </form>
  );
}