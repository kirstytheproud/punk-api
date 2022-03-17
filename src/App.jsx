import "./App.scss";
import CardContainer from "./components/CardContainer/CardContainer";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState, useEffect } from "react";
import FilterItem from "./components/FilterItem/FilterItem";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abv, setAbv] = useState();
  const [brewDate, setBrewDate] = useState();

  const beerApi = "https://api.punkapi.com/v2/beers";

  const getBeers = (ABV, classic) => {
    if (ABV === true) {
      fetch(beerApi + "?abv_gt=6")
        .then((response) => response.json())
        .then((data) => {
          setBeers(data);
        });
    } else if (classic === true) {
      fetch(beerApi + "?brewed_before=12-2010")
        .then((response) => response.json())
        .then((data) => {
          setBeers(data);
        });
    } else if (classic === true && ABV === true) {
      fetch(beerApi + "?brewed_before=12-2010&abv_gt=6")
        .then((response) => response.json())
        .then((data) => {
          setBeers(data);
          console.log(data);
        });
    } else {
      fetch(beerApi)
        .then((response) => response.json())
        .then((data) => {
          setBeers(data);
        });
    }
  };

  useEffect(() => {
    getBeers(abv, brewDate);
  }, [abv, brewDate]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(cleanInput);
  };

  const filteredSearchItems = beers.filter((beer) => {
    const filteredBeer = beer.name.toLowerCase();
    return filteredBeer.includes(searchTerm);
  });

  const filterABV = (event) => {
    console.log(event.target.checked);
    setAbv(event.target.checked);
  };

  const filterClassicRange = (event) => {
    console.log(event.target.checked);
    setBrewDate(event.target.checked);
  };

  const filterAcidic = beers.filter((beer) => {
    return beer.ph < 4;
  });

  return (
    <>
      <div className="app">
        <h1>Punk API Project</h1>
        <div className="app__nav">
          Filters:
          <FilterItem
            filterName={"High ABV (> 6.0%)"}
            handleCheckBox={filterABV}
          />
          <FilterItem
            filterName={"Classic Range"}
            handleCheckBox={filterClassicRange}
          />
          <FilterItem
            filterName={"Acidic (ph < 4)"}
            handleCheckBox={filterAcidic}
          />
          <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
        </div>
        <div className="app__main">
          <div className="beer-cards">
            <CardContainer cards={filteredSearchItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
