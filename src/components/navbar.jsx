import logo from "../assets/logo.png";
export default function navBar() {
  return (
    <nav className="flex w-full justify-between items-center px-5 sm:px-10 z-40 fixed top-0 backdrop-blur-3xl h-[50px]">
      <div className="flex items-center">
        <img className="h-[40px] w-[40px]" src={logo} alt="" />
        <h3 className=" font-bold text-xl text-yellow-500 hidden sm:block">
          CIPRIANB
        </h3>
      </div>
      <div className="flex gap-5 md:gap-10 capitalize">
        <a
          className="text-sm md:text-lg text-black font-semibold hover:underline"
          href="#about"
        >
          about
        </a>
        <a
          className="text-sm md:text-lg text-black font-semibold hover:underline"
          href="#services"
        >
          services
        </a>
        <a
          className="text-sm md:text-lg text-black font-semibold hover:underline"
          href="#contact"
        >
          contact
        </a>
      </div>
    </nav>
  );
}
