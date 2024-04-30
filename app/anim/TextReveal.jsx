import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import SplitType from 'split-type';

const TextRevealAnimation = ({ title, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animation
    const ourText = new SplitType(textRef.current, { types: 'chars' });
    const chars = ourText.chars;

    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

    gsap.set(chars, { y: 100, opacity: 0 }); // Initial state

    const trigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: 'top 80%', // Adjust the start position as needed
      onEnter: () => {
        gsap.to(chars, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: 'power4.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [textRef]);

  const clipPathStyle = {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
  };

  return (
    <p ref={textRef} className={`our-text text-4xl ${className}`} style={clipPathStyle}>
      {title}
    </p>
  );
};

export default TextRevealAnimation;