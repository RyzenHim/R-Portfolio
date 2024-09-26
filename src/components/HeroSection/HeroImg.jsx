import styles from "./HeroImg.module.css";

function HeroImg() {
  return (
    <>
      <div className={styles.imgWrapper}>
        <img
          className="object-cover	h-[100vh]	 w-[100%] "
          src="\asset\heroImg.jpg"
          alt="heroImg"
          srcset=""
        />
      </div>
    </>
  );
}
export default HeroImg;
