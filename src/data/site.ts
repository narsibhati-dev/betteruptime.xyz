const SITE_DATA = {
  name: "Better Uptime",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://betteruptime.xyz",
  ogImage:
    process.env.NEXT_PUBLIC_OG_IMAGE ?? "/images/screenshot-desktop-light.webp",

  tagline: "Uptime monitoring and status pages",
  description:
    "Better Uptime helps you monitor your services, communicate outages with status pages, and manage incidents with alerting and on-call tools.",
  shortDescription: "Uptime monitoring, status pages, and incident management.",

  alternateNames: ["Better Uptime", "betteruptime.xyz", "BetterUptime"],

  twitterHandle: "@betteruptime",

  keywords: [
    "uptime monitoring",
    "status page",
    "incident management",
    "downtime alerts",
    "service monitoring",
    "availability monitoring",
    "status page hosting",
    "on-call alerts",
  ],

  features: [
    {
      title: "Uptime monitoring",
      description:
        "Monitor HTTP, HTTPS, TCP, and more with configurable check intervals and alerting.",
    },
    {
      title: "Status pages",
      description:
        "Public status pages to keep users informed during incidents and maintenance.",
    },
    {
      title: "Incident management",
      description:
        "Track incidents, postmortems, and communicate with your team and users.",
    },
    {
      title: "Alerts and on-call",
      description:
        "Get notified via email, SMS, Slack, and more; manage on-call schedules.",
    },
  ],
};

export default SITE_DATA;
