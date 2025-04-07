import PropTypes from "prop-types";
import styles from "./Component1.module.css";

const Component1 = ({ className = "", property1 = "Frame 427318967" }) => {
  return (
    <div
      className={[styles.component133, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.component133Child} />
      <img
        className={styles.componentInstanceContent}
        loading="lazy"
        alt=""
        src="/20240915-124758@2x.png"
      />
      <img
        className={styles.componentInstanceContent1}
        loading="lazy"
        alt=""
        src="/20240915-124807@2x.png"
      />
      <img
        className={styles.componentInstanceContent2}
        loading="lazy"
        alt=""
        src="/20240914-144258@2x.png"
      />
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component1;
