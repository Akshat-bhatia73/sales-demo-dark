import { SkillConfigWorkflow } from "@/components/skills/configuration/workflow/skill-config-workflow";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    // ... add more IDs as needed
  ];
}

export default function SkillConfigPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="p-6 max-w-[1400px] min-w-[1190px]">
      <SkillConfigWorkflow skillId={params.id} />
    </div>
  );
}
