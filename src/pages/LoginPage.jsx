import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onSignUpTextClick = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  const onButtonShapeClick = useCallback(() => {
    navigate("/frame-427318969");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageInner}>
        <main className={styles.frameParent}>
          <div className={styles.tinywiresWrapper}>
            <h1 className={styles.tinywires}>TinyWires</h1>
          </div>
          <div className={styles.image20Parent}>
            <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
            <h2 className={styles.empoweringFutureInnovators}>
              Empowering Future Innovators with STEM Excellence
            </h2>
          </div>
        </main>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.loginForm}>
              <div className={styles.loginFormChild} />
              <div className={styles.login}>Login</div>
            </div>
            <div className={styles.signUpOption}>
              <div className={styles.signup} onClick={onSignUpTextClick}>
                SignUp
              </div>
            </div>
          </div>
        </div>
        <div className={styles.inputFields}>
          <FrameComponent2
            property1="Default"
            frameDivPosition="unset"
            frameDivTop="unset"
            frameDivLeft="unset"
            frameDivBackgroundColor="rgba(255, 255, 255, 0)"
            frameDivBorderBottom="2px solid #4a4a4a"
            frameDivWidth="585px"
            enterEmailOrColor="#4a4a4a"
            enterEmailOrBorder="unset"
            enterEmailOrOutline="unset"
            enterEmailOrBackgroundColor="unset"
          />
          <FrameComponent4 property1="Default" />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.loginButtonParent}>
            <button className={styles.loginButton}>
              <div
                className={styles.buttonShape}
                onClick={onButtonShapeClick}
              />
              <div className={styles.login1}>Login</div>
            </button>
            <div className={styles.separatorWrapper}>
              <div className={styles.separator}>
                <div className={styles.or}>OR</div>
                <div className={styles.googleLogin}>
                  <img
                    className={styles.devicongoogle}
                    loading="lazy"
                    alt=""
                    src="/devicongoogle.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
