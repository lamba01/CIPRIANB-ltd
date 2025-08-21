import React, { useState } from "react";
import testimonialimg from "../assets/testimonial.png";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Daniel Knight",
      role: "Site Manager",
      text: "CIPRIANB kept our site supplied with aggregates, steel and blocks without a single delay. Their team coordinated deliveries around our schedule — zero downtime.",
    },
    {
      name: "Priya Shah",
      role: "Property Developer",
      text: "They handled the shell build and interior works on our mixed-use project. Professional crew, clear communication and quality finishes throughout.",
    },
    {
      name: "Alan Reeves",
      role: "Facilities Manager",
      text: "We use CIPRIANB for maintenance and small works. Quick turnarounds, fair pricing and tidy workmanship — exactly what we need.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-10 px-4 sm:px-20">
      {/* Heading */}
      <div className="text-center mb-8">
        <span className="text-[#D2153D] uppercase font-semibold text-sm mb-2 block">
          testimonials
        </span>
        <h1 className="sm:text-4xl text-2xl capitalize font-bold">
          our clients say
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        {/* Image Left */}
        <div>
          <img
            src={testimonialimg}
            alt="handshake"
            className="w-full max-h-[50vh] sm:max-h-[80vh] rounded-2xl shadow-lg"
          />
        </div>

        {/* Testimonial Text Right */}
        <div className="relative bg-gray-50 p-6 rounded-2xl shadow-md">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-6 bg-[#001ED3] p-3 rounded-full">
            <FaQuoteLeft className="text-white text-xl" />
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 italic mb-4">
            {testimonials[current].text}
          </p>
          <h3 className="text-[#00215B] font-semibold">
            {testimonials[current].name}
          </h3>
          <span className="text-sm text-gray-500">
            {testimonials[current].role}
          </span>

          {/* Controls */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 border rounded-lg hover:bg-[#001ED3] hover:text-white transition"
            >
              Prev
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 border rounded-lg hover:bg-[#001ED3] hover:text-white transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
