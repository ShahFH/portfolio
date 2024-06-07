"use client"
import Services from './components/service'
import About from "./components/about";
import MainPage from "./components/mainPage";
import Navbar from "./components/navbar";
import Project from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import Cursor from './anim/Cursor'

export default function Home() {

  return (
    <>
    <Cursor />
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
