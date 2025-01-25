import { SkillConfigWorkflow } from "@/components/skills/configuration/workflow/skill-config-workflow";
import { getSkillIds } from "@/lib/utlis/skills";

export function generateStaticParams() {
  return getSkillIds();
}

export default function SkillConfigPage({ params }: { params: { id: string }}) {
  return (
    <div className="p-6 w-[1190px] max-w-[1400px]">
      <SkillConfigWorkflow skillId={params.id} />
    </div>
  );
}