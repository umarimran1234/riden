"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function EarnWithRiden() {
    return (
        <section className="bg-white  py-8 sm:py-12 px-4 sm:px-6 md:px-12   min-h-screen flex flex-col justify-center">
            <div className="w-full container" >

                <h2 className="text-4xl mb-3 sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bebas text-black text-start lg:text-left">
                    Earn with <span className="text-[#F80F0F]">Riden</span> — Drive on Your Terms
                </h2>
                <p className="text-black font-outfit text-base">Choose your own hours, meet great people, and earn weekly with flexibility.</p>
            </div>
            <div className="max-w-7xl mt-6 sm:mt-9 mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
                {/* Left Side: Image */}
                <motion.div
                    className="flex-1 w-full"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full max-w-lg mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-md">
                        <Image
                            src={"/girl.png"} // replace with your image path
                            alt="Man in car"
                            className="object-cover w-full h-full"
                            width={500}
                            height={350}
                        />
                    </div>
                </motion.div>

                {/* Right Side: Text Content */}
                <motion.div
                    className="flex-1 space-y-4 sm:space-y-6 text-left lg:text-left"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                >
                    <p className="text-xs sm:text-sm lg:text-sm uppercase font-outfit text-[#F80F0F]">
                        Earn Money as a Riden Driver
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl uppercase font-bebas text-black">
                        Become a Riden Driver Today
                    </h2>
                    <p className="text-sm sm:text-base lg:text-sm font-outfit text-black leading-relaxed">
                        Join thousands of Riden drivers who get consistent ride requests and flexible hours. Whether you drive
                        part-time or full-time, Riden gives you the tools to grow.
                    </p>

                    {/* App Store Buttons */}
                    <div className="flex  sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 justify-start lg:justify-start">
                        <Image
                            src={"/googlePlay.png"}
                            alt="Google Play"
                            width={140}
                            height={45}
                            className="w-32 sm:w-35 md:w-40 h-auto"
                        />
                        <Image
                            src={"/appStore.png"}
                            alt="App Store"
                            width={140}
                            height={45}
                            className="w-32 sm:w-35 md:w-40 h-auto"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
