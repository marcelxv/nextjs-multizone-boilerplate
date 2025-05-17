import { LoadingSpinner } from "@workspace/ui/components/custom/loading-spinner";

export default function SkillLoading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoadingSpinner size={40} className="text-blue-500" />
    </div>
  );
}
