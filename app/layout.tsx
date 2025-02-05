import { Toaster } from "@/components/ui/sonner"
import { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "./ui/navbar"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Kenna T.",
  description: "To be used during project initalization",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <div className=" h-screen bg-[url(/mobileherobg.png)] xl:bg-[url(/repear.jpeg)]  w-full bg-no-repeat bg-cover">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
