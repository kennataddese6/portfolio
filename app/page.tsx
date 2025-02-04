import { inter } from "@/lib/font"
import { MdOutlineDownload } from "react-icons/md"
export default function Page() {
  return (
    <div className="h-5/6 md:w-1/2 px-4 md:px-20  text-white flex items-center">
      <div className="flex flex-col gap-3 md:gap-4">
        <p className="text-center md:text-start text-xs m-0 p-0 text-neutral-100 md:text-white">
          Hi, This is Kenna
        </p>
        <h1
          className={`text-center md:text-start text-5xl  text-white font-semibold ${inter.className}`}
        >
          I am a Software Developer
        </h1>
        <p className="text-neutral-100 text-xs md:text-base text-center md:text-start">
          I create and build fascinating applications and systems by solving
          problems and bring newideas to life through hard work and consistency
        </p>
        <div className=" flex justify-center md:justify-start">
          <button className="bg-white text-black py-2 px-8 font-bold border-2 border-white text-sm">
            Hire Me
          </button>
          <button className="mx-2 text-white py-2 px-6 font-bold border-2 border-white text-sm">
            Resume <MdOutlineDownload className="inline " fontSize={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
