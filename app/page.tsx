"use client";

import { Hero } from "@/components/sections/hero";
import { ValueStatement } from "@/components/sections/value-statement";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ProductivityToolkit } from "@/components/sections/productivity-toolkit";
import { FeaturesMatrix } from "@/components/sections/features-matrix";
import { VisualShowcase } from "@/components/sections/visual-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { StatsMarquee } from "@/components/sections/stats-marquee";
import { PlansOverview } from "@/components/sections/plans-overview";
import { CtaHero } from "@/components/sections/cta-hero";
import { Footer } from "@/components/sections/footer";

const heroPhone = "/assets/hero-phone.jpg";
const heroPortrait = "/assets/hero-portrait.jpg";

export default function Page() {
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
