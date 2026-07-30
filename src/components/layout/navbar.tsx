"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/nav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SearchModal } from "@/components/layout/search-modal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || mobileOpen
            ? "glass border-b border-slate-200/60 py-2 dark:border-white/10"
            : "border-b border-transparent bg-transparent py-4",
        )}
      >
        <nav className="container-page flex items-center justify-between" aria-label="Primary">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <Image
              src="/logo.png"
              alt="Data24Zone"
              width={36}
              height={36}
              priority
              className="h-9 w-9 shrink-0 drop-shadow-lg"
            />
            <span className="text-dark dark:text-white">
              Data<span className="text-gradient">24</span>Zone
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => item.children && setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-primary/5 hover:text-primary dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-primary-light",
                    pathname === item.href && "bg-primary/5 text-primary dark:bg-white/5",
                  )}
                  aria-expanded={item.children ? openMenu === item.label : undefined}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        openMenu === item.label && "rotate-180",
                      )}
                      aria-hidden
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="glass absolute left-1/2 top-full grid w-[560px] -translate-x-1/2 grid-cols-2 gap-1 rounded-2xl bg-white/95 p-3 pt-4 shadow-2xl dark:bg-slate-900/95"
                    >
                      {item.children.map((child) => {
                        const Icon = child.icon;
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-primary/5 dark:hover:bg-white/5"
                          >
                            {Icon && (
                              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15">
                                <Icon className="h-4.5 w-4.5" aria-hidden />
                              </span>
                            )}
                            <span>
                              <span className="block text-sm font-semibold text-dark dark:text-white">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="mt-0.5 block text-xs leading-snug text-slate-500 dark:text-slate-400">
                                  {child.description}
                                </span>
                              )}
                            </span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-primary/40 hover:text-primary sm:flex dark:border-white/10 dark:text-slate-300"
            >
              <Search className="h-[18px] w-[18px]" aria-hidden />
            </button>
            <ThemeToggle className="hidden sm:flex" />
            <Button href="/contact" size="sm" className="hidden lg:inline-flex">
              Get Started
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-dark lg:hidden dark:border-white/10 dark:text-white"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[64px] z-40 max-h-[calc(100dvh-64px)] overflow-y-auto overflow-x-hidden overscroll-contain border-b border-slate-200/60 bg-white/98 shadow-xl backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-slate-900/98"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-dark hover:bg-primary/5 dark:text-white dark:hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-3 border-l border-slate-200 pl-3 dark:border-white/10">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:text-primary dark:text-slate-300"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mt-2 flex items-center justify-between gap-3 px-3 pb-2">
                <ThemeToggle />
                <Button href="/contact" size="sm" className="flex-1">
                  Get Started
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
