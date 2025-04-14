import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Sales.module.css";

const Sales = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) =>
    /^\+?\d{10,15}$/.test(phone);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    if (value && !validatePhone(value)) {
      setErrors((prev) => ({
        ...prev,
        phone: "❌ Invalid phone number",
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.phone;
        return newErrors;
      });
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "❌ Invalid email address",
      }));
    } else if (value) {
      setErrors((prev) => ({
        ...prev,
        email: "✅ Valid email",
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.email;
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    setFormStatus("");

    if (!validateEmail(email)) {
      newErrors.email = "❌ Invalid email address";
    }

    if (!validatePhone(phone)) {
      newErrors.phone = "❌ Invalid phone number";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setFormStatus("✅ Thank you! Your message has been sent.");
    } else {
      setFormStatus("⚠️ Please fix the errors above before submitting.");
    }
  };

  return (
    <div className={[styles.sales, className].join(" ")}>
      <div className={styles.salesHeader}>
        <h2 className={styles.contactOurSales}>Contact our sales team</h2>
        <div className={styles.emailSupport}>
          <h3 className={styles.callUs}>Email Support</h3>
        </div>
        <div className={styles.contactForm}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
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
                  <input
                    className={styles.eMail}
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {errors.email && (
                    <div
                      style={{
                        color: errors.email.startsWith("✅") ? "green" : "red",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className={styles.formFieldLabels}>
                  <input
                    className={styles.Phoneno}
                    placeholder="Phone No."
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  {errors.phone && (
                    <div style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
                      {errors.phone}
                    </div>
                  )}
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
              <div className="imgiconn">
                <img
                  className={styles.contactBackgroundIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-2886@2x.png"
                />
              </div>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "14px",
                cursor: "pointer",
                marginTop: "1rem",
              }}
            >
              Submit
            </button>

            {/* NEW FORM STATUS DIV HERE */}
            <div style={{ marginTop: "12px", minHeight: "24px" }}>
              {formStatus && (
                <div
                  style={{
                    color: formStatus.includes("✅") ? "green" : "red",
                    backgroundColor: formStatus.includes("✅") ? "#e6ffed" : "#ffe6e6",
                    border: formStatus.includes("✅")
                      ? "1px solid #a3d9a5"
                      : "1px solid #ffb3b3",
                    padding: "10px",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontSize: "14px",
                  }}
                >
                  {formStatus}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Sales.propTypes = {
  className: PropTypes.string,
};

export default Sales;
