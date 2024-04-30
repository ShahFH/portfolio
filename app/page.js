"use client"
import Services from './components/service'
import About from "./components/about";
import MainPage from "./components/mainPage";
import Navbar from "./components/navbar";
import Project from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import Cursor from './anim/Cursor'
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {

  const locomotiveScroll = new LocomotiveScroll();

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
