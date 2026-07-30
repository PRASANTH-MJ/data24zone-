export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-white dark:bg-dark">
      <div className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-2xl bg-gradient-brand opacity-40" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white">
          <span className="text-lg font-bold">D24</span>
        </span>
      </div>
      <div className="h-1 w-40 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
        <div className="h-full w-1/3 animate-[marquee_1.2s_ease-in-out_infinite] rounded-full bg-gradient-brand" />
      </div>
    </div>
  );
}
