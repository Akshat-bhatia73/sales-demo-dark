"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, ArrowLeft, Bot, Brain } from "lucide-react";
import { motion } from "framer-motion";

interface TrainingStepProps {
  formData: any;
  updateFormData: (key: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export function TrainingStep({ formData, updateFormData, onNext, onBack }: TrainingStepProps) {
  const [config, setConfig] = useState({
    signalConfidence: formData.trainingConfig?.signalConfidence || 85,
    impactThreshold: formData.trainingConfig?.impactThreshold || 50,
    continuousLearning: formData.trainingConfig?.continuousLearning || true,
    customRules: formData.trainingConfig?.customRules || ""
  });

  const handleContinue = () => {
    updateFormData("trainingConfig", config);
    onNext();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Set Analysis Parameters</h2>
        <p className="text-neutral-300">Define how your agent processes marketing signals</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-neutral-800/50 border-neutral-800 p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Pattern Recognition</h3>
              <div className="space-y-2">
                <label className="text-sm text-neutral-300">Signal Confidence</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[config.signalConfidence]}
                    onValueChange={([value]) => setConfig(prev => ({ ...prev, signalConfidence: value }))}
                    min={0}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium w-12">{config.signalConfidence}%</span>
                </div>
                <p className="text-xs text-neutral-300">Minimum confidence required for surfacing insights</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Impact Threshold</h3>
              <div className="space-y-2">
                <label className="text-sm text-neutral-300">Opportunity Size</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[config.impactThreshold]}
                    onValueChange={([value]) => setConfig(prev => ({ ...prev, impactThreshold: value }))}
                    min={0}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium w-12">{config.impactThreshold}%</span>
                </div>
                <p className="text-xs text-neutral-300">Minimum impact required for recommendations</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="font-medium">Continuous Learning</label>
                <p className="text-sm text-neutral-300">Automatically improve based on feedback</p>
              </div>
              <Switch
                checked={config.continuousLearning}
                onCheckedChange={(checked) => setConfig(prev => ({ ...prev, continuousLearning: checked }))}
              />
            </div>
          </div>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-neutral-300 hover:text-slate-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleContinue}
          className="bg-green-500 hover:bg-green-600"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}