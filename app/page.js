import Image from "next/image";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Jobs />
      <About />
    </main>
  );
}
