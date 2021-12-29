import React from "react";
import PropTypes from "prop-types";

function Main({ children }) {
  return (
    <section className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
      {children}
    </section>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
