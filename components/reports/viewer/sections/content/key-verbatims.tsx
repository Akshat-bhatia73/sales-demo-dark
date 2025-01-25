"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const verbatims = [
  {
    category: "Security & Compliance",
    quotes: [
      {
        text: "The API security features are robust, but SSO implementation took our team longer than expected. Documentation could be clearer on enterprise deployment.",
        source: "Enterprise Architect, Financial Services (1000+ employees)",
        impact: "Critical SSO documentation gap identified"
      },
      {
        text: "While the content generation is excellent, we need more granular role-based access controls for our compliance requirements. Currently using workarounds.",
        source: "Security Director, Healthcare (5000+ employees)",
        impact: "RBAC limitations affecting healthcare adoption"
      }
    ]
  },
  {
    category: "API & Integration",
    quotes: [
      {
        text: "API response times are impressive, but rate limiting documentation needs work. Our dev team had to contact support multiple times.",
        source: "Technical Lead, Technology (2000+ employees)",
        impact: "API documentation enhancement needed"
      }
    ]
  }
];

export function KeyVerbatims() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Key Verbatims Analysis</h2>
      
      <div className="space-y-6">
        {verbatims.map((category) => (
          <Card key={category.category} className="gradient-background p-6">
            <h3 className="text-lg font-medium text-slate-100 mb-4">{category.category}</h3>
            <div className="space-y-6">
              {category.quotes.map((quote, i) => (
                <div key={i} className="space-y-3">
                  <blockquote className="text-slate-300 italic">
                    "{quote.text}"
                  </blockquote>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-300">{quote.source}</span>
                    <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                      {quote.impact}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}