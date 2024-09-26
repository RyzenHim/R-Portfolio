import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import styles from "./NavContent.module.css";

function NavContent() {
  const navContentRef = useRef(null);

  useGSAP(() => {
    gsap.from(navContentRef.current, {
      x: 5000,
      duration: 2,
      ease: "power4",
      stagger: 0.2,
      yoyo: true,
      opacity: 0,
    });
  });

  let listArray = ["Home", "About", "Skills", "Projects", "Social"];

  return (
    <div
      className="  absolute z-[46] top-[1.5vh] h-12 left-[180px] "
      ref={navContentRef}
    >
      <div className={styles.dot}></div>
      <ul
        className={`${styles.shadow} flex backdrop-blur-md h-full justify-around items-center text-[#ffffff] rounded-[5px] px-10 tracking-wider w-[500px] 	`}
      >
        {listArray.map((e) => {
          return (
            <a className="text-base font-semibold	" href="#">
              {e}
            </a>
          );
        })}
      </ul>
    </div>
  );
}

export default NavContent;
