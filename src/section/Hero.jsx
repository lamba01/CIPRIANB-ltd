import React from "react";
import heroimg from "../assets/heroimg.png";
import Button from "../components/Contactbtn";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-no-repeat bg-cover bg-center max-h-[85vh] sm:max-h-[93vh] sm:min-h-[90vh] overflow-hidden mt-10"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="absolute left-0 top-0 h-full w-full  bg-black/70 sm:bg-black/70 z-10" />
      <div className="absolute inset-0 bg-black/20 sm:bg-transparent z-10" />
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white z-20 space-y-4 sm:max-w-1/2 px-4 sm:px-10">
        <h1 className="sm:text-4xl text-2xl font-bold text-start max-w-2xl">
          Strong Materials. Stronger Foundations.
        </h1>
        <p>
          From wholesale construction materials to complete domestic and
          commercial building projects, we make sure every site is supplied with
          the right resources at the right time — ensuring efficiency,
          reliability, and quality results from start to finish.
        </p>
        <p>
          Our team of experts is dedicated to providing you with the best
          materials and services, ensuring your projects are built to last.
        </p>
        <Button text="Contact Us Today" />
      </div>
    </section>
  );
}
