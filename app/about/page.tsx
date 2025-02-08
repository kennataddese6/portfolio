import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { FaPlus } from "react-icons/fa"
export default function Page() {
  const testimonials = [
    {
      quote:
        "I earned my Bachelor's degree in Computer Science from Jimma Institute of Technology, where I developed a strong foundation in programming, data structure and algorithm, database and several Computer concepts.",
      name: "Education",
      designation: "BSc in Computer Science",
      src: "/image.png",
    },
    {
      quote:
        "I am currently enrolled in the Meta Front-End Developer Professional Certificate program on Coursera taught by top professionals from Facebook equipping me with the most advanced web development skills",
      name: "Education",
      designation: "Meta Frontend Developer",
      src: "/image.png",
    },
    {
      quote:
        "I am also currently enrolled in the IBM Full-Stack Software Developer Certificate program on Coursera, where I am broadening my expertise across all aspects of software development.",
      name: "Education",
      designation: "IBM Full-Stack developer",
      src: "/image.png",
    },
    {
      quote:
        "I have taken several YouTube courses provided by industry experts, allowing me to stay updated with the latest trends and refine my skills to match the most recent advancements of the GenZ.",
      name: "Education",
      designation: "YouTube Software Engineer",
      src: "/image.png",
    },
    {
      quote:
        "I am currently working as a Software Developer at the Commercial Bank of Ethiopia, the largest bank in Ethiopia. In this role, I am responsible for developing and deploying various software solutions.",
      name: "Experience",
      designation: "Software Engineer at CBE",
      src: "/image.png",
    },
  ]
  return (
    <div className=" h-screen bg-[url(/mobileherobg.png)] xl:bg-[url(/aboutbg.png)]  w-full bg-no-repeat bg-cover 2xl:bg-y-80px">
      {" "}
      <div className="flex justify-between flex-wrap-reverse md:pl-8 md:pr-48 pt-24 md:pt-12 items-center ">
        <div>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
        <div className="flex items-center relative mx-3 md:mx-0">
          <h1 className="text-6xl md:text-9xl text-white">3</h1>
          <FaPlus className="absolute top-2 left-8 md:left-16 text-white md:text-xl" />
          <p className="text-white mx-4 font-thin">Years experience</p>
        </div>
      </div>
    </div>
  )
}
