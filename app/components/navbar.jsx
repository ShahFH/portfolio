import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import '../globals.css';
import gsap from 'gsap';
import AnimatedLink from '../anim/AnimatedLink';

export default function Navbar() {
    const container = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = useRef(null);

    useEffect(() => {
        gsap.set(".menu-link-item-holder", { y: 75, opacity: 0 });
      
        tl.current = gsap.timeline({ paused: true })
          .to(".menu-overlay", {
            duration: 1.25,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut"
          })
          .to(".menu-link-item-holder", {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.5
          });
      }, []);

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='menu-container' ref={container}>
            <div className='menu-bar'>
                <div className='menu-logo'>
                    <Link className='logo' href="/">Shah</Link>
                </div>
                <div className='menu-open' onClick={toggleMenu}>
                {/** The reason I used Div here instead of Paragraph tag it case Hydration error if we do so */}
                <div className=" px-6 py-3 bg-transparent text-white border rounded-full w-max hover:bg-[#fff] transition-colors hover:text-[#191919]">
                    <AnimatedLink title="Menu" />
                </div>
                </div>
            </div>
            {/** Menu Overlay */}
            <div className='menu-overlay'>
                <div className='menu-overlay-bar menu-bar'>
                    <div className='menu-logo logo'>Shah</div>
                    {/** Close overlay button */}
                    <div className='menu-close' onClick={toggleMenu}>
                        <div className=" px-6 py-3 bg-transparent border text-white rounded-full w-max hover:bg-[#fff] transition-colors hover:text-[#191919]">
                            <AnimatedLink title="Close" />
                        </div>
                    </div>
                </div>
                <div className='menu-copy'>
                    <div className='menu-links leading-tight tracking-wide'>
                        <Link className='menu-link-item-holder' href={"/"}>Home</Link>
                        <Link className='menu-link-item-holder' href={"#about"}>About</Link>
                        <Link className='menu-link-item-holder' href="#project">Project</Link>
                        <Link className='menu-link-item-holder' href="#services">Services</Link>
                        <Link className='menu-link-item-holder' href="#contact">Contact</Link>
                    </div>
                    {/** socail icons */}
                    <div className='menu-info'>
                        <div className='menu-info-col flex flex-col justify-center content-end linksfont'>
                            <a href='https://twitter.com/ShahFaisal_H'><AnimatedLink title="Twitter" /></a>
                            <a href='https://github.com/ShahFH'><AnimatedLink title="Github" /></a>
                            <a href='https://shahblogg.netlify.app/'><AnimatedLink title="Blog" /></a>
                            <a href='https://www.linkedin.com/in/shah-faisal-h/'><AnimatedLink title="LinkedIn" /></a>
                        </div>
                        {/** Rondom Text  */}
                        <div className='menu-info-col'>
                            <p className=' text-[2vw] tracking-tight '>Take the first step. Let’s Connect.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
