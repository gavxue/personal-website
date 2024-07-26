import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <Header />
      <About />
      <Education />
      <Footer />
    </main>
  );
}
