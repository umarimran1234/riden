"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }
    return (
        <>      <motion.nav
            className="flex bg-black items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6 relative z-50"
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="flex items-center justify-between gap-8 text-xl sm:text-2xl lg:text-3xl font-audiowide text-[#F80F0F]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                {/* Logo */}
                <div className="text-[#F80F0F]">RIDEN</div>

                {/* Links */}
                <div className="lg:flex items-center gap-6 text-sm lg:text-base font-outfit hidden sm:hidden">
                    <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Link href="/about" className="text-white hover:text-[#F80F0F] transition-colors duration-300">
                            About us
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Link href="/contact" className="text-white hover:text-[#F80F0F] first-letter: font-outfit  transition-colors duration-300">
                            Contact us
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <div className="relative overflow-hidden bg-[#F80F0F] hover:bg-[#F80F0F] text-white px-4 lg:px-6 py-2 lg:p-2 rounded-md font-medium transition-all duration-300 text-sm lg:text-base font-outfit cursor-pointer group">
                        <div className="relative h-[1.2em]"> {/* Height controls vertical space */}
                            {/* Top text that moves up */}
                            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full mb-4 ">
                                Download the app
                            </span>

                            {/* Bottom text that slides in from below */}
                            <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0 leading-[1.4] pt-[2px]">
                                Download the app
                            </span>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="flex items-center space-x-2 border border-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium"
                    whileHover={{ scale: 1.05, borderColor: "#F80F0F" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <span>🇨🇦</span>
                    <span className="hidden text-white lg:inline">Exclusively in Canada</span>
                    <span className="lg:hidden">Canada</span>
                </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
                className="md:hidden text-white p-2"
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
        </motion.nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <Link
                            href="/about"
                            className="text-white hover:text-[#F80F0F] transition-colors duration-300 font-medium text-xl"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About us
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white hover:text-[#F80F0F] transition-colors duration-300 font-medium text-xl"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact us
                        </Link>
                        <motion.div
                            whileHover="hover"
                            className="relative overflow-hidden bg-[#F80F0F] text-white px-8 py-3 rounded-full font-medium text-lg cursor-pointer"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <div className="relative overflow-hidden bg-[#F80F0F] hover:bg-[#F80F0F] text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-medium transition-all duration-300 text-sm lg:text-base font-outfit cursor-pointer group">
                                    <div className="relative">
                                        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                            Download the app
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <div className="flex  items-center space-x-2 border border-white px-4 py-2 rounded-full text-sm font-medium">
                            <span className='text-white' >🇨🇦</span>
                            <span className='text-white' >Exclusively in Canada</span>

                        </div>
                    </div>
                </motion.div>
            )}</>
    )
}

export default Header