import React from 'react'

export default function SocialTabs() {
  return (
    <>
          <div
                className="h-full lg:w-[70vw] w-full rounded-[64px]"
                style={{
                    backgroundImage: `url('/section-background.png')`,
                }}
            >
                <header className="px-4 sm:px-8 md:px-12 pt-12">
                    <h3
                        className="mx-auto max-w-sm text-balance text-center text-2xl leading-[28px] text-white sm:max-w-md sm:text-3xl sm:leading-[36px] md:max-w-2xl md:text-5xl md:leading-[48px] lg:text-6xl lg:leading-[54px]"
                        style={{ fontWeight: 850 }}
                    >
                        Share Your Voice Beyond Just a Tweet
                    </h3>
                    <p className="mx-auto my-4 max-w-xs text-balance text-center text-sm font-normal leading-[18px] text-white sm:my-5 sm:max-w-sm md:my-8 md:max-w-xl md:text-base lg:my-8 lg:text-md">
                        Keep your online presence steady and growing by creating
                        customizable images from your tweets, perfect for Instagram,
                        Facebook, and more.
                    </p>
                </header>
                <div className="scrollbar-hide mx-auto my-6 flex max-w-full items-center justify-start gap-3 overflow-x-auto px-4 sm:justify-center sm:gap-4 md:my-8 md:gap-5">
                    <button
                        className="flex flex-shrink-0 items-center gap-1 rounded-[8px] px-2 py-1.5 text-white transition-all duration-200 ease-in-out sm:rounded-[10px] sm:px-3 sm:py-2 opacity-50 hover:opacity-75 active:opacity-100 hover:scale-105 active:scale-95"
                        control-id="ControlID-5"
                    >
                        <svg
                            className="size-3 sm:size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.3253 22.7344C13.7846 23.0885 10.2174 23.0885 6.67669 22.7344C3.81561 22.4483 1.55264 20.1854 1.26653 17.3243C0.912459 13.7836 0.912459 10.2164 1.26653 6.67571C1.55264 3.81463 3.81561 1.55166 6.67669 1.26555C10.2174 0.911483 13.7846 0.911483 17.3253 1.26555C20.1863 1.55166 22.4493 3.81463 22.7354 6.67572C23.0895 10.2164 23.0895 13.7836 22.7354 17.3243C22.4493 20.1854 20.1863 22.4483 17.3253 22.7344ZM12 18C10.8133 18 9.65327 17.6481 8.66658 16.9888C7.67988 16.3295 6.91085 15.3925 6.45673 14.2961C6.0026 13.1997 5.88378 11.9933 6.11529 10.8295C6.3468 9.66557 6.91825 8.59648 7.75736 7.75736C8.59648 6.91825 9.66557 6.3468 10.8295 6.11529C11.9933 5.88378 13.1997 6.0026 14.2961 6.45673C15.3925 6.91085 16.3295 7.67988 16.9888 8.66658C17.6481 9.65327 18 10.8133 18 12C17.9982 13.5907 17.3655 15.1158 16.2407 16.2407C15.1158 17.3655 13.5907 17.9982 12 18ZM12 16C11.2089 16 10.4355 15.7654 9.77772 15.3259C9.11992 14.8864 8.60723 14.2616 8.30448 13.5307C8.00173 12.7998 7.92252 11.9956 8.07686 11.2196C8.2312 10.4437 8.61216 9.73098 9.17157 9.17157C9.73098 8.61216 10.4437 8.2312 11.2196 8.07686C11.9956 7.92252 12.7998 8.00173 13.5307 8.30448C14.2616 8.60723 14.8864 9.11992 15.3259 9.77772C15.7654 10.4355 16 11.2089 16 12C15.9988 13.0605 15.577 14.0772 14.8271 14.8271C14.0772 15.577 13.0605 15.9988 12 16ZM18.5 7C18.2033 7 17.9133 6.91203 17.6666 6.7472C17.42 6.58238 17.2277 6.34811 17.1142 6.07403C17.0007 5.79994 16.9709 5.49834 17.0288 5.20736C17.0867 4.91639 17.2296 4.64912 17.4393 4.43934C17.6491 4.22956 17.9164 4.0867 18.2074 4.02882C18.4983 3.97094 18.7999 4.00065 19.074 4.11418C19.3481 4.22771 19.5824 4.41997 19.7472 4.66665C19.912 4.91332 20 5.20333 20 5.5C20 5.89783 19.842 6.27936 19.5607 6.56066C19.2794 6.84197 18.8978 7 18.5 7Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <div className="text-xs font-medium sm:text-sm">
                            Instagram Story
                        </div>
                    </button>
                    <button
                        className="flex flex-shrink-0 items-center gap-1 rounded-[8px] px-2 py-1.5 text-white transition-all duration-200 ease-in-out sm:rounded-[10px] sm:px-3 sm:py-2 opacity-50 hover:opacity-75 active:opacity-100 hover:scale-105 active:scale-95"
                        control-id="ControlID-6"
                    >
                        <svg
                            className="size-3 sm:size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.67572 22.7344C10.2164 23.0885 13.7836 23.0885 17.3243 22.7344C20.1854 22.4483 22.4483 20.1854 22.7344 17.3243C23.0885 13.7836 23.0885 10.2164 22.7344 6.67572C22.4483 3.81463 20.1854 1.55166 17.3243 1.26555C13.7836 0.911483 10.2164 0.911483 6.67571 1.26555C3.81463 1.55166 1.55166 3.81463 1.26555 6.67571C0.911483 10.2164 0.911483 13.7836 1.26555 17.3243C1.55166 20.1854 3.81463 22.4483 6.67572 22.7344ZM6.16465 18H8.95143V9.90327H6.16465V18ZM7.53997 8.79766H7.55813C8.52995 8.79766 9.13476 8.17598 9.13476 7.399C9.11661 6.60449 8.52995 6 7.57664 6C6.62332 6 6 6.60449 6 7.399C6 8.17598 6.60481 8.79766 7.53997 8.79766ZM16.2136 18H19V13.3574C19 10.8704 17.6252 9.71324 15.7917 9.71324C14.3132 9.71324 13.6506 10.498 13.2803 11.0497V9.90327H10.4937C10.5302 10.6629 10.4937 18 10.4937 18H13.2803V13.4784C13.2803 13.2365 13.2983 12.9947 13.372 12.8217C13.5734 12.3382 14.0319 11.8375 14.8017 11.8375C15.8101 11.8375 16.2136 12.5799 16.2136 13.6684V18Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <div className="text-xs font-medium sm:text-sm">
                            LinkedIn Post
                        </div>
                    </button>
                    <button
                        className="flex flex-shrink-0 items-center gap-1 rounded-[8px] px-2 py-1.5 text-white transition-all duration-200 ease-in-out sm:rounded-[10px] sm:px-3 sm:py-2 bg-black/20 hover:bg-black/30 active:bg-black/40 hover:scale-105 active:scale-95"
                        control-id="ControlID-7"
                    >
                        <svg
                            className="size-3 sm:size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.67572 22.7344C10.2164 23.0885 13.7836 23.0885 17.3243 22.7344C20.1854 22.4483 22.4483 20.1854 22.7344 17.3243C23.0885 13.7836 23.0885 10.2164 22.7344 6.67572C22.4483 3.81463 20.1854 1.55166 17.3243 1.26555C13.7836 0.911483 10.2164 0.911483 6.67571 1.26555C3.81463 1.55166 1.55166 3.81463 1.26555 6.67571C0.911483 10.2164 0.911483 13.7836 1.26555 17.3243C1.55166 20.1854 3.81463 22.4483 6.67572 22.7344ZM10.3742 12.8721V19H13.3006V12.8836H15.4785L15.8957 10.3475H13.3006V8.70082C13.3006 8.00656 13.6626 7.32951 14.8221 7.32951H16V5.17213C16 5.17213 14.9325 5 13.908 5C11.7669 5 10.3742 6.21066 10.3742 8.4082V10.3418H8V12.8721H10.3742Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <div className="text-xs font-medium sm:text-sm">
                            Facebook Post
                        </div>
                    </button>
                    <button
                        className="flex flex-shrink-0 items-center gap-1 rounded-[8px] px-2 py-1.5 text-white transition-all duration-200 ease-in-out sm:rounded-[10px] sm:px-3 sm:py-2 opacity-50 hover:opacity-75 active:opacity-100 hover:scale-105 active:scale-95"
                        control-id="ControlID-8"
                    >
                        <svg
                            className="size-3 sm:size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.3253 22.7344C13.7846 23.0885 10.2174 23.0885 6.67669 22.7344C3.81561 22.4483 1.55264 20.1854 1.26653 17.3243C0.912459 13.7836 0.912459 10.2164 1.26653 6.67571C1.55264 3.81463 3.81561 1.55166 6.67669 1.26555C10.2174 0.911483 13.7846 0.911483 17.3253 1.26555C20.1863 1.55166 22.4493 3.81463 22.7354 6.67572C23.0895 10.2164 23.0895 13.7836 22.7354 17.3243C22.4493 20.1854 20.1863 22.4483 17.3253 22.7344ZM12 18C10.8133 18 9.65327 17.6481 8.66658 16.9888C7.67988 16.3295 6.91085 15.3925 6.45673 14.2961C6.0026 13.1997 5.88378 11.9933 6.11529 10.8295C6.3468 9.66557 6.91825 8.59648 7.75736 7.75736C8.59648 6.91825 9.66557 6.3468 10.8295 6.11529C11.9933 5.88378 13.1997 6.0026 14.2961 6.45673C15.3925 6.91085 16.3295 7.67988 16.9888 8.66658C17.6481 9.65327 18 10.8133 18 12C17.9982 13.5907 17.3655 15.1158 16.2407 16.2407C15.1158 17.3655 13.5907 17.9982 12 18ZM12 16C11.2089 16 10.4355 15.7654 9.77772 15.3259C9.11992 14.8864 8.60723 14.2616 8.30448 13.5307C8.00173 12.7998 7.92252 11.9956 8.07686 11.2196C8.2312 10.4437 8.61216 9.73098 9.17157 9.17157C9.73098 8.61216 10.4437 8.2312 11.2196 8.07686C11.9956 7.92252 12.7998 8.00173 13.5307 8.30448C14.2616 8.60723 14.8864 9.11992 15.3259 9.77772C15.7654 10.4355 16 11.2089 16 12C15.9988 13.0605 15.577 14.0772 14.8271 14.8271C14.0772 15.577 13.0605 15.9988 12 16ZM18.5 7C18.2033 7 17.9133 6.91203 17.6666 6.7472C17.42 6.58238 17.2277 6.34811 17.1142 6.07403C17.0007 5.79994 16.9709 5.49834 17.0288 5.20736C17.0867 4.91639 17.2296 4.64912 17.4393 4.43934C17.6491 4.22956 17.9164 4.0867 18.2074 4.02882C18.4983 3.97094 18.7999 4.00065 19.074 4.11418C19.3481 4.22771 19.5824 4.41997 19.7472 4.66665C19.912 4.91332 20 5.20333 20 5.5C20 5.89783 19.842 6.27936 19.5607 6.56066C19.2794 6.84197 18.8978 7 18.5 7Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <div className="text-xs font-medium sm:text-sm">
                            Instagram Post
                        </div>
                    </button>
                    <button
                        className="flex flex-shrink-0 items-center gap-1 rounded-[8px] px-2 py-1.5 text-white opacity-50 sm:rounded-[10px] sm:px-3 sm:py-2"
                        control-id="ControlID-9"
                    >
                        <div className="text-xs font-medium sm:text-sm">+ more</div>
                    </button>
                </div>

                <div className="w-full flex justify-center relative -bottom-12 md:scale-100 scale-90">
                    <div className="flex flex-col rounded-lg overflow-hidden w-fit">
                        <div className="flex justify-start items-center text-white backdrop-blur-lg p-3 gap-2 z-10 bg-white/20"
                        >
                            <svg
                                className="size-3 sm:size-4 ml-2"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.67572 22.7344C10.2164 23.0885 13.7836 23.0885 17.3243 22.7344C20.1854 22.4483 22.4483 20.1854 22.7344 17.3243C23.0885 13.7836 23.0885 10.2164 22.7344 6.67572C22.4483 3.81463 20.1854 1.55166 17.3243 1.26555C13.7836 0.911483 10.2164 0.911483 6.67571 1.26555C3.81463 1.55166 1.55166 3.81463 1.26555 6.67571C0.911483 10.2164 0.911483 13.7836 1.26555 17.3243C1.55166 20.1854 3.81463 22.4483 6.67572 22.7344ZM10.3742 12.8721V19H13.3006V12.8836H15.4785L15.8957 10.3475H13.3006V8.70082C13.3006 8.00656 13.6626 7.32951 14.8221 7.32951H16V5.17213C16 5.17213 14.9325 5 13.908 5C11.7669 5 10.3742 6.21066 10.3742 8.4082V10.3418H8V12.8721H10.3742Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <span className="text-sm">Facebook post</span>
                        </div>
                        <div className="w-[416px] h-[260px]"
                            style={{
                                backgroundImage: `url('/tweet.png')`,
                                backgroundSize: 'cover',
                            }}
                        >


                        </div>
                    </div>
                </div>

            </div></>
  )
}
