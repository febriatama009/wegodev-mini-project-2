import React from "react";
import PropTypes from "prop-types";
import EmojisBox from "./EmojisBox";

const Emojis = ({ emojisData }) => {
  return (
    <div className="m-4 pb-4 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-8 gap-4">
      {emojisData.map((data, index) => (
        <EmojisBox key={index} title={data.title} symbol={data.symbol} />
      ))}
    </div>
  );
};

Emojis.propTypes = {
  emojisData: PropTypes.array,
};

export default Emojis;
