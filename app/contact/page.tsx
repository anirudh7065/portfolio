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
  const [errors, setErrors] = useState<{ username?: string; email?: string; message?: string;}>({});

  const validateForm = (data: { username: string; number?: string; email: string; message: string }) => {
    const newErrors: typeof errors = {};

    if (data.username.length < 3 || /[0-9\W]/.test(data.username)) {
      newErrors.username = "Invalid name";
    }
    if (data.email.length < 12) {
      newErrors.email = "Invalid email";
    }
    if (data.message.length < 10) {
      newErrors.message = "Message too short";
    }

    return newErrors;
  };

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setClicked(true);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData) as {
      username: string;
      number: string;
      email: string;
      message: string;
    };

    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setClicked(false);
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...data
      })
    });

    const result = await response.json();
    // const result = { success: true };

    if (result.success) {
      setResult("success");
      form.reset();
    }

    setClicked(false);
  };
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:description" content={metadata.description} />
      </Head>
      <main
        className={`text-center flex flex-col items-center justify-start gap-10 h-[cacl(100vh-130px] md:h-auto w-full pb-10`}
      >
        <h1 className="text-4xl font-bold text-center dark:text-[#FFF15C] py-6 dark:black-outline-text">
          Contact
        </h1>
        {result === "success" ? (
          <div
            className={`flex flex-col items-center gap-5 glassmorph md:px-8 px-3 py-6 md:w-[600px] md:h-[400px] w-[90%] text-white justify-center`}
          >
            <Image
              src="./icons/tick1.svg"
              alt="success"
              width={70}
              height={70}
            />
            <div>
              <h1 className="text-2xl font-extrabold dark:text-[#FFF15C] text-black">
                Thank You!
              </h1>
              <h2 className="text-lg font-bold dark:text-white text-black">
                For Contacting me
              </h2>
            </div>
            <h3 className="text-xs dark:text-white text-black">
              I&apos;ve received your message and will follow up shortly.
            </h3>
          </div>
        ) : (
          <form
            onSubmit={handleClick}
            className="flex flex-col items-center gap-5 text-black dark:bg-dark-1 bg-yellow-400 rounded-3xl md:px-8 px-3 py-6 md:w-[600px] h-auto w-[90%] border-2 dark:border-black"
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Name"
              className={`rounded-lg p-2 placeholder:text-slate-950 w-full dark:border-2  ${
                errors.username
                  ? "border border-red-700 placeholder:text-red-500"
                  : "dark:border-black"
              }`}
            />
            {errors.username && (
              <p className="px-4 text-sm dark:text-red-500 text-red-700 ">
                {errors.username}
              </p>
            )}
            <input
              type="tel"
              pattern="[0-9]{10}"
              name="contact"
              id="contact"
              minLength={10}
              maxLength={10}
              placeholder="Mobile (optional)"
              className={`rounded-lg p-2 placeholder:text-slate-950 w-full dark:border-2 dark:border-black `}
            />
            <input
              type="text"
              name="email"
              id="email"
              className={`rounded-lg p-2 placeholder:text-slate-950 w-full dark:border-2  ${
                errors.email
                  ? "border border-red-700 placeholder:text-red-500"
                  : "dark:border-black"
              }`}
              placeholder="Email"
            />
            {errors.email && (
              <p className="px-4 text-sm dark:text-red-500 text-red-700 ">
                {errors.email}
              </p>
            )}
            <textarea
              name="message"
              id="message"
              placeholder="Subject"
              className={`rounded-lg min-h-[100px] p-2 placeholder:text-slate-950 w-full dark:border-2  ${
                errors.message
                  ? "border border-red-700 placeholder:text-red-500"
                  : "dark:border-black"
              }`}
            ></textarea>
            {errors.message && (
              <p className="px-4 text-sm dark:text-red-500 text-red-700  ">
                {errors.message}
              </p>
            )}
            {clicked === false ? (
              <button
                type="submit"
                className="text-white font-bold content-center bg-dark-3 w-20 rounded-full p-2 dark:black-outline-text"
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
        )}
      </main>
    </>
  );
};

export default Contact;
