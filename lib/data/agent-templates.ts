export const agentTemplates = [
  {
    id: "campaign-analyzer",
    name: "Campaign Performance Analyzer",
    description: "Analyzes cross-channel campaign performance and surfaces optimization opportunities",
    dataSources: ["Google Analytics", "Marketing Automation", "CRM"],
    defaultConfig: {
      updateFrequency: "hourly",
      alertThreshold: 0.85
    }
  },
  {
    id: "lead-optimizer",
    name: "Lead Velocity Optimizer",
    description: "Analyzes and optimizes lead flow and conversion patterns",
    dataSources: ["CRM", "Marketing Automation"],
    defaultConfig: {
      updateFrequency: "realtime",
      alertThreshold: 0.8
    }
  },
  {
    id: "content-analyzer",
    name: "Content Impact Analyzer",
    description: "Analyzes content performance and engagement patterns",
    dataSources: ["Web Analytics", "Social Media", "CRM"],
    defaultConfig: {
      updateFrequency: "daily",
      alertThreshold: 0.85
    }
  },
  {
    id: "budget-optimizer",
    name: "Budget Allocation Optimizer",
    description: "Optimizes marketing budget allocation across channels",
    dataSources: ["Ad Platforms", "Analytics", "CRM"],
    defaultConfig: {
      updateFrequency: "daily",
      alertThreshold: 0.9
    }
  }
];