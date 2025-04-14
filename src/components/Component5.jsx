import PropTypes from "prop-types";
import styles from "./Component5.module.css";

const Component5 = ({
  className = "",
  property1 = "Frame 427318971",
  integratedLearning,
}) => {
  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
    >
      {/* <div className={styles.skillsLabels}>
        <b className={styles.integratedLearning}>{integratedLearning}</b>
      </div>
      <div className={styles.seamlessTechIntegrationContainer}>
        <ul className={styles.seamlessTechIntegrationFor}>
          <li className={styles.seamlessTechIntegration}>
            Seamless Tech Integration for hands-on STEM learning.
          </li>
          <li
            className={styles.bridgesTheory}
          >{`Bridges Theory & Practice with real-world applications.`}</li>
          <li>{`Enhances Problem-Solving, Creativity & Innovation.`}</li>
        </ul>
      </div> */}
    </div>
  );
};

Component5.propTypes = {
  className: PropTypes.string,
  integratedLearning: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Component5;
