"use client";

import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#EEF2FF] via-[#F5F3FF] to-[#FAF5FF]">
      <div className="container flex flex-col items-center text-center">
        <div className="inline-block border-2 border-black/20 px-4 py-1 rounded mb-4">
          Version 2.0 is here
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
          What our users say
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-[#010D3E] mb-12">
          From intuitive designs to powerful features, our app has
          become an essential tool for users around the world.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
          <p className="text-gray-700 italic mb-4">
            This app completely changed the way I organize my work. It&apos;s so intuitive and easy to use!
          </p>
          <div className="flex items-center gap-4">
            <Image src="/icons/avatar-1.png" alt="Sarah Johnson" width={48} height={48} className="rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-sm text-gray-500">Product Manager</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
          <p className="text-gray-700 italic mb-4">
            The best productivity tool I&apos;ve ever used. The features are powerful yet simple.
          </p>
          <div className="flex items-center gap-4">
            <Image src="/icons/avatar-2.png" alt="Michael Chen" width={48} height={48} className="rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900">Michael Chen</h3>
              <p className="text-sm text-gray-500">Developer</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
          <p className="text-gray-700 italic mb-4">
            It helps me and my team stay aligned. The collaboration features are top-notch!
          </p>
          <div className="flex items-center gap-4">
            <Image src="/icons/avatar-3.png" alt="Aisha Khan" width={48} height={48} className="rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900">Aisha Khan</h3>
              <p className="text-sm text-gray-500">Team Lead</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
          <p className="text-gray-700 italic mb-4">
            &quot;I love the design. Clean, elegant, and easy to navigate. Highly recommend it!&quot;
          </p>
          <div className="flex items-center gap-4">
            <Image src="/icons/avatar-4.png" alt="David Lee" width={48} height={48} className="rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900">David Lee</h3>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
          <p className="text-gray-700 italic mb-4">
            The support team is fantastic. They always respond quickly and solve any issue.
          </p>
          <div className="flex items-center gap-4">
            <Image src="/icons/avatar-5.png" alt="Maria Garcia" width={48} height={48} className="rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900">Maria Garcia</h3>
              <p className="text-sm text-gray-500">Entrepreneur</p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
          <p className="text-gray-700 italic mb-4">
            A must-have tool for any team. It saves us hours every week and boosts productivity.
          </p>
          <div className="flex items-center gap-4">
            <Image src="/icons/avatar-6.png" alt="James Wilson" width={48} height={48} className="rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900">James Wilson</h3>
              <p className="text-sm text-gray-500">Startup Founder</p>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
          <p className="text-gray-700 italic mb-4">
            This tool is reliable and keeps improving every update!
          </p>
          <div className="flex items-center gap-4">
            <Image src="/icons/avatar-7.png" alt="Emily Davis" width={48} height={48} className="rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900">Emily Davis</h3>
              <p className="text-sm text-gray-500">Project Coordinator</p>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
          <p className="text-gray-700 italic mb-4">
            Our team collaboration has never been smoother.
          </p>
          <div className="flex items-center gap-4">
            <Image src="/icons/avatar-8.png" alt="Robert Miller" width={48} height={48} className="rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900">Robert Miller</h3>
              <p className="text-sm text-gray-500">Scrum Master</p>
            </div>
          </div>
        </div>

        {/* Card 9 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
          <p className="text-gray-700 italic mb-4">
            Clean, fast, and efficient. Everything we needed in a productivity app.
          </p>
          <div className="flex items-center gap-4">
            <Image src="/icons/avatar-9.png" alt="Sophia Taylor" width={48} height={48} className="rounded-full" />
            <div>
              <h3 className="font-semibold text-gray-900">Sophia Taylor</h3>
              <p className="text-sm text-gray-500">Marketing Lead</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
