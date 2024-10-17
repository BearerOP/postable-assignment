import { ArrowRight } from "lucide-react";
import React from "react";
import Link from 'next/link'

interface GetStartedProps {
  scrollToInput: () => void; // Type for the scroll function
}

const GetStarted: React.FC<GetStartedProps> = ({ scrollToInput }) => {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-12 md:gap-12 md:py-24 xl:pe-4 xl:ps-0 mt-8 md:mt-0">
      <p className="relative max-w-4xl text-balance text-3xl font-normal tracking-[-0.4px] text-neutral-400 md:text-[40px] md:leading-[42px]">
        We help you create postable content that not only
        <span className="text-neutral-800"> looks great </span>but also
        <span className="text-neutral-800"> engages your audience</span>.
      </p>
      <Link
        className="relative inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-neutral-900 px-4 py-2.5 text-md font-semibold leading-6 tracking-[-0.3px] text-white transition-colors hover:bg-neutral-800 md:px-6 md:py-3 md:text-lg"
        href="#input"
        onClick={scrollToInput} // Add scroll function here
      >
        Get Started for FREE{" "}
        <ArrowRight />
      </Link>
    </section>
  );
};

export default GetStarted;
