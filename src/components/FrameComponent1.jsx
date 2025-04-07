import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  property1 = "Default",
  frameDivBackgroundColor,
  frameDivMarginLeft,
  frameDivMarginBottom,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  tinywireLogo3111,
  homeMargin,
  homeFontWeight,
  onAboutUsTextClick,
  aboutUsMargin,
  aboutUsFontWeight,
  aboutUsColor,
  aboutUsBackground,
  aboutUsWebkitBackgroundClip,
  aboutUsWebkitTextFillColor,
  shopMargin,
  shopFontWeight,
  onShopTextClick,
  shopBackground,
  shopWebkitBackgroundClip,
  shopWebkitTextFillColor,
  shopColor,
  onBlogTextClick,
  blogMargin,
  blogFontWeight,
  blogBackground,
  blogWebkitBackgroundClip,
  blogWebkitTextFillColor,
  blogColor,
  contactMargin,
  contactFontWeight,
  onContactTextClick,
  contactBackground,
  contactWebkitBackgroundClip,
  contactWebkitTextFillColor,
  contactColor,
  vector,
  onVectorIconClick,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
      marginLeft: frameDivMarginLeft,
      marginBottom: frameDivMarginBottom,
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [
    frameDivBackgroundColor,
    frameDivMarginLeft,
    frameDivMarginBottom,
    frameDivPosition,
    frameDivTop,
    frameDivLeft,
  ]);

  const homeStyle = useMemo(() => {
    return {
      margin: homeMargin,
      fontWeight: homeFontWeight,
    };
  }, [homeMargin, homeFontWeight]);

  const aboutUsStyle = useMemo(() => {
    return {
      margin: aboutUsMargin,
      fontWeight: aboutUsFontWeight,
      color: aboutUsColor,
      background: aboutUsBackground,
      webkitBackgroundClip: aboutUsWebkitBackgroundClip,
      webkitTextFillColor: aboutUsWebkitTextFillColor,
    };
  }, [
    aboutUsMargin,
    aboutUsFontWeight,
    aboutUsColor,
    aboutUsBackground,
    aboutUsWebkitBackgroundClip,
    aboutUsWebkitTextFillColor,
  ]);

  const shopStyle = useMemo(() => {
    return {
      margin: shopMargin,
      fontWeight: shopFontWeight,
      background: shopBackground,
      webkitBackgroundClip: shopWebkitBackgroundClip,
      webkitTextFillColor: shopWebkitTextFillColor,
      color: shopColor,
    };
  }, [
    shopMargin,
    shopFontWeight,
    shopBackground,
    shopWebkitBackgroundClip,
    shopWebkitTextFillColor,
    shopColor,
  ]);

  const blogStyle = useMemo(() => {
    return {
      margin: blogMargin,
      fontWeight: blogFontWeight,
      background: blogBackground,
      webkitBackgroundClip: blogWebkitBackgroundClip,
      webkitTextFillColor: blogWebkitTextFillColor,
      color: blogColor,
    };
  }, [
    blogMargin,
    blogFontWeight,
    blogBackground,
    blogWebkitBackgroundClip,
    blogWebkitTextFillColor,
    blogColor,
  ]);

  const contactStyle = useMemo(() => {
    return {
      margin: contactMargin,
      fontWeight: contactFontWeight,
      background: contactBackground,
      webkitBackgroundClip: contactWebkitBackgroundClip,
      webkitTextFillColor: contactWebkitTextFillColor,
      color: contactColor,
    };
  }, [
    contactMargin,
    contactFontWeight,
    contactBackground,
    contactWebkitBackgroundClip,
    contactWebkitTextFillColor,
    contactColor,
  ]);

  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onShopTextClick1 = useCallback(() => {
    navigate("/frame-427318961");
  }, [navigate]);

  const onBlogTextClick1 = useCallback(() => {
    navigate("/frame-427318962");
  }, [navigate]);

  const onContactTextClick1 = useCallback(() => {
    navigate("/frame-427318963");
  }, [navigate]);

  const onVectorIconClick1 = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div
      className={[styles.tinywireLogo3111Parent, className].join(" ")}
      data-property1={property1}
      style={frameDivStyle}
    >
      <img className={styles.tinywireLogo3111} alt="" src={tinywireLogo3111} />
      <div className={styles.homeButtonsParent}>
        <div className={styles.homeButtons}>
          <h3
            className={styles.home}
            onClick={onHomeTextClick}
            style={homeStyle}
          >
            Home
          </h3>
        </div>
        <div className={styles.homeButtons1}>
          <h3
            className={styles.aboutUs}
            onClick={onAboutUsTextClick}
            style={aboutUsStyle}
          >
            About Us
          </h3>
        </div>
        <div className={styles.shopButtonsWrapper}>
          <div className={styles.shopButtons}>
            <h3
              className={styles.shop}
              onClick={onShopTextClick}
              style={shopStyle}
            >
              Shop
            </h3>
            <h3
              className={styles.blog}
              onClick={onBlogTextClick}
              style={blogStyle}
            >
              Blog
            </h3>
            <h3
              className={styles.contact}
              onClick={onContactTextClick}
              style={contactStyle}
            >
              Contact
            </h3>
          </div>
        </div>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src={vector}
          onClick={onVectorIconClick}
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  tinywireLogo3111: PropTypes.string,
  vector: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  frameDivBackgroundColor: PropTypes.string,
  frameDivMarginLeft: PropTypes.string,
  frameDivMarginBottom: PropTypes.string,
  frameDivPosition: PropTypes.string,
  frameDivTop: PropTypes.string,
  frameDivLeft: PropTypes.string,
  homeMargin: PropTypes.string,
  homeFontWeight: PropTypes.string,
  aboutUsMargin: PropTypes.string,
  aboutUsFontWeight: PropTypes.string,
  aboutUsColor: PropTypes.string,
  aboutUsBackground: PropTypes.string,
  aboutUsWebkitBackgroundClip: PropTypes.string,
  aboutUsWebkitTextFillColor: PropTypes.string,
  shopMargin: PropTypes.string,
  shopFontWeight: PropTypes.string,
  shopBackground: PropTypes.string,
  shopWebkitBackgroundClip: PropTypes.string,
  shopWebkitTextFillColor: PropTypes.string,
  shopColor: PropTypes.string,
  blogMargin: PropTypes.string,
  blogFontWeight: PropTypes.string,
  blogBackground: PropTypes.string,
  blogWebkitBackgroundClip: PropTypes.string,
  blogWebkitTextFillColor: PropTypes.string,
  blogColor: PropTypes.string,
  contactMargin: PropTypes.string,
  contactFontWeight: PropTypes.string,
  contactBackground: PropTypes.string,
  contactWebkitBackgroundClip: PropTypes.string,
  contactWebkitTextFillColor: PropTypes.string,
  contactColor: PropTypes.string,

  /** Action props */
  onAboutUsTextClick: PropTypes.func,
  onShopTextClick: PropTypes.func,
  onBlogTextClick: PropTypes.func,
  onContactTextClick: PropTypes.func,
  onVectorIconClick: PropTypes.func,
};

export default FrameComponent1;
