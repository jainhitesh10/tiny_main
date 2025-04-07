import PropTypes from "prop-types";
import styles from "./Component12.module.css";

const Component12 = ({ className = "", property1 = "Rectangle 2917" }) => {
  return (
    <div
      className={[styles.component137, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.component137Child} />
    </div>
  );
};

Component12.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component12;
