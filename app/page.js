"use client"
import Services from './components/service'
import About from "./components/about";
import MainPage from "./components/mainPage";
import Navbar from "./components/navbar";
import Project from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
    <Navbar />
    <MainPage />
    <About />
    <Project />
    <Services />
    <Contact />
    <Footer />
    </>
  );
}
