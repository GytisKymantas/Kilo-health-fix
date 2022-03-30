import React, { useState } from "react";
import "./subscription-box.scss";
import TickBox from "../../../assets/tickbox.svg";
import TickBoxGray from "../../../assets/tickboxgray.svg";

interface ISubscriptionBox {
  plan: string | null;
  total: number | null;
  month: string | null;
  discount: string | null;
  new_total?: number | null;
  oldvalue: number | null;
  new_month?: string | null;
}

const SubscriptionBox: React.FC<ISubscriptionBox> = ({
  discount,
  month,
  total,
  oldvalue,
  plan,
  new_month,
  new_total,
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected(!selected)}
      className="subscription-box"
      style={
        selected
          ? { border: "2px solid #ff9b4e" }
          : { border: "2px solid rgba(0, 0, 0, 0.08)" }
      }
    >
      <div className="subscription-box--header">
        <p className="monthly-plan">{plan}</p>
        {discount && (
          <div className="discount-wrapper">
            <span className="discount-price">{discount}</span>
          </div>
        )}
      </div>
      <div className="subscription-box--main">
        <div>
          <span className="large-price">&#x24;{total}</span>/{month}
        </div>
        <div className="tickbox">
          {selected ? (
            <img src={TickBox} alt="tickbox" />
          ) : (
            <img src={TickBoxGray} alt="tickbox" />
          )}
        </div>
      </div>
      <div className="subscription-box--footer">
        {oldvalue ? (
          <p>
            <s className="crossed-price">&#36;{oldvalue}</s>
            <span className="highlighted-price">&#36;{new_total}</span>{" "}
            {new_month}
          </p>
        ) : (
          <p>Billed monthly</p>
        )}
      </div>
    </div>
  );
};

export default SubscriptionBox;
