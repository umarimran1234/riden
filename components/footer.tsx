"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin } from "lucide-react"

export default function Footer() {
    const socialLinks = [
        {
            name: "Facebook",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            href: "#",
        },
        {
            name: "LinkedIn",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            href: "#",
        },
        {
            name: "TikTok",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
            ),
            href: "#",
        },
        {
            name: "Instagram",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.127 4.74.332 4.077.628c-.688.31-1.273.72-1.856 1.304C1.637 2.516 1.227 3.1.917 3.788.621 4.451.416 5.237.361 6.467.305 7.7.289 8.107.289 11.728c0 3.621.016 4.028.072 5.261.055 1.23.26 2.016.556 2.679.31.688.72 1.273 1.304 1.856.584.584 1.168.994 1.856 1.304.663.296 1.449.501 2.679.556 1.233.056 1.64.072 5.261.072 3.621 0 4.028-.016 5.261-.072 1.23-.055 2.016-.26 2.679-.556.688-.31 1.273-.72 1.856-1.304.584-.584.994-1.168 1.304-1.856.296-.663.501-1.449.556-2.679.056-1.233.072-1.64.072-5.261 0-3.621-.016-4.028-.072-5.261-.055-1.23-.26-2.016-.556-2.679-.31-.688-.72-1.273-1.304-1.856C19.484 1.637 18.9 1.227 18.212.917c-.663-.296-1.449-.501-2.679-.556C14.3.305 13.893.289 10.272.289L12.017 0zm0 2.17c3.556 0 3.97.016 5.37.072 1.297.059 2.001.275 2.47.458.621.242 1.065.532 1.532.999.467.467.757.911.999 1.532.183.469.399 1.173.458 2.47.056 1.4.072 1.814.072 5.37 0 3.556-.016 3.97-.072 5.37-.059 1.297-.275 2.001-.458 2.47-.242.621-.532 1.065-.999 1.532-.467.467-.911.757-1.532.999-.469.183-1.173.399-2.47.458-1.4.056-1.814.072-5.37.072-3.556 0-3.97-.016-5.37-.072-1.297-.059-2.001-.275-2.47-.458-.621-.242-1.065-.532-1.532-.999-.467-.467-.757-.911-.999-1.532-.183-.469-.399-1.173-.458-2.47-.056-1.4-.072-1.814-.072-5.37 0-3.556.016-3.97.072-5.37.059-1.297.275-2.001.458-2.47.242-.621.532-1.065.999-1.532.467-.467.911-.757 1.532-.999.469-.183 1.173-.399 2.47-.458 1.4-.056 1.814-.072 5.37-.072z" />
                    <path d="M12.017 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
            href: "#",
        },
    ]

    const exploreLinks = [
        { name: "About us", href: "/about" },
        { name: "Contact us", href: "/contact" },
    ]

    const policyLinks = [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookies", href: "/cookies" },
    ]

    return (
        <footer className="bg-white ">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <motion.div
                        className="space-y-4 lg:space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-2xl sm:text-3xl  text-[#F80F0F] font-audiowide tracking-wider">RIDEN</div>

                        <p className="text-gray-700 text-sm sm:text-base font-outfit leading-relaxed max-w-xs">
                            Riden is an online platform. We do not participate in interactions between users — all ride requests are
                            created and completed independently through the app.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Explore Section */}
                    <motion.div
                        className="space-y-4 lg:space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm sm:text-base  text-black font-bebas tracking-wide">EXPLORE</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {exploreLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-[#F80F0F] text-sm sm:text-base font-outfit transition-colors duration-200 block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Policies Section */}
                    <motion.div
                        className="space-y-4 lg:space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm sm:text-base  text-black font-bebas tracking-wide">POLICIES</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {policyLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-[#F80F0F] text-sm sm:text-base font-outfit transition-colors duration-200 block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Location Section */}
                    <motion.div
                        className="space-y-4 lg:space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm sm:text-base  text-black font-bebas tracking-wide">LOCATION</h3>

                        {/* Vancouver Location */}
                        <motion.div
                            className="inline-flex items-center space-x-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm"
                            whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <MapPin className="w-4 h-4 text-[#F80F0F]" />
                            <span className="text-gray-700 text-sm font-outfit">Vancouver</span>
                        </motion.div>

                        {/* Address Section */}
                        <div className="space-y-3">
                            <h4 className="text-sm  text-black font-bebas tracking-wide">ADDRESS</h4>
                            <motion.div
                                className="inline-flex items-center space-x-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm"
                                whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <MapPin className="w-4 h-4 text-[#F80F0F]" />
                                <span className="text-gray-700 text-sm font-outfit">219/15850 26 ave</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Copyright Section */}
            <motion.div
                className="bg-[#F80F0F] py-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center">
                        <p className="text-white text-sm font-outfit flex items-center">
                            <span className="mr-2">©</span>
                            All Rights Reserved 2025
                        </p>
                    </div>
                </div>
            </motion.div>
        </footer>
    )
}
