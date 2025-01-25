import { LineChart, BarChart, PieChart, TrendingUp } from "lucide-react";

export const featuredReports = [
  {
    category: "Journey Maps",
    items: [
      {
        title: "Decision Maker Journey Analysis",
        time: "2h ago",
        icon: LineChart,
        path: "/journey/healthcare",
        details: "Multi-stakeholder engagement patterns in enterprise healthcare segment. Analysis shows 45% improvement in engagement after implementing personalized content strategy."
      },
      {
        title: "Technical Evaluation Journey",
        time: "1d ago",
        icon: TrendingUp,
        details: "Content engagement sequence optimization for technical buyers. Key finding: 3x better conversion rates when technical content is delivered early in the journey."
      },
      {
        title: "Economic Buyer Journey",
        time: "2d ago",
        icon: BarChart,
        details: "ROI validation sequence analysis for financial decision makers. Key finding: 60% faster deal closure when ROI tools are proactively provided."
      }
    ]
  },
  {
    category: "Channel Performance",
    items: [
      {
        title: "Q4 Multi-Channel Attribution",
        time: "1h ago",
        icon: PieChart,
        details: "Complete breakdown of Q4 channel performance across all segments. LinkedIn showing 2.3x better ROI compared to other channels for enterprise deals."
      },
      {
        title: "Technical Content Impact",
        time: "4h ago",
        icon: BarChart,
        details: "Technical content performance analysis. Technical whitepapers driving 3x more qualified leads than product-focused content."
      }
    ]
  }
];