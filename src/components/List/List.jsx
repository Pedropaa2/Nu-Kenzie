import "../../globalstyle.css";
import React from "react";
import "./List.css";
export function Lista({ listTransactions, lixeira, remove }) {
  return (
    <div className="list_Container">
      {listTransactions.length <= 0 ? (
        <ul>
          <p className="resume">Resumo financeiro</p>
          <h2 className="noCard">Você ainda não possui nenhum lançamento</h2>
          <li className="example">
            <p className="ornament"></p>
            <p className="ornamentTwo"></p>
          </li>
          <li className="example">
            <p className="ornament"></p>
            <p className="ornamentTwo"></p>
          </li>
          <li className="example">
            <p className="ornament"></p>
            <p className="ornamentTwo"></p>
          </li>
        </ul>
      ) : (
        <ul>
          <p className="resumeCard">Resumo financeiro</p>
          {listTransactions.map((lista) =>
            lista.type === "Entrada" ? (
              <li className="cardEntry">
                <p className="cardDescription">{lista.description} </p>
                <p className="cardType">{lista.type} </p>
                <p className="cardValue">${lista.value} </p>
                <div
                  className="trash_Container"
                  onClick={() => remove(lista.id)}
                >
                  <img className="trash" src={lixeira} alt="" />
                </div>
              </li>
            ) : (
              <li className="cardExpense">
                <p className="cardDescription">{lista.description} </p>
                <p className="cardType">{lista.type} </p>
                <p className="cardValue">${lista.value} </p>
                <div
                  className="trash_Container"
                  onClick={() => remove(lista.id)}
                >
                  <img className="trash" src={lixeira} alt="" />
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}
