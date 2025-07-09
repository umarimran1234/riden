import AppDownloadSection from "@/components/section7";
import Image from "next/image";

export default function AboutRidenSection() {
    return (
        <>
            <section className="bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header text */}
                    <p className="text-[#F80F0F] text-sm sm:text-base font-outfit mb-4 sm:mb-6 tracking-wide">
                        Built to trust. Driven by purpose.
                    </p>

                    {/* Main heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bebas mb-6 sm:mb-8 leading-tight">
                        ABOUT THE <span className="text-[#F80F0F]">RIDEN</span>
                    </h2>

                    {/* First paragraph */}
                    <p className="text-white text-sm sm:text-base font-outfit leading-relaxed mb-4 sm:mb-6">
                        Riden is a <span className="text-[#F80F0F]">smart and easy-to-use ride-booking app</span> made for everyone
                        who wants quick, safe, and affordable rides. Whether you're going to work, shopping, or meeting friends,
                        Riden gets you there with just one tap.
                    </p>

                    {/* Second paragraph */}
                    <p className="text-white text-sm sm:text-base font-outfit leading-relaxed mb-8 sm:mb-12">
                        We connect passengers with nearby drivers in seconds. You can see your driver, track your ride in real time,
                        and pay directly through the app. No long waits, no confusion — just smooth travel, every time.
                    </p>

                    {/* Main image */}
                    <div className="mb-8 sm:mb-12">
                        <Image
                            src="/about_us.png"
                            alt="Happy passengers and driver in a car representing RIDEN ride-sharing service"
                            width={800}
                            height={450}
                            className="w-full h-auto rounded-lg"
                            priority
                        />
                    </div>

                    {/* Bottom paragraph */}
                    <p className="text-white text-sm sm:text-base font-outfit leading-relaxed">
                        Riden is currently available in <span className="text-[#F80F0F]">Vancouver, Canada</span>, and we’re working
                        to expand to more cities soon.
                    </p>
                </div>
            </section>
            <div className="mt-8 sm:mt-12">
                <AppDownloadSection />
            </div>
        </>
    );
}