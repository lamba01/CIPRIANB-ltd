import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="grid md:grid-cols-2 grid-cols-1 text-white">
      {/* Left Section - Blue */}
      <div className="bg-[#D2153D] p-8 flex flex-col justify-between">
        <div>
          <img
            src={logo}
            alt="CiprianB Ltd Logo"
            className="sm:w-32 w-20 h-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">CiprianB Ltd</h2>
          <p className="mb-6 text-sm">
            Professional construction, renovation, and maintenance services in
            the UK. Delivering excellence, safety, and trust in every project.
          </p>
        </div>
        <p className="text-xs mt-6">
          © {new Date().getFullYear()} CiprianB Ltd. All rights reserved.
        </p>
      </div>

      {/* Right Section - Red */}
      <div className="bg-[#00215B] p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>
                Flat 6 Braithwaite Court, 47 Colnhurst Road, Watford, England,
                WD17 4BZ
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt />
              <div>
                <a href="tel:+447301613598" className="block hover:underline">
                  +44 7301 613598
                </a>
                <a href="tel:+442087534680" className="block hover:underline">
                  +44 2087 534680
                </a>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <a href="mailto:info@ciprianb.co.uk" className="hover:underline">
                info@ciprianb.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
