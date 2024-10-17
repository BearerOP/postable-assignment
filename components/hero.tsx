"use client"
import React, { useRef } from "react";
import HeroSvg from "./hero-svg";
import { ClipboardPasteIcon } from "lucide-react";
import Sample from "./sample";
import SocialTabs from "./social-tabs";
import GetStarted from "./get-started";
import Steps from "./steps";
import SocialMedia from "./social-media";

export default function Hero() {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollToInput = () => {
    if (inputRef.current) {
      const elementPosition = inputRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - 100,
        behavior: "smooth",
      });
      inputRef.current.classList.add("wiggle");
      inputRef.current.focus();
      setTimeout(() => {
        inputRef.current?.classList.remove("wiggle");
      }, 1000);
    }
  };

  return (
    <>
      <div className="h-20" />
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-8 px-4 py-7 text-center md:mt-0 md:py-28 xl:pe-4 xl:ps-0">
        <div className="mx-auto w-full max-w-5xl text-balance px-8 text-center text-[30px] font-bold leading-[32px] tracking-[-1.4px] text-[#252424] md:px-0 md:text-[80px] md:leading-[80px]">
          Convert{" "}
          <div className="relative inline-block">
            Tweets
            <HeroSvg />
          </div>{" "}
          into Engaging Social Media Posts, Instantly!
        </div>
        <p className="mx-auto max-w-72 text-balance px-8 text-md font-medium text-neutral-900 sm:block md:mt-4 md:max-w-fit md:text-xl hidden">
          Paste your tweet link below to get started for FREE
        </p>
        <div ref={inputRef} className="md:pt-4">
          <div className="mx-auto hidden max-w-xl items-center gap-1 rounded-2xl border-[1.5px] border-neutral-50 bg-white pl-5 pr-3 shadow-input-container focus-within:border-neutral-200 sm:flex lg:max-w-3xl shadow-md">
            <input
              className="flex-1 py-5 text-md font-normal text-neutral-900 bg-white placeholder-neutral-500 focus-visible:outline-none"
              placeholder="Paste tweet link here..."
              type="url"
            />
            <button
              className="relative inline-flex h-10 items-center justify-center gap-1 rounded-[8px] bg-neutral-200 px-4 text-neutral-900 hover:bg-neutral-300 transition-colors duration-300"
            >
              <span className="text-sm font-medium">Paste</span>
              <ClipboardPasteIcon />
            </button>
          </div>
          <p className="mb-0.5 mt-4 text-sm font-medium text-neutral-400">
            No signup, no credit card, no crap!
          </p>
        </div>
        <Sample />
      </div>
      <div className="flex justify-center">
        <SocialTabs />
      </div>
      <Steps/>
      <SocialMedia/>
      <GetStarted scrollToInput={scrollToInput}/>
    </>
  );
}
