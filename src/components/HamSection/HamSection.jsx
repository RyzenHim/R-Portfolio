// import HamSectionArea from "./HamSectionArea.jsx";
import "./HamSection.css";
import { useState } from "react";
import "./HamSectionArea.css";
import HamSecSocial from "./HamSecSocial";
import NavHero from "./NavHero";
// import NavContent from "../NavSection/NavContent";

function HamSection() {
  const [isActive, setIsActive] = useState(false);
  // const [isactive, setIsactive] = useState(false);

  function toggleHam(e) {
    setIsActive(!isActive);
  }
  // const toggleHam = (e) => {
  //   setIsActive(!isActive);
  //   // setIsactive(!isactive);
  // };
  // const toggleNavContent = () => {};

  // function event(e) {
  //   console.log(e.target.value);
  //   toggleHam(e);
  //   toggleNavContent(e);
  // }
  return (
    <>
      <div>
        <div className="w-full ">
          <label class="hamburger">
            <input type="checkbox" onChange={toggleHam} />
            <svg viewBox="0 0 32 32">
              <path
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                class="line line-top-bottom"
              ></path>
              <path d="M7 16 27 16" class="line"></path>
            </svg>
          </label>
        </div>

        <div className={isActive ? "active" : "notActive"}>
          <NavHero />
          <HamSecSocial />
        </div>
        {/* <div className="navContentShown">
          <NavContent />
        </div> */}
      </div>
    </>
  );
}

export default HamSection;
