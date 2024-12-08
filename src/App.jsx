import { lazy } from "react";
const Navbar = lazy (() => import("./sections/navbar"));
const Hero = lazy (() => import("./sections/hero"));
const About = lazy (() => import("./sections/About"));
const Projects = lazy (() => import("./sections/Projects"));
const Clients = lazy (() => import("./sections/Clients"));
const Contact = lazy (() => import("./sections/contact"));
const Footer = lazy (() => import("./sections/footer"));
const Experience = lazy (() => import("./sections/Experience"));

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
