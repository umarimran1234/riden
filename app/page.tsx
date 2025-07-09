"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Send, Bookmark, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import BuiltForRiders from "@/components/section1"
import EarnWithRiden from "@/components/section2"
import FastReliableSection from "@/components/section3"
import SafetySection from "@/components/section4"
import TestimonialsSlider from "@/components/section5"
import FAQSection from "@/components/faq-section"
import AppDownloadSection from "@/components/section7"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function RidenLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 40 }, // Start hidden and below
    visible: {
      opacity: 1,
      y: 0, // Final position (original)
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };


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

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8, rotate: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: custom,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    }),
  }

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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}


      {/* Hero Section */}
      <motion.main
        className="flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8 lg:py-12 text-center relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.div className="max-w-6xl mx-auto mb-6 sm:mb-8" variants={itemVariants}>
          <motion.h1
            className="text-5xl font-bebas sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl  leading-[1.1] mb-6 sm:mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          >
            YOUR <span className="text-[#F80F0F]">RIDE</span>, JUST
            <span className="block lg:mt-9">
              ONE TAP <span className="text-[#F80F0F]">AWAY</span>.
            </span>
          </motion.h1>


          <motion.p
            className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl  sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
            variants={itemVariants}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </motion.p>
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
            <Button className="bg-black  text-white  hover:border-gray-500 px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-xl flex items-center justify-center sm:justify-start space-x-3 lg:space-x-4 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 w-full sm:w-auto">
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
            <Button className=" bg-transparent px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-xl flex items-center justify-center sm:justify-start space-x-3 lg:space-x-4 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 w-full sm:w-auto">
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

        {/* Instagram-style Cards */}
        <motion.div
          className="relative w-full mx-auto mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Mobile: Stacked Cards */}
          <div className="flex sm:hidden flex-col space-y-4 px-4">
            {/* Card 1 Mobile */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-xs mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <div className="flex gap-2 p-2 items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center overflow-hidden justify-center">
                  <Image alt="Post 1" src={"/post3.jpg"} width={32} height={32} className="rounded-full object-cover" />
                </div>
                <div>
                  <div className="text-black text-xs font-semibold">mike_driver</div>
                  <div className="text-gray-500 text-xs">Toronto, ON</div>
                </div>
              </div>
              <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                <Image
                  alt="Post 1"
                  src={"/post3.jpg"}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex p-2 items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-black" />
                  <MessageCircle className="w-5 h-5 text-black" />
                  <Send className="w-5 h-5 text-black" />
                </div>
                <Bookmark className="w-5 h-5 text-black" />
              </div>
            </motion.div>

            {/* Card 2 Mobile */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-xs mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="flex gap-2 p-2 items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center overflow-hidden justify-center">
                  <Image alt="Post 2" src={"/post1.jpg"} width={32} height={32} className="rounded-full object-cover" />
                </div>
                <div>
                  <div className="text-black text-xs font-semibold">sarah_rides</div>
                  <div className="text-gray-500 text-xs">Vancouver, BC</div>
                </div>
              </div>
              <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                <Image
                  alt="Post 2"
                  src={"/post1.jpg"}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between mb-2 p-2">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  <MessageCircle className="w-5 h-5 text-black" />
                  <Send className="w-5 h-5 text-black" />
                </div>
                <Bookmark className="w-5 h-5 text-black" />
              </div>
            </motion.div>

            {/* Card 3 Mobile */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-xs mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <div className="flex gap-2 items-center p-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center overflow-hidden justify-center">
                  <Image alt="Post 3" src={"/post2.png"} width={32} height={32} className=" rounded-full object-cover" />
                </div>
                <div>
                  <div className="text-black text-xs font-semibold">alex_driver</div>
                  <div className="text-gray-500 text-xs">Montreal, QC</div>
                </div>
              </div>
              <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                <Image
                  alt="Post 3"
                  src={"/post2.png"}
                  width={600}
                  height={600}
                  className="w-full max-w-[900px]  h-full object-cover"
                />
              </div>
              <div className="flex p-2 items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-black" />
                  <MessageCircle className="w-5 h-5 text-black" />
                  <Send className="w-5 h-5 text-black" />
                </div>
                <Bookmark className="w-5 h-5 text-black" />
              </div>
            </motion.div>
          </div>

          {/* Desktop: Side by Side Cards */}
          <div className="hidden sm:flex justify-center items-center space-x-2 md:space-x-4 lg:space-x-6 relative px-4">
            {/* Card 1 */}
            <motion.div
              className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl max-w-[180px] md:max-w-[240px] lg:max-w-[340px] w-full"
              custom={-12}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                rotate: -8,
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="flex gap-2 p-2 items-center mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center overflow-hidden justify-center">
                  <Image
                    alt="Post 1"
                    src={"/post3.jpg"}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-black text-xs lg:text-sm font-semibold">mike_driver</div>
                  <div className="text-gray-500 text-xs">Toronto, ON</div>
                </div>
              </div>
              <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                <Image
                  alt="Post 1"
                  src={"/post3.jpg"}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex p-2 items-center justify-between mb-2">
                <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
                  <Send className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
                </div>
                <Bookmark className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
              </div>
            </motion.div>

            {/* Card 2 - Center */}
            <motion.div
              className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl max-w-[180px] md:max-w-[240px] lg:max-w-[340px] w-full z-10"
              custom={3}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                rotate: 1,
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="flex gap-2 p-2 items-center mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center overflow-hidden justify-center">
                  <Image
                    alt="Post 2"
                    src={"/post1.jpg"}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-black text-xs lg:text-sm font-semibold">sarah_rides</div>
                  <div className="text-gray-500 text-xs">Vancouver, BC</div>
                </div>
              </div>
              <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                <Image
                  alt="Post 2"
                  src={"/post1.jpg"}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between mb-2 p-2">
                <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-red-500 fill-red-500" />
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
                  <Send className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
                </div>
                <Bookmark className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl max-w-[180px] md:max-w-[240px] lg:max-w-[340px] w-full"
              custom={12}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                rotate: 8,
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="flex gap-2 items-center p-2 mb-3">
                <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center overflow-hidden justify-center">
                  <Image
                    alt="Post 3"
                    src={"/post2.png"}
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-black text-xs lg:text-sm font-semibold">alex_driver</div>
                  <div className="text-gray-500 text-xs">Montreal, QC</div>
                </div>
              </div>
              <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                <Image
                  alt="Post 3"
                  src={"/post2.png"}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex p-2 items-center justify-between mb-2">
                <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
                  <Send className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
                </div>
                <Bookmark className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.main>

      {/* Safety Ticker */}
      <motion.div
        className="bg-[#F80F0F] py-2 sm:py-3 lg:py-4 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="whitespace-nowrap flex"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-white font-bebas text-2xl sm:text-base lg:text-4xl mx-4 sm:mx-6 lg:mx-8">
              EVERY TRIP, A PROMISE OF SAFETY
            </span>
          ))}
        </motion.div>
      </motion.div>
      <BuiltForRiders />
      <EarnWithRiden />
      <FastReliableSection />
      <SafetySection />
      <TestimonialsSlider />
      <FAQSection />
      <AppDownloadSection />

    </div>
  )
}
