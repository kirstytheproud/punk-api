import "./App.scss";

import CardContainer from "./components/CardContainer/CardContainer";
import SearchBox from "./components/SearchBox/SearchBox";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };


  return (
    <>
      <div className="App">
        <h1>Punk API Project</h1>

        <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
        <div className="beer-cards">
          <CardContainer />
        </div>
      <NavBar />
      </div>

    </>
  );
}

export default App;
