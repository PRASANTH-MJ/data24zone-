"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { SEARCH_INDEX } from "@/data/search-index";

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return SEARCH_INDEX.slice(0, 8);
    const q = query.toLowerCase();
    return SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            className="glass relative w-full max-w-xl overflow-hidden rounded-2xl bg-white/95 dark:bg-slate-900/95"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3 dark:border-white/10">
              <Search className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, services, courses..."
                className="w-full bg-transparent text-sm text-dark outline-none placeholder:text-slate-400 dark:text-white"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-dark dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-slate-400">
                  No results for &ldquo;{query}&rdquo;
                </li>
              )}
              {results.map((item) => (
                <li key={item.href + item.title}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm transition-colors hover:bg-primary/5 dark:hover:bg-white/5"
                  >
                    <span>
                      <span className="block font-medium text-dark dark:text-white">
                        {item.title}
                      </span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400">
                        {item.description}
                      </span>
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-white/10 dark:text-slate-400">
                      {item.group}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
