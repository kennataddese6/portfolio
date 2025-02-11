"use client"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRef, useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaRegMessage } from "react-icons/fa6"
import { FiUserPlus } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { toast } from "sonner"
export default function Page() {
  const form: any = useRef(null)
  const [location, setLocation] = useState(false)
  const sendEmail = (formData: FormData) => {
    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_KEY || "",
        process.env.NEXT_PUBLIC_TEMPLATEID || "",
        {
          user_name: formData.get("user_name"),
          user_email: formData.get("user_email"),
          message: formData.get("message"),
          email: process.env.NEXT_PUBLIC_EMAIL,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_KEY,
        },
      )
      form.current?.reset()
      toast.success("Message recieved", {
        description: "I will reply to you very soon.",
        style: { backgroundColor: "black" },
      })
    } catch (error: any) {
      toast.error("error")
    }
  }
  return (
    <div className=" h-screen bg-[url(/mobileherobg.png)] xl:bg-[url(/contactbg.png)]  w-full bg-no-repeat bg-cover 2xl:bg-y-80px overflow-x-hidden">
      <div className="flex justify-between pt-24 md:pt-36 md:px-20">
        <form className="w-full mx-3" action={sendEmail}>
          <h1 className="text-white text-2xl font-bold text-center md:text-start">
            Let&apos;s Talk
          </h1>
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            className="mt-3 md:mt-6 p-3 w-full md:w-96 bg-black border-2 border-neutral-800 text-neutral-400  outline-none"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            className="mt-3 md:mt-6 p-3 w-full md:w-96 bg-black border-2 border-neutral-800 text-neutral-400  outline-none"
            required
          />
          <br />
          <textarea
            placeholder="Your Thoughts"
            name="message"
            className="mt-3 md:mt-6 p-3 w-full md:w-96 bg-black border-2 border-neutral-800 text-neutral-400  outline-none min-h-24"
            required
          />
          <br />
          <button
            className="py-3 w-full md:w-96 md:text-white mt-3 md:mt-6 bg-white text-black md:bg-[#0B75A7] "
            type="submit"
          >
            Send
          </button>
        </form>
        <div className="text-white  md:flex flex-col items-center hidden">
          <motion.div
            initial={{ translateX: 120 }}
            animate={{ translateX: 0, type: "spring" }}
            transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
          >
            <Link href={"https://wa.me/251991374186"} target="_blank">
              <FiUserPlus
                className="mt-12 hover:text-blue-600 cursor-pointer"
                fontSize={20}
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ translateX: 120 }}
            animate={{ translateX: 0, type: "spring" }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          >
            <Link href="mailto:kennataddese6@gmail.com?subject=Hello&body=I%20want%20to%20talk%20to%20you">
              <FaRegMessage
                className="mt-12 hover:text-blue-600 cursor-pointer"
                fontSize={20}
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ translateX: 120 }}
            animate={{ translateX: 0, type: "spring" }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            onClick={() => setLocation(true)}
            className={` ${
              location && "absolute text-8xl top-1/2 left-1/2 -translate-y-1/2"
            }`}
          >
            <IoLocationOutline className="mt-12 hover:text-green-600 cursor-pointer" />
          </motion.div>
          <motion.div
            initial={{ translateX: 120 }}
            animate={{ translateX: 0, type: "spring" }}
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
          >
            <Link href={"https://github.com/kennataddese6/"} target="_blank">
              <FaGithub
                className="mt-12 hover:text-blue-600 cursor-pointer"
                fontSize={20}
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ translateX: 120 }}
            animate={{ translateX: 0, type: "spring" }}
            transition={{ delay: 0.2, duration: 1.2, type: "spring" }}
          >
            <Link
              href={"https://www.linkedin.com/in/kenna-taddese-905a80233/"}
              target="_blank"
            >
              <FaLinkedin
                className="mt-12 hover:text-blue-600 cursor-pointer"
                fontSize={20}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
