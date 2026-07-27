"use client";

import { Hero } from "@/components/sections/hero";
import { ValueStatement } from "@/components/sections/value-statement";
import { HowItWorks } from "@/components/sections/how-it-works";
import dynamic from "next/dynamic";

// Below-fold sections loaded lazily — not needed for initial paint
const ProductivityToolkit = dynamic(() =>
  import("@/components/sections/productivity-toolkit").then((m) => ({
    default: m.ProductivityToolkit,
  }))
);
const FeaturesMatrix = dynamic(() =>
  import("@/components/sections/features-matrix").then((m) => ({
    default: m.FeaturesMatrix,
  }))
);
const VisualShowcase = dynamic(() =>
  import("@/components/sections/visual-showcase").then((m) => ({
    default: m.VisualShowcase,
  }))
);
const Testimonials = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);
const StatsMarquee = dynamic(() =>
  import("@/components/sections/stats-marquee").then((m) => ({
    default: m.StatsMarquee,
  }))
);
const PlansOverview = dynamic(() =>
  import("@/components/sections/plans-overview").then((m) => ({
    default: m.PlansOverview,
  }))
);
const CtaHero = dynamic(() =>
  import("@/components/sections/cta-hero").then((m) => ({ default: m.CtaHero }))
);
const Footer = dynamic(() =>
  import("@/components/sections/footer").then((m) => ({ default: m.Footer }))
);

const heroPhone = "/assets/hero-phone.jpg";
const heroPortrait = "/assets/hero-portrait.jpg";

export function PageSections() {
  return (
    <main>
      <Hero
        headline="Your day, simplified — right in your pocket"
        subtitle="Meet SaaSSy App — the free mobile app that helps you plan, create, and stay on top of everything. Anytime. Anywhere."
        visual={{ imageSrc: heroPhone, imageAlt: "Hand holding SaaSSy mobile app" }}
        clients={{
          avatars: [
            { alt: "Alex", fallback: "AL" },
            { alt: "Priya", fallback: "PR" },
            { alt: "Marcus", fallback: "MA" },
          ],
          count: "1.2m+",
          label: "Worldwide Clients",
        }}
        testimonial={{
          quote: "Finally, a mobile app that actually keeps me organized.",
          author: "LAURA, NOVATEAM",
          portraitSrc: heroPortrait,
          portraitAlt: "Laura, Novateam",
        }}
        annotation="The only app you'll ever need"
        marqueeItems={[
          "Trusted by 1.2M+ users",
          "Featured on Product Hunt",
          "4.9 average rating",
          "Available worldwide",
          "Free forever plan",
          "Award winning design",
        ]}
      />
      <ValueStatement />
      <HowItWorks />
      <ProductivityToolkit />
      <FeaturesMatrix />
      <VisualShowcase />
      <Testimonials />
      <StatsMarquee />
      <PlansOverview />
      <CtaHero />
      <Footer />
    </main>
  );
}
