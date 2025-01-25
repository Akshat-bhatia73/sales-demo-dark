"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { Skill } from "@/types/skills";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const router = useRouter();

  return (
    <Card className="gradient-background hover:border-neutral-700 transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-medium mb-1">{skill.name}</h3>
            <p className="text-sm text-neutral-300">{skill.description}</p>
          </div>
          <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
            {skill.usageCount} uses
          </Badge>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {skill.dataSources.map((source) => (
              <Badge key={source} variant="outline" className="">
                {source}
              </Badge>
            ))}
          </div>
          <div className="text-sm text-neutral-300">
            Created by {skill.team}
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => router.push(`/skills/${skill.id}/configure`)}
          >
            <Settings className="w-4 h-4 mr-2" />
            Configure
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => router.push(`/skills/${skill.id}/test`)}
          >
            <Play className="w-4 h-4 mr-2" />
            Test
          </Button>
        </div>
      </div>
    </Card>
  );
}