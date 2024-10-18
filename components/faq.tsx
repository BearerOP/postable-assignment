import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <>
      <header className="mx-auto w-full max-w-6xl px-4 md:pt-24 xl:pe-4 xl:ps-0">
        <h3 className="text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
          FAQ
        </h3>
        <p className="hidden text-xl font-medium text-neutral-950 md:mb-9 md:mt-4 md:block">
          Let us help you with some of your frequently asked questions.
        </p>
      </header>

      <div className="mx-auto max-w-6xl relative flex w-full gap-4 md:flex-row md:gap-24 pb-24">
        <div>
          <span className="text-lg font-medium text-muted-foreground">
            Could not find your answer?
          </span>
          <Link
            className="flex items-center w-fit gap-1 text-sm font-medium text-purple-500"
            href="/"
          >
            <p>Ask a Question</p>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="w-full md:ms-auto md:max-w-xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-normal text-neutral-950 md:text-xl md:font-medium">
                Is Postable free to use?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Yes, it is completely free and unlimited! You can convert as
                many tweets into social media images as you had like without any
                restrictions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-normal text-neutral-950 md:text-xl md:font-medium">
                What social media platforms does this tool support?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Postable currently supports Twitter, Facebook, Instagram,
                LinkedIn, and TikTok. We are constantly working on adding more
                platforms to our list.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-normal text-neutral-950 md:text-xl md:font-medium">
                Can I customize the created images?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Yes, you can customize the created images by adding your own
                text, images, and more. You can also choose from a variety of
                templates to make your images stand out.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-normal text-neutral-950 md:text-xl md:font-medium">
                Do I need design skills to use this platform?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                No, you do not need any design skills to use this platform.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-normal text-neutral-950 md:text-xl md:font-medium">
              Do I need to know the format or size of each social media?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
              No, you do not need to know the format or size of each social media.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
