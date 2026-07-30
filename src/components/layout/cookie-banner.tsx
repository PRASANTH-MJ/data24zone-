"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "d24z-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  function respond(value: "accepted" | "declined") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="glass fixed inset-x-4 bottom-4 z-50 flex flex-col gap-4 rounded-2xl bg-white/95 p-5 shadow-2xl sm:inset-x-auto sm:right-6 sm:max-w-md dark:bg-slate-900/95"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cookie className="h-5 w-5" aria-hidden />
            </span>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              We use cookies to improve your experience and analyze site traffic. Read our{" "}
              <Link href="/privacy-policy" className="font-medium text-primary underline underline-offset-2">
                Privacy Policy
              </Link>{" "}
              to learn more.
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={() => respond("declined")}>
              Decline
            </Button>
            <Button size="sm" onClick={() => respond("accepted")}>
              Accept All
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
