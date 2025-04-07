import PropTypes from "prop-types";
import styles from "./Component3.module.css";

const Component3 = ({ className = "", property1 = "Group 159" }) => {
  return (
    <div
      className={[styles.component73, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.nestedComponent}>
        <div className={styles.exploreCreateInnovateParent}>
          <h1 className={styles.exploreCreateInnovate}>
            Explore. Create. Innovate.
          </h1>
          <h1 className={styles.discoverOurCuttingEdge}>
            Discover our cutting-edge simulators and all-inclusive educational
            kits.
          </h1>
        </div>
      </div>
    </div>
  );
};

Component3.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component3;
