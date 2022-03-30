import React from "react";
import HeaderContainer from "../components/molecules/HeaderContainer/HeaderContainer";
import SubscriptionContainer from "../components/molecules/SubscriptionContainer/SubscriptionContainer";
import YogaBenefitsContainer from "../components/molecules/YogaBenefitsContainer/YogaBenefitsContainer";
import YogaProgramContainer from "../components/molecules/YogaProgramContainer/YogaProgramContainer";
import SliderCardContainer from "../components/organisms/SliderCardContainer/SliderCardContainer";
import FrequentlyAskedQuestionContainer from "../components/molecules/FrequentlyAskedQuestionContainer/FrequentlyAskedQuestionContainer";
import PhonesContainer from "../components/molecules/PhonesContainer/PhonesContainer";
import SubscriptionTitle from "../components/atoms/SubscriptionTitle/SubscriptionTitle";
import SliderCardContainerHidden from "../components/organisms/SliderCardContainerHidden/SliderCardContainerHidden";

import Button from "../components/atoms/Button/Button";
import "./checkout-page.scss";

const CheckoutPage = () => {
  return (
    <div>
      <HeaderContainer />
      <div className="checkout__page">
        <SubscriptionTitle displayTitle={true} />
        <div className="hero__grid">
          <SubscriptionContainer displayTitle={true} />
          <YogaProgramContainer />
        </div>
        <div className="slide-container__visible">
          <SliderCardContainer />
        </div>
        <div className="slide-container__hidden">
          <SliderCardContainerHidden />
        </div>
        <Button displayButton={true} />
        <div className="main__grid">
          <YogaBenefitsContainer />
          <PhonesContainer />
        </div>
        <FrequentlyAskedQuestionContainer />
        <Button displayButton={true} />
        <SubscriptionTitle />
        <div className="hero__grid hero__grid--bottom">
          <SubscriptionContainer />
          <YogaProgramContainer />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
