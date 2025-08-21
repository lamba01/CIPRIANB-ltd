import React from "react";
import { FiBox, FiHome, FiTruck } from "react-icons/fi";

function Subhero() {
  return (
    <div className="relative grid md:grid-cols-3 gap-0 max-w-6xl mx-auto px-4">
      {/* Box 1 */}
      <div className="bg-[#00215B] p-6 shadow text-center">
        <h2 className="text-3xl font-bold text-white">20+</h2>
        <p className="text-gray-300">Completed Projects</p>
      </div>

      {/* Box 2 */}
      <div className="bg-[#D2153D] p-6 shadow text-center">
        <h2 className="text-3xl font-bold text-white">5+</h2>
        <p className="text-gray-300">Years of Experience</p>
      </div>

      {/* Box 3 - Big Info Block */}
      <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-left md:col-span-1 md:row-span-2 relative -mt-12 md:-mt-20">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          We Construct and Manage Places and Infrastructure
        </h3>
        <ul className="space-y-5">
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
