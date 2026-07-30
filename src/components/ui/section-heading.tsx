import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  gradientWord?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const parts = gradientWord ? title.split(gradientWord) : [title];

  return (
    <Reveal
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left mx-0",
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl md:text-5xl dark:text-white">
        {gradientWord ? (
          <>
            {parts[0]}
            <span className="text-gradient">{gradientWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
