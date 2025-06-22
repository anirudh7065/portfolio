"use server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {username, number, email, message} = await request.json();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        number: number,
        email: email,
        message: message,
        subject: "Contact Form from Portfolio",
        access_key: process.env.CONTACT_API_URL,
      }),
    });
    if (!res.ok) {
      const text = await res.text(); // get the raw response text (likely HTML or error message)
      console.error("Web3Forms API returned error:", res.status, text);
      throw new Error(`Web3Forms API error: ${res.status}`);
    }


    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
