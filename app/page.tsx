import { IconHome, IconMap2, IconMessage, IconUser } from "@tabler/icons-react"
export default function Page() {
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
    {
      name: "light",
      link: "/background-light",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ]
  return (
    <div className="bg-black h-screen bg-[url(/mobileherobg.png)] md:bg-[url(/herobg.png)] bg-no-repeat w-full bg-cover"></div>
  )
}
