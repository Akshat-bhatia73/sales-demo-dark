"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Users,
  Filter,
  Download,
  ArrowLeftIcon,
} from "lucide-react";
import { AccountsTable } from "@/components/accounts/accounts-table";
import { AccountsFilters } from "@/components/accounts/accounts-filters";
import { AccountsMetrics } from "@/components/accounts/accounts-metrics";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HealthcareAccountsPage() {
  const router = useRouter();

  return (
    <div className="h-screen overflow-auto bg-neutral-900 w-full text-slate-100">
      <div className="max-w-[1400px] p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="ghost"
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 bg-neutral-800/50 text-neutral-300 hover:text-slate-100"
                  >
                    <ArrowLeftIcon className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Back to Mission Control</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div>
              <h1 className="text-3xl font-bold">
                Enterprise Healthcare Accounts
              </h1>
              <p className="text-neutral-200 mt-2">
                Analyzing 500+ accounts in healthcare vertical
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="bg-neutral-800">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="bg-neutral-800">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <AccountsMetrics />
        <AccountsFilters />
        <AccountsTable />
      </div>
    </div>
  );
}
