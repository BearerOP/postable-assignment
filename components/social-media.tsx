import { Check } from "lucide-react";
import SocialCards from "./social-cards";
export default function SocialMedia() {
  return (
    <>
      <div className="z-20 relative mx-auto flex w-full max-w-6xl flex-col items-start px-4 pt-7 md:pt-24 xl:pe-4 xl:ps-0">
        <h3 className="mb-5 max-w-sm text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
          Optimized for all social media
        </h3>
        <div className="flex flex-col gap-4 md:flex-row">
          <p className="max-w-xl text-s leading-[20px] text-neutral-700 md:text-balance md:text-md">
            We&apos;ve meticulously designed each template to meet the specific
            guidelines and format requirements of all social media platforms. By
            preserving safe zones and adhering to platform standards, we ensure
            that your posts will always be visually striking, no matter where
            you share them.
          </p>
          <ul className="flex flex-row gap-4 md:flex-col md:gap-1.5">
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-lg">
            <Check className="text-purple-400 size-4" />
              Readable
            </li>
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-lg">
            <Check className="text-purple-400 size-4" />
              Visible
            </li>
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-lg">
              <Check className="text-purple-400 size-4" /> Accessible
            </li>
          </ul>
        </div>
      </div>
      <SocialCards/>
    </>
  );
}
