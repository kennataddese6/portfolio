import { headers } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  const header = await headers()

  // Extract key data
  const clientIP = header.get("x-forwarded-for")?.split(",")[0] || "Unknown"
  const userAgent = header.get("user-agent") || "Unknown"
  const referer = header.get("referer") || "Unknown"
  const acceptLanguage = header.get("accept-language") || "Unknown"
  const encoding = header.get("accept-encoding") || "Unknown"

  // Return collected data
  return new NextResponse(
    JSON.stringify({
      ip: clientIP,
      userAgent,
      referer,
      acceptLanguage,
      encoding,
    }),
    { headers: { "Content-Type": "application/json" } },
  )
}
