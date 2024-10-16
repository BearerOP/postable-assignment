import React from "react";
import HeroSvg from "./hero-svg";
import { ClipboardPasteIcon } from "lucide-react";
import Sample from "./sample";
import SocialTabs from "./social-tabs";

export default function Hero() {
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
                <div id="input" className="md:pt-4">
                    <div className="mx-auto hidden max-w-xl items-center gap-1 rounded-2xl border-[1.5px] border-neutral-50 bg-white pl-5 pr-3 shadow-input-container focus-within:border-neutral-200 sm:flex lg:max-w-3xl shadow-md">
                        <input
                            className="flex-1 py-5 text-md font-normal text-neutral-900 bg-white placeholder-neutral-500 focus-visible:outline-none"
                            placeholder="Paste tweet link here..."
                            type="url"
                            control-id="ControlID-3"
                        />
                        <button
                            className="relative inline-flex h-10 items-center justify-center gap-1 rounded-[8px] bg-neutral-200 px-4 text-neutral-900 hover:bg-neutral-300 transition-colors duration-300"
                            control-id="ControlID-4"
                        >
                            <span className="text-sm font-medium">Paste</span>
                            <ClipboardPasteIcon />
                        </button>
                        <svg
                            viewBox="0 0 33 88"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="pointer-events-none absolute -top-full right-4 h-auto w-4 -translate-y-1/2 md:right-0 md:w-8"
                        >
                            <path
                                opacity="0.1"
                                className="absolute"
                                d="M11.2574 74.0725L11.2577 74.0713C12.183 71.1185 13.053 68.3422 13.7838 65.5656C13.8205 65.4297 13.8626 65.2888 13.9075 65.1443C13.9364 65.0512 13.9665 64.9565 13.9968 64.8608C14.5107 63.2414 15.1179 61.3279 12.0409 61.1997C8.83914 61.0727 8.12962 63.0269 7.54189 64.6457C7.46322 64.8623 7.38673 65.0729 7.30678 65.2717C4.91158 71.134 2.72876 77.0003 0.550775 82.8852C-0.0654122 84.5735 -0.257573 86.1512 2.15559 87.0689C4.70605 88.0501 6.85102 87.0143 9.05171 85.845C17.563 81.3231 25.0405 76.0789 31.1766 69.9747C31.8001 69.3558 32.5196 68.2951 31.8073 67.6478C30.8745 67.1968 29.3506 67.9515 28.5187 68.4661C26.7 69.56 24.9689 70.746 22.9488 72.13C22.1864 72.6523 21.3829 73.2028 20.5179 73.7873C27.9064 61.0279 30.4008 48.9502 30.8899 36.9395C31.3596 25.5488 30.5098 14.423 25.7204 4.16648C25.3707 3.4047 24.9547 2.62045 24.37 1.99931C24.3315 1.95932 24.2943 1.9205 24.2582 1.88284C23.4794 1.06957 23.2224 0.801219 21.5506 1.02887C20.1656 1.39025 19.774 2.78193 19.7602 3.53933C19.7673 5.11559 20.0493 6.6693 20.3298 8.21446C20.4055 8.63118 20.481 9.04728 20.551 9.46303C23.2222 25.3707 23.8565 41.5717 19.5023 58.4395C17.8929 64.6522 15.9201 70.8605 11.2652 76.8561C10.9607 77.1934 10.6563 77.5307 9.91648 78.3982C10.3699 76.9044 10.8198 75.4687 11.2574 74.0725Z"
                                fill="black"
                            ></path>
                        </svg>
                    </div>
                    <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-9 py-5 sm:hidden">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-0.5 text-neutral-400"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5V13C18 13.5304 17.7893 14.0391 17.4142 14.4142C17.0391 14.7893 16.5304 15 16 15H12.78L12.7865 16L14.4493 16.83C14.658 16.9343 14.7902 17.1472 14.791 17.3805C14.7921 17.7223 14.5153 18 14.1735 18H5.82649C5.48468 18 5.2079 17.7223 5.20901 17.3805C5.20977 17.1472 5.34196 16.9343 5.5507 16.83L7.2135 16L7.22 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V5ZM4 13V5H16V13H4Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-neutral-600">
                            Please visit Desktop
                        </h3>
                        <p className="text-xs font-medium text-neutral-500">
                            Postable mobile is under construction
                        </p>
                    </div>
                    <p className="mb-0.5 mt-4 text-sm font-medium text-neutral-400">
                        No signup, no credit card, no crap!
                    </p>
                </div>
                <Sample />
            </div>
            <div className="flex justify-center ">
                <SocialTabs />
            </div>
        </>
    );
}
