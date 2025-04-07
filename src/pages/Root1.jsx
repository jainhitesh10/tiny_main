import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import Component4 from "../components/Component4";
import FrameComponent8 from "../components/FrameComponent8";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";
import styles from "./Root1.module.css";

const Root1 = () => {
  return (
    <div className={styles.root}>
      <GroupComponent1 />
      <FrameComponent6 />
      <FrameComponent7 />
      <section className={styles.component135Wrapper}>
        <Component4 property1="Frame 427318968" />
      </section>
      <FrameComponent8 />
      <SuccessStories />
      <Footer
        tinywireLogo1411="/tinywire-logo-141-1@2x.png"
        tinywireLogo1411Top="217px"
        tinywireLogo1411Left="22px"
      />
    </div>
  );
};

export default Root1;
