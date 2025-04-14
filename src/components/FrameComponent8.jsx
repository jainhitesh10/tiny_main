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
              {/* <Component5
                property1="Frame 427318971"
                integratedLearning="Integrated Learning"
              /> */}
               <div className={styles.component131}>
                <b className={styles.intelearn1}>
                  Integration Learning
                </b>
                <div className={styles.durabilityLabels1}>
                  <div className={styles.affordableEasyToUseContainer1}>
                    <ul className={styles.affordableEasyToUseStem1}>
                    <li
                        className={styles.affordableEasyToUse1}
                      >{`Seamless Tech Integration for hands-on STEM learning.`}</li>
                      <li
                        className={styles.affordableEasyToUse1}
                      >{`Bridges Theory & Practice with real-world applications.`}</li>
                      <li
                        className={styles.affordableEasyToUse1}
                      >{`nhances Problem-Solving, Creativity & Innovation.`}</li>
                      {/* <li>Accessible to Everyone, regardless of background.</li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.component132}>
                <b className={styles.accessibleEducation}>
                  Accessible Education
                </b>
                <div className={styles.durabilityLabels2}>
                  <div className={styles.affordableEasyToUseContainer2}>
                    <ul className={styles.affordableEasyToUseStem2}>
                      <li
                        className={styles.affordableEasyToUse2}
                      >{`Affordable & Easy-to-Use STEM tools for all.`}</li>
                      <li
                        className={styles.affordableEasyToUse2}
                      >{`Ideal for Schools & Individuals seeking quality education.`}</li>
                      <li
                        className={styles.affordableEasyToUse2}
                      >{`User-Friendly & Interactive for engaging learning.`}</li>
                      <li>Accessible to Everyone, regardless of background.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            
            <div className={styles.integrateddetails}>
            <div className={styles.learningIntegration}>
            <div className={styles.component133}>
                <b className={styles.futureproof3}>
                  Future-Proof Skills
                </b>
                <div className={styles.durabilityLabels3}>
                  <div className={styles.affordableEasyToUseContainer3}>
                    <ul className={styles.affordableEasyToUseStem3}>
                      <li
                        className={styles.affordableEasyToUse3}
                      >{`Teach STEM Simply & Engagingly`}</li>
                      <li
                        className={styles.affordableEasyToUse3}
                      >{`Hands-On Learning with Real Project`}</li>
                      <li
                        className={styles.affordableEasyToUse3}
                      >{`Boost Problem-Solving & Critical Thinking`}</li>
                      {/* <li>Accessible to Everyone, regardless of background.</li> */}
                      <li
                        className={styles.affordableEasyToUse3}
                      >{`Prepare for Careers in Tech & Engineering`}</li>
                    </ul>
                  </div>
                </div>
                
              </div>
              <div className={styles.component134}>
                <b className={styles.inhouse4}>
                  In-House Develeopment
                </b>
                <div className={styles.durabilityLabels4}>
                  <div className={styles.affordableEasyToUseContainer4}>
                    <ul className={styles.affordableEasyToUseStem4}>
                      <li
                        className={styles.affordableEasyToUse4}
                      >{`Durable & Reliable high-quality innovations.`}</li>
                      <li
                        className={styles.affordableEasyToUse4}
                      >{`Designed & Built by Tiny Wires Technologies.`}</li>
                      <li
                        className={styles.affordableEasyToUse4}
                      >{`Evolving with Tech & Feedback for continuous improvement.`}</li>
                      {/* <li>Accessible to Everyone, regardless of background.</li> */}
                      <li
                        className={styles.affordableEasyToUse4}
                      >{`Smart Solutions for modern learning needs.`}</li>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
            {/* <div className={styles.learningIntegration}>
              <Component5
                property1="Variant7"
                integratedLearning="Future-Proof Skills"
              />
              <Component5
                property1="Frame 427318972"
                integratedLearning="In-House Development"
              />
            </div> */}
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
