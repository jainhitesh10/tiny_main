import { useMemo } from "react";
import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({
  className = "",
  tinywireLogo1411,
  tinywireLogo1411Top,
  tinywireLogo1411Left,
}) => {
  const tinywireLogo1411Style = useMemo(() => {
    return {
      top: tinywireLogo1411Top,
      left: tinywireLogo1411Left,
    };
  }, [tinywireLogo1411Top, tinywireLogo1411Left]);

  return (
    <footer className={[styles.footer, className].join(" ")}>
      <FrameComponent3
        tinywireLogo1412="/tinywire-logo-141-2@2x.png"
        tinywireLogo1611="/tinywire-logo-161-1@2x.png"
      />
      <img
        className={styles.tinywireLogo1411}
        loading="lazy"
        alt=""
        src={tinywireLogo1411}
        style={tinywireLogo1411Style}
      />
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  tinywireLogo1411: PropTypes.string,

  /** Style props */
  tinywireLogo1411Top: PropTypes.string,
  tinywireLogo1411Left: PropTypes.string,
};

export default Footer;
