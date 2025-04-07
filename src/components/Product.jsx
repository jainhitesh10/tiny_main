import Component8 from "./Component8";
import Component9 from "./Component9";
import PropTypes from "prop-types";
import styles from "./Product.module.css";

const Product = ({ className = "" }) => {
  return (
    <div className={[styles.product, className].join(" ")}>
      <Component8
        property1="Group 175"
        component90Flex="unset"
        component90AlignSelf="unset"
        component90Width="250px"
        dALLE20250207214708ADeta="/dall-e-20250208-013915--a-realistic-illustration-of-a-small--fourwheeled-autonomous-robot-car-with-a-black-chassis-and-yellow-wheels-the-car-includes-an-ultrasonic-sensor-mremovebg-4@2x.png"
      />
      <div className={styles.productInfo}>
        <div className={styles.allTerrainRoboticsVehicleParent}>
          <b className={styles.allTerrainRoboticsVehicle}>
            All-Terrain Robotics Vehicle
          </b>
          <div className={styles.productDescription}>
            <div className={styles.allTerrainRoboticsVehicle}>
              Rugged Navigator
            </div>
            <div className={styles.productRating}>
              <img className={styles.starsIcon} alt="" src="/vector-32.svg" />
              <img className={styles.starsIcon} alt="" src="/vector-32.svg" />
              <img className={styles.starsIcon} alt="" src="/vector-32.svg" />
              <img className={styles.starsIcon} alt="" src="/vector-32.svg" />
              <img className={styles.starsIcon} alt="" src="/vector-32.svg" />
            </div>
          </div>
          <button className={styles.cartButtonContainer}>
            <Component9
              property1="Group 179"
              component110Border="unset"
              component110BackgroundColor="unset"
            />
          </button>
        </div>
        <b className={styles.allTerrainRoboticsVehicle}>$499.00</b>
      </div>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
};

export default Product;
