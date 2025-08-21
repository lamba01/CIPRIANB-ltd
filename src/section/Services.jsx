import React from "react";
import serviceimg1 from "../assets/services1.png";
import serviceimg2 from "../assets/services2.png";
import serviceimg3 from "../assets/services3.png";
import serviceimg4 from "../assets/services4.png";

function Services() {
  return (
    <section className="flex flex-col lg:flex-row w-full py-20">
      {/* First big block */}
      <div
        className="relative w-full lg:w-1/2 h-[45vh] lg:h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${serviceimg1})` }}
      ></div>

      {/* Right side (3 smaller ones in a row) */}
      <div className="flex w-full lg:w-1/2 sm:flex-row flex-col">
        {/* Service 2 */}
        <div
          className="relative sm:w-1/3 w-full h-[20vh] lg:h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceimg2})` }}
        >
          <div className="absolute inset-0 bg-[#00215B]/80 flex flex-col items-start justify-start px-2 py-12">
            <h2 className="text-white text-lg lg:text-xl font-bold text-start">
              Project Management
            </h2>
            <p className="text-white">
              We handle projects from concept to completion, ensuring every
              detail is managed with precision.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div
          className="relative sm:w-1/3 w-full h-[20vh] lg:h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceimg3})` }}
        >
          <div className="absolute inset-0 bg-[#D2153D]/80 flex flex-col items-start justify-start px-2 py-12">
            <h2 className="text-white text-lg lg:text-xl font-bold text-start">
              Renovation & Maintenance
            </h2>
            <p className="text-white">
              We offer comprehensive renovation and maintenance services to keep
              your property in top condition.
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div
          className="relative sm:w-1/3 w-full h-[20vh] lg:h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceimg4})` }}
        >
          <div className="absolute inset-0 bg-[#00215B]/80 flex flex-col items-start justify-start px-2 py-12">
            <h2 className="text-white text-lg lg:text-xl font-bold text-start">
              Materials Supply
            </h2>
            <p className="text-white">
              Our reliable supply chain guarantees that your projects run
              smoothly without delays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
