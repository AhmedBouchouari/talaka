"use client";

import { Reveal } from "./reveal";
import type { ComponentProps } from "react";

export function FadeIn(props: Omit<ComponentProps<typeof Reveal>, "variant">) {
  return <Reveal variant="fadeIn" {...props} />;
}