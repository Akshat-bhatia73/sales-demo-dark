"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Settings, Clock, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select } from "@/components/ui/select";

interface SkillsStepProps {
  formData: any;
  updateFormData: (key: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const coreSkills = [
  {
    id: "pattern-detection",
    name: "Campaign Pattern Detection",
    description: "Identify successful campaign combinations and sequences",
    tags: ["Cross-channel", "Performance"],
    defaultEnabled: true
  },
  {
    id: "conversion-path",
    name: "Conversion Path Analysis",
    description: "Track and optimize user journeys to conversion",
    tags: ["Web", "Email", "Pipeline"],
    defaultEnabled: true
  },
  {
    id: "engagement-scoring",
    name: "Engagement Scoring",
    description: "Measure and predict content engagement levels",
    tags: ["Content", "Behavior"],
    defaultEnabled: false
  }
];

const deliverables = [
  {
    id: "daily-insights",
    name: "Daily Insights",
    description: "Daily summary of key patterns and opportunities",
    frequency: "Daily",
    priority: "High"
  },
  {
    id: "performance-alerts",
    name: "Performance Alerts",
    description: "Real-time alerts for significant pattern detection",
    frequency: "Real-time",
    priority: "High"
  },
  {
    id: "optimization-reports",
    name: "Optimization Reports",
    description: "Detailed analysis with specific recommendations",
    frequency: "Weekly",
    priority: "Medium"
  }
];

export function SkillsStep({ formData, updateFormData, onNext, onBack }: SkillsStepProps) {
  const [enabledSkills, setEnabledSkills] = useState<string[]>(
    formData.skills?.map((s: any) => s.id) || 
    coreSkills.filter(s => s.defaultEnabled).map(s => s.id)
  );
  const [settings, setSettings] = useState({
    confidenceThreshold: 85,
    signalStrength: 50,
    impactThreshold: 5,
    autoTuning: true
  });
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState({
    skills: true,
    settings: true,
    deliverables: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleContinue = () => {
    updateFormData("skills", {
      enabled: enabledSkills,
      settings,
      deliverables: selectedDeliverables
    });
    onNext();
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Configure Agent Capabilities</h2>
        <p className="text-neutral-300 mt-2">Set up how your agent analyzes campaign performance</p>
      </div>

      {/* Core Analysis Skills */}
      <div className="space-y-4">
        <Button
          variant="outline"
          onClick={() => toggleSection('skills')}
          className="w-full flex items-center justify-between bg-neutral-800/50 border-neutral-800"
        >
          <span className="font-medium">Core Analysis Skills</span>
          {expandedSections.skills ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>

        <AnimatePresence>
          {expandedSections.skills && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-4 overflow-hidden"
            >
              {coreSkills.map((skill) => (
                <Card key={skill.id} className="p-4 bg-neutral-800/50 border-neutral-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{skill.name}</h3>
                      <p className="text-sm text-neutral-300">{skill.description}</p>
                    </div>
                    <Switch
                      checked={enabledSkills.includes(skill.id)}
                      onCheckedChange={(checked) => {
                        setEnabledSkills(prev => 
                          checked ? [...prev, skill.id] : prev.filter(id => id !== skill.id)
                        );
                      }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Core Settings */}
      <div className="space-y-4">
        <Button
          variant="outline"
          onClick={() => toggleSection('settings')}
          className="w-full flex items-center justify-between bg-neutral-800/50 border-neutral-800"
        >
          <span className="font-medium">Core Settings</span>
          {expandedSections.settings ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>

        <AnimatePresence>
          {expandedSections.settings && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-6 overflow-hidden"
            >
              <Card className="p-6 bg-neutral-800/50 border-neutral-800">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm text-neutral-300">Confidence Threshold</label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[settings.confidenceThreshold]}
                        onValueChange={([value]) => setSettings(prev => ({ ...prev, confidenceThreshold: value }))}
                        min={0}
                        max={100}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm font-medium w-12">{settings.confidenceThreshold}%</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-neutral-300">Signal Strength</label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[settings.signalStrength]}
                        onValueChange={([value]) => setSettings(prev => ({ ...prev, signalStrength: value }))}
                        min={0}
                        max={100}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm font-medium w-12">{settings.signalStrength}%</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-neutral-300">Opportunity Size</label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[settings.impactThreshold]}
                        onValueChange={([value]) => setSettings(prev => ({ ...prev, impactThreshold: value }))}
                        min={0}
                        max={25}
                        step={0.5}
                        className="flex-1"
                      />
                      <span className="text-sm font-medium w-24">${settings.impactThreshold}M</span>
                    </div>
                    <p className="text-xs text-neutral-300">Minimum impact required for recommendations</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium">Auto-tuning</label>
                      <p className="text-sm text-neutral-300">Automatically optimize settings based on results</p>
                    </div>
                    <Switch
                      checked={settings.autoTuning}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, autoTuning: checked }))}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Deliverables */}
      <div className="space-y-4">
        <Button
          variant="outline"
          onClick={() => toggleSection('deliverables')}
          className="w-full flex items-center justify-between bg-neutral-800/50 border-neutral-800"
        >
          <span className="font-medium">Set Agent Deliverables (Optional)</span>
          {expandedSections.deliverables ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>

        <AnimatePresence>
          {expandedSections.deliverables && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-4 overflow-hidden"
            >
              {deliverables.map((deliverable) => (
                <Card key={deliverable.id} className="p-4 bg-neutral-800/50 border-neutral-800">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{deliverable.name}</h3>
                        <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                          {deliverable.frequency}
                        </Badge>
                        <Badge variant="outline">
                          {deliverable.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-neutral-300">{deliverable.description}</p>
                    </div>
                    <Switch
                      checked={selectedDeliverables.includes(deliverable.id)}
                      onCheckedChange={(checked) => {
                        setSelectedDeliverables(prev => 
                          checked ? [...prev, deliverable.id] : prev.filter(id => id !== deliverable.id)
                        );
                      }}
                    />
                  </div>
                </Card>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-neutral-300 hover:text-slate-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={handleContinue}
            className="text-neutral-300"
          >
            Skip & Configure Later
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
    </div>
  );
}