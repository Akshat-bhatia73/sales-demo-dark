"use client";

import { Card } from "@/components/ui/card";

export function SentimentTrends() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-slate-100">Review Velocity & Sentiment Trends</h2>
      
      <Card className="gradient-background p-6">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-slate-100 mb-4">Overall Metrics</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-neutral-300 mb-1">New Reviews</div>
                  <div className="text-2xl font-semibold text-slate-100">142</div>
                  <div className="text-sm text-green-400">+40% vs prev. quarter</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-300 mb-1">Sentiment Score</div>
                  <div className="text-2xl font-semibold text-slate-100">4.4/5</div>
                  <div className="text-sm text-green-400">↑0.3 from Q1</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-neutral-300 mb-1">Enterprise Satisfaction</div>
                  <div className="text-2xl font-semibold text-slate-100">88%</div>
                  <div className="text-sm text-green-400">↑5% improvement</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-300 mb-1">Security Mentions</div>
                  <div className="text-2xl font-semibold text-slate-100">85%</div>
                  <div className="text-sm text-green-400">QoQ increase</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-100 mb-4">Industry Distribution</h3>
            <div className="grid grid-cols-5 gap-4">
              {[
                { industry: "Technology", percentage: 35 },
                { industry: "Financial Services", percentage: 25 },
                { industry: "Healthcare", percentage: 20 },
                { industry: "Manufacturing", percentage: 15 },
                { industry: "Others", percentage: 5 }
              ].map((item) => (
                <div key={item.industry} className="text-center">
                  <div className="text-2xl font-semibold text-slate-100 mb-1">{item.percentage}%</div>
                  <div className="text-sm text-neutral-300">{item.industry}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}