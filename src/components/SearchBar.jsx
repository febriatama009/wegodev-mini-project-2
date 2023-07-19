import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="flex justify-center m-4 sticky top-6">
      <div className="p-4 m-2 rounded-md bg-white flex place-items-center">
        <BiSearchAlt2 size={18} className="mr-2" />
        <input
          type="text"
          placeholder="Find Emojis"
          className="focus:outline-0 w-[300px] text-center"
        />
      </div>
    </div>
  );
};

export default SearchBar;
