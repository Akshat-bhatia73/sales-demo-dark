"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const accounts = [
  {
    name: "Memorial Healthcare",
    revenue: "$2.8B",
    stage: "Evaluation",
    decisionMakers: ["CISO", "CTO", "VP Infrastructure"],
    engagement: "High",
    lastActivity: "2h ago"
  },
  {
    name: "Northwest Medical",
    revenue: "$1.5B",
    stage: "Negotiation",
    decisionMakers: ["CISO", "Director Security"],
    engagement: "Medium",
    lastActivity: "1d ago"
  },
  {
    name: "Pacific Health Systems",
    revenue: "$3.2B",
    stage: "Technical Review",
    decisionMakers: ["CTO", "VP Technology"],
    engagement: "High",
    lastActivity: "4h ago"
  }
];

export function AccountsTable() {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-800/30 hover:border-neutral-700 transition-all">
      <Table>
        <TableHeader>
          <TableRow className="border-neutral-800 text-neutral-300">
            <TableHead>Account</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead>Decision Makers</TableHead>
            <TableHead>Engagement</TableHead>
            <TableHead>Last Activity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.name} className="border-neutral-800">
              <TableCell className="font-medium">{account.name}</TableCell>
              <TableCell>{account.revenue}</TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-green-400/10 text-green-400 border-green-500/30">
                  {account.stage}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-1">
                  {account.decisionMakers.map((role) => (
                    <Badge key={role} variant="secondary" className="bg-neutral-800 py-1 px-2">
                      {role}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <Badge 
                  variant="outline"
                  className={account.engagement === "High" 
                    ? "bg-green-500/10 text-green-400 border-green-500/30"
                    : "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
                  }
                >
                  {account.engagement}
                </Badge>
              </TableCell>
              <TableCell className="text-neutral-200">{account.lastActivity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}