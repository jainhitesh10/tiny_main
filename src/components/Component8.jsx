import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Component8.module.css";

const Component8 = ({
  className = "",
  property1 = "Group 174",
  component90Flex,
  component90AlignSelf,
  component90Width,
  dALLE20250207214708ADeta,
}) => {
  const component90Style = useMemo(() => {
    return {
      flex: component90Flex,
      alignSelf: component90AlignSelf,
      width: component90Width,
    };
  }, [component90Flex, component90AlignSelf, component90Width]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
      style={component90Style}
    >
      <div className={styles.productBackground} />
      <img
        className={styles.dallE20250207214708AIcon}
        loading="lazy"
        alt=""
        src={dALLE20250207214708ADeta}
      />
    </div>
  );
};

Component8.propTypes = {
  className: PropTypes.string,
  dALLE20250207214708ADeta: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  component90Flex: PropTypes.string,
  component90AlignSelf: PropTypes.string,
  component90Width: PropTypes.string,
};

export default Component8;
