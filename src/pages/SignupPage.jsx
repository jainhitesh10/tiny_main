import MainContent from "../components/MainContent";
import styles from "./SignupPage.module.css";

const SignupPage = () => {
  return (
    <div className={styles.signupPage}>
      <div className={styles.signupPageInner}>
        <main className={styles.frameParent}>
          <div className={styles.tinywiresWrapper}>
            <h1 className={styles.tinywires}>TinyWires</h1>
          </div>
          <div className={styles.image20Parent}>
            <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
            <h3 className={styles.empoweringFutureInnovators}>
              Empowering Future Innovators with STEM Excellence
            </h3>
          </div>
        </main>
      </div>
      <MainContent />
    </div>
  );
};

export default SignupPage;
