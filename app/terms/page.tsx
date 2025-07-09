"use client";

import { motion } from "framer-motion";

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
    };

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
    };

    return (
        <section className="bg-black text-white min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.p
                        className="text-[#F80F0F] text-sm sm:text-base font-outfit tracking-wide mb-3"
                        variants={itemVariants}
                    >
                        Know Your Rights. Understand Our Terms.
                    </motion.p>
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bebas mb-6 sm:mb-8 tracking-wide"
                        variants={itemVariants}
                    >
                        TERMS & CONDITIONS
                    </motion.h1>
                </motion.div>

                {/* Content container */}
                <motion.div
                    className="bg-[#EAEAEA] text-black p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl space-y-6 sm:space-y-8"
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Terms and Conditions */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="font-bebas text-xl sm:text-2xl mb-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Terms and Conditions
                        </motion.h2>
                        <motion.p
                            className="text-sm mb-6 sm:text-base font-outfit leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Welcome to Riden! These Terms and Conditions ("Terms") govern your use of our website located at <span className="text-[#F80F0F]">www.riden.ca</span>  (the "Site"), which provides information about the Riden mobile application ("App"). The App is a platform that connects riders with drivers for transportation services in Vancouver, Canada.
                            By accessing or using this Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.

                            Riden is a  operating in Vancouver, Canada.
                            This website is for informational purposes only and provides details about how to download, register, and
                            use the Riden App. Transportation services are provided by independent drivers using the platform.
                        </motion.p>
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    1. About Riden
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    Riden is a <span className="text-[#F80F0F]">ride-hailing platform</span> operating in Vancouver, Canada.
                                    This website is for informational purposes only and provides details about how to download, register, and
                                    use the Riden App. Transportation services are provided by independent drivers using the platform.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    2. Use of the Website
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    You agree to use this website only for <span className="text-[#F80F0F]">lawful purposes</span>. You must
                                    not misuse the Site by knowingly introducing viruses, malware, or other harmful material. You may not
                                    attempt to gain unauthorized access to the Site or the server on which it is hosted.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    3. Intellectual Property
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    All content on this Site, including text, graphics, logos, and images, is the property of Riden or its
                                    licensors and is protected under applicable <span className="text-[#F80F0F]">copyright and trademark
                                        laws</span>. You may not use or reproduce any content without prior written consent.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    4. Third-Party Links
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    This Site may contain links to third-party websites, including app store listings or social media
                                    platforms. Riden is not responsible for the content, privacy policies, or practices of third-party
                                    websites.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    5. Limitation of Liability
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    To the maximum extent permitted by applicable law, Riden shall not be liable for any indirect,
                                    incidental, or consequential damages resulting from your use of the Site, including but not limited to
                                    lost profits, data loss, or service interruption.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    6. Privacy
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-[#F80F0F] hover:underline">Privacy Policy</a> for information on how we collect, use, and protect your data.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    7. Modifications
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    We reserve the right to update or modify these Terms at any time without notice. Your continued use of
                                    the Site after any changes indicates your acceptance of the new Terms.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    8. Governing Law
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    These Terms shall be governed and construed in accordance with the laws of the Province of British
                                    Columbia, Canada, without regard to its conflict of law provisions.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Contact Us
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    If you have any questions about these Terms, please contact us at:
                                    <br />
                                    Email: <a href="mailto:contact@riden.online" className="text-[#F80F0F] hover:underline">contact@riden.online</a>
                                    <br />
                                    Address: 219/15850 26 ave Vancouver, Canada
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Privacy Policy */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="font-bebas text-xl sm:text-2xl mb-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Privacy Policy
                        </motion.h2>
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    1. Information We Collect
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    We may collect the following types of personal information:
                                    <br />
                                    <strong>a. Information You Provide:</strong>
                                    <ul className="list-disc pl-5">
                                        <li>Name, email address, phone number, and profile information</li>
                                        <li>Payment and billing details (processed securely by third-party providers)</li>
                                        <li>Ride details such as pick-up and drop-off locations</li>
                                    </ul>
                                    <br />
                                    <strong>b. Automatically Collected Information:</strong>
                                    <ul className="list-disc pl-5">
                                        <li>IP address and browser type</li>
                                        <li>Device type and operating system</li>
                                        <li>Location data (with your permission)</li>
                                        <li>Usage data, including pages visited, time spent, and interactions</li>
                                    </ul>
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    2. How We Use Your Information
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    We may use the collected information for the following purposes:
                                    <ul className="list-disc pl-5">
                                        <li>To provide and manage <span className="text-[#F80F0F]">ride-booking services</span></li>
                                        <li>To verify your identity and process transactions</li>
                                        <li>To improve our Site, App, and customer support</li>
                                        <li>To send you updates, promotions, and service-related messages</li>
                                        <li>To comply with legal obligations</li>
                                    </ul>
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    3. Sharing of Information
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    We do not sell your personal information. We may share your data in the following ways:
                                    <ul className="list-disc pl-5">
                                        <li>With drivers and riders to facilitate bookings</li>
                                        <li>With trusted third-party service providers (e.g., payment processors, cloud hosting)</li>
                                        <li>With law enforcement or authorities, if required by law</li>
                                        <li>During business transfers, such as a merger or acquisition</li>
                                    </ul>
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    4. Cookies and Tracking Technologies
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    We use cookies and similar technologies to enhance your experience. You can control cookie settings
                                    through your browser preferences.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    5. Data Retention
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    We retain your personal information only as long as necessary for the purposes outlined in this policy,
                                    or as required by law.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    6. Data Security
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    We implement appropriate security measures to protect your personal information from unauthorized
                                    access, disclosure, or loss. However, no method of transmission over the internet is 100% secure.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    7. Your Rights
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    You have the right to:
                                    <ul className="list-disc pl-5">
                                        <li>Access the personal information we hold about you</li>
                                        <li>Request corrections to your information</li>
                                        <li>Withdraw consent at any time (subject to legal or contractual restrictions)</li>
                                    </ul>
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    8. Children’s Privacy
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    Our services are not intended for children under 13. We do not knowingly collect personal information
                                    from minors.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    9. International Users
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    Our services are intended for users in Canada. If you access the Site from outside Canada, your
                                    information may be transferred to, stored, and processed in Canada.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    10. Updates to This Policy
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with a
                                    revised effective date. Continued use of our services indicates your acceptance of the changes.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    11. Contact Us
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact
                                    us:
                                    <br />
                                    Email: <a href="mailto:contact@riden.online" className="text-[#F80F0F] hover:underline">contact@riden.online</a>
                                    <br />
                                    Address: 219/15850 26 ave Vancouver, Canada
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Cookie Policy */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2
                            className="font-bebas text-xl sm:text-2xl mb-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Cookie Policy
                        </motion.h2>
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    1. What Are Cookies?
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    Cookies are small text files stored on your device when you visit a website. They help websites
                                    remember user preferences, enhance performance, and provide analytics to improve services.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    2. Types of Cookies We Use
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    We use the following types of cookies:
                                    <br />
                                    <strong>a. Essential Cookies</strong>
                                    <br />
                                    These are necessary for the Site to function properly (e.g., to enable login, language settings, and
                                    security features).
                                    <br />
                                    <strong>b. Performance and Analytics Cookies</strong>
                                    <br />
                                    These cookies help us understand how visitors interact with the Site (e.g., pages visited, time spent,
                                    bounce rates). This data is used to improve the user experience. Tools like{" "}
                                    <span className="text-[#F80F0F]">Google Analytics</span> may be used.
                                    <br />
                                    <strong>c. Functional Cookies</strong>
                                    <br />
                                    These cookies enable enhanced functionality and personalization, such as remembering your preferences
                                    and previous choices.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    3. Managing Cookies
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    You can manage or disable cookies through your browser settings. However, disabling certain cookies may
                                    affect the functionality of our Site.
                                    <br />
                                    How to manage cookies:
                                    <ul className="list-disc pl-5">
                                        <li>Chrome: <a href="chrome://settings/cookies" className="text-[#F80F0F] hover:underline">chrome://settings/cookies</a></li>
                                        <li>Firefox: <a href="about:preferences#privacy" className="text-[#F80F0F] hover:underline">about:preferences#privacy</a></li>
                                        <li>Safari: Preferences &gt; Privacy</li>
                                        <li>Edge: <a href="edge://settings/privacy" className="text-[#F80F0F] hover:underline">edge://settings/privacy</a></li>
                                    </ul>
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    4. Third-Party Cookies
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    Some cookies may be set by third-party services that appear on our Site (e.g., embedded videos, maps,
                                    or ads). These third parties have their own privacy and cookie policies.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    5. Changes to This Cookie Policy
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    We may update this Cookie Policy from time to time. Changes will be posted on this page, and your
                                    continued use of the Site indicates your acceptance of the updated policy.
                                </motion.p>
                            </div>
                            <div>
                                <motion.h3
                                    className="font-bebas text-lg sm:text-xl mb-2"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Contact Us
                                </motion.h3>
                                <motion.p
                                    className="text-sm sm:text-base font-outfit leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                                    <br />
                                    Email: <a href="mailto:contact@riden.online" className="text-[#F80F0F] hover:underline">contact@riden.online</a>
                                    <br />
                                    Address: 219/15850 26 ave Vancouver, Canada
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}