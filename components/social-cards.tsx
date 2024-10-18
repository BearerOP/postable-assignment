'use client'

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function SocialCards() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const cardVariants = {
        hidden: { rotate: 0, x: 0, y: 0 },
        visible: (index: number) => ({
            rotate: 3,
            x: "8rem",
            y: `${-index * 2}rem`,
            transition: { 
                duration: 0.3,
                delay: index * 0.2
            }
        })
    };

    const Card = ({ title, icon, bgColor, bgImage, index }: { title: string; icon: JSX.Element; bgColor: string; bgImage: string; index: number }) => (
        <motion.div
            className="h-[20rem] z-10 sm:h-[26rem] md:h-[30rem] lg:h-[34rem] w-full sm:w-[30rem] md:w-[36rem] lg:w-[44rem] relative overflow-hidden mt-[5rem] sm:mt-[7rem] md:mt-[8rem] lg:mt-[10rem]"
            variants={cardVariants}
            custom={index}
            style={{ 
                marginLeft: index === 0 ? '0' : '-2rem',
                zIndex: -(4 - index)
            }}
        >
            <h4 className={`flex items-center gap-2 rounded-t-2xl sm:rounded-t-3xl px-3 py-3 text-base sm:text-lg font-medium md:rounded-t-[40px] lg:rounded-t-[50px] md:px-8 lg:px-12 md:py-6 lg:py-8 ${bgColor}`}>
                {React.cloneElement(icon, { className: "size-3 sm:size-4 md:size-6 lg:size-10 text-white" })}
                <span className="text-base sm:text-lg md:text-2xl lg:text-3xl font-medium tracking-[-0.5px] text-nowrap text-white">{title}</span>
            </h4>
            <div 
                className="h-full w-full bg-cover"
                style={{
                    backgroundImage: `url('${bgImage}')`
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
        </motion.div>
    );

    return (
        <div className="relative z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
            <div ref={containerRef} className="cards overflow-x-hidden overflow-y-hidden">
                <motion.div 
                    className="flex items-center sm:items-start px-4 sm:px-8 md:px-12 lg:px-16 relative "
                    initial="hidden"
                    animate={controls}
                >
                    <Card 
                        title="LinkedIn Post"
                        icon={
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.67572 22.7344C10.2164 23.0885 13.7836 23.0885 17.3243 22.7344C20.1854 22.4483 22.4483 20.1854 22.7344 17.3243C23.0885 13.7836 23.0885 10.2164 22.7344 6.67572C22.4483 3.81463 20.1854 1.55166 17.3243 1.26555C13.7836 0.911483 10.2164 0.911483 6.67571 1.26555C3.81463 1.55166 1.55166 3.81463 1.26555 6.67571C0.911483 10.2164 0.911483 13.7836 1.26555 17.3243C1.55166 20.1854 3.81463 22.4483 6.67572 22.7344ZM6.16465 18H8.95143V9.90327H6.16465V18ZM7.53997 8.79766H7.55813C8.52995 8.79766 9.13476 8.17598 9.13476 7.399C9.11661 6.60449 8.52995 6 7.57664 6C6.62332 6 6 6.60449 6 7.399C6 8.17598 6.60481 8.79766 7.53997 8.79766ZM16.2136 18H19V13.3574C19 10.8704 17.6252 9.71324 15.7917 9.71324C14.3132 9.71324 13.6506 10.498 13.2803 11.0497V9.90327H10.4937C10.5302 10.6629 10.4937 18 10.4937 18H13.2803V13.4784C13.2803 13.2365 13.2983 12.9947 13.372 12.8217C13.5734 12.3382 14.0319 11.8375 14.8017 11.8375C15.8101 11.8375 16.2136 12.5799 16.2136 13.6684V18Z" fill="currentColor" />
                            </svg>
                        }
                        bgColor="bg-[#80C0EE]"
                        bgImage="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-4_cgvesv.webp"
                        index={0}
                    />
                    <Card 
                        title="Instagram Story"
                        icon={
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.954 4.57c-.885.39-1.83.654-2.825.775 1.014-.61 1.794-1.574 2.163-2.723-.951.555-2.005.96-3.127 1.184-.897-.955-2.178-1.554-3.594-1.554-2.717 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.715-2.165-10.141-5.144-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.828-.413.11-.847.17-1.295.17-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.418-1.68 1.316-3.809 2.102-6.102 2.102-.39 0-.778-.023-1.17-.067 2.188 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.497 14.002-13.986 0-.21 0-.42-.015-.63.961-.694 1.8-1.56 2.462-2.548l-.047-.02z" fill="currentColor" />
                            </svg>
                        }
                        bgColor="bg-[#e7c694]"
                        bgImage="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-4_cgvesv.webp"
                        index={1}
                    />
                    <Card 
                        title="Twitter Post"
                        icon={
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0c-3.322 0-3.727.012-5.022.073-1.295.061-2.188.27-2.973.575a5.93 5.93 0 00-2.158 1.413 5.935 5.935 0 00-1.412 2.157c-.306.785-.515 1.678-.576 2.973C0 9.322 0 9.727 0 13.049c0 3.322.012 3.727.073 5.022.061 1.295.27 2.188.575 2.973a5.936 5.936 0 001.413 2.158 5.937 5.937 0 002.157 1.412c.785.306 1.678.515 2.973.576 1.295.061 1.7.073 5.022.073s3.727-.012 5.022-.073c1.295-.061 2.188-.27 2.973-.575a5.93 5.93 0 002.158-1.413 5.937 5.937 0 001.412-2.157c.306-.785.515-1.678.576-2.973.061-1.295.073-1.7.073-5.022s-.012-3.727-.073-5.022c-.061-1.295-.27-2.188-.575-2.973a5.93 5.93 0 00-1.413-2.158 5.936 5.936 0 00-2.157-1.412c-.785-.306-1.678-.515-2.973-.576C15.727.012 15.322 0 12 0zM12 5.837c-3.405 0-6.163 2.758-6.163 6.163S8.595 18.163 12 18.163s6.163-2.758 6.163-6.163S15.405 5.837 12 5.837zm0 10.163c-2.206 0-4-1.794-4-4 0-2.206 1.794-4 4-4s4 1.794 4 4c0 2.206-1.794 4-4 4zm4.834-8.756a1.457 1.457 0 100-2.915 1.457 1.457 0 000 2.915z" fill="currentColor" />
                            </svg>
                        }
                        bgColor="bg-[#FF5F5F]"
                        bgImage="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp"
                        index={2}
                    />
                    <Card 
                        title="Instagram Post"
                        icon={
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0c-3.322 0-3.727.012-5.022.073-1.295.061-2.188.27-2.973.575a5.93 5.93 0 00-2.158 1.413 5.935 5.935 0 00-1.412 2.157c-.306.785-.515 1.678-.576 2.973C0 9.322 0 9.727 0 13.049c0 3.322.012 3.727.073 5.022.061 1.295.27 2.188.575 2.973a5.936 5.936 0 001.413 2.158 5.937 5.937 0 002.157 1.412c.785.306 1.678.515 2.973.576 1.295.061 1.7.073 5.022.073s3.727-.012 5.022-.073c1.295-.061 2.188-.27 2.973-.575a5.93 5.93 0 002.158-1.413 5.937 5.937 0 001.412-2.157c.306-.785.515-1.678.576-2.973.061-1.295.073-1.7.073-5.022s-.012-3.727-.073-5.022c-.061-1.295-.27-2.188-.575-2.973a5.93 5.93 0 00-1.413-2.158 5.936 5.936 0 00-2.157-1.412c-.785-.306-1.678-.515-2.973-.576C15.727.012 15.322 0 12 0zM12 5.837c-3.405 0-6.163 2.758-6.163 6.163S8.595 18.163 12 18.163s6.163-2.758 6.163-6.163S15.405 5.837 12 5.837zm0 10.163c-2.206 0-4-1.794-4-4 0-2.206 1.794-4 4-4s4 1.794 4 4c0 2.206-1.794 4-4 4zm4.834-8.756a1.457 1.457 0 100-2.915 1.457 1.457 0 000 2.915z" fill="currentColor" />
                            </svg>
                        }
                        bgColor="bg-[#77be7e]"
                        bgImage="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp"
                        index={3}
                    />
                </motion.div>
            </div>
        </div>
    );
}