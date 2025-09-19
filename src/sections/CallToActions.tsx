 "use client";

 import Image from "next/image";
 export default function CallToActions() {
  return (
    <section className="py-16">
      <div className="container flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight 
          bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
          Sign up for free today
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[#010D3E] mb-8">
          Celebrate the joy of accomplishment with an app designed 
          to track your progress and motivate your efforts.
        </p>
          <div className="flex gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                      Get For Free
                    </button>
                    <button className="flex items-center text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition">
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
      
    </section>
  );
}
