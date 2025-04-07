import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Root3.module.css";

const Root3 = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/frame-427318964");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/frame-427318961");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/frame-427318963");
  }, [navigate]);

  const onGraphicIconClick = useCallback(() => {
    navigate("/frame-427318969");
  }, [navigate]);

  return (
    <div className={styles.root}>
      <FrameComponent1
        property1="Variant2"
        frameDivBackgroundColor="rgba(255, 255, 255, 0)"
        frameDivMarginLeft="-220px"
        frameDivMarginBottom="unset"
        frameDivPosition="unset"
        frameDivTop="unset"
        frameDivLeft="unset"
        tinywireLogo3111="/tinywire-logo-311-1@2x.png"
        homeMargin="unset"
        homeFontWeight="unset"
        onAboutUsTextClick={onAboutUsTextClick}
        aboutUsMargin="unset"
        aboutUsFontWeight="unset"
        aboutUsColor="unset"
        aboutUsBackground="linear-gradient(90deg, #c04dd9, #9b3dbf 30%, #6f4ad9 50%, #2020ad)"
        aboutUsWebkitBackgroundClip="unset"
        aboutUsWebkitTextFillColor="unset"
        shopMargin="unset"
        shopFontWeight="unset"
        onShopTextClick={onShopTextClick}
        shopBackground="linear-gradient(90deg, #c04dd9, #9b3dbf 30%, #6f4ad9 50%, #2020ad)"
        shopWebkitBackgroundClip="unset"
        shopWebkitTextFillColor="unset"
        shopColor="unset"
        blogMargin="unset"
        blogFontWeight="unset"
        blogBackground="unset"
        blogWebkitBackgroundClip="unset"
        blogWebkitTextFillColor="unset"
        blogColor="#4a4a4a"
        contactMargin="unset"
        contactFontWeight="unset"
        onContactTextClick={onContactTextClick}
        contactBackground="linear-gradient(90deg, #c04dd9, #9b3dbf 30%, #6f4ad9 50%, #2020ad)"
        contactWebkitBackgroundClip="unset"
        contactWebkitTextFillColor="unset"
        contactColor="unset"
        vector="/vector.svg"
        onVectorIconClick={onGraphicIconClick}
      />
      <i className={styles.realStoriesReal}>
        "Real Stories. Real Impact. See How STEM Transforms Lives!"
      </i>
    </div>
  );
};

export default Root3;
