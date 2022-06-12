import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [purchase, setPurchase] = useState(450000);
  const [payment, setPayment] = useState(135000);
  const [repayment, setRepayment] = useState(25);
  const [interest, setInterest] = useState(3);

  let monthlyPayment =
    (purchase - payment) *
    (((interest / 12 / 100) * (1 + interest / 12 / 100) ** (repayment * 12)) /
      ((1 + interest / 12 / 100) ** (repayment * 12) - 1));
  // console.log((1+interest/12/100)**(repayment*12), "hello");
  const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat("en-US", {
      // style:'currency',
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
        <div
          className="formControl"
          style={{ width: "35%", padding: "10px 20px 10px 0" }}
        >
          <div className="calculatorInputTitle">
            Purchase Price: ${formatPrice(purchase)}
          </div>

          <input
            type="range"
            name="purchase"
            onChange={updateFilter}
            min="0"
            max="1000000"
            value={purchase}
          />
        </div>

        <div
          className="formControl"
          style={{ width: "35%", padding: "10px 20px 10px 0" }}
        >
          <div className="calculatorInputTitle">
            Down Payment: ${formatPrice(payment)}
          </div>

          <input
            type="range"
            name="payment"
            onChange={updateFilter}
            min="0"
            max="300000"
            value={payment}
          />
        </div>

        <div
          className="formControl"
          style={{ width: "35%", padding: "10px 20px 10px 0" }}
        >
          <div className="calculatorInputTitle">
            Repayment time: {repayment} years
          </div>

          <input
            type="range"
            name="time"
            onChange={updateFilter}
            min="0"
            max="100"
            value={repayment}
          />
        </div>

        <div
          className="formControl"
          style={{ width: "35%", padding: "10px 20px 10px 0" }}
        >
          <div className="calculatorInputTitle">Interest Rate: {interest}%</div>

          <input
            type="range"
            name="interest"
            onChange={updateFilter}
            min="0"
            max="20"
            value={interest}
          />
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
