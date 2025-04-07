import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  className = "",
  image,
  johnBeige,
  johnBeigeWidth,
  vPCustomerCare,
  vPCustomerCareWidth,
}) => {
  const johnBeigeStyle = useMemo(() => {
    return {
      width: johnBeigeWidth,
    };
  }, [johnBeigeWidth]);

  const vPCustomerCareStyle = useMemo(() => {
    return {
      width: vPCustomerCareWidth,
    };
  }, [vPCustomerCareWidth]);

  return (
    <div className={[styles.imageParent, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <h3 className={styles.johnBeige} style={johnBeigeStyle}>
        {johnBeige}
      </h3>
      <div className={styles.vpCustomerCare} style={vPCustomerCareStyle}>
        {vPCustomerCare}
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  johnBeige: PropTypes.string,
  vPCustomerCare: PropTypes.string,

  /** Style props */
  johnBeigeWidth: PropTypes.string,
  vPCustomerCareWidth: PropTypes.string,
};

export default GroupComponent;
