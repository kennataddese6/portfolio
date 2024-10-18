import Navbar from "./ui/navbar";
import Image from "next/image";
import me from "@/app/heroImage.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-zinc-800 grid grid-cols-2 rounded-2xl lg:w-3/4 mx-auto mt-6">
        <div className="lg:px-4 py-16">
          <div className="lg:px-4 xl:px-20 py-16 ">
            <h1 className="text-4xl font-sans my-4 font-bold">
              My name is Kenna
            </h1>
            <p className="my-4  text-gray-300">
              I create innovative experiences and bring ideas to life with great{" "}
              precision to bring high end products
            </p>
            <button className="bg-orange-700 py-2 px-8 rounded-md">
              Hire me
            </button>
            <button className="bg-zinc-900 mx-2 py-2 px-2 rounded-md text-zinc-400">
              Copy Email
            </button>
          </div>
        </div>
        <div className="px-6  flex justify-center">
          <Image src={me} alt="my Image" width={300} className="xl:w-2/4" />
        </div>
      </section>
    </>
  );
}
