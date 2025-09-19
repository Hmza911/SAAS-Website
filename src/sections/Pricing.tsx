export default function Pricing() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#EEF2FF] via-[#F5F3FF] to-[#FAF5FF]">
      <div className="container flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
          Pricing
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-[#010D3E] mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, provident magnam.
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="border border-gray-300 rounded-2xl shadow-lg w-[350px] h-[580px] p-6 flex flex-col items-center text-center bg-white 
          hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-gray-800">Free</h2>
            <p className="text-3xl font-bold text-black mt-2">$0/month</p>

            <button className="mt-6 mb-6 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-all duration-300">
              Get started for free
            </button>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>✔ Up to 5 project members</li>
              <li>✔ Unlimited tasks and projects</li>
              <li>✔ 2GB storage</li>
              <li>✔ Integrations</li>
              <li>✔ Basic support</li>
            </ul>
          </div>

          {/* Card 2 (Featured - Black) */}
          <div className="border border-black rounded-2xl shadow-2xl w-[380px] h-[600px] p-8 flex flex-col items-center text-center bg-black text-white scale-105
          hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold">Pro</h2>
            <p className="text-4xl font-bold mt-2">$29/month</p>

            <button className="mt-6 mb-6 bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300">
              Sign up now
            </button>

            <ul className="mt-4 space-y-3 text-gray-200">
              <li>✔ Up to 50 project members</li>
              <li>✔ Unlimited tasks and projects</li>
              <li>✔ 50GB storage</li>
              <li>✔ More integrations</li>
              <li>✔ Priority support</li>
              <li>✔ Advanced support</li>
              <li>✔ Export support</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-300 rounded-2xl shadow-lg w-[350px] h-[580px] p-6 flex flex-col items-center text-center bg-white 
          hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-gray-800">Enterprise</h2>
            <p className="text-3xl font-bold text-black mt-2">$99/month</p>

            <button className="mt-6 mb-6 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-all duration-300">
              Contact sales
            </button>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>✔ Up to 100+ project members</li>
              <li>✔ Unlimited tasks and projects</li>
              <li>✔ 200GB storage</li>
              <li>✔ All integrations</li>
              <li>✔ Priority support</li>
              <li>✔ API access</li>
              <li>✔ Export support</li>
              <li>✔ Customization</li>
              <li>✔ Advanced analytics</li>
              <li>✔ Added security features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
