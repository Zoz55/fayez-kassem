import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#121212]">
      <Navbar/>
      <div className="flex flex-col gap-10 p-6">
        <Hero/>
        <About />
        <Projects />
      </div>
      <ContactMe />
    </main>
  );
}
