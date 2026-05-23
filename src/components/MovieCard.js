import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img
        alt="movie card"
        src={IMG_CDN_URL + posterPath}
        // className="h-[150px] w-[250px]"
      />
    </div>
  );
};

export default MovieCard;
