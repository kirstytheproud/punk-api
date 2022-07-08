import React from "react";
import "./BeerCard.scss";
import Button from "../Button/Button";
import { useState } from "react";
import cross from "../../assets/images/cross.png";

const BeerCard = (props) => {
  const { title, imgSrc, text, description, foodPairings } = props;
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <>
      {showDescription ? (
        <div className="beer-card__content" key={props.id}>
          <div className="beer-card__content--text">
            <img
              src={cross}
              className="beer-card__content--cross"
              alt={title}
              onClick={handleClick}
            />
            <p>{description}</p>
            <br></br>
            <h4>Food Pairings</h4>
            <p>{foodPairings}</p>
          </div>
        </div>
      ) : (
        <div className="beer-card__content" key={props.id}>
          <h2> {title} </h2>
          <img
            src={imgSrc}
            className="beer-card__content--image"
            alt={props.title}
          />
          <p className="beer-card__content--tagline">{text}</p>
          <div className="beer-card__button" onClick={handleClick}>
            <Button buttonText={"More Info"} />
          </div>
        </div>
      )}
    </>
  );
};

export default BeerCard;
