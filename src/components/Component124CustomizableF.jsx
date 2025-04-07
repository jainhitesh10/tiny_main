import PropTypes from "prop-types";
import styles from "./Component124CustomizableF.module.css";

const Component124CustomizableF = ({
  className = "",
  property1 = "Frame 427318971",
}) => {
  return (
    <div
      className={[styles.component124customizableF, className].join(" ")}
      data-property1={property1}
    >
      <h3 className={styles.customizableFutureReady}>E-Commerce Platform</h3>
    </div>
  );
};

Component124CustomizableF.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component124CustomizableF;
