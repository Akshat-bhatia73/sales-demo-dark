"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Skill } from "@/types/skills";
import { useState } from "react";

interface AdvancedSettingsProps {
  skill: Skill;
  onConfigChange: (config: Record<string, any>) => void;
}

export function AdvancedSettings({ skill, onConfigChange }: AdvancedSettingsProps) {
  const [config, setConfig] = useState(skill.configuration);
  const [newRule, setNewRule] = useState("");

  const handleAddRule = () => {
    if (!newRule.trim()) return;
    const rules = [...(config.rules || []), newRule];
    const newConfig = { ...config, rules };
    setConfig(newConfig);
    onConfigChange(newConfig);
    setNewRule("");
  };

  const handleRemoveRule = (index: number) => {
    const rules = config.rules.filter((_: any, i: number) => i !== index);
    const newConfig = { ...config, rules };
    setConfig(newConfig);
    onConfigChange(newConfig);
  };

  return (
    <Card className="bg-neutral-800/50 border-neutral-800 p-6 space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-neutral-300">Custom Rules</label>
          <div className="flex gap-2">
            <Input
              value={newRule}
              onChange={(e) => setNewRule(e.target.value)}
              placeholder="if signal_strength > 0.8 then priority = high"
              className="bg-slate-900/50 border-neutral-800 flex-1"
            />
            <Button
              onClick={handleAddRule}
              disabled={!newRule.trim()}
              className="bg-green-500 hover:bg-blue-600"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          {config.rules?.map((rule: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex-1 p-2 bg-slate-900/50 rounded-lg text-sm">{rule}</div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveRule(index)}
                className="text-neutral-300 hover:text-red-400"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}