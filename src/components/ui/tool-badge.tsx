import { getToolMeta } from "@/data/tool-badges";
import { cn } from "@/lib/utils";

export function ToolBadge({ name, className }: { name: string; className?: string }) {
  const { icon: Icon, label, colorClass } = getToolMeta(name);

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 dark:border-white/10 dark:bg-white/5",
        className,
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 flex-none items-center justify-center overflow-hidden rounded-lg",
          colorClass,
        )}
      >
        {Icon ? (
          <Icon className="h-5 w-5" />
        ) : (
          <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">
            {label}
          </span>
        )}
      </span>
      <span className="text-sm font-medium text-dark dark:text-white">{name}</span>
    </div>
  );
}
