import gsap from "gsap";
import styles from "./cloudSection.module.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const CloudSection = () => {
  const cloudRef0 = useRef(null);
  const cloudRef = useRef(null);
  const cloudRef2 = useRef(null);
  const cloudRef3 = useRef(null);
  const cloudRef4 = useRef(null);
  const cloudRef5 = useRef(null);
  const cloudRef6 = useRef(null);
  const cloudRef7 = useRef(null);
  const cloudReflower = useRef(null);
  useGSAP(() => {
    gsap.to(cloudRef.current, {
      x: 1000,
      duration: 50,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });
  useGSAP(() => {
    gsap.to(cloudReflower.current, {
      x: 100,
      duration: 40,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });
  useGSAP(() => {
    gsap.to(cloudRef0.current, {
      x: 1000,
      duration: 50,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });
  useGSAP(() => {
    gsap.to(cloudRef2.current, {
      y: -500,
      x: 100,
      ease: "linear",
      repeat: -1,
      duration: 100,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });
  useGSAP(() => {
    gsap.to(cloudRef3.current, {
      y: -100,
      x: 100,
      duration: 40,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });
  useGSAP(() => {
    gsap.to(cloudRef4.current, {
      y: -100,
      x: 100,
      duration: 60,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });
  useGSAP(() => {
    gsap.to(cloudRef6.current, {
      y: -600,
      x: 100,
      duration: 60,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });
  useGSAP(() => {
    gsap.to(cloudRef7.current, {
      y: -500,
      x: 100,
      duration: 60,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });
  useGSAP(() => {
    gsap.to(cloudRef5.current, {
      y: -300,
      x: 100,
      duration: 60,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <>
      <img
        ref={cloudReflower}
        className={styles.lowercloud}
        src="../asset/lowerCloud.png"
        alt=""
        srcset=""
      />
      <img
        ref={cloudRef}
        className={styles.cloud}
        src="../asset/CLOUD [2].webp"
        alt=""
        srcset=""
      />
      <img
        ref={cloudRef0}
        className={styles.cloud0}
        src="../asset/CLOUD [2].webp"
        alt=""
        srcset=""
      />
      <img
        ref={cloudRef3}
        className={styles.cloud3}
        src="../asset/CLOUD [2].webp"
        alt=""
        srcset=""
      />
      <img
        className={styles.cloudTo}
        ref={cloudRef4}
        src="../asset/Clouds_28.webp"
        alt="img"
      />
      <img
        className={styles.cloudTwo}
        ref={cloudRef5}
        src="../asset/Clouds_28.webp"
        alt="img"
      />
      <img
        className={styles.cloudSmallDark}
        ref={cloudRef2}
        src="../asset/Clouds_28.webp"
        alt="img"
      />
      <img
        className={styles.cloudSmallDark2}
        ref={cloudRef6}
        src="../asset/Clouds_28.webp"
        alt="img"
      />
      <img
        className={styles.cloudSmallDark3}
        ref={cloudRef7}
        src="../asset/Clouds_28.webp"
        alt="img"
      />
    </>
  );
};

export default CloudSection;
