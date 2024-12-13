"use client";
import Head from "next/head";
import "@/app/globals.css";
import { useState } from "react";

const metadata = {
  title: "Contact",
  description: "Contact page of my portfolio",
};

const Contact = () => {
  const [result, setResult] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_API_URL);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setResult("success");
    }
  }
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:description" content={metadata.description} />
      </Head>
      <main className="text-center flex flex-col items-center justify-center md:my-10">
        <h1 className="text-4xl font-extrabold py-6">Contact</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 text-black glassmorph md:px-8 px-3 py-6 w-[90%] md:w-[60%] lg:w-[40%] lg:h-[50%]"
        >
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-sm p-2 text-black placeholder:text-slate-700 w-full"
            placeholder="Full name"
          />
          <input
            type="tel"
            pattern="[0-9]{10}"
            name="contact"
            id="contact"
            minLength="10"
            maxLength="10"
            className="rounded-sm p-2 placeholder:text-slate-700 w-full"
            placeholder="Mobile"
          />
          <input
            type="text"
            name="mail"
            id="mail"
            className="rounded-sm p-2 placeholder:text-slate-700 w-full"
            placeholder="Email"
          />
          <textarea
            name="subject"
            id="subject"
            className="rounded-sm p-2 resize-none placeholder:text-slate-700 w-full"
            placeholder="Subject"
          ></textarea>
          <button
            type="submit"
            className="text-white font-bold content-center bg-blue-500 w-20 rounded-sm p-2"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default Contact;
