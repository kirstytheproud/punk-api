import React from 'react'
import "./CardContainer.scss"
import BeerCard from '../BeerCard/BeerCard'
import beers from '../../assets/data/beers';

const CardContainer = () => {

    const allBeerCards = beers.map((beer) =>  {
        return (
          <BeerCard
            title={beer.name}
            imgSrc={beer.image_url}
            text={beer.tagline}
            description={beer.description}
          />
        );
      });
  return (
      <>
    <div className='card-container'>
        {allBeerCards}
    </div>

    </>
  )
}

export default CardContainer;
