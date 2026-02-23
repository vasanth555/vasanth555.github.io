import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
