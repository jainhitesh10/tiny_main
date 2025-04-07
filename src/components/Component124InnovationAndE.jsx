import PropTypes from "prop-types";
import styles from "./Component124InnovationAndE.module.css";

const Component124InnovationAndE = ({
  className = "",
  property1 = "Frame 427318971",
}) => {
  return (
    <div
      className={[styles.component124, className].join(" ")}
      data-property1={property1}
    >
      <h3 className={styles.innovationAndExpert}>Hardware Solutions</h3>
    </div>
  );
};

Component124InnovationAndE.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component124InnovationAndE;
