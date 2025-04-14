import Component3 from "./Component3";
import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={[styles.componentParentWrapper, className].join(" ")}>
      <div className={styles.componentParent}>
        <Component3 property1="Variant3" />
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
