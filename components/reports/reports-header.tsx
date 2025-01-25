"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ReportsHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-300" />
        <Input 
          placeholder="Search reports..." 
          className="pl-9 bg-neutral-800/50 border-neutral-800"
        />
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" >
          Last 30 Days
        </Button>
        <Button variant="outline" size="sm" >
          Market Reports
        </Button>
        <Button variant="outline" size="sm" >
          Competitive
        </Button>
      </div>
    </div>
  );
}