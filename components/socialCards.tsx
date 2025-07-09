import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import Image from 'next/image';

// Define animation variants for desktop cards
const cardVariants = {
    hidden: {
        x: 0, // All cards start at the same position (center)
        opacity: 0,
        scale: 0.9, // Slightly scaled down for depth
        rotate: 0, // Straight, no initial rotation
    },
    visible: (custom: number) => ({
        x: 0, // No positional movement
        opacity: 1,
        scale: 1,
        rotate: custom, // Apply final rotation: -12 (left), 0 (center), 12 (right)
        transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 },
    }),
};

const SocialCards: React.FC = () => {
    return (
        <motion.div
            className="relative w-full mx-auto mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            {/* Mobile: Stacked Cards */}
            <div className="flex sm:hidden flex-col space-y-4 px-4">
                {/* Card 1 Mobile */}
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-xs mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className="flex gap-2 p-2 items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center overflow-hidden justify-center">
                            <Image alt="Post 1" src="/post3.jpg" width={32} height={32} className="rounded-full object-cover" />
                        </div>
                        <div>
                            <div className="text-black text-xs font-semibold">mike_driver</div>
                            <div className="text-gray-500 text-xs">Toronto, ON</div>
                        </div>
                    </div>
                    <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                        <Image
                            alt="Post 1"
                            src="/post3.jpg"
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
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <div className="flex gap-2 p-2 items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center overflow-hidden justify-center">
                            <Image alt="Post 2" src="/post1.jpg" width={32} height={32} className="rounded-full object-cover" />
                        </div>
                        <div>
                            <div className="text-black text-xs font-semibold">sarah_rides</div>
                            <div className="text-gray-500 text-xs">Vancouver, BC</div>
                        </div>
                    </div>
                    <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                        <Image
                            alt="Post 2"
                            src="/post1.jpg"
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
                    transition={{ delay: 1.0, duration: 0.8 }}
                >
                    <div className="flex gap-2 items-center p-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center overflow-hidden justify-center">
                            <Image alt="Post 3" src="/post2.png" width={32} height={32} className="rounded-full object-cover" />
                        </div>
                        <div>
                            <div className="text-black text-xs font-semibold">alex_driver</div>
                            <div className="text-gray-500 text-xs">Montreal, QC</div>
                        </div>
                    </div>
                    <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                        <Image
                            alt="Post 3"
                            src="/post2.png"
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
            </div>

            {/* Desktop: Side by Side Cards */}
            <div className="hidden sm:flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 relative px-4">
                {/* Card 1 - Left */}
                <motion.div
                    className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[280px] w-full z-0"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    custom={-12} // Only rotate left
                    whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { type: 'spring', stiffness: 300, damping: 20 },
                    }}
                >
                    <div className="flex gap-2 p-2 items-center mb-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center overflow-hidden justify-center">
                            <Image
                                alt="Post 1"
                                src="/post3.jpg"
                                width={40}
                                height={40}
                                className="rounded-full object-cover w-full h-full"
                            />
                        </div>
                        <div>
                            <div className="text-black text-xs sm:text-sm font-semibold">mike_driver</div>
                            <div className="text-gray-500 text-xs">Toronto, ON</div>
                        </div>
                    </div>
                    <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                        <Image
                            alt="Post 1"
                            src="/post3.jpg"
                            width={280}
                            height={280}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex p-2 items-center justify-between mb-2">
                        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                            <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                        </div>
                        <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                    </div>
                </motion.div>

                {/* Card 2 - Center */}
                <motion.div
                    className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl max-w-[180px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[300px] w-full z-10"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0} // No rotation
                    whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { type: 'spring', stiffness: 300, damping: 20 },
                    }}
                >
                    <div className="flex gap-2 p-2 items-center mb-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center overflow-hidden justify-center">
                            <Image
                                alt="Post 2"
                                src="/post1.jpg"
                                width={40}
                                height={40}
                                className="rounded-full object-cover w-full h-full"
                            />
                        </div>
                        <div>
                            <div className="text-black text-xs sm:text-sm font-semibold">sarah_rides</div>
                            <div className="text-gray-500 text-xs">Vancouver, BC</div>
                        </div>
                    </div>
                    <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                        <Image
                            alt="Post 2"
                            src="/post1.jpg"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-2 p-2">
                        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                            <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-500 fill-red-500" />
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                        </div>
                        <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                    </div>
                </motion.div>

                {/* Card 3 - Right */}
                <motion.div
                    className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[280px] w-full z-0"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    custom={12} // Only rotate right
                    whileHover={{
                        scale: 1.05,
                        y: -10,
                        transition: { type: 'spring', stiffness: 300, damping: 20 },
                    }}
                >
                    <div className="flex gap-2 items-center p-2 mb-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center overflow-hidden justify-center">
                            <Image
                                alt="Post 3"
                                src="/post2.png"
                                width={40}
                                height={40}
                                className="rounded-full object-cover w-full h-full"
                            />
                        </div>
                        <div>
                            <div className="text-black text-xs sm:text-sm font-semibold">alex_driver</div>
                            <div className="text-gray-500 text-xs">Montreal, QC</div>
                        </div>
                    </div>
                    <div className="aspect-square mb-3 flex items-center justify-center overflow-hidden">
                        <Image
                            alt="Post 3"
                            src="/post2.png"
                            width={280}
                            height={280}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex p-2 items-center justify-between mb-2">
                        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                            <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                        </div>
                        <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SocialCards;