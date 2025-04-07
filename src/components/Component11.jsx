import TeamMemberCard from "./TeamMemberCard";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./Component11.module.css";

const Component11 = ({ className = "", property1 = "Frame 427318946" }) => {
  return (
    <div
      className={[styles.component112, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.frameGroup}>
        <div className={styles.teamMemberCardParent}>
          <TeamMemberCard
            image="/image@2x.png"
            marieBill="Marie Bill"
            customerCareLead="Customer Care Lead"
          />
          <GroupComponent
            image="/image-1@2x.png"
            johnBeige="John beige"
            vPCustomerCare="VP Customer Care "
          />
          <GroupComponent
            image="/image-2@2x.png"
            johnBeige="Jonathan Joseph"
            johnBeigeWidth="197px"
            vPCustomerCare="Payment Support"
            vPCustomerCareWidth="128px"
          />
          <TeamMemberCard
            teamMemberCardPadding="0px 3.2px 0px 0px"
            image="/image-3@2x.png"
            marieBill="Lucy Nathan"
            marieBillWidth="149px"
            customerCareLead="Special support"
            customerCareLeadWidth="115px"
          />
          <GroupComponent
            image="/image-4@2x.png"
            johnBeige="Marie Bill"
            johnBeigeWidth="115px"
            vPCustomerCare="Customer Care Lead"
            vPCustomerCareWidth="147px"
          />
        </div>
        <div className={styles.frameParent}>
          <TeamMemberCard
            teamMemberCardPadding="0px 5.6px 0px 0px"
            image="/image-5@2x.png"
            marieBill="Marie Bill"
            marieBillWidth="115px"
            customerCareLead="Customer Care Lead"
            customerCareLeadWidth="147px"
          />
          <GroupComponent
            image="/image-1@2x.png"
            johnBeige="John beige"
            johnBeigeWidth="127px"
            vPCustomerCare="VP Customer Care "
            vPCustomerCareWidth="132px"
          />
          <GroupComponent
            image="/image-2@2x.png"
            johnBeige="Jonathan Joseph"
            johnBeigeWidth="197px"
            vPCustomerCare="Payment Support"
            vPCustomerCareWidth="128px"
          />
          <TeamMemberCard
            teamMemberCardPadding="0px 3.2px 0px 0px"
            image="/image-3@2x.png"
            marieBill="Lucy Nathan"
            marieBillWidth="149px"
            customerCareLead="Special support"
            customerCareLeadWidth="115px"
          />
          <GroupComponent
            image="/image-4@2x.png"
            johnBeige="Marie Bill"
            johnBeigeWidth="115px"
            vPCustomerCare="Customer Care Lead"
            vPCustomerCareWidth="147px"
          />
        </div>
      </div>
    </div>
  );
};

Component11.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component11;
