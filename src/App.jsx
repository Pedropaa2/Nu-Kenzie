import kenzie from "./components/Assets/Kenzie.svg";
import kenzie2 from "./components/Assets/Kenzie2.svg";
import aside from "./components/Assets/homePageImage.svg";
import lixeira from "./components/Assets/trash.svg";
import { useState } from "react";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/Home";
import { Lista } from "./components/List/List";
import { TotalMoney } from "./components/Total/Total";
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
