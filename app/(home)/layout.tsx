"use client"
import React from "react"
import { IconHome, IconMessage, IconUser, IconMap2 } from "@tabler/icons-react"
import { FloatingNav } from "@/components/ui/floating-navbar"
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Parallax",
      link: "/parallax",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Map",
      link: "/map",
      icon: <IconMap2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Vortex1",
      link: "/color-vortex",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Vortex2",
      link: "/color-vortex2",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "timelines",
      link: "/timelines",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "sparkel",
      link: "/sparkel",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ]
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      {children}
      {children}
    </div>
  )
}
