
import Hero from "./components/Hero";
import About from "./components/About";
import Info from "./components/Info";
import Footer from "./components/Footer";


export default function Home() {

  return (
  <>
      <div className="bg-hero px-4 pt-8 pb-16 lg:px-28 md:px-10" >
        <Hero />
      </div>
      <div className="px-10 pt-8 pb-16 lg:px-28 md:px-10">
        <About />
      </div>
      <div className="px-4 py-8 md:p-24 ">
        <Info />
      </div>
      <div className="px-4 pt-8 pb-16 md:p-24 md:pt-10 md:px-10 lg:p-8 bg-yellow-400 flex justify-center items-center">
        <Footer />
      </div>

      </>
  );
}






