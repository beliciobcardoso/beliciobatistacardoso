import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.redirect(new URL("/cv.pdf", request.url), {
    status: 307,
  });
}
