"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import Image from "next/image";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [activeApp, setActiveApp] = useState<"driver" | "passenger">("driver");
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-$$$$]/g, ""))) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Form submitted:", formData);

            setSubmitStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-black relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-30">
                        <div className="w-full h-full bg-gradient-to-t from-gray-600 to-transparent"></div>
                    </div>
                </div>

                <div className="relative z-20 min-h-screen flex flex-col">
                    {/* Main Content */}
                    <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-16 items-start">
                                {/* Left Content */}
                                <motion.div
                                    className="space-y-6 lg:space-y-8"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <div>
                                        <p className="text-[#F80F0F] text-sm sm:text-base lg:text-lg font-outfit tracking-wide">
                                            CONTACT US
                                        </p>
                                        <motion.h1
                                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8 font-bebas tracking-wide leading-tight"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        >
                                            HAVE QUESTIONS?
                                        </motion.h1>

                                        <motion.p
                                            className="text-white text-sm sm:text-base lg:text-lg font-outfit leading-relaxed"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4 }}
                                        >
                                            Have questions, feedback, or need help with your ride? We’re always ready to assist you. Whether
                                            it’s a lost item, payment issue, or just a suggestion to make Riden better — feel free to reach
                                            out. Our support team is available <span className="text-[#F80F0F]">24/7</span> to make sure your
                                            experience stays smooth and worry-free.
                                        </motion.p>
                                    </div>
                                </motion.div>

                                {/* Contact Form */}
                                <motion.div
                                    className="w-full"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    <div className="bg-gray-100 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* First Row - Name Fields */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                <div>
                                                    <label
                                                        htmlFor="firstName"
                                                        className="block text-sm text-gray-800 mb-2 font-outfit tracking-wide"
                                                    >
                                                        FIRST NAME
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-outfit transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F80F0F] ${errors.firstName ? "border-red-500" : "border-gray-300 focus:border-[#F80F0F]"
                                                            }`}
                                                        placeholder="Enter your first name"
                                                    />
                                                    {errors.firstName && (
                                                        <p className="mt-1 text-sm text-red-500 font-outfit">{errors.firstName}</p>
                                                    )}
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="lastName"
                                                        className="block text-sm text-gray-800 mb-2 font-outfit tracking-wide"
                                                    >
                                                        LAST NAME
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-outfit transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F80F0F] ${errors.lastName ? "border-red-500" : "border-gray-300 focus:border-[#F80F0F]"
                                                            }`}
                                                        placeholder="Enter your last name"
                                                    />
                                                    {errors.lastName && (
                                                        <p className="mt-1 text-sm text-red-500 font-outfit">{errors.lastName}</p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Second Row - Contact Fields */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm text-gray-800 mb-2 font-outfit tracking-wide"
                                                    >
                                                        EMAIL ADDRESS
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-outfit transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F80F0F] ${errors.email ? "border-red-500" : "border-gray-300 focus:border-[#F80F0F]"
                                                            }`}
                                                        placeholder="Enter your email address"
                                                    />
                                                    {errors.email && <p className="mt-1 text-sm text-red-500 font-outfit">{errors.email}</p>}
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="phone"
                                                        className="block text-sm text-gray-800 mb-2 font-outfit tracking-wide"
                                                    >
                                                        PHONE NUMBER
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-outfit transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F80F0F] ${errors.phone ? "border-red-500" : "border-gray-300 focus:border-[#F80F0F]"
                                                            }`}
                                                        placeholder="Enter your phone number"
                                                    />
                                                    {errors.phone && <p className="mt-1 text-sm text-red-500 font-outfit">{errors.phone}</p>}
                                                </div>
                                            </div>

                                            {/* Message Field */}
                                            <div>
                                                <label
                                                    htmlFor="message"
                                                    className="block text-sm font-outfit text-gray-800 mb-2 tracking-wide"
                                                >
                                                    MESSAGE
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    rows={6}
                                                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg font-outfit transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F80F0F] resize-none ${errors.message ? "border-red-500" : "border-gray-300 focus:border-[#F80F0F]"
                                                        }`}
                                                    placeholder="Tell us how we can help you..."
                                                />
                                                {errors.message && <p className="mt-1 text-sm text-red-500 font-outfit">{errors.message}</p>}
                                            </div>

                                            {/* Submit Button */}
                                            <div className="flex justify-center pt-4">
                                                <motion.button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={`relative overflow-hidden px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-base font-outfit tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#F80F0F] hover:bg-red-600 text-white"
                                                        }`}
                                                    whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                                                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                                                >
                                                    <div className="relative h-5 sm:h-6 flex items-center justify-center">
                                                        {isSubmitting ? (
                                                            <div className="flex items-center space-x-2">
                                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                                <span>SUBMITTING...</span>
                                                            </div>
                                                        ) : (
                                                            "SUBMIT"
                                                        )}
                                                    </div>
                                                </motion.button>
                                            </div>

                                            {/* Status Messages */}
                                            {submitStatus === "success" && (
                                                <motion.div
                                                    className="text-center p-4 bg-green-100 border border-green-300 rounded-lg"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                >
                                                    <p className="text-green-700 font-outfit">
                                                        Thank you for your message! We'll get back to you within 24 hours.
                                                    </p>
                                                </motion.div>
                                            )}

                                            {submitStatus === "error" && (
                                                <motion.div
                                                    className="text-center p-4 bg-red-100 border border-red-300 rounded-lg"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                >
                                                    <p className="text-red-700 font-outfit">
                                                        Sorry, there was an error sending your message. Please try again.
                                                    </p>
                                                </motion.div>
                                            )}
                                        </form>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <section className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] bg-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/backgournd.png"
                        alt="Geometric background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            className="space-y-6 lg:space-y-8 text-left"
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
                                Get in Touch
                            </motion.p>

                            {/* Main Heading */}
                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 font-bebas tracking-wide leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Need Help With Your Ride?
                            </motion.h2>

                            {/* Subtext */}
                            <motion.p
                                className="text-white text-sm sm:text-base lg:text-lg font-outfit leading-relaxed mb-6 sm:mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                Have questions, feedback, or need help with your ride? We’re always ready to assist you. Whether it’s a
                                lost item, payment issue, or just a suggestion to make Riden better — feel free to reach out. Our
                                support team is available <span className="text-[#F80F0F]">24/7</span> to make sure your experience
                                stays smooth and worry-free.
                            </motion.p>

                            {/* Contact Info */}
                            <motion.div
                                className="space-y-4 sm:space-y-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {/* Phone Contact */}
                                <motion.div
                                    className="flex items-center space-x-4 justify-start group"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                        <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-[#F80F0F]" />
                                    </div>
                                    <div>
                                        <a
                                            href="tel:6049006809"
                                            className="text-white text-base sm:text-lg lg:text-xl font-bold font-outfit hover:text-gray-200 transition-colors duration-200"
                                        >
                                            6049006809
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Email Contact */}
                                <motion.div
                                    className="flex items-center space-x-4 justify-start group"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                        <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-[#F80F0F]" />
                                    </div>
                                    <div>
                                        <a
                                            href="mailto:contact@riden.online"
                                            className="text-white text-base sm:text-lg lg:text-xl font-bold font-outfit hover:text-gray-200 transition-colors duration-200 break-all sm:break-normal"
                                        >
                                            contact@riden.online
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Address Contact */}
                                <motion.div
                                    className="flex items-center space-x-4 justify-start group"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                        <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[#F80F0F]" />
                                    </div>
                                    <div>
                                        <p className="text-white text-base sm:text-lg lg:text-xl font-bold font-outfit">
                                            219/15850 26 ave Vancouver, Canada
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Support Representative Image */}
                        <motion.div
                            className="relative w-full max-w-lg h-auto"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative rounded-2xl overflow-hidden">
                                <Image
                                    src="/Contact_us_guy.png"
                                    alt="Friendly customer support representative"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}