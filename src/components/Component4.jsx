import PropTypes from "prop-types";
import styles from "./Component4.module.css";

const Component4 = ({ className = "", property1 = "Frame 427318968" }) => {
  return (
    <div
      className={[styles.component135, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.icon}
        loading="lazy"
        alt=""
        src="/20240915-162929@2x.png"
      />
    </div>
  );
};

Component4.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component4;
