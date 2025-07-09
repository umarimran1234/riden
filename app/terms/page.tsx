"use client"

import { motion } from "framer-motion"

export default function TermsConditionsSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

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

    const sectionVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    return (
        <section className="bg-black text-white min-h-screen py-12 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.p
                        className="text-[#F80F0F] text-sm sm:text-sm md:text-sm lg:text-sm mb-3 font-outfit tracking-wide"
                        variants={itemVariants}
                    >
                        Know Your Rights. Understand Our Terms.
                    </motion.p>
                    <motion.h1 className="text-6xl lg:text-7xl font-bebas mb-8 tracking-wide" variants={itemVariants}>
                        TERMS & CONDITIONS
                    </motion.h1>
                </motion.div>

                {/* Content container */}
                <motion.div
                    className="bg-[#EAEAEA] text-black p-8 lg:p-12 rounded-3xl space-y-8"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Section 1 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h3
                            className="font-bebas text-lg mb-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            LOREM IPSUM IS SIMPLY DUMMY TEXT
                        </motion.h3>
                        <motion.p
                            className="text-sm leading-relaxed font-outfit mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
                            <span className="text-[#F80F0F]">Lorem Ipsum has been the industry's</span> standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </motion.p>
                        <motion.p
                            className="text-sm leading-relaxed font-outfit"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
                        </motion.p>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h3
                            className="font-bebas text-lg mb-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            LOREM IPSUM IS SIMPLY DUMMY TEXT
                        </motion.h3>
                        <motion.p
                            className="text-sm font-outfit leading-relaxed mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
                            <span className="text-[#F80F0F]">Lorem Ipsum has been the industry's</span> standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </motion.p>
                        <motion.p
                            className="text-sm font-outfit leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </motion.p>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h3
                            className="font-bebas text-lg mb-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            LOREM IPSUM IS SIMPLY DUMMY TEXT
                        </motion.h3>
                        <motion.p
                            className="text-sm font-outfit leading-relaxed mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
                            <span className="text-[#F80F0F]">Lorem Ipsum has been the industry's</span> standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </motion.p>
                        <motion.p
                            className="text-sm font-outfit leading-relaxed mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into{" "}
                            <span className="text-[#F80F0F]">electronic typesetting, remaining essentially unchanged.</span> It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </motion.p>
                        <motion.p
                            className="text-sm font-outfit leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </motion.p>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h3
                            className="font-bebas text-lg mb-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            LOREM IPSUM IS SIMPLY DUMMY TEXT
                        </motion.h3>
                        <motion.p
                            className="text-sm font-outfit leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
                            <span className="text-[#F80F0F]">Lorem Ipsum has been the industry's</span> standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
