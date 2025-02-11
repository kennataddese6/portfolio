"use client"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaRegMessage } from "react-icons/fa6"
import { FiUserPlus } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
export default function Page() {
  return (
    <div className=" h-screen bg-[url(/mobileherobg.png)] xl:bg-[url(/contactbg.png)]  w-full bg-no-repeat bg-cover 2xl:bg-y-80px overflow-x-hidden">
      <div className="flex justify-between pt-24 md:pt-36 md:px-20">
        <div className="w-full mx-3">
          <h1 className="text-white text-2xl font-bold text-center md:text-start">
            Let&apos;s Talk
          </h1>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-3 md:mt-6 p-3 w-full md:w-96 bg-black border-2 border-neutral-800 text-neutral-400  outline-none"
          />
          <br />
          <input
            type="text"
            placeholder="Your Email"
            className="mt-3 md:mt-6 p-3 w-full md:w-96 bg-black border-2 border-neutral-800 text-neutral-400  outline-none"
          />
          <br />
          <textarea
            placeholder="Your Thoughts"
            className="mt-3 md:mt-6 p-3 w-full md:w-96 bg-black border-2 border-neutral-800 text-neutral-400  outline-none min-h-24"
          />
          <br />
          <button className="py-3 w-full md:w-96 md:text-white mt-3 md:mt-6 bg-white text-black md:bg-[#0B75A7] ">
            Send
          </button>
        </div>
        <div className="text-white  md:flex flex-col items-center hidden">
          <motion.div
            initial={{ translateX: 120 }}
            animate={{ translateX: 0, type: "spring" }}
            transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
          >
            <FiUserPlus
              className="mt-12 hover:text-blue-600 cursor-pointer"
              fontSize={20}
            />
          </motion.div>
          <motion.div
            initial={{ translateX: 120 }}
            animate={{ translateX: 0, type: "spring" }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          >
            <FaRegMessage
              className="mt-12 hover:text-blue-600 cursor-pointer"
              fontSize={20}
            />
          </motion.div>
          <motion.div
            initial={{ translateX: 120 }}
            animate={{ translateX: 0, type: "spring" }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            <IoLocationOutline
              className="mt-12 hover:text-green-600 cursor-pointer"
              fontSize={22}
            />
          </motion.div>
          <motion.div
            initial={{ translateX: 120 }}
            animate={{ translateX: 0, type: "spring" }}
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
          >
            <FaGithub
              className="mt-12 hover:text-blue-600 cursor-pointer"
              fontSize={20}
            />
            <FaLinkedin
              className="mt-12 hover:text-blue-600 cursor-pointer"
              fontSize={20}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
