import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-48 w-36 pr-4">
      <img
        alt="movie card"
        src={IMG_CDN_URL + posterPath}
        // className="h-[150px] w-[250px]"
      />
    </div>
  );
};

export default MovieCard;
