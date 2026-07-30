import { Button } from "@/components/ui/button";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-24">
      <GridPattern />
      <GradientBlobs />
      <div className="container-page relative">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-white">
            <SearchX className="h-7 w-7" aria-hidden />
          </span>
          <h1 className="text-gradient text-7xl font-bold tracking-tight sm:text-8xl md:text-9xl">
            404
          </h1>
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
            This page took a wrong turn somewhere
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            The page you&apos;re looking for doesn&apos;t exist, may have been moved, or the URL
            is incorrect. Let&apos;s get you back on track.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/" size="lg" className="w-full sm:w-auto">
              Back to Home
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
