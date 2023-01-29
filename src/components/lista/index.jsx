import "../../globalstyle.css";
import React from "react";
import "./style.css";
export function Lista({ listTransactions, lixeira, remove }) {
  return (
    <div className="lista_Container">
      {listTransactions.length <= 0 ? (
        <ul>
          <p className="resumo">Resumo financeiro</p>
          <h2 className="noCard">Você ainda não possui nenhum lançamento</h2>
          <li className="example">
            <p className="enfeite"></p>
            <p className="enfeiteDois"></p>
          </li>
          <li className="example">
            <p className="enfeite"></p>
            <p className="enfeiteDois"></p>
          </li>
          <li className="example">
            <p className="enfeite"></p>
            <p className="enfeiteDois"></p>
          </li>
        </ul>
      ) : (
        <ul>
          <p className="resumoCard">Resumo financeiro</p>
          {listTransactions.map((lista) =>
            lista.type === "Entrada" ? (
              <li className="cardEntrada">
                <p className="cardDescription">{lista.description} </p>
                <p className="cardType">{lista.type} </p>
                <p className="cardValue">${lista.value} </p>
                <div className="lixeira_Container">
                  <img
                    className="lixeira"
                    src={lixeira}
                    alt=""
                    onClick={() => remove(lista.id)}
                  />
                </div>
              </li>
            ) : (
              <li className="cardDespesa">
                <p className="cardDescription">{lista.description} </p>
                <p className="cardType">{lista.type} </p>
                <p className="cardValue">${lista.value} </p>
                <div className="lixeira_Container">
                  <img
                    className="lixeira"
                    src={lixeira}
                    alt=""
                    onClick={() => remove(lista.id)}
                  />
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}
