import dynamic from "next/dynamic";
import { SkillForm } from "./components/skill-form";
import data from "./skills.json";
import { LoadingSpinner } from "@workspace/ui/components";

// Lazy load SkillsTable
const SkillsTable = dynamic(
  () => import("./components/skills-table").then((mod) => mod.SkillsTable),
  {
    loading: () => <LoadingSpinner />,
  }
);

export default async function Page() {
  return (
    <>
      <SkillForm />
      <div className="flex flex-1 p-4">
        <SkillsTable
          data={data.map((item, id: number) => ({
            ...item,
            viewId: id,
            translations: item.translations
              .flat()
              .map((t, index) => ({ ...t, viewId: index })),
          }))}
        />
      </div>
    </>
  );
}
