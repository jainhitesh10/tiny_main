import Component6 from "./Component6";
import PropTypes from "prop-types";
import styles from "./SuccessStories.module.css";

const SuccessStories = ({ className = "" }) => {
  return (
    <section className={[styles.successStories, className].join(" ")}>
      <Component6 property1="Frame 1321317457" />
    </section>
  );
};

SuccessStories.propTypes = {
  className: PropTypes.string,
};

export default SuccessStories;
