import About from "@/components/About";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Jobs />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </main>
  );
}
