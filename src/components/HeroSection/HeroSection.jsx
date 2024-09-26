import Buttons from "./Buttons";
import HeroImg from "./HeroImg";
import "./HeroSection.css";
import CloudSection from "../HeroAnimationSection/CloudSection.jsx";
import StarAnimationSec from "../HeroAnimationSection/StarAnimationSec.jsx";
function HeroSection() {
  return (
    <>
      <div className="bg-slate-400 h-[100vh] w-[100%] relative overflow-hidden">
        <div className="absolute right-[15vw] w-fit top-[30vh] h-[40vh] flex flex-col justify-between border-solid z-[9]	 ">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-2xl font-bold text-[#2C303C] shadow-slate-300">
              Hey I'm
            </h2>
            <h1 className="name">Himanshu</h1>
            <h2 className="text-center font-bold tracking-wider text-[white]">
              Front End Web Developer
            </h2>
          </div>
          <div className="flex justify-around">
            <Buttons buttonName={`Resume`} />
            <Buttons buttonName={`Hire Me`} />
          </div>
        </div>
        <div>
          <HeroImg />
        </div>
        <div>
          <CloudSection />
        </div>
        <StarAnimationSec />
      </div>
    </>
  );
}

export default HeroSection;
