import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

function Button({ children, to }) {
  return (
    <Link
      to={to}
      className="font-josefinSans border border-jsdPurple text-jsdPurple rounded-md p-4 text-base mt-4 transition-all hover:bg-jsdPurple hover:text-white"
    >
      {children}
    </Link>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
