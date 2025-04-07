import { useMemo } from "react";
import Component8 from "./Component8";
import Component9 from "./Component9";
import PropTypes from "prop-types";
import styles from "./ProductRow.module.css";

const ProductRow = ({
  className = "",
  productDetailsJustifyContent,
  productDetailsGap,
  productNameFlex,
  smartSensorRobotKit,
  productSubtitlePadding,
  autonomousExplorer,
  star3,
  addToCartButtonPadding,
  separator,
}) => {
  const productDetailsStyle = useMemo(() => {
    return {
      justifyContent: productDetailsJustifyContent,
      gap: productDetailsGap,
    };
  }, [productDetailsJustifyContent, productDetailsGap]);

  const productNameStyle = useMemo(() => {
    return {
      flex: productNameFlex,
    };
  }, [productNameFlex]);

  const productSubtitleStyle = useMemo(() => {
    return {
      padding: productSubtitlePadding,
    };
  }, [productSubtitlePadding]);

  const addToCartButtonStyle = useMemo(() => {
    return {
      padding: addToCartButtonPadding,
    };
  }, [addToCartButtonPadding]);

  return (
    <div className={[styles.productRow, className].join(" ")}>
      <div className={styles.productPair}>
        <Component8
          property1="Group 174"
          dALLE20250207214708ADeta="/dall-e-20250207-214708--a-detailed-illustration-of-a-small--fourwheeled-autonomous-robot-car-with-a-black-chassis-and-yellow-wheels-the-car-features-an-ultrasonic-sensor-onremovebgpreview-2@2x.png"
        />
      </div>
      <div className={styles.productDetails} style={productDetailsStyle}>
        <div className={styles.productName} style={productNameStyle}>
          <b className={styles.smartSensorRobot}>{smartSensorRobotKit}</b>
          <div className={styles.productSubtitle} style={productSubtitleStyle}>
            <div className={styles.subtitlePair}>
              <div className={styles.smartSensorRobot}>
                {autonomousExplorer}
              </div>
              <div className={styles.rating}>
                <img className={styles.starIcon} alt="" src="/vector-32.svg" />
                <img className={styles.starIcon} alt="" src="/vector-32.svg" />
                <img className={styles.starIcon} alt="" src="/vector-32.svg" />
                <img className={styles.starIcon} alt="" src={star3} />
                <img className={styles.starIcon} alt="" src="/vector-7.svg" />
              </div>
            </div>
          </div>
          <button
            className={styles.addToCartButton}
            style={addToCartButtonStyle}
          >
            <Component9 property1="Group 179" />
          </button>
        </div>
        <b className={styles.smartSensorRobot}>{separator}</b>
      </div>
    </div>
  );
};

ProductRow.propTypes = {
  className: PropTypes.string,
  smartSensorRobotKit: PropTypes.string,
  autonomousExplorer: PropTypes.string,
  star3: PropTypes.string,
  separator: PropTypes.string,

  /** Style props */
  productDetailsJustifyContent: PropTypes.string,
  productDetailsGap: PropTypes.string,
  productNameFlex: PropTypes.string,
  productSubtitlePadding: PropTypes.string,
  addToCartButtonPadding: PropTypes.string,
};

export default ProductRow;
