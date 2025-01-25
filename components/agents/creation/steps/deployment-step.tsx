"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Clock, Bell } from "lucide-react";

interface DeploymentStepProps {
  formData: any;
  onBack: () => void;
}

export function DeploymentStep({ formData, onBack }: DeploymentStepProps) {
  const router = useRouter();
  const [isDeploying, setIsDeploying] = useState(false);
  const [config, setConfig] = useState({
    alerts: {
      highImpact: true,
      anomalies: true,
      patterns: true,
      email: false,
      slack: false,
      emailAddress: "",
      slackChannel: ""
    }
  });

  const handleDeploy = async () => {
    setIsDeploying(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    router.push("/agents");
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Launch Your AI Analyst</h2>
        <p className="text-neutral-300">Configure monitoring schedule and alerts</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-neutral-800/50 border-neutral-800 p-6">
          <h3 className="font-medium mb-4">Alert Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">High-Impact Opportunities</div>
                <div className="text-sm text-neutral-300">Get alerts for significant findings</div>
              </div>
              <Switch
                checked={config.alerts.highImpact}
                onCheckedChange={(checked) => 
                  setConfig(prev => ({
                    ...prev,
                    alerts: { ...prev.alerts, highImpact: checked }
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Performance Anomalies</div>
                <div className="text-sm text-neutral-300">Get alerts for unusual patterns</div>
              </div>
              <Switch
                checked={config.alerts.anomalies}
                onCheckedChange={(checked) => 
                  setConfig(prev => ({
                    ...prev,
                    alerts: { ...prev.alerts, anomalies: checked }
                  }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Cross-Channel Patterns</div>
                <div className="text-sm text-neutral-300">Get alerts for channel interactions</div>
              </div>
              <Switch
                checked={config.alerts.patterns}
                onCheckedChange={(checked) => 
                  setConfig(prev => ({
                    ...prev,
                    alerts: { ...prev.alerts, patterns: checked }
                  }))
                }
              />
            </div>
          </div>
        </Card>

        <Card className="bg-neutral-800/50 border-neutral-800 p-6">
          <h3 className="font-medium mb-4">Notification Options</h3>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Email Alerts</div>
                  <div className="text-sm text-neutral-300">Get critical insights in your inbox</div>
                </div>
                <Switch
                  checked={config.alerts.email}
                  onCheckedChange={(checked) => 
                    setConfig(prev => ({
                      ...prev,
                      alerts: { ...prev.alerts, email: checked }
                    }))
                  }
                />
              </div>

              {config.alerts.email && (
                <Input
                  value={config.alerts.emailAddress}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    alerts: { ...prev.alerts, emailAddress: e.target.value }
                  }))}
                  placeholder="Enter email address"
                  className="bg-slate-900/50 border-neutral-800"
                />
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Slack Updates</div>
                  <div className="text-sm text-neutral-300">Real-time updates in your marketing channel</div>
                </div>
                <Switch
                  checked={config.alerts.slack}
                  onCheckedChange={(checked) => 
                    setConfig(prev => ({
                      ...prev,
                      alerts: { ...prev.alerts, slack: checked }
                    }))
                  }
                />
              </div>

              {config.alerts.slack && (
                <Input
                  value={config.alerts.slackChannel}
                  onChange={(e) => setConfig(prev => ({
                    ...prev,
                    alerts: { ...prev.alerts, slackChannel: e.target.value }
                  }))}
                  placeholder="Enter Slack channel (e.g., #marketing)"
                  className="bg-slate-900/50 border-neutral-800"
                />
              )}
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
          onClick={handleDeploy}
          disabled={isDeploying}
          className="bg-green-500 hover:bg-green-600"
        >
          <Rocket className="w-4 h-4 mr-2" />
          {isDeploying ? "Launching..." : "Launch AI Analyst"}
        </Button>
      </div>
    </div>
  );
}