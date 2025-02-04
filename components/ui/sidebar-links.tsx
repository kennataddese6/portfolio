import {
  IconArrowLeft,
  IconBrandTabler,
  IconCardboards,
  IconCards,
  IconClipboard,
  IconCube,
  IconListCheck,
  IconMicroscope,
  IconPin,
  IconSettings,
  IconTipJar,
} from "@tabler/icons-react"
import { usePathname } from "next/navigation"
const SidebarLinks = () => {
  const pathname = usePathname()
  const links = [
    {
      label: "3D Card",
      href: "/ui",
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
      label: "3D Pin",
      href: "/ui/3dpin",
      icon: (
        <IconPin
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui/3dpin"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Animated Modal",
      href: "/ui/animated-modal",
      icon: (
        <IconClipboard
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui/animated-modal"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Animated Testimonial",
      href: "/ui/animated-testimonial",
      icon: (
        <IconListCheck
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui/animated-testimonial"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Animated Tooltip",
      href: "/ui/animated-tooltip",
      icon: (
        <IconTipJar
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui/animated-tooltip"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Card Spotlight",
      href: "/ui/card-spotlight",
      icon: (
        <IconCards
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui/card-spotlight"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Expandable Card",
      href: "/ui/expandable-card",
      icon: (
        <IconCardboards
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui/expandable-card"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Showcase Lense",
      href: "/ui/showcase-lens",
      icon: (
        <IconMicroscope
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui/showcase-lens"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Sheet",
      href: "/ui/sheet",
      icon: (
        <IconBrandTabler
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui/sheet"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Borders",
      href: "/ui/borders",
      icon: (
        <IconSettings
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui/borders"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Toast",
      href: "/ui/toast",
      icon: (
        <IconSettings
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/ui/toast"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
    {
      label: "Logout",
      href: "/",
      icon: (
        <IconArrowLeft
          className={`h-5 w-5 flex-shrink-0 ${
            pathname === "/"
              ? "text-blue-700 dark:text-blue-700"
              : "text-neutral-700 dark:text-neutral-200"
          }`}
        />
      ),
    },
  ]
  return links
}

export default SidebarLinks
