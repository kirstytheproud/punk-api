import React from "react";
import "./BeerCard.scss";
import Button from "../Button/Button";
import { useState } from "react";
import cross from "../../assets/images/vector-cross-icon.png";

const BeerCard = (props) => {
  const { title, imgSrc, text, description } = props;
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    console.log("button clicked");
    setShowDescription(!showDescription);
  };

  return (
    <>
      {showDescription ? (
        <div className="beer-card__content">
          <div className="beer-card__content--text">
            <img
              src={cross}
              className="beer-card__content--cross"
              alt={title}
              onClick={handleClick}
            />
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div className="beer-card__content">
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
