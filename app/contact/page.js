"use client";
import Head from "next/head";
import "@/app/globals.css";
import { useState } from "react";
import Image from "next/image";

const metadata = {
  title: "Contact",
  description: "Contact page of my portfolio",
};

const Contact = () => {
  const [result, setResult] = useState("");
  const [clicked, setClicked] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setClicked(true);
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_API_URL);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    if (
      event.target.name.value.length < 3 ||
      event.target.mail.value.length < 12
    ) {
      if (event.target.mail.value.length < 12) {
        event.target.mail.placeholder = "mail not entered";
        event.target.mail.classList.add(
          "placeholder:text-red-500",
          "border",
          "border-red-500"
        );
      }
      if (event.target.name.value.length < 3) {
        event.target.name.placeholder = "name not entered";
        event.target.name.classList.add(
          "placeholder:text-red-500",
          "border",
          "border-red-500"
        );
      }
      setClicked(false);
    } else {
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
  }
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:description" content={metadata.description} />
      </Head>
      <main className={`text-center flex flex-col items-center justify-center`}>
        {result === "success" ? (
          <div
            className={`flex flex-col items-center gap-5 glassmorph md:px-8 px-3 py-6 w-[90%] md:w-[60%] lg:w-[40%] lg:h-[80%] text-white justify-center my-[50%] md:my-[30%] lg:my-[5%] `}
          >
            <Image
              src="./icons/tick1.svg"
              alt="success"
              width={70}
              height={70}
            />
            <div>
              <h1 className="text-2xl font-extrabold">Thank You!</h1>
              <h2 className="text-lg font-bold">For Contacting me</h2>
            </div>
            <h3 className="text-xs">
              I&apos;ve received your message and will follow up shortly.
            </h3>
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-extrabold py-6">Contact</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-5 text-black glassmorph md:px-8 px-3 py-6 w-[90%] md:w-[60%] lg:w-[40%] lg:h-[50%]"
            >
              <input
                type="text"
                name="name"
                id="name"
                className="rounded-sm p-2 text-black placeholder:text-slate-700 w-full "
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
                placeholder="Mobile (optional)"
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
              {clicked === false ? (
                <button
                  type="submit"
                  className="text-white font-bold content-center bg-blue-500 w-20 rounded-sm p-2"
                >
                  Submit
                </button>
              ) : (
                <Image
                  src="./loading-circle.svg"
                  alt="Loading..."
                  width={50}
                  height={50}
                />
              )}
            </form>
          </>
        )}
      </main>
    </>
  );
};

export default Contact;
