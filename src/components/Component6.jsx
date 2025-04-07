import PropTypes from "prop-types";
import styles from "./Component6.module.css";

const Component6 = ({ className = "", property1 = "Frame 1321317457" }) => {
  return (
    <div
      className={[styles.component138, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.rectangleDiv} />
        <img
          className={styles.rectangleIcon}
          loading="lazy"
          alt=""
          src="/rectangle-2891.svg"
        />
      </div>
      <h1 className={styles.ourSuccessStories}>Our Success Stories</h1>
    </div>
  );
};

Component6.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component6;
