import PropTypes from "prop-types";
import styles from "./Sales.module.css";

const Sales = ({ className = "" }) => {
  return (
    <div className={[styles.sales, className].join(" ")}>
      <div className={styles.salesHeader}>
        <h2 className={styles.contactOurSales}>Contact our sales team</h2>
        <div className={styles.emailSupport}>
          <h3 className={styles.callUs}>Email Support</h3>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.formContainer}>
            <div className={styles.formFields}>
              <div className={styles.formFieldNames}>
                <div className={styles.formFieldLabels}>
                  <input
                    className={styles.name}
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div className={styles.formFieldLabels}>
                  <h2 className={styles.eMail}>E-mail</h2>
                </div>
                <div className={styles.formFieldLabels}>
                  <h2 className={styles.eMail}>Phone Number</h2>
                </div>
              </div>
              <textarea
                className={styles.messageField}
                placeholder="Leave a Message"
                rows={19}
                cols={27}
              />
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.infoContainer}>
                <div className={styles.infoDetails}>
                  <div className={styles.emailInfo}>
                    <div className={styles.emailDetails}>
                      <div className={styles.emailUsWe}>
                        Email us we will get to you within 24 hours
                      </div>
                    </div>
                    <a
                      className={styles.tinywirestechgmailcom}
                      href="mailto:tinywires.tech@gmail.com"
                      target="_blank"
                    >
                      <p className={styles.p}>tinywires.tech@gmail.com</p>
                    </a>
                  </div>
                  <div className={styles.phoneInfo}>
                    <div className={styles.phoneDetails}>
                      <div className={styles.phoneNumber1}>
                        <h3 className={styles.callUs}>Call Us</h3>
                      </div>
                      <div className={styles.phoneAvailability}>
                        <div className={styles.phoneTime}>
                          <div className={styles.monFri900Am}>
                            Mon-Fri, 9:00 AM - 5:00 AM
                          </div>
                        </div>
                        <b className={styles.spacer}>
                          <p className={styles.p}> +91-7973469192</p>
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.addressContainer}>
                    <h3 className={styles.callUs}>Address</h3>
                  </div>
                </div>
              </div>
              <img
                className={styles.contactBackgroundIcon}
                loading="lazy"
                alt=""
                src="/rectangle-2886@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sales.propTypes = {
  className: PropTypes.string,
};

export default Sales;
