"use client";

import { useState, useEffect } from "react";
import { Agent } from "@/types/agents";

const mockAgents: Agent[] = [
  {
    id: "1",
    name: "Campaign Performance Analyzer",
    description: "Analyzes cross-channel campaign performance and surfaces optimization opportunities",
    status: "active",
    accuracy: 94,
    signalsProcessed: "12,450",
    lastActive: "2m ago",
    dataSources: ["Google Analytics", "Marketing Automation", "CRM"],
    type: "market"
  },
  {
    id: "3",
    name: "Content Impact Analyzer",
    description: "Analyzes content performance and engagement patterns",
    status: "paused",
    accuracy: 88,
    signalsProcessed: "15,720",
    lastActive: "1h ago",
    dataSources: ["Web Analytics", "Social Media", "CRM"],
    type: "enterprise"
  }
];

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>(mockAgents);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      try {
        setAgents(prev => prev.map(agent => ({
          ...agent,
          lastActive: updateTimestamp(agent.lastActive)
        })));
      } catch (error) {
        console.error("Error updating agents:", error);
      } finally {
        setLoading(false);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return {
    agents,
    loading,
    toggleAgent: (id: string) => {
      setAgents(prev => prev.map(agent => 
        agent.id === id 
          ? { ...agent, status: agent.status === 'active' ? 'paused' : 'active' }
          : agent
      ));
    }
  };
}

function updateTimestamp(timestamp: string): string {
  try {
    if (timestamp.includes('m ago')) {
      const minutes = parseInt(timestamp);
      return minutes > 1 ? `${minutes + 1}m ago` : '2m ago';
    }
    return timestamp;
  } catch (error) {
    console.error("Error updating timestamp:", error);
    return timestamp;
  }
}