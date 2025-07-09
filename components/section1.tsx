import Image from "next/image";
import { motion } from "framer-motion";
import { CarFront } from 'lucide-react';

import playStore from "@/public/google-play.png";
import appStore from "@/public/app-store.png";
import carGuy from "@/public/car-guy.jpg"; // replace with your image

export default function BuiltForRiders() {
    return (
        <section className="bg-white py-12 px-6 md:px-12 min-h-screen ">
            <div className="max-w-7xl mt-9  mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Left Side: Text Content */}
                <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                >
                    <h2 className="lg:text-7xl text-5xl sm:text-6xl font-bebas text-black">
                        BUILT FOR <span className="text-[#F80F0F]">EVERYDAY</span> RIDERS
                    </h2>
                    <p className="text-black font-outfit text-base">
                        Riden makes every trip easier, safer, and faster.
                    </p>

                    {/* Features */}
                    <ul className="space-y-4 text-sm text-gray-800 font-outfit">
                        {[
                            "Easy ride booking in seconds",
                            "Multiple ride options to fit your budget",
                            "In-app driver chat & status updates",
                            "Digital payment with fare breakdown",
                        ].map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <CarFront className="text-[#F80F0F] mt-1" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* App Store Buttons */}
                    <div className="flex  sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 justify-start lg:justify-start">
                        <Image
                            src={"/googlePlay.png"}
                            alt="Google Play"
                            width={140}
                            height={45}
                            className="w-32 sm:w-35 md:w-40 h-auto"
                        />
                        <Image
                            src={"/appStore.png"}
                            alt="App Store"
                            width={140}
                            height={45}
                            className="w-32 sm:w-35 md:w-40 h-auto"
                        />
                    </div>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-md">
                        <Image
                            src={'/carguy.png'} // replace with your image path
                            alt="Man in car"
                            className="object-cover w-full h-full"
                            width={500}
                            height={350}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
