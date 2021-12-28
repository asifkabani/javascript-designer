import React from "react";
import PropTypes from "prop-types";

function Button({ children }) {
  return (
    <button className="font-josefinSans border border-jsdPurple text-jsdPurple rounded-md p-4 text-base mt-4 transition-all hover:bg-jsdPurple hover:text-white">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
