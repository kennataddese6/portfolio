"use client"
import React from "react"
import { Button } from "@/components/ui/moving-border"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export default function MovingBorderDemo() {
  const AceternityLogo = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 text-black dark:text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black flex flex-col gap-2 flex-1 w-full h-full">
        <div className="w-full h-full bg-black flex ">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Sign Up
          </Button>
          <div className="flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <AceternityLogo />
              <span>Aceternity UI</span>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </div>
  )
}
