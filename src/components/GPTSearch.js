import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className=" bg-black bg-opacity-50">
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover w-screen"
          src={BG_IMAGE_URL}
          alt="Netflix"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
