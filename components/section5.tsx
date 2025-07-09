"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

interface Testimonial {
    id: number
    name: string
    title: string
    company: string
    testimonial: string
    rating: string
    avatar: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "MARVIN MCKINNEY",
        title: "Marketing Director",
        company: "UrbanWear",
        testimonial: "Easy and Quick Rides",
        rating:
            "Riden makes getting around so easy! I always find a driver within minutes, even during busy hours",
        avatar: "/Ellipse 8.png",
    },
    {
        id: 2,
        name: "DARRELL STEWARD",
        title: "Marketing Director",
        company: "UrbanWear",
        testimonial: "Safe and Reliable",
        rating:
            "Safe, fast, and affordable. I’ve never had a bad experience with Riden!",
        avatar: "/Ellipse 9.png",
    },
    {
        id: 3,
        name: "SARAH JOHNSON",
        title: "Product Manager",
        company: "TechCorp",
        testimonial: "Super Convenient App!",
        rating:
            "I love how I can track my driver and pay through the app. It saves me so much time and stress.",
        avatar: "/Ellipse 8.png",
    },
    // {
    //     id: 4,
    //     name: "MICHAEL CHEN",
    //     title: "Software Engineer",
    //     company: "StartupXYZ",
    //     testimonial: "HIGHLY RECOMMENDED!",
    //     rating:
    //         "Riden's commitment to safety and quality is evident in every ride. The drivers are well-trained, the vehicles are maintained excellently, and the customer service is top-notch. Definitely my go-to ride service!",
    //     avatar: "/Ellipse 9.png",
    // },
]

export default function TestimonialsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextSlide = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1))
    }

    const prevSlide = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1))
    }

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false)
        setCurrentIndex(index)
    }

    return (
        <section className="bg-[#F80F0F] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-12 lg:mb-16">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl  text-white mb-6 lg:mb-0 font-bebas tracking-wide leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        WHAT CLIENTS SAY
                        <br />
                        ABOUT US
                    </motion.h2>

                    {/* Navigation Controls - Desktop */}
                    <motion.div
                        className="hidden lg:flex items-center space-x-4"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            onClick={prevSlide}
                            className="w-12 h-12 xl:w-14 xl:h-14 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#F80F0F] transition-all duration-300 flex items-center justify-center group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={currentIndex === 0}
                        >
                            <ArrowLeft className="w-6 h-6 xl:w-7 xl:h-7 group-hover:scale-110 transition-transform duration-200" />
                        </motion.button>

                        <motion.button
                            onClick={nextSlide}
                            className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowRight className="w-6 h-6 xl:w-7 xl:h-7 group-hover:scale-110 transition-transform duration-200" />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Testimonials Slider */}
                <div className="relative">
                    <motion.div
                        className="overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="flex transition-transform duration-500 ease-in-out"
                            animate={{ x: `${-currentIndex * 100}%` }}
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className="w-full lg:w-1/2 flex-shrink-0 px-2 sm:px-3 lg:px-4">
                                    <motion.div
                                        className="bg-gray-200 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl h-full"
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        {/* Profile Section */}
                                        <div className="flex items-center space-x-4 mb-6 lg:mb-8">
                                            <div className="relative">
                                                <Image
                                                    src={testimonial.avatar || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    width={60}
                                                    height={60}
                                                    className="rounded-full object-cover w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                                                />

                                            </div>
                                            <div>
                                                <h3 className=" text-black text-2xl sm:text-base lg:text-2xl font-bebas tracking-wide">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-black text-xs sm:text-sm lg:text-base font-outfit">
                                                    {testimonial.title}, {testimonial.company}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Testimonial Content */}
                                        <div className="space-y-4 lg:space-y-6">
                                            <h4 className=" text-black text-lg sm:text-xl lg:text-2xl font-bebas tracking-wide">
                                                {testimonial.testimonial}
                                            </h4>
                                            <p className="text-black text-sm sm:text-base lg:text-lg leading-relaxed font-outfit">
                                                {testimonial.rating}
                                            </p>
                                        </div>

                                        {/* Rating Stars */}
                                        {/* <div className="flex items-center space-x-1 mt-6 lg:mt-8">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.1 * i }}
                                                >
                                                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                </motion.div>
                                            ))}
                                        </div> */}
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Mobile Navigation */}
                    <div className="flex lg:hidden items-center justify-center space-x-4 mt-8">
                        <motion.button
                            onClick={prevSlide}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#F80F0F] transition-all duration-300 flex items-center justify-center"
                            whileTap={{ scale: 0.95 }}
                            disabled={currentIndex === 0}
                        >
                            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.button>

                        <motion.button
                            onClick={nextSlide}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex items-center justify-center space-x-2 mt-6 lg:mt-8">
                        {Array.from({ length: testimonials.length - 1 }).map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                                    }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
