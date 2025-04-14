import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component7 from "../components/Component7";
import FrameComponent1 from "../components/FrameComponent1";
import ProductRow from "../components/ProductRow";
import Product from "../components/Product";
import Component8 from "../components/Component8";
import FrameComponent from "../components/FrameComponent";
import Component9 from "../components/Component9";
import styles from "./Root2.module.css";

const Root2 = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/frame-427318964");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/frame-427318962");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/frame-427318963");
  }, [navigate]);

  const onNavIconClick = useCallback(() => {
    navigate("/frame-427318969");
  }, [navigate]);

  return (
    <div className={styles.root}>
      <section className={styles.page}>
        <div className={styles.component88Parent}>
          <Component7 property1="Frame 427318939" />
          <h1
            className={styles.empoweringFutureInnovators}
          >{`Empowering Future Innovators with STEM Kits & Tools`}</h1>
        </div>
        <FrameComponent1
          property1="Variant2"
          frameDivBackgroundColor="rgba(255, 255, 255, 0)"
          frameDivMarginLeft="unset"
          frameDivMarginBottom="unset"
          frameDivPosition="absolute"
          frameDivTop="0px"
          frameDivLeft="-18px"
          tinywireLogo3111="/tinywire-logo-311-1@2x.png"
          homeMargin="0"
          homeFontWeight="400"
          onAboutUsTextClick={onAboutUsTextClick}
          aboutUsMargin="0"
          aboutUsFontWeight="400"
          aboutUsColor="unset"
          aboutUsBackground="inear-gradient(90deg, #c04dd9, #9b3dbf, #6f4ad9, #2020ad);"
          aboutUsWebkitBackgroundClip="unset"
          aboutUsWebkitTextFillColor="unset"
          shopMargin="0"
          shopFontWeight="400"
          shopBackground="unset"
          shopWebkitBackgroundClip="unset"
          shopWebkitTextFillColor="unset"
          shopColor="#4a4a4a"
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
          vector="/vector.svg"
          onVectorIconClick={onNavIconClick}
        />
      </section>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroCallToAction}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.shopNow}>{`Shop Now ->`}</b>
            </button>
          </div>
          <div className={styles.productFilter}>
            <div className={styles.frameParent}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <h3 className={styles.categories}>Categories</h3>
                <div className={styles.filterIcons}>
                  <img
                    className={styles.iconPair}
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
              <div className={styles.sortDropdown}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameItem} />
                  <b className={styles.sortBy}>Sort By</b>
                  <div className={styles.sortIcon}>
                    <img
                      className={styles.iconPair}
                      alt=""
                      src="/vector-12.svg"
                    />
                  </div>
                </div>
              </div>
              <button className={styles.groupButton}>
                <div className={styles.frameItem} />
                <b className={styles.allFilters}>All Filters</b>
                <div className={styles.claritysortByLineWrapper}>
                  <img
                    className={styles.claritysortByLineIcon}
                    alt=""
                    src="/claritysortbyline.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.productGrid}>
            <ProductRow
              smartSensorRobotKit="Smart Sensor Robot Kit"
              autonomousExplorer="Autonomous Explorer"
              star3="/vector-32.svg"
              separator="$199.00"
            />
            <Product />
            <ProductRow
              productDetailsJustifyContent="space-between"
              productDetailsGap="20px"
              productNameFlex="unset"
              smartSensorRobotKit="Arduino Smart Car Kit"
              productSubtitlePadding="0px 2px 20px"
              autonomousExplorer="Programmable Rover"
              star3="/vector-7.svg"
              addToCartButtonPadding="0px 9px 0px 4px"
              separator="$299.00"
            />
            <div className={styles.product}>
              <Component8
                property1="Group 176"
                component90Flex="unset"
                component90AlignSelf="stretch"
                component90Width="unset"
                dALLE20250207214708ADeta="/dall-e-20250208-013644--a-realistic-illustration-of-a-small--fourwheeled-autonomous-robot-car-with-a-black-chassis-and-yellow-wheels-the-car-includes-an-ultrasonic-sensor-mremovebgpreview-4@2x.png"
              />
              <div className={styles.productInfo}>
                <FrameComponent />
                <b className={styles.productSeparator}>$599.00</b>
              </div>
            </div>
          </div>
          <div className={styles.productGrid1}>
            <div className={styles.productRow}>
              <ProductRow
                productDetailsJustifyContent="flex-start"
                productDetailsGap="38px"
                productNameFlex="1"
                smartSensorRobotKit="Smart Sensor Robot Kit"
                productSubtitlePadding="0px 2px 19px"
                autonomousExplorer="Autonomous Explorer"
                star3="/vector-32.svg"
                addToCartButtonPadding="0px 2px"
                separator="$199.00"
              />
              <Product />
              <div className={styles.productPair}>
                <div className={styles.component113Wrapper}>
                  <Component8
                    property1="Group 176"
                    component90Flex="1"
                    component90AlignSelf="unset"
                    component90Width="unset"
                    dALLE20250207214708ADeta="/dall-e-20250208-013644--a-realistic-illustration-of-a-small--fourwheeled-autonomous-robot-car-with-a-black-chassis-and-yellow-wheels-the-car-includes-an-ultrasonic-sensor-mremovebgpreview-4@2x.png"
                  />
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.frameContainer}>
                    <div className={styles.arduinoSmartCarKitParent}>
                      <b className={styles.productSeparator}>
                        Arduino Smart Car Kit
                      </b>
                      <div className={styles.roverInfo}>
                        <div className={styles.productSeparator}>
                          Programmable Rover
                        </div>
                      </div>
                      <div className={styles.roverRatings}>
                        <div className={styles.roverStars}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/vector-32.svg"
                          />
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/vector-32.svg"
                          />
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/vector-32.svg"
                          />
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/vector-7.svg"
                          />
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/vector-7.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <button className={styles.component116Wrapper}>
                      <Component9
                        property1="Group 179"
                        component110Border="unset"
                        component110BackgroundColor="unset"
                      />
                    </button>
                  </div>
                  <b className={styles.productSeparator}>$299.00</b>
                </div>
              </div>
              <div className={styles.roboticsCard}>
                <Component8
                  property1="Group 176"
                  component90Flex="unset"
                  component90AlignSelf="stretch"
                  component90Width="unset"
                  dALLE20250207214708ADeta="/dall-e-20250208-013644--a-realistic-illustration-of-a-small--fourwheeled-autonomous-robot-car-with-a-black-chassis-and-yellow-wheels-the-car-includes-an-ultrasonic-sensor-mremovebgpreview-4@2x.png"
                />
                <div className={styles.roboticsContent}>
                  <FrameComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Root2;
