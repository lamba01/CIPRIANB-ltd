import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";

function ContactInfo() {
  return (
    <section className="flex justify-center px-4 sm:px-0 mb-10">
      <div className="sm:w-2/3 w-full flex flex-col md:flex-row justify-center sm:gap-0 gap-5">
        {/* Address box - overlaps into map */}
        <div className="relative bg-white shadow-lg px-6 py-10 md:w-1/3 -mt-12">
          {/* Top border/pseudo element */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#D2153D]"></div>
          <div className="relative flex items-start gap-3 mt-2">
            <p className="text-[#00215B] font-semibold">
              Flat 6 Braithwaite Court, 47 Colnhurst Road, Watford, England,
              WD17 4BZ
            </p>
          </div>
        </div>

        {/* Phone box */}
        <div className="bg-white shadow-lg p-6 md:w-1/3  ">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#D2153D]">
              <FaPhoneAlt className="text-white text-xl" />
            </div>
            <p className="text-[#00215B] font-semibold">
              +44 7301 613598 <br /> +44 2087 534680
            </p>
          </div>
        </div>

        {/* Email box */}
        <div className="bg-white shadow-lg p-6 md:w-1/3  ">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#001ED3]">
              <LuMessageCircleMore className="text-white text-xl" />
            </div>
            <p className="text-[#00215B] font-semibold lowercase">
              info@CIPRIANB.co.uk
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
