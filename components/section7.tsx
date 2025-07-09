"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Button } from "./ui/button"

export default function AppDownloadSection() {
    const [activeApp, setActiveApp] = useState<"driver" | "passenger">("driver")
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }
    return (
        <section className="relative bg-white min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/backgournd.png"
                    alt="Geometric background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Additional overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh]">
                    {/* Left Content */}
                    <motion.div
                        className="space-y-6 lg:space-y-8 text-left lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {/* Tagline */}
                        <motion.p
                            className="text-[#F80F0F] text-sm sm:text-base lg:text-lg font-medium font-outfit"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Available for iOS and Android devices
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-white mb-4 sm:mb-6 font-bebas tracking-wide leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            READY TO RIDE OR DRIVE WITH <span className="text-[#F80F0F]">RIDEN</span>?
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
                            className="text- text-white sm:text-lg lg:text-xl font-outfit leading-relaxed mb-6 sm:mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Download the app and start your journey — whether you're moving or earning.
                        </motion.p>

                        {/* App Toggle Buttons */}
                        <motion.div
                            className="flex flex-row sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-start lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                onClick={() => setActiveApp("driver")}
                                className={`px-6 sm:px-8 py-3 sm:py-4   text-sm sm:text-base font-outfit transition-all duration-300 ${activeApp === "driver"
                                    ? "border-b-2 border-[#F80F0F] text-white shadow-lg"
                                    : "bg-transparent border-b-2 border-gray-400 text-gray-200 hover:border-[#F80F0F] hover:text-[#F80F0F]"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Driver App
                            </motion.button>

                            <motion.button
                                onClick={() => setActiveApp("passenger")}
                                className={`px-6 sm:px-8 py-3 sm:py-4   text-sm sm:text-base font-outfit transition-all duration-300 ${activeApp === "passenger"
                                    ? " border-b-2 border-[#F80F0F] text-white shadow-lg"
                                    : "bg-transparent border-b-2 border-gray-400 text-gray-200 hover:border-[#F80F0F] hover:text-[#F80F0F]"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Passenger App
                            </motion.button>
                        </motion.div>

                        {/* App Store Buttons */}
                        <motion.div
                            className="flex flex-row  sm:flex-row gap-3 justify-center sm:gap-4 lg:gap-6 mb-12 sm:mb-16 lg:mb-20 w-full max-w-md sm:max-w-none"
                            variants={itemVariants}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="w-full sm:w-auto mb-5"
                            >

                                <Button className=" bg-transparent hover:bg-transparent mt-5 text-white   px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-xl flex items-center justify-center sm:justify-start space-x-3 lg:space-x-4 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 w-full sm:w-auto">
                                    <Image src={"/googlePlay.png"} width={200} height={200} alt="googlePlay" />
                                    {/* <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg lg:text-xl">▶</span>
              </div>
              <div className="text-left">
                <div className="text-xs lg:text-sm text-gray-400">GET IT ON</div>
                <div className="font-bold text-sm lg:text-base">Google Play</div>
              </div> */}
                                </Button>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "tween", stiffness: 300 }}
                                className="w-full sm:w-auto"
                            >
                                <Button className=" bg-transparent hover:bg-transparent mt-5  px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-xl flex items-center justify-center sm:justify-start space-x-3 lg:space-x-4 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 w-full sm:w-auto">
                                    <Image src={"/appleStore.png"} width={200} height={200} alt="googlePlay" />

                                    {/* <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg lg:text-xl">🍎</span>
              </div>
              <div className="text-left">
                <div className="text-xs lg:text-sm text-gray-400">Download on the</div>
                <div className="font-bold text-sm lg:text-base">App Store</div>
              </div> */}
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Phone Mockup */}
                    <motion.div
                        className="relative flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            {/* Enhanced Phone Mockup using provided image as reference */}
                            <motion.div
                                className="relative w-64 sm:w-80 lg:w-96 h-auto"
                                animate={{
                                    y: [0, -10, 0],
                                    rotateY: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            >
                                {/* Phone Shadow with red accent */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-black/40 rounded-[3rem] blur-xl transform translate-x-6 translate-y-6 rotate-12"></div>

                                {/* Phone Body with enhanced styling */}
                                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800 transform rotate-12 hover:rotate-6 transition-transform duration-500">
                                    {/* Red accent border */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#F80F0F] to-red-600 rounded-[3rem] p-1">
                                        <div className="w-full h-full bg-black rounded-[2.8rem]"></div>
                                    </div>

                                    {/* Screen */}
                                    <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5] z-10">
                                        {/* Status Bar */}
                                        <div className="absolute top-0 left-0 right-0 h-12 bg-white flex items-center justify-between px-6 z-20">
                                            <span className="text-black text-sm font-semibold">9:41</span>
                                            <div className="flex items-center space-x-1">
                                                <div className="w-4 h-2 bg-black rounded-sm"></div>
                                                <div className="w-4 h-2 bg-black rounded-sm"></div>
                                                <div className="w-6 h-3 border-2 border-black rounded-sm">
                                                    <div className="w-full h-full bg-black rounded-sm"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* App Content */}
                                        <div className="pt-12 h-full bg-gradient-to-b from-gray-50 to-white relative">
                                            {/* App Header */}
                                            <div className="px-6 py-4">
                                                <div className="flex items-center justify-between mb-6">
                                                    <h3 className="text-2xl font-bold text-black font-bebas">RIDEN</h3>
                                                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Main Content - Ride with Ease */}
                                            <div className="px-6 flex-1 flex flex-col justify-center">
                                                <div className="text-center mb-8">
                                                    {/* Illustration placeholder matching the provided mockup */}
                                                    <div className="w-40 h-32 mx-auto mb-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                                        {/* Car and people illustration representation */}
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div className="w-20 h-12 bg-[#F80F0F] rounded-lg flex items-center justify-center">
                                                                <span className="text-white text-xl">🚗</span>
                                                            </div>
                                                            <div className="absolute -left-2 top-2 w-6 h-6 bg-blue-400 rounded-full"></div>
                                                            <div className="absolute -right-2 bottom-2 w-6 h-6 bg-green-400 rounded-full"></div>
                                                        </div>
                                                    </div>

                                                    <h4 className="text-xl font-bold text-[#F80F0F] mb-2 font-bebas">RIDE WITH EASE</h4>
                                                    <p className="text-gray-600 text-sm font-outfit px-4">
                                                        Experience stress-free travel with our reliable ride-sharing platform.
                                                    </p>
                                                </div>

                                                {/* CTA Button with red accent */}
                                                <div className="mb-8 px-4">
                                                    <div className="bg-[#F80F0F] rounded-full py-4 px-6 flex items-center justify-between shadow-lg">
                                                        <span className="text-white font-bold font-outfit">
                                                            {activeApp === "driver" ? "Start Driving" : "Book a Ride"}
                                                        </span>
                                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                                            <span className="text-[#F80F0F] text-lg">→</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Notch */}
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30"></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Enhanced Floating Elements */}
                            {/* <motion.div
                                className="absolute -top-4 -right-4 w-12 h-12 bg-[#F80F0F] rounded-full flex items-center justify-center shadow-lg z-20"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            >
                                <span className="text-white text-lg">📱</span>
                            </motion.div> */}

                            {/* <motion.div
                                className="absolute -bottom-6 -left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-20"
                                animate={{
                                    y: [0, -8, 0],
                                    x: [0, 4, 0],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                            >
                                <span className="text-[#F80F0F] text-lg">⭐</span>
                            </motion.div> */}

                            {/* Additional red accent elements */}
                            <motion.div
                                className="absolute top-1/2 -left-8 w-6 h-6 bg-[#F80F0F] rounded-full opacity-60"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.6, 1, 0.6],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
