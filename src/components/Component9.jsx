import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Component9.module.css";

const Component9 = ({
  className = "",
  property1 = "Group 178",
  component110Border,
  component110BackgroundColor,
}) => {
  const component110Style = useMemo(() => {
    return {
      border: component110Border,
      backgroundColor: component110BackgroundColor,
    };
  }, [component110Border, component110BackgroundColor]);

  return (
    <div
      className={[styles.component110, className].join(" ")}
      data-property1={property1}
      style={component110Style}
    >
      <div className={styles.buttonBackground} />
      <b className={styles.addToCart}>Add To Cart</b>
    </div>
  );
};

Component9.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  component110Border: PropTypes.string,
  component110BackgroundColor: PropTypes.string,
};

export default Component9;
