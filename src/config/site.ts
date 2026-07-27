export const siteConfig = {
  name: "Northwind",
  title: "Northwind — The modern SaaS platform",
  description:
    "A premium SaaS foundation — fast, accessible, and beautifully crafted.",
  url: "https://example.com",
  ogImage: "",
  nav: [
    { label: "Product", href: "/product" },
    { label: "Pricing", href: "/pricing" },
    { label: "Customers", href: "/customers" },
    { label: "Docs", href: "/docs" },
  ],
  social: {
    twitter: "",
    github: "",
    linkedin: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;