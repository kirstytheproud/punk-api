import './App.scss';

import CardContainer from './components/CardContainer/CardContainer';
import SearchBox from './components/SearchBox/SearchBox';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Punk API Project
        </p>
      </header>

  
      <SearchBox />
      <CardContainer />
      <NavBar />
    </div>
  );
}

export default App;
