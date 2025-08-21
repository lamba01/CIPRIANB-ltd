import React from "react";
import aboutimg from "../assets/aboutimg.png";
import Button from "../components/Contactbtn";

export default function About() {
  return (
    <section className="flex sm:flex-row flex-col items-center gap-5 px-4 sm:px-20 mt-20">
      <div className="flex flex-col gap-8 items-start w-full sm:w-1/2 order-2">
        <div>
          <span className="text-[#D2153D] uppercase font-semibold text-sm mb-2">
            about us
          </span>
          <h1 className="sm:text-4xl text-2xl capitalize font-bold">
            with our knowledge we guarantee success
          </h1>
        </div>
        <p className="text-[#41444B]">
          With our extensive industry knowledge and hands-on experience, we
          provide reliable solutions that guarantee the success of every
          project. From sourcing and supplying high-quality construction
          materials to managing complex building works, we are committed to
          delivering excellence, efficiency, and lasting value for our clients.
        </p>
        <Button text="Learn More" />
      </div>
      <img
        src={aboutimg}
        alt="About Us"
        className="sm:w-1/2 w-full h-auto object-contain"
      />
    </section>
  );
}
