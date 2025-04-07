import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={[styles.enterYourFullNameWrapper, className].join(" ")}
      data-property1={property1}
    >
      <input
        className={styles.enterYourFull}
        placeholder="Enter your full name"
        type="text"
      />
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default FrameComponent5;
