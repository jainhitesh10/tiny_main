import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import Component4 from "../components/Component4";
import FrameComponent8 from "../components/FrameComponent8";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";
import styles from "./Root1.module.css";
import WhoAreWe from "../components/WhoAreWe";
import HoverState from "../components/HoverState";

const Root1 = () => {
  return (
    <div className={styles.root}>
      <GroupComponent1 />
      <FrameComponent6 />
      <FrameComponent7 />
      {/* <section className={styles.component135Wrapper}>
        <Component4 property1="Frame 427318968" />
      </section> */}
      <WhoAreWe />
      <FrameComponent8 />
      
      <HoverState />
      <Footer />
    
    </div>
  );
};

export default Root1;
