import React from "react";
import styles from "./NavHero.module.css";
function NavHero() {
  return (
    <div className={styles.NavHeroImgDiv}>
      <img
        src="../asset/model.png"
        className={styles.NavHeroImg}
        alt=""
        srcset=""
      />
    </div>
  );
}

export default NavHero;
