import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <img src={BG_IMAGE_URL} alt="Netflix" className="absolute -z-10" />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
