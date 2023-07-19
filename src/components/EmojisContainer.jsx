import React from "react";
import PropTypes from "prop-types";

const EmojisContainer = ({ children }) => {
  return <div>{children}</div>;
};

EmojisContainer.propTypes = {
  children: PropTypes.node,
};

export default EmojisContainer;
