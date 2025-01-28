"use client"
import React from "react"
import { PinContainer } from "@/components/ui/3d-pin"

export default function Page() {
  return (
    <div className="bg-black w-full h-full">
      <div className="h-[40rem] w-full flex items-center justify-center ">
        <PinContainer title="Right here!" href="https://twitter.com/mannupaaji">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              My Location
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                This is where I reside in the center of Addis Ababa
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6627.270916699473!2d38.74686678170891!3d9.009007648689895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d0181f146d%3A0xbe3dcdd55e6fe2c6!2zS0thcmUgQnVpbGRpbmcgfCBNZXhpY28gfCDhiqzhiqzhiK0g4YiF4YqV4Y2DIHwg4Yic4Yqt4Yiy4Yqu!5e0!3m2!1sen!2set!4v1738066819715!5m2!1sen!2set"
              width="600"
              height="450"
              className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </PinContainer>
      </div>
    </div>
  )
}
