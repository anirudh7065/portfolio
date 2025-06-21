import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let theme =  request.headers.get("cookie") || "";
  return NextResponse.json({theme});
}
export async function POST(request: Request) {
  const themeCookie = request.headers.get("cookie") || "";
  const currentTheme = themeCookie.includes("theme=dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  const response = NextResponse.json({ theme: newTheme });

  response.cookies.set("theme", newTheme, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, //1 year
  });

  return response;
}