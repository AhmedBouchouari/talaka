"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout";
import { HeroBackground } from "./HeroBackground";
import { HeroHeader, type HeroNavItem } from "./HeroHeader";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { HeroMarquee } from "./HeroMarquee";
import { HeroSideToolbar } from "./HeroSideToolbar";
import { heroStagger } from "./variants";
import type { HeroCta } from "./HeroButtons";
import type { ClientAvatar } from "./HeroBadgeClients";

export type HeroProps = {
  brand?: { name: string; suffix?: string };
  nav?: HeroNavItem[];
  headerCta?: { label: string; onClick?: () => void };
  headline: string;
  subtitle: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  visual: {
    imageSrc: string;
    imageAlt: string;
  };
  clients: {
    avatars: ClientAvatar[];
    count: string;
    label: string;
  };
  testimonial: {
    quote: string;
    author: string;
    portraitSrc: string;
    portraitAlt: string;
  };
  annotation?: string;
  marqueeItems?: string[];
  showSideToolbar?: boolean;
};

export function Hero({
  brand,
  nav,
  headerCta,
  headline,
  subtitle,
  primaryCta,
  secondaryCta,
  visual,
  clients,
  testimonial,
  annotation,
  marqueeItems,
  showSideToolbar = true,
}: HeroProps) {
  const shouldReduce = useReducedMotion();
  const stagger = shouldReduce ? { hidden: {}, visible: {} } : heroStagger;

  return (
    <HeroBackground>
      <motion.section
        aria-label="Hero"
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative flex min-h-screen flex-col lg:min-h-[850px]"
      >
        <HeroHeader
          brand={brand}
          items={nav}
          ctaLabel={headerCta?.label}
          onCtaClick={headerCta?.onClick}
        />

        <Container size="xl" className="flex-1">
          <div className="grid grid-cols-1 items-center gap-16 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
            <div className="lg:col-span-6 lg:pr-8 text-center lg:text-left">
              <HeroContent
                headline={headline}
                subtitle={subtitle}
                primaryCta={primaryCta}
                secondaryCta={secondaryCta}
                className="items-center lg:items-start"
              />
            </div>
            <div className="hidden lg:block lg:col-span-6">
              <HeroVisual
                imageSrc={visual.imageSrc}
                imageAlt={visual.imageAlt}
                clients={clients}
                testimonial={testimonial}
                annotation={annotation}
              />
            </div>
          </div>
        </Container>

        {marqueeItems && marqueeItems.length > 0 && (
          <HeroMarquee items={marqueeItems} className="mt-auto" />
        )}
      </motion.section>

      {showSideToolbar && <HeroSideToolbar />}
    </HeroBackground>
  );
}