"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Bot, Search, Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Command } from "@/components/ui/command";
import { Button } from "@/components/ui/button";

interface Message {
  type: "user" | "ai";
  content: string;
}

export function TrendAnalysis() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "ai",
      content:
        "I've analyzed the 6-month technical engagement trend. Would you like insights about specific patterns or performance drivers?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", content: text },
      {
        type: "ai",
        content:
          "Based on the trend analysis, technical content engagement has increased by 185% over the past 6 months, primarily driven by API documentation and authentication guides.",
      },
    ]);
    setInputValue("");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="text-sm font-medium">Content Performance</div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-200">API Auth Guide</span>
              <span className="text-green-400">4.2x</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-200">Data Integration</span>
              <span className="text-green-400">3.8x</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-200">SDK Quick Start</span>
              <span className="text-green-400">3.5x</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Distribution Channels</div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-200">Developer Blog</span>
              <span>45%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-200">Documentation</span>
              <span>35%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-200">Email Sequences</span>
              <span>20%</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Action Plan</div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-200">API Docs</span>
              <span>+$15k</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-200">Dev Newsletter</span>
              <span>+$10k</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-200">Tech Content</span>
              <span>+$15k</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="flex items-center gap-2 text-sm text-neutral-200 hover:text-neutral-300 transition-colors"
        >
          <MessageSquare className="w-4 h-4 mt-0.5" />
          {isChatOpen ? "Hide Chat" : "Discuss Analysis"}
        </Button>
      </div>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="gradient-background rounded-lg overflow-hidden"
          >
            <ScrollArea className="h-[300px] px-4 py-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg text-sm mb-2 ${
                    msg.type === "user"
                      ? "bg-neutral-800"
                      : "bg-green-400/10 border border-green-500/20"
                  }`}
                >
                  {msg.type === "ai" && (
                    <div className="flex items-center gap-2 mb-2 text-green-400">
                      <Bot className="w-5 h-5" />
                      <span className="text-xs">AI Analysis</span>
                    </div>
                  )}
                  <div className="break-words">{msg.content}</div>
                </motion.div>
              ))}
            </ScrollArea>

            <div className="p-4 border-t border-neutral-700">
              <Command className="rounded-lg border border-neutral-700">
                <div className="flex items-center px-3 py-2">
                  <Search className="w-4 h-4 mr-2 text-neutral-200" />
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage(inputValue);
                      }
                    }}
                    placeholder="Ask about the trend analysis..."
                    className="flex-1 bg-transparent outline-none text-sm"
                  />
                  <Sparkles className="w-4 h-4 text-green-400" />
                </div>
              </Command>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
