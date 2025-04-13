import React from "react";
import { Movie } from "../@types/common";

const Card: React.FC<Movie> = (details) => {
    if(details?.Poster === "N/A") return null
  return (
    <div className="card">
      <img src={details.Poster} alt={details.Title} />
      <h3>{details.Title}</h3>
      <h3>{details.Year}</h3>
    </div>
  );
};

export default Card;
