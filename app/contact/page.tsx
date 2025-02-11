import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaRegMessage } from "react-icons/fa6"
import { FiUserPlus } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
export default function Page() {
  return (
    <div className=" h-screen bg-[url(/mobileherobg.png)] xl:bg-[url(/contactbg.png)]  w-full bg-no-repeat bg-cover 2xl:bg-y-80px">
      <div className="flex justify-between pt-36 px-20">
        <div>
          <h1 className="text-white text-2xl font-bold">Let&apos;s Talk</h1>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-6 p-3 w-96 bg-black border-2 border-neutral-800 text-neutral-400  outline-none"
          />
          <br />
          <input
            type="text"
            placeholder="Your Email"
            className="mt-6 p-3 w-96 bg-black border-2 border-neutral-800 text-neutral-400  outline-none"
          />
          <br />
          <textarea
            placeholder="Your Thoughts"
            className="mt-6 p-3 w-96 bg-black border-2 border-neutral-800 text-neutral-400  outline-none min-h-24"
          />
          <br />
          <button
            className="py-3 w-96 text-white mt-6"
            style={{ backgroundColor: "#0B75A7" }}
          >
            Send
          </button>
        </div>
        <div className="text-white  flex flex-col items-center">
          <FiUserPlus
            className="mt-12 hover:text-blue-600 cursor-pointer"
            fontSize={20}
          />
          <FaRegMessage
            className="mt-12 hover:text-blue-600 cursor-pointer"
            fontSize={20}
          />
          <IoLocationOutline
            className="mt-12 hover:text-blue-600 cursor-pointer"
            fontSize={22}
          />
          <FaGithub
            className="mt-12 hover:text-blue-600 cursor-pointer"
            fontSize={20}
          />
          <FaLinkedin
            className="mt-12 hover:text-blue-600 cursor-pointer"
            fontSize={20}
          />
        </div>
      </div>
    </div>
  )
}
