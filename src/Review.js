import React, { useState } from "react";
import reviews from "./data";
import { ChevronLeft, ChevronRight } from "./Functions";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { checkNumber } from "./Functions";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const moveRight = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex, reviews);
    });
  };

  const moveLeft = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex, reviews);
    });
  };

  const getRandom = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber, reviews));
  };

  return (
    <article className="review">
      <img src={image} alt="" />
      <div className="info">
        <span>
          <h2>{name}</h2>
          <p>{job}</p>
        </span>
        <p className="text">{text}</p>
        <span className="chevrons">
          <ChevronLeft onclick={moveLeft} size="2x" icon={faChevronLeft} />
          <ChevronRight onclick={moveRight} size="2x" icon={faChevronRight} />
        </span>
        <button onClick={getRandom}>Surprise Me</button>
      </div>
    </article>
  );
};

export default Review;
