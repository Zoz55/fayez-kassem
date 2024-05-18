import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-28 md:mt-36 mx-auto px-12 py-4">
      <Hero/>
        <About />
        <Projects/>
      </div>
    </main>
  );
}
