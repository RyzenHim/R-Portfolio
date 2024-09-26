import gsap from "gsap";
import styles from "./MouseMoveSec.module.css";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
("useClient");
const MouseMoveSec = () => {
  const circle = useRef(null);
  const size = 35;
  const color = "white";

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const manageeMouseMove = (e) => {
    const { clientX, clientY } = e;
    // console.log(clientX + " " + clientY);
    mouse.current = {
      x: clientX,
      y: clientY,
    };
    moveCircle(mouse.current.x, mouse.current.y);
  };
  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };
  useEffect(() => {
    window.addEventListener("mousemove", manageeMouseMove);
    // return () => window.removeEventListener("mousemove", manageeMouseMove);
  }, []);

  return (
    <div
      style={{ width: size, height: size, background: color }}
      ref={circle}
      className={styles.mouseMoveDiv}
    ></div>
  );
};

export default MouseMoveSec;
