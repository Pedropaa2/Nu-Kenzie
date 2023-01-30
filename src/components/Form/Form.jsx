import "../../globalstyle.css";
import "./Form.css";
import { useState } from "react";
export function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Entrada");
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setListTransactions([
      ...listTransactions,
      { description: description, value: value, type: type, id: Date.now() },
    ]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form_Container">
        <label htmlFor="description" className="labelDescription">
          Descrição
        </label>

        <input
          type="text"
          className="description"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <div className="data_Container">
          <div className="inputContainer">
            <label htmlFor="valor" className="labelValue">
              Valor
            </label>
            <input
              type="number"
              className="value"
              onChange={(event) => setValue(event.target.value)}
              required
            />
          </div>
          <div className="selectContainer">
            <label htmlFor="tipo" className="labelType">
              Tipo de valor
            </label>
            <select
              name=""
              id="type"
              className="type"
              onChange={(event) => setType(event.target.value)}
              required
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <button type="submit" className="insertValue">
          Inserir Valor
        </button>
      </div>
    </form>
  );
}
