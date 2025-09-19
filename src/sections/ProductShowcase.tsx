"use client";

import Image from "next/image";

export default function ProductShowcase() {
    return (
        <section className="py-12">
            <div className="container mx-auto text-center">
                {/* Text */}
                <div className="inline-block border-2 border-black/20 px-4 py-1 rounded mb-4">
                    Boost your productivity
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                    A more effective way to track your progress
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-[#010D3E] mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                    eum architecto perferendis provident odio illum voluptate expedita
                    atque corporis incidunt nesciunt sapiente delectus perspiciatis vitae
                    id, ex et veritatis. Inventore.
                </p>

                {/* Full responsive image */}
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
                    <Image
                        src="/icons/product-image.png"
                        alt="SaaS Product"
                        fill
                        className="object-contain rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
