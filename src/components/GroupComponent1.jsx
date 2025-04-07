import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.rootInner, className].join(" ")}>
      <div className={styles.dallE20250208013915AWrapper}>
        <img
          className={styles.dallE20250208013915AIcon}
          loading="lazy"
          alt=""
          src="/dall-e-20250208-013915--a-realistic-illustration-of-a-small--fourwheeled-autonomous-robot-car-with-a-black-chassis-and-yellow-wheels-the-car-includes-an-ultrasonic-sensor-mremovebg-2@2x.png"
        />
      </div>
    </section>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
