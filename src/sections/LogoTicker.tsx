"use client";

import Image from "next/image";

export default function LogoTicker() {
  return (
  <div className="bg-white py-8 md:py-12">
  <div className="container ">
    <div className="flex  overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
    <div className="flex gap-14 flex-none">

      <Image
        src="/icons/Logo-acme.png"
        alt="1"
        width={120}
        height={60}
        className="h-12 w-auto object-contain"
      />
      <Image
        src="/icons/Logo-apex.png"
        alt="2"
        width={120}
        height={60}
        className="h-12 w-auto object-contain"
      />
      <Image
        src="/icons/Logo-celestial.png"
        alt="3"
        width={120}
        height={60}
        className="h-12 w-auto object-contain"
      />
      <Image
        src="/icons/Logo-echo.png"
        alt="4"
        width={120}
        height={60}
        className="h-12 w-auto object-contain"
      />
      <Image
        src="/icons/Logo-pulse.png"
        alt="5"
        width={120}
        height={60}
        className="h-12 w-auto object-contain"
      />
      <Image
        src="/icons/Logo-quantum.png"
        alt="6"
        width={120}
        height={60}
        className="h-12 w-auto object-contain"
      />
      </div>
    </div>
    </div>
    </div>
  );
}
