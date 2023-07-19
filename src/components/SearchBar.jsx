import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import PropTypes from "prop-types";

const SearchBar = ({ onChange, value }) => {
  //state search
  const [searchQuery, setSearchQuery] = useState("");

  //handleInput
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    onSearch(value);
  };

  //main components
  return (
    <div className="flex justify-center m-4 sticky top-6">
      <div className="p-4 m-2 rounded-md bg-white flex place-items-center">
        <BiSearchAlt2 size={18} className="mr-2" />
        <input
          type="text"
          placeholder="Find Emojis"
          className="focus:outline-0 w-[300px] text-center"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SearchBar;
