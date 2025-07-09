import AppDownloadSection from "@/components/section7"
import Image from "next/image"

export default function AboutRidenSection() {
    return (
        <>
            <section className="bg-black text-white py-16 px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header text */}
                    <p className="text-[#F80F0F] text-sm font-outfit mb-6 tracking-wide">Built to trust. Driven by purpose.</p>

                    {/* Main heading */}
                    <h2 className="text-4xl lg:text-8xl font-bebas mb-8 leading-tight">
                        ABOUT THE <span className="text-[#F80F0F]">RIDEN</span>
                    </h2>

                    {/* First paragraph */}
                    <p className="text-white text-base font-outfit leading-relaxed mb-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </p>

                    {/* Second paragraph */}
                    <p className="text-white text-base font-outfit leading-relaxed mb-12">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                    </p>

                    {/* Main image */}
                    <div className="mb-12">
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
                    <p className="text-white text-base leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </section>
            <div className=" mt-12 " >

                <AppDownloadSection />
            </div>
        </>
    )
}
