const LLMS_DATA = {
  // Quick start / primary action for visitors
  quickStart: "Visit the site to sign up or learn more about Better Uptime.",

  // Repository or main product URL
  repository: "https://github.com/AudoraLabs/betteruptime.xyz",

  // Tech stack for this marketing site (optional)
  techStack: [
    "Next.js with App Router",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "MDX for blog and changelog content",
  ],

  // Key product/site features for the summary
  features: [
    "Uptime monitoring for HTTP, HTTPS, TCP, and more",
    "Public status pages for incident communication",
    "Incident management and postmortems",
    "Alerts via email, SMS, Slack, and integrations",
    "SEO-ready with Open Graph, sitemap, and llms.txt",
  ],

  // Folder structure (simplified for product site)
  folderStructure: `src/
├── app/
│   ├── layout.tsx         # Root layout and metadata
│   ├── page.tsx           # Home page
│   ├── blogs/             # Blog and changelog listing
│   ├── llms.txt/          # AI-friendly summary
│   └── llms-full.txt/     # Full documentation and changelog
├── data/
│   ├── site.ts            # Site name, SEO, description
│   └── llms.ts            # LLM.txt content and changelog
├── lib/
│   └── seo.ts             # SEO and JSON-LD utilities
└── blogs/content/         # MDX blog posts`,

  // Development commands (for contributors)
  commands: {
    dev: "bun dev",
    build: "bun run build",
    start: "bun start",
    lint: "bun lint",
    format: "bun format",
  },

  // SEO documentation for llms-full.txt
  seoDetails: `## SEO Configuration

This site uses production-ready SEO defaults:

### Metadata (src/lib/seo.ts)
- getMetadata(): Default site metadata with Open Graph and Twitter cards
- getPageMetadata(): Page-specific metadata
- getViewport(): Viewport and theme colors

### Configuration (src/data/site.ts)
- name, url, ogImage, tagline, description
- keywords, twitterHandle, features

### Files
- robots.ts: robots.txt with sitemap reference
- sitemap.ts: Dynamic sitemap
- manifest.ts: PWA web app manifest`,

  // Conventions (short for product site)
  conventions: `## Conventions

- Path alias @/* maps to src/*
- Theme: Dark/light mode via CSS custom properties
- Blog: MDX in src/blogs/content/ with frontmatter`,

  // Changelog / Better Uptime change blogs placeholder
  changelogSection: `## Changelog / What's New

*Add Better Uptime product updates and change blog summaries here.*`,
};

export default LLMS_DATA;
