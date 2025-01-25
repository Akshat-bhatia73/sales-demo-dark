import { SkillTestingEnvironment } from "@/components/skills/testing/skill-testing-environment";
import { getSkillIds } from "@/lib/utlis/skills";

export function generateStaticParams() {
  return getSkillIds();
}

export default function SkillTestPage({ params }: { params: { id: string }}) {
  return (
    <div className="p-6 max-w-[1400px] min-w-[1190px]">
      <SkillTestingEnvironment skillId={params.id} />
    </div>
  );
}