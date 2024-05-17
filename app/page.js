
import Hero from "./components/Hero";
import About from "./components/About";
import Info from "./components/Info";
import Footer from "./components/Footer";


export default function Home() {

  return (
  <>
      <div className="bg-heropattern bg-no-repeat bg-cover bg-top min-h-screen px-4 pt-8 lg:pt-0 pb-16 lg:px-28 md:px-10" >
        <Hero />
      </div>
      <div className="px-10 pt-8 pb-16 lg:px-28 md:px-10">
        <About />
      </div>
      <div className="px-4 py-4 md:p-4 lg:px-10  ">
        <Info />
      </div>
      <div className="px-4 py-4 bg-yellow-400 flex justify-center items-center">
        <Footer />
      </div>

      </>
  );
}






