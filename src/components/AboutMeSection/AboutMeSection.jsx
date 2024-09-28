import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const AboutMeSection = (prop) => {
  const textRef = useRef(null);

  const textElemnt = textRef.current;
  const bodElm = prop.ref;
  console.log(bodElm);
  useEffect(() => {
    gsap.to(textElemnt, {
      transform: "translateX(-50%)",
      // y: 100,
      duration: 5,
      ease: "elastic.out(1, 0.3)",
      scrollTrigger: {
        trigger: textRef,
        scroller: bodElm,
        markers: true,
        scrub: true,
        // markers: { start: "start", end: "end" },
        // markers: { start: "0%", end: "100%" },
        // markers: { start: "0%", end: "100%", labels: { 0: "start", 100: "end" } },
        start: "top 80%",
        end: "top 20%",
        toggleActions: "restart pause reverse pause",
      },
    });
    // useGSAP(() => {

    // });
  }, []);

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
