"use client"
import React from "react"
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"
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
      name: "Contact",
      link: "/contact",
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
