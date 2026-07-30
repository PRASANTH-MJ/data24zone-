import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function getModuleWeekRange(
  duration: string | undefined,
  moduleCount: number,
  index: number,
): string | null {
  if (!duration || moduleCount === 0) return null;
  const totalWeeks = parseInt(duration, 10);
  if (Number.isNaN(totalWeeks)) return null;

  const perModule = totalWeeks / moduleCount;
  const start = Math.round(index * perModule) + 1;
  const end = Math.max(start, Math.round((index + 1) * perModule));

  return start === end ? `Week ${start}` : `Weeks ${start}–${end}`;
}
