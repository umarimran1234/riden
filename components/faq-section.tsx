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
        question: "HOW DO I BOOK A RIDE WITH RIDEN?",
        answer:
            "Booking a ride with Riden is simple! Download our app, create an account, enter your pickup and destination locations, choose your ride type, and confirm your booking. A driver will be assigned to you within minutes, and you can track their arrival in real-time.",
    },
    {
        id: 2,
        question: "HOW ARE FARES CALCULATED?",
        answer:
            "Fares are based on distance, time, ride type, and current demand. You'll always see the price before confirming your ride.",
    },
    {
        id: 3,
        question: "CAN I SCHEDULE A RIDE IN ADVANCE?",
        answer:
            "Yes! You can schedule rides up to 30 days in advance. Simply select 'Schedule for later' when booking, choose your preferred date and time, and we'll have a driver ready for you. This feature is perfect for airport trips, important meetings, or any time you need guaranteed transportation.",
    },
    {
        id: 4,
        question: "IS RIDEN AVAILABLE IN MY CITY?",
        answer:
            "Riden is currently available in major cities across Canada, including Toronto, Vancouver, Montreal, Calgary, and Ottawa. We're constantly expanding to new cities. Check our app or website to see if we're available in your area, and sign up for notifications when we launch in new locations.",
    },
    {
        id: 5,
        question: "HOW CAN I BECOME A RIDEN DRIVER?",
        answer:
            "To become a Riden driver, you must be at least 21 years old, have a valid driver's license, pass our background check, and have access to a qualifying vehicle. Apply through our driver app, complete the verification process, and start earning on your own schedule. We provide full support and training to get you started.",
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
                        className="text-black text-base sm:text-lg lg:text-xl font-outfit leading-relaxed max-w-2xl mx-auto"
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
                                <span className=" text-sm sm:text-base lg:text-lg font-bebas tracking-wide leading-tight pr-4">
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
                                            <p className="text-white text-sm sm:text-base lg:text-lg font-outfit leading-relaxed">
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
