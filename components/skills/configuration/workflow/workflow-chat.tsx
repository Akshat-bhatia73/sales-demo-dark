"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface WorkflowChatProps {
  skillId: string;
}

export function WorkflowChat({ skillId }: WorkflowChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm here to help you configure this skill. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I understand you want to configure this skill. Let me help you with that..."
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <Card className="h-80 gradient-backgroundflex flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.role === "assistant" ? "text-slate-100" : "text-green-400"
              }`}
            >
              {message.role === "assistant" && (
                <Bot className="w-5 h-5 mt-1 text-green-400" />
              )}
              <div className="flex-1">
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-neutral-800">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about configuration..."
            className="flex-1 bg-neutral-800/50 border-neutral-800"
          />
          <Button type="submit" size="icon" className="bg-green-500 hover:bg-blue-600">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
}