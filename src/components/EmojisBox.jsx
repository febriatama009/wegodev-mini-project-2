import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Toast from "./Toast";

const EmojisBox = ({ title, symbol }) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setSelected(false), 800);
    return () => clearTimeout(timer);
  }, [selected]);
  return (
    <>
      <div
        className="bg-white bg-opacity-20 shadow-lg rounded-md p-4 text-center"
        onClick={() => {
          navigator.clipboard.writeText(symbol);
          setSelected(true);
        }}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: `&#${symbol.codePointAt(0)}`,
          }}
        />
        <p className="text-white mt-2 truncate">{title}</p>
      </div>
      {selected && <Toast />}
    </>
  );
};

EmojisBox.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};

export default EmojisBox;
