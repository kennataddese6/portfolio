"use client"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/image.png",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/image.png",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/image.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/image.png",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "/image.png",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "/image.png",
  },
]

export default function AnimatedTooltipPreview() {
  return (
    <div className="w-full h-full bg-black flex ">
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  )
}
