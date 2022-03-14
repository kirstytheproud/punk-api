import './App.scss';

import CardContainer from './components/CardContainer/CardContainer';
import SearchBox from './components/SearchBox/SearchBox';
import NavBar from './components/NavBar/NavBar';

import beers from './assets/data/beers';

function App() {
  
  console.log(beers);





  return (
    <>
    <div className="App">
        <p>
          Punk API Project
        </p>
  
  <div className='beer-cards'>
    <CardContainer />

  </div>
     
    </div>
  
  </>
  );
}

export default App;
