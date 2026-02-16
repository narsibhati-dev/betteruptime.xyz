import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { getPageMetadata } from "@/lib/seo";
import { BlogSection } from "@/blogs/components/blog-section";

export const metadata = getPageMetadata({
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
  path: "/",
});

export default function Home() {
  return (
    <>
      <section className="container mx-auto flex max-w-5xl flex-col items-center justify-center bg-linear-to-b from-muted/30 to-transparent px-4 py-12 text-center sm:py-20">
        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center rounded-full bg-muted/80 px-3 py-1 text-sm font-medium text-muted-foreground">
              {SITE_CONFIG.name}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-6xl sm:leading-tight">
            {SITE_CONFIG.tagline}
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {SITE_CONFIG.shortDescription}
          </p>

          {SITE_CONFIG.features?.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              {SITE_CONFIG.features.slice(0, 4).map((feature) => (
                <span
                  key={feature.title}
                  className="rounded-full border border-border bg-muted/80 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {feature.title}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <Link
              href={SITE_CONFIG.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/blogs"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-input bg-background px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <BookOpen className="h-4 w-4" aria-hidden />
              Changelog & blog
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40  p-2">
        <BlogSection />
      </section>
    </>
  );
}
