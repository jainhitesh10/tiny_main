import PropTypes from "prop-types";
import styles from "./Component3.module.css";

const Component3 = ({ className = "", property1 = "Group 159" }) => {
  return (
    <div
      className={[styles.component73, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.nestedComponent}>
        <div className={styles.exploreCreateInnovateParent}>
          <h1 className={styles.exploreCreateInnovate}>
            Explore. Create. Innovate.
          </h1>
          <h1 className={styles.discoverOurCuttingEdge}>
            Discover our cutting-edge simulators and all-inclusive educational
            kits.
          </h1>
        </div>
      </div>
      <div className={styles.immg}>
        <img src="../../public/dall-e-20250208-013915--a-realistic-illustration-of-a-small--fourwheeled-autonomous-robot-car-with-a-black-chassis-and-yellow-wheels-the-car-includes-an-ultrasonic-sensor-mremovebg-3@2x.png" // Replace with your actual image path
          alt="Educational Robot Kit" className={styles.imgc} />
      </div>
    </div>
  );
};

Component3.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component3;
