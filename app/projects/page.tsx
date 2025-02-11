"use client"
import { useOutsideClick } from "@/hooks/use-outside-click"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useId, useRef, useState } from "react"
export default function Page() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  )
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))
  const CloseIcon = () => {
    return (
      <motion.svg
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.05,
          },
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-black"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </motion.svg>
    )
  }
  return (
    <div className="h-screen xl:bg-[url(/projectsbg.png)]  w-full bg-no-repeat xl:bg-center">
      <div className="flex flex-1 pt-24 px-4">
        <div className="p-2 md:p-10 rounded-tl-2xl  flex-col gap-2 flex-1 w-full h-full ">
          <div className="w-full h-full  flex ">
            <AnimatePresence>
              {active && typeof active === "object" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0  h-full w-full z-10 "
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {active && typeof active === "object" ? (
                <div className="fixed inset-0  grid place-items-center z-[100]">
                  <motion.button
                    key={`button-${active.title}-${id}`}
                    layout
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: 0.05,
                      },
                    }}
                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                    onClick={() => setActive(null)}
                  >
                    <CloseIcon />
                  </motion.button>
                  <motion.div
                    layoutId={`card-${active.title}-${id}`}
                    ref={ref}
                    className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                  >
                    <motion.div layoutId={`image-${active.title}-${id}`}>
                      <Image
                        priority
                        width={200}
                        height={200}
                        src={active.src}
                        alt={active.title}
                        className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                      />
                    </motion.div>

                    <div>
                      <div className="flex justify-between items-start p-4">
                        <div className="">
                          <motion.h3
                            layoutId={`title-${active.title}-${id}`}
                            className="font-bold text-neutral-700 dark:text-neutral-200"
                          >
                            {active.title}
                          </motion.h3>
                          <motion.p
                            layoutId={`description-${active.description}-${id}`}
                            className="text-neutral-600 dark:text-neutral-400"
                          >
                            {active.description}
                          </motion.p>
                        </div>

                        <motion.a
                          layoutId={`button-${active.title}-${id}`}
                          href={active.ctaLink}
                          target="_blank"
                          className="px-4 py-3 text-sm rounded-full font-bold bg-blue-500 text-white"
                        >
                          {active.ctaText}
                        </motion.a>
                      </div>
                      <div className="pt-4 relative px-4">
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                        >
                          {typeof active.content === "function"
                            ? active.content()
                            : active.content}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ) : null}
            </AnimatePresence>
            <ul className=" mx-auto w-full gap-4">
              {cards.map((card, index) => (
                <motion.div
                  layoutId={`card-${card.title}-${id}`}
                  key={`card-${card.title}-${id}`}
                  onClick={() => setActive(card)}
                  className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-950/80 rounded-xl cursor-pointer"
                >
                  <div className="flex gap-4 flex-col md:flex-row ">
                    <motion.div layoutId={`image-${card.title}-${id}`}>
                      <Image
                        width={100}
                        height={100}
                        src={card.src}
                        alt={card.title}
                        className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                      />
                    </motion.div>
                    <div className="">
                      <motion.h3
                        layoutId={`title-${card.title}-${id}`}
                        className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${card.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                      >
                        {card.description}
                      </motion.p>
                    </div>
                  </div>
                  <motion.button
                    layoutId={`button-${card.title}-${id}`}
                    className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-500 hover:text-white text-black mt-4 md:mt-0"
                  >
                    {card.ctaText}
                  </motion.button>
                </motion.div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
const cards = [
  {
    description: "Corporate Project",
    title: "CBEIB",
    src: "/project1.png",
    ctaText: "View",
    ctaLink: "https://cbeib.vercel.app/",
    content: () => {
      return (
        <p>
          I spearheaded the development of an advanced Internet Banking system
          for the Commercial Bank of Ethiopia, the largest bank in the country.
          This groundbreaking project establishes a robust foundation that will
          save the bank millions of dollars annually in licensing fees
          previously paid to Temenos, a Swiss-based company. <br /> <br /> As a
          Frontend Developer on this project, I was tasked with designing and
          developing the client-side application. My primary focus was to create
          an intuitive and user-friendly interface that seamlessly handles
          various types of transfers, payments, and a multitude of other banking
          functionalities. This application ensures a smooth, efficient, and
          secure banking experience for all users.
        </p>
      )
    },
  },
  {
    description: "Freelance Project",
    title: "MT Custom Lights",
    src: "/project2.png",
    ctaText: "View",
    ctaLink: "https://threecars.vercel.app/",
    content: () => {
      return (
        <p>
          I developed a clean and visually engaging landing page for a UK-based
          car lights selling company. The page features smooth scroll-based
          animations, providing an immersive and interactive user experience.
          This project not only showcases my ability to create aesthetically
          pleasing designs but also highlights my efficiency in developing
          beautiful landing pages quickly and effectively.
          <br /> <br /> I harnessed my expertise in Next.js, React, HTML5, CSS3,
          JavaScript, and Tailwind to bring this project to life. These
          technologies allowed me to build a dynamic and responsive application
          that meets modern web standards, ensuring a seamless user experience
          and robust functionality.
        </p>
      )
    },
  },

  {
    description: "Mid-Level Project",
    title: "Essence Care First",
    src: "/project3.png",
    ctaText: "View",
    ctaLink: "https://essences.vercel.app/",
    content: () => {
      return (
        <p>
          I developed a comprehensive web application for Essence, a medical
          equipment selling company located in my hometown. This application
          features a clean and visually appealing landing page, designed to
          attract and engage potential customers. The intuitive design and
          seamless functionality ensure a user-friendly experience, making it
          easy for customers to navigate and find the medical equipment they
          need. <br /> <br /> I leveraged my expertise in React, Next.js,
          Bootstrap, and CSS3 to build this remarkable project. These
          technologies empowered me to create a dynamic and visually appealing
          web application that meets modern web standards, ensuring both
          functionality and a seamless user experience.
        </p>
      )
    },
  },
  {
    description: "Mid-level Project",
    title: "125CODING",
    src: "/project4.png",
    ctaText: "View",
    ctaLink: "https://125-coding-app.vercel.app/",
    content: () => {
      return (
        <p>
          I developed a robust e-commerce sales page website for 125CODING, a
          UK-based company. This project features a comprehensive product
          showcase, an intuitive add-to-cart functionality, and a seamless
          checkout process for purchasing. The goal was to create a
          user-friendly and efficient online shopping experience, ensuring
          customers can easily browse, select, and purchase products. <br />{" "}
          <br /> I gained valuable experience utilizing Shopify as a storefront
          to manage products and payments. Additionally, I integrated
          technologies such as Next.js, Tailwind, TypeScript, and more to create
          a seamless and efficient e-commerce platform.
        </p>
      )
    },
  },
  {
    description: "Complex Project",
    title: "BISCS",
    src: "/project5.png",
    ctaText: "View",
    ctaLink: "https://biscs.vercel.app/",
    content: () => {
      return (
        <p>
          I developed an innovative Barcode Integrated Student Clearance System
          for a University to streamline and enhance their clearance process.
          This system features real-time updates and leverages barcode
          technology to scan and retrieve information instantly across all
          devices. By incorporating this system, the University significantly
          improved the efficiency and accuracy of their clearance procedures.
          <br /> <br />I gained extensive experience in React, Redux,
          Express.js, and Node.js while building this project. These
          technologies allowed me to create a highly efficient and dynamic
          application, showcasing my ability to develop robust and scalable
          solutions.
        </p>
      )
    },
  },
]
