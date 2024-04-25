import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const phrases = [
  "I’m a multi-disciplinary art director with a focus on Digital",
  "Design, Interaction Design, and Photo Editing. I've been",
  "delivering creative and engaging solutions across brand",
  "identity, website, app, and digital media for almost 10 years."
];

export function MaskText() {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } }),
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  // Add a state variable to control animation playback
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimateText(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="body">
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className=" text-white font-normal will-change-auto overflow-hidden text-[2em]">
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={animateText ? "enter" : "initial"} // Control animation based on the state
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

export const About = () => {
  return (
    <div id='about' className="mx-auto relative flex justify-center items-center px-3 h-[100vh]">
      {/*<h1 className="mb-4 text-1xl font-normal uppercase opacity-30 text w-22 ml-10">About</h1>*/}
      <div className="z-10">
          <MaskText />
          <p className='mt-14 mr-20 uppercase font-Bebas Neue text-end'>Open to Work</p>
      </div>
    </div>
  );
};

export default About;
