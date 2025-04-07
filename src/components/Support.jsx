import Component10 from "./Component10";
import PropTypes from "prop-types";
import styles from "./Support.module.css";

const Support = ({ className = "" }) => {
  return (
    <section className={[styles.support, className].join(" ")}>
      <div className={styles.supportHeader}>
        <h1 className={styles.needHelpWere}>
          Need Help? We’re here for you 24/7.
        </h1>
        <div className={styles.supportDescription}>
          <div className={styles.supportBody}>
            <div className={styles.ourDedicatedTeamContainer}>
              <p className={styles.ourDedicatedTeam}>
                Our dedicated team is ready to help around the clock.
              </p>
              <p className={styles.ourDedicatedTeam}>
                Access 24/7 support through our award winning network.
              </p>
            </div>
            <button className={styles.supportButton}>
              <Component10 property1="Group 179" />
            </button>
          </div>
        </div>
        <div className={styles.teamHeader}>
          <h1 className={styles.meetOurCustomer}>
            Meet Our Customer Care Team
          </h1>
        </div>
      </div>
    </section>
  );
};

Support.propTypes = {
  className: PropTypes.string,
};

export default Support;
