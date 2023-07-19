import PropTypes from "prop-types";

import React from "react";

const Empty = ({ text }) => {
  return <div>{text}</div>;
};

Empty.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Empty;
