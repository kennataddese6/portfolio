import { NextRequest, NextResponse } from "next/server"

export function GET(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for")
  const clientIP = forwardedFor ? forwardedFor.split(",")[0] : "Unknown"

  return new NextResponse(`Your IP: ${clientIP}`)
}
