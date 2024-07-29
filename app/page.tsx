import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

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
