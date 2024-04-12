import Image from "next/image";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Jobs />
      <About />
      {/* <div className="flex"> */}
      <Skills />
      {/* <Skills ariaHidden={"true"} /> */}
      {/* </div> */}
    </main>
  );
}
