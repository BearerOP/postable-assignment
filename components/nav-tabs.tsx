'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardContainer } from "./ui/3d-card";

type TabContent = {
    title: string;
    description: string;
    features: string[];
    image: string;
};

const tabContents: Record<string, TabContent> = {
    individuals: {
        title: "For Individuals",
        description: "Postable helps individuals express themselves across multiple social media platforms with ease and creativity.",
        features: [
            "Personal Branding",
            "Easy Content Creation",
            "Cross-Platform Sharing",
            "Time-Saving Tools"
        ],
        image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061157/Individual_fe1fis.webp"
    },
    influencers: {
        title: "For Influencers",
        description: "For influencers, maintaining a consistent and visually appealing social media presence is crucial. Postable empowers you to convert your tweets into captivating images that align with your brand, helping you to keep your content fresh and engaging across all platforms.",
        features: [
            "Quick Post Creation",
            "Boosted Follower Engagement",
            "Consistent Multi-Platform Presence",
            "Content Diversification"
        ],
        image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061158/Influencers_x5kswv.webp"
    },
    businesses: {
        title: "For Businesses",
        description: "Postable streamlines your social media marketing efforts, allowing businesses to maintain a strong and consistent presence across multiple platforms efficiently.",
        features: [
            "Brand Consistency",
            "Time and Resource Efficiency",
            "Increased Reach and Engagement",
            "Analytics and Insights"
        ],
        image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061158/Businesses_tc1bbp.webp"
    }
};

export default function Navtabs() {
    const [activeTab, setActiveTab] = useState<keyof typeof tabContents>("individuals");

    return (
        <>
        <div className="max-w-6xl px-4 mx-auto">
            <section className="w-full md:flex 
        justify-center md:gap-8 py-12 md:py-24">
                <div className="w-full md:w-2/3">
                    <h2 className="max-w-sm text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
                        One Solution for All!
                    </h2>
                    <p className="mt-1 max-w-80 text-xs font-medium leading-[20px] text-neutral-700 md:mt-4 md:max-w-full md:text-2xl md:text-neutral-950">
                        Postable helps everyone to share their thoughts across multiple platforms
                    </p>
                    <div className="mt-6 md:mt-10">
                        <nav
                            role="tablist"
                            aria-label="User types"
                            className="inline-flex h-fit w-full items-center justify-center rounded-md bg-muted p-1 text-muted-foreground md:w-fit md:rounded-[20px]"
                        >
                            {Object.keys(tabContents).map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === tab}
                                    aria-controls={`${tab}-panel`}
                                    id={`${tab}-tab`}
                                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-[10px] px-4 py-2.5 text-sm font-medium ring-offset-background transition-all hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex-1 md:rounded-2xl md:px-10 md:py-4 md:text-lg ${activeTab === tab
                                        ? "bg-white text-foreground shadow-tab hover:text-neutral-950"
                                        : ""
                                        }`}
                                    onClick={() => setActiveTab(tab as keyof typeof tabContents)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>
                        {Object.entries(tabContents).map(([tab, content]) => (
                            <div
                                key={tab}
                                role="tabpanel"
                                aria-labelledby={`${tab}-tab`}
                                id={`${tab}-panel`}
                                className={`mt-4 md:mt-0 ${activeTab === tab ? "" : "hidden"}`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 0, }}
                                    animate={{ opacity: 1, y: 0, }}
                                    transition={{ duration: 0.3 }}
                                    className="me-auto max-w-xl"
                                >
                                    <h3 className="sr-only">{content.title}</h3>
                                    <p className="my-4 text-xs leading-[20px] text-neutral-600 md:py-14 md:text-lg">
                                        {content.description}
                                    </p>
                                    <ul className="relative flex flex-col items-start gap-2 md:gap-4">
                                        {content.features.map((feature, index) => (
                                            <li key={index} className="relative inline-flex flex-[0_0_auto] items-center gap-4">
                                                <div className="relative size-1.5 rounded bg-neutral-300 md:size-2" aria-hidden="true"></div>
                                                <div className="relative mt-[-1px] w-fit whitespace-nowrap text-sm font-normal leading-5 tracking-[-0.2px] text-neutral-600 md:text-md">
                                                
                                                    {feature}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 md:mt-0 md:w-1/3"
                >
                    <CardContainer className="sm:w-full ">
                        <Image
                            src={tabContents[activeTab].image}
                            alt={`Illustration for ${tabContents[activeTab].title}`}
                            width={400}
                            height={400}
                            className="w-full rounded-lg object-cover"
                        />
                    </CardContainer>
                </motion.div>
            </section>
        </div>
            <section className="relative py-12 md:py-24"><img src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726913723/engaging_uhqrqs.webp" alt="Engaging" className="w-full" draggable="false"/></section></>
    );
}

