"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Plus, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Select } from "@/components/ui/select";

interface DataSourcesStepProps {
  formData: any;
  updateFormData: (key: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

interface Tool {
  id: string;
  name: string;
  badge?: string;
  features: string[];
  status?: "connected" | "connecting" | "error";
  error?: string;
}

const tools = {
  analytics: [
    {
      id: "ga4",
      name: "Google Analytics 4",
      badge: "Most Common",
      features: ["Traffic Analysis", "Campaign Attribution", "User Behavior"]
    },
    {
      id: "amplitude",
      name: "Amplitude",
      badge: "Product Analytics",
      features: ["User Journeys", "Feature Usage", "Retention"]
    },
    {
      id: "adobe",
      name: "Adobe Analytics",
      badge: "Enterprise",
      features: ["Full-Stack Analytics", "Attribution"]
    }
  ],
  automation: [
    {
      id: "hubspot",
      name: "HubSpot",
      badge: "Recommended",
      features: ["Email Campaigns", "Automation", "Forms"]
    },
    {
      id: "marketo",
      name: "Marketo",
      badge: "Enterprise",
      features: ["B2B Marketing", "Lead Scoring"]
    },
    {
      id: "mailchimp",
      name: "Mailchimp",
      features: ["Email Marketing", "Landing Pages"]
    }
  ],
  crm: [
    {
      id: "salesforce",
      name: "Salesforce",
      badge: "Enterprise Standard",
      features: ["Pipeline Data", "Deal Tracking"]
    },
    {
      id: "hubspot-crm",
      name: "HubSpot CRM",
      features: ["Sales Pipeline", "Contact Management"]
    }
  ]
};

const customOptions = [
  { value: "api", label: "API Integration" },
  { value: "csv", label: "CSV Upload" },
  { value: "database", label: "Custom Database" },
  { value: "other", label: "Other Analytics Platform" }
];

export function DataSourcesStep({ formData, updateFormData, onNext, onBack }: DataSourcesStepProps) {
  const [selectedSources, setSelectedSources] = useState<string[]>(formData.dataSources || []);
  const [connectionStates, setConnectionStates] = useState<Record<string, Tool["status"]>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleConnect = async (toolId: string) => {
    if (connectionStates[toolId] === "connected") {
      setSelectedSources(prev => prev.filter(id => id !== toolId));
      setConnectionStates(prev => ({ ...prev, [toolId]: undefined }));
      return;
    }

    setConnectionStates(prev => ({ ...prev, [toolId]: "connecting" }));
    
    // Simulate connection
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const success = Math.random() > 0.2; // 80% success rate
    if (success) {
      setSelectedSources(prev => [...prev, toolId]);
      setConnectionStates(prev => ({ ...prev, [toolId]: "connected" }));
      setErrors(prev => ({ ...prev, [toolId]: undefined }));
    } else {
      setConnectionStates(prev => ({ ...prev, [toolId]: "error" }));
      setErrors(prev => ({ ...prev, [toolId]: "Unable to connect: Authentication failed" }));
    }
  };

  const handleContinue = () => {
    updateFormData("dataSources", selectedSources);
    onNext();
  };

  const renderToolCard = (tool: Tool) => (
    <Card className={`p-4 transition-all ${
      connectionStates[tool.id] === "connected" 
        ? "bg-green-500/10 border-green-500/50"
        : connectionStates[tool.id] === "error"
        ? "bg-red-500/10 border-red-500/50"
        : "bg-neutral-800/50 border-neutral-800 hover:border-neutral-700"
    }`}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{tool.name}</h3>
            {tool.badge && (
              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                {tool.badge}
              </Badge>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tool.features.map((feature) => (
              <Badge
                key={feature}
                variant="outline"
                className=""
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>
        <Button
          variant={connectionStates[tool.id] === "connected" ? "outline" : "default"}
          className={connectionStates[tool.id] === "connected" ? "border-green-500 text-green-400 bg-green-500/10" : "bg-neutral-800 hover:bg-neutral-800/50 text-neutral-200"}
          onClick={() => handleConnect(tool.id)}
          disabled={connectionStates[tool.id] === "connecting"}
        >
          {connectionStates[tool.id] === "connected" && <CheckCircle className="w-4 h-4 mr-2" />}
          {connectionStates[tool.id] === "connecting" && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          {connectionStates[tool.id] === "error" && <AlertTriangle className="w-4 h-4 mr-2" />}
          {connectionStates[tool.id] === "connected" ? "Connected" : 
           connectionStates[tool.id] === "connecting" ? "Connecting..." :
           connectionStates[tool.id] === "error" ? "Retry" : "Connect"}
        </Button>
      </div>
      {errors[tool.id] && (
        <div className="text-sm text-red-400 mt-2 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          {errors[tool.id]}
        </div>
      )}
    </Card>
  );

  const renderSection = (title: string, description: string, sectionTools: Tool[]) => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-sm text-neutral-300">{description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {sectionTools.map((tool) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {renderToolCard(tool)}
          </motion.div>
        ))}
        <Card className="p-4 bg-neutral-800/50 border-neutral-800 border-dashed">
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <Select
              placeholder="Connect Custom Tool"
              options={customOptions}
              className="w-full"
            />
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 pb-8">
      <div>
        <h2 className="text-xl font-semibold">Connect Your Marketing Tools</h2>
        <p className="text-neutral-300 mt-2">Select the data sources your agent will analyze</p>
      </div>

      {renderSection(
        "Web Analytics & Tracking",
        "Connect your web analytics and visitor tracking tools",
        tools.analytics
      )}

      {renderSection(
        "Email & Campaign Tools",
        "Connect your email and automation platforms",
        tools.automation
      )}

      {renderSection(
        "Sales & Pipeline Data",
        "Connect your CRM and deal tracking tools",
        tools.crm
      )}

      <div className="flex justify-between sticky bottom-0 bg-neutral-900 py-4">
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
          disabled={selectedSources.length === 0}
          className="bg-green-500 hover:bg-green-600"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}