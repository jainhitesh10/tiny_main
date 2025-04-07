import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import Component12 from "../components/Component12";
import styles from "./Root5.module.css";

const Root5 = () => {
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

  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openStyleObject = {
      "grid-template-rows": "1fr",
    };
    const closeStyleObject = {
      "padding-top": "0px",
      "padding-bottom": "0px",
      "margin-bottom": "0px",
      "margin-top": "0px",
      "grid-template-rows": "0fr",
    };

    function applyStyles(element, styleObject) {
      Object.assign(element.style, styleObject);
    }

    function removeStyles(element, styleObject) {
      Object.keys(styleObject).forEach((key) => {
        element?.style.removeProperty(key);
      });
    }

    if (isOpen) {
      removeStyles(accContent, openStyleObject);
      applyStyles(accContent, closeStyleObject);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        removeStyles(siblingAccContent, closeStyleObject);
        applyStyles(siblingAccContent, openStyleObject);
      }, 1);
    }
  }, []);

  return (
    <div className={styles.root}>
      <FrameComponent1
        property1="Variant2"
        frameDivBackgroundColor="#fff"
        frameDivMarginLeft="unset"
        frameDivMarginBottom="unset"
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
        onContactTextClick={onContactTextClick}
        contactBackground="linear-gradient(90deg, #c04dd9, #9b3dbf 30%, #6f4ad9 50%, #2020ad)"
        contactWebkitBackgroundClip="unset"
        contactWebkitTextFillColor="unset"
        contactColor="unset"
        vector="/vector1.svg"
      />
      <section className={styles.rootInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.welcomeXyzWrapper}>
              <h3 className={styles.welcomeXyz}>Welcome, XYZ</h3>
            </div>
            <div className={styles.frameContainer}>
              <button className={styles.component137Parent}>
                <Component12 property1="Rectangle 2917" />
                <div className={styles.dashboard}>Dashboard</div>
              </button>
              <button className={styles.component137Parent}>
                <Component12 property1="Rectangle 2917" />
                <div className={styles.orders}>Orders</div>
              </button>
              <div className={styles.component139Parent}>
                <Component12 property1="Rectangle 2917" />
                <div className={styles.wishlist}>Wishlist</div>
              </div>
              <div className={styles.component139Parent}>
                <Component12 property1="Rectangle 2917" />
                <div className={styles.billingAddress}>Billing Address</div>
              </div>
              <div className={styles.component139Parent}>
                <Component12 property1="Rectangle 2917" />
                <div className={styles.shippingAddress}>Shipping Address</div>
              </div>
              <div className={styles.component139Parent}>
                <Component12 property1="Rectangle 2917" />
                <div className={styles.accountInfo}>Account info</div>
              </div>
              <div className={styles.component139Parent}>
                <Component12 property1="Rectangle 2917" />
                <div className={styles.changePassword}>Change Password</div>
              </div>
              <div className={styles.component139Parent}>
                <Component12 property1="Rectangle 2917" />
                <div className={styles.logout}>Logout</div>
              </div>
            </div>
          </div>
          <div className={styles.optionsAndDetails} data-acc-group>
            <div
              className={styles.cartOrdersShippingParent}
              data-acc-item
              data-acc-open
              data-acc-header
              data-acc-original
              data-acc-default-open
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.cartOrdersShipping}>
                <div className={styles.cartOrdersBilling}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-13.svg"
                  />
                </div>
                <div className={styles.orders1}>Orders</div>
              </div>
              <div className={styles.wishlistPassword}>
                <div className={styles.wishlistChange}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector-22.svg"
                  />
                </div>
                <div className={styles.wishlist1}>Wishlist</div>
              </div>
            </div>
            <div
              className={styles.frame25Close}
              data-acc-item
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.frameDiv}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="/vector-5.svg"
                  />
                </div>
                <div className={styles.orders1}>Orders</div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className={styles.changePassword1}>Change Password</div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <div
              className={styles.optionsAndDetailsInner}
              data-acc-item
              data-acc-open
              data-acc-header
              data-acc-original
              data-acc-default-open
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.cartIconWrapper}>
                    <img
                      className={styles.cartIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-33.svg"
                    />
                  </div>
                  <div className={styles.yourCart}>Your Cart</div>
                </div>
                <div className={styles.ordersIconParent}>
                  <div className={styles.ordersIcon}>
                    <img
                      className={styles.vectorIcon1}
                      loading="lazy"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                  <div className={styles.billingAddress1}>Billing Address</div>
                </div>
              </div>
            </div>
            <div
              className={styles.frame25Close}
              data-acc-item
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.frameDiv}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="/vector-5.svg"
                  />
                </div>
                <div className={styles.yourCart}>Your Cart</div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className={styles.changePassword1}>Change Password</div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <div
              className={styles.frameParent6}
              data-acc-item
              data-acc-open
              data-acc-header
              data-acc-original
              data-acc-default-open
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.frameDiv}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="/vector-5.svg"
                  />
                </div>
                <div className={styles.shippingAddress3}>Shipping Address</div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className={styles.changePassword1}>Change Password</div>
              </div>
            </div>
            <div
              className={styles.frame25Close}
              data-acc-item
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.frameDiv}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="/vector-5.svg"
                  />
                </div>
                <div className={styles.shippingAddress3}>Shipping Address</div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className={styles.changePassword1}>Change Password</div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Root5;
