import React from "react";
import { FiBox, FiHome, FiTruck } from "react-icons/fi";

function Subhero() {
  return (
    <div className="relative grid md:grid-cols-3 gap-0 max-w-6xl mx-auto px-4">
      {/* Box 1 */}
      <div className="order-3 sm:order-1 bg-[#00215B] p-8 shadow text-center">
        <h2 className="text-4xl font-bold text-white">20+</h2>
        <p className="text-gray-300">Completed Projects</p>
      </div>

      {/* Box 2 */}
      <div className=" order-2 sm:order-2 bg-[#D2153D] p-8 shadow text-center">
        <h2 className="text-4xl font-bold text-white">5+</h2>
        <p className="text-gray-300">Years of Experience</p>
      </div>

      {/* Box 3 - Big Info Block */}
      <div className="order-1 sm:order-3 bg-gray-50 p-4 shadow-md text-left sm:col-span-1 sm:row-span-2 relative -mt-20 sm:-mt-32 z-20">
        <h3 className="text-2xl font-bold mb-6 text-center">
          We Construct and Manage Places and Infrastructure
        </h3>
        <ul className="">
          <li>
            <div className="flex items-center gap-3">
              <FiBox className="text-[#D2153D] sm:text-9xl text-9xl mt-1" />
              <div>
                <strong>Wholesale Materials Supply</strong>
                <p className="text-sm text-gray-600">
                  Reliable access to top-quality construction materials,
                  delivered when and where you need them.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3">
              <FiHome className="text-[#D2153D]  sm:text-9xl text-9xl mt-1" />
              <div>
                <strong>Domestic & Commercial Construction</strong>
                <p className="text-sm text-gray-600">
                  From small homes to large commercial buildings, we handle
                  projects with precision and care.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3">
              <FiTruck className="text-[#D2153D]  sm:text-9xl text-9xl mt-1" />
              <div>
                <strong>Site Logistics & Management</strong>
                <p className="text-sm text-gray-600">
                  We oversee the flow of materials on-site, ensuring efficiency,
                  safety, and reduced delays.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Subhero;
