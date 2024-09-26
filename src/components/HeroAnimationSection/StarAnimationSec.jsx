import PropTypes from "prop-types";
import styles from "./StarAnimationSec.module.css";
import React, { Component } from "react";

const StarAnimationSec = () => {
  return (
    <div>
      <div className={styles.heroBackground}>
        <div className={styles.stars1} id="stars1"></div>
        <div className={styles.stars2} id="stars2"></div>
        <div className={styles.stars3} id="stars3"></div>
      </div>
    </div>
  );
};

export default StarAnimationSec;
