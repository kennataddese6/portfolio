import { inter } from "@/lib/font"
import { MdDownload } from "react-icons/md"
export default function Page() {
  return (
    <div className="h-5/6 w-1/2 md:px-20  text-white flex items-center">
      <div className="flex flex-col gap-4">
        <h1
          className={`md:text-5xl text-white font-semibold ${inter.className}`}
        >
          I am a Software Developer
        </h1>
        <p className="text-neutral-100">
          I create and build fascinating applications and systems by solving
          problems and bring newideas to life through hard work and consistency
        </p>
        <div>
          <button className="bg-white text-black py-2 px-8 font-bold border-2 border-white text-sm">
            Hire Me
          </button>
          <button className="md:mx-2 text-white py-2 px-5 font-bold border-2 border-white text-sm">
            Resume <MdDownload className="inline " fontSize={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
