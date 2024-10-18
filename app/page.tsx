import Navbar from "./ui/navbar";
import Image from "next/image";
import me from "@/app/me.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-zinc-800 grid grid-cols-2 rounded-2xl lg:mx-96 mt-6">
        <div className="px-6 py-16 ">
          <h1 className="text-4xl font-sans my-4 font-bold">
            My name is Kenna
          </h1>
          <p className="my-4 text-gray-300">
            I create innovative experiences and bring ideas to life with great{" "}
            <br />
            precision to bring high end products
          </p>
          <button className="bg-orange-700 py-2 px-8 rounded-md">
            Hire me
          </button>
          <button className="bg-zinc-900 mx-2 py-2 px-2 rounded-md text-zinc-400">
            Copy Email
          </button>
        </div>
        <div className="px-6 py-8 "></div>
      </section>

      <section>Hello</section>
      <section>Hello</section>
    </>
  );
}
