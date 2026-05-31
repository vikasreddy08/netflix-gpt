import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLangKey = useSelector((store) => store.appConfig.lang);

  return (
    <div className="pt-[12%] flex justify-center">
      <form className=" bg-black w-1/2 grid grid-cols-12 bg-opacity-50">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLangKey].gptSearchPlaceHolder}
        />
        <button className="m-4 py-2 px-4 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[selectedLangKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
