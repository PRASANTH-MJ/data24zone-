import { cn } from "@/lib/utils";

export function GradientBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="animate-blob absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl dark:bg-primary/20" />
      <div
        className="animate-blob absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-violet/25 blur-3xl dark:bg-violet/20"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan/25 blur-3xl dark:bg-cyan/15"
        style={{ animationDelay: "-10s" }}
      />
    </div>
  );
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "grid-pattern pointer-events-none absolute inset-0 -z-20 text-slate-400 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)] dark:text-slate-600",
        className,
      )}
    />
  );
}
