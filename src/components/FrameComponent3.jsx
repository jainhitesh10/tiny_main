import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({
  className = "",
  frameDivLeft,
  tinywireLogo1412,
  tinywireLogo1611,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      left: frameDivLeft,
    };
  }, [frameDivLeft]);

  const navigate = useNavigate();

  const onProductsTextClick = useCallback(() => {
    navigate("/frame-427318961");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/frame-427318964");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/frame-427318963");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/frame-427318962");
  }, [navigate]);

  return (
    <div
      className={[styles.quickLinksContainerParent, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.quickLinksContainer}>
        <div className={styles.quickLinksWrapper}>
          <h3 className={styles.quickLinks}>Quick Links</h3>
          <div className={styles.quickLinks1}>
            <div className={styles.home}>Home</div>
            <div className={styles.products} onClick={onProductsTextClick}>
              Products
            </div>
            <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
              About Us
            </div>
            <div className={styles.contactUs} onClick={onContactUsTextClick}>
              Contact Us
            </div>
            <div className={styles.faqs}>FAQs</div>
          </div>
        </div>
        <div className={styles.exploreContainer}>
          <div className={styles.exploreLinks}>
            <div className={styles.blog} onClick={onBlogTextClick}>
              Blog
            </div>
            <div className={styles.events}>Events</div>
            <div className={styles.tutorials}>Tutorials</div>
          </div>
        </div>
      </div>
      <div className={styles.newsletterWrapperParent}>
        <div className={styles.newsletterWrapper}>
          <h3 className={styles.joinOurNewsletter}>Join Our Newsletter</h3>
        </div>
        <div className={styles.newsletterInput}>
          <div className={styles.newsletterInputWrapper}>
            <div className={styles.newsletterInputContainer}>
              <div className={styles.newsletterInputContent}>
                <div className={styles.newsletterInputElements}>
                  <div className={styles.legalLinks}>
                    <div className={styles.privacyPolicy}>Privacy Policy</div>
                    <div className={styles.termsOfServices}>
                      Terms Of Services
                    </div>
                  </div>
                  <div className={styles.logoContainer}>
                    <img
                      className={styles.tinywireLogo1412Icon}
                      alt=""
                      src={tinywireLogo1412}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.tinywiresAllRightReserved}>
                © 2025 - TinyWires All Right Reserved
              </div>
            </div>
          </div>
          <div className={styles.emailInput}>
            <div className={styles.emailInputWrapper}>
              <FrameComponent2 property1="Default" />
              <button className={styles.subscribeButtonWrapper}>
                <div className={styles.subscribe}>Subscribe</div>
              </button>
            </div>
            <div className={styles.socialIcons}>
              <div className={styles.socialIconsContent}>
                <img
                  className={styles.socialIconOne}
                  alt=""
                  src="/vector-1.svg"
                />
                <img className={styles.groupIcon} alt="" src="/group.svg" />
              </div>
              <img
                className={styles.socialIconsContent1}
                alt=""
                src="/vector-2.svg"
              />
              <img className={styles.groupIcon1} alt="" src="/group-1@2x.png" />
              <img
                className={styles.socialIconsContent2}
                alt=""
                src="/vector-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.tinywireLogo1611} alt="" src={tinywireLogo1611} />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  tinywireLogo1412: PropTypes.string,
  tinywireLogo1611: PropTypes.string,

  /** Style props */
  frameDivLeft: PropTypes.string,
};

export default FrameComponent3;
