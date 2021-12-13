import React from "react";
import PropTypes from "prop-types";

function Main({ children }) {
  return (
    <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
