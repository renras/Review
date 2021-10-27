import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const checkNumber = (number, reviews) => {
  if (number > reviews.length - 1) {
    return 0;
  }
  if (number < 0) {
    return reviews.length - 1;
  }
  return number;
};

export const ChevronLeft = (props) => {
  const { onclick, size, icon } = props;
  return (
    <FontAwesomeIcon
      className="chevron"
      onClick={onclick}
      size={size}
      icon={icon}
    />
  );
};

export const ChevronRight = (props) => {
  const { onclick, size, icon } = props;
  return (
    <FontAwesomeIcon
      className="chevron"
      onClick={onclick}
      size={size}
      icon={icon}
    />
  );
};
