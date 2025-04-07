import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import Support from "../components/Support";
import Component11 from "../components/Component11";
import Sales from "../components/Sales";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Root4.module.css";

const Root4 = () => {
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

  const onVectorIconClick = useCallback(() => {
    navigate("/frame-427318969");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/frame-427318963");
  }, [navigate]);

  return (
    <div className={styles.root}>
      <main className={styles.products}>
        <FrameComponent1
          property1="Variant2"
          frameDivBackgroundColor="rgba(255, 255, 255, 0)"
          frameDivMarginLeft="-7px"
          frameDivMarginBottom="12px"
          frameDivPosition="unset"
          frameDivTop="unset"
          frameDivLeft="unset"
          tinywireLogo3111="/tinywire-logo-311-1@2x.png"
          homeMargin="0"
          homeFontWeight="400"
          onAboutUsTextClick={onAboutUsTextClick}
          aboutUsMargin="0"
          aboutUsFontWeight="400"
          aboutUsColor="unset"
          aboutUsBackground="linear-gradient(90deg, #c04dd9, #9b3dbf 30%, #6f4ad9 50%, #2020ad)"
          aboutUsWebkitBackgroundClip="unset"
          aboutUsWebkitTextFillColor="unset"
          shopMargin="0"
          shopFontWeight="400"
          onShopTextClick={onShopTextClick}
          shopBackground="linear-gradient(90deg, #c04dd9, #9b3dbf 30%, #6f4ad9 50%, #2020ad)"
          shopWebkitBackgroundClip="unset"
          shopWebkitTextFillColor="unset"
          shopColor="unset"
          onBlogTextClick={onBlogTextClick}
          blogMargin="0"
          blogFontWeight="400"
          blogBackground="linear-gradient(90deg, #c04dd9, #9b3dbf 30%, #6f4ad9 50%, #2020ad)"
          blogWebkitBackgroundClip="unset"
          blogWebkitTextFillColor="unset"
          blogColor="unset"
          contactMargin="0"
          contactFontWeight="400"
          contactBackground="unset"
          contactWebkitBackgroundClip="unset"
          contactWebkitTextFillColor="unset"
          contactColor="#4a4a4a"
          vector="/vector.svg"
          onVectorIconClick={onVectorIconClick}
        />
        <Support />
        <section className={styles.team}>
          <Component11 property1="Frame 427318946" />
          <Sales />
        </section>
      </main>
      <footer className={styles.footerContentParent}>
        <div className={styles.footerContent}>
          <div className={styles.footerContentInner}>
            <div className={styles.linksTitleParent}>
              <div className={styles.linksTitle}>
                <h3 className={styles.quickLinks}>Quick Links</h3>
              </div>
              <div className={styles.linkItems}>
                <div className={styles.linkNames}>
                  <div className={styles.home}>Home</div>
                </div>
                <div className={styles.linkNames1}>
                  <div className={styles.products1} onClick={onShopTextClick}>
                    Products
                  </div>
                </div>
                <div className={styles.linkNames2}>
                  <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
                    About Us
                  </div>
                </div>
                <div className={styles.moreLinks}>
                  <div className={styles.contactLink}>
                    <div
                      className={styles.contactUs}
                      onClick={onContactUsTextClick}
                    >
                      Contact Us
                    </div>
                  </div>
                  <div className={styles.helpLink}>
                    <div className={styles.faqs}>FAQs</div>
                    <img
                      className={styles.tinywireLogo1611}
                      loading="lazy"
                      alt=""
                      src="/tinywire-logo-161-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blogParent}>
            <div className={styles.blog} onClick={onBlogTextClick}>
              Blog
            </div>
            <div className={styles.events}>Events</div>
            <div className={styles.tutorials}>Tutorials</div>
          </div>
        </div>
        <div className={styles.newsletter}>
          <div className={styles.newsletterHeader}>
            <h3 className={styles.joinOurNewsletter}>Join Our Newsletter</h3>
          </div>
          <div className={styles.subscriptionForm}>
            <div className={styles.newsletterWrapperWrapper}>
              <div className={styles.newsletterWrapper}>
                <div className={styles.newsletterContent}>
                  <div className={styles.newsletterForm}>
                    <div className={styles.legalLinks}>
                      <div className={styles.privacyPolicy}>Privacy Policy</div>
                      <div className={styles.termsOfServices}>
                        Terms Of Services
                      </div>
                    </div>
                    <div className={styles.logoFooter}>
                      <img
                        className={styles.tinywireLogo1412Icon}
                        loading="lazy"
                        alt=""
                        src="/tinywire-logo-141-211@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.tinywiresAllRightReserved}>
                  © 2025 - TinyWires All Right Reserved
                </div>
              </div>
            </div>
            <div className={styles.subscriptionForm1}>
              <div className={styles.formFields}>
                <FrameComponent2
                  property1="Default"
                  frameDivPosition="absolute"
                  frameDivTop="0px"
                  frameDivLeft="0px"
                  frameDivBackgroundColor="rgba(0, 0, 0, 0)"
                  frameDivBorderBottom="2px solid #fff"
                  frameDivWidth="373px"
                  enterEmailOrColor="#fff"
                  enterEmailOrBorder="none"
                  enterEmailOrOutline="none"
                  enterEmailOrBackgroundColor="transparent"
                />
                <div className={styles.submitButton}>
                  <div className={styles.subscribe}>Subscribe</div>
                </div>
              </div>
              <div className={styles.socialIcons}>
                <div className={styles.icons}>
                  <img className={styles.icon} alt="" src="/vector-11.svg" />
                  <img className={styles.groupIcon} alt="" src="/group1.svg" />
                </div>
                <img className={styles.icons1} alt="" src="/vector-21.svg" />
                <img
                  className={styles.groupIcon1}
                  alt=""
                  src="/group-11@2x.png"
                />
                <img className={styles.icons2} alt="" src="/vector-31.svg" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Root4;
