import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { FaPlus } from "react-icons/fa"
export default function Page() {
  const testimonials = [
    {
      quote:
        "I earned my Bachelor's degree in Computer Science from Jimma Institute of Technology, where I developed a strong foundation in programming",
      name: "Education",
      designation: "BSc in Computer Science",
      src: "/image.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/image.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/image.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/image.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/image.png",
    },
  ]
  return (
    <div className=" h-screen bg-[url(/mobileherobg.png)] xl:bg-[url(/aboutbg.png)]  w-full bg-no-repeat bg-cover 2xl:bg-y-80px">
      {" "}
      <div className="flex justify-between flex-wrap-reverse pl-8 pr-48 pt-12 items-center">
        <AnimatedTestimonials testimonials={testimonials} />
        <div className="flex items-center relative">
          <h1 className="text-9xl text-white">3</h1>
          <FaPlus className="absolute top-2 left-16 text-white text-xl" />
          <p className="text-white mx-4 font-thin">Years experience</p>
        </div>
      </div>
    </div>
  )
}
