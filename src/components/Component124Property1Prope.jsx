import PropTypes from "prop-types";
import styles from "./Component124Property1Prope.module.css";

const Component124Property1Prope = ({
  className = "",
  property1 = "Frame 427318971",
}) => {
  return (
    <div
      className={[styles.component124property1prope, className].join(" ")}
      data-property1={property1}
    >
      <h3 className={styles.handsOnScalableLearning}>Software Solutions</h3>
    </div>
  );
};

Component124Property1Prope.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component124Property1Prope;
