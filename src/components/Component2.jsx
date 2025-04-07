import Component124Property1Prope from "./Component124Property1Prope";
import PropTypes from "prop-types";
import styles from "./Component2.module.css";

const Component2 = ({ className = "", property1 = "Frame 427318971" }) => {
  return (
    <div
      className={[styles.component134, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.chooseItemOne}>
        <Component124Property1Prope property1="Frame 427318965" />
      </div>
      <div className={styles.ourAdvancedSimulators}>
        Our advanced simulators enable users to design, test, and experiment
        with virtual circuits and robotic systems, making STEM education more
        interactive and engaging. These tools bridge the gap between theory and
        practice, allowing students to develop problem-solving skills in a
        risk-free, virtual environment.
      </div>
      <img
        className={styles.integratedLearning479aa0e191Icon}
        loading="lazy"
        alt=""
        src="/integrated-learning479aa0e1917a01e4fa20removebgpreview-1@2x.png"
      />
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component2;
