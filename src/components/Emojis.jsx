import React from "react";
import PropTypes from "prop-types";
import EmojisBox from "./EmojisBox";
import { useState, useEffect } from "react";
import { filterEmojis } from "../utils/filterEmojis";

const Emojis = ({ emojisData, searchText }) => {
  const [filteredEmoji, setFilteredEmoji] = useState([]);
  useEffect(() => {
    setFilteredEmoji(
      filterEmojis({
        emojisData,
        searchText,
      })
    );
  }, [emojisData, searchText]);

  return (
    <div className="m-4 pb-4 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-8 gap-4">
      {filteredEmoji.map((data, index) => (
        <EmojisBox key={index} title={data.title} symbol={data.symbol} />
      ))}
    </div>
  );
};

Emojis.propTypes = {
  emojisData: PropTypes.array,
  searchText: PropTypes.string,
};

export default Emojis;
