"use client";

import { rollback } from "@/data/rollback";
import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";

export const MySafAppSection = () => {
  return (
    <section
      id="my-safaricom"
      className="relative flex flex-col items-center justify-between py-4 lg:py-12"
    >
      <div className="flex justify-center lg:py-8 mb-5">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#014421]"></span>
          <span className="bg-[#014421] w-fit text-white p-2 px-5 text-xl rounded-md">
            MY SAFARICOM APP
          </span>
          <span className="w-24 h-[2px] bg-[#014421]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10">
          <p className="text-gray-200 text-sm lg:text-lg">
            {rollback.mySafBio}
          </p>
        </div>

        <div className="order-1 lg:order-2 from-[#014421] border-[#52b44b] relative rounded-lg border bg-gradient-to-r to-[#52b44b]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500 to-red-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src={rollback.mySafPic}
              width={280}
              height={280}
              alt={`My Safaricom Screenshots`}
              className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer mb-5"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center">
          <Link
            href={rollback.mySafUrl}
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-green-900 to-[#107b61] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            target="_blank"
            role="button"
          >
            <span>Download The APK</span>
            <MdDownload size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
