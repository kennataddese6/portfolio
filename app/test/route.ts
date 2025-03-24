import { headers } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  const header = await headers() // No need for `await`
  const forwardedFor = header.get("x-forwarded-for")
  const clientIP = forwardedFor ? forwardedFor.split(",")[0] : "Unknown"

  return new NextResponse(`Your new IP: ${clientIP}`)
}
