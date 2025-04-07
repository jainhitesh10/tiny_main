import PropTypes from "prop-types";
import styles from "./Component7.module.css";

const Component7 = ({ className = "", property1 = "Frame 427318939" }) => {
  return (
    <div
      className={[styles.component88, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.shapeParent}>
        <div className={styles.shape} />
        <img
          className={styles.dallE20250208013644AIcon}
          alt=""
          src="/dall-e-20250208-013644--a-realistic-illustration-of-a-small--fourwheeled-autonomous-robot-car-with-a-black-chassis-and-yellow-wheels-the-car-includes-an-ultrasonic-sensor-mremovebgpreview-3@2x.png"
        />
        <img
          className={styles.dallE20250208013915AIcon}
          loading="lazy"
          alt=""
          src="/dall-e-20250208-013915--a-realistic-illustration-of-a-small--fourwheeled-autonomous-robot-car-with-a-black-chassis-and-yellow-wheels-the-car-includes-an-ultrasonic-sensor-mremovebg-3@2x.png"
        />
        <img
          className={styles.dallE20250207214708AIcon}
          loading="lazy"
          alt=""
          src="/dall-e-20250207-214708--a-detailed-illustration-of-a-small--fourwheeled-autonomous-robot-car-with-a-black-chassis-and-yellow-wheels-the-car-features-an-ultrasonic-sensor-onremovebgpreview-1@2x.png"
        />
      </div>
    </div>
  );
};

Component7.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component7;
