import PropTypes from "prop-types";
import styles from "./Component10.module.css";

const Component10 = ({ className = "", property1 = "Group 178" }) => {
  return (
    <div
      className={[styles.component110, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.bookCallBackground} />
      <b className={styles.bookACall}>Book a call</b>
    </div>
  );
};

Component10.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component10;
