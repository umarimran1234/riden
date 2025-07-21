"use client"

import { motion } from "framer-motion"
import { Shield, Check, ShieldCheck } from "lucide-react"
import Image from "next/image"

export default function SafetySection() {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.p
                        className="text-[#F80F0F] text-sm sm:text-base lg:text-lg font-medium mb-3 sm:mb-4 font-outfit"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        We move you, safely
                    </motion.p>

                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-black mb-3 sm:mb-4 font-bebas tracking-wide leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        SAFETY IS AT THE CORE OF EVERY RIDE.
                    </motion.h2>

                    <motion.p
                        className="text-black text-base sm:text-lg lg:text-xl font-outfit"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Safety on every trip, powered by Riden.
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    className="bg-gray-100 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                        {/* Left Content */}
                        <motion.div
                            className="space-y-6 lg:space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Check Icon */}
                            <motion.div
                                className="flex items-center mb-6"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="">
                                    {/* <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500" /> */}
                                    <ShieldCheck color="red" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                                </div>



                                <div className="flex items-center ">
                                    <div className="w-26 sm:w-20 h-0.5 bg-black"></div>
                                    <div className="w-2 h-2 bg-black rounded-full"></div> {/* This is the dot */}
                                </div>
                            </motion.div>

                            {/* Main Title */}
                            <motion.h3

                                className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-black mb-4 sm:mb-6 font-bebas tracking-wide leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                viewport={{ once: true }}
                            >
                                EVERY JOURNEY BACKED BY SAFETY, TRUST,
                                <br />
                                AND ROUND-THE-CLOCK PROTECTION
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed font-outfit mb-6 sm:mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                viewport={{ once: true }}
                            >
                                Your safety is at the heart of every Riden trip. From real-time tracking and verified driver profiles to
                                24/7 emergency support and trained professionals behind the wheel, we ensure peace of mind for both
                                passengers and drivers — every ride, every moment.
                            </motion.p>

                            {/* CTA Button */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.0 }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    className="relative overflow-hidden bg-[#F80F0F] hover:bg-red-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg font-outfit transition-all duration-300 shadow-lg hover:shadow-xl group"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="relative h-5 sm:h-6 lg:h-7 flex items-center justify-center">
                                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                            Learn About Safety
                                        </span>
                                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                                            Safety Features
                                        </span>
                                    </div>
                                </motion.button>
                            </motion.div> */}
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            className="relative order-first lg:order-last"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                {/* Main Image */}
                                <div className="relative z-10">
                                    <Image
                                        src="/safty.png"
                                        alt="Smiling man in red shirt representing safety and trust"
                                        width={900}
                                        height={900}
                                        className="w-full  "
                                        priority
                                    />
                                </div>

                                {/* Background Shield Icon */}
                                <motion.div
                                    className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-12 z-0"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-100 rounded-full flex items-center justify-center opacity-60">
                                        <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500" />
                                    </div>
                                </motion.div>

                                {/* Floating Safety Badge */}
                                <motion.div
                                    className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 z-20"
                                    animate={{
                                        y: [0, -8, 0],
                                        x: [0, 4, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                >
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xs sm:text-sm font-bold text-gray-800 font-outfit">Verified Safe</div>
                                            <div className="text-xs text-gray-500 font-outfit">24/7 Protected</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
