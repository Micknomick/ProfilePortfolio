"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";


const people = [
  {
    id: 1,
    name: "React.js",
    designation: "JavaScript Library",
    image: "/assets/react_original_logo_icon_146374.png",
  },
  {
    id: 2,
    name: "Next.js",
    designation: "React FrameWork",
    image: "/assets/nextjs_icon_132160.png",
  },
  {
    id: 3,
    name: "TailWind CSS",
    designation: "CSS FrameWork",
    image: "/assets/tailwindcss_logo_icon_167923.png",
  },
  {
    id: 4,
    name: "Framer Motion",
    designation: "React Animation Library",
    image: "/assets/framer_logo_icon_145269.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
