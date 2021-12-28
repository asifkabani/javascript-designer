import React from "react";
import PropTypes from "prop-types";

function Header({ children }) {
  return (
    <h2 className="font-josefinSans text-gray-600 text-3xl mb-4">{children}</h2>
  );
}

function Category({ children }) {
  return (
    <span className="text-white text-sm font-normal block rounded-t-md p-4 bg-green-600">
      {children}
    </span>
  );
}

function Date({ children }) {
  return (
    <p className="font-josefinSans text-gray-500 text-lg py-3 mb-4">
      {children}
    </p>
  );
}

function Excerpt({ children }) {
  return (
    <p className="font-josefinSans text-gray-500 text-2xl leading-8 mb-4">
      {children}
    </p>
  );
}

function Card({ children }) {
  return (
    <article className="bg-white rounded-md shadow-lg transition-shadow hover:shadow-2xl">
      {children}
    </article>
  );
}

Card.Header = Header;
Card.Category = Category;
Card.Date = Date;
Card.Excerpt = Excerpt;
Header.propTypes = {
  children: PropTypes.node.isRequired,
};
Category.propTypes = {
  children: PropTypes.node.isRequired,
};

Date.propTypes = {
  children: PropTypes.node.isRequired,
};

Excerpt.propTypes = {
  children: PropTypes.node.isRequired,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
