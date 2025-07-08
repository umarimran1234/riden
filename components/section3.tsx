"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui/button"

export default function FastReliableSection() {
    return (
        <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image src="/Driver.jpg" alt="Car interior background" fill className="object-cover" priority />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Main Heading */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bebas text-white mb-4 sm:mb-6 lg:mb-8 font-bebas tracking-wide leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    FAST. RELIABLE. ALWAYS READY — THAT'S <span className="text-[#F80F0F]">RIDEN</span>.
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-1xl mb-8 sm:mb-10 lg:mb-12 font-outfit leading-relaxed  mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Wherever you go, Riden gets you there with ease and confidence — just a tap away.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    className="flex justify-center"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(255, 59, 59, 0.3)",
                    }}
                    whileTap={{
                        scale: 0.95,
                        boxShadow: "0 5px 15px rgba(255, 59, 59, 0.2)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                    }}

                >
                    <Button


                        className={`
          bg-[#F80F0F] 
          font-outfit
          hover:bg-[#F80F0F] 
          active:bg-[#F80F0F]
          text-white 
           
          px-8
          rounded-lg 
          border-0
          shadow-md
          transition-all 
          duration-200
          disabled:opacity-50 
          disabled:cursor-not-allowed
          disabled:hover:bg-[#F80F0F]
          text-base

          h-12
          flex
          items-center
          justify-center
        `}
                    >
                        <motion.span
                            initial={{ opacity: 1 }}
                            whileHover={{
                                opacity: 0.9,
                                letterSpacing: "0.5px",
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            Get Started
                        </motion.span>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
                className="absolute top-10 left-10 w-4 h-4 bg-[#F80F0F] rounded-full opacity-60"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-20 right-16 w-3 h-3 bg-white rounded-full opacity-40"
                animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />
        </section>
    )
}
