import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TeamMemberCard.module.css";

const TeamMemberCard = ({
  className = "",
  teamMemberCardPadding,
  image,
  marieBill,
  marieBillWidth,
  customerCareLead,
  customerCareLeadWidth,
}) => {
  const teamMemberCardStyle = useMemo(() => {
    return {
      padding: teamMemberCardPadding,
    };
  }, [teamMemberCardPadding]);

  const marieBillStyle = useMemo(() => {
    return {
      width: marieBillWidth,
    };
  }, [marieBillWidth]);

  const customerCareLeadStyle = useMemo(() => {
    return {
      width: customerCareLeadWidth,
    };
  }, [customerCareLeadWidth]);

  return (
    <div
      className={[styles.teamMemberCard, className].join(" ")}
      style={teamMemberCardStyle}
    >
      <div className={styles.imageParent}>
        <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
        <h3 className={styles.marieBill} style={marieBillStyle}>
          {marieBill}
        </h3>
        <div className={styles.customerCareLead} style={customerCareLeadStyle}>
          {customerCareLead}
        </div>
      </div>
    </div>
  );
};

TeamMemberCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  marieBill: PropTypes.string,
  customerCareLead: PropTypes.string,

  /** Style props */
  teamMemberCardPadding: PropTypes.string,
  marieBillWidth: PropTypes.string,
  customerCareLeadWidth: PropTypes.string,
};

export default TeamMemberCard;
