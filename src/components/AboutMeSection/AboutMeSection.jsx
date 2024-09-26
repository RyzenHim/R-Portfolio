import gsap from "gsap";
import { useEffect, useRef } from "react";

const AboutMeSection = () => {
  const textRef = useRef(null);
  useEffect(() => {
    const textElemnt = textRef.current;
    gsap.fromTo(
      { textElemnt, x: window.innerWidth },
      { x: -textElemnt.offsetWidth, ease: "none", duration: 10 },
      []
    );
  });

  return (
    <>
      <div className="h-screen w-full bg-[#2D313D] overflow-hidden ">
        <div ref={textRef} className="w-[100%] ">
          <h1 className="text-[#FF4500] text-[20vw] font-black whitespace-nowrap tracking-wide px-11">
            About Me!
          </h1>
        </div>

        <p>Hello !</p>
        <p>
          I'm Himanshu, a passionate web developer with a love for crafting
          innovative digital experiences. With a background in computer science
          ( M.C.A) , I've honed my skills in front-end and back-end development
          to bring ideas to life in the digital realm.
        </p>
      </div>
    </>
  );
};

export default AboutMeSection;
