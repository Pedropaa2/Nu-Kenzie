import kenzie from "./components/Assets/Kenzie.svg";
import kenzie2 from "./components/Assets/Kenzie2.svg";
import aside from "./components/Assets/homePageImage.svg";
import lixeira from "./components/Assets/trash.svg";
import { useState } from "react";
import { Form } from "./components/formulario";
import { Header } from "./components/header";
import { HomePage } from "./components/homePage";
import { Lista } from "./components/lista";
import { TotalMoney } from "./components/total";
import "./App.css";
function App() {
  const [logedInfo, setLogedInfo] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  function remove(id) {
    const newListTransactions = listTransactions.filter(
      (lista) => lista.id !== id
    );

    setListTransactions(newListTransactions);
  }

  function login() {
    setLogedInfo(true);
  }
  function logout() {
    setLogedInfo(false);
  }
  return (
    <div className="App">
      {!logedInfo ? (
        <HomePage login={login} kenzie={kenzie} aside={aside} />
      ) : (
        <div>
          <Header logout={logout} kenzie={kenzie2} />
          <main>
            <div className="formAndTotal">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <Lista
              listTransactions={listTransactions}
              lixeira={lixeira}
              remove={remove}
            />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
