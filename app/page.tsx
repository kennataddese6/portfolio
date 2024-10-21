import Navbar from "./ui/navbar";
import Image from "next/image";
import me from "@/app/heroImage.png";
import { FaCopy } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "./ui/background-beams";
export default function Home() {
  return (
    <>
      <Navbar />
      <BackgroundBeamsWithCollision
        className="from-inherit"
        children={
          <section className="bg-zinc-800 flex flex-wrap rounded-md  xl:w-9/12">
            <div className="w-full lg:w-1/2 flex items-center pl-7">
              <div>
                <h1 className="text-4xl font-sans mb-5 font-bold text-white">
                  My name is Kenna
                </h1>
                <p className="my-4 text-gray-300 lg:w-11/12 xl:w-9/12">
                  Architecting visionary experiences with precision to transform
                  ideas into exquisite, high-end products.
                </p>
                <button className="bg-purple-500 py-2 px-8 rounded-md text-white">
                  Hire me
                </button>
                <button className="bg-zinc-900 mx-2 py-2 px-2 rounded-md text-zinc-400 inline-flex items-center">
                  Copy Email <FaCopy className="mx-2" />
                </button>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-1/2">
              <Image
                src={me}
                alt="my Image"
                width={300}
                className="xl:w-7/12"
              />
            </div>
          </section>
        }
      />
    </>
  );
}
