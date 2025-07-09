"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Smartphone, Download } from "lucide-react"
import { useEffect } from "react"
import { Button } from "./ui/button"
import Image from "next/image"

interface QRDownloadPopupProps {
    isOpen: boolean
    onClose: () => void
    appType?: "driver" | "passenger"
}

export default function QRDownloadPopup({ isOpen, onClose, appType = "passenger" }: QRDownloadPopupProps) {
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
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [isOpen, onClose])

    const qrCodeContent = appType === "driver" ? "driver-app-qr" : "passenger-app-qr"

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* Popup Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl max-w-md sm:max-w-lg lg:max-w-xl w-full h-full overflow-hidden"
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 50 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <motion.button
                                onClick={onClose}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                            </motion.button>

                            {/* Content */}
                            <div className="p-6 sm:p-8 lg:p-10 text-center">
                                {/* Header */}
                                <motion.div
                                    className="mb-6 sm:mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#F80F0F] rounded-full flex items-center justify-center">
                                            <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                        </div>
                                    </div>
                                    <h2 className="text-lg sm:text-xl lg:text-2xl  text-black mb-2 font-bebas tracking-wide">
                                        POINT YOUR SMARTPHONE'S CAMERA AT THE QR CODE TO DOWNLOAD
                                    </h2>
                                    <p className="text-black text-sm sm:text-base font-outfit">
                                        Get the {appType === "driver" ? "Driver" : "Passenger"} app instantly
                                    </p>
                                </motion.div>

                                {/* QR Code */}
                                <motion.div
                                    className="mb-6 sm:mb-8 flex justify-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-white border-4 border-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                                        {/* QR Code Placeholder - Replace with actual QR code */}
                                        <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-black rounded-lg relative overflow-hidden">
                                            {/* QR Code Pattern Simulation */}
                                            <div className="absolute inset-0 grid grid-cols-8 gap-1 p-2">
                                                {Array.from({ length: 64 }).map((_, i) => (
                                                    <div key={i} className={`rounded-sm ${Math.random() > 0.5 ? "bg-white" : "bg-black"}`} />
                                                ))}
                                            </div>
                                            {/* Corner markers */}
                                            <div className="absolute top-2 left-2 w-8 h-8 border-4 border-white rounded"></div>
                                            <div className="absolute top-2 right-2 w-8 h-8 border-4 border-white rounded"></div>
                                            <div className="absolute bottom-2 left-2 w-8 h-8 border-4 border-white rounded"></div>
                                            {/* Center logo */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-8 h-8 bg-[#F80F0F] rounded-lg flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">R</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Instructions */}
                                <motion.div
                                    className="mb-6 sm:mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                >
                                    <p className="text-black text-sm sm:text-base font-outfit leading-relaxed">
                                        Scan the QR code with your phone's camera to download the RIDEN{" "}
                                        {appType === "driver" ? "Driver" : "Passenger"} app directly to your device.
                                    </p>
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
                                        <Button className="bg-transparent hover:bg-transparent  text-white  hover:border-gray-500 px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-xl flex items-center justify-center sm:justify-start space-x-3 lg:space-x-4 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 w-full sm:w-auto">
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
                                        <Button className=" bg-transparent hover:bg-transparent px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-xl flex items-center justify-center sm:justify-start space-x-3 lg:space-x-4 text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 w-full sm:w-auto">
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

                                {/* Additional Info */}
                                <motion.div
                                    className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.0, duration: 0.6 }}
                                >
                                    <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs sm:text-sm font-outfit">
                                        <Download className="w-4 h-4" />
                                        <span>Available for iOS 12+ and Android 8+</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Elements */}
                            <motion.div
                                className="absolute -top-2 -right-2 w-6 h-6 bg-[#F80F0F] rounded-full opacity-20"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full opacity-20"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.2, 0.5, 0.2],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                            />
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
