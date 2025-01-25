"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Bot, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { agentTemplates } from "@/lib/data/agent-templates";

interface ObjectiveStepProps {
  formData: any;
  updateFormData: (key: string, value: any) => void;
  onNext: () => void;
}

export function ObjectiveStep({ formData, updateFormData, onNext }: ObjectiveStepProps) {
  const [objective, setObjective] = useState(formData.objective || "");
  const [selectedTemplate, setSelectedTemplate] = useState(formData.template || "");
  const [showTemplates, setShowTemplates] = useState(false);

  const handleContinue = () => {
    updateFormData("objective", objective);
    updateFormData("template", selectedTemplate);
    onNext();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Define Your Agent's Purpose</h2>
        <p className="text-neutral-300">Describe what you want your AI analyst to monitor and optimize</p>
        <Input
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
          placeholder="e.g., Track campaign performance and find conversion opportunities"
          className="bg-neutral-800/50 border-neutral-800"
        />
        <p className="text-sm text-neutral-300">Be specific about channels, metrics, and desired outcomes</p>
      </div>

      <div className="space-y-4">
        <Button
          variant="outline"
          onClick={() => setShowTemplates(!showTemplates)}
          className="w-full flex items-center justify-between bg-neutral-800/50 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"
        >
          <span className="font-medium">Choose a Template (Optional)</span>
          {showTemplates ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </Button>

        <AnimatePresence>
          {showTemplates && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-4">
                {agentTemplates.map((template, i) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card 
                      className={`
                        p-4 cursor-pointer transition-all
                        ${selectedTemplate === template.id 
                          ? 'bg-green-500/10 border-green-500/50' 
                          : 'bg-neutral-800/50 border-neutral-800 hover:border-green-600'}
                      `}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Bot className="w-5 h-5 text-green-400" />
                        <h3 className="font-medium">{template.name}</h3>
                      </div>
                      <p className="text-sm text-neutral-300">{template.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleContinue}
          disabled={!objective}
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}