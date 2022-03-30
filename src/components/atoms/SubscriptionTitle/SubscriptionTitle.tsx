import React from "react";
import "./subscription-title.scss";

interface ISubscriptionContainer {
  displayTitle: boolean;
}

const SubscriptionTitle: React.FC<ISubscriptionContainer> = ({
  displayTitle,
}) => {
  return (
    <div className="hero__container">
      {displayTitle && (
        <span className="hero__header--align">
          Over <strong>52 147</strong> plans ordered
        </span>
      )}
      {displayTitle ? (
        <h1 className="hero__header hero__header--align">
          Get access to your yoga program now!
        </h1>
      ) : (
        <h2 className="hero__header--two hero__header--align">
          Start your yoga program today!
        </h2>
      )}
    </div>
  );
};

export default SubscriptionTitle;
