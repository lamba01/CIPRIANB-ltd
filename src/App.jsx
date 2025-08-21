import Nav from "./components/navbar";
import Hero from "./section/Hero";
import Subhero from "./section/Subhero";
import About from "./section/About";
import Services from "./section/Services";
import Map from "./components/Map";
import Mapsection from "./section/Mapsection";
import Testimonial from "./section/Testimonial";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Subhero />
      <About />
      <Services />
      <Map />
      <Mapsection />
      <Testimonial />
    </div>
  );
}

export default App;
