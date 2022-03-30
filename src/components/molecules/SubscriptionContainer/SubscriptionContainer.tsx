import React from "react";
import SubscriptionBox from "../../atoms/SubscriptionBox/SubscriptionBox";
import Button from "../../atoms/Button/Button";
import SafetyGuarantee from "../../../assets/safetyguarantee.svg";
import { SubscriptionBoxData } from "./subscriptionBoxData";
// import SubscriptionTitle from "../../atoms/SubscriptionTItle/SubscriptionTitle";

import "./subscription-container.scss";



const SubscriptionContainer = () => {
  const subscriptions = SubscriptionBoxData;
  // console.log(subscriptions);
  return (
    <div className="subscriptions">
      {/* <SubscriptionTitle displayTitle={true} /> */}
      <p className="hero__paragraph">
        Choose your plan and get{" "}
        <span className="hero__trial">7 days free trial</span>
      </p>
      <div className="subscription-boxes">
        {subscriptions.map((sub, i) => {
          return (
            <SubscriptionBox
              key={i}
              discount={sub.discount}
              month={sub.price.month}
              total={sub.price.total}
              oldvalue={sub.oldvalue}
              plan={sub.plan}
              new_month={sub.newvalue.new_month}
              new_total={sub.newvalue.new_total}
            />
          );
        })}
      </div>
      <Button />
      <div className="security__paragraph--container">
      <p className="security__paragraph">
        After 7 days free trial subscription payment is automatically charged
        from your account unless it is cancelled at least 24 hours before the
        end of the trial period.
      </p>
      <p className="security__paragraph">
        By choosing a payment method you agree to the <a href="#">T&#38;Cs</a>{" "}
        and <a href="#">Privacy Policy</a>
      </p>
      <img src={SafetyGuarantee} alt="securityguarantee" />
      </div>
    </div>
  );
};

export default SubscriptionContainer;
