import React, { useEffect } from "react";
import "./index.css";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Features from "./components/Features/Features";
import Operations from "./components/Operations/Operations";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const btnScrollTo = document.querySelector(".btn--scroll-to");
    const section1 = document.querySelector("#section--1");

    const handleScrollTo = () => {
      section1.scrollIntoView({ behavior: "smooth" });
    };

    if (btnScrollTo && section1) {
      btnScrollTo.addEventListener("click", handleScrollTo);
    }

    const allNavLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");

    const handleNavLinkClick = () => {
      if (navbarToggler.getAttribute("aria-expanded") === "true") {
        navbarToggler.click();
      }
    };

    allNavLinks.forEach(link => {
      link.addEventListener("click", handleNavLinkClick);
    });

    const revealSection = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    const allSections = document.querySelectorAll(".section");
    allSections.forEach(section => {
      sectionObserver.observe(section);
      section.classList.add("section--hidden");
    });

    // Cleanup event listeners and observers
    return () => {
      if (btnScrollTo) {
        btnScrollTo.removeEventListener("click", handleScrollTo);
      }
      allNavLinks.forEach(link => {
        link.removeEventListener("click", handleNavLinkClick);
      });
      allSections.forEach(section => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="about-page">
        <MainSection />
        <Features />
        <Operations />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}

export default App;
