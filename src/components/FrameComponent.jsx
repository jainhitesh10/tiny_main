import Component9 from "./Component9";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.productTitleParent, className].join(" ")}>
      <div className={styles.productTitle}>
        <div className={styles.productName}>
          <b className={styles.diyRoboticsKit}>DIY Robotics Kit</b>
          <div className={styles.productDescription}>
            <div className={styles.diyRoboticsKit}>AI Innovator</div>
          </div>
          <div className={styles.productRating}>
            <img className={styles.starsIcon} alt="" src="/vector-32.svg" />
            <img className={styles.starsIcon} alt="" src="/vector-32.svg" />
            <img className={styles.starsIcon} alt="" src="/vector-32.svg" />
            <img className={styles.starsIcon} alt="" src="/vector-32.svg" />
            <img className={styles.starsIcon} alt="" src="/vector-7.svg" />
          </div>
        </div>
      </div>
      <Component9
        property1="Group 179"
        component110Border="none"
        component110BackgroundColor="transparent"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
