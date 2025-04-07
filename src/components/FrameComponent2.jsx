import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({
  className = "",
  property1 = "Default",
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  frameDivBackgroundColor,
  frameDivBorderBottom,
  frameDivWidth,
  enterEmailOrColor,
  enterEmailOrBorder,
  enterEmailOrOutline,
  enterEmailOrBackgroundColor,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
      backgroundColor: frameDivBackgroundColor,
      borderBottom: frameDivBorderBottom,
      width: frameDivWidth,
    };
  }, [
    frameDivPosition,
    frameDivTop,
    frameDivLeft,
    frameDivBackgroundColor,
    frameDivBorderBottom,
    frameDivWidth,
  ]);

  const enterEmailOrStyle = useMemo(() => {
    return {
      color: enterEmailOrColor,
      border: enterEmailOrBorder,
      outline: enterEmailOrOutline,
      backgroundColor: enterEmailOrBackgroundColor,
    };
  }, [
    enterEmailOrColor,
    enterEmailOrBorder,
    enterEmailOrOutline,
    enterEmailOrBackgroundColor,
  ]);

  return (
    <div
      className={[styles.enterEmailOrPhoneNumberWrapper, className].join(" ")}
      data-property1={property1}
      style={frameDiv1Style}
    >
      <div className={styles.enterEmailOr} style={enterEmailOrStyle}>
        Enter Email or phone number
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  frameDivPosition: PropTypes.string,
  frameDivTop: PropTypes.string,
  frameDivLeft: PropTypes.string,
  frameDivBackgroundColor: PropTypes.string,
  frameDivBorderBottom: PropTypes.string,
  frameDivWidth: PropTypes.string,
  enterEmailOrColor: PropTypes.string,
  enterEmailOrBorder: PropTypes.string,
  enterEmailOrOutline: PropTypes.string,
  enterEmailOrBackgroundColor: PropTypes.string,
};

export default FrameComponent2;
