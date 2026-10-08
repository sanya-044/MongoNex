 import Hero from "../components/Hero";
import About from "./About";
import Founders from "./Founders";
import Projects from "./Projects";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <div className="relative z-20 bg-black">
        <About />
        <Founders />
        <Projects />
      </div>
    </main>
  );
}