import "../../globalstyle.css";
import React from "react";
import "./styles.css";
export function TotalMoney({ listTransactions }) {
  console.log(listTransactions);
  const total = listTransactions.reduce((prevValue, currentValue) => {
    if (currentValue.type === "Entrada") {
      return prevValue + +currentValue.value;
    } else {
      return prevValue - +currentValue.value;
    }
  }, 0);
  return (
    <div>
      {total === 0 && listTransactions.length <= 0 ? (
        <p></p>
      ) : (
        <div className="total_Container">
          <div className="total">
            <p className="pTotal">Total</p>
            <p className="numberTotal"> ${total} </p>
          </div>
          <p className="pValue">O valor se refere ao saldo</p>
        </div>
      )}
    </div>
  );
}
