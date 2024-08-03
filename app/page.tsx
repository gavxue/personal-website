import type { Metadata } from "next";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export const metadata: Metadata = {
  title: "Gavin Xue",
  description:
    "Nice to meet you, I'm Gavin. I'm a second year Computer Science student at the University of Waterloo. I enjoy applying modern technologies to solve complex problems.",
};

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}
