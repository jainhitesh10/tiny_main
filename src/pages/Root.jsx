import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Component124InnovationAndE from "../components/Component124InnovationAndE";
import Component124CustomizableF from "../components/Component124CustomizableF";
import Footer from "../components/Footer";
import styles from "./Root.module.css";

const Root = () => {
  const navigate = useNavigate();

  const onShopTextClick = useCallback(() => {
    navigate("/frame-427318961");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/frame-427318962");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/frame-427318963");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.root}>
      <header className={styles.homeInstance}>
        <FrameComponent1
          property1="Variant2"
          tinywireLogo3111="/tinywire-logo-311-1@2x.png" 
          onShopTextClick={onShopTextClick}
          onBlogTextClick={onBlogTextClick}
          onContactTextClick={onContactTextClick}
          vector="/vector.svg"
          onVectorIconClick={onVectorIconClick}
        />
      </header>
      <section className={styles.componentInstanceWrapper}>
        <Component1 property1="Frame 427318967" />
      </section>
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.welcomeToTinyWiresALeadiWrapper}>
            <div className={styles.welcomeToTinyContainer}>
              <p className={styles.welcomeToTiny}>
                Welcome to Tiny Wires, a leading provider of innovative
                electronics kits and DIY solutions in India. We specialize in
                creating hands-on learning experiences for students, hobbyists,
                and professionals, empowering them with practical knowledge in
                electronics and embedded systems. Our mission is to make
                electronics accessible and enjoyable for all, fostering a
                culture of creativity and innovation.
              </p>
              <p className={styles.welcomeToTiny}>
                At Tiny Wires, we believe in learning by doing. Our carefully
                curated electronics kits cover a wide range of applications,
                from basic circuit building to advanced IoT and robotics
                projects. Whether you are a beginner exploring the fundamentals
                or an expert looking for high-quality components, we provide the
                tools and resources needed to turn ideas into reality.
              </p>
              <p className={styles.welcomeToTiny}>
                Through our structured learning solutions, we cater to schools,
                colleges, and individual learners, ensuring a seamless
                transition from theory to practical implementation. Our approach
                emphasizes problem-solving and experimentation, helping users
                develop critical skills required in today’s technology-driven
                world.
              </p>
              <p className={styles.welcomeToTiny}>
                Join Tiny Wires on this exciting journey of exploration and
                innovation. As a trusted name in electronics education, we are
                dedicated to inspiring the next generation of makers and
                engineers. Let’s build, create, and innovate together for a
                smarter future!
              </p>
            </div>
          </div>
          <img
            className={styles.welcomeEmptyIcon}
            loading="lazy"
            alt=""
            src="/frame-427318967@2x.png"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.ourMissionWrapper}>
              <h1 className={styles.ourMission}>Our Mission</h1>
            </div>
            <div className={styles.atTinyWiresContainer}>
              <p className={styles.welcomeToTiny}>
                At Tiny Wires, our mission is to make electronics learning
                accessible, engaging, and practical for everyone. We aim to
                empower students, hobbyists, and professionals by providing
                high-quality electronics kits and hands-on learning experiences.
              </p>
              <p className={styles.welcomeToTiny}>
                We believe that true innovation comes from exploration and
                experimentation. By bridging the gap between theoretical
                knowledge and real-world applications, we strive to foster a
                community of creative thinkers, problem-solvers, and future
                engineers.
              </p>
              <p className={styles.welcomeToTiny}>
                Through our thoughtfully designed kits and learning resources,
                we are committed to inspiring curiosity, enhancing technical
                skills, and shaping the future of electronics education.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.whyChooseUsParent}>
        <h1 className={styles.whyChooseUs}>Why Choose Us?</h1>
        <div className={styles.chooseContent}>
          <Component2 property1="Frame 427318965" />
          <div className={styles.component124}>
            <Component124InnovationAndE property1="Frame 427318966" />
            <div className={styles.weDesignAnd}>
              We design and manufacture kits focused on electronics, IoT, and
              robotics, providing hands-on learning experiences. These kits help
              students understand core engineering concepts, enhance creativity,
              and build technical expertise through practical experimentation,
              fostering a deeper grasp of real-world applications.
            </div>
            <img
              className={styles.oipRemovebgPreview3Icon}
              loading="lazy"
              alt=""
              src="/oipremovebgpreview-3@2x.png"
            />
          </div>
          <div className={styles.component135}>
            <div className={styles.ourOnlineStore}>
              Our online store offers a seamless way to purchase educational
              kits, components, and related materials, ensuring accessibility
              for students, educators, and hobbyists. With detailed product
              descriptions and guided tutorials, we make learning more
              convenient, efficient, and engaging for all users.
            </div>
            <Component124CustomizableF property1="Frame 427318967" />
            <div className={styles.shopButtonWrapperWrapper}>
              <div className={styles.shopButtonWrapper}>
                <button
                  className={styles.shopButtonBackgroundParent}
                  onClick={onShopTextClick}
                >
                  <div className={styles.shopButtonBackground} />
                  <b
                    className={styles.exploreTheShop}
                  >{`EXPLORE THE SHOP ->`}</b>
                </button>
                <div className={styles.developmentImage}>
                  <img
                    className={styles.inHouseDevelopment955906a67Icon}
                    loading="lazy"
                    alt=""
                    src="/inhousedevelopment955906a67d306e75c2a0removebgpreview-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.imageGallery}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image24Icon}
            loading="lazy"
            alt=""
            src="/image-24@2x.png"
          />
          <img
            className={styles.image27Icon}
            loading="lazy"
            alt=""
            src="/image-27@2x.png"
          />
          <img
            className={styles.image28Icon}
            loading="lazy"
            alt=""
            src="/image-28@2x.png"
          />
          <img
            className={styles.image29Icon}
            loading="lazy"
            alt=""
            src="/image-29@2x.png"
          />
          <img
            className={styles.image26Icon}
            loading="lazy"
            alt=""
            src="/image-26@2x.png"
          />
        </div>
      </section>
      <Footer tinywireLogo1411="/tinywire-logo-141-1@2x.png" />
    </div>
  );
};

export default Root;
