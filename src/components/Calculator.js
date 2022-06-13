import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [purchase, setPurchase] = useState(450000);
  const [payment, setPayment] = useState(135000);
  const [repayment, setRepayment] = useState(25);
  const [interest, setInterest] = useState(3);

  let r = interest / 12 / 100;
  let p = purchase - payment;
  let n = repayment * 12;
  let monthlyPayment = p * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));

  const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat("en-US", {
      currency: "USD",
    }).format(number);
    return newNumber;
  };

  const updateFilter = (e) => {
    let name = e.target.name;

    if (name === "purchase") {
      setPurchase(Number(e.target.value));
    } else if (name === "payment") {
      setPayment(Number(e.target.value));
    } else if (name === "time") {
      setRepayment(Number(e.target.value));
    } else if (name === "interest") {
      setInterest(Number(e.target.value));
    }
  };
  return (
    <div>
      <div className="calculatorWrapper">
        <div className="row">
          <div className="row">
            <label className="calculatorInputTitle col-6" for="purchase">
              Purchase Price: ${formatPrice(purchase)}
            </label>
            <label className="calculatorInputTitle col-6" for="payment">
              Down Payment: ${formatPrice(payment)}
            </label>
          </div>
          <div className="row">
            <div className="formControl col-6">
              <input
                type="range"
                name="purchase"
                onChange={updateFilter}
                min="0"
                max="1000000"
                value={purchase}
                id="purchase"
              />
            </div>

            <div className="formControl col-6">
              <input
                type="range"
                name="payment"
                onChange={updateFilter}
                min="0"
                max="300000"
                value={payment}
                id="payment"
              />
            </div>
          </div>
          <div className="row">
            <label className="calculatorInputTitle col-6" for="repayment">
              Repayment time: {repayment} years
            </label>
            <label className="calculatorInputTitle col-6" for="interest">
              Interest Rate: {interest}%
            </label>
          </div>
          <div className="row">
            <div className="formControl col-6">
              <input
                type="range"
                name="time"
                onChange={updateFilter}
                min="0"
                max="100"
                value={repayment}
                id="repayment"
              />
            </div>

            <div className="formControl col-6">
              <input
                type="range"
                name="interest"
                onChange={updateFilter}
                min="0"
                max="20"
                value={interest}
                id="interest"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="calculatorText">
        Loan amount:{" "}
        <span className="calculatorNum">
          ${formatPrice(purchase - payment)}
        </span>{" "}
      </div>
      <div className="calculatorText">
        Estimated repayment per month:{" "}
        <span className="calculatorNum">$ {formatPrice(monthlyPayment)}</span>{" "}
      </div>
    </div>
  );
};

export default Calculator;
