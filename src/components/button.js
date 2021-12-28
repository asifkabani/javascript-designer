import React from "react";
import PropTypes from "prop-types";

function Button({ title }) {
  return (
    <button className="border-red-500 bg-transparent text-white border-4 p-1 text-sm m-2 transition-all duration-500 ease-in-out hover:bg-sky-700 after:content-[' \\27F6']">
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
