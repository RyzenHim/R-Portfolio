import "./HamSection.css";
import { useState } from "react";
import HamSecSocial from "./HamSecSocial";
import NavHero from "./NavHero";
import HamIcon from "./HamIcon";
// import

function HamSection() {
  const [isActive, setIsActive] = useState(false);

  function toggleHam(e) {
    setIsActive(!isActive);
  }

  return (
    <>
      <HamIcon chnge={toggleHam} />

      <div className={isActive ? "active" : "notActive"}>
        <NavHero />
        <HamSecSocial />
      </div>
    </>
  );
}

export default HamSection;
