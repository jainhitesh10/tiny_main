import Component5 from "./Component5";
import PropTypes from "prop-types";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={[styles.offerContentWrapper, className].join(" ")}>
      <div className={styles.offerContent}>
        <div className={styles.whatWeOfferWrapper}>
          <h1 className={styles.whatWeOffer}>What We Offer ?</h1>
        </div>
        <div className={styles.offerDetails}>
          <div className={styles.img76931Wrapper}>
            <img
              className={styles.img76931Icon}
              loading="lazy"
              alt=""
              src="/img-7693-1@2x.png"
            />
          </div>
          <div className={styles.integrationDetails}>
            <div className={styles.learningIntegration}>
              <Component5
                property1="Frame 427318971"
                integratedLearning="Integrated Learning"
              />
              <div className={styles.component130}>
                <b className={styles.accessibleEducation}>
                  Accessible Education
                </b>
                <div className={styles.durabilityLabels}>
                  <div className={styles.affordableEasyToUseContainer}>
                    <ul className={styles.affordableEasyToUseStem}>
                      <li
                        className={styles.affordableEasyToUse}
                      >{`Affordable & Easy-to-Use STEM tools for all.`}</li>
                      <li
                        className={styles.affordableEasyToUse}
                      >{`Ideal for Schools & Individuals seeking quality education.`}</li>
                      <li
                        className={styles.affordableEasyToUse}
                      >{`User-Friendly & Interactive for engaging learning.`}</li>
                      <li>Accessible to Everyone, regardless of background.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.learningIntegration}>
              <Component5
                property1="Variant7"
                integratedLearning="Future-Proof Skills"
              />
              <Component5
                property1="Frame 427318972"
                integratedLearning="In-House Development"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
