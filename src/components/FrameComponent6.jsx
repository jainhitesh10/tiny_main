import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/frame-427318964");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/frame-427318961");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/frame-427318962");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/frame-427318963");
  }, [navigate]);

  return (
    <section className={[styles.rootInner, className].join(" ")}>
      <header className={styles.tinywireLogo3111Parent}>
        <img
          className={styles.tinywireLogo3111}
          alt=""
          src="/tinywire-logo-311-1@2x.png"
        />
        <div className={styles.homeLinks}>
          <h3 className={styles.home}>Home</h3>
          <h3 className={styles.aboutUs} onClick={onAboutUsTextClick}>
            About Us
          </h3>
          <div className={styles.shopLinks}>
            <h3 className={styles.shop} onClick={onShopTextClick}>
              Shop
            </h3>
            <h3 className={styles.blog} onClick={onBlogTextClick}>
              Blog
            </h3>
            <h3 className={styles.contact} onClick={onContactTextClick}>
              Contact
            </h3>
          </div>
        </div>
      </header>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
