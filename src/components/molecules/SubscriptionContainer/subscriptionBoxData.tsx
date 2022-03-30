import React from "react";

export const SubscriptionBoxData = [
  {
    plan: "6 month plan",
    discount: "Save 50%",
    price: {
      total: 9.99,
      month: "month",
    },
    oldvalue: 119.94,
    newvalue: {
      new_total: 59.94,
      new_month: "billed every 6 months",
    },
  },
  {
    plan: "3 month plan",
    discount: null,
    price: {
      total: 14.99,
      month: "month",
    },
    oldvalue: 59.97,
    newvalue: {
      new_total: 44.97,
      new_month: "billed every 3 months",
    },
  },
  {
    plan: "1 month plan",
    discount: null,
    price: {
      total: 19.99,
      month: "month",
    },
    oldvalue: null,
    newvalue: {
      new_total: null,
      new_month: "billed monthly",
    },
  },
];
