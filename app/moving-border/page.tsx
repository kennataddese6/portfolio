"use client"
import { Button } from "@/components/ui/moving-border"

export default function MovingBorderDemo() {
  return (
    <div className="bg-black w-full h-full flex items-center justify-center">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Sign Up
      </Button>
    </div>
  )
}
