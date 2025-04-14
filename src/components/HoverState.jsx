import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./HoverState.module.css";

export default function HoverState() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.motionBox}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Top */}
        <motion.div
          animate={isHovered ? { y: -150, scale: 1.1 } : { y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 70 }}
          className={`${styles.box} ${styles.topBox}`}
        />

        {/* Bottom */}
        <motion.div
          animate={isHovered ? { y: 150, scale: 1.1 } : { y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 70 }}
          className={`${styles.box} ${styles.bottomBox}`}
        />

        {/* Left */}
        <motion.div
          animate={isHovered ? { x: -150, scale: 1.1 } : { x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 70 }}
          className={`${styles.box} ${styles.leftBox}`}
        />

        {/* Right */}
        <motion.div
          animate={isHovered ? { x: 150, scale: 1.1 } : { x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 70 }}
          className={`${styles.box} ${styles.rightBox}`}
        />

        {/* Center */}
        <div className={styles.centerBox}>
          <p className={styles.oss}>
            Our<br />Success<br />Stories
          </p>
        </div>
      </motion.div>
    </div>
  );
}