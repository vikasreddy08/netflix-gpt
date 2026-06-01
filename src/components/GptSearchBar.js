import { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const selectedLangKey = useSelector((store) => store.appConfig.lang);
  const searchTextRef = useRef(null);
  const dispatch = useDispatch();

  //search movie in TMDB

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    // const gptQuery =
    //   "Act as a movie recommendation system adn suggest some movies for the query: " +
    //   searchTextRef.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example result: Sholay , Gadar , Don, The Quiet Place, Inception";
    // // make api call to open ai api and get movie results.
    // const gptResponse = await openai.chat.completions.create({
    //   model: "GPT-4o-mini",
    //   messages: [{ role: "user", content: gptQuery }],
    // });
    // console.log(
    //   "🚀 ~ handleGPTSearch ~ gptResponse:",
    //   gptResponse.choices?.[0].message?.content,
    // );

    // if (!gptResponse.choices) {
    //   // TODO : Write error handling
    // }

    // const gptResponseMovies =
    //   gptResponse.choices?.[0].message?.content.split(",");

    const mockResponse = [
      //mock response as api need some money to make it working
      "The quiet place",
      "Avengers",
      "Saving Private Ryan",
      "Fury",
      "Inception",
    ];

    const promiseArray = mockResponse.map((movieName) =>
      searchMovieTMDB(movieName),
    );

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGPTMovieResult({
        movieNames: mockResponse,
        movieResults: tmdbResults,
      }),
    );
  };

  return (
    <div className="md:pt-[12%] pt-[30%] flex justify-center">
      <form
        className=" bg-black w-full md:w-1/2 grid grid-cols-12 bg-opacity-50"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchTextRef}
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLangKey].gptSearchPlaceHolder}
        />
        <button
          className="m-4 py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearch}
        >
          {lang[selectedLangKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
