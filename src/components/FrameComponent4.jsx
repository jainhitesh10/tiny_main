import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      data-property1={property1}
    >
      <input
        className={styles.instanceChild}
        placeholder="Password"
        type="text"
      />
      <img className={styles.vectorIcon} alt="" src="/password-icon.svg" />
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default FrameComponent4;
