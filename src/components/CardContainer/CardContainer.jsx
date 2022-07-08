import "./CardContainer.scss";
import BeerCard from "../BeerCard/BeerCard";

const CardContainer = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((beer) => {
        return (
          <BeerCard
            title={beer.name}
            imgSrc={beer.image_url}
            text={beer.tagline}
            description={beer.description}
            key={beer.id}
          />
        );
      })}
    </div>
  );
};


export default CardContainer;
