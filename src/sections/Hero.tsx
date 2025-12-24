"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="p-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_150%_100%_at_bottom_center,#FEE2E2,#BFDBFE_40%,#DBEAFE_90%)]">
      <div className="md:flex items-center">
        {/* Left Text Section */}
        <div className="md:w-[478px] mt-10 md:mt-30">
          {/* Badge */}
          <div className="inline-block border-2 border-black/20 px-4 py-1 rounded mb-4">
            Version 2.0 is here
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>

          {/* Paragraph */}
          <p className="max-w-2xl text-xl text-[#010D3E] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At error
            voluptate neque maxime pariatur veniam similique labore itaque expedita
            voluptatibus repellat quisquam culpa eos quo eum, accusantium nesciunt.
            Deleniti, ex!
          </p>

          {/* Buttons side by side */}
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Get For Free
            </button>
            <button className="flex items-center text-black px-6 py-3 rounded-lg hover:bg-gray-400  transition">
              <span className="mr-2">Learn more</span>
              <Image
                src="/icons/arrow-right.svg"
                alt="Arrow Right"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className="
            relative w-full mt-20
            h-56 sm:h-64 md:h-[648px] md:mt-0 
            md:flex-1 lg:h-[420px] xl:h-[520px] 2xl:h-[640px]
          "
        >
          <Image
            src="/icons/coca4.png"
            alt="Coca Cola Can"
            fill
            className="object-contain rounded-lg md:absolute  md:w-auto md:max-w-none md:-left-6"
          />
          <Image
            src="/icons/small-rotate1.png"
            alt="Small can"
            width={220}
            height={220}
            className=" md:block top-20  left- md:absolute object-contain"
          />
        </div>
      </div>
    </section>
  );
}
