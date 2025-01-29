import React from "react"
import {
  IconArrowLeft,
  IconBrandTabler,
  IconCube,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react"
import { usePathname } from "next/navigation"
const SidebarLinks = () => {
  const pathname = usePathname()
  const links = [
    {
      label: "3D Card",
      href: "#",
      icon: (
        <IconCube
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui" || pathname === "/ui/3dcard-rotation"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ]
  return links
}

export default SidebarLinks
