"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

interface FAQItem {
    id: number
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: "What is this app for?",
        answer:
            "Riden is a ride-booking app that helps you find safe and quick rides anytime you need.",
    },
    {
        id: 2,
        question: "Where can I use this app?",
        answer:
            "You can use Riden in Vancouver, Canada. We’re growing and will be in more cities soon!",
    },
    {
        id: 3,
        question: "How do I book a ride?",
        answer:
            "Just open the app, select your pickup point and destination, then tap the “Book Ride” button.",
    },
    {
        id: 4,
        question: "How do I pay for my ride?",
        answer:
            "You can pay through the app using your card, or other secure payment options offered.",
    },
    {
        id: 5,
        question: "How do I talk to my driver?",
        answer:
            " After booking a ride, you can call or message your driver directly from the app.",
    },
]

export default function FAQSection() {
    const [openItem, setOpenItem] = useState<number | null>(2) // Default to second item open

    const toggleItem = (id: number) => {
        setOpenItem(openItem === id ? null : id)
    }

    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
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
                        Riden made simple — find your answers here.
                    </motion.p>

                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-black mb-4 sm:mb-6 font-bebas tracking-wide leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        FREQUENTLY ASKED QUESTIONS
                    </motion.h2>

                    <motion.p
                        className="text-black text-base sm:text-lg lg:text-[18px] font-outfit leading-relaxed max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Find clear, helpful answers to the most common questions about how Riden works — whether you're riding,
                        driving, or just getting started.
                    </motion.p>
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    className="space-y-3 sm:space-y-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {faqData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300 ${openItem === item.id ? "bg-[#F80F0F] shadow-xl" : "bg-gray-100 hover:bg-gray-50 shadow-md hover:shadow-lg"
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            whileHover={{ scale: openItem === item.id ? 1 : 1.02 }}
                        >
                            {/* Question Header */}
                            <motion.button
                                onClick={() => toggleItem(item.id)}
                                className={`w-full px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 flex items-center justify-between text-left transition-colors duration-300 ${openItem === item.id ? "text-white" : "text-black hover:text-[#F80F0F]"
                                    }`}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className=" text-sm sm:text-base lg:text-[24px] font-bebas tracking-wide leading-tight pr-4">
                                    {item.question}
                                </span>

                                <motion.div
                                    className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${openItem === item.id ? "bg-white text-[#F80F0F]" : "bg-[#F80F0F] text-white hover:bg-red-600"
                                        }`}
                                    animate={{ rotate: openItem === item.id ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    {openItem === item.id ? (
                                        <Minus className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                    ) : (
                                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                    )}
                                </motion.div>
                            </motion.button>

                            {/* Answer Content */}
                            <AnimatePresence>
                                {openItem === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <motion.div
                                            className="px-6 sm:px-8 lg:px-10 pb-6 sm:pb-8 lg:pb-10"
                                            initial={{ y: -20 }}
                                            animate={{ y: 0 }}
                                            exit={{ y: -20 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            <p className="text-white text-sm sm:text-base lg:text-[18px] font-outfit leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact CTA */}

            </div>
        </section>
    )
}
