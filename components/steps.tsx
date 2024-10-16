"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer } from "@/components/ui/3d-card";
export default function Steps() {
  return (
    <>
      <div className="mx-auto flex h-fit w-full max-w-6xl flex-col mt-8 gap-3.5 py-8 sm:gap-4 sm:py-12 md:gap-6 md:py-16 lg:gap-8 lg:py-24">
        <h3 className="px-4 text-xl font-medium tracking-[-0.2px] text-neutral-800 sm:text-2xl md:text-[32px] md:leading-[42px] md:tracking-[-1px]">
          How it works?
        </h3>
        <div className="flex w-full flex-col gap-y-6 sm:flex-row sm:justify-evenly sm:gap-x-4 sm:overflow-x-auto lg:overflow-visible">
          <CardContainer className="sm:w-full ">
            <CardBody className="bg-neutral-200/70 relative group/card min-w-72 h-auto rounded-3xl p-2 shadow-sm">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-1_grbgfh.webp"
                height="1000"
                width="1000"
                className="h-40 w-full rounded-3xl shadow-sm sm:h-60"
                alt="thumbnail"
              />
              <div className="flex flex-col px-4 pb-2 pt-4 sm:pb-6 sm:pt-6 md:px-6 md:pb-16 md:pt-8">
                <span className="text-xs font-semibold uppercase text-neutral-400 md:text-md">
                  Step 1
                </span>
                <h1 className="mb-3 text-sm font-medium text-neutral-800 sm:text-md md:mb-5 md:text-lg">
                  Copy tweet&#39;s link
                </h1>
                <p className="text-xs text-neutral-500 sm:text-sm">
                On X/Twitter, click the share icon at the bottom-right of the tweet and select &#39;Copy Link.&#39; Then, paste the link into the box above.


                </p>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="sm:w-full ">
            <CardBody className="bg-neutral-200/70 relative group/card min-w-72 h-auto rounded-3xl p-2 shadow-sm">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-2_n2egsf.webp"
                height="1000"
                width="1000"
                className="h-40 w-full rounded-3xl shadow-sm sm:h-60"
                alt="thumbnail"
              />
              <div className="flex flex-col px-4 pb-2 pt-4 sm:pb-6 sm:pt-6 md:px-6 md:pb-16 md:pt-8">
                <span className="text-xs font-semibold uppercase text-neutral-400 md:text-md">
                  Step 2
                </span>
                <h1 className="mb-3 text-sm font-medium text-neutral-800 sm:text-md md:mb-5 md:text-lg">
                  Customize Design
                </h1>
                <p className="text-xs text-neutral-500 sm:text-sm">
                  Choose social media sizes, adjust the style, set the border
                  radius, and customize the design to your liking and preferred
                  branding with a single click.
                </p>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="sm:w-full ">
            <CardBody className="bg-neutral-200/70 relative group/card min-w-72 h-auto rounded-3xl p-2 shadow-sm">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-3_d477fk.webp"
                height="1000"
                width="1000"
                className="h-40 w-full rounded-3xl shadow-sm sm:h-60"
                alt="thumbnail"
              />
              <div className="flex flex-col px-4 pb-2 pt-4 sm:pb-6 sm:pt-6 md:px-6 md:pb-16 md:pt-8">
                <span className="text-xs font-semibold uppercase text-neutral-400 md:text-md">
                  Step 3
                </span>
                <h1 className="mb-3 text-sm font-medium text-neutral-800 sm:text-md md:mb-5 md:text-lg">
                  Export!
                </h1>
                <p className="text-xs text-neutral-500 sm:text-sm">
                  Simply export and publish your meticulously crafted posts,
                  tailored to meet each social media’s standards and format.
                </p>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </>
  );
}
