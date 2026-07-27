"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, ArrowUp } from "lucide-react";

function BrandCube({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="10" width="20" height="20" rx="6" fill="url(#cubeGrad1)" />
      <rect x="10" y="4" width="20" height="20" rx="6" fill="url(#cubeGrad2)" fillOpacity="0.9" />
      <defs>
        <linearGradient id="cubeGrad1" x1="4" y1="10" x2="24" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#5144ED" />
        </linearGradient>
        <linearGradient id="cubeGrad2" x1="10" y1="4" x2="30" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F28232" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#integrations" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Request a Demo", href: "#demo" },
];

const resourceLinks = [
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Blog", href: "#blog" },
  { label: "Contacts", href: "#contacts" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter submission placeholder
    setEmail("");
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0F1115] text-white">
      <div className="mx-auto max-w-[1280px] px-6 pt-20 pb-12 md:px-12 lg:pt-28">
        {/* Top zone: newsletter banner */}
        <div className="grid grid-cols-1 items-start gap-10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="max-w-lg text-3xl leading-tight font-extrabold text-white sm:text-4xl">
              Don&apos;t just work harder — work smarter with SaaSSy App.
            </h2>
          </div>

          <div className="flex flex-col items-start lg:col-span-6 lg:items-end">
            <div className="mb-3 flex w-full max-w-md items-center justify-between">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                Stay up to date
              </span>
              <span className="font-['Caveat',cursive] text-sm text-gray-300">
                No spam. Just value. ⤵
              </span>
            </div>

            <form onSubmit={handleSubscribe} className="w-full max-w-md">
              <div className="flex w-full overflow-hidden rounded-xl border border-zinc-700 bg-[#1F2023] transition-all focus-within:border-indigo-500">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address*"
                  required
                  className="h-[52px] flex-1 bg-transparent px-5 text-sm text-white placeholder-gray-500 outline-none"
                />
                <button
                  type="submit"
                  className="h-[52px] shrink-0 bg-white px-7 text-sm font-bold text-[#1B1B1F] transition-colors hover:bg-gray-200"
                >
                  Subscribe Now
                </button>
              </div>
            </form>

            <p className="mt-3 max-w-md text-xs text-gray-400">
              Get productivity tips, feature updates, and smart automation ideas straight to your
              inbox.
            </p>
          </div>
        </div>

        {/* Divider line */}
        <hr className="my-12 border-t border-white/10" />

        {/* Bottom zone: 4-column footer navigation */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & copyright */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="mb-6 flex items-center gap-2">
              <BrandCube className="h-8 w-8" />
              <span className="text-xl font-bold">SaaSSy</span>
              <span className="text-xl font-normal text-gray-400">app</span>
            </div>
            <p className="mt-12 max-w-xs text-xs leading-relaxed text-gray-500">
              cmsmasters © 2026 - All Rights Reserved - This is a sample website
            </p>
          </div>

          {/* Column 2: Product links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-bold text-white">Product</h3>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-bold text-white">Resources</h3>
            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & contact */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h3 className="mb-4 text-sm font-bold text-white">Company</h3>
            <address className="mb-6 not-italic">
              <ul className="space-y-2 text-sm text-gray-400">
                <li>123 Innovation Drive, San Francisco, CA 94103</li>
                <li>
                  <a href="tel:+14155550123" className="hover:text-white transition-colors">
                    +1 (415) 555-0123
                  </a>
                </li>
                <li>
                  Support:{" "}
                  <a href="tel:11234567890" className="hover:text-white transition-colors">
                    1-123-456-7890
                  </a>
                </li>
                <li>
                  Inquiries:{" "}
                  <a
                    href="mailto:example@saassy.app"
                    className="hover:text-white transition-colors"
                  >
                    example@saassy.app
                  </a>
                </li>
              </ul>
            </address>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#27272A] p-2.5 text-sm text-white transition-all hover:bg-[#3F3F46]"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#27272A] p-2.5 text-sm text-white transition-all hover:bg-[#3F3F46]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#27272A] p-2.5 text-sm text-white transition-all hover:bg-[#3F3F46]"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating scroll-to-top button */}
      <motion.button
        type="button"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
        className="fixed right-6 bottom-6 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5144ED] text-white shadow-lg transition-all hover:bg-[#4336e0]"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
