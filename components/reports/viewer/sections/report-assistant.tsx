"use client";

import { useState } from "react";
import { Report } from "@/types/reports";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Send, ArrowRight } from "lucide-react";

interface ReportAssistantProps {
  report: Report;
}

export function ReportAssistant({ report }: ReportAssistantProps) {
  const [messages, setMessages] = useState<Array<{ id: string; role: 'user' | 'assistant'; content: string }>>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `I can help you analyze this ${report.type} report. What would you like to know?`
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: `user-${Date.now()}`,
      role: 'user' as const,
      content: input
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const responseMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant' as const,
        content: `Based on the ${report.type} analysis, I can see several interesting patterns...`
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 1000);
  };

  return (
    <div className="h-full flex flex-col modal-gradient">
      <div className="p-4 border-b border-neutral-800/50">
        <div className="flex items-center gap-2 text-slate-100">
          <Bot className="w-5 h-5 text-neutral-300" />
          <h2 className="font-medium">Report Assistant</h2>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 rounded-lg text-sm ${
                msg.role === 'assistant' 
                  ? 'bg-neutral-800/50 text-slate-100 border border-neutral-800' 
                  : 'bg-neutral-700/50 text-slate-100 border border-neutral-600'
              }`}
            >
              {msg.content}
            </div>
          ))}

          {messages.length === 1 && (
            <div className="space-y-2 mt-4">
              <p className="text-sm text-neutral-300">Suggested questions:</p>
              {[
                "What are the key findings?",
                "Show sentiment analysis",
                "Compare with benchmarks",
                "Identify trends"
              ].map((question) => (
                <button
                  key={question}
                  className="w-full text-left p-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:border-neutral-700/50 rounded-lg transition-colors flex items-center gap-2"
                  onClick={() => {
                    const newMessage = {
                      id: `user-${Date.now()}`,
                      role: 'user' as const,
                      content: question
                    };
                    setMessages(prev => [...prev, newMessage]);
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                  {question}
                </button>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-800/50">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about this report..."
            className="bg-neutral-800/50 text-slate-100 placeholder:text-neutral-300 border-neutral-800/50"
          />
          <Button type="submit" size="icon" className="bg-green-700 hover:bg-green-600">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}