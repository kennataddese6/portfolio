"use client"
import { FlipWords } from "@/components/ui/flip-words"
import { inter } from "@/lib/font"
import Link from "next/link"
import { MdOutlineDownload } from "react-icons/md"

const Hero = () => {
  const words = ["Developer", "Engineer", "Designer"]

  return (
    <div className=" h-screen bg-[url(/mobileherobg.png)] xl:bg-[url(/repear.jpeg)]  w-full bg-no-repeat bg-cover">
      <div className="h-5/6 xl:w-1/2 px-4 md:px-20  text-white flex items-center">
        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-center xl:text-start text-xs m-0 p-0 text-neutral-100 md:text-white">
            Hi, This is Kenna
          </p>
          <h1
            className={`text-center xl:text-start text-4xl md:text-5xl  text-white font-semibold ${inter.className}`}
          >
            I&apos;m a Software
            <FlipWords words={words} />
          </h1>
          <p className="text-neutral-100 text-xs md:text-base text-center xl:text-start">
            I create and build fascinating applications and systems by solving
            problems and bring newideas to life through hard work and
            consistency
          </p>
          <div className="flex justify-center xl:justify-start">
            <Link
              href={"https://www.upwork.com/freelancers/~013312695998cc584d"}
              target="_blank"
            >
              <button className="bg-white text-black py-2 px-8 font-bold border-2 border-white text-sm">
                Hire Me
              </button>
            </Link>
            <Link
              href={"/KennaResume.pdf"}
              download={true}
              className="no-underline"
            >
              <button className="mx-2 text-white py-2 px-5 font-bold border-2 border-white text-sm">
                Resume <MdOutlineDownload className="inline " fontSize={16} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
