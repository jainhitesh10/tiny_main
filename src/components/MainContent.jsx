import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent5 from "./FrameComponent5";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import styles from "./MainContent.module.css";

const MainContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLoginTextClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onSubmitBackgroundClick = useCallback(() => {
    navigate("/frame-427318969");
  }, [navigate]);

  return (
    <form className={[styles.mainContent, className].join(" ")}>
      <div className={styles.mainContentChild} />
      <div className={styles.formContainer}>
        <div className={styles.loginForm}>
          <div className={styles.loginButtons}>
            <div className={styles.loginButtonsChild} />
            <div className={styles.loginButton}>
              <div className={styles.login} onClick={onLoginTextClick}>
                Login
              </div>
            </div>
            <div className={styles.signupButton}>
              <div className={styles.signupButtonChild} />
              <div className={styles.signup}>SignUp</div>
            </div>
          </div>
        </div>
        <div className={styles.inputFields}>
          <div className={styles.nameField}>
            <div className={styles.nameInput}>
              <FrameComponent5 property1="Default" />
              <div className={styles.contactField}>
                <FrameComponent2
                  property1="Default"
                  frameDivPosition="unset"
                  frameDivTop="unset"
                  frameDivLeft="unset"
                  frameDivBackgroundColor="rgba(255, 255, 255, 0)"
                  frameDivBorderBottom="2px solid #4a4a4a"
                  frameDivWidth="585px"
                  enterEmailOrColor="#4a4a4a"
                  enterEmailOrBorder="none"
                  enterEmailOrOutline="none"
                  enterEmailOrBackgroundColor="transparent"
                />
              </div>
            </div>
          </div>
          <FrameComponent4 property1="Default" />
        </div>
      </div>
      <div className={styles.signupButtonContainerWrapper}>
        <div className={styles.signupButtonContainer}>
          <button className={styles.submitButton}>
            <div
              className={styles.submitBackground}
              onClick={onSubmitBackgroundClick}
            />
            <div className={styles.signup1}>SignUp</div>
          </button>
          <div className={styles.separator}>
            <div className={styles.or}>OR</div>
          </div>
        </div>
      </div>
    </form>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
